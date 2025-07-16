---
title: Protocol Compliance
nav_order: 2
---

# ️ Why Compliance Must Be Protocol-Level

This document explains the regulatory burden placed on banks in today's financial system, the risks introduced by decentralization, and why compliance must be embedded directly in the protocol for a legally safe, scalable system.

---

## I.  Traditional Compliance Burden on Banks

In the legacy ACH/Fedwire systems, **banks** are the primary intermediaries. They are legally responsible for:

- Performing Know Your Customer (KYC) checks
- Screening transactions against sanctions lists (e.g. OFAC's SDN list)
- Monitoring Anti-Money Laundering (AML) patterns
- Filing Suspicious Activity Reports (SARs) and Currency Transaction Reports (CTRs)
- Maintaining audit logs and being able to respond to subpoenas

The payment networks themselves (e.g. ACH) do **not** enforce compliance directly.

---

## II.  The New Role of Wallet Holders

In a decentralized monetary system, **wallet holders can act as their own bank**.

That introduces a dangerous shift:
- Every individual becomes a potential **regulated entity**.
- Without enforcement tools, individuals could **inadvertently violate sanctions laws**, AML regulations, or unknowingly send funds to restricted entities.

**This is unacceptable for legal and practical reasons.**

---

## III. ️ Protocol-Enforced Compliance Is the Only Viable Path

To restore legal safety for individuals and reduce institutional overhead, the Digital USD protocol enforces:

###  KYC-Attested Wallets
- Every wallet must include a signed attestation from an approved identity attestor.
- KYC attestations are permanently attached to wallets.
- They cannot be revoked, deleted, or purged after issuance.

###  Attestor Whitelisting
- Transfers only succeed if the attestation comes from an approved `attestor_id`.
- Approved attestor lists are synced hourly from a U.S. Treasury API service.

###  Sanctions Screening
- The protocol checks each transfer against:
  - `jurisdiction` pair deny lists (from_country → to_country)
  - (`attestor_id`, `attestation_id`) sanctions lists
- Deny lists are synced hourly from a U.S. Treasury API service.

#### Extended Jurisdiction Codes for Conditional Sanctions

To support nuanced compliance use cases, attestors (such as the U.S. Treasury) may issue attestations using **extended jurisdiction codes**. These allow for more precise authorization in cases where sanctions include **policy exceptions** for specific goods or purposes.

**Examples**

| Jurisdiction Code | Meaning                                             |
|-------------------|------------------------------------------------------|
| `CN.OIL`          | Wallet authorized for oil exports to China          |
| `RU.MED`          | Wallet authorized for medical exports to Russia     |
| `IR.HUM`          | Wallet authorized for humanitarian aid to Iran      |

These codes maintain protocol simplicity while enabling **fine-grained, rules-based exemptions** without requiring changes to the ledger or attestation format.

###  Freeze & Legal Reporting
- Wallets can be frozen using a sanctions-style deny list.

###  Immutable Public Ledger
- Enables external audit tooling and compliance monitoring (e.g. SAR triggers) without requiring wallet-holders to self-report.
-  DOJ and regulatory agencies (e.g. FinCEN) are responsible for monitoring the public ledger for AML patterns, SARs, and CTR thresholds — replacing institutional reporting with direct observation.


---

## IV.  Benefits of Protocol-Level Enforcement

| Benefit | Description |
|--------|-------------|
| **Legal Safety** | Individuals cannot unknowingly break the law — noncompliant transactions are rejected at the protocol level. |
| **Reduced Liability** | Removes compliance burdens from wallet software and application-layer developers. |
| **Auditability** | Enforcement decisions and ledger activity are permanently visible and reproducible. |
| **Decentralization without Anarchy** | Enables direct access to money without undermining necessary legal structures. |

### Fraud Deterrence and Social Engineering Defense

Protocol-level identity enforcement significantly reduces the surface area for scams, including social engineering attacks like romance fraud or business email compromise.

Unlike traditional systems, every wallet that can receive funds must be KYC-attested by an approved entity. This creates a transparent and verifiable chain of responsibility:

- **Scammers cannot receive funds without an attested wallet.**
- **Attestors are accountable** for the identities they vouch for.
- **Victim-facing custodians can trace the recipient wallet**, identify the attestation, and escalate fraud claims immediately.
- **The Treasury or regulatory authorities can suspend or denylist attestors** that issue fraudulent attestations, closing off abuse vectors quickly.

While this cannot prevent emotional manipulation, it raises the cost of fraud, shrinks the anonymity space, and provides a much faster path to legal and operational redress than legacy systems.

The system protects privacy by default but ensures accountability when due process is invoked.

---

## V.  Summary

> Without protocol-level compliance, every wallet holder becomes a bank — and every transaction becomes a legal minefield.

The Digital USD system preserves **legal clarity**, **user safety**, and **institutional compatibility** by encoding compliance directly into transaction logic. This approach:
- Mirrors what banks do today
- Removes the need for custom enforcement software
- Guarantees baseline legal compliance for every transfer

It's not just more programmable money — it's **safer money by default**.

