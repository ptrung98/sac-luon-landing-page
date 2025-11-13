import { Button } from "@/app/components/button";
import { MaskBorder } from "@/app/components/mask-border";

export default function AboutPage() {
  return (
    <main className="about">
      <section className="hero">
        <div className="overlay">
          <span>
            VỚI <span className="text-hightlight">SẠC LUÔN</span> <br />{" "}
            <span className="text-hightlight">Năng lượng</span> không chỉ là pin{" "}
            <br /> mà <span className="text-hightlight">là để Kết nối.</span>
          </span>
        </div>
      </section>

      <section className="content">
        <div className="about-us">
          <div className="about-us-left">
            <div className="about-us-left-image"></div>
          </div>
          <div className="about-us-right">
            <h3 className="text-hightlight-half">VỀ CHÚNG TÔI</h3>
            <ul className="text-list-bullet-point">
              <li>
                Chúng tôi tin rằng công nghệ nên phục vụ cuộc sống một cách gần
                gũi và linh hoạt.
              </li>
              <li>
                Sạc Luôn không chỉ cho thuê pin – mà mang đến trải nghiệm năng
                lượng thông minh, giúp con người kết nối, chia sẻ và sống năng
                động hơn mỗi ngày.
              </li>
            </ul>
          </div>
        </div>
        <div className="vision-mission-container">
          <div className="vision">
            <div className="title-container">
              <div className="title-content">
                <div className="mask-border-1-container">
                  <MaskBorder size="small" position="top-left" />
                </div>
                <div className="mask-border-2-container">
                  <MaskBorder size="small" position="top-left" />
                </div>
                <h3>TẦM NHÌN</h3>
              </div>
            </div>
            <ul className="text-list-bullet-point">
              <li>
                Sạc Luôn là thương hiệu cho thuê sạc dự phòng thông minh – giúp
                bạn luôn đầy pin mọi lúc, mọi nơi.
              </li>
              <li>
                Ra đời từ nhu cầu đơn giản nhưng thiết yếu trong cuộc sống hiện
                đại: “Hết pin thì sao?”.
              </li>
              <li>
                Chúng tôi mang đến giải pháp tiện lợi, nhanh chóng và thân
                thiện, giúp bạn kết nối liên tục mà không bị gián đoạn – dù đang
                học tập, làm việc hay di chuyển.
              </li>
            </ul>

            <div className="image"></div>
          </div>
          <div className="mission">
            <div className="title-container">
              <div className="title-content">
                <div className="mask-border-1-container">
                  <MaskBorder size="small" position="top-left" />
                </div>
                <div className="mask-border-2-container">
                  <MaskBorder size="small" position="top-left" />
                </div>
                <h3>SỨ MỆNH</h3>
              </div>
            </div>
            <ul className="text-list-bullet-point">
              <li>
                Giữ năng lượng luôn sẵn sàng cho mọi người, mọi khoảnh khắc.
              </li>
              <li>
                Chúng tôi tin rằng công nghệ nên phục vụ cuộc sống một cách gần
                gũi và linh hoạt.
              </li>
              <li>
                <strong>Sạc Luôn</strong> không chỉ cho thuê pin – mà mang đến
                trải nghiệm năng lượng thông minh, giúp con người kết nối, chia
                sẻ và sống năng động hơn mỗi ngày.
              </li>
            </ul>

            <div className="image"></div>
          </div>
        </div>

        <div className="learn-more">
            <div className="learn-more-button-container">
              <div className="content-container">
                <div className="mask-border-1-container">
                  <MaskBorder size="small" position="bottom-right" />
                </div>
                <div className="mask-border-2-container">
                  <MaskBorder size="small" position="bottom-right" />
                </div>
                <Button
                  className="learn-more-button"
                  type="primary"
                  outlinePadding="none"
                >
                  TÌM HIỂU THÊM
                </Button>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}
