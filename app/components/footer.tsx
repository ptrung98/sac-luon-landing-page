import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FacebookIcon } from "./icons/facebook";
import { InstagramIcon } from "./icons/instagram";
import { TiktokIcon } from "./icons/tiktok";
import { YoutubeIcon } from "./icons/youtube";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-content container">
          <div className="footer-logo">
            <Image src="/footer/logo.png" alt="Sạc Luôn" width={248} height={300} />
          </div>

          {/* Menu */}
          <div className="footer-links">
            <h4>Về Chúng tôi</h4>
            <ul>
              <li>
                <a href="#">Dịch vụ</a>
              </li>
              <li>
                <a href="#">Tìm điểm sạc</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
              <li>
                <a href="#">Liên hệ kinh doanh</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Theo dõi chúng tôi tại:</h4>
            <div className="social-icons">
              <FacebookIcon />
              <InstagramIcon />
              <TiktokIcon />
              <YoutubeIcon />
            </div>

            <h4>Thông tin liên hệ</h4>
            <p>(+84) 123 456 7890</p>
            <p>hotro@sacluon.com</p>

            <h4>Địa chỉ</h4>
            <p>
              Tầng 2 – số 5, ngõ 76 Trần Thái Tông,
              <br />
              P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
