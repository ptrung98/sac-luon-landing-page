import Image from "next/image";
import { Button } from "./button";
import { ArrowDownIcon } from "./icons/arrow-down";
import { MessageIcon } from "./icons/message";

export const Header = () => {
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
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Điểm sạc</a>
        <a href="#">Về Sạc Luôn</a>
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
