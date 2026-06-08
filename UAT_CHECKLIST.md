# UAT Checklist – Board Control Rights Visualizer

## Project Information

**Project:** Board Control Rights Visualizer

**POC:** POC 84

**Rail:** Capital Formation

**Author:** Gopika T P

---

# User Acceptance Test Cases

## Dashboard Initialization

| Test Case          | Expected Result                                                    | Status |
| ------------------ | ------------------------------------------------------------------ | ------ |
| Dashboard Loads    | Dashboard renders successfully without errors                      | PASS   |
| Metrics Cards Load | Companies, Founder Controlled, Investor Controlled metrics visible | PASS   |
| Sidebar Loads      | Intelligence sidebar renders correctly                             | PASS   |
| Responsive Layout  | Dashboard remains usable across screen sizes                       | PASS   |

---

## Company Filter Validation

| Test Case                           | Expected Result                                     | Status |
| ----------------------------------- | --------------------------------------------------- | ------ |
| Company Filter Available            | Dropdown displays available companies               | PASS   |
| Company Selection Updates Dashboard | Visualizations update correctly                     | PASS   |
| Company Selection Updates Sidebar   | Sidebar intelligence updates correctly              | PASS   |
| Multiple Company Switching          | Dashboard remains stable during repeated selections | PASS   |

---

## Board Seat Map Validation

| Test Case                   | Expected Result                    | Status |
| --------------------------- | ---------------------------------- | ------ |
| Pie Chart Renders           | Board Seat Map chart visible       | PASS   |
| Founder Seats Displayed     | Founder seat allocation shown      | PASS   |
| Investor Seats Displayed    | Investor seat allocation shown     | PASS   |
| Independent Seats Displayed | Independent seat allocation shown  | PASS   |
| Dynamic Updates             | Chart updates when company changes | PASS   |

---

## Voting Power Breakdown Validation

| Test Case                           | Expected Result                | Status |
| ----------------------------------- | ------------------------------ | ------ |
| Founder Voting Power Calculated     | Percentage displayed correctly | PASS   |
| Investor Voting Power Calculated    | Percentage displayed correctly | PASS   |
| Independent Voting Power Calculated | Percentage displayed correctly | PASS   |
| Dynamic Updates                     | Percentages update correctly   | PASS   |

---

## Board Majority Analysis Validation

| Test Case                      | Expected Result                           | Status |
| ------------------------------ | ----------------------------------------- | ------ |
| Total Seats Calculation        | Total board seats calculated correctly    | PASS   |
| Majority Threshold Calculation | Majority requirement calculated correctly | PASS   |
| Majority Classification        | Governance majority identified correctly  | PASS   |
| Dynamic Updates                | Analysis updates correctly                | PASS   |

---

## Founder vs Investor Control Meter Validation

| Test Case                  | Expected Result                              | Status |
| -------------------------- | -------------------------------------------- | ------ |
| Founder Influence Visible  | Founder control displayed correctly          | PASS   |
| Investor Influence Visible | Investor control displayed correctly         | PASS   |
| Seat-Based Calculation     | Control percentages derived from board seats | PASS   |
| Dynamic Updates            | Meter updates when company changes           | PASS   |

---

## Governance Health Score Validation

| Test Case                         | Expected Result                         | Status |
| --------------------------------- | --------------------------------------- | ------ |
| Governance Score Visible          | Score displayed correctly               | PASS   |
| Governance Classification Visible | Governance status displayed             | PASS   |
| Dynamic Updates                   | Score updates based on selected company | PASS   |

---

## Decision Approval Simulator Validation

| Test Case             | Expected Result                           | Status |
| --------------------- | ----------------------------------------- | ------ |
| Simulator Visible     | Simulator renders correctly               | PASS   |
| Budget Approval Logic | Uses 50% approval threshold               | PASS   |
| New Financing Logic   | Uses financing-specific threshold         | PASS   |
| Acquisition Logic     | Uses acquisition-specific threshold       | PASS   |
| Board Expansion Logic | Uses expansion-specific threshold         | PASS   |
| Threshold Calculation | Vote threshold updates by decision type   | PASS   |
| Result Display        | Approval or rejection displayed correctly | PASS   |

---

## Scenario Compare Validation

| Test Case                     | Expected Result                              | Status |
| ----------------------------- | -------------------------------------------- | ------ |
| Current Governance Displayed  | Current board structure visible              | PASS   |
| Proposed Governance Displayed | Proposed board structure visible             | PASS   |
| Dynamic Scenario Generation   | Scenario changes based on company governance | PASS   |
| Governance Impact Visible     | Net control shift displayed                  | PASS   |

---

## Governance Timeline Validation

