# 🧭 Digital USD Infrastructure – System Overview

This document outlines a replacement settlement infrastructure for the U.S. dollar. It provides a modern, programmable alternative to Fedwire and ACH using KYC-attested wallets and tokenized USD. It introduces staking-based liquidity management, automated compliance, and eventual support for additional currencies — all while preserving compatibility with existing financial institutions and policy.

---

* TOC
{:toc}

---

## I. 🌐 Core Protocol Architecture

### 1. Digital USD as the Base Settlement Layer
- The Federal Reserve is the sole token authority for digital USD.
- The U.S. Treasury sells bonds to the Fed and receives digital USD tokens in return.
- All real reserves are token-based; there is no support for synthetic dollar creation at the protocol level.

### 2. KYC-Attested Wallets
- All wallets must include a Know Your Customer (KYC) attestation issued by an approved identity attestor.
- Attestations include metadata such as jurisdictional origin (e.g. country code).
- This enables:
  - Regulatory compliance
  - Sanctions enforcement
  - Transparency for audits and reporting
- Wallets are **pseudo-anonymous**: their identity is protected unless revealed by legal process.

### 3. Transaction Layer
- Protocol-level API includes:
  - `transfer(from, to, amount)`
  - `currency_swap(tokenA, tokenB)`
  - `get_attestation(wallet)`
  - `check_sanctions(from, to)`
- Application-layer developers are responsible for:
  - Recurring payments
  - Payroll processing
  - User-facing scheduling or batch logic

### 4. Public Transaction History
- All token transfers are permanently auditable.
- Enables third-party software to monitor for:
  - AML: Anti-Money Laundering triggers
  - SAR: Suspicious Activity Report conditions
  - CTR: Currency Transaction Report thresholds

---

## II. 🧩 Compliance & Enforcement

### 1. Sanctions Enforcement
- Every transaction checks two deny list formats:
  - Individual-level KYC hashes
  - Country-pair bans (e.g., from_country → to_country)
- Deny lists are synced hourly from a U.S. Treasury API service.

### 2. Immutable Attestations
- KYC attestations are permanently attached to wallets.
- They cannot be revoked, deleted, or purged after issuance.

### 3. Freeze & Legal Reporting
- Wallets can be frozen using a sanctions-style deny list.
- Banks or institutions may use public transaction data to report activity under AML/SAR/CTR rules.

---

## III. 🏦 Banking & Transitional Design

### 1. Support for Fractional Reserve Banking
- Banks may operate traditional internal ledgers that do not reflect full reserve backing.
- However, **withdrawals must be settled in real tokens** at the time of execution.
- Withdrawals may occur in any supported token (not just USD).

### 2. Staking-Based Interbank Liquidity
- Banks and large holders may stake surplus USD tokens.
- Staked liquidity is used by other institutions to fulfill short-term needs (e.g. withdrawal pressure).
- The protocol mints yield as compensation.
- The Fed sets the minimum yield rate to throttle liquidity velocity.
- Replaces Fed Funds Rate and Interest on Reserve Balances (IORB) as transitional mechanisms.

### 3. Interbank Lending Remains Off-Chain
- Interbank loans are managed through off-chain agreements between institutions.
- The protocol does not include loan execution, enforcement, or collateral logic.
- Lending behavior and risk management are left to the application layer.

---

## IV. 🪙 Monetary Policy Design

The system enables each token authority to define its own policy logic. However, Federal Reserve policy receives special handling to support transitional compatibility.

### 1. General Features
- All currencies operate with real, token-based reserves.
- The protocol itself has no built-in support for synthetic lending, money multiplication, or shadow issuance.

### 2. Yield & Liquidity Controls
- Staking provides a mechanism for token velocity control.
- The authority may mint yield to incentivize or disincentivize token retention or circulation.
- This replaces interest rates, reserve ratios, and other indirect levers.

### 3. Fed-Specific Analogues
- The Fed uses staking rates instead of Fed Funds Rate or IORB.
- Digital USD tokens held by banks are actual reserves.
- Interbank lending becomes a staking mechanism rather than an informal overnight repo system.

See (monetary policy)[/monetary-policy] for more details

---

## V. 📉 Taxation & Accounting

