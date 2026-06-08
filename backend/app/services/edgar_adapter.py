import json
import requests


def fetch_edgar_data():
    """
    Placeholder SEC EDGAR adapter.

    Future implementation:
    - Fetch governance filings
    - Parse board composition
    - Extract governance rights

    Returns:
        None when external governance data
        is unavailable.
    """

    try:
        response = requests.get(
            "https://www.sec.gov",
            timeout=5
        )

        if response.status_code == 200:

            # Future parsing logic goes here

            return None

    except Exception:
        return None

    return None


def load_company_data():

    try:

        edgar_data = fetch_edgar_data()

        if edgar_data:
            return edgar_data

        raise Exception(
            "No EDGAR governance data available"
        )

    except Exception:

        with open(
            "app/mock_data/board_data.json",
            "r"
        ) as f:

            companies = json.load(f)

        for company in companies:

            company["data_source"] = (
                "synthetic_fallback"
            )

        return companies