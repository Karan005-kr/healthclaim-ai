# ClaimShield AI
## AI-Powered Healthcare Claim Fraud Detection & Intelligence Platform

**Team Name:** Black Pearl  
**Team Members:** Karan, Kunal, Yash

---

## 1. Project Overview

**ClaimShield AI** is a healthcare claim fraud intelligence platform designed to help insurance investigators identify suspicious claims faster and understand **why** a claim needs review.

Instead of giving only a simple **Fraud / Genuine** output, ClaimShield AI provides:

- a **0–100 risk score**
- an **explainable reason** behind the score
- suspicious **provider behavior**
- connected **fraud-network patterns**
- a **human feedback loop** for future learning

> **Core idea:** Detect → Explain → Connect → Review → Learn

---

## 2. Problem Statement

Healthcare insurance companies process a large number of claims every day. Among genuine claims, fraudulent or suspicious claims may include:

- duplicate billing
- unusually high claim amounts
- diagnosis / procedure mismatch
- incomplete or inconsistent documentation
- suspicious provider history
- repeated claims in a short period
- identity or policy inconsistencies
- coordinated fraud involving multiple providers or patients

The main challenge is that fraud is often **not visible in one claim alone**. Suspicious behavior may be spread across multiple claims, providers, patients, and billing patterns.

Manual review of every claim is slow and inefficient.

### The real problem

> **Which claims deserve attention, why are they suspicious, and are they connected to a larger fraud pattern?**

---

## 3. Our Solution

ClaimShield AI analyzes claim information and generates a **review-priority risk score**.

### Risk Levels

| Score | Risk Level | Suggested Action |
|---|---|---|
| 0–34 | Low Risk | Standard processing |
| 35–69 | Medium Risk | Additional verification |
| 70–100 | High Risk | Priority human investigation |

The system also explains the strongest factors behind the result.

### Example

A claim may receive:

- Possible Duplicate: `+28`
- Provider Risk History: `+18`
- Amount Anomaly: `+16`
- Treatment Mismatch: `+16`

**Final Risk Score: 87/100 — High Review Priority**

> ClaimShield AI does **not** automatically reject a claim. It helps a human investigator decide what should be reviewed first.

---

## 4. Key Features

### 4.1 Explainable Fraud Risk Score

The system does not only say that a claim is suspicious. It explains **why** it was flagged.

This makes the output easier to understand and more useful for investigators.

### 4.2 Simple Mode & Expert Mode

**Simple Mode** uses normal-language questions so a non-technical user can understand the process.

Examples:
- Have you seen a similar claim before?
- Does the treatment match the diagnosis?
- Is anything missing from the documents?
- Does the claim amount look unusually high?

**Expert Mode** adds:
- provider risk history
- recent claim frequency
- identity / policy mismatch
- unusual billing time

### 4.3 Fraud Network Intelligence

ClaimShield AI visualizes relationships between:
- hospitals
- doctors
- patients
- claims
- providers

This helps investigators identify possible coordinated fraud patterns instead of checking every claim in isolation.

> **Traditional systems may detect a suspicious claim. ClaimShield AI aims to reveal the suspicious network behind it.**

### 4.4 Provider Risk Passport

Each provider can have an evolving risk profile containing:
- trust score
- number of claims screened
- high-risk claims
- average risk score
- common anomaly patterns
- total observed claim value

### 4.5 Human-in-the-Loop Learning

Investigators can provide feedback such as:
- Confirmed Fraud
- Genuine Claim
- Need More Review

In a production system, these decisions can become labeled training data for future model retraining.

**Flow:**  
AI Prediction → Human Review → Final Decision → Feedback → Better Future Model

### 4.6 Claims Monitoring

The platform also includes:
- claims queue
- search
- risk filtering
- sorting
- CSV import
- high-risk CSV export
- local browser persistence

---

## 5. What Makes ClaimShield AI Different?

Healthcare fraud detection already exists. Our innovation is not simply the idea of detecting fraud.

The differentiator is the **combination of multiple intelligence layers in one human-friendly workflow**.

| Basic Fraud Detection | ClaimShield AI |
|---|---|
| Fraud / Genuine | 0–100 review-priority score |
| Black-box output | Explainable reasons |
| One claim at a time | Fraud network intelligence |
| Limited provider context | Provider Risk Passport |
| Static prediction | Human feedback loop |
| Mostly analyst-focused | Simple + Expert Mode |

### Our USP

> **Detection + Explanation + Connection + Learning**

---

## 6. Current Prototype Technology

The hackathon prototype is fully frontend-based.

### Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript**
- **SVG**
- **LocalStorage**
- **CSV Import / Export**

### Why frontend-only for the hackathon?

