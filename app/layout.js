import { Ultra, PT_Serif, Montserrat} from "next/font/google";
import "./globals.css";

const ultra = Ultra({
  
  subsets: ["latin"], weight: ['400'],
});

const pt_Serif = PT_Serif({
  
  subsets: ["latin"], weight: ['400', '700'],
});

const montserrat = Montserrat({
  
  subsets: ["latin"], weight: ['200', '300', '600'],
});

export const metadata = {
  title: "dmHerrera",
  description: "Denisse Herrera's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ultra.className} ${pt_Serif.className} ${montserrat.className} antialiased 
        leading-8 overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
