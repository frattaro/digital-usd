---
title: Transitional Lending
nav_order: 4
---

# 🏦 Transitional Lending Model in the Digital USD System

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

### 2. Staking-Based Liquidity Pool
- Banks may borrow from a shared liquidity pool backed by staked tokens.
- Participants earn yield; unstaking delays prevent withdrawal shocks.

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
- May directly inject tokens into reserves or staking pools to relieve liquidity stress

---

## V. 📊 Risk & Profit Structure

In the absence of synthetic money creation, banks evolve toward true financial intermediation:

| Function | Explanation |
|----------|-------------|
| **Credit Risk** | Still taken on loans, but defaults reduce real reserves |
| **Liquidity Risk** | Must hold enough real tokens to meet withdrawals |
| **Yield Services** | Optional staking or portfolio products generate non-lending revenue |

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

## VII. 🔄 Long-Term User Transition

Over time, users may:
- Shift from bank-led custodial interfaces to **self-custodied wallets**
- Directly **stake** tokens via protocol
- Opt into third-party financial services that interface with protocol APIs

This gradual transition preserves continuity while aligning incentives toward monetary realism.

---

## VIII. 🤝 Interbank Liquidity Design

### 1. Staking-Based Liquidity Pool
- Banks and large holders may stake surplus USD
- Staked pool provides short-term access for other institutions
- Yield is paid in minted tokens by the Fed or pool operator
- Unstaking delay protects against run dynamics

### 2. Interbank Lending (Off-Chain)
- All interbank loans are private agreements
- Protocol does not support lending logic or collateral enforcement
- Institutions manage counterparty risk via off-chain contracts

---

## IX. ✅ Summary

This model allows:
- Traditional bank-led lending to continue via synthetic balances
- Custodial portfolio services to emerge without protocol changes
- Real-value enforcement through token-based settlement
- The Fed to operate transparently under strict constraints

All credit behavior, portfolio management, and customer service is moved to the **application layer**. The protocol layer remains strict, minimal, and auditable — ensuring monetary clarity during the transition.

---
