import { paytoneFont, catamaranFont, jostFont } from "../../public/fonts/font"
import Header from "./components/header";
import ScrollToTopButton from "./components/scrollToTop";
import "./globals.css";
export const metadata = {
  title: 'RecipeFinder',
  description: 'Find Your Favorite Recipes Here',
}

export default function RootLayout({ children, modal
 }) { 
  return (
    <html lang="en">
    <body className={`${paytoneFont} ${catamaranFont} ${jostFont}`}>
      <div className="overflow-y-auto select-none h-full w-full flex flex-col gap-6 md:gap-8 pb-6 md:pb-8 overflow-x-hidden">
       <Header/>
       {modal}
       {children}
       <ScrollToTopButton/>
      </div>
    </body>
  </html>
  );
}
