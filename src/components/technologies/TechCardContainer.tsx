import { use, useState } from "react";
import type { ITechInfo } from "../../types/TechInfo";
import TechCard from "./TechCard";
import TechCardSelection from "./TechCardSelection";

function TechCardContainer({
  techInfoPromise,
}: {
  techInfoPromise: Promise<ITechInfo[]>;
}) {
  const techInfos = use(techInfoPromise);
  const [selectedTechs, setSelectedTechs] = useState<ITechInfo[]>([]);

  return (
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
  );
}

export default TechCardContainer;
