import { Suspense } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import type { ItechInfo } from "./types/techInfo";

const techInfoPromise = async (): Promise<ItechInfo[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Suspense>
        <Technologies techInfoPromise={techInfoPromise()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
