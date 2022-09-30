import { SessionProvider } from "next-auth/react";
import "./styles.css";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider
      options={{
        clientMaxAge: 0,
        keepAlive: 0,
      }}
      session={pageProps.session}
    >
      <Component {...pageProps} />
    </SessionProvider>
  );
}
