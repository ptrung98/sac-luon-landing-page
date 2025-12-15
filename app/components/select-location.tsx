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
  district_id: any;
}

interface Province {
  id: any;
  name: string;
}

interface District {
  id: any;
  name: string;
  province_id: any;
}

export const SelectLocaltion = () => {
  const [chargingPointSelected, setChargingPointSelected] =
    useState<ChargingPointItem | null>(null);

  const t = useTranslations("ChargingPoint");
  const chargingPointItems = t.raw("items") as ChargingPointItem[];
  const provinces = t.raw("provinces") as Province[];
  const districts = t.raw("districts") as District[];

  const [provinceOptions] = useState(
    provinces.map((province) => ({
      value: province.id,
      label: province.name,
    }))
  );

  const [districtOptions, setDistrictOptions] = useState<any[]>([]);
  const [chargingPointItemOptions, setChargingPointItemOptions] = useState(
    chargingPointItems.map((item) => ({
      value: item.id,
      label: `${item.name} - ${item.address}`,
    }))
  );

  const handleOnChangeLocation = (selectedOption: any) => {
    const selectedPoint = chargingPointItems.find(
      (item) => item.id === selectedOption.value
    );
    setChargingPointSelected(selectedPoint || null);
  };

  const handleOnChangeDistrict = (selectedOption: any) => {
    const filteredChargingPoints = chargingPointItems.filter(
      (item) => item["district_id"] === selectedOption.value
    );  

    setChargingPointItemOptions(filteredChargingPoints.map((item) => ({
      value: item.id,
      label: `${item.name} - ${item.address}`,
    })));
  };

  const handleOnChangeProvince = (selectedOption: any) => {
    const filteredDistricts = districts.filter(
      (district) => district.province_id === selectedOption.value
    );
    const newDistrictOptions = filteredDistricts.map((district) => ({
      value: district.id,
      label: district.name,
      province_id: district.province_id,
    }));
    setDistrictOptions(newDistrictOptions);
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
          <CustomSelect
            options={provinceOptions}
            placeholder={t("province")}
            onChange={handleOnChangeProvince}
          />
          <CustomSelect
            options={districtOptions}
            placeholder={t("district")}
            onChange={handleOnChangeDistrict}
          />
          <CustomSelect
            options={chargingPointItemOptions}
            placeholder={t("charging_point")}
            onChange={handleOnChangeLocation}
          />
        </div>
      </div>
    </div>
  );
};
