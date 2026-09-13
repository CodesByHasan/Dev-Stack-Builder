import type { Dispatch, SetStateAction } from "react";
import type { IStack } from "../../types/Types";

interface YourStackProps {
  selectedStack: IStack[];
  setSelectedStack: Dispatch<SetStateAction<IStack[]>>;
}

const YourStack = ({
  selectedStack,
  setSelectedStack,
}: YourStackProps) => {

  // Remove one technology
  const handleRemove = (id: number) => {
    setSelectedStack((prevStack) =>
      prevStack.filter((item) => item.id !== id)
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="mt-25 justify-right rounded-2xl border border-gray-200 p-5">

      {/* =========================================================
          SECTION 1: HEADER
      ========================================================= */}

      <h2 className="text-xl font-bold">
        Your Stack
      </h2>

      <p className="text-sm text-gray-400">
        {selectedStack.length} Technologies Selected
      </p>


      {/* =========================================================
          SECTION 2: SELECTED TECHNOLOGIES
      ========================================================= */}

      <div className="mt-4 space-y-2">

        {selectedStack.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >

            <div className="flex items-center gap-3">

              <img
                src={item.icon}
                alt={item.name}
                className="h-8 w-8 object-contain"
              />

              <div>
                <p className="font-medium">
                  {item.name}
                </p>

                <p className="text-xs text-gray-400">
                  {item.category}
                </p>
              </div>

            </div>


            {/* Remove one */}
            <button
              onClick={() => handleRemove(item.id)}
              className="text-gray-500 hover:text-red-500"
            >
              ×
            </button>

          </div>

        ))}

      </div>


      {/* =========================================================
          SECTION 3: REMOVE ALL
      ========================================================= */}

      <button
        onClick={handleRemoveAll}
        className="mt-6 w-full rounded-lg border py-2"
      >
        Remove All
      </button>

    </div>
  );
};

export default YourStack;