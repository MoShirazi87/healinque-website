#!/usr/bin/env python3
"""Edit Stem Cell Therapy section."""

import re

def main():
    file_path = '/Users/moshirazi/healinque-website/WEBSITE-CONTENT.md'

    with open(file_path, 'r') as f:
        content = f.read()

    # Replace Stem Cell Therapy (### 12) with Regenerative Medicine Consultation
    old_section = '''### 12. Stem Cell Therapy

**Full Description:** Stem Cell Therapy represents the frontier of regenerative medicine. By harnessing the body's most powerful repair cells, this treatment promotes tissue regeneration, reduces inflammation, and activates deep healing processes for musculoskeletal, aesthetic, and systemic rejuvenation.

**Quick Facts:**
- Duration: 60-90 minutes
- Downtime: 1-2 days
- Results: Progressive over 3-6 months
- Price: $3,000-$8,000 per treatment

**How It Works:**
1. Comprehensive Evaluation — Detailed assessment of health history, goals, and suitability for stem cell treatment.
2. Source Selection — Determination of the optimal stem cell source and protocol for your specific condition.
3. Preparation — Stem cells are carefully prepared and quality-verified for your treatment.
4. Targeted Delivery — Stem cells are precisely administered to the treatment area using image guidance when needed.
5. Regeneration Monitoring — Follow-up assessments track tissue regeneration and treatment response over months.

**Key Benefits:**
1. Harnesses the body's most potent repair mechanism
2. Promotes true tissue regeneration, not just symptom relief
3. Addresses inflammation at the cellular level
4. Supports musculoskeletal and joint healing
5. Enhances skin quality and facial rejuvenation
6. May improve systemic health markers
7. Minimal procedure time relative to surgical alternatives
8. Progressive and long-lasting improvement

**Ideal For:**
1. Those seeking cutting-edge regenerative treatments
2. Patients with joint or musculoskeletal concerns
3. Anyone wanting to address aging at the cellular level
4. Those who have not responded to conventional treatments
5. Individuals interested in longevity optimization
6. Patients seeking alternatives to surgical intervention

**FAQs:**
- Q: Where do the stem cells come from? — A: Dr. Shirazi uses ethically sourced stem cell preparations. The specific source depends on your treatment goals and will be discussed during consultation.
- Q: Is stem cell therapy FDA-approved? — A: Some applications are FDA-approved while others are performed under medical practice guidelines. Dr. Shirazi will discuss the regulatory status specific to your treatment.
- Q: How soon will I notice results? — A: Some patients notice improvement within weeks, but regenerative processes typically peak at 3-6 months as stem cells promote tissue repair.
- Q: Is it safe? — A: When performed by a qualified physician like Dr. Shirazi, stem cell therapy has an excellent safety profile. All risks are discussed thoroughly during consultation.
- Q: How many treatments are needed? — A: Many patients achieve meaningful improvement with a single treatment. Some conditions benefit from 2-3 sessions spaced several months apart.'''

    new_section = '''### 12. Regenerative Medicine Consultation

**Full Description:** Regenerative medicine is a rapidly evolving field, and patient interest in treatments like stem cells and growth factor therapies has grown significantly. At Healinque, we believe patients deserve an honest, evidence-based conversation about what regenerative medicine can and cannot do today. Our Regenerative Medicine Consultation provides a thorough evaluation of your goals, a review of the current scientific evidence for various regenerative approaches, and a candid discussion of which options have the strongest clinical support for your specific concern. We focus on therapies with established safety profiles — including PRP and PRF — and are transparent about the regulatory status of newer modalities.

**Quick Facts:**
- Duration: 45–60 minute consultation
- Downtime: Varies by recommended treatment
- Results: Depends on the specific therapy recommended
- Price: $100 consultation (credited toward treatment)

**How It Works:**
1. Comprehensive Health Review — We review your medical history, current concerns, prior treatments, and goals.
2. Evidence Discussion — Dr. Shirazi walks you through the current state of evidence for regenerative therapies relevant to your concern, including what is FDA-approved, what is used off-label with supporting evidence, and what remains investigational.
3. Candidacy Assessment — Based on your health profile and goals, Dr. Shirazi determines which regenerative approaches may be appropriate for you.
4. Treatment Plan — If a regenerative therapy is recommended, you'll receive a detailed plan with expected outcomes, timeline, risks, and costs.
5. Informed Decision — You leave with the information you need to make a decision you feel good about. No pressure, no hype.

**Key Benefits:**
1. Honest, evidence-based evaluation of regenerative options
2. Focus on therapies with established safety profiles (PRP, PRF)
3. Transparent discussion of FDA approval status and regulatory context
4. Physician-led assessment — not a sales pitch
5. Personalized recommendations based on your health and goals
6. Coordination with other Healinque treatments for comprehensive care

**Ideal For:**
1. Patients curious about regenerative medicine who want honest guidance
2. Those with joint, skin, or hair concerns exploring non-surgical options
3. Anyone who has seen regenerative medicine marketed online and wants a physician's perspective
4. Patients who value transparency about evidence and risks

**FAQs:**
- Q: Do you offer stem cell therapy? — A: The term "stem cell therapy" is used broadly in marketing, but very few stem cell products are FDA-approved — and none are approved for anti-aging, skin rejuvenation, or joint pain in a med spa setting. We focus on regenerative therapies with stronger regulatory footing, like PRP and PRF, and are transparent about what the evidence does and does not support.
- Q: What about exosome therapy? — A: There are currently no FDA-approved exosome products for any cosmetic or regenerative use. While research is ongoing, we do not administer injectable exosome products. We may use topical growth factor serums as a complement to microneedling, and we'll clearly explain what these products are and what they are not.
- Q: What is the difference between PRP and PRF? — A: Both use components from your own blood. PRP (platelet-rich plasma) concentrates platelets and growth factors. PRF (platelet-rich fibrin) uses a different processing method that creates a fibrin matrix, allowing for a slower, more sustained release of growth factors. Both are autologous — meaning they come from your own body — which keeps allergic reaction risk low.
- Q: Is PRP FDA-approved? — A: The devices used to prepare PRP are FDA-cleared, but specific PRP applications (hair restoration, skin rejuvenation, joint support) are considered off-label uses. PRP has a growing body of clinical evidence, particularly for hair density in androgenetic alopecia, and is considered safe when prepared and administered properly.
- Q: What is this consultation like? — A: It's a candid, no-pressure conversation. Dr. Shirazi reviews your concerns, walks you through the evidence, and gives you her honest recommendation — even if that recommendation is that a regenerative approach isn't the best option for you.'''

    content = content.replace(old_section, new_section)

    # Also change the next section (### 13) from "Exosome Therapy" to "PRF Therapy" in the header line
    content = content.replace('### 13. Exosome Therapy', '### 13. PRF Therapy')

    with open(file_path, 'w') as f:
        f.write(content)

    print("Stem Cell section updated successfully!")

if __name__ == '__main__':
    main()
