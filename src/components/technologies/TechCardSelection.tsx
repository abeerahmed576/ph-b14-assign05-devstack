import type { Dispatch } from "react";
import SelectedTechCards from "./SelectedTechCards";
import type { ITechInfo } from "../../types/TechInfo";

interface ITechCardSelectionProps {
  selectedTechs: ITechInfo[];
  setSelectedTechs: Dispatch<React.SetStateAction<ITechInfo[]>>;
}

function EmptyStack() {
  return (
    <div className="p-10 border border-dashed rounded-2xl text-center text-(--color-para-400)">
      Your stack is empty.
    </div>
  );
}

function TechCardSelection({
  selectedTechs,
  setSelectedTechs,
}: ITechCardSelectionProps) {
  const handleRemoveAllTech = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="min-w-11/12 sm:min-w-[20%] max-h-min card rounded-xl shadow-sm">
      <div className="card-body space-y-2">
        <h2 className="text-xl font-bold">Your Stack</h2>
        <p className="text-(--color-para-500)">
          {selectedTechs.length === 0
            ? "No technologies selected yet."
            : `${selectedTechs.length} Technology Selected`}
        </p>
        {selectedTechs.length === 0 ? (
          <EmptyStack />
        ) : (
          <SelectedTechCards
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
          />
        )}
        <button
          onClick={handleRemoveAllTech}
          className={`btn btn-block btn-outline text-red-500 border-red-500 rounded-xl ${selectedTechs.length === 0 ? "hidden" : ""}`}
        >
          Remove All
        </button>
      </div>
    </div>
  );
}

export default TechCardSelection;
