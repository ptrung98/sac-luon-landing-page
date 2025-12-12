"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const CustomSelect = dynamic(() => import("./select"), {
  ssr: false,
});

interface ChargingPointItem {
  id: any;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}

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

  const [chargingPointSelected, setChargingPointSelected] =
    useState<ChargingPointItem | null>(null);

  const t = useTranslations("CHARGING_POINTS");
  const chargingPointItems = t.raw("items") as ChargingPointItem[];
  const chargingPointItemOptions = chargingPointItems.map((item) => ({
    value: item.id,
    label: `${item.name} - ${item.address}`,
  }));

  const handleOnChangeLocation = (selectedOption: any) => {
    const selectedPoint = chargingPointItems.find(
      (item) => item.id === selectedOption.value
    );
    setChargingPointSelected(selectedPoint || null);
  };

  return (
    <div className="map">
      <iframe
        src={`https://maps.google.com/maps?ll=21.028511,105.854199&z=13&q=${chargingPointSelected?.location.lat}, ${chargingPointSelected?.location.lng}&hl=vi&output=embed`}
        style={{
          border: 0,
          width: "100%",
          height: "100%",
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Location"
      ></iframe>
      <div className="select-location">
        <div style={{ display: "flex", gap: "2rem" }}>
          <CustomSelect options={communeOptions} placeholder="Xã" />
          <CustomSelect options={cityOptions} placeholder="Thành phố" />
          <CustomSelect
            options={chargingPointItemOptions}
            placeholder="Điểm sạc"
            onChange={handleOnChangeLocation}
          />
        </div>
      </div>
    </div>
  );
};
