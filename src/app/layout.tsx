import { raleway } from "@/styles/fonts";

import Cursor from "@/components/Cursor";
import ParticlesBackground from "@/components/ParticlesBackground";

import "./globals.css";

export const metadata = {
  title: "Hi there! I’m Felippe Puhle!",
  description:
    "I'm a Software Engineer with industry experience building web and mobile apps using ReactJS, React Native, and GraphQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ParticlesBackground />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
