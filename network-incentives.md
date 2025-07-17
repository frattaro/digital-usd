---
title: Network Incentives
nav_order: 8
---

# Network Incentives

This document defines the fee logic, anti-spam measures, and validator incentive structures that keep the Digital USD network functional, fair, and economically sustainable.

The system is designed to minimize friction for ordinary users while maintaining protocol-level deterrents against abuse and ensuring sufficient support for validator operations.

---

## Transaction Cooldown Model

To preserve free access for individuals while discouraging spam and congestion, the protocol implements a per-wallet cooldown-based fee mechanism:

- **Each wallet may send one free transaction every 10 seconds**
- **Transactions sent within the cooldown window incur a minimal fee** (e.g. 0.0001 USD token)
- **Cooldown resets after each transaction**

This approach ensures that ordinary users experience fee-free usage under typical patterns, while automated abuse (e.g. micro-spam, botnets) becomes economically costly.

### Multi-Wallet Abuse Prevention

Wallets are created via KYC attestations and are bound to a verified legal identity. This prevents adversaries from creating large numbers of wallets to bypass cooldowns.

Attempts to evade cooldowns through mass wallet creation may trigger automated compliance reviews, including detection under anti-money-laundering (AML) structuring heuristics.

### Legitimate High-Volume Use

Certain high-volume actors are expected to regularly exceed cooldown limits. These include:

- Payroll processors
- Government disbursement wallets
- Large-scale payment aggregators
- The U.S. Treasury (e.g. when minting QR-cash in bulk)

These entities may:
- Pay the minimal per-transaction fees
- Use transaction batching mechanisms
- Or receive protocol-level exemptions (e.g. fee waivers for specific disbursement categories)

In particular, **Treasury minting of QR-cash** is expected to occur in large batches. While QR-cash redemptions by users are always fee-free, **the minting process itself incurs standard per-transaction fees**, as a reflection of the network resources consumed.

---

## Validator Incentives (To be defined)

Validators are essential infrastructure providers and are expected to be:

- Publicly known entities
- Approved to operate under regulatory frameworks
- Motivated by policy alignment, infrastructure stewardship, or statutory obligation

The protocol does **not** offer traditional block rewards. Future sections will define:

- Validator cost recovery mechanisms
- Accepted fee tokens
- Tax treatment considerations
- Legal status as public infrastructure
