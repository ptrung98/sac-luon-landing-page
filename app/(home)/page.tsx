import { Button } from "../components/button";
import { ArrowRightIcon } from "../components/icons/arrow-right";
import { ArrowRightCircleIcon } from "../components/icons/arrow-right-circle";
import { ArrowTopRightIcon } from "../components/icons/arrow-top-right";
import Image from "next/image";
import { NextDoubleArrowIcon } from "../components/icons/next-double-arrow";
import { MaskBorder } from "../components/mask-border";
import { CommentCard } from "../components/comment-card";
import { LearnMoretIcon } from "../components/icons/learn-more";

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

  const commentsData = [
    {
      avatar: "/home/comment-card-avatar-default.png",
      comment:
        "“Từ ngày sử dụng dịch vụ của SạcLuôn mình đã không còn phải lo lắng về việc mang theo dây sạc hay phải lo việc hết pin thường xuyên nữa. “",
      image: "/home/comment-card-image-default.png",
      name: "ĐẶNG MINH ĐỨC",
      startNumber: 4,
    },
    {
      avatar: "/home/comment-card-avatar-default.png",
      comment:
        "“Từ ngày sử dụng dịch vụ của SạcLuôn mình đã không còn phải lo lắng về việc mang theo dây sạc hay phải lo việc hết pin thường xuyên nữa. “",
      image: "/home/comment-card-image-default.png",
      name: "ĐẶNG MINH ĐỨC",
      startNumber: 5,
    },
  ];

  const questions = [
    "Nếu trạm sạc tôi đến hoàn trả pin đã đầy pin, tôi phải làm gì?",
    "Hoàn trả pin sạc như thế nào?",
    "Nếu trạm sạc không có pin, tôi phải làm gì?",
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
              icon={
                <ArrowTopRightIcon
                  width={12.45}
                  height={12.45}
                  style={{ marginLeft: "0.25rem" }}
                />
              }
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
                icon={<ArrowRightIcon width={10} height={10} />}
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
                  icon={
                    <ArrowTopRightIcon
                      width={12}
                      height={12}
                      style={{ marginLeft: "0.4rem" }}
                    />
                  }
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
                  className="outstanding-features-learn-more-button"
                  type="primary"
                  outlinePadding="medium"
                  icon={
                    <ArrowTopRightIcon
                      width={12}
                      height={12}
                      style={{ marginLeft: "0.4rem" }}
                    />
                  }
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

        <section className="core-values">
          <div className="core-values-header">
            <div className="core-values-title-container">
              <h3 className="core-values-subtitle text-hightlight-half">
                GIÁ TRỊ CỐT LÕI
              </h3>
              <h1 className="core-values-title">
                Năng lượng
                <br />
                <span className="text-hightlight-half">kết nối mọi người.</span>
              </h1>
            </div>
            <div className="core-values-title-cta">
              <ul>
                <li>
                  • Chúng tôi tin rằng pin không chỉ là nguồn năng lượng, mà còn
                  là cầu nối giúp con người duy trì kết nối với thế giới.
                </li>
                <li>
                  • Sạc Luôn hướng tới việc tạo nên một hệ sinh thái năng lượng
                  thông minh, thân thiện và bền vững – để mỗi khoảnh khắc của
                  bạn luôn tràn đầy năng lượng.
                </li>
              </ul>
            </div>
          </div>
          <div className="core-values-content-container">
            <div className="learn-more-button-container">
              <div className="content-container">
                <div className="mask-border-1-container">
                  <MaskBorder size="medium" position="bottom-right" />
                </div>
                <div className="mask-border-2-container">
                  <MaskBorder size="medium" position="bottom-right" />
                </div>
                <Button
                  className="learn-more-button"
                  type="primary"
                  outlinePadding="none"
                  icon={
                    <ArrowTopRightIcon
                      width={19}
                      height={19}
                      style={{ marginLeft: "1rem" }}
                    />
                  }
                >
                  <i>TÌM HIỂU THÊM</i>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="customer-stories">
          <div className="customer-stories-header">
            <div className="customer-stories-title-container">
              <h3 className="customer-stories-subtitle text-hightlight-half">
                Câu chuyện khách hàng
              </h3>
              <h1 className="customer-stories-title">
                Hàng triệu người
                <br />
                dùng tin tưởng.
              </h1>
            </div>
            <div className="customer-stories-title-cta">
              <div className="learn-more-button-container">
                <div className="content-container">
                  <div className="mask-border-1-container">
                    <MaskBorder size="small" position="bottom-left" />
                  </div>
                  <div className="mask-border-2-container">
                    <MaskBorder size="small" position="bottom-left" />
                  </div>
                  <Button
                    className="learn-more-button"
                    type="primary"
                    outlinePadding="none"
                    icon={<ArrowTopRightIcon width={11} height={11} />}
                  >
                    ĐĂNG KÝ
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="customer-stories-content-container">
            <div className="comments-container">
              {commentsData.map((data, index) => (
                <CommentCard key={index} data={data} />
              ))}
              <div className="comment-learn-more">
                <div className="overlay">
                  <div className="learn-more-text">
                    ĐỌC <br /> THÊM
                  </div>
                  <LearnMoretIcon className="learn-more-icon"/>
                </div>
              </div>
            </div>
            <div className="question-list-container">
              <div className="question-list">
                {questions.map((question, index) => (
                  <div className="question-item" key={index}>
                    <p>{question}</p>
                  </div>
                ))}
              </div>
              <NextDoubleArrowIcon />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
