---
title: Implementation notes
nav_order: 6
---

# 🛠️ Digital USD – Implementation Notes

This document provides implementation-level guidance for building the Digital USD infrastructure as described in the [System Overview](/digital-usd). It focuses on protocol-level design, system modifications, and transitional integration with current financial infrastructure.

---

## I. 🎯 Project Scope

- Replace ACH and Fedwire with a high-performance distributed ledger
- Use a **native token (USD)** backed by Federal Reserve issuance
- Preserve compatibility with Treasury cash operations and existing bank infrastructure
- Enable **future support** for competing currencies

---

## II. 🔧 Forking Heiro ledger services and Replacing HBAR

### 1. Clone & Customize Heiro Services Node
- Start from: [https://github.com/hiero-ledger/hiero-consensus-node](https://github.com/hiero-ledger/hiero-consensus-node)
- License: Apache 2.0

### 2. Remove/Stub HBAR Logic
- Eliminate `hbarBalance` fields from account structures
- Refactor fee calculation logic to default to `TokenID(USD)`
- Strip staking, IORB yield, and system reward logic tied to HBAR
- Replace all fee payment and transaction execution costs with USD-only accounting

### 3. Bootstrap Native USD Token
- Create `TokenID(0.0.1001)` at genesis block
- Hardcode as system-reserved "base currency"
- Treasury wallet (e.g. `0.0.2`) receives initial mint
- USD token enforces:
  - No user mint/burn
  - Transferability restricted by attestation

---

## III. 🔐 Wallets and Attestations

### 1. Wallet Creation Flow
- User creates keypair via app
- Submits KYC to approved attestation provider (e.g. Socure, Alloy)
- Attestation is signed and stored on-chain or as verifiable credential

### 2. Attestation Schema
```json
{
  "wallet": "0xABC...", // wallet identifier
  "attestor_id": "attestor:us:001", // any string identifier supplied by US treasury
  "attestation_id": "4f3e8c51-d3c7-44f4-b77a-0123efabfa9a", // can be any string identifier
  "jurisdiction": "US", // All jurisdictional country codes in attestations follow **ISO 3166-1 alpha-2** (2-letter format)
  "timestamp": "2025-07-08T12:15:00Z" // standard ISO date format in GMT
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
