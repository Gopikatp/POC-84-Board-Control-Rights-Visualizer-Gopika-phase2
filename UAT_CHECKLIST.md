# UAT Checklist – Board Control Rights Visualizer

## Project Information

**Project:** Board Control Rights Visualizer

**POC:** POC 84

**Rail:** Capital Formation

**Author:** Gopika T P

---

## User Acceptance Test Cases

### Dashboard Initialization

| Test Case          | Expected Result                                                    | Status |
| ------------------ | ------------------------------------------------------------------ | ------ |
| Dashboard Loads    | Dashboard renders successfully without errors                      | PASS   |
| Metrics Cards Load | Companies, Founder Controlled, Investor Controlled metrics visible | PASS   |
| Sidebar Loads      | Intelligence sidebar renders correctly                             | PASS   |
| Responsive Layout  | Dashboard remains usable across screen sizes                       | PASS   |

---

### Company Filter Validation

| Test Case                           | Expected Result                                            | Status |
| ----------------------------------- | ---------------------------------------------------------- | ------ |
| Company Filter Available            | Dropdown displays available companies                      | PASS   |
| Company Selection Updates Dashboard | Dashboard visualizations update correctly                  | PASS   |
| Company Selection Updates Sidebar   | Sidebar intelligence updates correctly                     | PASS   |
| Multiple Company Switching          | Dashboard remains stable during repeated selection changes | PASS   |

---

### Board Seat Map Validation

| Test Case                   | Expected Result                       | Status |
| --------------------------- | ------------------------------------- | ------ |
| Pie Chart Renders           | Board Seat Map chart visible          | PASS   |
| Founder Seats Displayed     | Founder seat allocation shown         | PASS   |
| Investor Seats Displayed    | Investor seat allocation shown        | PASS   |
| Independent Seats Displayed | Independent director allocation shown | PASS   |
| Chart Updates Dynamically   | Chart updates when company changes    | PASS   |

---

### Voting Power Breakdown Validation

| Test Case                           | Expected Result                                   | Status |
| ----------------------------------- | ------------------------------------------------- | ------ |
| Founder Voting Power Calculated     | Percentage displayed correctly                    | PASS   |
| Investor Voting Power Calculated    | Percentage displayed correctly                    | PASS   |
| Independent Voting Power Calculated | Percentage displayed correctly                    | PASS   |
| Dynamic Updates                     | Percentages update correctly when company changes | PASS   |

---

### Board Majority Analysis Validation

| Test Case                      | Expected Result                           | Status |
| ------------------------------ | ----------------------------------------- | ------ |
| Total Seats Calculation        | Total board seats calculated correctly    | PASS   |
| Majority Threshold Calculation | Majority requirement calculated correctly | PASS   |
| Majority Classification        | Governance majority identified correctly  | PASS   |
| Dynamic Updates                | Analysis updates when company changes     | PASS   |

---

### Founder vs Investor Control Meter Validation

| Test Case                    | Expected Result                        | Status |
| ---------------------------- | -------------------------------------- | ------ |
| Founder Control Visible      | Founder influence displayed correctly  | PASS   |
| Investor Control Visible     | Investor influence displayed correctly | PASS   |
| Control Percentages Accurate | Percentages calculated correctly       | PASS   |
| Dynamic Updates              | Meter updates when company changes     | PASS   |

---

### Governance Health Score Validation

| Test Case                         | Expected Result                         | Status |
| --------------------------------- | --------------------------------------- | ------ |
| Health Score Visible              | Governance score displayed              | PASS   |
| Governance Classification Visible | Governance status displayed             | PASS   |
| Score Updates Dynamically         | Score updates based on selected company | PASS   |

---

### Decision Approval Simulator Validation

| Test Case                  | Expected Result                           | Status |
| -------------------------- | ----------------------------------------- | ------ |
| Simulator Visible          | Decision simulator renders correctly      | PASS   |
| Budget Approval Scenario   | Simulation executes successfully          | PASS   |
| New Financing Scenario     | Simulation executes successfully          | PASS   |
| Acquisition Scenario       | Simulation executes successfully          | PASS   |
| Board Expansion Scenario   | Simulation executes successfully          | PASS   |
| Vote Threshold Calculation | Approval logic calculates correctly       | PASS   |
| Result Display             | Approval or rejection displayed correctly | PASS   |

