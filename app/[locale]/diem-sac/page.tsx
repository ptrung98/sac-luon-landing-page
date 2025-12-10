import { Button } from "@/app/components/button";
import { ArrowTopRightIcon } from "@/app/components/icons/arrow-top-right";
import { SelectLocaltion } from "@/app/components/select-location";

export default function ChargingPointPage() {
  return (
    <main className="charging-point">
      <section className="hero">
        <div className="overlay"></div>
      </section>

      <div className="section-content-container">
        <section className="download-app-container">
          <div className="image"></div>
          <div className="download-app-right">
            <span>
              TẢI ỨNG DỤNG <br />
              TÌM TRẠM SẠC NGAY
            </span>
            <div className="link-app-button">
              <div className="app-store"></div>
              <div className="google-store"></div>
            </div>
          </div>
        </section>

        <section className="charging-point-list">
          <div className="charging-point-list-header">
            <h4 className="text-hightlight-half">DANH SÁCH ĐIỂM SẠC</h4>
            <div className="cta">
              <span className="left">
                TÌM NGAY <br /> ĐIỂM SẠC GẦN BẠN
              </span>
              <div className="right">
                <div>HƯỚNG DẪN TÌM ĐIỂM SẠC</div>
                <Button
                  type="primary"
                  outlinePadding="medium"
                  icon={
                    <ArrowTopRightIcon
                      width={12}
                      height={12}
                      style={{ marginLeft: "0.25rem" }}
                    />
                  }
                >
                  TÌM HIỂU THÊM
                </Button>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://maps.google.com/maps?q=21.0285, 105.8542&hl=vi&z=15&output=embed"
              style={{
                border: 0,
                width: "100%",
                height: "100%",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
            <div className="select-location">
              <SelectLocaltion />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
