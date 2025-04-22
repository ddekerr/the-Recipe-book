import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.themealdb.com'], // Заміни на домен, з якого будеш завантажувати зображення
  },
};

export default nextConfig;
