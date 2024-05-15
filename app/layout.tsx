// app/layout.tsx
import type { ReactNode } from "react";
import type { NextPage } from "next";
import { Inter } from "next/font/google";
import "./app.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
