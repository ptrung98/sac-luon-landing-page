import { TutorialIcon } from "@/app/components/icons/tutorial";
import { SelectLocaltion } from "@/app/components/select-location";
import { getTranslations } from "next-intl/server";

export default async function ChargingPointPage() {
  const t = await getTranslations("ChargingPoint");

  return (
    <main className="charging-point">
      <section className="hero">
        <div className="overlay"></div>
      </section>

      <div className="section-content-container">
        <section className="download-app-container">
          <div className="image"></div>
          <div className="download-app-right">
            <span>
              {t("download_app")} <br />
              {t("find_now")}
            </span>
            <div className="link-app-button">
              <div className="app-store"></div>
              <div className="google-store"></div>
            </div>
          </div>
        </section>

        <section className="charging-point-list">
          <div className="charging-point-list-header">
            <h4 className="text-hightlight-half">{t("list_title")}</h4>
            <div className="cta">
              <span className="left">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("find_near_me"),
                  }}
                />
              </span>
              <div className="right">
                <div>{t("tutorial")}</div>
                <TutorialIcon width={20} height={20} />
              </div>
            </div>
          </div>
          <SelectLocaltion />
        </section>
      </div>
    </main>
  );
}
