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
    ],
  },
  {
    title: 'Level 4',
    cards: [
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
    ],
  },
  {
    title: 'Level 5',
    cards: [
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
    ],
  },
  {
    title: 'Level 6',
    cards: [
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
    ],
  },
  {
    title: 'Level 7',
    cards: [
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
    ],
  },
  {
    title: 'Level 8',
    cards: [
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
    ],
  },
  {
    title: 'Level 9',
    cards: [
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
    ],
  },
  {
    title: 'Level 10',
    cards: [
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
      [
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element', 
          description: 'Description for Card 2'
        },
        { 
          text: 'Card 1 content', 
          description: 'Description for Card 1'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
        { 
          text: 'interactive element',
          description: 'Description for Card 2'
        },
      ],
    ],
  },
] 