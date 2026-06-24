import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "에듀플로우 | 학원 마케팅 전문 대행사";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0B1F3A",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* 배경 그리드 패턴 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* 골드 블롭 우상단 */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #E8A020 0%, transparent 70%)",
            opacity: 0.15,
          }}
        />
        {/* 블루 블롭 좌하단 */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-60px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #1A56DB 0%, transparent 70%)",
            opacity: 0.12,
          }}
        />

        {/* 메인 콘텐츠 */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 72px",
            height: "100%",
          }}
        >
          {/* 상단: 로고 + 배지 */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* 로고 */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: "#E8A020",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#0B1F3A", fontWeight: 900, fontSize: "22px" }}>E</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "white", fontWeight: 900, fontSize: "26px", letterSpacing: "-0.5px" }}>
                  에듀<span style={{ color: "#E8A020" }}>플로우</span>
                </span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginTop: "1px" }}>
                  학원 마케팅 전문 대행사
                </span>
              </div>
            </div>

            {/* 배지 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(232,160,32,0.15)",
                border: "1px solid rgba(232,160,32,0.3)",
                borderRadius: "100px",
                padding: "10px 20px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#E8A020",
                }}
              />
              <span style={{ color: "#E8A020", fontWeight: 700, fontSize: "14px" }}>
                실제 운영 성과
              </span>
            </div>
          </div>

          {/* 중앙: 메인 헤드라인 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  color: "white",
                  fontWeight: 900,
                  fontSize: "62px",
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                }}
              >
                문의 8배,
              </span>
              <span
                style={{
                  color: "#E8A020",
                  fontWeight: 900,
                  fontSize: "62px",
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                }}
              >
                원생 2배.
              </span>
              <span
                style={{
                  color: "white",
                  fontWeight: 900,
                  fontSize: "62px",
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                }}
              >
                이게 학원 전문입니다
              </span>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "20px",
                fontWeight: 400,
                marginTop: "4px",
                letterSpacing: "-0.3px",
              }}
            >
              웹페이지 · SNS · 네이버 · 당근 광고까지 원스톱
            </p>
          </div>

          {/* 하단: 성과 수치 4개 */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { value: "891만", label: "릴스 최고 조회수" },
              { value: "192.8만", label: "스레드 누적 조회" },
              { value: "1.4만", label: "팔로워" },
              { value: "광고비 포함", label: "올인원 가격제" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: i === 0
                    ? "linear-gradient(135deg, #E8A020, #F5C842)"
                    : "rgba(255,255,255,0.05)",
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  padding: "18px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: "28px",
                    color: i === 0 ? "#0B1F3A" : "white",
                    letterSpacing: "-1px",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: i === 0 ? "rgba(11,31,58,0.65)" : "rgba(255,255,255,0.4)",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 우측 수직 구분선 장식 */}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            bottom: "0",
            width: "4px",
            background: "linear-gradient(to bottom, transparent, #E8A020, transparent)",
            opacity: 0.6,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
