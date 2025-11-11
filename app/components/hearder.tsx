"use client";
import Image from "next/image";
import { Button } from "./button";
import { ArrowDownIcon } from "./icons/arrow-down";
import { MessageIcon } from "./icons/message";
import { usePathname } from "next/navigation";


export const Header = () => {
  const menu = [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Sản phẩm",
      href: "/san-pham",
    },
    {
      title: "Điểm sạc",
      href: "/diem-sac",
    },
    {
      title: "Về Sạc Luôn",
      href: "/about",
    },
  ];
  const pathname = usePathname();
  
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
            className={item.href === pathname ? "active" : ""}
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
