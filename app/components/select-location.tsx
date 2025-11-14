"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const CustomSelect = dynamic(() => import("./select"), {
  ssr: false,
});

export const SelectLocaltion = () => {
  const [communeOptions] = useState([
    { value: "x1", label: "Xã 1" },
    { value: "x2", label: "Xã 2" },
    { value: "x3", label: "Xã 3" },
  ]);

  const [cityOptions] = useState([
    { value: "t1", label: "Thành phố 1" },
    { value: "t2", label: "Thành phố 2" },
    { value: "t3", label: "Thành phố 3" },
  ]);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <CustomSelect options={communeOptions} placeholder="Xã" />
      <CustomSelect options={cityOptions} placeholder="Thành phố" />
    </div>
  );
};
