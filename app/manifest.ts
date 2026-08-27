import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aryan Rathod — Full Stack Developer & Founder of Optenary",
    short_name: "Aryan Rathod",
    description:
      "Official portfolio of Aryan Rathod, Full Stack Developer, Computer Engineering Student, and Founder of Optenary.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBFBFA",
    theme_color: "#0F0F0E",
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
