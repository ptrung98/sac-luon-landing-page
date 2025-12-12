"use client";

import Select from "react-select";

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "white",
    border: state.isFocused ? "3px solid #ffcc00" : "3px solid #ffcc00",
    borderRadius: "30px",
    boxShadow: state.isFocused ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
    minHeight: "60px",
    padding: "0 10px",
    cursor: "pointer",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: "#333333",
    fontWeight: "bold",
    fontSize: "18px",
    marginLeft: "10px",
  }),

  placeholder: (provided: any) => ({
    ...provided,
    color: "#333333",
    fontWeight: "bold",
    fontSize: "18px",
    marginLeft: "10px",
  }),

  dropdownIndicator: (provided: any) => ({
    ...provided,
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderTop: "12px solid #ffcc00",
    padding: 0,
    marginRight: "15px",
  }),

  indicatorSeparator: () => ({ display: "none" }),
};

type CustomSelectProps = {
  options: {
    label: string;
    value: string | number;
  }[];
  placeholder: string;
  onChange?: (selectedOption: any) => void;
};

export default function CustomSelect(props: CustomSelectProps) {
  return (
    <div style={{ width: 250 }}>
      <Select
        defaultValue={null}
        options={props.options}
        styles={customStyles}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
