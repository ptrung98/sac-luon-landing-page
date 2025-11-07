import Image from "next/image";
import { Button } from "./button";

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
        <Button className="btn-lang" type="transparent" outlinePadding="small">
          VI
        </Button>
        <Button type="primary" outlinePadding="small">
          Liên hệ
        </Button>
      </div>
    </header>
  );
};
