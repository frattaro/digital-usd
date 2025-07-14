---
title: Monetary Policy
nav_order: 3
---

# ️ Token Authority & Monetary Policy Specification

This document defines the role and powers of a token authority within the ledger and outlines how monetary policy is enacted through staking, yield controls, and token issuance mechanics. Token authorities are responsible for managing the supply, velocity, and monetary behavior of their issued tokens — but have no authority over swap functionality or market-driven price mechanisms.

---

## I.  What Is a Token Authority?

A **token authority** is an entity with the power to issue, burn, and manage a specific digital currency on the ledger.

Examples include:
- The Federal Reserve (USD)
- The European Central Bank (EUR)
- Corporations (e.g., Walmart for WMT tokens)

Token authorities **do not operate validator nodes**, **do not control swap routing**, and **do not participate in consensus**. Their role is limited to managing the monetary characteristics of their token.

---

## II.  Protocol-Level Permissions

Token authorities have access to a limited set of protocol functions:

| Capability | Description |
|------------|-------------|
| `mint(token, amount)` | Mint new tokens into the authority’s own wallet |
| `burn(token, amount)` | Destroy tokens held by the authority |
| `stake(token, amount)` | Lock tokens to reduce circulating supply and earn yield |
| `unstake(token, amount)` | Begin release of previously staked tokens after cooldown period |
| `setMinimumYield(token, rate)` | Establish a floor for staking reward rates |
| `setCooldownPeriod(token, duration)` | Define the required lock-up time for staked tokens |

> ️ Token authorities **cannot freeze wallets**, **denylist users**, or interfere with transactions. All sanctions enforcement must be routed through the U.S. Treasury and enforced by protocol-wide denylist data.

---

## III.  Staking as Monetary Policy

Staking allows token authorities to influence the **velocity** and **effective supply** of their currency.

Staking does **not** provide swap liquidity, nor is it tied to trading. Instead, it acts as a macroeconomic throttle — encouraging users to hold rather than spend.

| Lever | Description | Effect on Velocity |
|-------|-------------|---------------------|
| `minimum_yield` | Minimum guaranteed return for staking | Higher yield = more tokens locked |
| `cooldown_period` | Delay before staked funds can be withdrawn | Longer delay = reduced responsiveness |
| `mint_and_stake()` | Authority mints tokens directly into stake | Analogous to QE: increases reserves but locks supply |
| `burn_staked()` | Removes staked tokens from circulation | Analogous to QT: reduces supply without market shock |

Yield paid to stakers is minted according to protocol rules and must respect any inflation cap defined at token creation.

---

## IV.  Boundaries and Limitations

| Rule | Explanation |
|------|-------------|
| No control over swaps | Token authorities cannot register pairs, adjust swap fees, or seed pools |
| No forced transfers | Authorities can only move funds held in their own wallets |
| No synthetic supply | All tokens are explicitly minted; no fractional reserves or lending built-in |
| Transparent actions | All token authority actions are logged on-chain with public visibility |

---

## V.  Design Philosophy

Token authorities in the ledger act as **monetary stewards**, not market participants. Their role is to:

- Define supply growth constraints
- Set basic incentives for saving vs. spending
- Respond to macroeconomic conditions with predictable, rules-based levers

They do **not** set interest rates in the traditional sense, and they do **not** have privileged access to liquidity markets. This design ensures:

- A level playing field across competing currencies
- Transparent monetary governance
- Strict separation between policy and price discovery

---

## VI.  Summary

Token authorities use staking and yield to influence monetary behavior:

- **Stake** tokens to slow velocity
- **Mint** tokens to increase supply
- **Burn** tokens to remove excess liquidity
- **Set yield floors** to incentivize holding
- **Set cooldowns** to delay liquidity re-entry

These tools form the basis of a **transparent, programmable monetary policy** that can coexist with other currencies in a competitive, rule-bound environment.

---
