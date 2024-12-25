import { bronze, diamond, gold, platinum, silver } from "@/public/tier";
import { level1, level2, level3, level4, level5, level6, level7, level8, level9, level10 } from "@/public/tutorial";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface DashboardProps {
  text: string;
  value: string;
}
export const dashboardcards: DashboardProps[] = [
  {
    text: "Total Asset Value",
    value: "$300,000"
  },
  {
    text: "Total Asset Value",
    value: "$300,000"
  },
  {
    text: "Percentage Growth",
    value: "12%"
  },
]

interface dashboardButtonsProps {
  name: string;
  img: string;
}

export const dashboardButtons: dashboardButtonsProps[] = [
  {
    name: "buy property",
    img: "/dashboard/buy-property.svg"
  },
  {
    name: "sell property",
    img: "/dashboard/sell-property.svg"
  },
  {
    name: "join auction",
    img: "/dashboard/join-auction.svg"
  },
]

interface propertiesProps {
  name: string;
  value: string;
  price: string;
  listImg: string;
  gridImg: string;
}

export const properties: propertiesProps[] = [
  {
    listImg: "/properties/properties-list.svg",
    gridImg: "/properties/properties-grid.svg",
    name: "Property A",
    value: 'Asset Value',
    price: '$150'
  },
  {
    listImg: "/properties/properties-list.svg",
    gridImg: "/properties//properties-grid.svg",
    name: "Property B",
    value: 'Asset Value',
    price: '$150'
  },
  {
    listImg: "/properties/properties-list.svg",
    gridImg: "/properties/properties-grid.svg",
    name: "Property C",
    value: 'Asset Value',
    price: '$150'
  },
  {
    listImg: "/properties/properties-list.svg",
    gridImg: "/properties/properties-grid.svg",
    name: "Property D",
    value: 'Asset Value',
    price: '$150'
  },
  {
    listImg: "/properties/properties-list.svg",
    gridImg: "/properties/properties-grid.svg",
    name: "Property E",
    value: 'Asset Value',
    price: '$150'
  },
  {
    listImg: "/properties/properties-list.svg",
    gridImg: "/properties/properties-grid.svg",
    name: "Property F",
    value: 'Asset Value',
    price: '$150'
  },
  {
    listImg: "/properties/properties-list.svg",
    gridImg: "/properties/properties-grid.svg",
    name: "Property G",
    value: 'Asset Value',
    price: '$150'
  },
  {
    listImg: "/properties/properties-list.svg",
    gridImg: "/properties/properties-grid.svg",
    name: "Property H",
    value: 'Asset Value',
    price: '$150'
  },
  {
    listImg: "/properties/properties-list.svg",
    gridImg: "/properties/properties-grid.svg",
    name: "Property I",
    value: 'Asset Value',
    price: '$150'
  },
  {
    listImg: "/properties/properties-list.svg",
    gridImg: "/properties/properties-grid.svg",
    name: "Property J",
    value: 'Asset Value',
    price: '$150'
  },
]

interface AnalyticsProps {
  heading: string;
  img: string;
}

export const analytics: AnalyticsProps[] = [
  {heading: "Total Assets Value", img: "/dashboard/analytics.svg"},
  {heading: "Properties Owned", img: "/dashboard/analytics.svg"},
]

export const auctions = [
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
  { 
    property: "Property A", 
    price: "$200,000", 
    status: "Status: Available", 
    view: "view property" 
  },
]

export const auctiontypes = [
  {type: "First-Click Auction"},
  {type: "Standard Auction"},
  {type: "Dutch Auction"},
  {type: "Flash Auction"},
  {type: "Tug-of-war Auction"},
]
export const propertytypes = [
  {type: "First-Click Auction"},
  {type: "Standard Auction"},
  {type: "Dutch Auction"},
  {type: "Flash Auction"},
  {type: "Tug-of-war Auction"},
]
export const tieraccess = [
  {type: "Bronze Tier"},
  {type: "Silver Tier"},
  {type: "Gold Tier"},
  {type: "Platinum Tier"},
  {type: "Diamond Tier"},
]
export const upcomingauctions = [
  {type: "All Upcoming Auctions"}
]

interface TierImagesProps {
  img: StaticImport;
  tier: string;
  nexttTier: string;
}
export const tierimages: TierImagesProps[] = [
  {img: bronze, nexttTier: "Silver Tier", tier: "bronze"},
  {img: silver, nexttTier: "Gold Tier", tier: "silver"},
  {img: gold, nexttTier: "Platinum Tier", tier: "gold"},
  {img: diamond, nexttTier: "Diamond Tier", tier: "platinum"},
  {img: platinum, nexttTier: "None", tier: "diamond"},
]

export const tokens: string[] = [
  "300,000",
  "500,000",
  "1,000,000",
  "5,000,000",
  "10,000,000",
]
export const xp: string[] = [
  "No XP",
  "10,000 XP",
  "25,000 XP",
  "50,000 XP",
  "100,000 XP",
]


export const features: string[][] = [
  [
    'Basic access to tutorials, quizzes, and challenges.',
    'Participation in low-tier auctions and small property investments.',
    'Cannot participate in exclusive or high-tier auctions.',
    'Limited to beginner-level activities.',
  ],
  [
    'Access to mid-level auctions, intermediate tutorials, and bonus demo tokens.',
    'Can participate in community challenges for enhanced rewards.',
    'Ability to get early notifications for standard auctions.',
    'Eligibility to invite friends for additional PBT and XP bonuses.',
  ],
  [
    'Access to high-tier auctions, exclusive virtual properties, and advanced tutorials.',
    'Unlocks auto-bid tool in auctions.',
    'Full access to First-Click Auctions.',
    'Participation in complex challenges with higher XP/PBT rewards.'
  ],
  [
    'Priority access to exclusive VIP auctions with larger and more valuable properties.',
    'Auto-bidding tools for all auctions, and early notifications for both Flash and Tug-of-War auctions.',
    'Ability to list properties for fractional auctions.',
    'Participation in VIP property auctions.',
  ],
  [
    'Full access to all auction types including VIP, high-value, and exclusive properties.',
    'Auto-bidding and price-drop notifications for Dutch auctions.',
    'Ability to list entire properties in any auction format, including First-Click and VIP.',
    'Exclusive early access to new platform features.',
  ],
];

export const benefits = [
  [
    'Display their badge for the Bronze Tier ("Explorer").',
    'Highlight what they can earn at this level (e.g., basic rewards for completing tutorials).',
  ],
  [
    'Display their badge for the Bronze Tier ("Explorer").',
    'Highlight what they can earn at this level (e.g., basic rewards for completing tutorials).',
  ],
  [
    'Display Gold Badge ("Property Prodigy").',
    'More significant rewards, like access to more complex auctions, bonus PBT, and tutorials on advanced blockchain/real estate topics.',
  ],
  [
    'Display Platinum Badge ("Virtual Mogul").',
    'VIP privileges like exclusive auction listings, priority notifications, and special XP bonuses for competitive auctions.',
  ],
  [
    'Display Diamond Badge ("Elite Investor").',
    'Special privileges such as complete auto-bid control, early notifications for all auctions, and exclusive invitations to high-stakes property events.',
  ],
]; 


interface Tutorials {
  img: StaticImport
}
export const tutorials: Tutorials[] = [
  {
    img: level1
  },
  {
    img: level2
  },
  {
    img: level3
  },
  {
    img: level4
  },
  {
    img: level5
  },
  {
    img: level6
  },
  {
    img: level7
  },
  {
    img: level8
  },
  {
    img: level9
  },
  {
    img: level10
  },
]


type Card = {
  text: string; // Main text of the card
  description?: string; // Optional description of the card
};

type Level = {
  title: string; // Level ID
  cards: Card[][]; // Array of cards
};

