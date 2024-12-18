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
    ],
  },
  {
    title: 'Level 2',
    cards: [
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
    ],
  },
  {
    title: 'Level 3',
    cards: [
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
    ],
  },
] 