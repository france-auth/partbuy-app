import Link from "next/link";

const MarketplaceSvg: React.FC<React.SVGProps<SVGSVGElement>> = ( props ) => {
  return (
    <Link href={'/marketplace'}>
      <svg
        width="31" 
        height="30" 
        viewBox="0 0 31 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M6.78133 26.25C6.09383 26.25 5.50529 26.0052 5.0157 25.5156C4.52612 25.026 4.28133 24.4375 4.28133 23.75V13.8125C3.80216 13.375 3.43237 12.8125 3.17195 12.125C2.91154 11.4375 2.90633 10.6875 3.15633 9.875L4.46883 5.625C4.6355 5.08333 4.93237 4.63542 5.35945 4.28125C5.78654 3.92708 6.28133 3.75 6.84383 3.75H24.2188C24.7813 3.75 25.2709 3.92188 25.6876 4.26562C26.1042 4.60938 26.4063 5.0625 26.5938 5.625L27.9063 9.875C28.1563 10.6875 28.1511 11.4271 27.8907 12.0938C27.6303 12.7604 27.2605 13.3333 26.7813 13.8125V23.75C26.7813 24.4375 26.5365 25.026 26.047 25.5156C25.5574 26.0052 24.9688 26.25 24.2813 26.25H6.78133ZM18.2813 12.5C18.8438 12.5 19.2709 12.3073 19.5626 11.9219C19.8542 11.5365 19.9688 11.1042 19.9063 10.625L19.2188 6.25H16.7813V10.875C16.7813 11.3125 16.9272 11.6927 17.2188 12.0156C17.5105 12.3385 17.8647 12.5 18.2813 12.5ZM12.6563 12.5C13.1355 12.5 13.5261 12.3385 13.8282 12.0156C14.1303 11.6927 14.2813 11.3125 14.2813 10.875V6.25H11.8438L11.1563 10.625C11.073 11.125 11.1824 11.5625 11.4845 11.9375C11.7865 12.3125 12.1772 12.5 12.6563 12.5ZM7.09383 12.5C7.46883 12.5 7.79695 12.3646 8.0782 12.0938C8.35945 11.8229 8.53133 11.4792 8.59383 11.0625L9.28133 6.25H6.84383L5.59383 10.4375C5.46883 10.8542 5.53654 11.3021 5.79695 11.7812C6.05737 12.2604 6.48966 12.5 7.09383 12.5ZM23.9688 12.5C24.573 12.5 25.0105 12.2604 25.2813 11.7812C25.5522 11.3021 25.6147 10.8542 25.4688 10.4375L24.1563 6.25H21.7813L22.4688 11.0625C22.5313 11.4792 22.7032 11.8229 22.9845 12.0938C23.2657 12.3646 23.5938 12.5 23.9688 12.5ZM6.78133 23.75H24.2813V14.9375C24.1772 14.9792 24.1095 15 24.0782 15H23.9688C23.4063 15 22.9115 14.9062 22.4845 14.7188C22.0574 14.5312 21.6355 14.2292 21.2188 13.8125C20.8438 14.1875 20.4167 14.4792 19.9376 14.6875C19.4584 14.8958 18.948 15 18.4063 15C17.8438 15 17.3178 14.8958 16.8282 14.6875C16.3386 14.4792 15.9063 14.1875 15.5313 13.8125C15.1772 14.1875 14.7657 14.4792 14.297 14.6875C13.8282 14.8958 13.323 15 12.7813 15C12.1772 15 11.6303 14.8958 11.1407 14.6875C10.6511 14.4792 10.2188 14.1875 9.84383 13.8125C9.40633 14.25 8.97404 14.5573 8.54695 14.7344C8.11987 14.9115 7.6355 15 7.09383 15H6.9532C6.90112 15 6.84383 14.9792 6.78133 14.9375V23.75Z" 
        fill="currentColor"/>
      </svg>
    </Link>
  )
}

export default MarketplaceSvg;