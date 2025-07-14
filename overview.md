---
title: Overview
nav_order: 1
---

# 🧭 Digital USD Infrastructure – System Overview

This document outlines a replacement settlement infrastructure for the U.S. dollar. It provides a modern, programmable alternative to Fedwire and ACH using KYC-attested wallets and tokenized USD. It introduces staking-based liquidity management, automated compliance, and eventual support for additional currencies — all while preserving compatibility with existing financial institutions and policy.

---

* TOC
{:toc}

---

## I. 🌐 Core Protocol Architecture

### 1. Digital USD as the Base Settlement Layer
- The Federal Reserve is the sole token authority for digital USD.
- The U.S. Treasury sells bonds to the Fed and receives digital USD tokens in return.
- All real reserves are token-based; there is no support for synthetic dollar creation at the protocol level.

### 2. KYC-Attested Wallets
- All wallets must include a Know Your Customer (KYC) attestation issued by an approved identity attestor.
- Attestations include metadata such as jurisdictional origin (e.g. country code).
- This enables:
  - Regulatory compliance
  - Sanctions enforcement
  - Transparency for audits and reporting
- Wallets are **pseudo-anonymous**: their identity is protected unless revealed by legal process.

### 3. Transaction Layer
- Protocol-level API includes:
  - `transfer(from, to, amount)`
  - `currency_swap(tokenA, tokenB)`
  - `get_attestation(wallet)`
  - `check_sanctions(from, to)`
- Application-layer developers are responsible for:
  - Recurring payments
  - Payroll processing
  - User-facing scheduling or batch logic

### 4. Public Transaction History
- All token transfers are permanently auditable.
- Enables third-party software to monitor for:
  - AML: Anti-Money Laundering triggers
  - SAR: Suspicious Activity Report conditions
  - CTR: Currency Transaction Report thresholds

---

## III. 🏦 Banking & Transitional Design

See [Transitional Banking](/digital-usd/transitional-banking)

---

## IV. 🪙 Monetary Policy Design

The system enables each token authority to define its own policy logic. However, Federal Reserve policy receives special handling to support transitional compatibility.

### 1. General Features
- All currencies operate with real, token-based reserves.
- The protocol itself has no built-in support for synthetic lending, money multiplication, or shadow issuance.

### 2. Yield & Liquidity Controls
- Staking provides a mechanism for token velocity control.
- The authority may mint yield to incentivize or disincentivize token retention or circulation.
- This replaces interest rates, reserve ratios, and other indirect levers.
- Staking does not provide liquidity for swaps or lending — it only locks supply.”

### 3. Fed-Specific Analogues
- The Fed uses staking rates instead of Fed Funds Rate or IORB.
- Digital USD tokens held by banks are actual reserves.
- Interbank lending becomes a staking mechanism rather than an informal overnight repo system.

See [monetary policy](/digital-usd/monetary-policy) for more details

---

## V. 📉 Taxation & Accounting

### 1. External Tax Handling
- Tax compliance is **not** enforced by the protocol.
- Capital gains, income classification, FX-like gains, and offsets are calculated by third-party tools.
- Protocol provides full historical data to support audit and calculation.

### 2. Auditable Cost Basis
- Public ledger allows tax software to:
  - Determine holding periods
  - Reconstruct cost basis
  - Calculate FIFO/LIFO scenarios
- Protocol does not embed tax rules or cost basis metadata.

---

## VI. 🧠 System Design Principles

### 1. Protocol-Level Neutrality
- Core protocol handles:
  - Token movement
  - Currency swaps
  - Sanctions and compliance enforcement
- UI/UX, banking apps, payroll tools, and internal ledgers are left to integrators.

### 2. Replacement of Legacy Infrastructure
- Designed to fully replace Fedwire and ACH functionality.
- Includes near-instant settlement, public auditability, and centralized compliance hooks.
- Retains backward compatibility through bank-led synthetic systems during transition.

### 3. KYC and Pseudonymity
- Wallets are pseudonymous to users and third parties.
- Identities are only resolvable through the original KYC attestor via court order.

---

## VII. 🏛️ Multi-Currency Expansion

This protocol is designed to support multiple currencies beyond digital USD, including both corporate and sovereign tokens. Each token is issued by a token authority responsible for supply and policy, while swap functionality and liquidity are provided by independent, fee-incentivized nodes.

### 1. Token Authorities
- A token authority is responsible for minting and redeeming its own currency.
- Authorities are not required to operate validator nodes or provide swap liquidity.
- Examples include: the Federal Reserve (USD), Walmart (WMT), or third-party synthetic issuers.

### 2. Currency Swap Infrastructure

- Swaps occur through token **liquidity pools**, each backed by real reserves in both tokens.
- Pools are created by **liquidity providers** who deposit two-token pairs (e.g., WMT/SBX) into a swap transaction.
- Swap fees are distributed to pool providers proportional to usage.
- There is **no default routing through USD** — direct pairs must exist to support a swap.
- Support for multi-token expansion; see [Currency Swaps and Liquidity](/digital-usd/swap-liquidity) for mechanics.
- Token authorities may seed liquidity pools with reserves to bootstrap adoption.

> 🔄 Note: Swap liquidity is **not provided by staking**.
>
> - **Staking**: Locks tokens to slow monetary velocity and earn yield set by token authorities.
> - **Liquidity Provisioning**: Deposits tokens into swap pools to enable trades and earn variable swap fees.
>
> These are separate mechanisms with distinct incentives, cooldown rules, and monetary effects. All swap liquidity is provided by independent token holders who voluntarily deposit into two-token pools. The protocol does not stake or route user funds.

### 3. Liquidity Dynamics
- Only the Fed (as a token authority) can mint USD; all USD liquidity must be staked by holders.
- Swap failure is possible when no liquidity path exists, which is surfaced to users at transaction time.
- Stakers are incentivized by yield, which is set by token authorities as a tool to throttle monetary velocity.

### 4. Monetary Competition
- Swap patterns create natural pressure on token policies.
- Well-governed currencies will be easier to trade and more useful, while poorly managed tokens will face liquidity scarcity.

---

## IX. 🛠️ Implementation Notes

A complete implementation of this protocol requires:

- Forking the Heiro token service open-source ledger codebase
- Replacing HBAR with a base-layer USD token
- Supporting SDK-based integration for financial core providers
- Integrating Treasury-controlled QR-code note issuance

For details, see: [Implementation Notes](/digital-usd/implementation-notes)

---
