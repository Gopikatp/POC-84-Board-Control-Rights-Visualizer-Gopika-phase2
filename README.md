# Board Control Rights Visualizer

![Dashboard Preview](screenshots/dashboard.png)

## Overview

Board Control Rights Visualizer is a governance intelligence dashboard designed to analyze how board composition, investor rights, and governance structures influence decision-making within venture-backed companies.

Built as part of the Real Rails Intelligence Library, the platform focuses on the **Capital Formation rail**, helping users understand how control shifts between founders and investors as companies grow through successive funding rounds.

Using governance datasets inspired by board-control structures commonly referenced in SEC EDGAR disclosures, the dashboard transforms complex governance concepts into intuitive visual analytics that can be understood by founders, investors, operators, and allocators.

---

## Problem Statement

In venture-backed companies, ownership percentage alone does not determine control.

Board seats, voting rights, protective provisions, and governance agreements often have a greater influence on strategic decisions such as:

* Raising new financing
* Acquisitions and mergers
* Executive leadership changes
* Board expansion
* Budget approvals

Understanding who truly controls a company can be difficult because governance information is fragmented across legal agreements and disclosure documents.

This dashboard provides a centralized view of governance structures and decision-making power.

---

## Objectives

The platform is designed to:

* Visualize board composition and control dynamics
* Compare founder and investor influence
* Analyze governance concentration and balance
* Simulate decision approval scenarios
* Highlight governance risks and alerts
* Explain why governance structures matter during capital formation

---

## Key Features

### Board Seat Map

Visual representation of governance composition across:

* Founder Seats
* Investor Seats
* Independent Director Seats

### Voting Power Breakdown

Calculates and displays voting influence percentages for each governance group.

### Board Majority Analysis

Determines:

* Total board seats
* Majority threshold
* Current controlling group

### Founder vs Investor Control Meter

Compares governance influence between founders and investors through an intuitive control score.

### Governance Health Score

Evaluates governance balance based on:

* Board composition
* Independent representation
* Governance concentration

### Decision Approval Simulator

Simulates governance outcomes for:

* Budget Approval
* New Financing
* Acquisition Approval
* Board Expansion

### Scenario Compare

Compares current governance structures with proposed board configurations to evaluate control changes.

### Governance Timeline

Illustrates how governance structures evolve across:

* Seed Round
* Series A
* Series B
* IPO

### Protective Rights Checklist

Tracks governance rights including:

* Budget Approval
* Financing Approval
* Board Approval
* Acquisition Approval

### Governance Intelligence Sidebar

Provides contextual insights through:

* Why This Matters
* Who Controls The Rail
* Governance Intelligence
* Governance Alerts
* Dataset Summary
* Source Context

### Download Sample Data

Allows users to export governance records for further analysis.

---

## Data Sources

### Reference Source

* SEC EDGAR governance disclosures

### Demonstration Dataset

This project uses clearly labeled synthetic governance datasets to simulate:

* Board compositions
* Control structures
* Governance rights
* Investor influence scenarios

Synthetic data is used because public event-level governance feeds are not available.

---

## Dashboard Architecture

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* Recharts

### Backend

* FastAPI
* Python

### Architecture Flow

Governance Dataset

↓

FastAPI APIs

↓

Next.js Dashboard

↓

Governance Intelligence Visualizations

↓

User Interaction & Analysis

---

## Project Structure

```text
POC-84-Board-Control-Rights-Visualizer-Gopika
│
├── backend
├── frontend
├── screenshots
├── README.md
├── VAR_REPORT.md
├── UAT_CHECKLIST.md
└── .gitignore
```

---

## API Endpoints

### Metrics

```http
GET /api/metrics
```

Returns:

* Total Companies
* Founder Controlled Companies
* Investor Controlled Companies

### Companies

```http
GET /api/companies
```

Returns governance records and board composition data.

---

## Local Setup

### Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Runs on:

```text
http://localhost:8000
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on:

```text
http://localhost:3000
```

---

## Validation

The repository includes:

* VAR_REPORT.md
* UAT_CHECKLIST.md

These documents validate dashboard quality, visualization standards, functionality, and user acceptance testing.

---

## Author

**Gopika T P**

**POC 84 – Board Control Rights Visualizer**
