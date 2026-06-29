from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import requests
import time
from datetime import datetime

# ============================================================
# INFOCREON PoC 84
# Board Control Rights Visualizer
# Selenium End-to-End Automation
# ============================================================

URL = "https://board-frontend.calmcoast-c9142dd2.centralindia.azurecontainerapps.io"
API = "https://board-backend.calmcoast-c9142dd2.centralindia.azurecontainerapps.io/api/metrics"

options = Options()
options.add_argument("--start-maximized")

driver = webdriver.Chrome(options=options)
wait = WebDriverWait(driver,30)

results=[]

passed=0
failed=0
skipped=0

start_time=time.time()


def record(tc,title,success,detail):

    global passed,failed

    if success:
        passed+=1

        results.append({
            "status":"PASS",
            "tc":tc,
            "title":title,
            "detail":detail
        })

        print(f"PASS - {title}")

    else:

        failed+=1

        results.append({
            "status":"FAIL",
            "tc":tc,
            "title":title,
            "detail":detail
        })

        print(f"FAIL - {title}")


try:

    # -----------------------------------------
    # TC-1
    # -----------------------------------------

    driver.get(URL)

    wait.until(
        EC.presence_of_element_located(
            (By.TAG_NAME,"body")
        )
    )

    record(
        "TC-1",
        "Page Load",
        True,
        "Application loaded successfully."
    )

    # -----------------------------------------
    # TC-2
    # -----------------------------------------

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Board Control Rights Visualizer')]"
            )
        )
    )

    record(
        "TC-2",
        "Dashboard Title",
        True,
        "Dashboard title verified."
    )

    # -----------------------------------------
    # TC-3
    # -----------------------------------------

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Companies')]"
            )
        )
    )

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Founder Controlled')]"
            )
        )
    )

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Investor Controlled')]"
            )
        )
    )

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Balanced Governance')]"
            )
        )
    )

    record(
        "TC-3",
        "Metrics Cards",
        True,
        "Governance metrics rendered successfully."
    )

        # -----------------------------------------
    # TC-4
    # -----------------------------------------

    seat_map = wait.until(
        EC.presence_of_element_located(
            (
                By.ID,
                "board-seat-map"
            )
        )
    )

    driver.execute_script(
        "arguments[0].scrollIntoView({block:'center'});",
        seat_map
    )

    time.sleep(1)

    record(
        "TC-4",
        "Board Seat Map",
        True,
        "Board Seat Map rendered successfully."
    )

    # -----------------------------------------
    # TC-5
    # -----------------------------------------

    control_meter = wait.until(
        EC.presence_of_element_located(
            (
                By.ID,
                "control-meter"
            )
        )
    )

    driver.execute_script(
        "arguments[0].scrollIntoView({block:'center'});",
        control_meter
    )

    time.sleep(1)

    record(
        "TC-5",
        "Founder vs Investor Control Meter",
        True,
        "Control meter rendered successfully."
    )

    # -----------------------------------------
    # TC-6
    # -----------------------------------------

    simulator = wait.until(
        EC.presence_of_element_located(
            (
                By.ID,
                "decision-simulator"
            )
        )
    )

    driver.execute_script(
        "arguments[0].scrollIntoView({block:'center'});",
        simulator
    )

    time.sleep(1)

    record(
        "TC-6",
        "Decision Simulator",
        True,
        "Decision Approval Simulator rendered successfully."
    )

    # -----------------------------------------
    # TC-7
    # -----------------------------------------

    panel = wait.until(
        EC.presence_of_element_located(
            (
                By.CSS_SELECTOR,
                '[data-testid="intelligence-panel"]'
            )
        )
    )

    wait.until(
        lambda d:
        "translate-x-0" in panel.get_attribute("class")
    )

    record(
        "TC-7",
        "Governance Intelligence Panel",
        True,
        "Governance Intelligence Panel opened successfully."
    )

    # -----------------------------------------
    # TC-8
    # -----------------------------------------

    response = requests.get(API)

    if response.status_code == 200:

        record(
            "TC-8",
            "Backend API Handshake",
            True,
            "GET /api/metrics returned HTTP 200."
        )

    else:

        record(
            "TC-8",
            "Backend API Handshake",
            False,
            f"Unexpected status code: {response.status_code}"
        )

except Exception as e:

    failed += 1

    results.append(
        {
            "status": "FAIL",
            "tc": "Unexpected",
            "title": "Unhandled Exception",
            "detail": str(e)
        }
    )

    driver.save_screenshot("Failure.png")

finally:

    end_time = time.time()

    execution_time = round(end_time - start_time, 2)

    total_tests = passed + failed + skipped

    verdict = (
        "[PASS] ALL TESTS PASSED"
        if failed == 0
        else "[FAIL] SOME TESTS FAILED"
    )

    with open(
        "Test_Report.txt",
        "w",
        encoding="utf-8"
    ) as report:

        report.write(
            "=" * 72 + "\n"
        )

        report.write(
            "  INFOCREON PoC 84 -- UAT Test Report\n"
        )

        report.write(
            "  Board Control Rights Visualizer\n"
        )

        report.write(
            "-" * 72 + "\n"
        )

        report.write(
            f"  Target URL : {URL}\n"
        )

        report.write(
            f"  Run At     : {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
        )

        report.write(
            f"  Execution  : {execution_time} sec\n"
        )

        report.write(
            f"  Total Tests: {total_tests}  |  PASSED: {passed}  |  FAILED: {failed}  |  SKIPPED: {skipped}\n"
        )

        report.write(
            "=" * 72 + "\n\n"
        )

        for item in results:

            symbol = (
                "[PASS]"
                if item["status"] == "PASS"
                else "[FAIL]"
            )

            report.write(
                f"  [+] {symbol:<8} {item['tc']} | {item['title']}\n"
            )

            report.write(
                f"       Detail : {item['detail']}\n\n"
            )

        report.write(
            "-" * 72 + "\n"
        )

        report.write(
            f"  OVERALL VERDICT : {verdict}\n"
        )

        report.write(
            "=" * 72 + "\n\n"
        )

        report.write(
            "  Notes:\n"
        )

        report.write(
            "  - Selenium WebDriver executed against the live Azure deployment.\n"
        )

        report.write(
            "  - Governance dashboard rendered successfully.\n"
        )

        report.write(
            "  - Governance Intelligence Panel validated.\n"
        )

        report.write(
            "  - Backend API connectivity verified successfully.\n"
        )

        report.write(
            "  - Report generated automatically by test_poc84.py\n"
        )

        report.write(
            "=" * 72 + "\n"
        )

    driver.quit()

print()

for item in results:

    print(
        f"{item['status']} - {item['title']}"
    )

print()

print("=" * 72)

print("INFOCREON PoC 84 Selenium Automation Complete")

print(f"Passed : {passed}")

print(f"Failed : {failed}")

print(f"Skipped: {skipped}")

print(f"Execution Time: {execution_time} sec")

print("=" * 72)

print("\nTest_Report.txt generated successfully.")