| Test Case                 | Expected Result                            | Status |
| ------------------------- | ------------------------------------------ | ------ |
| Timeline Visible          | Governance timeline displayed              | PASS   |
| Current Stage Highlighted | Selected company stage highlighted         | PASS   |
| Seed Stage Supported      | Stage rendered correctly                   | PASS   |
| Series A Supported        | Stage rendered correctly                   | PASS   |
| Series B Supported        | Stage rendered correctly                   | PASS   |
| IPO Supported             | Stage rendered correctly                   | PASS   |
| Dynamic Updates           | Timeline updates based on selected company | PASS   |

---

## Protective Rights Validation

| Test Case                | Expected Result                    | Status |
| ------------------------ | ---------------------------------- | ------ |
| Rights Checklist Visible | Governance rights displayed        | PASS   |
| Budget Approval Rights   | Displayed correctly                | PASS   |
| Financing Rights         | Displayed correctly                | PASS   |
| Board Approval Rights    | Displayed correctly                | PASS   |
| Acquisition Rights       | Displayed correctly                | PASS   |
| Dynamic Updates          | Rights update when company changes | PASS   |

---

## Governance Intelligence Validation

| Test Case                       | Expected Result                   | Status |
| ------------------------------- | --------------------------------- | ------ |
| Why This Matters Visible        | Governance context displayed      | PASS   |
| Who Controls The Rail Visible   | Rail explanation displayed        | PASS   |
| Governance Intelligence Visible | Governance insights displayed     | PASS   |
| Governance Impact Visible       | Governance impact displayed       | PASS   |
| Dataset Summary Visible         | Governance statistics displayed   | PASS   |
| Source Context Visible          | Data-source explanation displayed | PASS   |

---

## Governance Alerts Validation

| Test Case                  | Expected Result                      | Status |
| -------------------------- | ------------------------------------ | ------ |
| Governance Alerts Visible  | Alert panel displayed                | PASS   |
| Investor Majority Alert    | Appears when majority exists         | PASS   |
| Protective Rights Alert    | Appears when rights exist            | PASS   |
| Independent Director Alert | Appears when independent seats exist | PASS   |
| Dynamic Updates            | Alerts update by company             | PASS   |

---

## Dataset Summary Validation

| Test Case                 | Expected Result                 | Status |
| ------------------------- | ------------------------------- | ------ |
| Company Count Visible     | API company count displayed     | PASS   |
| Founder Controlled Count  | API founder count displayed     | PASS   |
| Investor Controlled Count | API investor count displayed    | PASS   |
| Dynamic Metrics           | Summary populated from API data | PASS   |

---

## Export Validation

| Test Case            | Expected Result                        | Status |
| -------------------- | -------------------------------------- | ------ |
| JSON Export Visible  | JSON download button visible           | PASS   |
| CSV Export Visible   | CSV download button visible            | PASS   |
| JSON Export Works    | Governance JSON downloads successfully | PASS   |
| CSV Export Works     | Structured CSV downloads successfully  | PASS   |
| Export Content Valid | Exported data matches selected company | PASS   |

---

## Tooltip Validation

| Test Case                | Expected Result                 | Status |
| ------------------------ | ------------------------------- | ------ |
| Tooltip Displays         | Tooltip appears on hover        | PASS   |
| Tooltip Content Accurate | Information displayed correctly | PASS   |

---

## API Validation

| Test Case          | Expected Result                       | Status |
| ------------------ | ------------------------------------- | ------ |
| GET /api/metrics   | Metrics returned successfully         | PASS   |
| GET /api/companies | Company dataset returned successfully | PASS   |
| GET /api/rights    | Rights dataset returned successfully  | PASS   |
| Response Time      | Data loads without noticeable delay   | PASS   |

---

## Adapter & Fallback Validation

| Test Case                   | Expected Result                                        | Status |
| --------------------------- | ------------------------------------------------------ | ------ |
| Governance Adapter Loads    | Adapter service initializes                            | PASS   |
| Fallback Trigger Works      | Synthetic data loaded when external source unavailable | PASS   |
| Data Source Label Available | Source identification available in records             | PASS   |

---

# Final Acceptance Criteria

## Functional Requirements

* Dashboard loads successfully
* Governance analytics operate correctly
* Interactive filtering works
* Governance simulations execute correctly
* Intelligence panels update dynamically
* Timeline updates dynamically
* Alerts update dynamically
* Export functionality works
* Visualizations render correctly

**Status:** PASS

---

## User Experience Requirements

* Clear visual hierarchy
* Consistent Real Rails design language
* Obsidian theme compliance (#030712)
* Responsive dashboard layout
* Intuitive navigation and interaction

**Status:** PASS

---

# Final Result

All governance intelligence, visualization, analytics, simulation, filtering, export, adapter-layer, and interaction requirements have been successfully tested and validated.

**Overall UAT Status: PASS**
