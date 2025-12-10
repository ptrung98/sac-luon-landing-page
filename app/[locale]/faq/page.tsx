import { getTranslations } from "next-intl/server";
import { FaqItem } from "./faq-item";

interface FAQItem {
  question: string;
  answer: string;
}

export default async function FaqPage() {
  const t = await getTranslations("FAQ");

  const faqItems = t.raw('items') as FAQItem[];

  return (
    <main className="faq">
      <section className="hero">
        <div className="overlay">{t("hero.text")}</div>
      </section>

      <section className="content">
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <FaqItem
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
