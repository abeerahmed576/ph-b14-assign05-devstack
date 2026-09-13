import { use, useState } from "react";
import TechCard from "./technologies/TechCard";
import type { ITechInfo } from "../types/TechInfo";
import TechCardSelection from "./technologies/TechCardSelection";

function Technologies({
  techInfoPromise,
}: {
  techInfoPromise: Promise<ITechInfo[]>;
}) {
  const techInfos = use(techInfoPromise);
  const [selectedTechs, setSelectedTechs] = useState<ITechInfo[]>([]);

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
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        <div className="mx-4 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {techInfos.map((techInfo) => (
            <TechCard
              key={techInfo.id}
              techInfo={techInfo}
              selectedTechs={selectedTechs}
              setSelectedTechs={setSelectedTechs}
            />
          ))}
        </div>
        <TechCardSelection
          selectedTechs={selectedTechs}
          setSelectedTechs={setSelectedTechs}
        />
      </div>
    </div>
  );
}

export default Technologies;
