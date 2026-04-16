#!/usr/bin/env python3
"""Edit WEBSITE-CONTENT.md with critical compliance fixes."""

import re

def main():
    file_path = '/Users/moshirazi/healinque-website/WEBSITE-CONTENT.md'

    with open(file_path, 'r') as f:
        content = f.read()

    # 1. Replace Exosome Therapy (### 13) with PRF Therapy
    exosome_pattern = r'### 13\. Exosome Therapy.*?(?=\n---\n###|\Z)'
    exosome_replacement = '''### 13. PRF Therapy

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

    content = re.sub(exosome_pattern, exosome_replacement, content, flags=re.DOTALL)

    # 2. Replace Peptide Therapy (### 16)
    peptide_pattern = r'### 16\. Peptide Therapy.*?(?=\n---\n###|\Z)'
    peptide_replacement = '''### 16. Peptide Therapy

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

    content = re.sub(peptide_pattern, peptide_replacement, content, flags=re.DOTALL)

    with open(file_path, 'w') as f:
        f.write(content)

    print("File updated successfully!")

if __name__ == '__main__':
    main()
