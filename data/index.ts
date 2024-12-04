
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
]