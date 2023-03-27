import React from "react";
import Navbar from "./navbar";

export default function Layout({
  children,
  tabActive,
}: {
  children: React.ReactNode;
  tabActive: string;
}) {
  return (
    <>
      <Navbar tabActive={tabActive} />
      <main>{children}</main>
    </>
  );
}
