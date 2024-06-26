import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./marketing/Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title} | Migrantx</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="MigrantX" />
      <meta property="og:title" content={`${title} | Migrant`} />
      <meta property="og:description" content="MigrantX" />
      <meta property="og:url" content="https://migrantx.in/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
