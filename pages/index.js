import Head from "next/head";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import s from "./index.module.css";
import { WhoAmi } from "../components/whoiam";
import { MyWork } from "../components/myWork";
import { PerformanceLocations } from "../components/performanceLocations";
import { useRef } from "react";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

export default function Home() {
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const placesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className={s.background}>
      <Head>
        <title>Jéssica Birck - Correspondência Jurídica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        refs={{
          banner: bannerRef,
          about: aboutRef,
          work: workRef,
          places: placesRef,
          contact: contactRef,
        }}
      />
      <div className={s.container}>
        <Banner currentRef={bannerRef} />
        <WhoAmi currentRef={aboutRef} />
        <MyWork currentRef={workRef} />
        <PerformanceLocations currentRef={placesRef} />
        <Contact currentRef={contactRef} />
      </div>
      <Footer bannerRef={bannerRef} />
    </div>
  );
}

