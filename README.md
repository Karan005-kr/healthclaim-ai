# ClaimShield AI v4 — Spacious Multi-Page Hackathon Prototype

AI-Powered Healthcare Claim Fraud Detection, redesigned as a calm healthcare product with real page separation and visible motion.

## What changed in v4

- Dedicated public landing page instead of opening directly into the dashboard.
- Much more whitespace and fewer modules per screen.
- Dedicated pages for Overview, Check Claim, Claim Result, Claims, Fraud Network, Providers, and Human Learning.
- Animated hero “claim journey”: a claim document travels toward an AI shield/scanner.
- Animated AI scan on the result page with moving document, scan laser, pulsing rings, and staged progress.
- Scroll-reveal motion on landing content.
- Smooth CTA/page transition from the public site into the product.
- Simple Mode and Expert Mode on the claim-check page.
- Fraud Network Intelligence.
- Provider Risk Passport.
- Human-in-the-loop feedback.
- Search/filter claims, import CSV, export high-risk claims.
- Browser LocalStorage persistence.
- No backend, API key, framework, npm, or server required.

## Run

Open `index.html` in a modern browser.

## Recommended hackathon demo

1. Start on the landing page and let the hero animation run.
2. Scroll through Why ClaimShield and How it Works.
3. Click Get Started.
4. Open Check Claim.
5. Click “Use suspicious demo”.
6. Analyze the claim.
7. The app navigates to a separate AI Review page and plays the scanning animation.
8. Show the explainable score.
9. Open Fraud Network.
10. Open Provider Passport.
11. Capture a reviewer decision in Learning.

## Prototype AI logic

The frontend uses an explainable weighted risk engine. It is a hackathon simulation of how a production fraud classifier can combine duplicate detection, amount anomalies, diagnosis/procedure mismatch, documentation quality, provider history, claim frequency, identity mismatch, and billing timing.

## Production roadmap

Secure claims ingestion → de-identification → feature store → XGBoost/LightGBM → anomaly detection → graph analytics → SHAP explanations → investigator feedback → monitored retraining.

## Important

This prototype produces review-priority scores, not medical or legal determinations. Real deployment requires privacy, security, de-identification, regulatory controls, bias evaluation, auditability and human oversight.