export const levels: Level[] = [
  {
    title: 'Level 1',
    cards: [
      [
        { 
          text: 'introductions to real world assets (rwas)', 
          description: 'In this tutorial, we will explore what Real World Assets (RWAs) are and their significance in investment.'
        },
        { 
          text: 'interactive element', 
          description: 'Take a quick quiz'
        },
        { 
          text: 'What are RWAs?', 
          description: ' Real World Assets (RWAs) are physical, tangible assets  that hold intrinsic value in the real world. Examples include real estate,  precious metals like gold, commodities, art, and collectibles.'
        },
        { 
          text: 'significance', 
          description: 'RWAs have historically been reliable and relatively stable  investments. They provide a tangible store of value, often acting as a hedge  against market volatility.'
        },
        { 
          text: 'rwas in investment', 
          description: 'Traditionally, investing in RWAs required significant  capital and came with limitations like low liquidity and complex ownership  processes.'
        },
      ],
      [
        { 
          text: 'What is Tokenization?', 
          description: 'In this tutorial, we will define tokenization and explore its benefits.' 
        },
        { 
          text: 'interactive element', 
          description: 'Animation showing  the tokenization process'
        },
        { 
          text: 'definition', 
          description: 'Tokenization is the process of converting ownership of real world assets into digital tokens on a blockchain. Each token represents a  fraction of the asset.'
        },
        { 
          text: 'why tokenize',
          description: 'Tokenization simplifies the process of buying, selling, and  transferring ownership. It allows fractional ownership, enabling more people  to invest in high-value assets.'
        },
        { 
          text: 'example',
          description: ' Imagine a high-value property worth $1 million. Through tokenization, this  property can be divided into 1 million tokens. Investors can buy and own as many  tokens as they wish, making the investment more accessible.'
        },
      ],
      [
        { 
          text: 'why tokenize real estate', 
          description: 'This tutorial discusses the reasons for tokenizing real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'View case  studies of tokenized products'
        },
        { 
          text: 'accessibility', 
          description: ' Real estate tokenization lowers the barriers to entry. Investors  can own a fraction of a property without needing a large sum of capital.'
        },
        { 
          text: 'liquidity',
          description: "Traditional real estate investments are illiquid, meaning it's hard  to sell them quickly. Tokenization provides liquidity by enabling faster  transactions in a secondary market."
        },
        { 
          text: 'transparency & security',
          description: 'Using blockchain technology ensures that all  transactions are transparent and secure. It also reduces the need for  intermediaries, streamlining the investment process.'
        },
      ],
      [
        { 
          text:'Basics of Fractional Ownership', 
          description: 'In this tutorial, we will explain fractional ownership and its advantages.'
        },
        { 
          text: 'interactive element', 
          description: 'Simulation of buying fractional shares'
        },
        { 
          text: 'what is fractional ownership', 
          description: 'It means owning a part of an asset rather than the whole. In real estate, this could mean owning a portion of a property instead of the entire building.'
        },
        { 
          text: 'advantages',
          description: 'Fractional ownership allows smaller investors to participate in high-value investments. It also diversifies risk since investors are not putting all their capital into a single asset.'
        },
        { 
          text: 'how it works in tokenization',
          description: 'Through tokenization, each fraction (or token) of the property can be bought, sold, or traded on a secondary market.'
        },
      ],
      [
        { 
          text: 'understanding liquidity in real estate', 
          description: 'This tutorial covers the concept of liquidity in real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'View interactive graph showing liquidity comparisons'
        },
        { 
          text: 'liquidity defined', 
          description: 'Liquidity refers to how quickly and easily an asset can be converted into cash. Traditional real estate is considered illiquid because selling a property can take weeks or even months.'
        },
        { 
          text: 'tokenized real estate liquidity',
          description: 'Tokenized assets can be traded quickly on a secondary market, providing investors with the ability to buy or sell their property shares more easily.'
        },
        { 
          text: 'benefits',
          description: 'Enhanced liquidity reduces the investment risk associated with real estate and allows investors to adjust their portfolios as needed.'
        },
      ],
      [
        { 
          text: 'comparing real estate tokenization to other asset classes', 
          description: 'In this tutorial, we will compare real estate tokenization with other asset classes.'
        },
        { 
          text: 'interactive element', 
          description: 'View Comparative Chart'
        },
        { 
          text: 'real estate vs. stocks', 
          description: 'Real estate is generally more stable than stocks, which are prone to market volatility. However, stocks are more liquid.'
        },
        { 
          text: 'real estate vs. cryptocurrencies',
          description: 'Cryptocurrencies are highly volatile but offer high liquidity. Tokenized real estate offers a balance—providing stability with improved liquidity.'
        },
        { 
          text: 'diversification',
          description: 'Tokenized real estate can complement other assets in an investment portfolio, providing diversification.'
        },
      ],
      [
        { 
          text: 'common misconceptions about tokenization', 
          description: 'This tutorial addresses common misconceptions about tokenization.'
        },
        { 
          text: 'interactive element', 
          description: 'Take a Myth-buusting quiz'
        },
        { 
          text: 'it is too complicated', 
          description: 'Tokenization is more straightforward than it seems. PartBuy simplifies the process, allowing users to buy and sell tokens with ease.'
        },
        { 
          text: 'it is not secure',
          description: 'Tokenized assets on the blockchain are secure and transparent. Transactions are recorded on an immutable ledger, reducing the risk of fraud.'
        },
        { 
          text: 'only for big investors',
          description: 'Tokenization makes high-value assets accessible to small investors through fractional ownership.'
        },
      ],
      [
        { 
          text: 'the role of blockchain in tokenization', 
          description: 'In this tutorial, we will explore the role of blockchain in tokenization.'
        },
        { 
          text: 'interactive element', 
          description: 'View Interactive blockchain ledger demo'
        },
        { 
          text: 'what is blockchain', 
          description: 'A decentralized ledger that records transactions across many computers securely.'
        },
        { 
          text: 'blockchain in tokenization',
          description: 'It provides a secure and transparent platform for issuing, buying, and selling tokens. Smart contracts automate and enforce agreements without the need for intermediaries.'
        },
        { 
          text: 'transparency and security',
          description: 'Every transaction is recorded on the blockchain, ensuring transparency and reducing the possibility of fraud.'
        },
      ],
      [
        { 
          text: 'Future Trends in RWAs', 
          description: 'This tutorial discusses the future trends in RWAs.'
        },
        { 
          text: 'interactive element', 
          description: 'Survey on user Predictions'
        },
        { 
          text: 'increased adoption', 
          description: 'More sectors are embracing tokenization, including real estate, art, and commodities.'
        },
        { 
          text: 'global markets',
          description: 'Tokenization could open up global real estate markets to investors worldwide, breaking down geographical barriers.'
        },
        { 
          text: 'integration and defi',
          description: 'Integration with decentralized finance (DeFi) platforms can further enhance liquidity and investment opportunities.'
        },
      ],
    ],
  },
  {
    title: 'Level 2',
    cards: [
      [
        { 
          text: 'introduction to partbuy', 
          description: 'In this tutorial, we will provide an overview of PartBuy and its mission.' 
        },
        { 
          text: 'interactive element', 
          description: 'Video Introduction to Parybuy'
        },
        { 
          text: 'what it partbuy?', 
          description: 'PartBuy is a platform that leverages blockchain technology to tokenize real estate, allowing users to invest in properties by purchasing digital tokens that represent fractional ownership.'
        },
        { 
          text: 'mission',
          description: 'PartBuy aims to democratize real estate investment by lowering barriers to entry, providing liquidity, and offering a seamless investment experience.'
        },
        { 
          text: 'how it works',
          description: 'Users can browse a wide range of tokenized properties, invest in fractions of these properties, and trade their tokens on a secondary market.'
        },
      ],
      [
        { 
          text: 'How to Use PartBuy', 
          description: 'This tutorial will guide you through the process of using PartBuy.' 
        },
        { 
          text: 'interactive element', 
          description: 'Walkthrough Process'
        },
        { 
          text: 'Walkthrough Process', 
          description: 'Create an account on the PartBuy website or app.'
        },
        { 
          text: 'Browse Properties',
          description: 'Explore available tokenized real estate assets through the marketplace.'
        },
        { 
          text: 'invest',
          description: 'Purchase tokens representing shares in properties.'
        },
        { 
          text: 'manage investments',
          description: 'Use the dashboard to track performance, manage your portfolio, and make transactions.'
        },
      ],
      [
        { 
          text: 'Exploring the PartBuy Marketplace', 
          description: 'In this tutorial, we will explore the features of the PartBuy marketplace.' 
        },
        { 
          text: 'interactive element', 
          description: 'Search Properties Simulation'
        },
        { 
          text: 'definition', 
          description: 'Tokenization is the process of converting ownership of real world assets into digital tokens on a blockchain. Each token represents a  fraction of the asset.'
        },
        { 
          text: 'Marketplace Overview',
          description: 'The PartBuy marketplace lists a variety of tokenized properties, ranging from residential and commercial to luxury properties.'
        },
        { 
          text: 'Property Details',
          description: 'Each property listing includes detailed information like location, size, token price, expected returns, and property appreciation potential.'
        },
        { 
          text: 'Filters and Search',
          description: 'Use filters to search for properties based on your preferences, such as location, property type, or token price.'
        },
      ],
      [
        { 
          text: 'Benefits of Using PartBuy', 
          description: 'This tutorial discusses the advantages of using PartBuy for real estate investment.' 
        },
        { 
          text: 'interactive element', 
          description: 'View success stories'
        },
        { 
          text: 'accessibility', 
          description: 'Invest in real estate with minimal capital. PartBuy allows you to start with a small amount and grow your portfolio over time.'
        },
        { 
          text: 'liquidity',
          description: 'Trade your tokens on the PartBuy secondary market, providing a faster way to cash out your investments compared to traditional real estate.'
        },
        { 
          text: 'transparency and security',
          description: 'Transactions on PartBuy are recorded on the blockchain, ensuring transparency and security for every investment.'
        },
      ],
      [
        { 
          text: 'security features of partbuy', 
          description: 'In this tutorial, we will cover the security measures implemented by PartBuy.' 
        },
        { 
          text: 'interactive element', 
          description: 'View Demo'
        },
        { 
          text: 'blockchain security', 
          description: 'PartBuy leverages blockchain technology to ensure secure transactions. Every transaction is recorded on a decentralized ledger, reducing the risk of fraud.'
        },
        { 
          text: 'smart contracts',
          description: 'Investments are governed by smart contracts, which automatically execute and enforce agreements, eliminating the need for intermediaries.'
        },
        { 
          text: 'user protection',
          description: 'Enhanced liquidity reduces the investment risk associated with real estate and allows investors to adjust their portfolios as needed.'
        },
      ],
      [
        { 
          text: 'the investment process on partbuy', 
          description: 'This tutorial outlines the investment process on the PartBuy platform.' 
        },
        { 
          text: 'interactive element', 
          description: 'View Step-by-step investment simulation.'
        },
        { 
          text: 'Step 1', 
          description: "Browse the PartBuy marketplace and select a property you're interested in."
        },
        { 
          text: 'Step 2',
          description: 'Decide how many tokens you want to purchase. Each token represents a fraction of the property.'
        },
        { 
          text: 'Step 3',
          description: 'Make your investment by purchasing the tokens. Your ownership is recorded on the blockchain.'
        },
        { 
          text: 'Step 4',
          description: 'Track your investment through the PartBuy dashboard, where you can view your returns and property performance.'
        },
      ],
      [
        { 
          text: 'managing your investments', 
          description: 'In this tutorial, we will discuss how to manage your investments on PartBuy.' 
        },
        { 
          text: 'interactive element', 
          description: 'Dashboard Demo'
        },
        { 
          text: 'dashboard overview', 
          description: 'The PartBuy dashboard allows you to view your investments, track their performance, and monitor returns.'
        },
        { 
          text: 'secondary market',
          description: 'Sell or trade your tokens on the secondary market for liquidity. Set your price or accept offers from other users.'
        },
        { 
          text: 'portfolio diversification',
          description: 'Diversify your investments by owning tokens in various properties to spread risk and maximize potential returns.'
        },
      ],
      [
        { 
          text: 'PartBuy vs. Traditional Real Estate Investing', 
          description: 'This tutorial compares PartBuy with traditional real estate investing.' 
        },
        { 
          text: 'interactive element', 
          description: 'Comparative analysis tool.'
        },
        { 
          text: 'traditional real estate', 
          description: 'Requires substantial capital, involves lengthy legal processes, and is typically illiquid.'
        },
        { 
          text: 'partbuy',
          description: 'Offers fractional ownership, enhanced liquidity, lower entry barriers, and quick transactions. Invest in minutes and trade on the secondary market without the usual red tape.'
        },
        { 
          text: 'comparison summary',
          description: 'PartBuy provides a more accessible, liquid, and streamlined approach to real estate investment.'
        },
      ],
      [
        { 
          text: 'Success Stories and Testimonials', 
          description: 'In this tutorial, we will share real-life success stories from PartBuy users.' 
        },
        { 
          text: 'interactive element', 
          description: 'Video testimonials.'
        },
        { 
          text: 'benefits', 
          description: "Many investors have benefited from using PartBuy. Success stories include individuals who have effectively diversified their portfolios, achieved significant returns, and found it easier to participate in real estate investments. Testimonials highlight the platform’s ease of use and the positive impact on investment strategies."
        },
      ],
      [
        { 
          text: 'PartBuy Dashboard', 
          description: 'This tutorial provides an interactive tour of the PartBuy dashboard.' 
        },
        { 
          text: 'interactive element', 
          description: 'Live demo of the dashboard.'
        },
        { 
          text: 'Live Demo', 
          description: 'A guided tour of the PartBuy dashboard, highlighting key features like the marketplace, investment tracking, and secondary market trading.'
        },
        { 
          text: 'Interactive Tour: PartBuy Dashboard', 
          description: 'Investment Overview: Provides a snapshot of your holdings and performance. Property Listings: Detailed views of available and owned properties. Transaction History: Records all your investment activities. Market Trends: Insights into the broader market movements and trends.'
        },
      ],
    ],
  },
  {
    title: 'Level 3',
    cards: [
      [
        { 
          text: 'introduction to blockchain', 
          description: 'In this tutorial, we will explore the technology that enables tokenization.'
        },
        { 
          text: 'interactive element', 
          description: 'Infographic explaining blockchain and smart contracts.'
        },
        { 
          text: 'What is Blockchain?', 
          description: 'A decentralized digital ledger technology that securely records transactions across a network of computers.'
        },
        { 
          text: 'Key Features',
          description: 'Each transaction is grouped into a block, linked to previous blocks, ensuring data integrity and security.'
        },
      ],
      [
        { 
          text: "blockchain’s role in securing investments", 
          description: 'This tutorial covers the legal aspects of tokenization in real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'Case studies of regulatory scenarios.'
        },
        { 
          text: 'Security Mechanisms', 
          description: 'Uses cryptographic techniques to secure data, making unauthorized changes nearly impossible.'
        },
        { 
          text: 'Investor Confidence',
          description: "Instills trust in investors by ensuring transaction integrity and transparency"
        },
      ],
      [
        { 
          text: 'blockchain vs. traditional databases', 
          description: 'TIn this tutorial, we will explore the concept of tokenomics.'
        },
        { 
          text: 'interactive element', 
          description: 'Simulation of token supply and demand scenarios.'
        },
        { 
          text: 'Centralization vs. Decentralization', 
          description: 'Traditional databases are managed by a single entity, while blockchain is distributed across many nodes.'
        },
        { 
          text: 'Security Implications',
          description: "The decentralized nature of blockchain reduces risks associated with data manipulation."
        },
      ],
      [
        { 
          text: 'understanding decentralization', 
          description: 'This tutorial discusses the risks associated with tokenized real estate investments.'
        },
        { 
          text: 'interactive element', 
          description: 'Risk assessment tool.'
        },
        { 
          text: 'Definition', 
          description: 'Decentralization means distributing control among multiple participants rather than having a single authority.'
        },
        { 
          text: 'Benefits',
          description: "Enhances transparency and trust, as all participants can verify transaction data."
        },
      ],
      [
        { 
          text: 'transparency and trust on the blockchain', 
          description: 'In this tutorial, we will explore the future trends in real estate tokenization.'
        },
        { 
          text: 'interactive element', 
          description: 'Survey on user expectations for the future.'
        },
        { 
          text: 'Visibility of Transactions', 
          description: 'All transactions are visible to participants, fostering trust.'
        },
        { 
          text: 'Immutable Records',
          description: "Once recorded, transactions cannot be altered, ensuring reliability."
        },
      ],
      [
        { 
          text: 'impact of blockchain on real estate', 
          description: 'This tutorial presents case studies of successful real estate tokenization projects.'
        },
        { 
          text: 'interactive element', 
          description: 'Interactive map of tokenized projects.'
        },
        { 
          text: 'Efficiency Gains', 
          description: 'Streamlines processes like property transactions, reducing costs and time.'
        },
        { 
          text: 'Enhanced Access',
          description: "Opens up new investment opportunities for a wider audience."
        },
      ],
      [
        { 
          text: 'public vs. private blockchains', 
          description: 'In this tutorial, we will discuss how to build a diversified tokenized real estate portfolio.'
        },
        { 
          text: 'interactive element', 
          description: 'Portfolio simulation tool..'
        },
        { 
          text: 'Public Blockchains', 
          description: 'Open to anyone, offering high transparency but less control.'
        },
        { 
          text: 'Private Blockchains',
          description: "Restricted access, providing more control over who validates transactions."
        },
      ],
      [
        { 
          text: 'introduction to smart contracts', 
          description: 'This tutorial explores effective marketing strategies for tokenized properties.'
        },
        { 
          text: 'interactive element', 
          description: 'Marketing campaign planner.'
        },
        { 
          text: 'Definition', 
          description: 'Smart contracts are self-executing agreements with terms directly written into code.'
        },
        { 
          text: 'Automation',
          description: "They automate agreements based on predefined conditions, reducing the need for intermediaries."
        },
      ],
      [
        { 
          text: 'real-world applications of blockchain in real estate', 
          description: 'In this tutorial, we will discuss the ethical considerations surrounding tokenization.'
        },
        { 
          text: 'interactive element', 
          description: 'Ethical dilemma scenarios.'
        },
        { 
          text: 'Use Cases', 
          description: 'Blockchain can facilitate property title management and secure rental agreements.'
        },
        { 
          text: 'Fraud Reduction',
          description: "Provides a transparent and immutable record of ownership, significantly reducing fraud."
        },
      ],
    ],
  },
  {
    title: 'Level 4',
    cards: [
      [
        { 
          text: 'What are Smart Contracts?', 
          description: 'In this tutorial, we will define smart contracts and explore their fundamental concepts.'
        },
        { 
          text: 'interactive element', 
          description: 'Quiz on smart contract definitions.'
        },
        { 
          text: 'Definition', 
          description: 'Smart contracts are self-executing contracts where the terms of the agreement are directly written into code on a blockchain.'
        },
        { 
          text: 'Functionality',
          description: 'They automate the execution of agreements when predetermined conditions are met, eliminating the need for intermediaries.'
        },
        { 
          text: 'Example',
          description: 'For instance, a smart contract for a rental agreement could automatically release payment to the landlord when the tenant confirms their occupancy.'
        },
      ],
      [
        { 
          text: 'How Smart Contracts Operate', 
          description: 'This tutorial focuses on the operational mechanics of smart contracts.'
        },
        { 
          text: 'interactive element', 
          description: 'Flowchart of smart contract execution.'
        },
        { 
          text: 'Execution Mechanism', 
          description: 'Smart contracts operate on a decentralized blockchain, which ensures transparency and security.'
        },
        { 
          text: 'Conditions',
          description: 'They utilize "if-then" logic, meaning that when a specified condition is fulfilled, the contract automatically performs the defined action.'
        },
        { 
          text: 'Real-World Application',
          description: 'For example, in a property sale, once the buyer transfers the funds, the smart contract automatically transfers ownership.'
        },
      ],
      [
        { 
          text: 'Benefits of Smart Contracts in Real Estate', 
          description: 'In this tutorial, we will explore the advantages of using smart contracts in real estate transactions.'
        },
        { 
          text: 'interactive element', 
          description: 'Case study comparison of traditional vs. smart contracts.'
        },
        { 
          text: 'Efficiency', 
          description: 'By removing intermediaries, smart contracts speed up transactions and streamline processes.'
        },
        { 
          text: 'Cost Savings',
          description: 'Lower transaction costs arise from the reduced need for legal fees, escrow agents, and other intermediaries.'
        },
        { 
          text: 'Enhanced Security',
          description: 'Transactions are securely recorded on the blockchain, reducing the risk of fraud.'
        },
      ],
      [
        { 
          text: 'Automating Transactions with Smart Contracts', 
          description: 'This tutorial discusses how smart contracts automate various real estate transactions.'
        },
        { 
          text: 'interactive element', 
          description: 'Simulation of an automated transaction process.'
        },
        { 
          text: 'Automation Process', 
          description: 'Smart contracts automate various real estate processes, such as payments, ownership transfers, and compliance checks.'
        },
        { 
          text: 'Example',
          description: 'A smart contract for a lease can automate monthly rent payments, automatically deducting the amount from the tenant’s account on the due date.'
        },
        { 
          text: 'Advantages',
          description: 'This reduces manual errors and ensures timely execution of agreements.'
        },
      ],
      [
        { 
          text: 'Legal Aspects of Smart Contracts', 
          description: 'In this tutorial, we will examine the legal implications of using smart contracts.'
        },
        { 
          text: 'interactive element', 
          description: 'Legal scenario analysis tool.'
        },
        { 
          text: 'Legality', 
          description: 'Smart contracts can be legally enforceable in many jurisdictions, but the legal landscape is still evolving.'
        },
        { 
          text: 'Compliance',
          description: "It’s essential to ensure compliance with local laws, as the recognition of smart contracts can vary significantly."
        },
        { 
          text: 'Considerations',
          description: 'Always consult legal experts when drafting smart contracts to ensure they meet all legal requirements.'
        },
      ],
      [
        { 
          text: 'Creating Your First Smart Contract', 
          description: 'This tutorial provides a step-by-step guide to creating your first smart contract.'
        },
        { 
          text: 'interactive element', 
          description: 'Code editor for writing and deploying a smart contract.'
        },
        { 
          text: 'Steps to Create', 
          description: 'Identify agreement terms, choose a blockchain platform (like Ethereum), write the code using a programming language such as Solidity, and deploy it on the blockchain.'
        },
        { 
          text: 'Testing',
          description: "It’s vital to test the smart contract thoroughly to identify any potential issues before deployment."
        },
        { 
          text: 'Resources',
          description: 'Utilize platforms and tutorials that offer guidance on coding and deploying smart contracts.'
        },
      ],
      [
        { 
          text: 'Smart Contracts vs. Traditional Contracts', 
          description: 'In this tutorial, we will compare smart contracts with traditional contracts.'
        },
        { 
          text: 'interactive element', 
          description: 'Comparison chart tool.'
        },
        { 
          text: 'Key Differences', 
          description: 'Smart contracts are automated and self-executing, while traditional contracts rely on manual enforcement and are prone to human error.'
        },
        { 
          text: 'Advantages of Smart Contracts',
          description: "They offer greater efficiency, lower costs, and reduced risk of fraud or misunderstandings between parties."
        },
        { 
          text: 'Use Cases',
          description: 'Smart contracts can streamline various processes, such as property sales and lease agreements.'
        },
      ],
      [
        { 
          text: 'Use Cases for Smart Contracts in Real Estate', 
          description: 'This tutorial explores various use cases for smart contracts within the real estate sector.'
        },
        { 
          text: 'interactive element', 
          description: 'Use case exploration tool.'
        },
        { 
          text: 'Examples', 
          description: 'Smart contracts can facilitate property sales, manage rental agreements, and handle escrow arrangements seamlessly.'
        },
        { 
          text: 'Benefits',
          description: "They enhance trust among parties involved by ensuring all terms are met before executing actions."
        },
        { 
          text: 'Case Study',
          description: 'A case study could highlight a successful property transaction that utilized smart contracts, showcasing speed and efficiency.'
        },
      ],
      [
        { 
          text: 'Challenges and Risks of Smart Contracts', 
          description: 'In this tutorial, we will discuss the challenges and risks associated with smart contracts.'
        },
        { 
          text: 'interactive element', 
          description: 'Risk assessment checklist.'
        },
        { 
          text: 'Potential Issues', 
          description: 'Coding errors can lead to vulnerabilities in smart contracts, potentially exposing them to attacks.'
        },
        { 
          text: 'Legal Recognition',
          description: "The legal status of smart contracts is still evolving, and not all jurisdictions recognize them equally."
        },
        { 
          text: 'Risk Management',
          description: 'Conduct thorough testing, audit the code, and stay updated on legal requirements to mitigate risks.'
        },
      ],
      [
        { 
          text: 'Interactive Scenario: Implementing Smart Contracts', 
          description: 'This final tutorial presents an interactive scenario for implementing a smart contract in a real estate transaction.'
        },
        { 
          text: 'interactive element', 
          description: 'Scenario simulation platform.'
        },
        { 
          text: 'Scenario', 
          description: 'Users navigate through a simulated property sale using a smart contract, making decisions about terms and executing the agreement.'
        },
      ],
    ],
  },
  {
    title: 'Level 5',
    cards: [
      [
        { 
          text: 'Consensus Mechanisms Explained', 
          description: 'In this tutorial, we will explore the various consensus mechanisms that secure blockchain networks.'
        },
        { 
          text: 'interactive element', 
          description: 'Quiz on different consensus mechanisms.'
        },
        { 
          text: 'details', 
          description: 'Consensus mechanisms are protocols that consider a transaction as valid and ensure agreement on the blockchain network.'
        },
        { 
          text: 'details',
          description: 'They are crucial for maintaining the integrity and security of blockchain systems, allowing decentralized networks to operate without a central authority.'
        },
        { 
          text: 'details',
          description: 'Common mechanisms include Proof of Work (PoW) and Proof of Stake (PoS).'
        },
      ],
      [
        { 
          text: 'Proof of Work vs. Proof of Stake', 
          description: 'This tutorial compares the two most popular consensus mechanisms: Proof of Work (PoW) and Proof of Stake (PoS).'
        },
        { 
          text: 'Comparison chart tool.', 
          description: 'Description for Card 2'
        },
        { 
          text: 'proof of work (POW)', 
          description: 'Requires miners to solve complex mathematical problems to validate transactions, consuming significant energy'
        },
        { 
          text: 'poof of stake (POS)',
          description: 'Validators are chosen based on the number of coins they hold and are willing to "stake," resulting in lower energy consumption and faster transactions.'
        },
      ],
      [
        { 
          text: 'Role of Miners in Blockchain', 
          description: 'In this tutorial, we will examine the critical role miners play in maintaining blockchain networks.'
        },
        { 
          text: 'interactive element', 
          description: 'Mining simulation game.'
        },
        { 
          text: 'miners', 
          description: 'Miners validate transactions and add them to the blockchain by solving complex problems (in PoW) or by being chosen based on their stake (in PoS). They ensure network security and transaction integrity while earning rewards in the form of cryptocurrencies.'
        },
      ],
      [
        { 
          text: 'Understanding Gas Fees', 
          description: 'This tutorial focuses on gas fees, a crucial aspect of blockchain transactions.'
        },
        { 
          text: 'interactive element', 
          description: 'Gas fee calculator.'
        },
        { 
          text: 'gas fees', 
          description: 'Gas fees are the costs associated with executing transactions on a blockchain. These fees incentivize miners to process transactions and are affected by network congestion. Understanding gas fees is crucial for investors to manage costs effectively'
        },
      ],
      [
        { 
          text: 'Layer 2 Solutions for Scalability', 
          description: 'In this tutorial, we will explore Layer 2 solutions designed to enhance blockchain scalability.'
        },
        { 
          text: 'interactive element', 
          description: 'Diagram of Layer 1 vs. Layer 2 architecture.'
        },
        { 
          text: 'layer 2 solutions', 
          description: 'Layer 2 solutions, such as the Lightning Network or state channels, operate on top of the main blockchain to enhance scalability and speed. They allow for faster transactions and lower fees, making them ideal for high-volume applications.'
        },
      ],
      [
        { 
          text: 'Blockchain Forks', 
          description: 'This tutorial examines blockchain forks, their types, and implications.'
        },
        { 
          text: 'interactive element', 
          description: 'Timeline of major blockchain forks.'
        },
        { 
          text: 'definition', 
          description: 'A fork occurs when there is a divergence in the blockchain, resulting in two versions of the chain. Forks can be soft (backward-compatible) or hard (not backward-compatible) and often occur due to protocol changes or community disagreements.'
        },
      ],
      [
        { 
          text: 'Interoperability Between Blockchains', 
          description: 'In this tutorial, we will discuss the importance of interoperability between different blockchain networks.'
        },
        { 
          text: 'interactive element', 
          description: 'Interactive map of blockchain networks and connections.'
        },
        { 
          text: 'Interoperability', 
          description: 'This refers to the ability of different blockchains to communicate and share data. Solutions like atomic swaps and cross-chain platforms facilitate interactions between disparate blockchain networks.'
        },
      ],
      [
        { 
          text: 'Emerging Trends in Blockchain Technology', 
          description: 'This tutorial highlights the latest trends shaping the future of blockchain technology.'
        },
        { 
          text: 'interactive element', 
          description: 'Trend analysis tool.'
        },
        { 
          text: 'explanation', 
          description: 'Trends include decentralized finance (DeFi), non-fungible tokens (NFTs), and central bank digital currencies (CBDCs). Staying updated on these trends is essential for investors looking to leverage new opportunities.'
        },
      ],
      [
        { 
          text: 'Blockchain Projects in Real Estate', 
          description: 'In this tutorial, we will explore various blockchain projects specifically targeting the real estate sector.'
        },
        { 
          text: 'interactive element', 
          description: 'Case study exploration tool.'
        },
        { 
          text: 'layer 2 solutions', 
          description: "Numerous projects are exploring blockchain's potential in real estate, focusing on tokenization, smart contracts, and improving transparency in property transactions. These innovations aim to streamline processes and reduce costs for investors."
        },
      ],
      [
        { 
          text: 'Interactive Exercise: Exploring Blockchain Data', 
          description: 'You will analyze real blockchain data to understand transaction patterns and network activity.'
        },
        { 
          text: 'interactive element', 
          description: 'Blockchain data exploration tool.'
        },
        { 
          text: 'Scenarios', 
          description: "Participants will explore blockchain data through practical exercises, learning how to read transactions, blocks, and smart contracts. This hands-on approach helps demystify blockchain technology."
        },
      ],
    ],
  },
  {
    title: 'Level 6',
    cards: [
      [
        { 
          text: 'Token Standards Overview', 
          description: 'In this tutorial, we will explore the various token standards used in real estate tokenization.'
        },
        { 
          text: 'interactive element', 
          description: 'Comparison chart of token standards.'
        },
        { 
          text: 'ERC-20', 
          description: 'tokens are fungible and interchangeable, commonly used for fractional ownership in real estate.'
        },
        { 
          text: 'ERC-721',
          description: 'tokens are non-fungible, representing unique real estate assets, such as a single property.'
        },
        { 
          text: 'ERC-1155',
          description: 'is a multi-token standard that can handle both fungible and non fungible tokens, offering flexibility in representing complex real estate portfolios that may contain fractional ownership and unique properties in a single contract.'
        },
      ],
      [
        { 
          text: 'Creating a Real Estate Token', 
          description: 'This tutorial provides a step-by-step guide to creating a real estate token.'
        },
        { 
          text: 'interactive element', 
          description: 'Token creation tool.'
        },
        { 
          text: 'definition', 
          description: 'The process of creating a real estate token begins by choosing the appropriate token standard (ERC-20, ERC-721, or ERC-1155) depending on the asset and investment strategy.  For fractional ownership, ERC-20 or ERC-1155 is ideal. For unique properties, ERC-721 or ERC-1155 can be used.  Smart contracts manage the issuance and tracking of these tokens.'
        },
      ],
      [
        { 
          text: 'Role of SPVs in Tokenization', 
          description: 'In this tutorial, we will examine the role of Special Purpose Vehicles (SPVs) in real estate tokenization.'
        },
        { 
          text: 'interactive element', 
          description: 'SPV structure diagram.'
        },
        { 
          text: 'Special Purpose Vehicles', 
          description: '(SPVs) serve as the legal entities that own the tokenized property. They help manage regulatory compliance, streamline asset management, and provide investors with transparency. SPVs are a critical aspect of ensuring proper governance and risk management in tokenized real estate investments.'
        },
      ],
      [
        { 
          text: 'Valuing Tokenized Real Estate', 
          description: 'This tutorial focuses on the methods used to value tokenized real estate assets.'
        },
        { 
          text: 'interactive element', 
          description: 'Valuation calculator.'
        },
        { 
          text: 'explanation', 
          description: "Valuation in tokenized real estate is enhanced by real-time data, blockchain transparency, and token liquidity. Investors can track the performance of tokenized properties and adjust their investments based on market trends. ERC-1155’s flexibility can allow for mixed-asset tokenization, combining fractional and unique asset representations, which can influence valuation methods."
        },
      ],
      [
        { 
          text: 'Tokenized Property Auctions', 
          description: 'This tutorial examines how tokenized property auctions work.'
        },
        { 
          text: 'interactive element', 
          description: 'Auction simulation platform.'
        },
        { 
          text: 'explanation', 
          description: 'Blockchain technology enables fast, secure, and transparent auctions for tokenized real estate assets. Smart contracts facilitate the entire auction process, ensuring fair bidding. ERC-721 and ERC-1155 tokens are particularly suitable for auctions involving unique real estate assets, while ERC-20 tokens are ideal for fractionalized properties.'
        },
      ],
      [
        { 
          text: 'Trading Tokens on Secondary Markets', 
          description: 'In this tutorial, we will discuss the trading of tokenized real estate assets on secondary markets.'
        },
        { 
          text: 'interactive element', 
          description: 'Trading simulation interface.'
        },
        { 
          text: 'explanation', 
          description: 'Secondary markets provide a venue for investors to trade real estate tokens, whether they are fractional (ERC-20), unique (ERC-721), or a combination (ERC-1155) These markets offer liquidity and flexibility, allowing investors to buy and sell tokens as their investment needs change. Blockchain ensures secure and transparent transactions, with reduced settlement times.'
        },
      ],
      [
        { 
          text: 'Regulatory Considerations for Tokenization', 
          description: 'This tutorial focuses on the regulatory landscape surrounding real estate tokenization.'
        },
        { 
          text: 'interactive element', 
          description: 'Regulatory checklist tool.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenizing real estate assets requires compliance with various regulations, including securities laws, KYC (Know Your Customer) processes, and AML (Anti-Money Laundering) requirements. Navigating regulatory environments can be complex, especially when using flexible token standards like ERC-1155, which can represent both securities and non-securities.'
        },
      ],
      [
        { 
          text: 'Interactive Simulation: Tokenizing a Property', 
          description: 'This final tutorial offers an interactive simulation of the property tokenization process.'
        },
        { 
          text: 'interactive element', 
          description: 'Blockchain data exploration tool.'
        },
        { 
          text: 'Scenario', 
          description: 'In this simulation, participants walk through the tokenization process, from creating tokens (ERC-20, ERC-721, or ERC-1155) to conducting auctions and managing secondary trades. The exercise offers practical insights into the mechanics of tokenization, property management, and market dynamics.'
        },
      ],
    ],
  },
  {
    title: 'Level 7',
    cards: [
      [
        { 
          text: 'Leveraging Tokenized Real Estate for Portfolio Diversification', 
          description: 'In this tutorial, we will explore how tokenized real estate can enhance your investment portfolio through diversification.'
        },
        { 
          text: 'interactive element', 
          description: 'Portfolio diversification simulator.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenized real estate enables investors to diversify their portfolios by owning fractional shares of multiple properties. This reduces overall risk and allows for exposure to various real estate sectors. For example, an investor can own fractions of residential, commercial, and industrial properties simultaneously, which promotes stability in returns and cushions against market fluctuations.'
        },
        { 
          text: 'Benefit of fractional ownership',
          description: 'With lower capital requirements, investors can spread their investments across different types of properties and geographic locations, enhancing overall portfolio performance.'
        },
        { 
          text: 'risk mitigation',
          description: 'By diversifying across multiple assets, investors can minimize the impact of poor performance in any single property.'
        },
      ],
      [
        { 
          text: 'Maximizing Returns with Fractional Ownership', 
          description: 'This tutorial focuses on how fractional ownership can maximize investment returns.'
        },
        { 
          text: 'interactive element', 
          description: 'Investment return calculator.'
        },
        { 
          text: 'explanation', 
          description: 'Fractional ownership allows investors to access high-value properties with smaller capital investments. This strategy enables participation in lucrative markets that would otherwise be out of reach.'
        },
        { 
          text: 'Strategies for Increasing Returns',
          description: 'By strategically selecting properties with high growth potential and diversifying across various investments, investors can optimize their return on investment (ROI).'
        },
        { 
          text: 'Enhanced Cash Flow',
          description: 'By strategically selecting properties with high growth potential and diversifying across various investments, investors can optimize their return on investment (ROI).'
        },
      ],
      [
        { 
          text: 'Utilizing Leverage in Real Estate Investing', 
          description: 'In this tutorial, we will explain leverage and its role in real estate investing.'
        },
        { 
          text: 'interactive element', 
          description: 'Leverage impact simulator.'
        },
        { 
          text: 'explanation', 
          description: 'Leverage involves using borrowed funds to increase potential investment returns. This strategy can significantly amplify gains but also introduces higher risks, making understanding leverage essential.'
        },
        { 
          text: 'Amplifying Returns',
          description: 'For instance, using leverage, an investor can control a larger asset with a smaller upfront investment, increasing both potential profits and risks.'
        },
        { 
          text: 'Caution with Leverage',
          description: 'Investors must be mindful of market conditions and ensure they have a solid exit strategy in place to mitigate potential losses.'
        },
      ],
      [
        { 
          text: 'Risk Management in Tokenized Real Estate', 
          description: 'This tutorial focuses on identifying and managing risks in tokenized real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'Risk assessment tool.'
        },
        { 
          text: 'This tutorial compares REITs and tokenized real estate, focusing on their differences in flexibility, liquidity, and benefits.', 
          description: 'Identifying and managing risks is crucial for successful investing. This tutorial covers the main risks associated with tokenized real estate, such as market volatility and liquidity challenges.'
        },
        { 
          text: 'Effective Risk Management Strategies',
          description: 'Diversification, thorough market research, and leveraging blockchain technology for transparency can help minimize risks. Understanding the fundamentals of each property type and the market can also inform better investment choices.'
        },
        { 
          text: 'Utilizing Blockchain for Transparency',
          description: 'Smart contracts can automate processes and provide clear transaction histories, reducing the likelihood of fraud.'
        },
      ],
      [
        { 
          text: 'REITs vs. Tokenized Real Estate', 
          description: 'In this tutorial, we will compare Real Estate Investment Trusts (REITs) with tokenized real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'Comparison chart of REITs and tokenized real estate.'
        },
        { 
          text: 'explanation', 
          description: 'This tutorial compares REITs and tokenized real estate, focusing on their differences in flexibility, liquidity, and benefits.'
        },
        { 
          text: 'layer 2 solutions',
          description: 'Comparative Analysis: Tokenized real estate often offers greater liquidity and flexibility compared to traditional REITs. Investors can buy and sell tokenized assets more easily, without the lock-in periods associated with many REITs.'
        },
        { 
          text: 'Unique Advantages of Tokenization',
          description: 'Investors have more control over their assets, lower fees, and the ability to directly participate in property ownership.'
        },
      ],
      [
        { 
          text: 'Tax Implications of Tokenized Real Estate Investments', 
          description: 'This tutorial provides an overview of tax considerations for tokenized real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'Tax implications calculator.'
        },
        { 
          text: 'explanation', 
          description: 'Understanding tax implications is essential for maximizing returns. This tutorial covers capital gains, income taxes, and potential tax benefits of tokenized real estate investments.'
        },
        { 
          text: 'Tax Considerations',
          description: 'Investors need to be aware of how different jurisdictions treat tokenized real estate, including withholding taxes and tax treaties.'
        },
        { 
          text: 'Exploring Potential Tax Benefits',
          description: 'Some regions may offer incentives for investing in tokenized assets, such as lower capital gains taxes or tax credits.'
        },
      ],
      [
        { 
          text: 'Yield Farming and Staking in Tokenized Real Estate', 
          description: 'In this tutorial, we will introduce yield farming and staking in the context of tokenized real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'Yield farming simulation tool.'
        },
        { 
          text: 'explanation', 
          description: 'Yield farming and staking are innovative strategies for generating passive income from tokenized real estate assets. This tutorial explains how these methods work and their benefits.'
        },
        { 
          text: 'How It Works',
          description: 'Yield farming involves lending tokens to liquidity pools, while staking allows investors to lock up their tokens in exchange for rewards.'
        },
        { 
          text: 'Generating Passive Income',
          description: 'Generating Passive Income'
        },
      ],
      [
        { 
          text: 'Using Data Analytics for Real Estate Investment Decisions', 
          description: 'This tutorial focuses on leveraging data analytics for informed real estate investment decisions.'
        },
        { 
          text: 'interactive element', 
          description: 'Data analytics dashboard.'
        },
        { 
          text: 'explanation', 
          description: 'Data analytics can significantly improve investment decisions by providing insights into property trends and market conditions. This tutorial discusses leveraging blockchain data for performance assessments.'
        },
        { 
          text: 'Evaluating Property Trends',
          description: 'Investors can use analytics to track price movements, rental yields, and demand trends, informing better strategic choices.'
        },
        { 
          text: 'Informed Decision-Making',
          description: 'Combining data with market expertise can lead to a more comprehensive understanding of potential investments.'
        },
      ],
      [
        { 
          text: 'Exit Strategies for Tokenized Real Estate Investments', 
          description: 'In this tutorial, we will explore effective exit strategies for tokenized real estate investments.'
        },
        { 
          text: 'interactive element', 
          description: 'Exit strategy planner.'
        },
        { 
          text: 'explanation', 
          description: 'Planning exit strategies is crucial for maximizing returns and minimizing losses. This tutorial covers various strategies, including selling tokens on secondary markets and buyback options.'
        },
        { 
          text: 'Importance of Exit Planning',
          description: 'Investors should be proactive about their exit strategies, considering market conditions and personal financial goals.'
        },
        { 
          text: 'Exploring Buyback Options',
          description: 'Understanding the terms of buyback agreements can enhance liquidity and provide a safety net for investors.'
        },
      ],
      [
        { 
          text: 'Global Real Estate Investment Opportunities', 
          description: 'This final tutorial examines global real estate investment opportunities through tokenization.'
        },
        { 
          text: 'interactive element', 
          description: 'Global investment map.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenized real estate opens up global markets, allowing for diverse geographical investments. This tutorial highlights emerging markets and opportunities for international investments.'
        },
        { 
          text: 'Scenario',
          description: 'Investors can explore properties in various countries, benefiting from different economic conditions and market cycles.'
        },
        { 
          text: 'Scenario',
          description: 'Understanding trends in emerging markets can provide unique opportunities for growth and profitability.'
        },
      ],
    ],
  },
  {
    title: 'Level 8',
    cards: [
      [
        { 
          text: 'Overview of Tokenized Real Estate Markets', 
          description: 'In this tutorial, we will define tokenized real estate and explore its key characteristics.'
        },
        { 
          text: 'interactive element', 
          description: 'Infographic summarizing market dynamics.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenized real estate markets involve the digitization of property assets, allowing for fractional ownership through blockchain technology. This innovation enhances market accessibility and liquidity.'
        },
        { 
          text: 'Key Characteristics',
          description: 'Tokenization allows for transparent ownership records and easier transfer of property shares. It democratizes real estate investment, enabling smaller investors to enter the market.'
        },
        { 
          text: 'Market Dynamics',
          description: 'The introduction of tokenized assets has created new opportunities for both investors and property owners, transforming how real estate transactions occur.'
        },
      ],
      [
        { 
          text: 'Benefits of Tokenization in Real Estate', 
          description: 'This tutorial focuses on the benefits of tokenization for real estate investors.'
        },
        { 
          text: 'interactive element', 
          description: 'Benefits comparison chart.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenization brings several benefits, including increased liquidity, reduced transaction costs, and broader market access.'
        },
        { 
          text: 'Liquidity',
          description: 'Tokenized assets can be bought and sold quickly, offering investors more flexibility compared to traditional real estate investments.'
        },
        { 
          text: 'Cost Efficiency',
          description: 'By lowering transaction costs and eliminating intermediaries, tokenization makes investing in real estate more affordable.'
        },
      ],
      [
        { 
          text: 'How to Buy and Sell Tokenized Real Estate', 
          description: 'In this tutorial, we will provide a step-by-step guide on buying and selling tokenized assets.'
        },
        { 
          text: 'interactive element', 
          description: 'Interactive checklist for buying and selling.'
        },
        { 
          text: 'explanation', 
          description: 'Understanding the process of buying and selling tokenized real estate is crucial for investors.'
        },
        { 
          text: 'Buying Process',
          description: 'Investors typically start by creating an account on a tokenization platform, completing KYC requirements, and funding their account'
        },
        { 
          text: 'Selling Tokens',
          description: 'To sell, investors can list their tokens on a marketplace, providing transparency and ease of transactions.'
        },
      ],
      [
        { 
          text: 'The Role of Smart Contracts in Tokenized Markets', 
          description: 'This tutorial explores the functionality of smart contracts in tokenized real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'Smart contract flowchart.'
        },
        { 
          text: 'explanation', 
          description: 'Smart contracts are self-executing contracts with terms directly written into code. They enhance efficiency and security in transactions.'
        },
        { 
          text: 'Benefits of Automation',
          description: 'Smart contracts reduce the need for intermediaries, streamlining processes and lowering costs.'
        },
        { 
          text: 'Security Features',
          description: 'They provide transparent, tamper-proof records, ensuring that all parties fulfill their obligations.'
        },
      ],
      [
        { 
          text: 'Regulatory Landscape for Tokenized Real Estate', 
          description: 'In this tutorial, we will review the regulatory frameworks surrounding tokenized real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'Regulatory landscape map.'
        },
        { 
          text: 'explanation', 
          description: 'The regulatory framework for tokenized real estate varies globally, impacting how these markets operate.'
        },
        { 
          text: 'Compliance Importance',
          description: 'Understanding local regulations is crucial to avoid legal pitfalls and ensure smooth transactions.'
        },
        { 
          text: 'Potential Challenges',
          description: 'As the market evolves, regulations may change, requiring investors to stay informed and adaptable.'
        },
      ],
      [
        { 
          text: 'Investment Strategies in Tokenized Real Estate Markets', 
          description: 'This tutorial focuses on effective investment strategies within tokenized real estate markets.'
        },
        { 
          text: 'interactive element', 
          description: 'Timeline of major blockchain forks.'
        },
        { 
          text: 'explanation', 
          description: 'Fractional ownership allows investors to buy smaller portions of a property rather than owning it outright. Through tokenization, fractional ownership becomes more accessible to a wider range of investors, enabling diversification across multiple properties.'
        },
        { 
          text: 'Advantages',
          description: 'Investors can spread their capital across different properties, reducing risk while participating in real estate markets with lower entry costs.'
        },
      ],
      [
        { 
          text: 'Case Studies of Successful Tokenized Real Estate Projects', 
          description: 'This tutorial focuses on effective investment strategies within tokenized real estate markets.'
        },
        { 
          text: 'interactive element', 
          description: 'Investment strategy planner.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenized real estate offers unique advantages compared to traditional real estate, including increased liquidity, transparency, and lower entry barriers. However, it also carries risks, such as regulatory uncertainty and market volatility.'
        },
        { 
          text: 'Comparison',
          description: 'Traditional real estate investments can take longer to sell and require more capital upfront, while tokenized real estate enables faster transactions and fractional ownership.'
        },
      ],
      [
        { 
          text: 'CChallenges and Risks in Tokenized Real Estate Markets', 
          description: 'This tutorial addresses the challenges and risks associated with tokenized real estate investments.'
        },
        { 
          text: 'interactive element', 
          description: 'Risk assessment tool.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenization allows investors to diversify their real estate portfolio by purchasing tokens in multiple properties across different regions or asset types (e.g., residential, commercial, or industrial).'
        },
        { 
          text: 'Diversification Benefits',
          description: 'Reducing risk by spreading investments across various markets and asset types can provide more stability in an investor’s portfolio.'
        },
      ],
      [
        { 
          text: 'Future Outlook for Tokenized Real Estate Markets', 
          description: 'In this tutorial, we will explore the future of tokenized real estate markets.'
        },
        { 
          text: 'interactive element', 
          description: 'Future trends prediction tool.'
        },
        { 
          text: 'explanation', 
          description: 'The secondary market for tokenized real estate allows investors to buy and sell property tokens after their initial sale. This liquidity feature is a significant advantage over traditional real estate markets, where selling can take months or even years.'
        },
        { 
          text: 'Secondary Market Features',
          description: 'Token holders can list their tokens on a platform, where other investors can purchase them, offering real-time trading opportunities.'
        },
      ],
      [
        { 
          text: 'Interactive Simulation: Participating in a Tokenized Real Estate Market', 
          description: 'You will analyze real blockchain data to understand transaction patterns and network activity.'
        },
        { 
          text: 'interactive element', 
          description: 'Blockchain data exploration tool.'
        },
        { 
          text: 'Scenario', 
          description: 'Participants will explore blockchain data through practical exercises, learning how to read transactions, blocks, and smart contracts. This hands-on approach helps demystify blockchain technology.'
        },
      ],
    ],
  },
  {
    title: 'Level 9',
    cards: [
      [
        { 
          text: 'Legal Framework for Tokenized Real Estate in Dubai and UAE', 
          description: 'In this tutorial, we will explore the legal framework governing tokenized real estate in Dubai and the UAE.'
        },
        { 
          text: 'interactive element', 
          description: 'Flowchart of the legal framework.'
        },
        { 
          text: 'explanation', 
          description: 'Dubai and the UAE are rapidly advancing as hubs for blockchain technology, with regulatory frameworks evolving to support tokenized real estate. This tutorial covers the legal landscape, focusing on property rights, tokenization rules, and compliance with local real estate laws.'
        },
        { 
          text: 'key points',
          description: "UAE laws on property tokenization. Compliance with Dubai's real estate regulations (DLD- Dubai Land Department). The UAE's progressive stance on blockchain and crypto assets."
        },
      ],
      [
        { 
          text: 'Securities Laws and Tokenized Real Estate in Dubai and UAE', 
          description: 'This tutorial focuses on the classification of tokenized assets under UAE law.'
        },
        { 
          text: 'interactive element', 
          description: 'Classification matrix of tokenized assets.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenized real estate in the UAE may fall under the scope of securities regulations. This tutorial explains how the UAE Securities and Commodities Authority (SCA) classifies and regulates security tokens.'
        },
        { 
          text: 'key points',
          description: "UAE’s securities law related to tokenized assets. Licensing requirements for platforms offering tokenized real estate. The role of the UAE Central Bank in financial regulations."
        },
      ],
      [
        { 
          text: 'KYC (Know Your Customer) and AML (Anti-Money Laundering) Requirements in the UAE', 
          description: 'In this tutorial, we will examine the importance of KYC and AML in tokenized real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'KYC/AML compliance checklist.'
        },
        { 
          text: 'explanation', 
          description: 'The UAE has strict KYC and AML regulations, which tokenized real estate platforms must follow to prevent illegal activities. This tutorial explains the requirements for investors and how these laws protect the market.'
        },
        { 
          text: 'compliance steps',
          description: 'compliance steps'
        },
      ],
      [
        { 
          text: 'Property Rights and Tokenized Assets in Dubai and UAE', 
          description: 'This tutorial focuses on how tokenized ownership is structured in the UAE'
        },
        { 
          text: 'interactive element', 
          description: 'Diagram of ownership structure.'
        },
        { 
          text: 'explanation', 
          description: 'In Dubai and the UAE, tokenized real estate represents fractional ownership in compliance with local property laws. This tutorial explains how ownership works within the Dubai Land Department framework and how token holders can exercise their property rights.'
        },
        { 
          text: 'key points',
          description: "DLD’s rules for real estate ownership. Rights of fractional owners in tokenized property. Enforcement of property rights in tokenized markets"
        },
      ],
      [
        { 
          text: 'Smart Contracts and Legal Enforceability in Dubai and UAE', 
          description: 'In this tutorial, we will explore the legal recognition of smart contracts in the UAE.'
        },
        { 
          text: 'interactive element', 
          description: 'Smart contract lifecycle chart.'
        },
        { 
          text: 'explanation', 
          description: "Smart contracts are gaining legal recognition in the UAE, but their enforceability depends on how they're structured. This tutorial covers how smart contracts are viewed in the UAE and their role in tokenized real estate transactions."
        },
        { 
          text: 'key considerations',
          description: "Dubai’s recognition of blockchain-based contracts. Smart contracts’ legal enforceability in real estate transactions. Minimizing legal risks when using smart contracts."
        },
      ],
      [
        { 
          text: 'Taxation in Tokenized Real Estate in Dubai and UAE', 
          description: 'Taxation in Tokenized Real Estate in Dubai and UAE'
        },
        { 
          text: 'interactive element', 
          description: 'Tax implications calculator.'
        },
        { 
          text: 'explanation', 
          description: "The UAE offers a favorable tax environment for real estate investors, but tokenized real estate still comes with tax considerations. This tutorial covers the tax implications of buying and selling real estate tokens in the UAE."
        },
        { 
          text: 'key points',
          description: "Tax-free capital gains on real estate transactions. VAT (Value Added Tax) on real estate and token sales. How tokenization affects property-related tax obligations."
        },
      ],
      [
        { 
          text: 'Cross-Border Investments and Regulatory Challenges in Dubai and UAE', 
          description: 'In this tutorial, we will examine cross-border investment rules and regulatory challenges.'
        },
        { 
          text: 'interactive element', 
          description: 'Cross-border investment flowchart.'
        },
        { 
          text: 'explanation', 
          description: "Dubai’s strategic location and legal framework make it an attractive destination for cross-border tokenized real estate investments. However, navigating international laws and UAE-specific regulations can be complex."
        },
        { 
          text: 'key considerations',
          description: "Cross-border investment rules in the UAE. Double taxation treaties and their impact on foreign investors. Compliance with both UAE and foreign regulations."
        },
      ],
      [
        { 
          text: 'Legal Risks in Tokenized Real Estate Transactions in Dubai and UAE', 
          description: 'This tutorial addresses common legal risks associated with tokenized real estate transactions.'
        },
        { 
          text: 'interactive element', 
          description: 'Risk assessment tool.'
        },
        { 
          text: 'explanation', 
          description: "While Dubai’s regulatory environment is progressive, legal risks still exist in tokenized real estate transactions. This tutorial covers common risks such as disputes over property rights, platform security, and fraud in the UAE market."
        },
        { 
          text: 'key points',
          description: "Potential property disputes under Dubai Land Department rules. Platform security vulnerabilities. Fraud and misrepresentation in token issuance."
        },
      ],
      [
        { 
          text: 'Role of Special Purpose Vehicles (SPVs) in Tokenization in Dubai and UAE', 
          description: 'In this tutorial, we will explore the function and benefits of SPVs in tokenization.'
        },
        { 
          text: 'interactive element', 
          description: 'SPV structure diagram.'
        },
        { 
          text: 'explanation', 
          description: "SPVs are commonly used in Dubai to manage real estate tokenization legally. This tutorial explains how SPVs function in the UAE, offering protections to investors and ensuring compliance with local regulations."
        },
        { 
          text: 'key points',
          description: "How SPVs are structured under UAE law. Benefits of using SPVs for tokenized real estate. Ensuring legal protection through SPVs in Dubai’s real estate market."
        },
      ],
      [
        { 
          text: 'Future Legal Trends in Tokenized Real Estate in Dubai and UAE', 
          description: 'This final tutorial examines emerging legal trends in tokenized real estate.'
        },
        { 
          text: 'interactive element', 
          description: 'Future trends prediction tool.'
        },
        { 
          text: 'explanation', 
          description: "Dubai and the UAE are constantly updating their regulatory frameworks to accommodate innovations like tokenized real estate. This tutorial explores emerging legal trends, such as potential new laws and international partnerships that will shape the future of tokenization in the region."
        },
        { 
          text: 'key points',
          description: "Upcoming regulatory changes in Dubai and the UAE. UAE government initiatives for blockchain and tokenization. The role of international agreements in shaping future real estate markets."
        },
      ],
    ],
  },
  {
    title: 'Level 10',
    cards: [
      [
        { 
          text: "AI’s Impact on Real Estate", 
          description: 'Artificial Intelligence (AI) is reshaping the real estate sector, enhancing everything from market analysis to property management.'
        },
        { 
          text: 'interactive element', 
          description: 'AI impact infographic.'
        },
        { 
          text: 'Card 1 content', 
          description: "Artificial Intelligence (AI) is reshaping the real estate sector, enhancing everything from market analysis to property management. This tutorial discusses AI's role in improving decision-making and efficiency."
        },
        { 
          text: 'key points',
          description: 'AI-driven real estate valuations: Utilizing machine learning to estimate property values accurately. Predictive analytics for market trends: Forecasting future market movements based on data analysis Automating property management using AI: Streamlining tasks like tenant communication and maintenance requests.'
        },
      ],
      [
        { 
          text: 'Virtual Reality (VR) in Real Estate', 
          description: 'Virtual Reality (VR) technology enables immersive property tours and enhanced marketing strategies.'
        },
        { 
          text: 'interactive element', 
          description: 'VR tour demonstration.'
        },
        { 
          text: 'explanation', 
          description: 'Virtual Reality (VR) technology enables immersive property tours and enhanced marketing strategies. This tutorial highlights how VR is changing the way properties are presented and experienced.'
        },
        { 
          text: 'key points',
          description: 'VR property tours and their impact on marketing: Offering potential buyers an immersive experience. Reducing physical site visits through immersive experiences: Allowing remote exploration of properties. Enhancing cross-border investments through virtual property viewing: Breaking geographical barriers for investors.'
        },
      ],
      [
        { 
          text: 'Tokenization of Non-Traditional Assets', 
          description: 'Tokenization is expanding beyond traditional real estate into diverse asset classes.'
        },
        { 
          text: 'interactive element', 
          description: 'Tokenization case study examples.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenization is expanding beyond traditional real estate into diverse asset classes. This tutorial examines how non-traditional assets are being tokenized, creating new investment opportunities.'
        },
        { 
          text: 'key points',
          description: 'Tokenization of commercial and industrial properties: Opening up new markets for investors. Farmland and infrastructure investment through tokenization: Diversifying portfolios with unique assets. Benefits of diversifying with non-traditional assets: Enhancing risk management and returns.'
        },
      ],
      [
        { 
          text: 'Impact of 5G on Real Estate Transactions', 
          description: 'The advent of 5G technology is set to enhance the speed and efficiency of real estate transactions.'
        },
        { 
          text: 'interactive element', 
          description: '5G impact simulation.'
        },
        { 
          text: 'explanation', 
          description: 'The advent of 5G technology is set to enhance the speed and efficiency of real estate transactions. This tutorial focuses on how 5G enables faster communication and data processing.'
        },
        { 
          text: 'key points',
          description: 'How 5G enhances real-time property transactions: Improving response times and accessibility. Speeding up blockchain and smart contract execution with 5G: Enabling instant confirmations. Improving property data accessibility through faster networks: Streamlining information exchange.'
        },
      ],
      [
        { 
          text: 'Green and Sustainable Real Estate Tokenization', 
          description: 'Tokenization supports investment in sustainable real estate projects, aligning with global environmental goals.'
        },
        { 
          text: 'interactive element', 
          description: 'Sustainability metrics tracker.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenization supports investment in sustainable real estate projects, aligning with global environmental goals. This tutorial discusses how green initiatives are being integrated into tokenization.'
        },
        { 
          text: 'key points',
          description: 'Impact of tokenizing green real estate projects: Encouraging eco-friendly developments. Incentives for investing in sustainable developments: Offering benefits to green investors. How blockchain can track sustainability metrics: Ensuring transparency in eco-friendly investments.'
        },
      ],
      [
        { 
          text: 'Cross-Border Real Estate Investments via Tokenization', 
          description: 'Tokenization simplifies cross-border real estate investments, making them more accessible and secure.'
        },
        { 
          text: 'interactive element', 
          description: 'Cross-border investment calculator.'
        },
        { 
          text: 'explanation', 
          description: 'Tokenization simplifies cross-border real estate investments, making them more accessible and secure. This tutorial highlights the benefits and considerations of global investment through tokenization.'
        },
        { 
          text: 'key points',
          description: 'How tokenization simplifies cross-border real estate investments: Reducing barriers and complexities. Legal and tax considerations for international investors: Understanding regulatory requirements. Benefits of fractional ownership across borders: Allowing global participation in real estate markets.'
        },
      ],
      [
        { 
          text: 'Regulatory Evolution in Tokenization', 
          description: 'As tokenization becomes more mainstream, regulations are evolving worldwide.'
        },
        { 
          text: 'interactive element', 
          description: 'Regulatory landscape comparison chart.'
        },
        { 
          text: 'explanation', 
          description: 'As tokenization becomes more mainstream, regulations are evolving worldwide. This tutorial examines how different jurisdictions are adapting to the rise of tokenized real estate.'
        },
        { 
          text: 'key points',
          description: 'Global regulatory approaches to tokenization: Comparing frameworks in various countries. Future trends in tokenization laws and frameworks: Anticipating changes in regulations. How regulation shapes the future of real estate investments: Understanding compliance and security.'
        },
      ],
      [
        { 
          text: 'Future of Property Management Technology', 
          description: 'Innovations like IoT and AI are transforming property management practices.'
        },
        { 
          text: 'interactive element', 
          description: 'Property management tech demo.'
        },
        { 
          text: 'explanation', 
          description: 'Innovations like IoT and AI are transforming property management practices. This tutorial discusses how technology is enhancing efficiency and transparency for landlords and tenants.'
        },
        { 
          text: 'key points',
          description: 'AI and IoT in property management: Automating and optimizing operations. Blockchain for transparent lease agreements: Increasing trust in tenant landlord relationships. Automating maintenance and rent payments: Streamlining financial transactions.'
        },
      ],
      [
        { 
          text: 'Blockchain Integration with Traditional Financial Systems', 
          description: 'Innovations like IoT and AI are transforming property management practices.'
        },
        { 
          text: 'interactive element', 
          description: 'Property management tech demo.'
        },
        { 
          text: 'explanation', 
          description: 'The integration of blockchain with traditional finance is revolutionizing transaction processes. This tutorial covers the implications of blockchain for real estate financing and operations.'
        },
        { 
          text: 'key points',
          description: 'Integration of blockchain with traditional banking and payment systems: Enhancing transaction security. Benefits of blockchain for real estate loans and mortgages: Streamlining financing processes. How blockchain ensures secure cross-border transactions: Reducing fraud and risk.'
        },
      ],
      [
        { 
          text: 'Interactive Discussion: Visioning the Future of Real Estate', 
          description: 'Engage in an interactive discussion about the future of real estate, exploring emerging technologies and innovations.'
        },
        { 
          text: 'interactive element', 
          description: 'Discussion forum or live poll.'
        },
        { 
          text: 'explanation', 
          description: 'Engage in an interactive discussion about the future of real estate, exploring emerging technologies and innovations. Participants will share insights and ideas on market evolution.'
        },
        { 
          text: 'key points',
          description: 'Innovations that could shape real estate in the next decade: Predicting future trends. How investors can prepare for future trends: Adapting strategies to new realities. Identifying emerging opportunities in tokenized real estate: Spotting potential investments.'
        },
      ],
    ],
  },
] 

export const quizzes = [
  {
    topics: [
      [{topic: 'reinforce learning through an interactive quiz'}],
      [{topic: 'reinforce learning through an interactive quiz'}],
      [{topic: 'reinforce learning through an interactive quiz'}],
      [{topic: 'reinforce learning through an interactive quiz'}],
      [{topic: 'reinforce learning through an interactive quiz'}],
    ],
    questions: [
      [{options: ''}]
    ]
  }
]