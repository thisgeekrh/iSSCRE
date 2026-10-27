// Blog posts for isellscre.com/blog/.
// Each post is rendered by build-site.mjs. Section "html" is trusted, hand-written markup.
// Add new posts to the TOP of this list so the blog index shows newest first.
// Do not use em dashes anywhere (the validator rejects them).
// category: a short label such as "Relocation", "Buying", "Selling", "Market Update", "Community".
// image: a 1600x840 WebP in assets/images/blog/ (see scripts/make-post-images.py, or drop in a real photo).

export const posts = [
  {
    slug: "blog/columbia-sc-housing-market-fall-2026-buyers.html",
    label: "Columbia, SC Housing Market: Fall 2026 Update for Buyers",
    title: "Columbia SC Housing Market Fall 2026: What 7% Rates Mean for Buyers",
    description: "Mortgage rates are back above 7%, but Columbia, SC has more listings, more price cuts, and homes selling below asking. Here is what that means for buyers this fall.",
    h1: "Columbia, SC Housing Market, Fall 2026: What 7% Rates Mean for Buyers",
    lead: "Mortgage rates climbed for most of the fall and are still above 7%. That is the headline. The part most people miss is what it has done to competition in the Midlands, and why that can work in a buyer's favor.",
    date: "2026-10-26",
    dateDisplay: "October 26, 2026",
    readMinutes: 6,
    category: "Market Update",
    image: "columbia-market-fall-2026",
    imageAlt: "Market update graphic: 7.32% 30-year mortgage average, active listings up 14.8%, 24.7% of listings with price cuts",
    agentNote: "Our Midlands agents are writing offers in this market every week, in Columbia, Lexington, Irmo, Chapin, and Blythewood.",
    sections: [
      {
        h2: "Where mortgage rates stand right now",
        html: `<p>Freddie Mac's weekly survey put the average 30-year fixed mortgage at <strong>7.32%</strong> for the week of October 22, 2026, down from 7.40% the week before. That was the first weekly drop after a seven-week climb that started near 6.65% in late August. A year ago, the same average was 6.19%. The 15-year fixed averaged 6.68%.</p><p>The Federal Reserve meets October 27 and 28. Fed decisions and mortgage rates are related, but the Fed does not set mortgage rates directly, so nobody can promise where rates go next. Plan around the rate you can get today, not a guess about next month.</p>`
      },
      {
        h2: "What higher rates have done to the Columbia market",
        html: `<p>Higher rates have pulled some buyers to the sidelines, and the Columbia numbers show it:</p><ul><li><strong>More choices.</strong> Realtor.com counted 3,111 active listings in the Columbia metro in August 2026, up 14.8% from a year earlier.</li><li><strong>More price cuts.</strong> About 24.7% of listings had a price reduction, and the median list price was about $301,600, down 2.8% from last year.</li><li><strong>More time to decide.</strong> Median days on market rose to 53 for listings, and Redfin reported homes in the city of Columbia taking about 40 days to sell, 8 days longer than a year earlier.</li><li><strong>Room to negotiate.</strong> Redfin's August data showed Columbia homes selling for about 98.3% of list price on average, so roughly 1.7% under asking.</li></ul><p>Prices have not crashed. Redfin's median sale price for the city was about $278,800, up 1.2% from last year. What has changed is leverage. In 2021 and 2022, buyers waived inspections to compete. Today, many sellers are the ones making concessions.</p>`
      },
      {
        h2: "The real cost: what 7.32% means for your payment",
        html: `<p>On a $280,000 home with 10% down, a $252,000 30-year loan at 7.32% is about <strong>$1,731 a month</strong> in principal and interest. At last year's 6.19% average, the same loan would be about $1,542. That is roughly $189 a month, before taxes and insurance.</p><p>That gap is real, but it can be smaller than it looks once you negotiate. A 2% price reduction on a $280,000 home is $5,600. Many sellers in this market will also consider paying part of a buyer's closing costs or helping fund a rate buydown, which can lower your payment for the first few years or for the life of the loan. Every lender and loan program handles this differently, so ask your lender to show you the numbers side by side.</p>`
      },
      {
        h2: "How smart buyers are using this market",
        html: `<ul><li><strong>Get pre-approved first.</strong> A strong pre-approval makes your offer easier for a seller to say yes to, even when you are asking for concessions.</li><li><strong>Look at homes that have sat.</strong> A listing past 30 to 45 days, or one that already cut its price, often has the most flexible seller.</li><li><strong>Ask for help with costs, not just price.</strong> Depending on your loan, seller-paid closing costs or a buydown can save you more each month than a small price cut.</li><li><strong>Keep your protections.</strong> In this market you usually do not have to waive inspections or shorten your due diligence period to compete.</li><li><strong>Be careful with "just refinance later."</strong> Refinancing may help if rates fall, but it is not guaranteed and it has costs. Buy a payment you are comfortable with today.</li></ul>`
      },
      {
        h2: "Moving to South Carolina from out of state?",
        html: `<p>For buyers relocating from higher-cost states, the Midlands still stands out. Columbia's median sale price is well below what many New York, California, and Northeast buyers are used to, and South Carolina's 4% legal residence property tax rate on a primary home keeps carrying costs lower once you apply for it. Our guide to <a href="/blog/buying-a-home-in-south-carolina-from-out-of-state.html">buying a South Carolina home from out of state</a> walks through the whole process.</p>`
      }
    ],
    faq: [
      ["What are mortgage rates in South Carolina right now?", "Freddie Mac's national average for a 30-year fixed mortgage was 7.32% for the week of October 22, 2026. Rates in South Carolina track the national average closely, but your rate depends on your credit, down payment, loan type, and lender."],
      ["Is it a buyer's market in Columbia, SC?", "As of late summer and fall 2026, Columbia is leaning toward buyers. Active listings were up about 15% from a year earlier, about a quarter of listings had price cuts, and homes were selling for roughly 98% of list price on average."],
      ["Should I wait for mortgage rates to drop before buying?", "No one can reliably predict rates. Waiting may mean more competition if rates fall and more buyers return. Many buyers focus on finding a home and payment that work today, and use negotiation, seller concessions, or a rate buydown to lower costs."],
      ["How much is a mortgage payment on a $280,000 home in Columbia at 7.32%?", "With 10% down, a $252,000 30-year loan at 7.32% is about $1,731 a month in principal and interest, before property taxes, homeowners insurance, and any mortgage insurance."]
    ],
    sources: [
      { title: "Freddie Mac via GlobeNewswire: Mortgage Rates Decrease to 7.32% (Oct. 22, 2026)", url: "https://www.globenewswire.com/news-release/2026/10/22/3386709/0/en/mortgage-rates-decrease-to-7-32.html" },
      { title: "Bridgepoint: Freddie Mac rates October 22, 2026, and FOMC timing", url: "https://www.bridgepointrea.com/blog/freddie-mac-mortgage-rates-october-22-2026" },
      { title: "Beaufort Mortgage: Columbia SC housing market update (summarizing Redfin and Realtor.com August 2026 data)", url: "https://beaufort.mortgage/blog/columbia-sc-housing-market-update" },
      { title: "Redfin: Columbia, SC housing market", url: "https://www.redfin.com/city/4149/SC/Columbia/housing-market" },
      { title: "Realtor.com: Columbia, SC housing market, August 2026", url: "https://www.realtor.com/news/local/columbia-sc-housing-market-columbia-sc-august-2026/" },
      { title: "Richland County: Legal Residence (4%) assessment", url: "https://www.richlandcountysc.gov/Property-Business/Property-Valuation/Legal-Residence" }
    ]
  },
  {
    slug: "blog/buying-a-home-in-south-carolina-from-out-of-state.html",
    label: "Buying a South Carolina Home from Out of State",
    title: "How to Buy a Home in South Carolina from Out of State | Step by Step",
    description: "A step-by-step guide to buying a South Carolina home from another state: financing, remote tours, offers, inspections, attorney closings, and avoiding wire fraud.",
    h1: "How to Buy a Home in South Carolina from Out of State",
    lead: "Most of our relocating buyers live hundreds of miles away when they start their search. With the right plan, you can do most of the work remotely and save your trip for the homes that really matter.",
    date: "2026-10-25",
    dateDisplay: "October 25, 2026",
    readMinutes: 7,
    category: "Buying",
    image: "buying-from-out-of-state",
    imageAlt: "Four-step graphic: plan, tour, offer, close",
    agentNote: "Our team works with out-of-state buyers across Columbia, Lexington, Lake Murray, Blythewood, York County, and Myrtle Beach.",
    sections: [
      {
        h2: "Step 1: Pick the area before the house",
        html: `<p>The most common mistake long-distance buyers make is falling in love with a listing before they know the area. Start with the questions that shape daily life: where you will work, how long a commute you will accept, school priorities, how much yard and space you want, and what you like to do on weekends.</p><p>A good local agent should be able to turn those answers into a short list of communities and explain the tradeoffs between them before you look at a single house.</p>`
      },
      {
        h2: "Step 2: Get pre-approved with a lender licensed in South Carolina",
        html: `<p>A pre-approval tells you what you can comfortably spend and shows sellers you are serious, which matters even more when you are not there in person. Use a lender licensed to lend in South Carolina who can explain local costs such as property taxes and insurance, since those can look very different from what you pay now.</p><p>If you are selling a home where you live now, ask your lender how that sale affects your approval and timing.</p>`
      },
      {
        h2: "Step 3: Tour remotely, then visit with a focused list",
        html: `<p>Live video tours let you walk through a home with your agent, ask questions in real time, and see things listing photos leave out, like road noise, neighbors, and the condition of the yard. Ask your agent to drive the neighborhood on camera too.</p><p>Once you have narrowed it down, plan one focused trip to see your top homes in person. Some buyers are comfortable making an offer on a home they have only seen by video, but only do that if you understand what you are giving up and have a strong inspection plan.</p>`
      },
      {
        h2: "Step 4: Write a strong offer and protect yourself",
        html: `<p>Your agent will help you price the offer using recent sales and current competition. South Carolina contracts typically include a period for inspections and other due diligence, and the length of that period and any related fee are negotiated as part of the offer. Use that time well: schedule the home inspection quickly, and add specialist inspections such as wood-destroying insect, HVAC, roof, or septic when the property calls for it.</p><p>Your agent can attend inspections and walk you through the findings on video, so you can make decisions without flying back.</p>`
      },
      {
        h2: "Step 5: Close with a South Carolina attorney",
        html: `<p>South Carolina is an attorney state. The South Carolina Supreme Court has held that licensed attorneys must be involved in residential real estate closings, supervising key steps such as title work, closing, disbursement of funds, and recording. As the buyer, you generally get to choose the closing attorney.</p><p>Many attorneys can arrange for out-of-state buyers to sign documents remotely or by mail. Ask early about what is available so you can plan your travel.</p>`
      },
      {
        h2: "Watch out for wire fraud",
        html: `<p>Criminals target home buyers with fake emails that look like they come from the closing attorney or agent and contain changed wiring instructions. Never wire money based on instructions received only by email. Before sending funds, call the closing attorney's office at a phone number you found independently, not one listed in the email, and confirm the instructions.</p>`
      },
      {
        h2: "After closing: claim the 4% legal residence rate",
        html: `<p>If the home will be your primary residence, apply with the county assessor for the 4% legal residence assessment instead of the standard 6%. It also removes school operating millage from your tax bill. Counties typically ask for proof such as a South Carolina driver's license and vehicle registration at the new address, so update those soon after you move in.</p>`
      }
    ],
    sources: [
      { title: "USFN: South Carolina Supreme Court analyzes unauthorized practice of law in closings", url: "https://www.usfn.org/blogpost/1296766/283692/South-Carolina-State-Supreme-Court-Analyzes-Unauthorized-Practice-of-Law" },
      { title: "Richland County: Legal Residence (4%) assessment", url: "https://www.richlandcountysc.gov/Property-Business/Property-Valuation/Legal-Residence" }
    ]
  },
  {
    slug: "blog/moving-from-florida-to-south-carolina.html",
    label: "Moving from Florida to South Carolina",
    title: "Moving from Florida to South Carolina | Taxes, Insurance, and Where to Live",
    description: "Thinking of moving from Florida to South Carolina? An honest look at income taxes, homeowners insurance, weather, and which parts of SC Florida buyers choose.",
    h1: "Moving from Florida to South Carolina: An Honest Guide",
    lead: "Florida is one of the top three states sending new residents to South Carolina. Some are native Floridians, and many are northerners who moved south and are now moving halfway back. Here is what really changes.",
    date: "2026-10-25",
    dateDisplay: "October 25, 2026",
    readMinutes: 6,
    category: "Relocation",
    image: "florida-to-south-carolina",
    imageAlt: "Route graphic from Florida to South Carolina",
    agentNote: "Our team helps Florida buyers compare the Midlands, the Grand Strand, and York County.",
    sections: [
      {
        h2: "Floridians are a big part of South Carolina's growth",
        html: `<p>U.S. Census Bureau data for 2024 shows about 18,000 people moved from Florida to South Carolina, putting Florida among the top three states sending new residents here. You may hear the term "halfbacks" for people who moved from the Northeast or Midwest to Florida and later moved halfway back up the coast to the Carolinas.</p>`
      },
      {
        h2: "Income taxes: be realistic",
        html: `<p>Florida has no state income tax, and South Carolina does. For 2026, South Carolina's rate is 1.99% on incomes under $30,000, and for incomes of $30,000 and above it is 5.21% of taxable income minus $966. South Carolina does not tax Social Security benefits, which helps many retirees, but working households coming from Florida should plan for a state income tax bill they did not have before.</p><p>For many Florida buyers, the savings show up somewhere else, which brings us to insurance.</p>`
      },
      {
        h2: "Homeowners insurance is often the big difference",
        html: `<p>A 2026 analysis by Insurance.com put the average annual homeowners premium at about $8,471 in Florida, compared with about $2,870 in South Carolina, for the same sample policy with $300,000 in dwelling coverage. Your own quote will depend on the home, its age, its location, and its distance from the coast. Coastal South Carolina homes, including parts of the Grand Strand, usually cost more to insure than homes inland, so get quotes on specific properties before you commit.</p>`
      },
      {
        h2: "Seasons, without giving up warm weather",
        html: `<p>South Carolina summers are still hot and humid, but you get a real fall and spring and mild winters, with an occasional cold snap. The Midlands sit well inland, about two hours from the coast, which many Florida movers like after years of watching hurricane forecasts closely.</p>`
      },
      {
        h2: "Where Florida buyers tend to look",
        html: `<ul><li><strong>Myrtle Beach and the Grand Strand:</strong> for buyers who still want to be near the beach, with a lot of retirees and second-home owners.</li><li><strong>Columbia, Lexington, and Lake Murray:</strong> for buyers who want lake life or a central location with access to the coast, the mountains, and Charlotte.</li><li><strong>Rock Hill and York County:</strong> for buyers who want to be near Charlotte for work or family.</li></ul><p>We help you compare these areas based on how you actually want to live, not just the price per square foot.</p>`
      },
      {
        h2: "Selling in Florida and buying here",
        html: `<p>If you need to sell in Florida, we can connect you with a Coldwell Banker agent there and coordinate the timing so you are not paying for two homes longer than necessary.</p>`
      }
    ],
    sources: [
      { title: "USAFacts: What states are people in South Carolina moving to and from?", url: "https://usafacts.org/answers/what-states-are-people-moving-to-and-from/state/south-carolina/" },
      { title: "South Carolina Department of Revenue: Information about H.4216", url: "https://dor.sc.gov/news/information-about-h-4216" },
      { title: "Insurance.com: Where is home insurance least affordable in 2026?", url: "https://www.insurance.com/home-and-renters-insurance/home-insurance-unaffordable-states/" }
    ]
  },
  {
    slug: "blog/moving-from-california-to-south-carolina.html",
    label: "Moving from California to South Carolina",
    title: "Moving from California to South Carolina | 2026 Relocation Guide",
    description: "Moving from California to South Carolina? Compare state income taxes, plan a cross-country home search, and learn which SC communities fit your lifestyle.",
    h1: "Moving from California to South Carolina: A 2026 Guide",
    lead: "California sends more people to South Carolina than any state outside the Southeast and New York. A cross-country move takes more planning, but the payoff for many families is more house, lower taxes, and a slower pace.",
    date: "2026-10-25",
    dateDisplay: "October 25, 2026",
    readMinutes: 6,
    category: "Relocation",
    image: "california-to-south-carolina",
    imageAlt: "Route graphic from California to South Carolina",
    agentNote: "Hollie Stabler, a certified Relocation Specialist, and the rest of our team regularly help buyers who are moving across the country.",
    sections: [
      {
        h2: "Californians are choosing South Carolina",
        html: `<p>U.S. Census Bureau data for 2024 shows about 8,700 people moved from California to South Carolina, making it the fifth largest source of new residents. Most are making a 2,500 mile move, which means much of the home search has to happen remotely.</p>`
      },
      {
        h2: "Income taxes: a meaningful difference for most households",
        html: `<p>California's 2026 income tax rates run from 1% up to 13.3% at the top, which includes a 1% surcharge on taxable income over $1 million. South Carolina's 2026 rate is 1.99% on incomes under $30,000, and for incomes of $30,000 and above it is 5.21% of taxable income minus $966. South Carolina also does not tax Social Security benefits.</p><p>Many California households will pay less state income tax in South Carolina, but the details depend on your income and deductions, so confirm with a tax professional.</p>`
      },
      {
        h2: "What to expect from homes here",
        html: `<p>California buyers are often surprised by how much space their budget buys in South Carolina, and by how common things like garages, porches, and larger lots are. A few differences to know before you shop:</p><ul><li>Most homes have central air and heat pumps, and humidity is a bigger factor than in most of California.</li><li>Termite and moisture inspections are a routine part of buying here.</li><li>Property taxes on a primary home are based on the 4% legal residence assessment once you apply for it, which is a different system from California's.</li></ul>`
      },
      {
        h2: "Choosing where to live",
        html: `<p>South Carolina offers very different lifestyles within a few hours of each other. Columbia and the Midlands offer a central location, the University of South Carolina, and Lake Murray. York County puts you near Charlotte's job market and airport. Myrtle Beach and the Grand Strand put you on the coast. We help you narrow it down before you book a cross-country flight.</p>`
      },
      {
        h2: "Planning a cross-country home search",
        html: `<p>For California buyers, we recommend doing nearly everything remotely until your list is short: community research, pre-approval, video tours, and neighborhood drive-throughs on camera. Then plan one trip to tour your top homes and see the areas in person. Our step-by-step guide to <a href="/blog/buying-a-home-in-south-carolina-from-out-of-state.html">buying a South Carolina home from out of state</a> walks through the full process.</p><p>Need to sell in California first? We can connect you with a Coldwell Banker agent there and coordinate both sides.</p>`
      }
    ],
    sources: [
      { title: "USAFacts: What states are people in South Carolina moving to and from?", url: "https://usafacts.org/answers/what-states-are-people-moving-to-and-from/state/south-carolina/" },
      { title: "US Tax Tools: California tax brackets 2026", url: "https://ustax.tools/california-tax-brackets-2026/" },
      { title: "South Carolina Department of Revenue: Information about H.4216", url: "https://dor.sc.gov/news/information-about-h-4216" }
    ]
  },
  {
    slug: "blog/moving-from-charlotte-to-rock-hill-york-county-sc.html",
    label: "Moving from Charlotte to Rock Hill and York County",
    title: "Moving from Charlotte to Rock Hill and York County, SC | 2026 Guide",
    description: "Thinking about crossing the state line from Charlotte to Rock Hill, Fort Mill, or York County, SC? Compare taxes, commutes, and what changes when you move.",
    h1: "Moving from Charlotte to Rock Hill and York County, SC",
    lead: "North Carolina sends more new residents to South Carolina than any other state, and a lot of them only move a few exits down I-77. Here is what actually changes when you cross the line.",
    date: "2026-10-25",
    dateDisplay: "October 25, 2026",
    readMinutes: 6,
    category: "Relocation",
    image: "charlotte-to-york-county",
    imageAlt: "Route graphic from Charlotte, NC to Rock Hill, SC",
    agentNote: "Lisa Simmons is the team's York County agent and spent 28 years working in York County before starting her real estate career.",
    sections: [
      {
        h2: "North Carolina is the number one source of new South Carolinians",
        html: `<p>According to U.S. Census Bureau data for 2024, about 33,200 people moved from North Carolina to South Carolina, more than from any other state. Many of those moves are short ones: households that still work, shop, and see friends in the Charlotte area but want a different house, a different price point, or a different tax picture on the South Carolina side.</p><p>That makes York County, including Rock Hill, Fort Mill, Tega Cay, Clover, and Lake Wylie, along with nearby Indian Land in Lancaster County, one of the most common landing spots for Charlotte households.</p>`
      },
      {
        h2: "The commute: how close is York County to Charlotte?",
        html: `<p>Rock Hill sits roughly 25 miles south of Uptown Charlotte along I-77. Fort Mill and Tega Cay are closer to the state line, and Lake Wylie and Clover sit to the west near the lake. For many people the drive to SouthPark, Ballantyne, or the airport is comparable to commutes from other Charlotte suburbs, but traffic on I-77 at rush hour is real, so test the drive at the times you would actually make it before you commit to a neighborhood.</p>`
      },
      {
        h2: "Income taxes: compare the whole picture, not just the rate",
        html: `<p>This is where a lot of online advice gets it wrong. North Carolina's personal income tax rate for 2026 is a flat 3.99%. South Carolina's 2026 structure, under a law signed this year, is 1.99% on incomes under $30,000, and for incomes of $30,000 and above it is 5.21% of taxable income minus $966. For many middle and higher income households, that means South Carolina's income tax bill can be similar to or a bit higher than North Carolina's, not lower.</p><p>If you live in South Carolina and keep working in North Carolina, you will generally file in both states, and South Carolina generally provides a credit for income tax paid to another state on the same income. Exactly how that works out depends on your situation, so talk with a tax professional before you treat taxes as the deciding factor.</p><p>The bigger financial differences for many buyers tend to come from home prices, property taxes, and the type of home you can get for your budget, which is where a local agent can help you run real numbers.</p>`
      },
      {
        h2: "Property taxes: file for the legal residence rate right away",
        html: `<p>South Carolina assesses an owner-occupied primary residence at 4% of its value instead of the standard 6%, and the legal residence classification also removes school operating millage from the bill. The difference is significant, but it is not automatic. After closing you apply with the county assessor, and counties typically ask for proof such as a South Carolina driver's license and South Carolina vehicle registration at the new address.</p><p>For North Carolina transplants, that means getting your SC license and car registration done early in the move, not months later.</p>`
      },
      {
        h2: "Finding the right part of York County",
        html: `<p>York County is not one market. Fort Mill and Tega Cay draw buyers looking for newer neighborhoods close to the state line. Rock Hill offers a wider range of established neighborhoods, newer construction, and price points. Lake Wylie and Clover appeal to buyers who want to be near the water or have a little more space. Indian Land, just across the county line in Lancaster County, is another popular option for Charlotte commuters.</p><p>The right fit depends on where you work, your budget, school priorities, and how you want to spend your weekends. We start with those questions and narrow the search from there.</p>`
      },
      {
        h2: "Selling in Charlotte and buying in South Carolina",
        html: `<p>Many Charlotte movers need to sell before they buy, or want to line up both closings close together. Through Coldwell Banker Realty we can coordinate with an agent on the North Carolina side so the sale and the purchase are timed together, and you are not managing two separate teams on your own.</p>`
      }
    ],
    sources: [
      { title: "USAFacts: What states are people in South Carolina moving to and from?", url: "https://usafacts.org/answers/what-states-are-people-moving-to-and-from/state/south-carolina/" },
      { title: "South Carolina Department of Revenue: Information about H.4216", url: "https://dor.sc.gov/news/information-about-h-4216" },
      { title: "CPA Practice Advisor: How North Carolina's income tax rate compares to its neighbor states", url: "https://www.cpapracticeadvisor.com/2026/08/31/how-north-carolinas-income-tax-rate-compares-to-its-neighbor-states-as-voters-consider-cap/189319/" },
      { title: "Richland County: Legal Residence (4%) assessment", url: "https://www.richlandcountysc.gov/Property-Business/Property-Valuation/Legal-Residence" }
    ]
  },
  {
    slug: "blog/moving-from-new-york-to-columbia-sc.html",
    label: "Moving from New York to Columbia, SC",
    title: "Moving from New York to Columbia, SC | 2026 Relocation Guide",
    description: "Moving from New York to Columbia, Lexington, or Lake Murray? Compare income and property taxes, travel times, and how to buy a South Carolina home from out of state.",
    h1: "Moving from New York to Columbia, SC: A 2026 Guide",
    lead: "South Carolina gains more residents from New York, on net, than from any other state. If you are one of them, here is what to know about taxes, communities, and buying a home in the Midlands from hundreds of miles away.",
    date: "2026-10-25",
    dateDisplay: "October 25, 2026",
    readMinutes: 7,
    category: "Relocation",
    image: "new-york-to-columbia",
    imageAlt: "Route graphic from New York, NY to Columbia, SC",
    agentNote: "Our Midlands agents work with relocating buyers every week, including Hollie Stabler, a certified Relocation Specialist.",
    sections: [
      {
        h2: "New Yorkers are moving to South Carolina in big numbers",
        html: `<p>U.S. Census Bureau data for 2024 shows about 18,300 people moved from New York to South Carolina. Fewer than 6,000 went the other direction, which gave South Carolina a net gain of roughly 12,600 New Yorkers, the largest net gain from any state.</p><p>The reasons we hear most often are housing costs, taxes, weather, and wanting a slower pace without giving up access to a real city. Columbia, the state capital, checks a lot of those boxes.</p>`
      },
      {
        h2: "Income taxes: New York vs. South Carolina",
        html: `<p>New York State income tax rates run from 4% up to 10.9% at the very top, and New York City residents pay a separate city income tax on top of that. South Carolina has no city income tax. For tax year 2026, South Carolina's rate is 1.99% on incomes under $30,000, and for incomes of $30,000 and above it is 5.21% of taxable income minus $966. The law also allows further reductions in future years if state revenue grows enough.</p><p>South Carolina does not tax Social Security benefits, which matters to many retirees. Your actual savings depend on your income, deductions, and where in New York you live now, so run the numbers with a tax professional.</p>`
      },
      {
        h2: "Property taxes: the 4% legal residence rate",
        html: `<p>South Carolina assesses an owner-occupied primary home at 4% of its value instead of the standard 6%, and the legal residence classification removes school operating millage from the tax bill. That combination is a big reason property taxes on a primary home in the Midlands often look very different from what New Yorkers are used to.</p><p>It is not automatic. After you close, you apply with the county assessor. In Richland County, for example, the application asks for items like your South Carolina driver's license, South Carolina vehicle registration at the new address, and recent tax return pages. Getting your license and car registration switched over early makes this easier.</p>`
      },
      {
        h2: "Where New Yorkers land in the Midlands",
        html: `<p>The Columbia area is a collection of very different communities within a short drive of each other:</p><ul><li><strong>Columbia and Richland County:</strong> historic neighborhoods near downtown and the University of South Carolina, newer suburbs to the northeast, and the area around Fort Jackson.</li><li><strong>Lexington and Lake Murray:</strong> a mix of established neighborhoods, new construction, and lake-area homes west of the city, including Lexington, Irmo, and Chapin.</li><li><strong>Blythewood:</strong> newer communities and more land to the north, with easy access to I-77.</li></ul><p>We help you narrow the list based on work location, commute, budget, schools, and lifestyle before you ever book a flight to tour.</p>`
      },
      {
        h2: "Getting around from Columbia",
        html: `<p>Columbia sits where I-20, I-26, and I-77 meet. Charlotte is about an hour and a half away, Charleston and the coast are roughly two hours, and Myrtle Beach is around two and a half hours. Columbia Metropolitan Airport is close to downtown, and Charlotte Douglas International offers many direct flights back to the New York area.</p>`
      },
      {
        h2: "How buying a South Carolina home from New York works",
        html: `<p>Most of our relocating buyers do the early work remotely, then visit once the list is short. A typical process looks like this:</p><ul><li>A planning call about budget, timing, and the areas that fit your life.</li><li>Pre-approval with a lender licensed to lend in South Carolina.</li><li>Video tours and neighborhood drive-throughs to narrow the list.</li><li>A focused in-person trip to tour the top homes, or an offer on a home you have seen by video if you are comfortable.</li><li>Inspections and due diligence coordinated locally while you are back in New York.</li><li>Closing with a South Carolina real estate attorney, which is how closings work in this state.</li></ul><p>If you also need to sell in New York, we can connect you with a Coldwell Banker agent there and coordinate the timing on both ends.</p>`
      }
    ],
    sources: [
      { title: "USAFacts: What states are people in South Carolina moving to and from?", url: "https://usafacts.org/answers/what-states-are-people-moving-to-and-from/state/south-carolina/" },
      { title: "South Carolina Department of Revenue: Information about H.4216", url: "https://dor.sc.gov/news/information-about-h-4216" },
      { title: "NerdWallet: New York State income tax rates and brackets", url: "https://www.nerdwallet.com/taxes/learn/new-york-state-tax" },
      { title: "Richland County: Legal Residence (4%) assessment", url: "https://www.richlandcountysc.gov/Property-Business/Property-Valuation/Legal-Residence" }
    ]
  }
];
