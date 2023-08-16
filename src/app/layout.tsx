import Footer from "@/components/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Life Coaching with a Twist!",
  description: `At You've Got a Friend, our mission is to extend a supportive
  hand to those experiencing isolation or loneliness. Whether you
  require a compassionate listener to turn to on difficult days or
  seek the expert guidance of our Mentor to navigate challenging times
  and embrace a brighter future. Or maybe possibly during your
  session, you would prefer a healing exercises to cultivate inner
  calm and balance during periods of high stress, whatever it is, we
  are there to provide the assistance that you need.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
