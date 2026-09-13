import type { ITechInfo } from "../../types/TechInfo";
import { useState, type Dispatch } from "react";

interface ITechCardProps {
  techInfo: ITechInfo;
  selectedTechs: ITechInfo[];
  setSelectedTechs: Dispatch<React.SetStateAction<ITechInfo[]>>;
}

function TechCard({
  techInfo,
  selectedTechs,
  setSelectedTechs,
}: ITechCardProps) {
  const isBtnSelected = selectedTechs.some(
    (selectedTech) => selectedTech.id === techInfo.id,
  );

  const isCategoryAlreadySelected = selectedTechs.some(
    (selectedTech) => selectedTech.category === techInfo.category,
  );

  const handleAddToStack = () => {
    if (isCategoryAlreadySelected) {
      return;
    }

    setSelectedTechs([...selectedTechs, techInfo]);
  };

  return (
    <div className="card rounded-xl shadow-sm">
      <div className="card-body space-y-2">
        <div className="flex justify-between">
          <img src="/favicon.png" alt={`${techInfo.name} logo`} />
          <span className="badge rounded-full">{techInfo.badge}</span>
        </div>
        <h2 className="text-xl font-bold">{techInfo.name}</h2>
        <p className="pb-2 text-(--color-para-500) border-b border-b-(--color-divide)">
          {techInfo.description}
        </p>
        <div className="text-[13px] flex justify-between">
          <span className="text-[13px] badge bg-[#f1f4f6] text-[#475569]">
            {techInfo.category}
          </span>
          <span className="text-(--color-para-600)">{techInfo.difficulty}</span>
          <span className="font-medium">
            <span className="text-amber-400 mr-1">★</span>
            {techInfo.rating}
          </span>
        </div>
        <button
          onClick={handleAddToStack}
          className={`btn btn-block rounded-xl ${isBtnSelected ? "btn-disabled" : "btn-neutral"}`}
          disabled={isBtnSelected}
        >
          {isBtnSelected ? (
            <span>
              <span className="text-lg">✓</span> Added to Stack
            </span>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
}

export default TechCard;
