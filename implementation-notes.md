---
title: Implementation Notes
nav_order: 6
---

# 🛠️ Tokenized Settlement System – Implementation Notes

This document provides implementation-level guidance for deploying the Direct Settlement Protocol on the Heiro ledger. It outlines how to configure a high-performance distributed ledger for real-value token settlement, staking-based monetary policy, and interoperable multi-token operation.

While the first production token is expected to be a digital USD issued by the Federal Reserve, the protocol is explicitly designed to support additional sovereign, corporate, or institutional tokens with independent governance and monetary rules.

---

## I. 🎯 Project Scope

- Replace legacy settlement networks (e.g., Fedwire, ACH) with a programmable, auditable ledger system
- Launch with a **single token** issued by a founding token authority (e.g., the Federal Reserve issuing digital USD)
- Establish core primitives for:
  - Token issuance and burning
  - Protocol-enforced compliance
  - Wallet creation with attestation
  - Velocity control via staking
  - Support for multi-token expansion; see [Currency Swaps and Liquidity](/digital-usd/swap-liquidity) for mechanics.
- Preserve compatibility with existing financial institutions (e.g., core banking software, Treasury workflows)
- Serve as a general-purpose foundation for other tokens with custom monetary policies

---

## II. 🔧 Bootstrapping the Ledger and Token Authority

### 1. Fork Heiro Ledger Token Service
- Clone: [https://github.com/hiero-ledger/hiero-consensus-node](https://github.com/hiero-ledger/hiero-consensus-node)
- License: Apache 2.0
- Remove legacy HBAR-specific logic:
  - Eliminate `hbarBalance` fields
  - Replace default fee and staking logic with token-specific parameters
  - Strip system reward features unrelated to the token layer

### 2. Define and Initialize the First Token

The founding token authority (e.g., the Federal Reserve) should first create its primary wallet, which will be used for minting, staking, and reserve operations.

To launch the first system token, the authority performs two steps:

1. **Create the token** via `createToken()`:

```jsonc
{
  "symbol": "USD",
  "description": "Digital U.S. Dollar",
  "decimals": 2,
  "staking_yield": 0.025,       // 2.5% APY
  "cooldown_period": 259200,    // 3 days (in seconds)
  "swap_fee": 3,                // 3 tokens, or a percentage of the swap amount
  "staking_inflation_cap": 0.02 // 2% annualized mint cap for yield
}
```

The `createToken()` method returns a `token_id` assigned by the system.

2. **Mint the initial supply** via `mintTokens(wallet, amount, fee_wallet, fee_token)`

- Minting to a wallet is explicit. It does **not** stake automatically.
- The **first mint** (when system token count is zero) is **free**.
- All subsequent mints require a **fee**, deducted from `fee_wallet`, in the specified `fee_token`.
- Node operators must publish a list of **accepted fee tokens**. The protocol will reject any mint request that attempts to pay fees in unsupported tokens. Applications should call `getAcceptedFeeTokens()` before submitting.

This token becomes the **first system-reserved settlement asset**, with special handling in SDK defaults and liquidity pools.

Additional tokens may be created using the same two-step process by other authorized entities, using their own policies and parameters.

---

## III. 🔐 Wallets and Attestations

### 1. Wallet Creation Flow
- User creates keypair via app
- Submits KYC to approved attestation provider (e.g. Socure, Alloy) and recieves attestation.
- Wallet attestation endpoint is called, during which attestation is verified via public attestor validation endpoint referenced from US Treasury allowlist.
- Attestation is signed and stored on-chain or as verifiable credential

### 2. Attestation Schema
```json
{
  "wallet": "0xABC...", // wallet identifier - 256-bit hash of public key
  "attestor_id": "attestor:us:001", // any string identifier supplied by US treasury
  "attestation_id": "4f3e8c51-d3c7-44f4-b77a-0123efabfa9a", // can be any string identifier
  "jurisdiction": "US", // All jurisdictional country codes in attestations follow **ISO 3166-1 alpha-2** (2-letter format)
  "issued_at": "2025-07-08T12:15:00Z" // standard ISO date format in GMT
}
```

---

## VI. 🏦 Banking Integration & Cutover

### 1. Core Banking Providers
- Fiserv, Jack Henry, Finastra, etc. integrate SDK
- see (SDK Specification)[/sdk-specification]

### 2. Treasury Conversion Flow
- Banks create wallets, Federal reserve sends bank wallets digital USD upon surrendering physical reserve balances via Fedwire or Fed account adjustment

See (monetary policy)[/monetary-policy] for more info

---

## VII. 📈 Performance and Scalability

### 1. Expected Load
- U.S. daily settlement volume ~300M transactions
- Target: 3,000–5,000 sustained TPS (with room for growth)

### 2. Heiro Ledger Token Service Benchmarks
- Transfers: >10,000 TPS
- Token mints: ~1,000 TPS (not frequent)

### 3. Optimization Plan
- Strip unused Heiro ledger services (e.g., Consensus Service)
- Streamline ledger state for multi-token flat structure
- Future: validator parallelization, state sharding

---

## VIII. 🛡️ Protocol Governance

### 1. Node Operators
- Operated by a trusted consortium (e.g., Federal Reserve Primary Dealers as an initial set)
- Fixed set of validators with quorum-based governance (e.g., 13 of 21 signatures required)
- Validators confirm transactions, verify attestations, and enforce protocol logic

### 2. Protocol Roles

| Role             | Description |
|------------------|-------------|
| **Wallet Holders** | Includes banks, businesses, individuals — hold and transact in USD |
| **Token Authorities** | Entities with permission to mint, burn, and stake tokens (e.g., the Federal Reserve for USD) |
| **Attestors**     | Approved identity providers who issue KYC attestations used for compliance |
| **U.S. Treasury** | Supplies attestator allowlist and denylist data; prints physical QR cash |
| **Validators**    | Trusted nodes that run the protocol, enforce transaction rules, compliance, and attestations |

### 3. Software Update Process
- Proposed by validators or protocol developers
- Requires multi-signature approval from quorum of node operators
- Scheduled into an upgrade window
- Rolled out across nodes during synchronized protocol update

---

## IX. 📌 Deployment Plan (Phased)

### Phase 1 – Testnet
- Internal testnet with Treasury + SDK
- Simulate USD issuance, QR cash
- Staking enabled

### Phase 2 – Pilot Network
- Onboard banks to testnet
- Mirror real ACH and Fedwire activity

### Phase 3 – Production Cutover (MVP)
- Treasury publishes genesis ledger snapshot
- Middleware redirects to SDK
- Paper USD surrendered for QR cash
- ACH & Fedwire turned off

### Phase 4 – Competing Currencies (Post-MVP)
- Token registry opened
- Currency swaps enabled
- Corporate/state tokens permitted

---

## X. 🧠 Final Notes

- MVP is **single-token only** (`USD`)
- The goal is **neutral infrastructure**: programmable, auditable, and permissioned, but open to competition
- This platform is the new foundation of direct settlement. Once live, everything else is software.

---
