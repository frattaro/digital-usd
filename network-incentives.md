---
title: Network Incentives
nav_order: 8
---

# Network Incentives

This document defines the fee logic, anti-spam measures, and validator incentive structures that keep the Digital USD network functional, fair, and economically sustainable.

The system is designed to minimize friction for ordinary users while maintaining protocol-level deterrents against abuse and ensuring sufficient support for validator operations.

---

## Transaction Cooldown Model

To preserve free access for individuals while discouraging spam and congestion, the protocol implements a per-wallet cooldown-based fee mechanism:

- **Each wallet may send one free transaction every 10 seconds**
- **Transactions sent within the cooldown window incur a minimal fee** (e.g. 0.0001 USD token)
- **Cooldown resets after each transaction**

This approach ensures that ordinary users experience fee-free usage under typical patterns, while automated abuse (e.g. micro-spam, botnets) becomes economically costly.

### Multi-Wallet Abuse Prevention

Wallets are created via KYC attestations and are bound to a verified legal identity. This prevents adversaries from creating large numbers of wallets to bypass cooldowns.

Attempts to evade cooldowns through mass wallet creation may trigger automated compliance reviews, including detection under anti-money-laundering (AML) structuring heuristics.

### Legitimate High-Volume Use

Certain high-volume actors are expected to regularly exceed cooldown limits. These include:

- Payroll processors
- Government disbursement wallets
- Large-scale payment aggregators
- The U.S. Treasury (e.g. when minting QR-cash in bulk)

These entities may:
- Pay the minimal per-transaction fees
- Use transaction batching mechanisms
- Or receive protocol-level exemptions (e.g. fee waivers for specific disbursement categories)

In particular, **Treasury minting of QR-cash** is expected to occur in large batches. While QR-cash redemptions by users are always fee-free, **the minting process itself incurs standard per-transaction fees**, as a reflection of the network resources consumed.

---

## Token Fees

All transaction fees incurred due to cooldown violations are denominated in the **token being transferred** — not in a separate “gas” asset. This maintains protocol simplicity, eliminates the need to hold secondary tokens, and ensures that each token’s behavior reflects the design choices of its issuer.

### Fee Target and Governance

A protocol-wide **USD-denominated target fee** is maintained by the **governance committee**. This is the amount that cooldown-violating transactions are intended to cost in real economic terms. For example:

```
target_fee_token = "USD",
target_fee_amount = 0.03
```

This amount is designed to cover node operation costs — e.g., if a node processes 1,000,000 transactions per month, it would earn ~$30,000 in fees, enough to fund infrastructure and operations.

The governance committee may adjust this value periodically to reflect:
- Hosting and bandwidth costs
- Hardware lifecycle pricing
- Desired surplus for protocol-wide incentives or Treasury funding

### Per-Token Fee Conversion (via Swap Rate)

The protocol uses the **real-time market rate** from the token's swap pool to determine how much of the token must be deducted to meet the target fee.

This ensures:
- **Trustless pricing** — no manual overrides, no rate games
- **Dynamic adjustment** — fees auto-scale with token volatility
- **Zero special cases** — any token with a USD pool can be used for transfers

### Conversion Behavior

At the time of a cooldown-violating transaction:
- The protocol queries the most liquid on-chain swap pool for `$TOKEN/$TARGET`
- It calculates how many tokens are needed to meet or exceed the `target_fee`
- It rounds **up** to the smallest divisible unit of the token
- That amount is deducted as the fee

#### Examples:
- If `1 $RICH = 100,000,000 USD` (via swap pool) → fee = `0.0000000003 $RICH`
- If `1 $TRASH = 0.000000000001 USD` → fee = `30,000,000,000 $TRASH`

If no pool exists (or liquidity is too low to calculate a reliable rate), the token becomes **non-transferable under cooldown conditions** until a valid price can be sourced.

### Design Implications

- High-value tokens become expensive to spam (naturally)
- Joke tokens require real liquidity to be usable
- Token issuers don’t publish or manipulate rates — they must maintain real swap pools
- Pricing is composable and reflects actual usage, not admin fiat

This mechanism enforces token usability via market pressure — not governance intervention. If your token has no credible liquidity, it won't be used. That's by design.

### Fee Routing and Ownership

**All cooldown-based transfer fees go directly to node operators** who process the transaction. These fees are the **exclusive property of the operator**. This preserves **network sovereignty** and creates a **direct profit incentive** to operate infrastructure without inflation or coercion.

Governments that wish to impose a network-wide transfer tax may do so through this mechanism — transparently and fairly — rather than via opaque or income-based taxation.

> ### A Note on Taxes  
>  
> In a system like this, **future taxation could function as a voluntary payment by an unrelated party on behalf of a wallet**.  
>  
> There’s no need for wallets to be tied to legal identity up front. If an individual pays taxes on a wallet’s income, that’s enough — the protocol doesn’t care who they are or why.  
>  
> But because **payroll behavior is observable** — regular, similar-sized transfers from known employer wallets — the IRS (or any tax authority) can spot patterns.  
>  
> If taxes are being paid voluntarily by someone, nothing else is needed. But if a wallet is receiving income-like transfers and **no one is paying taxes on it**, the IRS may infer an unpaid tax liability.  
>  
> **Only then**, and **only through due process**, would a court order allow the wallet’s KYC attestation to be unmasked.  
>  
> This creates a model of **privacy-preserving taxation**, where liability arises from **behavioral pattern detection**, not from mandatory self-identification or preemptive surveillance.

### No Exemptions or Batching Discounts

All wallets are subject to cooldown-based fees. There are no exemptions nor workarounds. If an organization (e.g., payroll processor or nonprofit) sends high volumes, **they pay per transaction** — just like any other participant. Transfers are individually signed, timestamped, and assessed against the cooldown window. Each one is evaluated and charged independently.

The cost of doing business is borne by the sender — **as it should be**.

### Rationale

This model:

- Prevents spam without a gas token
- Maintains a neutral, universal fee system
- Makes tokens accountable for their economic characteristics
- Provides sustainable revenue to operators without inflation
- Creates the foundation for optional future tax policy (e.g. a per-transfer levy)

If a token is unusable due to divisibility or price design, the blame lies with the issuer — not the protocol. That’s by design.

---

## Validator Incentives (To be defined)

Validators are essential infrastructure providers and are expected to be:

- Publicly known entities
- Approved to operate under regulatory frameworks
- Motivated by policy alignment, infrastructure stewardship, or statutory obligation

The protocol does **not** offer traditional block rewards. Future sections will define:

- Validator cost recovery mechanisms
- Accepted fee tokens
- Tax treatment considerations
- Legal status as public infrastructure
