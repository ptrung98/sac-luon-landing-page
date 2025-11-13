import { Button } from "@/app/components/button";
import { MaskBorder } from "@/app/components/mask-border";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("About");

  return (
    <main className="about">
      <section className="hero">
        <div className="overlay">
          <span>
            {t("hero.text_1")}&nbsp;
            <span className="text-hightlight">{t("hero.text_2")}</span> <br />
            <span className="text-hightlight">{t("hero.text_3")}</span>&nbsp;
            {t("hero.text_4")}
            <br /> {t("hero.text_5")}&nbsp;
            <span className="text-hightlight">{t("hero.text_6")}</span>
          </span>
        </div>
      </section>

      <section className="content">
        <div className="about-us">
          <div className="about-us-left">
            <div className="about-us-left-image"></div>
          </div>
          <div className="about-us-right">
            <h3 className="text-hightlight-half">{t("about_us.title")}</h3>
            <ul className="text-list-bullet-point">
              <li>{t("about_us.bullet_1")}</li>
              <li>{t("about_us.bullet_2")}</li>
            </ul>
          </div>
        </div>

        <div className="vision-mission-container">
          <div className="vision">
            <div className="title-container">
              <div className="title-content">
                <div className="mask-border-1-container">
                  <MaskBorder size="small" position="top-left" />
                </div>
                <div className="mask-border-2-container">
                  <MaskBorder size="small" position="top-left" />
                </div>
                <h3>{t("vision.title")}</h3>
              </div>
            </div>
            <ul className="text-list-bullet-point">
              <li>
                <strong>{t("vision.bullet_1.text_1")}</strong>
                &nbsp;
                {t("vision.bullet_1.text_2")}
              </li>
              <li>{t("vision.bullet_2")}</li>
              <li>{t("vision.bullet_3")}</li>
            </ul>
            <div className="image"></div>
          </div>

          <div className="mission">
            <div className="title-container">
              <div className="title-content">
                <div className="mask-border-1-container">
                  <MaskBorder size="small" position="top-left" />
                </div>
                <div className="mask-border-2-container">
                  <MaskBorder size="small" position="top-left" />
                </div>
                <h3>{t("mission.title")}</h3>
              </div>
            </div>
            <ul className="text-list-bullet-point">
              <li>{t("mission.bullet_1")}</li>
              <li>{t("mission.bullet_2")}</li>
              <li>
                <strong>{t("mission.bullet_3.text_1")}</strong>
                &nbsp;
                {t("mission.bullet_3.text_2")}
              </li>
            </ul>
            <div className="image"></div>
          </div>
        </div>

        <div className="learn-more">
          <div className="learn-more-button-container">
            <div className="content-container">
              <div className="mask-border-1-container">
                <MaskBorder size="small" position="bottom-right" />
              </div>
              <div className="mask-border-2-container">
                <MaskBorder size="small" position="bottom-right" />
              </div>
              <Button
                className="learn-more-button"
                type="primary"
                outlinePadding="none"
              >
                {t("general.learn_more")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
