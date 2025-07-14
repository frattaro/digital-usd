---
title: Transitional Banking
nav_order: 4
---

# 🏦 Transitional Banking Model in the Digital USD System

This document outlines how traditional bank lending, deposit capture, and custodial services can persist during the transition to a token-based settlement system. It preserves user-friendly interfaces and synthetic balances while enforcing strict monetary discipline at the protocol level.

---

## I. 🧮 Overview

In the Digital USD system:
- All **real value** is represented by tokenized USD issued by the Federal Reserve.
- Banks **cannot create real dollars** — only synthetic balances in their internal systems.
- The protocol does **not** support delegated wallets. Every on-chain wallet is owned directly by a single entity holding its private key.

Custodial banking becomes an **off-chain abstraction**: users deposit tokens into a bank's wallet, and the bank reflects that balance in its own internal ledger. All lending, yield distribution, and portfolio services happen within that custodial system.

---

## II. 🏗️ How Synthetic Loans Work

1. **Loan Origination**
   - Bank creates a synthetic balance in the borrower’s custodial account.
   - No on-chain tokens are transferred at this stage.

2. **Loan Usage**
   - When borrower initiates a withdrawal or payment:
     - Bank must settle using **actual tokenized USD** from its reserves.
     - Settlement is executed via protocol-level transfer.

3. **Loan Repayment**
   - Borrower repays in **real tokens**.
   - Bank reduces the synthetic debt entry off-chain and absorbs tokens back into reserves.

---

## III. 💧 Sources of Reserves

Banks must hold enough on-chain tokens to meet their real settlement obligations. Reserve sources include:

### 1. Customer Deposits
- Users may deposit digital USD into bank-owned wallets.
- Once deposited, custody is transferred — users interact with a **synthetic balance**.

### 2. Central Bank Staking (Monetary Tool)
- Token authorities may choose to offer protocol-level staking yield.
- Yield is funded via **controlled minting**, not by redistributing user funds.
- This mechanism is intended as a **monetary policy lever**, not a lending pool.

> 💡 There is no peer-to-peer or interbank lending functionality in the protocol. Any such arrangements must be implemented entirely at the application layer.

### 3. Loans from the Federal Reserve
- The Fed may lend tokens against acceptable collateral.
- Token minting must follow existing legal constraints:
  - Purchase of Treasury bonds
  - Collateralized lending facilities

---

## IV. 🏛️ Role of the Federal Reserve

The Fed remains lender of last resort, but must operate under transparent and rule-bound conditions:
- Cannot mint arbitrarily
- Must receive collateral or assets in exchange
- May directly inject tokens into reserves or participate in staking mechanisms under monetary authority rules

---

## V. 📊 Risk & Profit Structure

In the absence of synthetic money creation, banks evolve toward true financial intermediation:

| Function         | Explanation                                                  |
|------------------|--------------------------------------------------------------|
| **Credit Risk**   | Still taken on loans, but defaults reduce real reserves      |
| **Liquidity Risk**| Must hold enough real tokens to meet withdrawals             |
| **Yield Services**| Optional staking or portfolio products generate non-lending revenue |

---

## VI. 💼 Custodial Portfolio Management

To retain deposits and add user value, banks may offer **wallet portfolio management** services:

- Users deposit real tokens into a custodial account
- Bank offers:
  - Currency diversification
  - Yield-seeking strategies
  - Rebalancing and staking
- Bank may operate as a **fiduciary** or traditional custodian

These services are off-chain and optional. The protocol enforces no delegation, and only one entity may own any given wallet.

---

## VII. 👤 Transition Toward Self-Custody

Over time, users may:
- Shift from bank-led custodial interfaces to **self-custodied wallets**
- Directly **stake** tokens via protocol, if offered by token authorities
- Opt into third-party financial services that interface with protocol APIs

This gradual transition preserves continuity while aligning incentives toward monetary realism.

---

## VIII. 🏧 ATMs and QR-Cash in a Tokenized System

In the legacy system, ATMs serve as custodial endpoints for withdrawing physical cash from bank accounts, often enforcing withdrawal limits or delays during periods of financial stress. They are a key tool for **capital control** in the traditional model.

In a tokenized settlement architecture, **ATMs continue to exist**, but their role fundamentally changes. They become **access points for tamper-evident QR-cash**, which represents bearer tokens issued by the Treasury and tied to wallet-based balances.

### 🏦 Operated by Banks or Private Networks

ATMs may be operated by:
- **Banks**, integrated with their internal systems of synthetic dollars, reconciling withdrawals and deposits through existing customer accounts
- **Independent entities**, whose business model is to:
  - Purchase QR-cash from the U.S. Treasury or a designated token distributor
  - Load and distribute QR-cash via physical ATM terminals
  - Collect fees per withdrawal or issuance

Independent operators do **not** need to interface with any bank systems — they communicate directly with the settlement layer to verify and dispense valid QR-cash. Some may choose to integrate with institutional systems for user convenience, but it is not required.

> ⚠️ Independent operators may impose withdrawal limits — not as systemic capital controls, but to protect inventory from machine draining or sabotage.

### 🧯 Capital Control Workarounds

Unlike legacy ATMs:
- There are **no protocol-level withdrawal restrictions**
- QR-cash is **fully portable and peer-transferable**
- Wallet-based redemptions ensure **unmediated access to funds**

Governments and banks may still apply limits within their own services, but the protocol guarantees liquidity — and QR-cash provides an escape hatch from institutional constraints.

In this model, ATMs are no longer tools of monetary enforcement. They are **optional service nodes**, making digital dollars physically accessible, whether operated by a global bank or a convenience store chain. The power shifts from the institution to the protocol — and from permission to access.

---

## IX. 🧾 Summary of Transitional Model

This model allows:
- Traditional bank-led lending to continue via synthetic balances
- Custodial portfolio services to emerge without protocol changes
- Real-value enforcement through token-based settlement
- The Fed to operate transparently under strict constraints

All credit behavior, portfolio management, and customer service is moved to the **application layer**. The protocol layer remains strict, minimal, and auditable — ensuring monetary clarity during the transition.

> 🔮 In the long term, some banks may exit custodial services entirely, evolving into digital financial service providers that interact with wallet holders via competitive API-driven offerings.

---
