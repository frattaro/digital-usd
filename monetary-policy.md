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

## Unbacked Tokens and Fixed Supply Models

Token authorities are not required to back their tokens with external assets (e.g. treasuries, commodities, or fiat). Instead, a token may be issued with a **declared, immutable issuance policy** that serves as its credibility foundation.

A valid monetary policy may include:
- A **hard cap on supply** (e.g. 21 million tokens)
- A **fixed decimal precision**
- **No minting or burning** beyond initial issuance
- Transparent rules around wallet allocation or launch phases

These rules must be:
- Declared at the time of token creation
- Publicly accessible via attestation metadata
- Enforced through legal means, such as SEC filings (if applicable)

> Example: A token modeled after Bitcoin, with a hard 21 million supply cap and no collateral backing, may still be trusted and adopted if its rules are enforced and transparent.

Such tokens compete on **credibility and governance**, not backing alone.

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

## VII. Multi-Currency Authorities (bonus!)

### Central Banks with Multiple Tokens

In the settlement system, token issuance is not restricted to one currency per authority. A single token authority — such as the Federal Reserve or a regional central bank — may issue multiple distinct tokens, each governed by its own monetary policy, mint/burn rules, and operational constraints.

This departs from the traditional model where central banks are monopoly issuers of a single national currency. Instead, the protocol supports a modular structure in which:

- Each token is a standalone unit of account and settlement.
- Token parameters are declared and enforced at issuance.
- Market participants determine which tokens to use based on trust, liquidity, and policy quality.

Examples of multi-token issuance by a single authority might include:

- A **core USD token**.
- A **gold-pegged token** for reserve diversification.
- An **experimental token** with NGDP-targeted mint/burn logic.
- An **SDR clone token** backed by other token holdings.

### Implications

This architecture enables:

- Central banks to **segment monetary roles** without entangling them.
- Interoperability between currencies **without compromising policy autonomy**.
- Competitive evolution of monetary instruments, even within a single issuing authority.
- The potential to treat currency **as a portfolio**, not a monopoly.

In this system, credibility, governance, and transparency — not legal monopoly — determine adoption.

---
