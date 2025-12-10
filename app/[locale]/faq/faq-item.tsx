"use client";

import { FaqArrowUpIcon } from "@/app/components/icons/arrow-up";
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

export const FaqItem = (props: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item" onClick={() => handleOnclick()}>
      <div className={`faq-header ${isOpen ? "open" : ""}`}>
        <span>{props.question}</span>
        <div className="icon">
          <FaqArrowUpIcon />
        </div>
      </div>
      <div className={`faq-content ${isOpen ? "open" : ""}`}>
        <p
          dangerouslySetInnerHTML={{
            __html: props.answer,
          }}
        />
      </div>
    </div>
  );
};
