import { Button } from "../components/button";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-background-container">
          <div className="overlay"></div>
        </div>
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
            <div className="tutorial">
              <p>
                CẦN HƯỚNG <br /> DẪN SỬ DỤNG?
              </p>
              <button className="btn-tutorial">TÌM HIỂU NGAY →</button>
            </div>
          </div>
        </div>

        <section className="features">
          <div className="feature-card card-1">
            <div className="overlay">
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
          </div>
          <div className="feature-card card-2">
            <div className="overlay">
              <div className="content">
                <h4 className="text-1">
                  PIN ĐỎ <br /> SẠC LUÔN LO
                </h4>
                <br />
                <p className="text-2">
                  Không cần mang theo sạc dự phòng cá nhân.
                </p>
                <br />
                <p className="text-3">
                  Chúng tôi luôn sẵn sàng hỗ trợ bạn ở mọi nơi – <br />
                  từ quán cà phê đến trung tâm thương mại.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-card card-3">
            <div className="overlay">
              <p className="text-1">99,7% </p>
              <p className="text-2">thiết bị luôn sẵn sàng</p>
              <h4 className="text-3">
                sạc nhanh
                <br /> đủ loại cáp <br /> tương thích với <br /> mọi thiết bị.
              </h4>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
