---
title: Monetary Policy
nav_order: 3
---

# 🏛️ Token Authority & Monetary Policy Specification

This document defines the role and powers of a token authority within the Heiro ledger, and outlines how monetary policy is enacted through staking, yield, and token controls. Token authorities are responsible for managing the supply, liquidity, and monetary dynamics of their issued tokens.

---

## I. 🎓 What Is a Token Authority?

A **token authority** is an entity that has the ability to issue, burn, and manage a digital currency on the Heiro ledger.

Examples:
- The Federal Reserve (USD)
- The European Central Bank (EUR)
- Corporate issuers (e.g., Walmart, Apple)

Token authorities do not operate validator nodes or handle consensus. They only manage their issued token.

---

## II. ✅ Protocol-Level Permissions

| Capability | Description |
|------------|-------------|
| `mint(token, amount)` | Mint new tokens into the authority’s wallet |
| `burn(token, amount)` | Burn tokens from the authority’s wallet |
| `stake(token, amount)` | Lock tokens to support swap liquidity |
| `unstake(token, amount)` | Begin cooldown and release of staked tokens |
| `setMinimumYield(token, rate)` | Sets a protocol floor for staking yield |
| `setCooldownPeriod(token, duration)` | Set how long unstaking requires before funds are released |
| `setSwapFeeRate(token, rate)` | Sets the baseline protocol swap fee involving this token |
| `registerSwapPath(tokenA, tokenB)` | Enable or disable default swap routing via this token |

> ⚠️ Authorities **cannot** denylist wallets directly. Legal sanctions require a **court order**, after which the **U.S. Treasury** adds wallet or attestation IDs to the denylist.

---

## III. 💰 Staking as Monetary Policy

Token authorities control monetary policy not through interest rates or reserve ratios, but through staking incentives and liquidity provisioning.

### How It Works

| Lever | Description | Economic Effect |
|-------|-------------|-----------------|
| `minimum_yield` | Guarantee a baseline return for staking | Higher yield = lower velocity |
| `cooldown_period` | Lock-up time before funds can be unstaked | Longer period = longer time to respond to liquidity changes |
| `mint_and_stake()` | Create and lock tokens to inject liquidity | Analogous to QE |
| `burn_staked()` | Remove staked tokens to reduce liquidity | Analogous to QT |

Staking rewards and swap fees become the **functional equivalent** of interest rates and liquidity premiums in the fiat system.

---

## IV. 🧱 Enforcement Boundaries

| Rule | Explanation |
|------|-------------|
| No forced transfers | Token authorities cannot move other users' funds |
| No unilateral denylisting | All denylist entries must be routed through U.S. Treasury upon legal authorization |
| No synthetic supply | All tokens are backed by explicit minting, no implicit credit or debt instruments |
| Transparent controls | All authority actions are visible and logged in public ledger events |

---

## V. 🔁 Policy Flexibility and Competition

Each token authority sets its own policy parameters. This allows:

- Competing currencies with different velocity/yield tradeoffs
- Corporate tokens with no staking but high liquidity
- Central banks to mimic traditional monetary tools without synthetic lending

Market dynamics and swap volumes will naturally pressure token authorities toward more responsible or responsive monetary governance.

---

## VI. 🧠 Summary

Token authorities on Heiro ledger use **staking mechanics** to manage:
- Money velocity
- Swap liquidity
- Circulating supply

The system removes legacy tools (e.g., Fed Funds Rate) in favor of **direct, programmable policy levers** — all transparent, public, and rules-based.

---
