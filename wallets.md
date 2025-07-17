---
title: Wallets
nav_order: 6
---

# 👛 Wallets

This document defines the behavior, structure, and policy role of wallets in the Digital USD protocol. Wallets are the core user-controlled entities that hold balances, initiate transfers, and interact with attestations.

Wallets are designed to support both **transparent regulatory compliance** and **pseudonymous privacy**, enabling a wide range of users — from individuals to institutions — to interact with the financial system on fair, rule-based terms.

---

## 1. Attestation-Based Identity

Each wallet includes one or more **public attestations**, which are metadata entries proving that the wallet has passed identity verification via a registered attestor.

A wallet schema might include:

```json
{
  "id": "0xABC...",
  "balances": {
    "USD": 1200,
    "EUR": 37.50
  },
  "attestations": [{
    "attestor_id": "b6c8-1142-9aef",
    "attestation_id": "kyc-v2-9332-001",
    "jurisdiction": "US.NY",
    "issued_at": "2025-07-01T00:00:00Z"
  }]
}
```

This metadata is **publicly visible** on-chain and can be evaluated by validators, counterparties, or application-layer logic. However, it does **not** contain the user’s legal identity — only a reference to the attestation held by the attestor.

This strikes a balance between **regulatory enforcement** and **user privacy**.

---

## 2. Pseudonymity with Public Metadata

Wallets are **pseudonymous** by default. While attestations are public, they do not expose:

- The wallet owner’s name
- Legal identifiers (e.g., SSN, EIN)
- Contact details or personal information

This ensures that users can interact with the network freely, while enforcement authorities can trace a wallet to a legal identity only via due process through the attestor.

Users may choose to publish or share their identity-linked attestation externally (e.g. on a business website), but this is optional and not enforced by the protocol.

---

## 3. Wallet Reuse and Privacy Segmentation

Users may create and use multiple wallets under the same attestation. Common patterns include:

- Personal wallets
- Business or payroll wallets
- Disposable or anonymous-use wallets (e.g., donations)
- Treasury-issued wallets (e.g., QR-cash)

This allows privacy segmentation — different purposes, same identity — without compromising compliance.

Creating many wallets is allowed, but excessive creation may trigger **anti-abuse or AML monitoring**, especially if intended to bypass transaction rules.

---

## 4. Wallet Reuse as Optional Reputation

While users may preserve privacy through one-time wallets, they may also **reuse wallets** as a way to build **reputation**.

Reused wallets can serve as:
- A transparent record of income (e.g., freelancers, businesses)
- Proof of payment consistency (e.g., rent, subscriptions)
- A decentralized substitute for credit scores or trust ratings

Because attestations are public and transaction history is visible, voluntary reuse turns a wallet into a **verifiable financial identity** — without relying on credit bureaus or data brokers.

This reputation model is:
- **User-controlled**
- **Globally portable**
- **Native to the settlement layer**

---

*Wallets are where privacy meets accountability — and where the user becomes their own custodian, their own bank, and potentially, their own credit bureau.*
