import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/Header";
import stylesheet from "~/tailwind.css";
import MusicBar from "./components/MusicBar";
import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/react/dist/routeModules";
import { LevelProvider } from "./storage/AppState";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Spotify",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <LevelProvider>
          <Outlet />

          <MusicBar />
        </LevelProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },

  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap",
  },
];