---

### Scenario Compare Validation

| Test Case                     | Expected Result                   | Status |
| ----------------------------- | --------------------------------- | ------ |
| Current Governance Displayed  | Current board structure visible   | PASS   |
| Proposed Governance Displayed | Proposed board structure visible  | PASS   |
| Governance Comparison Visible | Side-by-side comparison displayed | PASS   |

---

### Governance Timeline Validation

| Test Case            | Expected Result               | Status |
| -------------------- | ----------------------------- | ------ |
| Timeline Visible     | Governance timeline displayed | PASS   |
| Seed Stage Displayed | Stage visible                 | PASS   |
| Series A Displayed   | Stage visible                 | PASS   |
| Series B Displayed   | Stage visible                 | PASS   |
| IPO Stage Displayed  | Stage visible                 | PASS   |

---

### Protective Rights Validation

| Test Case                          | Expected Result             | Status |
| ---------------------------------- | --------------------------- | ------ |
| Rights Checklist Visible           | Governance rights displayed | PASS   |
| Budget Approval Right Visible      | Right displayed correctly   | PASS   |
| Financing Approval Right Visible   | Right displayed correctly   | PASS   |
| Board Approval Right Visible       | Right displayed correctly   | PASS   |
| Acquisition Approval Right Visible | Right displayed correctly   | PASS   |

---

### Governance Intelligence Validation

| Test Case                       | Expected Result               | Status |
| ------------------------------- | ----------------------------- | ------ |
| Why This Matters Visible        | Context panel displayed       | PASS   |
| Who Controls The Rail Visible   | Rail explanation displayed    | PASS   |
| Governance Intelligence Visible | Governance insights displayed | PASS   |
| Dataset Summary Visible         | Dataset statistics displayed  | PASS   |
| Source Context Visible          | SEC EDGAR context displayed   | PASS   |

---

### Governance Alerts Validation

| Test Case                  | Expected Result                         | Status |
| -------------------------- | --------------------------------------- | ------ |
| Governance Alerts Visible  | Alert panel displayed                   | PASS   |
| Investor Majority Alert    | Alert displayed when applicable         | PASS   |
| Governance Risk Alerts     | Alert displayed when applicable         | PASS   |
| Independent Director Alert | Alert displayed when applicable         | PASS   |
| Dynamic Updates            | Alerts update based on selected company | PASS   |

---

### Export Validation

| Test Case               | Expected Result                     | Status |
| ----------------------- | ----------------------------------- | ------ |
| Download Button Visible | Export control visible              | PASS   |
| Download Sample Data    | JSON file downloads successfully    | PASS   |
| Export Content Valid    | Downloaded governance data is valid | PASS   |

---

### Tooltip Validation

| Test Case                | Expected Result             | Status |
| ------------------------ | --------------------------- | ------ |
| Tooltip Displays         | Tooltip appears on hover    | PASS   |
| Tooltip Content Accurate | Tooltip information correct | PASS   |

---

### API Validation

| Test Case          | Expected Result                         | Status |
| ------------------ | --------------------------------------- | ------ |
| GET /api/metrics   | Metrics returned successfully           | PASS   |
| GET /api/companies | Company dataset returned successfully   | PASS   |
| API Response Time  | Responses load without noticeable delay | PASS   |

---

## Final Acceptance Criteria

### Functional Requirements

* Dashboard loads successfully
* Governance analytics operate correctly
* Interactive filtering works
* Governance simulations execute correctly
* Intelligence panels update dynamically
* Export functionality works
* Visualizations render correctly

**Status:** PASS

---

### User Experience Requirements

* Clear visual hierarchy
* Consistent Real Rails design language
* Obsidian theme compliance (#030712)
* Responsive dashboard layout
* Intuitive navigation and interaction

**Status:** PASS

---

## Final Result

All governance intelligence, visualization, analytics, simulation, filtering, export, and interaction requirements have been successfully tested and validated.

**Overall UAT Status: PASS**
