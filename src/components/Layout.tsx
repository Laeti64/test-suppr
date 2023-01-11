import React, { useEffect } from "react";
import Head from "next/head";
import Footer from "./organisms/Footer";
import NavBarAdmin from "./organisms/NavBarAdmin";
import useScreenDimensions from "../hooks/useWindowDimention";
import NavBarUser from "./organisms/NavBarUser";

type TChildren = { children: React.ReactNode };

function Layout({ children }: TChildren) {
  const { width, height } = useScreenDimensions();

  useEffect(() => {
    console.log(width, height);
  }, [width, height]);
  return (
    <>
      <Head>
        <title>Carvolution</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen fixed flex flex-col h-screen">
        {width > 800 ? <NavBarAdmin /> : <NavBarUser />}
        <div className="w-full  h-[90%] flex bg-slate-50">
          <div className="w-full h-full overflow-auto">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
