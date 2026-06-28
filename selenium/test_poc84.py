from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import requests
import time

URL = "https://board-frontend.calmcoast-c9142dd2.centralindia.azurecontainerapps.io"
API = "https://board-backend.calmcoast-c9142dd2.centralindia.azurecontainerapps.io/api/metrics"

results = []

options = Options()
options.add_argument("--start-maximized")

driver = webdriver.Chrome(options=options)
wait = WebDriverWait(driver, 30)

try:

    driver.get(URL)

    wait.until(
        EC.presence_of_element_located(
            (By.TAG_NAME, "body")
        )
    )

    results.append("PASS - Page Loaded")

    wait.until(
        EC.presence_of_element_located(
            (
                By.XPATH,
                "//*[contains(text(),'Board Control Rights Visualizer')]"
            )
        )
    )

    results.append("PASS - Dashboard Title")

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

    results.append("PASS - Metrics Cards")

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

    results.append("PASS - Board Seat Map")

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

    results.append("PASS - Control Meter")

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

    results.append("PASS - Decision Simulator")

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

    results.append("PASS - Intelligence Panel Opened")

    response = requests.get(API)

    if response.status_code == 200:
        results.append("PASS - Backend API")
    else:
        results.append("FAIL - Backend API")

except Exception as e:

    results.append(f"FAIL - {e}")

    driver.save_screenshot("Failure.png")

finally:

    with open("Test_Report.txt", "w") as report:

        report.write("POC 84 Selenium Test Report\n")
        report.write("=" * 45 + "\n\n")

        for item in results:
            report.write(item + "\n")

    driver.quit()

print("\n".join(results))
print("\nTest_Report.txt generated.")