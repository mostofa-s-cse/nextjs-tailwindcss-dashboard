import type en from "../locales/en.json";

declare module "next-intl" {
  interface IntlMessages extends Record<keyof typeof en, (typeof en)[keyof typeof en]> {}
}
