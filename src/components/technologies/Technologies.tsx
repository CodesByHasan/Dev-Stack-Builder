import { use } from 'react'

import type { IStack } from '../../types/Types'
import StackCards from './StackCards'

interface TechnologiesProps {
  stackPromise: Promise<IStack[]>
  selectedStack: IStack[]
  handleAddToStack: (item: IStack) => void
}

const Technologies = ({
  stackPromise,
  selectedStack,
  handleAddToStack,
}: TechnologiesProps) => {

  const stack = use(stackPromise)

  return (
    <div className="my-10">

      <h2 className="mb-6 text-3xl font-bold">
        Explore the Technologies
      </h2>

      <StackCards
        stack={stack}
        selectedStack={selectedStack}
        handleAddToStack={handleAddToStack}
      />

    </div>
  )
}

export default Technologies