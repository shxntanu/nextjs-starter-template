import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/system";
import theme from "@/config/theme/themeConfig";

const App = ({ Component, pageProps }: AppProps) => (
    <ConfigProvider theme={theme}>
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
    </ConfigProvider>
);

export default App;
