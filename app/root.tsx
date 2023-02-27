import type { LinksFunction, MetaFunction } from "@remix-run/node";
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
      </head>
      <body>
        <Header/>
        <Outlet />
        <MusicBar/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];