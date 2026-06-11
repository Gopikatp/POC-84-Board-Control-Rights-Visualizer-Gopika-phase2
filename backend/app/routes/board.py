from fastapi import APIRouter
import json

router = APIRouter(prefix="/api")

from app.services.edgar_adapter import (
    load_company_data
)

data = load_company_data()


@router.get("/companies")
def get_companies():
    return data


@router.get("/metrics")
def get_metrics():

    founder_controlled = sum(
        1
        for company in data
        if company["founder_seats"]
        > company["investor_seats"]
    )

    investor_controlled = sum(
        1
        for company in data
        if company["investor_seats"]
        > company["founder_seats"]
    )

    balanced_governance = sum(
        1
        for company in data
        if company["investor_seats"]
        == company["founder_seats"]
    )

    return {
        "companies": len(data),
        "founder_controlled": founder_controlled,
        "investor_controlled": investor_controlled,
        "balanced_governance": balanced_governance,
    }


@router.get("/rights")
def get_rights():
    return [
        "budget_approval",
        "new_financing",
        "board_approval",
        "acquisition_approval",
    ]