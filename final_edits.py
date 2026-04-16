#!/usr/bin/env python3
"""Final edits for compliance fixes."""

import re

def main():
    file_path = '/Users/moshirazi/healinque-website/WEBSITE-CONTENT.md'

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace entire Stem Cell Therapy section with Regenerative Medicine Consultation
    old_stem_cell = '''### 12. Stem Cell Therapy

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

    new_stem_cell = '''### 12. Regenerative Medicine Consultation

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

    content = content.replace(old_stem_cell, new_stem_cell)

    # 2. Replace entire Exosome Therapy section with PRF Therapy
    old_exosome = '''### 13. Exosome Therapy

**Full Description:** Exosome Therapy delivers powerful cell-signaling molecules that direct tissue repair and regeneration. These nano-sized vesicles carry growth factors, cytokines, and genetic material that instruct your cells to heal, rebuild, and rejuvenate — offering potent results for skin, hair, and systemic wellness.

**Quick Facts:**
- Duration: 45-60 minutes
- Downtime: Minimal, 1 day
- Results: Progressive over 4-8 weeks
- Price: $2,000-$5,000 per treatment

**How It Works:**
1. Health Assessment — Comprehensive evaluation to determine optimal exosome protocol for your goals.
2. Treatment Planning — Customized plan targeting your specific areas of concern — skin, hair, or systemic health.
3. Exosome Preparation — Laboratory-grade exosome preparations are readied for your treatment.
4. Application — Exosomes are delivered topically with microneedling, injected, or administered via IV depending on goals.
5. Cellular Activation — Exosomes begin communicating with your cells, triggering repair and regeneration cascades.

**Key Benefits:**
1. Delivers concentrated regenerative signaling molecules
2. Stimulates collagen, elastin, and tissue repair
3. Effective for skin rejuvenation and hair restoration
4. Enhances results of other regenerative treatments
5. No risk of rejection — cell-free therapy
6. Minimal downtime and comfortable procedure
7. Supports systemic anti-inflammatory effects
8. Cutting-edge science backed by emerging research

**Ideal For:**
1. Those seeking advanced regenerative skin treatments
2. Patients experiencing hair thinning or loss
3. Anyone wanting to enhance PRP or microneedling results
4. Those interested in longevity and cellular health
5. Individuals with chronic inflammation concerns
6. Patients wanting cutting-edge anti-aging protocols

**FAQs:**
- Q: What are exosomes? — A: Exosomes are tiny cell-derived vesicles that carry growth factors and signaling molecules. They act as messengers that instruct your cells to repair and regenerate.
- Q: How is this different from PRP? — A: While PRP uses your own platelets, exosomes deliver a more concentrated and diverse set of regenerative signals. They can be used alone or combined with PRP for enhanced results.
- Q: Is exosome therapy safe? — A: Yes. Exosomes are cell-free, meaning there is no risk of rejection. Dr. Shirazi uses only verified, laboratory-grade preparations.
- Q: What areas can be treated? — A: Face, scalp (for hair restoration), neck, hands, and joints. IV administration can support systemic wellness goals.
- Q: How many sessions are recommended? — A: Typically 1-3 sessions depending on your goals. Hair restoration may require a series, while skin rejuvenation often shows results after one treatment.'''

    new_prf = '''### 13. PRF Therapy

**Full Description:** Platelet-Rich Fibrin (PRF) is a second-generation platelet concentrate prepared from your own blood. Unlike traditional PRP, PRF is processed without anticoagulants, creating a natural fibrin matrix that releases growth factors gradually over 10–14 days. This slower release may support more sustained tissue repair and collagen stimulation. PRF is used at Healinque for skin rejuvenation, under-eye improvement, and as a complement to microneedling — always prepared fresh from your own blood in our office.

**Quick Facts:**
- Duration: 45–60 minutes
- Downtime: 1–2 days of mild redness
- Results: Progressive improvement over 4–8 weeks
- Price: $600–$1,200 per treatment

**How It Works:**
1. Blood Draw — A small sample of your blood is collected, similar to a routine lab draw.
2. PRF Processing — Blood is centrifuged at a specific speed (without additives) to produce a fibrin clot rich in platelets, white blood cells, and growth factors.
3. Skin Preparation — Treatment area is cleansed and numbed for comfort.
4. PRF Application — PRF is applied topically during microneedling, injected into targeted areas (under-eyes, face), or used in the scalp for hair support.
5. Healing Phase — The fibrin matrix releases growth factors gradually over the following days, supporting natural collagen remodeling.

**Key Benefits:**
1. 100% autologous — made entirely from your own blood
2. No synthetic additives, fillers, or foreign biological material
3. Gradual growth factor release over 10–14 days (vs. PRP's faster release)
4. Supports collagen production and tissue quality
5. Can complement microneedling, injections, and laser treatments
6. Low risk of allergic reaction since it's your own biology
7. Used for skin, under-eyes, and scalp applications

**Ideal For:**
1. Patients wanting natural skin rejuvenation without synthetic products
2. Those interested in under-eye improvement with the EyeGlow® technique
3. Anyone wanting to enhance microneedling results
4. Patients experiencing hair thinning who prefer autologous treatments
5. Those who value treatments using their own biology

**FAQs:**
- Q: How is PRF different from PRP? — A: Both come from your blood. PRP uses an anticoagulant and spins at higher speed to isolate platelets. PRF is processed without additives at a lower speed, creating a fibrin clot that acts as a scaffold — releasing growth factors more slowly over about 10–14 days. Some practitioners prefer PRF for skin and under-eye applications because of this sustained release.
- Q: Is PRF safe? — A: Because PRF is made from your own blood with no synthetic additives, allergic reaction risk is very low. As with any injection-based procedure, there are risks of bruising, swelling, soreness, and rarely infection. We maintain sterile technique and discuss all risks before treatment.
- Q: How many treatments do I need? — A: Most patients benefit from a series of 3–4 treatments spaced 4–6 weeks apart. Results build with each session as collagen remodeling progresses. Maintenance treatments every 6–12 months can help sustain improvement.
- Q: Can PRF help with dark circles? — A: PRF is a key component of our EyeGlow® technique for under-eye rejuvenation. It can help improve skin quality and reduce the appearance of darkness caused by thin skin and poor circulation. Results vary — dark circles have multiple causes, and Dr. Shirazi evaluates your specific situation during consultation.
- Q: What's the downtime? — A: Mild redness and slight swelling for 1–2 days. Most patients return to normal activities the same day or next day. We provide aftercare instructions to optimize healing.'''

    content = content.replace(old_exosome, new_prf)

    # 3. Replace Peptide Therapy (### 16)
    old_peptide_pattern = r'### 16\. Peptide Therapy.*?(?=\n---\n###|\Z)'

    new_peptide = '''### 16. Peptide Therapy

**Full Description:** Peptides are short chains of amino acids that act as signaling molecules in the body. Some peptides have been developed into FDA-approved medications — GLP-1 receptor agonists for weight management are a well-known example. At Healinque, our peptide protocols are limited to FDA-approved peptide medications and clinically supported compounds that meet current regulatory standards. We do not prescribe peptides that the FDA has classified as prohibited for compounding (Category 2), and we are transparent about what the evidence supports. If you've seen peptide therapy marketed with broad anti-aging or performance claims online, we can help you separate what's real from what's hype.

**Quick Facts:**
- Duration: Initial consult 45 min, ongoing as prescribed
- Downtime: None
- Results: Varies by medication and indication; typically 4–12 weeks
- Price: $300–$600/month depending on protocol

**How It Works:**
1. Medical Evaluation — Comprehensive review of your health goals, lab work, medications, and medical history.
2. Candidacy Assessment — Dr. Shirazi determines whether a peptide-based medication is appropriate for your specific situation and goals.
3. Medication Selection — Only FDA-approved peptide drugs or compounds with strong regulatory standing are recommended. We do not prescribe BPC-157, TB-500, or other peptides the FDA has moved to its prohibited compounding list.
4. Protocol Design — Dosing schedule, administration method, and monitoring plan are customized for you.
5. Ongoing Monitoring — Regular check-ins and lab work to assess your response and adjust as needed.

**Key Benefits:**
1. Access to FDA-approved peptide medications under physician supervision
2. Transparent about what is evidence-supported vs. what is marketing
3. No prohibited or Category 2 peptides prescribed
4. Individualized protocols based on lab work and clinical evaluation
5. Regular monitoring for safety and efficacy
6. Integrates with other Healinque wellness services

**Ideal For:**
1. Patients interested in FDA-approved peptide medications (e.g., GLP-1 agonists)
2. Those who want physician-supervised metabolic or wellness support
3. Anyone who has seen peptide marketing online and wants clinical guidance
4. Patients seeking honest evaluation of peptide therapy options

**FAQs:**
- Q: What happened to BPC-157 and other popular peptides? — A: Between 2023 and 2024, the FDA moved 17–19 peptides to its Category 2 list, meaning they are no longer permitted for compounding. This includes BPC-157, TB-500, AOD-9604, and several others that were widely marketed. We follow current FDA guidance and do not prescribe these compounds.
- Q: Which peptides do you offer? — A: We focus on FDA-approved peptide-based medications and compounds with established safety data. GLP-1 agonists for weight management are the most common peptide therapy we prescribe. During your consultation, Dr. Shirazi will discuss which options may be relevant to your goals.
- Q: Are peptides safe? — A: FDA-approved peptide medications have been through rigorous safety testing. Compounded or unregulated peptides — which are widely sold online — carry real risks including incorrect dosing, contamination, and undisclosed ingredients. FDA testing found up to 40% of online peptide products contained dosage errors. This is why physician oversight matters.
- Q: Do I have to inject peptides? — A: It depends on the medication. Some peptide drugs are injectable (similar to a small insulin-type injection), while others may be available in oral or nasal forms. We'll discuss administration options during your consultation.
- Q: Can peptide therapy replace diet and exercise? — A: No. Peptide medications work best as part of a broader health strategy that includes nutrition, movement, sleep, and stress management. We don't prescribe peptides as a shortcut — they're one tool in a comprehensive approach.'''

    content = re.sub(old_peptide_pattern, new_peptide, content, flags=re.DOTALL)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("All edits completed successfully!")

if __name__ == '__main__':
    main()
