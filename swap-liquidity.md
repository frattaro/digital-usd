---
title: Currency Swaps & Liquidity
nav_order: 8
---

# 🔄 Currency Swaps and Liquidity Provisioning

This document defines how token swaps are performed within the Digital USD system using permissionless liquidity pools. It describes how users provide liquidity, how fees are earned, and how swaps are executed — including optional multi-hop routing.

This functionality is built independently of the Heiro ledger base and does **not** exist in the default fork. It must be implemented separately as a decentralized application or protocol extension.

---

## I. 💱 Purpose

- Enable on-chain token-to-token swaps (e.g. USD ↔ EUR)
- Facilitate decentralized price discovery
- Allow voluntary liquidity provisioning by any participant
- Support eventual multi-currency interoperability

Token authorities **do not control or approve** swap behavior. Once tokens are issued, the market determines their utility and price.

---

## II. 🏗️ Liquidity Pool Structure

Each swap pair is managed by a **dedicated liquidity pool**, with a canonical system-created wallet. Pools are created dynamically on first use.

### Pool Creation

```ts
provideLiquidity(tokenA, tokenB, amountA, amountB, feeBps)
```

- Creates a pool if it does not exist
- Enforces a canonical token order (e.g., lexicographic)
- LP must deposit both tokens
- `feeBps` defines the **basis point fee** (e.g., 30 = 0.3%)
- Optionally, a **flat fee** may also be defined later

> ⚠️ First liquidity provider sets the initial price. This is a known risk.

### Pool Ownership
- LPs may receive a proportional share receipt (e.g., LP token or metadata)
- Withdrawals return both tokens in ratio to the pool balance
- Impermanent loss applies when prices shift post-deposit

---

## III. 🔁 Swap Execution

```ts
swap(tokenIn, tokenOut, amountIn, options?)
```

- Uses a **constant product AMM** model (`x * y = k`)
- Charges the specified pool fee (basis points + optional flat)
- Sends `amountOut` to recipient wallet

### Options:
```ts
{
  allowMultiHop: true,
  maxHops: 3,
  minimizeFees: true
}
```

- **Multi-hop routing** is used only when a direct pair lacks sufficient liquidity
- Path selection aims to **minimize effective fee impact**

---

## IV. 🧠 Multi-Hop Routing

Multi-hop swaps enable price discovery and **passive liquidity balancing** across pools. For example:

```
WMT → USD → EUR
```

If WMT↔EUR is undersupplied but WMT↔USD and USD↔EUR are healthy, the system finds the optimal route — balancing both price and fee load.

> Complex routing is opt-in and should only be invoked when direct swaps fail.

---

## V. 🧾 Fee Structure

Liquidity providers earn:
- **Basis point fee**: A percentage of the input or output amount
- **Optional flat fee**: Prevents spam and ensures minimum compensation

Fees are:
- Collected into the pool
- Claimed proportionally by LPs upon withdrawal or distribution interval

> Token authorities have no say in fee setting, routing, or swap approval.

---

## VI. 🔐 Permissionless Design

- Any wallet may create or fund a liquidity pool
- No allowlists, registrations, or external permissions are required
- Pools exist as smart wallets with predictable addresses and public state

This supports decentralized markets, composability, and autonomous token ecosystems.

---

## VII. ⚠️ Risks & Considerations

| Risk | Description |
|------|-------------|
| **Price bootstrapping** | First LP defines price. Early deposits can be exploited. |
| **Impermanent loss** | LPs lose relative value when token prices diverge after deposit. |
| **Failed swaps** | If no liquidity path exists, swap will fail. |
| **Route complexity** | Multi-hop swaps require efficient routing algorithms to avoid excess fees. |

Advanced pricing mechanisms (e.g., oracles or dynamic curves) are intentionally omitted to avoid complexity, external dependencies, and governance issues.

---

## VIII. ✅ Summary

- Currency swaps are powered by **user-funded liquidity pools**
- Swaps use a **constant product AMM**, with optional flat and variable fees
- Multi-hop swaps are supported, but opt-in and fee-aware
- Token authorities **do not control** or influence swaps in any way
- All functionality is built off-chain and must be implemented by application developers

This system provides a simple but extensible foundation for decentralized price discovery, FX interoperability, and market-driven monetary dynamics.

---
