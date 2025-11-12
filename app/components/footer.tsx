import Image from "next/image";
import { FacebookIcon } from "./icons/facebook";
import { InstagramIcon } from "./icons/instagram";
import { TiktokIcon } from "./icons/tiktok";
import { YoutubeIcon } from "./icons/youtube";
import { getTranslations } from "next-intl/server";

export default async function Footer() {

  const t = await getTranslations("Footer");

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-content container">
          <div className="footer-logo">
            <Image
              src="/footer/logo.png"
              alt={t("logo_alt")} // Dịch alt text của logo
              width={248}
              height={300}
            />
          </div>

          {/* Menu */}
          <div className="footer-links">
            <h4>{t("link_group_title")}</h4>
            <ul>
              <li>
                <a href="#">{t("link1_text")}</a>
              </li>
              <li>
                <a href="#">{t("link2_text")}</a>
              </li>
              <li>
                <a href="#">{t("link3_text")}</a>
              </li>
              <li>
                <a href="#">{t("link4_text")}</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t("social_title")}</h4>
            <div className="social-icons">
              <FacebookIcon />
              <InstagramIcon />
              <TiktokIcon />
              <YoutubeIcon />
            </div>

            <h4>{t("contact_info_title")}</h4>
            <p>(+84) 123 456 7890</p>
            <p>hotro@sacluon.com</p>

            <h4>{t("address_title")}</h4>
            <p>
              {t("address_line1")}
              <br />
              {t("address_line2")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
