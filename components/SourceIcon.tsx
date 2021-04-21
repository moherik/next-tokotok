import React from "react";

interface SourceIconProps {
  store: {
    type: "tokopedia" | "bukalapak" | "shopee";
    name: string;
  };
}

export const SourceIcon: React.FC<SourceIconProps> = ({ store }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
      }}
    >
      <img src={`/images/logo/${store.type}.png`} width="16" />
      <span style={{ fontSize: "0.8rem" }}>{store.name}</span>
    </div>
  );
};
