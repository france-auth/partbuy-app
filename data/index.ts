
interface DashboardProps {
  text: string;
  value: string;
}
export const dashbordcards: DashboardProps[] = [
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