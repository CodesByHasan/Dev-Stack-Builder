import type { IStack } from "../../types/Types";

const badgeStyles: Record<string, string> = {
  blue: "bg-blue-50 text-blue-500 border-blue-100",
  green: "bg-green-50 text-green-500 border-green-100",
  orange: "bg-orange-50 text-orange-500 border-orange-100",
  red: "bg-red-50 text-red-500 border-red-100",
  yellow: "bg-yellow-50 text-yellow-600 border-yellow-100",
  cyan: "bg-cyan-50 text-cyan-500 border-cyan-100",
};

interface StackCardsProps {
  stack: IStack[];
  selectedStack: IStack[];
  handleAddToStack: (item: IStack) => void;
}

const StackCards = ({
  stack,
  selectedStack,
  handleAddToStack,
}: StackCardsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {stack.map((item) => {
        const isSelected = selectedStack.some(
          (technology) => technology.id === item.id
        );

        const badgeStyle =
          badgeStyles[item.badgeColor] ||
          "bg-gray-50 text-gray-500 border-gray-100";

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <img
                src={item.icon}
                alt={item.name}
                className="h-8 w-8 object-contain"
              />

              <span
                className={`rounded-full border px-3 py-1 text-xs ${badgeStyle}`}
              >
                {item.badge || "Essential"}
              </span>
            </div>

            <h3 className="mt-3 text-lg font-bold">{item.name}</h3>

            <p className="mt-2 min-h-[60px] text-sm leading-5 text-slate-500">
              {item.description}
            </p>

            <div className="my-4 h-px w-full bg-gray-100"></div>

            <div className="mt-4 flex items-center justify-between gap-2">
              <span className="rounded-md border border-gray-200 px-3 py-1 text-sm text-slate-600">
                {item.category}
              </span>

              <span className="text-sm text-slate-600">
                {item.difficulty}
              </span>

              <span className="whitespace-nowrap text-sm text-slate-600">
                ⭐ {item.rating}
              </span>
            </div>

            <button
              onClick={() => handleAddToStack(item)}
              // disabled={isSelected}
              className={`mt-4 w-full rounded-lg py-2 text-sm font-medium text-white transition ${
                isSelected
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-[#0B1020] hover:bg-[#171D30]"
              }`}
            >
              {isSelected ? "Added to Stack" : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default StackCards;