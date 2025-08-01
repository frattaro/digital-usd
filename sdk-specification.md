---
title: SDK Specification
nav_order: 7
---

#  Digital USD SDK Specification

This SDK provides programmatic access to the core functionality of the Direct Settlement Protocol

---

##  Core Methods

| Method | Description |
|--------|-------------|
| `transfer(from, to, amount)` | Transfers tokens between wallets, enforcing KYC and sanctions checks |
| `createWallet(attestation)` | Creates a new wallet, requires a valid attestation object |
| `getWallet(address)` | Returns wallet metadata including balances and attached attestation |
| `createToken(params)` | Creates a new token with metadata and token authority attestation |
| `mintTokens(token, amount)` | Mints new tokens into the token authority’s wallet |
| `burnTokens(token, amount)` | Burns a specified quantity of tokens from the caller’s wallet |
| `stake(token, amount)` | Locks tokens to provide swap liquidity and earn fees or yield |
| `unstake(token, amount)` | Begins the unlock process for staked tokens |
| `getStakingStatus(wallet)` | Returns staked balances and unlock state for a wallet |
| `swap(tokenA, tokenB, amount, options)` | Performs a currency swap using liquidity pools |
| `getSwapQuote(tokenA, tokenB, amount)` | Returns expected output and fee for a proposed token swap |

---

##  Notes on Staking

- Staking is **not tied to nodes**.
- Tokens staked are **earn token authority-defined fees**.
- Token authorities define staking yield curves as a **monetary velocity throttle**, replacing interest rate levers.

---

##  Security and Enforcement

All methods automatically enforce:
- Attestation validity (`attestor_id` whitelisted)
- Jurisdictional compliance
- Sanctions list checks against (`attestor_id`, `attestation_id`)

Wallets without valid attestations cannot participate in transfers or staking.

---

