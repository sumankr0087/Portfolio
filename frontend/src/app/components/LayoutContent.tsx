"use client"; // This makes it a Client Component

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <>
      {children}
      {isLandingPage && <Footer />}
    </>
  );
}
