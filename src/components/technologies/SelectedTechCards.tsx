import type { Dispatch } from "react";
import type { ITechInfo } from "../../types/TechInfo";
import { toast } from "react-toastify";

interface ISelectedTechCardsProps {
  selectedTechs: ITechInfo[];
  setSelectedTechs: Dispatch<React.SetStateAction<ITechInfo[]>>;
}

function SelectedTechCards({
  selectedTechs,
  setSelectedTechs,
}: ISelectedTechCardsProps) {
  const handleRemoveFromStack = (techInfo: ITechInfo) => {
    const remainingTechs = selectedTechs.filter(
      (selectedTech: ITechInfo) => selectedTech.id !== techInfo.id,
    );
    setSelectedTechs(remainingTechs);
    toast.info(`${techInfo.name} removed from Stack.`);
  };

  return (
    <>
      {selectedTechs.map((techInfo) => (
        <div
          key={techInfo.id}
          className="p-3 border border-[#E2E8F0] rounded-xl flex justify-between items-center"
        >
          <div className="flex space-x-3 items-center">
            <img
              className="scale-75"
              src={techInfo.icon}
              alt={`${techInfo.name} logo`}
            />
            <div>
              <h4 className="font-bold text-sm">{techInfo.name}</h4>
              <p className="text-[9px] text-(--color-para-600)">
                {techInfo.category}
              </p>
            </div>
          </div>
          <span
            className="text-2xl text-(--color-para-500) cursor-pointer"
            onClick={() => handleRemoveFromStack(techInfo)}
          >
            ✗
          </span>
        </div>
      ))}
    </>
  );
}

export default SelectedTechCards;