### 1. External Tax Handling
- Tax compliance is **not** enforced by the protocol.
- Capital gains, income classification, FX-like gains, and offsets are calculated by third-party tools.
- Protocol provides full historical data to support audit and calculation.

### 2. Auditable Cost Basis
- Public ledger allows tax software to:
  - Determine holding periods
  - Reconstruct cost basis
  - Calculate FIFO/LIFO scenarios
- Protocol does not embed tax rules or cost basis metadata.

---

## VI. 🧠 System Design Principles

### 1. Protocol-Level Neutrality
- Core protocol handles:
  - Token movement
  - Currency swaps
  - Sanctions and compliance enforcement
- UI/UX, banking apps, payroll tools, and internal ledgers are left to integrators.

### 2. Replacement of Legacy Infrastructure
- Designed to fully replace Fedwire and ACH functionality.
- Includes near-instant settlement, public auditability, and centralized compliance hooks.
- Retains backward compatibility through bank-led synthetic systems during transition.

### 3. KYC and Pseudonymity
- Wallets are pseudonymous to users and third parties.
- Identities are only resolvable through the original KYC attestor via court order.

---

## VII. 🏛️ Multi-Currency Expansion

This protocol is designed to support multiple currencies beyond digital USD, including both corporate and sovereign tokens. Each token is issued by a token authority responsible for supply and policy, while swap functionality and liquidity are provided by independent, fee-incentivized nodes.

### 1. Token Authorities
- A token authority is responsible for minting and redeeming its own currency.
- Authorities are not required to operate validator nodes or provide swap liquidity.
- Examples include: the Federal Reserve (USD), Walmart (WMT), or third-party synthetic issuers.

### 2. Currency Swap Infrastructure
- Swaps are routed through USD by default (e.g., `WMT → USD → SBX`).
- Each swap involves one or more liquidity providers holding real balances in both tokens.
- These providers stake funds and earn swap fees proportional to usage.
- Unpopular or new tokens may lack sufficient liquidity to support swaps.

### 3. Liquidity Dynamics
- Only the Fed can mint USD; all USD liquidity must be staked by holders.
- Swap failure is possible when no liquidity path exists, which is surfaced to users at transaction time.
- Stakers are naturally incentivized to support tokens with high demand or frequent swaps.

### 4. Monetary Competition
- Swap patterns create natural pressure on token policies.
- Well-governed currencies will be easier to trade and more useful, while poorly managed tokens will face liquidity scarcity.

---

## VIII. 💵 Physical Cash Integration

### 1. Tamper-Evident Tear-Open QR Code Cash

- Physical bills are printed by the U.S. Treasury and each corresponds to a **unique wallet** containing a fixed amount of digital USD tokens.
- Each note has a **tamper-evident seal** hiding the **private key**, and a **visible QR code** showing the public wallet address.
- These notes **function exactly like physical cash**: whoever possesses the paper, possesses the funds.

### 2. Treasury-Managed Issuance

- The U.S. Treasury creates a new wallet for every note printed.
- The treasury mints digital USD tokens into each wallet in advance.
- The private key is printed and sealed inside the note at the time of issuance.
- Denominations are fixed and printed directly on the note (e.g., $1, $5, $20).

### 3. Usage Behavior

- **Spending** a note does *not* require opening it.
- The bearer physically hands the note to the recipient, just like cash.
- **Transferring** the funds to a digital wallet **does** require opening the seal and scanning the private key.
- Once opened, the note is considered void for further physical transfer, as its private key is exposed.

### 4. Offline Utility and Finality

- Notes enable **offline peer-to-peer payments**, disaster recovery, and unbanked commerce.
- Value is **inherent to the physical item**, similar to bearer instruments.
- Finality is physical until the wallet is drained or the note is opened.

### 5. Anti-Fraud and Verification

- Public QR code allows anyone to verify the balance of a note in real time.
- Scanning the public key reveals:
  - Amount
  - Status (unspent/spent)
  - Wallet history (if transferred digitally)
- Tamper-evident seals prevent covert access to the private key.

---

## IX. 🛠️ Implementation Notes

A complete implementation of this protocol requires:

- Forking the Heiro token service open-source ledger codebase
- Replacing HBAR with a base-layer USD token
- Supporting SDK-based integration for financial core providers
- Integrating Treasury-controlled QR-code note issuance

For details, see: [/implementation-notes/](/implementation-notes/)

---