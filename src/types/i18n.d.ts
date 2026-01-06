import en from "../locales/en.json";
import "next-intl";

type Messages = typeof en;

declare module "next-intl" {
  interface IntlMessages extends Messages {}
}
