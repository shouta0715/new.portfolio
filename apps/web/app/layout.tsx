import { cn } from "@/lib/cn";
import "@repo/tailwind-config/global.css";
import { GeistSans as geistSans } from "geist/font/sans";
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

type Props = {
  children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="ja"
      className={cn(geistSans.variable, notoSans.variable, "font-noto-sans")}
      suppressHydrationWarning
    >
      <body className="bg-background-100 dark text-gray-1000">{children}</body>
    </html>
  );
}
