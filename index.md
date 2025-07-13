---
title: White Paper
nav_order: 0
---

# 🏛️ White Paper: A New Settlement Layer for the Digital Age

**Replacing Fedwire and ACH — without breaking the economy.**

---

## Overview

This project proposes a replacement for the financial system’s **settlement layer** — the foundational infrastructure used to move dollars, settle obligations, and enforce compliance.

Rather than layering innovation on top of legacy rails, this system rebuilds the rails themselves using:

- **KYC-attested wallets**
- **Digitally-native USD tokens**
- **Staking-based interbank liquidity**
- **Token authority separation**
- **Tamper-evident bearer cash**
- **Decentralized governance**

It is designed to be legally compliant, economically sound, and technically feasible today — not a speculative crypto protocol or a closed central bank experiment.

This is not a payments app or a cryptocurrency project. It’s a new foundation that can absorb, extend, and eventually obsolete systems like Fedwire and ACH — while remaining interoperable with messaging protocols like SWIFT through off-chain integration hooks.

---

## Why the Settlement Layer?

Most financial innovation happens at the surface: neobanks, stablecoins, DeFi apps.

But the **settlement layer**, where actual value changes hands and legal obligations clear, has barely evolved in decades.

- **Fedwire** operates on batch-based, closed-hour processing.
- **ACH** is delay-prone and fraud-sensitive.
- **CBDC experiments** remain siloed, non-interoperable, and centralized.

Despite trillions flowing through these systems daily, none are designed for the internet age — let alone for programmable compliance, global interoperability, or tokenized liquidity.

This project aims to fix that.

---

## Key Design Principles

- **Direct wallet custody**: No intermediaries. Wallets are created with KYC attestations, not by banks.
- **Programmable compliance**: Denylists comprising sanctions and legally frozen funds are all protocol-enforced.
- **Tokenized dollars**: Minted by the Federal Reserve token authority, and staked by wallet-holders to provide liquidity.
- **Decentralized governance**: Nodes operate under a multi-signature quorum, with upgrade processes defined on-chain.
- **Cash interoperability**: Treasury-printed QR cash functions as tamper-evident bearer instruments.
- **Smart-contract free**: Performance and simplicity come first. Complexity is handled off-chain when possible.

---

## Core Components

### ✅ Wallets and Attestations

Wallets must include attestation metadata signed by trusted KYC providers (supplied via the U.S. Treasury). Wallets created without valid attestations are not permitted to receive or send tokens.

- Attestation schema includes minimally required pseudo-anonymous information for validation.
- No user can create a wallet without a valid attestation from a U.S. Treasury approved source.

### ✅ Allowlist and Denylist

The U.S. Treasury has full authority over the attestor allowlist the the transaction denylist. To enforce compliance at the protocol level during wallet attestation and transaction time, this requires the Treasury to:
- regulate attestors,
- freeze wallets according to justice system requests supported by a court order, and
- administration sanctions, being on individuals or country-pairs.

### ✅ Liquidity and Monetary Policy

While banks may still issue synthetic dollars within their own internal ledgers, **all inter-institutional settlement requires real tokens, on-chain**.

Token authorities — such as the Federal Reserve — implement monetary policy by controlling **staking incentives and liquidity parameters**, rather than manipulating interest rates or fractional lending.

- Banks and institutions **stake tokens** to provide settlement liquidity.
- The protocol enforces withdrawal delays and protocol-bound staking rules.
- Token authorities can:
  - Adjust **minimum staking yields**
  - Define **unstaking cooldown periods**
  - Mint and immediately **stake new tokens** (analogous to QE)
  - Burn staked tokens to **remove liquidity** (analogous to QT)
- All monetary actions are transparent and enforced at the protocol level.

This model enables **transparent, rules-based monetary policy** without reliance on opaque leverage or synthetic money creation outside authorized minting.

### ✅ Paper Cash (QR Notes)

The Treasury may issue printed notes with tamper-evident QR codes:
- Each note is a wallet preloaded with a fixed amount.
- The private key is hidden inside a sealed portion.
- Cash can be opened and deposited into an on-chain wallet (invalidating it for physical spending).
- Fully interoperable with the rest of the system.

---

## How This Compares

| Feature                         | This System              | Fedwire / ACH / SWIFT     | CBDCs         | Ethereum / DeFi     |
|-------------------------------|--------------------------|----------------------------|---------------|---------------------|
| KYC-attested wallets          | ✅                       | ❌                        | ✅ (centralized) | ❌                  |
| Tokenized settlement assets   | ✅                       | ❌ (bank reserves only)   | ✅             | ✅ (volatile)       |
| Denylist via court order      | ✅                       | ✅ (opaque)                | ✅             | ❌                  |
| Smart contract free           | ✅                       | ✅                         | ✅             | ❌                  |
| Public node governance        | ✅                       | ❌                        | ❌             | ✅ (miners/validators) |
| Direct wallet custody         | ✅                       | ❌                        | ❌             | ✅                  |
| Paper-cash interoperability   | ✅                       | ✅                         | ❌             | ❌                  |

---

## What This Enables

- **Migration** from legacy systems with full compliance
- **Competition** between digital currencies (once standards are set)
- **Improved resilience** to cyberattacks and fraud
- **Simplified monetary policy** via staking, not opaque leverage
- **Privacy-preserving cash** for in-person transactions
- **Global interoperability** without relying on centralized payment rails

This isn’t just an upgrade — it’s a **new foundation**.

---

**“You don’t fix a failing system by patching it — you replace it.”**
