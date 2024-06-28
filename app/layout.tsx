import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "Aniket",
	authors: {
		name: "Aniket",
	},

	description:
		"a 20 year cs graduate passionate about developement and design, And I love to make things, Apart from that I do freelancing.",
	openGraph: {
		title: "Aniket",
		description:
			"a 20 year cs graduate passionate about developement and design, And I love to make things, Apart from that I do freelancing.",
		url: "http://localhost:3000",
		siteName: "Aniket",
		images: "./og.png",
		type: "website",
	},
	keywords: ["aniket work", "aniket", "aniketportfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        
        </body>
    </html>
  );
}
