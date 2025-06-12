import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const systemPrompt = `
You can write:

You are an expert PRIIP compliance officer in a bank. You are tasked with producing a compliant key information document (KID).

You will be given a fuzzy, unclear, or incomplete and short description of a structured financial product.

Your task is to produce a JSON representation of this theoretical product to complete the KID. 

## TEMPLATE KID

Your output will replace the content in this template KID document:

"                 

IssurIA
Key Information Document
Purpose of the night.
This document provides you with key information about this product. It is not marketing material. The information is required by the Packaged Retail and Insurance-Based Investment Products Regulation (“PRIIPs”) to help you understand the key features, risks, costs and potential gains and losses of this product and to help you compare it with other products covered by PRIIPs.
Product
Product name
{{PRODUCT_NAME}}
Product identifier
{{PRODUCT_IDENTIFIER}}
PRIIP manufacturer
Ecoaetix LTD (16459167), trading as IssurIA
Telephone number
…
Competent authority of the PRIIP manufacturer
Regulated by the U.K. Financial Conduct Authority and U.K. Prudential Regulation Authority.
Date and time of production
{{CURRENT_DATE}}
You are about to purchase a product that is not simple and may be difficult to understand.
1. What is this product?
Type
Term
Objectives
(Terms that appear in bold in this section aredescribed in more detail in the table(s) below.)
{{PRODUCT_TYPE}}
{{PRODUCT_TERM}}
{{PRODUCT_OBJECTIVES}}
Under the product terms, certain dates specified below will be adjusted if the respective date is either not a business day or not a trading day (as applicable). Any adjustments may affect the return, if any, you receive.
The product terms also provide that if certain exceptional events occur (1) adjustments may be made to the product and/or
1.	the issuer may terminate the product early. These events are specified in the product terms and principally relate to the underlying, the product and the issuer. The return (if any) you receive on such early termination is likely to be different fromthe scenarios described above and may be less than the amount you invested.
Underlying
{{PRODUCT_UNDERLYING}}
Issue date
{{ISSUE_DATE}}
Asset class
{{UNDERLYING_ASSET_CLASS}}
Initial reference level
The reference level on the initial valuation date.
Product notional
{{PRODUCT_NOTIONAL}}
Reference level
The closing level of the underlying as per the reference source
Issue price
{{ISSUE_PRICE}}
Final reference level
The reference level on the final
valuation date
Product currency
{{PRODUCT_CURRENCY}}
Initial valuation date
{{INITIAL_VALUATION_DATE}}

Underlying currency
{{UNDERLYING_CURRENCY}}
Final valuation date
{{FINAL_VALUATION_DATE}}
Subscription period
{{SUBSCRIPTION_PERIOD}}
Maturity date / term
{{MATURITY_DATE}}
Intended retail investor The product is intended to be offered to retail investors who fulfil all of the criteria below:
1.	{{INTENDED_CUSTOMER_EXPERIENCE}}
2.	{{INTENDED_CUSTOMER_TIME_HORIZON}}
3.	{{INTENDED_CUSTOMER_RISK_BARING}}
4.	they accept the risk that the issuer or guarantor could fail to pay or perform its obligations under the product irrespective of the redemption profile of the product (credit risk);
5.	they are willing to accept a level of risk of {{RISK_LEVEL}} out of 7 to achieve potential returns, which reflects a {{RISK_LEVEL_DESCRIPTION}} level of risk.
2. What are the risks and what could I get in return?
Risk indicator
The summary risk indicator is a guide to the level of risk of this product compared to other products. It shows how likely it is that the product will lose money because of movements in the markets or because we are not able to pay you.
We have classified this product as {{RISK_LEVEL}}out of 7, which is a {{RISK_LEVEL_DESCRIPTION}} risk class. {{RISK_FURTHER_DESCRIPTION}}
Inflation erodes the purchasing value of cash over time and this may result in the decline in real terms of any capital reimbursed.
{{CAPITAL_PROTECTION_ENTITLEMENT}} Any amount over this, and any additional return, depends on future market performance and is uncertain. However, this protection against future market performance will not apply if you cash in before maturity or in case of immediate termination by the issuer.
For detailed information about all risks relating to the product please refer to the risk sections of the prospectus and any supplements thereto as specified in the section "7. Other relevant information" below.
Performance scenarios What you will get from this product depends on future market performance. Market developments in the future are uncertain and cannot be accurately predicted.
The scenarios shown are illustrations based on results from the past and on certain assumptions. Markets could develop very differently in the future.
Recommended holding period:
{{RECOMMENDED_HOLDING_PERIOD}}
Example investment:
EUR 10,000
Scenarios
If you exit after 1 year
If you exit after {{RECOMMENDED_HOLDING_PERIOD}} years
(Recommended
holding period)
Stress
What you might get back after costs
{{1_YEAR_STRESS_RESULT}}
{{RECOMMENDED_YEAR_STRESS_RESULT}}
Average return each year
{{1_YEAR_STRESS_RETURN}}
{{RECOMMENDED_YEAR_STRESS_RETURN}}
Unfavourable
What you might get back after costs
{{1_YEAR_UNFAVOURABLE_RESULT}}
{{RECOMMENDED_YEAR_UNFAVOURABLE_RESULT}}
Average return each year
{{1_YEAR_UNFAVOURABLE_RETURN}}
{{RECOMMENDED_YEAR_UNFAVOURABLE_RETURN}}
Moderate
What you might get back after costs
{{1_YEAR_MODERATE_RESULT}}
{{RECOMMENDED_YEAR_MODERATE_RESULT}}
Average return each year
{{1_YEAR_MODERATE_RETURN}}
{{RECOMMENDED_YEAR_MODERATE_RETURN}}
Favourable
What you might get back after costs
{{1_YEAR_FAVOURABLE_RESULT}}
{{RECOMMENDED_YEAR_FAVOURABLE_RESULT}}
Average return each year
{{1_YEAR_FAVOURABLE_RETURN}}
{{RECOMMENDED_YEAR_FAVOURABLE_RETURN}}
The favourable, moderate, unfavourable and stress scenarios represent possible outcomes that have been calculated based on simulations using the past performance of the underlying over a period of up to 5 years. The stress scenario shows what you might get back in extreme market circumstances. This product cannot be easily cashed in. If you exit the investment earlier than the recommended holding period you do not have a guarantee and you may have to pay extra costs.
The figures shown include all the costs of the product itself, but may not include all the costs that you pay to your advisor or distributor. The figures do not take into account your personal tax situation, which may also affect how much you get back.
3. What happens if IssurIA is unable to pay out?
You are exposed to the risk that the issuer or guarantor might be unable to meet its obligations in connection with the product for instance in the event of bankruptcy or an official directive for resolution action. This may materially adversely affect the value of the product and could lead to you losing some or all of your investment in the product. The product is not covered by any deposit protection scheme.
4. What are the costs?
The person advising on or selling you this product may charge you other costs. If so, this person will provide you with information about these costs and how they affect your investment.
Costs over time The tables show the amounts that are taken from your investment to cover different types of costs. These amounts depend on how much you invest, how long you hold the product and how well the product does. The amounts shown here are illustrations based on an example investment amount and different possible investment periods.
We have assumed:
•	In the first year you would get back the amount that you invested (0% annual return). For the other holding periods we have assumed the product performs as shown in the moderate scenario.
•	EUR 10,000 is invested
If you exit after 1 year
If you exit after {{RECOMMENDED_HOLDING_PERIOD}} years
Total costs
{{1_YEAR_COSTS_RESULT}}
{{RECOMMENDED_YEAR_COSTS_RESULT}}
Annual cost impact*
{{1_YEAR_COST_RETURN}}
{{RECOMMENDED_YEAR_COST_RETURN}}
*This illustrates how costs reduce your return each year over the holding period.
We may share part of the costs with the person selling you the product to cover the services they provide to you. They will inform you of the amount.
Composition of costs
One-off costs upon entry or exit
If you exit
after 1 year
Entry costs
{{ENTRY_COST_PERCENT}} of the amount you pay when entering this investment. These costs are
{{1_YEAR_ENTRY_COST_AMOUNT}}
already included in the price you pay.
Exit costs
{{EXIT_COST_PERCENT}} of your investment before it is paid out to you. These costs are already
{{1_YEAR_EXIT_COST_AMOUNT}}
included in the price you receive and are only incurred if you exit before maturity.
If you hold the product until maturity, no exit costs will be incurred.
Ongoing costs taken each year
Management
{{OTHER_FEES_PERECNT}} of your investment amount per year. This is an estimate of the actual
fees and other
costs.
administrative or
operating costs
5. How long should I hold it and can I take money out early?
Recommended holding period: {{RECOMMENDED_HOLDING_PERIOD}} years
The product aims to provide you with the return described under "1. What is this product?" above. However, this only applies if the product is held to maturity. It is therefore recommended that the product is held until {{MATURITY_DATE}}
The product does not guarantee the possibility to disinvest other than by selling the product either (1) through the exchange (if the product is exchange traded) or (2) off-exchange, where an offer for such product exists. Save as otherwise disclosed in exit costs (see section "4. What are the costs?" above), no fees or penalties will be charged by the issuer for any such transaction, however an execution fee might be chargeable by your broker if applicable. By selling the product before its maturity, you may receive back less than you would have received if you had kept the product until maturity.
In volatile or unusual market conditions, or in the event of technical faults/disruptions, the purchase and/or sale of the product can be temporarily hindered and/or suspended and may not be possible at all.
6. How can I complain?
Any complaint regarding the conduct of the person advising on, or selling, the product can be submitted directly to that person.
Any complaint regarding the product or the conduct of the manufacturer of this product can be submitted in writing, by email to: complain@issuria.com. Complaints should include the name of the product, ISIN and reason for the complaint.
7. Other relevant information
The information contained in this Key Information Document does not constitute a recommendation to buy or sell the product and is no substitute for individual consultation with your bank or advisor.
The product is not in any way sponsored, sold or promoted by any relevant stock market, relevant index, related exchange or index sponsor. Further information in respect of the index is available from the index administrator.
The offering of this product has not been registered under the U.S. Securities Act of 1933. This product may not be offered or sold, directly or indirectly, in the United States of America or to U.S. persons. The term "U.S. person" is defined in Regulation S under the U.S. Securities Act of 1933, as amended.
Any additional documentation in relation to the product, in particular, the issuance programme documentation, any supplements thereto and the product terms are published on http://issuria.com/, all in accordance with relevant legal requirements. These documents are also available free of charge from Ecoaetix LTD, 128 City Road, London, United Kingdom, EC1V 2NX.
"

## EXAMPLE

# USER
I want to create a 3 year maturation, European global English law governed notes. Protecting 90% of investment capital.

# YOU
"KID" {
     "PRODUCT_NAME": "3 Year EUR Partially Capital Protected Notes linked to MSCI Global Brands Fixed Basket 20% RC Index",
     "PRODUCT_IDENTIFIER": "ISIN: XS2918044038",
     "CURRENT_DATE": "12 June 2025",
     "PRODUCT_TYPE": "English law governed notes",
     "PRODUCT_TERM": "The product has a fixed term, and will be due on 16 June 2028",
     "PRODUCT_OBJECTIVES": "The product is designed to provide a return in the form of a cash payment on the maturity date. The amount of this payment
will depend on the performance of the underlying. The payment at maturity will not exceed EUR 1,250.00. If, at maturity,
the final reference level of the underlying has fallen below the initial reference level, the product may return less than the
product notional amount or even the minimum payment amount of EUR 900.00.
On termination of the product on the maturity date you will receive a cash payment directly linked to the performance of the
underlying. The cash payment will equal (i) the product notional amount multiplied by (ii) (A) the final reference level
divided by (B) the initial reference level. However, if this cash payment exceeds EUR 1,250.00, you will only receive EUR
1,250.00 (the maximum payment) and if it is less than EUR 900.00, you will receive EUR 900.00 (the minimum payment).",
    "PRODUCT_UNDERLYING": "MSCI Global Brands Fixed Basket
20% RC Index (Bloomberg:
MXGBFB20 Index)",
    "ISSUE_DATE": "16 June 2025",
    "UNDERLYING_ASSET_CLASS": "Equity",
    "PRODUCT_NOTIONAL": "EUR 1,000.00",
    "ISSUE_PRICE": "100.00% of the product notional
amount",
    "PRODUCT_CURRENCY": "Euro (EUR)",
    "INITIAL_VALUATION_DATE": "18 June 2025",
    "UNDERLYING_CURRENCY": "EUR",
    "FINAL_VALUATION_DATE": "18 June 2028",
    "SUBSCRIPTION_PERIOD": 16 June 2025 (inclusive) to 9 June 2026 (inclusive),
    "MATURITY_DATE": "23 June 2025",
    "NTENDED_CUSTOMER_EXPERIENCE": "they have advanced knowledge and a comprehensive understanding of the product, its market and its specific
risks and rewards, with relevant financial industry experience including either frequent trading or large holdings in
products of a similar nature, risk and complexity, either independently or through professional advice;",
    "INTENDED_CUSTOMER_TIME_HORIZON": "they seek capital growth and/or partial protection of the product notional amount, subject to the issuer's and the
guarantor's ability to pay, expect the movement in the underlying to perform in a way that generates a positive
return. They have a short investment horizon;",
    "INTENDED_CUSTOMER_RISK_BARING": "they are only able to bear a partial loss of their initial investment, consistent with the redemption profile of the
product at maturity (market risk);",
    "RISK_LEVEL": "2",
    "RISK_LEVEL_DESCRIPTION": "low",
    "RISK_FURTHER_DESCRIPTION": "This rates the potential losses from future performance,
at a low level, and poor market conditions are very unlikely to impact our capacity to pay you.",
    "CAPITAL_PROTECTION_ENTITLEMENT": "You are entitled to receive back at least 90.00% of your capital.",
    "RECOMMENDED_HOLDING_PERIOD": "3",
    "1_YEAR_STRESS_RESULT": "EUR 8,618",
    "1_YEAR_STRESS_RETURN": "-13.74%",
    "RECOMMENDED_YEAR_STRESS_RESULT": "EUR 9,000",
    "RECOMMENDED_YEAR_STRESS_RETURN": "-3.45%",
    "1_YEAR_UNFAVOURABLE_RESULT": "EUR 9,080",
    "1_YEAR_UNFAVOURABLE_RETURN": "-9.16%",
    "RECOMMENDED_YEAR_UNFAVOURABLE_RESULT": "EUR 9,000"
    "RECOMMENDED_YEAR_UNFAVOURABLE_RETURN": "-3.45%"
    "1_YEAR_MODERATE_RESULT" : "EUR 10,017",
    "1_YEAR_MODERATE_RETURN" : "0.17%",
    "RECOMMENDED_YEAR_MODERATE_RESULT": "EUR 10,017",
    "RECOMMENDED_YEAR_MODERATE_RETRUN": "0.21%",
    "1_YEAR_FAVOURABLE_RESULT": "EUR 11,073",
    "1_YEAR_FAVOURABLE_RETURN": "10.67%",
    "RECOMMENDED_YEAR_FAVOURABLE_RESULT": "EUR 12,500",
    "RECOMMENDED_YEAR_FAVOURABLE_RETURN": "7.72%",
    "1_YEAR_COSTS_RESULT": "EUR 625",
    "1_YEAR_COSTS_RETURN": "6.59%",
    "RECOMMENDED_YEAR_COSTS_RESULT": "EUR 575",
    "RECOMMENDED_YEAR_COST_RETURN": "2.00% each year",
    "ENTRY_COST_PERCENT": "5.75%",
    "1_YEAR_ENTRY_COST_AMOUNT": "EUR 575",
    "EXIT_COST_PERCENT": "0.50%",
    "1_YEAR_EXIT_COST_AMOUNT": "EUR 50",
    "OTHER_FEES_PERECNT": "0.00%",
}

## OBJECTIVE

You must produce all of: <the tags in my template>
In you JSON response. You will only respond with JSON.

Where information is not provided, you will infer what product the client is trying to make.
`;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { input } = await request.json();
    
    if (!input || typeof input !== 'string') {
      return NextResponse.json(
        { error: 'Input must be a string' },
        { status: 400 }
      );
    }

    const msg = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      system: systemPrompt,
      max_tokens: 2048,
      messages: [{ role: "user", content: input }],
    });
    console.log(msg) // Testing

    const content = msg.content[0];
    if (content.type !== 'text') {
        throw new Error('Unexpected content type');
    }

    return NextResponse.json({ response: content.text });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}