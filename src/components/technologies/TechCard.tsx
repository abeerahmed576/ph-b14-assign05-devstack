import type { ItechInfo } from "../../types/techInfo";

function TechCard({ info }: { info: ItechInfo }) {
  return (
    <div className="card rounded-xl shadow-sm">
      <div className="card-body space-y-2">
        <div className="flex justify-between">
          <span className="text-xl">
            <img src="/favicon.png" alt="" />
          </span>
          <span className="badge rounded-full">{info.badge}</span>
        </div>
        <h2 className="text-xl font-bold">{info.name}</h2>
        <p className="pb-2 text-(--color-para-500) border-b border-b-(--color-divide)">
          {info.description}
        </p>
        <div className="text-[13px] flex justify-between">
          <span className="text-[13px] badge badge-ghost text-[#475569]">
            {info.category}
          </span>
          <span className="text-(--color-para-600)">{info.difficulty}</span>
          <span className="font-medium">
            <span className="text-amber-400 mr-1">&#x2605;</span>
            {info.rating}
          </span>
        </div>
        <button className="btn btn-block bg-black text-white rounded-xl">
          Add to Stack
        </button>
      </div>
    </div>
  );
}

export default TechCard;
