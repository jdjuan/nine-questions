import { Html, Head, Main, NextScript } from "next/document";
import cx from "classnames";
import { isDev } from "@/utils/utils";

export default function Document() {
  return (
    <Html lang='en'>
      <Head></Head>
      <body className={cx("bg-green-700 text-green-400", { "debug-screens": isDev })}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
