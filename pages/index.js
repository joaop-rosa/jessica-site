import Head from "next/head";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import s from "./index.module.css";
import { WhoAmi } from "../components/whoiam";
import { MyWork } from "../components/myWork";

export default function Home() {
  return (
    <div className={s.background}>
      <Head>
        <title>Jéssica Birck</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={s.container}>
        <Banner />
        <WhoAmi />
        <MyWork />
        {/* https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript */}
      </div>
    </div>
  );
}

