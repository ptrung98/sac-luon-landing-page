"use client";

import Image from "next/image";
import { Button } from "./button";
import { ArrowDownIcon } from "./icons/arrow-down";
import { MessageIcon } from "./icons/message";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("Header");
  const menu = [
    {
      title: t("home"),
      href: "/",
    },
    {
      title: t("products"),
      href: "/san-pham",
    },
    {
      title: t("charging_spots"),
      href: "/diem-sac",
    },
    {
      title: t("about_us"),
      href: "/about",
    },
  ];
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const changeLanguage = () => {
    const segments = pathname.split("/");
    segments[1] = currentLocale === "vi" ? "en" : "vi";
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const isEqualPath = (href: string) => {
    const path = pathname.split(`${currentLocale}`)[1];
    return href === path || (href === "/" && path === "");
  };

  return (
    <header className="header">
      <Image
        src="/home/logo.svg"
        alt="Sạc Luôn Logo"
        width={195}
        height={45}
        priority
      />
      <nav className="nav">
        {menu.map((item, index) => (
          <a
            href={item.href}
            key={index}
            className={isEqualPath(item.href) ? "active" : ""}
          >
            {item.title}
          </a>
        ))}
      </nav>
      <div className="actions">
        <Button
          className="btn-lang"
          type="transparent"
          outlinePadding="small"
          icon={<ArrowDownIcon />}
          onClick={changeLanguage}
        >
          VI
        </Button>
        <Button
          className="btn-contact"
          type="primary"
          outlinePadding="small"
          icon={<MessageIcon style={{ marginLeft: "0.4rem" }} />}
        >
          LIÊN HỆ
        </Button>
      </div>
    </header>
  );
};