- no backend deployment dependency
- fast and reliable live demo
- works locally
- easy for judges to test
- complete UI/UX workflow can be demonstrated

---

## 7. Current Fraud Scoring Approach

The hackathon version uses an **explainable weighted risk engine**.

Different suspicious indicators contribute different weights to the final score.

Examples:
- duplicate pattern
- claim amount anomaly
- diagnosis / procedure mismatch
- documentation quality
- provider history
- claim frequency
- identity mismatch
- billing-time anomaly

> The current scoring engine is a hackathon prototype, not a clinically validated production machine-learning model.

---

## 8. Future AI Architecture

A production version can replace the prototype scoring engine with trained ML models.

### Recommended AI Components

**XGBoost / LightGBM**  
For supervised classification on structured healthcare claim data.

**Isolation Forest**  
For anomaly detection and unknown suspicious patterns.

**Graph Analytics / Graph Neural Networks**  
For detecting connected fraud rings between providers, patients, and claims.

**SHAP**  
For explaining which features contributed most to a model prediction.

### Proposed Production Flow

```text
Healthcare Claims
        ↓
Secure Data Ingestion
        ↓
Validation & De-identification
        ↓
Feature Engineering / Feature Store
        ↓
 ┌──────────────────────────────┐
 │   Fraud Intelligence Engine  │
 │                              │
 │  XGBoost / LightGBM          │
 │  Isolation Forest            │
 │  Graph Analytics             │
 └──────────────────────────────┘
        ↓
Combined Risk Score
        ↓
SHAP / Explainability
        ↓
ClaimShield Dashboard
        ↓
Human Investigator
        ↓
Feedback & Model Retraining
```

---

## 9. Feasibility

ClaimShield AI can be integrated as an **intelligence layer** on top of an existing digital claims system.

```text
Existing Insurance Claims System
              ↓
       ClaimShield API
              ↓
       Fraud Risk Analysis
              ↓
      Investigator Dashboard
```

The insurer does not need to replace its complete infrastructure.

---

## 10. Privacy & Responsible AI

Healthcare data is sensitive.

A production deployment would require:
- de-identification
- encrypted data
- role-based access
- tokenized patient identifiers
- secure APIs
- audit logs
- bias evaluation
- regulatory compliance
- human oversight

> **Fraud Risk Score ≠ Final Fraud Verdict**

The system should prioritize claims for review, not automatically deny them.

---

## 11. Scalability & Future Scope

### Version 1
Claim-level fraud risk scoring

### Version 2
Explainable machine learning

### Version 3
Provider intelligence and trust scoring

### Version 4
Fraud network / collusion detection

### Version 5
Real-time healthcare fraud intelligence platform

### Long-Term Vision

ClaimShield AI can evolve from a claim-checking tool into a shared intelligence platform for:
- insurance companies
- TPAs
- healthcare claim processors
- hospitals
- enterprise healthcare networks

---

## 12. Business Impact

### For Insurance Companies
- better fraud prioritization
- lower unnecessary payouts
- improved investigator productivity
- better visibility into provider-level risk

### For Investigators
- fewer claims to manually review first
- clear explanations
- connected fraud context

### For Genuine Claimants
- low-risk claims can potentially move faster through normal processing

---

## 13. How to Run the Project

No backend, API key, npm package, or server is required.

1. Download or clone the project.
2. Extract the project folder.
3. Open `index.html` in a modern browser.
4. Click **Get Started**.
5. Open **Check Claim**.
6. Use the demo claim or enter your own details.
7. Analyze the claim.
8. Explore the result, fraud network, provider passport, and feedback pages.

---

## 14. Recommended Hackathon Demo Flow

1. **Landing Page** — introduce ClaimShield AI.
2. **Check Claim** — load the suspicious demo claim.
3. **Analyze Claim** — show the risk analysis flow.
4. **Result** — explain the score and top reasons.
5. **Fraud Network** — show connected suspicious entities.
6. **Provider Passport** — show provider-level risk.
7. **Human Learning** — record investigator feedback.
8. **Future Scope** — explain ML, anomaly detection, graph intelligence, and SHAP.

---

## 15. Project Structure

```text
ClaimShield AI/
│
├── index.html
├── dashboard.html
├── check-claim.html
├── result.html
├── claims.html
├── network.html
├── providers.html
├── learning.html
├── sample_claims.csv
```

---

## 16. Final Project Statement

> **ClaimShield AI does not replace the investigator — it tells the investigator where to look first and why.**

Our goal is to move healthcare fraud detection from a simple black-box prediction toward **explainable, connected, and continuously improving fraud intelligence**.

---

## Team Black Pearl

- **Karan**
- **Kunal**
- **Yash**

**Project:** ClaimShield AI  
**Domain:** Healthcare + Artificial Intelligence + Fraud Detection
