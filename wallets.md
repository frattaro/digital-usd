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

## 1.1 Outgoing-Only Wallets

Any wallet can be marked as **outgoing-only**, preventing it from receiving funds after creation. This enables a broad range of use cases, including QR-cash, bearer instruments, prepaid access tokens, or disposable wallets used for constrained payouts.

### Characteristics

- **Outgoing-only**: The wallet may send funds but cannot receive additional deposits.
- **Pre-funded**: Outgoing-only wallets are expected to be funded at the time of creation. Once created, their balances can only decrease.
- **Limited lifespan**: Once the balance reaches zero, the wallet is automatically burned by the protocol and can no longer be used.
- **Use case-agnostic**: This is a general-purpose feature. While it enables QR-cash, it is not limited to it.

### Protocol Behavior

- The outgoing-only flag is set at wallet creation time and is immutable.
- Incoming transfers to outgoing-only wallets are rejected at the protocol level.
- When the wallet balance reaches zero, it is burned automatically to prevent reuse or confusion.

These rules preserve the integrity of constrained, single-use wallets and ensure they cannot be repurposed or silently reloaded.

### Example Use Case

A company creates thousands of prepaid $5 outgoing-only wallets as promotional credits, distributed via QR code or SMS link. Each wallet can be used once and disappears after being spent. Because the wallets are outgoing-only, users cannot re-fund or hoard them, ensuring controlled distribution.

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

*Wallets are where privacy meets accountability — and where the user becomes their own custodian, their own bank, and potentially, their own credit bureau.*

---

## 5. Government Payments and Identity Separation

Wallets in the Digital USD system are **pseudonymous** by default, even when used for official disbursements such as tax refunds or stimulus payments.

When a user provides a wallet address to a government agency (e.g., the IRS), the agency is merely following **user-supplied instructions**. It does **not** imply:
- That the government knows who controls the wallet
- That the wallet is legally owned by the person requesting funds
- That a permanent identity binding exists

### Opt-In Distribution

Government disbursements must follow a strict opt-in pattern:
- The user provides a wallet address on a signed form (e.g., tax return, benefit claim)
- The agency sends funds to that address
- No wallet attestation is required or assumed

This preserves **plausible deniability**:

> “You told us where to send the money. That’s the address we used.”

The protocol does not embed any assumption of ownership. The wallet remains pseudonymous unless the user explicitly binds it to a legal identity through attestation.

### Helicopter Money Distribution

In the case of universal distributions (“helicopter money”), a similar model applies:
- Individuals must opt in through an official request (e.g., Form HM-2025)
- They specify a destination wallet, which may or may not be attested or self-custodied
- The Treasury performs the distribution with **no built-in enforcement of identity matching**

Attestors and agencies may enforce one-claim-per-identity off-chain, but the protocol preserves wallet privacy and ownership flexibility throughout.

*Receiving funds does not deanonymize a wallet. Only attestations create traceable bindings — and only when explicitly issued.*
