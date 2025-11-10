import { Button } from "../components/button";
import { ArrowRightIcon } from "../components/icons/arrow-right";
import { ArrowRightCircleIcon } from "../components/icons/arrow-right-circle";
import { ArrowTopRightIcon } from "../components/icons/arrow-top-right";
import Image from "next/image";

const Home = () => {
  const outstandingFeatureItems = [
    {
      title: "Sạc nhanh PD/QC 3.0",
      description: "đầy pin nhanh chóng chỉ trong 30 phút.",
      backgroundImage: "/home/outstanding-feature-1.png",
    },
    {
      title: "Đa DẠNG CỔNG SẠC",
      description:
        "tương thích tất cả các dòng sạc iPhone, Android, Type-C ....",
      backgroundImage: "/home/outstanding-feature-2.png",
    },
    {
      title: "Trả pin linh hoạt",
      description: "nhận và trả pin ở bất kỳ trạm nào trong hệ thống.",
      backgroundImage: "/home/outstanding-feature-3.png",
    },
    {
      title: "Bảo mật & an toàn",
      description: "theo dõi giao dịch minh bạch, pin được kiểm định định kỳ.",
      backgroundImage: "/home/outstanding-feature-4.png",
    },
  ];

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
            <Button
              type="primary"
              outlinePadding="medium"
              icon={<ArrowTopRightIcon />}
            >
              TÌM CHỖ SẠC NGAY
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
              <button className="btn-tutorial">
                <span>TÌM HIỂU NGAY</span> <ArrowRightCircleIcon />
              </button>
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
              <Button
                type="secondary"
                outlinePadding="medium"
                icon={<ArrowTopRightIcon />}
              >
                Tìm hiểu thêm
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

      <div className="section-container">
        <section className="whychoose">
          <div className="whychoose-container">
            <div className="whychoose-left">
              <h3 className="whychoose-subtitle">
                TẠI SAO CHỌN{" "}
                <span className="text-hightlight-half">SẠC LUÔN?</span>
              </h3>

              <h1 className="whychoose-title text-hightlight-half">
                TIỆN LỢI MỌI LÚC, MỌI NƠI
              </h1>

              <p className="whychoose-desc">
                Sạc Luôn là mạng lưới cho thuê sạc dự phòng thông minh, ,<br />{" "}
                giúp bạn luôn kết nối mà không gián đoạn.
                <br />
                Chỉ cần quét mã QR, lấy sạc, và trả lại ở bất kỳ đâu.
              </p>
            </div>

            <div className="whychoose-right">
              <ul>
                <li>• Hơn 1 triệu người dùng tin tưởng</li>
                <li>• Trạm sạc thông minh phủ rộng khắp Việt Nam</li>
                <li>
                  • Thanh toán linh hoạt qua ví điện tử hoặc thẻ ngân hàng
                </li>
                <li>• Hỗ trợ 24/7 qua hotline và app</li>
              </ul>
              <Button
                type="primary"
                outlinePadding="medium"
                className="whychoose-button"
                icon={<ArrowRightIcon />}
              >
                XEM NGAY
              </Button>
            </div>
          </div>
        </section>

        <section className="howtouse">
          <div className="howtouse-header">
            <h3 className="howtouse-subtitle text-hightlight-half">
              QUY TRÌNH HOẠT ĐỘNG
            </h3>
            <h1 className="howtouse-title">CÁCH SỬ DỤNG DỄ DÀNG</h1>
          </div>
          <div className="howtouse-container">
            <div className="howtouse-left"></div>

            <div className="howtouse-right">
              <div className="howtouse-steps">
                <div className="step">
                  <ArrowRightCircleIcon
                    stroke="#262138"
                    width={21}
                    height={21}
                  />
                  <div className="step-content">
                    <span>TÌM TRẠM SẠC GẦN NHẤT</span>
                    <p>
                      Mở ứng dụng Sạc Luôn hoặc quét mã QR để định vị trạm sạc
                      quanh bạn.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <ArrowRightCircleIcon
                    stroke="#262138"
                    width={21}
                    height={21}
                  />
                  <div className="step-content">
                    <span>QUÉT MÃ VÀ LẤY PIN</span>
                    <p>
                      Quét mã QR trên trạm, pin tự động bật ra – sẵn sàng sử
                      dụng ngay.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <ArrowRightCircleIcon
                    stroke="#262138"
                    width={21}
                    height={21}
                  />
                  <div className="step-content">
                    <span>SẠC THOẢI MÁI, TRẢ LINH HOẠT</span>
                    <p>
                      Trả pin tại bất kỳ trạm nào trong hệ thống. Hệ thống tự
                      ghi nhận và thanh toán tự động.
                    </p>
                  </div>
                </div>
              </div>

              <div className="howtouse-button-container">
                <Button
                  type="primary"
                  outlinePadding="none"
                  icon={<ArrowTopRightIcon />}
                >
                  KHÁM PHÁ TRẠM GẦN BẠN
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="outstanding-features">
          <div className="outstanding-features-header">
            <h3 className="outstanding-features-subtitle text-hightlight-half">
              Tính năng nổi bật
            </h3>
            <div className="outstanding-features-title-container">
              <h1 className="outstanding-features-title">
                Công nghệ tiên tiến <br />
                Tiện ích vượt trội
              </h1>
              <div className="outstanding-features-title-cta">
                <div>
                  TẠI SAO{" "}
                  <strong>
                    <i>SẠC LUÔN</i>
                  </strong>{" "}
                  VƯỢT TRỘI?
                </div>
                <Button
                  type="primary"
                  outlinePadding="medium"
                  icon={<ArrowTopRightIcon width={12} height={12} />}
                >
                  TÌM HIỂU THÊM
                </Button>
              </div>
            </div>
          </div>
          <div className="outstanding-features-content-container">
            {outstandingFeatureItems.map((item, index) => (
              <div className="feature-item" key={index}>
                <div className="image-container">
                  <Image
                    className="image"
                    src={item.backgroundImage}
                    alt={item.title}
                    fill
                  />
                </div>
                <div className="text-container">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
