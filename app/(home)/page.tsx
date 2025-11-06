import Image from "next/image";
import { Button } from "../components/button";

const Home = () => {
  return (
    <main className="home">
      <div className="hero-background-container">
        <Image
          src="/home/banner.png"
          alt="Powerbank"
          fill
          className="image"
          priority
        />
        <div className="overlay"></div>
      </div>
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
          >
            VI
          </Button>
          <Button type="primary" outlinePadding="small">
            Liên hệ
          </Button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>SẠC LUÔN</h1>
          <p>
            Dịch Vụ Cho Thuê Sạc Dự Phòng
            <br />
            Tiện Lợi Cho Mọi Lúc, Mọi Nơi!
          </p>
          <div className="hero-content-cta">
            <Button type="primary" outlinePadding="medium">
              TÌM CHỖ SẠC NGAY →
            </Button>
            <div className="stats">
              <div>
                <h3>50+</h3>
                <p>
                  Điểm sạc <br /> toàn quốc
                </p>
              </div>
              <div>
                <h3>1M+</h3>
                <p>
                  Khách hàng sử dụng <br /> hàng tháng
                </p>
              </div>
            </div>
            <div className="tuturial">
              <p>
                CẦN HƯỚNG <br /> DẪN SỬ DỤNG?
              </p>
              <button className="btn-tuturial">TÌM HIỂU NGAY →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card card-1">
          <h4>
            Tiện Lợi <br /> Mọi Lúc, Mọi Nơi
          </h4>
          <div className="content">
            <div className="item">Tìm điểm sạc</div>
            <div className="item">Hình thức thanh toán</div>
          </div>
          <Button type="secondary" outlinePadding="medium">
            Tìm hiểu thêm →
          </Button>
        </div>
        <div className="feature-card card-2">
          <h4>PIN ĐỎ SẠC LUÔN LO</h4>
          <p>Không cần mang theo sạc dự phòng cá nhân.</p>
          <p>
            Chúng tôi luôn sẵn sàng hỗ trợ bạn ở mọi nơi – <br />
            từ quán cà phê đến trung tâm thương mại.
          </p>
        </div>
        <div className="feature-card card-3">
          <h4>99,7% thiết bị luôn sẵn sàng</h4>
          <p>Sạc nhanh đủ loại cáp, tương thích mọi thiết bị.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
