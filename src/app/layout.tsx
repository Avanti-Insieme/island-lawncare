import { DM_Sans, Saira_Condensed } from "next/font/google";
import "./globals.css";
import { TopBar, Header, Footer } from "@/components/Island";
import { ThemeProvider } from "next-themes";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const sairaCondensed = Saira_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-saira",
});

export const metadata = {
  title: "Island Lawncare - Lawn Maintenance in Cornwall, PEI",
  description: "Reliable mowing, trimming and full lawn maintenance for homes across Queens County, PEI. Free quotes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --font-dm-sans: ${dmSans.variable};
            --font-saira: ${sairaCondensed.variable};
          }
        `}</style>
      </head>
      <body className={`${dmSans.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <TopBar />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
