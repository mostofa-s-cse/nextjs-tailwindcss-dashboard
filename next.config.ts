import type { NextConfig } from "next";
import { createRequire } from "module";

const nextConfig: NextConfig = {
  // App Router doesn't use the i18n config - locale handling is done via [locale] route segment
  // and next-intl plugin/middleware
};

export default nextConfig;
