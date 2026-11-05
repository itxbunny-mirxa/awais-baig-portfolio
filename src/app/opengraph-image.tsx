import { ImageResponse } from "next/og";

export const alt = "Awais Baig — eBay Virtual Assistant & Store Management Specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "16px solid #f1f5f9",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                backgroundColor: "#0f172a",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: "bold",
              }}
            >
              AB
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: "900", color: "#0f172a", letterSpacing: "-0.5px" }}>
                AWAIS BAIG
              </span>
              <span style={{ fontSize: "14px", color: "#2563eb", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                eBay Virtual Assistant & eCommerce Specialist
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#ecfdf5",
              color: "#065f46",
              padding: "10px 20px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: "700",
              border: "1px solid #a7f3d0",
            }}
          >
            ● Available for UK & Global Sellers
          </div>
        </div>

        {/* Main Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "62px",
              fontWeight: "900",
              color: "#0f172a",
              lineHeight: "1.1",
              margin: 0,
              letterSpacing: "-1.5px",
            }}
          >
            Your eBay Store, <span style={{ color: "#2563eb" }}>Managed with Precision.</span>
          </h1>
          <p style={{ fontSize: "24px", color: "#475569", lineHeight: "1.4", margin: 0 }}>
            Helping eCommerce businesses simplify store operations, discover profitable products, and create optimized eBay listings.
          </p>
        </div>

        {/* Bottom Bar: Operational Focus & Software Stack */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "28px",
            borderTop: "2px solid #e2e8f0",
          }}
        >
          <div style={{ display: "flex", gap: "24px", fontSize: "16px", fontWeight: "700", color: "#1e293b" }}>
            <span>• 2–3 Years Experience</span>
            <span>• Cassini SEO</span>
            <span>• ZIK Analytics & Terapeak</span>
            <span>• UK Dispatch Standards</span>
          </div>

          <div style={{ fontSize: "16px", color: "#64748b", fontFamily: "monospace" }}>
            awaisbaig138@gmail.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
