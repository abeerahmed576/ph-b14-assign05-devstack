import type { ITechInfo } from "../types/TechInfo";
import { ToastContainer } from "react-toastify";
import TechCardContainer from "./technologies/TechCardContainer";
import { Suspense } from "react";

const techInfoPromise = async (): Promise<ITechInfo[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function Technologies() {
  return (
    <div className="mb-14 container mx-auto">
      <div className="mb-5 sm:mb-10 text-center sm:text-start">
        <h2 className="mb-2 text-[26px] sm:text-4xl font-heading font-extrabold capitalize">
          explore the{" "}
          <span className="text-transparent bg-clip-text bg-brand-gradient-3">
            technologies
          </span>
        </h2>
        <p className="text-[13px] sm:text-lg text-(--color-para-500)">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="my-50 space-x-3 text-center">
            <span className="mb-2 loading loading-spinner"></span>
            <span className="text-2xl">Loading Technologies</span>
          </div>
        }
      >
        <TechCardContainer techInfoPromise={techInfoPromise()} />
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default Technologies;
