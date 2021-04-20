import Head from "next/head";
import React from "react";

export const Header: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title || "Tokotok"}</title>
    </Head>
  );
};
