import React from "react";
import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/system";
import theme from "@/config/theme/themeConfig";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
    <SessionProvider session={session}>
        <ConfigProvider theme={theme}>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </ConfigProvider>
    </SessionProvider>
);

export default App;
