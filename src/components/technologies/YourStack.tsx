import type {
  Dispatch,
  SetStateAction,
} from "react";

import type { IStack } from "../../types/Types";

import { toast } from "react-toastify";

interface IYourStackProps {
  stack: IStack[];
  setStack: Dispatch<SetStateAction<IStack[]>>;
}

const YourStack = ({
  stack,
  setStack,
}: IYourStackProps) => {

  const handleRemove = (id: number) => {
    setStack(
      stack.filter(
        (technology) => technology.id !== id
      )
    );

    toast.success("Technology removed from stack!");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.success("All technologies removed!");
  };

  return (
    <div className="mt-33 top-5 rounded-2xl border border-gray-200 bg-white p-5">

      {/* Header */}

      <h2 className="text-xl font-bold">
        Your Stack
      </h2>

      <p className="text-sm text-gray-400">
        {stack.length} Technologies Selected
      </p>


      {/* Selected Technologies */}

      <div className="mt-4 space-y-2">

        {stack.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
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


            {/* Remove */}

            <button
              onClick={() => handleRemove(item.id)}
              className="text-xl text-gray-400 hover:text-red-500"
            >
              ×
            </button>

          </div>

        ))}

      </div>


      {/* Remove All */}

      <button
        onClick={handleRemoveAll}
        disabled={stack.length === 0}
        className="mt-6 w-full rounded-lg border border-gray-200 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Remove All
      </button>

    </div>
  );
};

export default YourStack;