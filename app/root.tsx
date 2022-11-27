import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import styles from "./styles/app.css";
import skeletonStyles from "react-loading-skeleton/dist/skeleton.css";
import ogimage from "~/images/QRT/QRTEDIT-9561.jpg";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: skeletonStyles },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.comhttps://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
  ];
};

export const meta: MetaFunction = () => {
  return {
    title: "Wedding Invitation of Oryza & Roma",
    description:
      "Minggu, 11 Desember 2022, Bandung",

    "og:image": ogimage,
    "og:image:type": "image/jpeg",
    "og:site_name": "weddingoryzaroma",
    "og:url": "http://www.weddingoryzaroma.com/",
    "og:title": "Wedding Invitation of Oryza & Roma",
    "og:description": `Minggu, 11 Desember 2022, Bandung`,
    "og:type": "website",

    "twitter:image": ogimage,
    "twitter:card": "summary_large_image",
    "twitter:description":
      "Minggu, 11 Desember 2022, Bandung",
  };
};

export default function App() {
  return (
    <html lang="id">
      <head prefix="og: https://ogp.me/ns#">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content="The Wedding Of Oryza and Roma" />
        <meta property="og:image" content="https://raw.githubusercontent.com/igmerwina/wedding-invitation/master/app/images/ogimages.jpg"/>
        <meta property="description" content="The Wedding of Oryza and Roma. Sunday, 11 December 2022" />
        <meta property="og:url" content="https://www.weddingoryzaroma.com/" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
