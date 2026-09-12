function EmptyStack() {
  return (
    <div className="card p-12 border border-dotted text-center text-(--color-para-400)">
      Your stack is empty.
    </div>
  );
}

function SelectionTechCard() {
  return (
    <div className="min-w-11/12 sm:min-w-1/4 max-h-min card rounded-xl shadow-sm">
      <div className="card-body space-y-2">
        <h2 className="capitalize text-lg font-bold">your stack</h2>
        <p className="text-(--color-para-500)">No technologies selected yet.</p>
        <EmptyStack />
      </div>
    </div>
  );
}

export default SelectionTechCard;
