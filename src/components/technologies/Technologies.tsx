import { use } from "react";

import type { IStack } from "../../types/Types";

import StackCards from "./StackCards";


interface ITechnologiesProps {
  stackPromise: Promise<IStack[]>;
  selectedStack: IStack[];
  handleAddToStack: (item: IStack) => void;
}


const Technologies = ({
  stackPromise,
  selectedStack,
  handleAddToStack,
}: ITechnologiesProps) => {

  const data = use(stackPromise);

  return (
     <div className="my-[40px] -ml-3">
     <h2 className="mb-2 text-3xl font-bold">
       Explore the Technologies
     </h2>
     <p className="mb-6 text-gray-500">
     Pick one technology per category to build your ideal stack.
      </p>
      <StackCards
        stack={data}
        selectedStack={selectedStack}
        handleAddToStack={handleAddToStack}
      />

    </div>
  );
};


export default Technologies;