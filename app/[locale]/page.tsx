import { Button } from "../components/button";
import { ArrowRightIcon } from "../components/icons/arrow-right";
import { ArrowRightCircleIcon } from "../components/icons/arrow-right-circle";
import { ArrowTopRightIcon } from "../components/icons/arrow-top-right";
import Image from "next/image";
import { NextDoubleArrowIcon } from "../components/icons/next-double-arrow";
import { MaskBorder } from "../components/mask-border";
import { CommentCard } from "../components/comment-card";
import { LearnMoretIcon } from "../components/icons/learn-more";
import { getTranslations } from "next-intl/server";

const Home = async () => {
  const t = await getTranslations("HomePage");

  const outstandingFeatureItems = [
    {
      title: t("outstanding_features.feature1_title"),
      description: t("outstanding_features.feature1_desc"),
      backgroundImage: "/home/outstanding-feature-1.png",
    },
    {
      title: t("outstanding_features.feature2_title"),
      description: t("outstanding_features.feature2_desc"),
      backgroundImage: "/home/outstanding-feature-2.png",
    },
    {
      title: t("outstanding_features.feature3_title"),
      description: t("outstanding_features.feature3_desc"),
      backgroundImage: "/home/outstanding-feature-3.png",
    },
    {
      title: t("outstanding_features.feature4_title"),
      description: t("outstanding_features.feature4_desc"),
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
          <h1>{t("hero_section.hero_title")}</h1>

          <p>
            {t("hero_section.hero_subtitle_line1")}
            <br />
            {t("hero_section.hero_subtitle_line2")}
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
              {t("hero_section.cta_main")}
            </Button>
            <div className="stats">
              <div>
                <h3>50+</h3>
                <p>
                  {t("hero_section.stat_locations").split("<br />")[0]}
                  <br />
                  {t("hero_section.stat_locations").split("<br />")[1]}
                </p>
              </div>
              <div>
                <h3>1M+</h3>
                <p>
                  {t("hero_section.stat_users").split("<br />")[0]}
                  <br />
                  {t("hero_section.stat_users").split("<br />")[1]}
                </p>
              </div>
            </div>
            <div className="tutorial">
              <p>
                {t("hero_section.tutorial_prompt_line1")} <br />
                {t("hero_section.tutorial_prompt_line2")}
              </p>
              <button className="btn-tutorial">
                <span>{t("hero_section.tutorial_cta")}</span>{" "}
                <ArrowRightCircleIcon />
              </button>
            </div>
          </div>
        </div>

        <section className="features">
          <div className="feature-card card-1">
            <div className="overlay">
              <div className="content">
                <h4>
                  {t("features.card1_title_line1")} <br />{" "}
                  {t("features.card1_title_line2")}
                </h4>
                <div className="item-wrapper">
                  <div className="item">{t("features.card1_item1")}</div>
                  <div className="item">{t("features.card1_item2")}</div>
                </div>
                <Button
                  type="secondary"
                  outlinePadding="medium"
                  icon={<ArrowTopRightIcon />}
                >
                  {t("features.card1_button")}
                </Button>
              </div>
            </div>
          </div>

          <div className="feature-card card-2">
            <div className="overlay">
              <div className="content">
                <h4 className="text-1">
                  {t("features.card2_title_line1")} <br />{" "}
                  {t("features.card2_title_line2")}
                </h4>
                <br />
                <p className="text-2">{t("features.card2_text1")}</p>
                <br />
                <p className="text-3">
                  {t("features.card2_text2_line1")} <br />
                  {t("features.card2_text2_line2")}
                </p>
              </div>
            </div>
          </div>

          <div className="feature-card card-3">
            <div className="overlay">
              <p className="text-1">{t("features.card3_stat")}</p>
              <p className="text-2">{t("features.card3_stat_desc")}</p>
              <h4 className="text-3">
                {t("features.card3_title_line1")}
                <br /> {t("features.card3_title_line2")} <br />{" "}
                {t("features.card3_title_line3")} <br />{" "}
                {t("features.card3_title_line4")}
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
                {t("why_choose.subtitle_part1")}{" "}
                <span className="text-hightlight-half">
                  {t("why_choose.subtitle_part2")}
                </span>
              </h3>

              <h1 className="whychoose-title text-hightlight-half">
                {t("why_choose.title")}
              </h1>

              <p className="whychoose-desc">
                {t("why_choose.description_line1")}
                <br />
                {t("why_choose.description_line2")}
                <br />
                {t("why_choose.description_line3")}
              </p>
            </div>

            <div className="whychoose-right">
              <ul>
                <li>• {t("why_choose.feature1")}</li>
                <li>• {t("why_choose.feature2")}</li>
                <li>• {t("why_choose.feature3")}</li>
                <li>• {t("why_choose.feature4")}</li>
              </ul>
              <Button
                type="primary"
                outlinePadding="medium"
                className="whychoose-button"
                icon={<ArrowRightIcon width={10} height={10} />}
              >
                {t("why_choose.button_text")}
              </Button>
            </div>
          </div>
        </section>
        <section className="howtouse">
          <div className="howtouse-header">
            <h3 className="howtouse-subtitle text-hightlight-half">
              {t("how_to_use.subtitle")}
            </h3>
            <h1 className="howtouse-title">{t("how_to_use.title")}</h1>
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
                    <span>{t("how_to_use.step1_title")}</span>
                    <p>{t("how_to_use.step1_desc")}</p>
                  </div>
                </div>

                <div className="step">
                  <ArrowRightCircleIcon
                    stroke="#262138"
                    width={21}
                    height={21}
                  />
                  <div className="step-content">
                    <span>{t("how_to_use.step2_title")}</span>
                    <p>{t("how_to_use.step2_desc")}</p>
                  </div>
                </div>

                <div className="step">
                  <ArrowRightCircleIcon
                    stroke="#262138"
                    width={21}
                    height={21}
                  />
                  <div className="step-content">
                    <span>{t("how_to_use.step3_title")}</span>
                    <p>
                      {t("how_to_use.step3_desc_line1")}{" "}
                      {t("how_to_use.step3_desc_line2")}
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
                  {t("how_to_use.button_text")}
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="outstanding-features">
          <div className="outstanding-features-header">
            <h3 className="outstanding-features-subtitle text-hightlight-half">
              {t("outstanding_features.subtitle")}
            </h3>
            <div className="outstanding-features-title-container">
              <h1 className="outstanding-features-title">
                {t("outstanding_features.title_line1")} <br />
                {t("outstanding_features.title_line2")}
              </h1>
              <div className="outstanding-features-title-cta">
                <div>
                  {t("outstanding_features.cta_text_part1")}{" "}
                  <strong>
                    <i>{t("outstanding_features.cta_highlight")}</i>
                  </strong>{" "}
                  {t("outstanding_features.cta_text_part2")}
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
                  {t("outstanding_features.button_text")}
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
                {t("core_values.subtitle")}
              </h3>
              <h1 className="core-values-title">
                {t("core_values.title_line1")}
                <br />
                <span className="text-hightlight-half">
                  {t("core_values.title_line2")}
                </span>
              </h1>
            </div>
            <div className="core-values-title-cta">
              <ul>
                <li>• {t("core_values.value_point1")}</li>
                <li>
                  • {t("core_values.value_point2_line1")}{" "}
                  {t("core_values.value_point2_line2")}
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
                  <i>{t("core_values.button_text")}</i>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="customer-stories">
          <div className="customer-stories-header">
            <div className="customer-stories-title-container">
              <h3 className="customer-stories-subtitle text-hightlight-half">
                {t("customer_stories.subtitle")}
              </h3>
              <h1 className="customer-stories-title">
                {t("customer_stories.title_line1")}
                <br />
                {t("customer_stories.title_line2")}
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
                    {t("customer_stories.button_text")}
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
                    {t("customer_stories.read_more_line1")} <br />{" "}
                    {t("customer_stories.read_more_line2")}
                  </div>
                  <LearnMoretIcon className="learn-more-icon" />
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
