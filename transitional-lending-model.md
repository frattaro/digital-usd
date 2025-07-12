---
title: Transitional Lending
nav_order: 4
---

# 🏦 Transitional Lending Model in the Digital USD System

This document outlines how traditional bank lending and synthetic balance behavior can persist during the transition to a token-based settlement system. It preserves the user experience of fractional reserve banking while enforcing strict reserve discipline at the protocol level.

---

## I. 🧮 Overview

In the digital USD system:
- All real value is represented by tokenized USD issued by the Federal Reserve.
- Banks **cannot create real dollars** — only synthetic entries in their internal systems.
- Loans are disbursed off-chain as synthetic balances, while **settlement always occurs in real tokens**.

This model bridges the old world (fractional reserves) with the new (token-based finality).

---

## II. 🏗️ How Synthetic Loans Work

1. **Loan Origination**
   - A bank creates a synthetic balance in the borrower's account on its website or app.
   - No real USD tokens are transferred yet.

2. **Loan Usage**
   - When the borrower spends or withdraws funds:
     - The bank must settle using **actual digital USD tokens**.
     - These come from the bank’s reserves, not from freshly minted supply.

3. **Loan Repayment**
   - Borrower repays in **real USD tokens**.
   - Bank burns the debt entry off-chain and recovers tokens into its reserves.

---

## III. 💧 Sources of Reserves

Banks must maintain enough token reserves to meet outflows. Reserve sources include:

### 1. Customer Deposits
- Individuals and institutions may deposit real USD tokens into bank-managed wallets.
- Banks may offer yield-bearing accounts to attract deposits.

### 2. Staking-Based Liquidity Pool
- Banks may borrow short-term liquidity from a shared staked pool.
- Pool participants earn swap and lending fees.
- **Unstaking delay** (e.g., 3 days) protects systemic liquidity.

### 3. Loans from the Federal Reserve
- The Fed may lend digital USD tokens against collateral.
- It cannot mint freely — token issuance must follow existing law:
  - Buying assets via open market operations
  - Purchasing bonds from the Treasury

---

## IV. ⚖️ Role of the Federal Reserve

The Fed continues to serve as lender of last resort — but:
- It must acquire assets (or receive Treasury bonds) to legally mint new tokens.
- It may inject liquidity into the staking pool or directly loan to banks.
- All loans are explicitly tracked, collateralized, and repayable in tokens.

This limits arbitrary expansion while allowing flexible crisis response.

---

## V. 📊 Risk & Profit Structure

Banks no longer profit by conjuring synthetic dollars ex nihilo. Instead, they:
- Accept **credit risk** on borrowers
- Accept **liquidity risk** on reserve sufficiency
- Earn spread between:
  - Lending rate to customers
  - Cost of acquiring reserves (deposits, Fed loans, staking pool interest)

Banks become true financial intermediaries — not creators of money.

---

## VI. 🔄 Long-Term Transition Path

- In early stages, most users will still keep funds in banks.
- Over time, users may shift to holding wallets directly (e.g., direct deposit to personal KYC wallet).
- As this happens:
  - Bank reserve pressure increases
  - Lending must be backed by real liquidity

The system naturally transitions to discipline without shock.

---

## VII. ✅ Summary

This model allows:
- Continuation of familiar bank-led lending
- User-friendly synthetic balances
- Real-value discipline at the protocol level
- Fed backstopping via legal asset exchange

All lending is off-chain, auditable, and reliant on actual reserves — preserving flexibility while enforcing monetary realism.

---

## VIII. 🏦 Interbank Liquidity Design

### 1. Staking-Based Interbank Liquidity
- Banks and large holders may stake surplus USD tokens.
- Staked liquidity is used by other institutions to fulfill short-term needs (e.g. withdrawal pressure).
- The protocol mints yield as compensation.
- The Fed sets the minimum yield rate to throttle liquidity velocity.
- Replaces Fed Funds Rate and Interest on Reserve Balances (IORB) as transitional mechanisms.

### 2. Interbank Lending Remains Off-Chain
- Interbank loans are managed through off-chain agreements between institutions.
- The protocol does not include loan execution, enforcement, or collateral logic.
- Lending behavior and risk management are left to the application layer.
