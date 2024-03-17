import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import { Lato } from "next/font/google";
import PageContainer from "@/components/containers/page-container";

export const metadata = {
  title: "John Roice Aldeza",
  description: "John Roice Aldeza's Dev Portfolio",
};

const font = Lato({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="emerald" className={font.className}>
      <body>
        <div
          className="flex flex-col justify-start gap-1 relative"
          style={{ minHeight: "100vh" }}
        >
          <Navbar />
          <PageContainer>{children}</PageContainer>
          <Footer className={"mt-auto"} />
        </div>
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-links@2/tsparticles.preset.links.min.js"></Script>
    </html>
  );
}
