import { ImageResponse } from "next/og";
import { siteConfig, heroStack } from "@/lib/data";

export const alt = "Dev Mittal — Full-Stack Engineer & Founding CTO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 50% 38%, rgba(109,40,217,0.28) 0%, rgba(10,10,10,0) 62%)",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "8px 22px",
            borderRadius: 999,
            border: "1px solid rgba(139,92,246,0.35)",
            backgroundColor: "rgba(139,92,246,0.08)",
            color: "#c4b5fd",
            fontSize: 22,
            marginBottom: 28,
          }}
        >
          {"Founding CTO @ Snappito · IIT Palakkad"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#a78bfa",
            marginTop: 14,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 44,
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 900,
          }}
        >
          {heroStack.map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "7px 16px",
                borderRadius: 8,
                border: "1px solid #262626",
                backgroundColor: "#111111",
                color: "#d4d4d4",
                fontSize: 20,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#737373",
            marginTop: 46,
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    size
  );
}
