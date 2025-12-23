---
slug: spm-governance-framework
title: SPM Governance Framework
oneLiner: Governance is not permission-denial—it's clear decision-making under uncertainty
type: TEMPLATE
channel: GOVERNANCE
tags: ["governance", "process", "roles", "exceptions"]
difficulty: ARCHITECT
timeToApplyMin: 60
---

## What Governance Actually Means

SPM governance is not "here are rules, follow them." It's "here are the decisions we've made, here's how we make exceptions, here's who decides."

Bad governance creates bottlenecks and politics. Good governance creates clarity and speed.

A governance framework answers four questions:
1. **What decisions are fixed** (can't change)
2. **What decisions are flexible** (can change, with approval)
3. **Who has authority** to make each type of decision
4. **How do we handle disputes** (when someone disagrees)

## Governance Decisions: Fixed vs. Flexible

### Fixed Decisions (Set in Annual Planning, Don't Change Mid-Period)

These should be rock-solid. Changing them mid-period breaks credibility.

- **Plan structure**: Commission rate, accelerator thresholds, quota structure
- **Period definitions**: What's a calendar quarter vs. fiscal quarter for plan purposes?
- **Data sources**: CRM is the source of truth for deals, ERP for revenue recognition
- **Payout timing**: When payouts close, when they're processed, when reps receive payment
- **Dispute windows**: When can a rep challenge a payout? (Usually 30 days after posting)

### Flexible Decisions (Handled Case-by-Case With Governance)

These have rules, but the rules explicitly allow judgment.

- **Territory transitions**: When an account moves from Rep A to Rep B, how is credit split?
- **New rep onboarding**: Does a new rep get half quota? Full quota? Territory credit adjustments?
- **Exception deals**: Does this deal count toward quota even though it doesn't fit our model?
- **Promotion/demo accounts**: Are these full-credit deals or special-case deals?
- **Plan changes**: Can we adjust comp mid-year if business conditions change? (Yes, with governance)
- **Quota adjustments**: Can we adjust an individual rep's quota if their territory changed?
- **Split disputes**: When two reps claim credit for the same deal, how do we decide?

## Governance Structure: Roles and Authority

Your governance needs clear roles. No ambiguity about who decides what.

### Example Governance Structure

**Chief Revenue Officer (Sponsor)**
- Authority: Decides broad plan changes (moving from commission to salary, major comp restructuring)
- Escalation point for disputes about plan philosophy
- Approves annual plan design

**VP Sales Ops (Decision Owner)**
- Authority: Decides daily exceptions (this deal qualifies for exception, this split is 70/30 not 50/50)
- Approves territory transitions
- Manages payout disputes
- Reports exceptions to CFO monthly

**Comp Manager (Processor)**
- Authority: Executes decisions (applies plan rules, calculates payouts, documents decisions)
- Escalates to VP Sales Ops when a case isn't covered by existing rules
- Maintains audit trail of all decisions

**Finance Partner (Validator)**
- Authority: Reviews payouts before final posting (audit function)
- Validates that calculations match plan
- Flags patterns (are we adjusting too many deals?)

**Sales Leadership (Requestors)**
- Authority: Can request exceptions (this rep deserves credit adjustment)
- Submit territory changes, new rep requests
- But decisions are made by Sales Ops, not granted by Sales managers

## Governance in Action: The Exception Process

Here's what happens when a flexible decision is needed:

**Scenario**: Rep A closed a deal on Dec 31. Rep B claims it should be Jan 1 (different period, different plan). Who decides?

**Process**:
1. **Raise issue**: Rep A or their manager flags it with Sales Ops
2. **Gather data**: Sales Ops collects: deal details, CRM evidence, rep arguments
3. **Check rules**: Sales Ops looks in governance manual: "For deals crossing period boundary, use customer signature date" (or whatever rule applies)
4. **Apply rule**: If the rule is clear, Sales Ops decides
5. **If rule is unclear**: Sales Ops escalates to VP Sales with recommendation
6. **Document**: Decision and rationale added to file
7. **Inform parties**: All reps informed of decision and why
8. **Track pattern**: Finance reviews to see if this type of issue is recurring (might need a clearer rule)

## Building Your Governance Manual

Your governance should be documented. Here's what to include:

### Part 1: Fixed Decisions (Copy from Your Comp Plan)

Examples:
- "Plan year runs Jan-Dec"
- "Quota is set in October for next year"
- "Commissions are paid on the 15th of each month"
- "Calculation engine uses CRM close date and ERP revenue recognition date"

### Part 2: Flexible Decision Categories With Rules

Format: **Situation** → **Rule** → **Exception** → **Owner**

**Example 1: Territory Transitions**
- **Situation**: Account transitions from Rep A to Rep B
- **Rule**: Rep A gets credit for deals closed prior to transition date; Rep B gets credit for deals closed after
- **Exception**: If deal spans period boundary, use customer signature date
- **Owner**: VP Sales Ops (with Sales leadership input)

**Example 2: New Rep Onboarding**
- **Situation**: New rep is assigned to territory mid-quarter
- **Rule**: New rep gets X% quota allocation for remainder of quarter, prorated
- **Exception**: If new rep takes over from departing rep, gets 100% of assigned quota
- **Owner**: VP Sales Ops (with Finance validation)

**Example 3: Exceptional Deals**
- **Situation**: Deal falls outside normal product mix or sales motion
- **Rule**: Use standard commission rate unless deal cost/margin is outside norms
- **Exception**: If cost > 40% of revenue, escalate to CFO for approval
- **Owner**: Comp Manager (escalates to VP Sales Ops if cost unusual)

### Part 3: Escalation Matrix

When does a decision go up the chain?

**Comp Manager Decides Unilaterally**:
- Routine exceptions covered in governance manual
- <$50K impact to payout
- No policy interpretation needed

**VP Sales Ops Decides**:
- Exceptions with territory impact (affects multiple reps)
- $50K-$200K payout impact
- Interpretation of existing rules

**Executive Escalation (CRO/CFO)**:
- >$200K payout impact
- Potential legal/compliance issues
- Decisions that set precedent for future years

### Part 4: Dispute Resolution Process

What happens when someone disagrees with a decision?

**Step 1: Informal (Rep or Manager Disagrees)**
- Rep challenges to manager
- Manager works with Sales Ops
- Resolved in 3-5 days if possible

**Step 2: Formal (Still Disagreement)**
- Escalate to VP Sales Ops in writing
- Sales Ops gathers all evidence
- Decision issued within 5 business days with written justification
- Documented in dispute file

**Step 3: Appeal (Still Disagreement)**
- Escalate to CRO
- CRO reviews decision and evidence
- Decision is final
- Documented as precedent for future situations

## Governance Documentation Template

Create a living manual. Here's the structure:

```
GOVERNANCE MANUAL - [Company] SPM

1. FIXED DECISIONS (Don't change mid-period)
   - Plan year and periods
   - Data sources
   - Payout timing
   - Plan structure

2. FLEXIBLE DECISION RULES (Clear rules, specific owner)
   - Territory transitions
   - New rep onboarding
   - Deal exceptions
   - Quota adjustments
   - Split disputes
   - [Your company's specific cases]

3. ROLES AND AUTHORITY
   - [Role] - [Authority] - [Escalation point]

4. ESCALATION MATRIX
   - Decision type - Dollar threshold - Owner - Escalation path

5. DISPUTE RESOLUTION
   - [Process with timelines]

6. AUDIT TRAIL
   - [How we track decisions made]

7. REVIEW SCHEDULE
   - [When we review this manual]

Version: [Date], Last reviewed: [Date], Owner: [Title]
```

## Why Governance Fails (And How to Avoid It)

**"We don't have clear authority"**
Who decides? If it's not documented, it becomes political. Make it clear.

**"Our manual is 50 pages"**
Governance should be simple. If it takes 50 pages to explain, you're overcomplicating. Simplify the rules or simplify the plan.

**"We decide on the fly"**
Each time you decide without clear authority or rules, you create a precedent and future inconsistency. Document every decision.

**"Our rules aren't actually followed"**
If exceptions are common, your rules are wrong. Either change the rules or enforce them. Don't let rules become theater.

**"Salespeople don't know our governance exists"**
If reps don't know how decisions get made, they'll assume politics. Make it visible and transparent.

## Implementation Timeline

**Month 1**: Document your fixed decisions (comp plan structure)
**Month 2**: Identify common flexible decisions (what exceptions actually happen?)
**Month 3**: Create decision rules for flexible cases
**Month 4**: Define roles and authority clearly
**Month 5**: Test on historical cases (would your governance have handled them clearly?)
**Month 6**: Train the team (comp, sales ops, sales leadership, finance)
**Ongoing**: Track decisions, identify patterns, update manual quarterly

## Questions for Your Team

- If a rep disputes their payout today, who decides the outcome?
- What decisions require whose approval?
- Do you have a written manual of how exceptions are handled?
- Is your governance documented or is it "tribal knowledge"?
- Have you tested your governance rules on recent disputes?
- When was your governance framework last reviewed?
