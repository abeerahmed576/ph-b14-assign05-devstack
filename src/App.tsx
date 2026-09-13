import { Suspense } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Suspense
        fallback={
          <div className="text-3xl text-center my-10">
            <span className="mr-3 loading loading-spinner"></span>
            <span>Loading Technologies</span>
          </div>
        }
      >
        <Technologies />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
