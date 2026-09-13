import { Suspense, useState } from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Technologies from './components/technologies/Technologies'
import YourStack from './components/technologies/YourStack'

import type { IStack } from './types/Types'


/* =========================================================
   SECTION 1: FETCH DATA
   ========================================================= */

const stackFetch = async (): Promise<IStack[]> => {
  const response = await fetch('/data.json')
  const data = await response.json()

  return data
}

const stackPromise = stackFetch()


/* =========================================================
   SECTION 2: APP
   ========================================================= */

function App() {

  const [selectedStack, setSelectedStack] = useState<IStack[]>([])


  /* =========================================================
     SECTION 3: ADD TECHNOLOGY
     ========================================================= */

  const handleAddToStack = (item: IStack) => {

    // Prevent duplicate technology
    setSelectedStack((prevStack) => {

      const alreadyExists = prevStack.some(
        (technology) => technology.id === item.id
      )

      if (alreadyExists) {
        return prevStack
      }

      return [...prevStack, item]
    })
  }


  /* =========================================================
     SECTION 4: REMOVE TECHNOLOGY
     ========================================================= */

  const handleRemoveFromStack = (id: string | number) => {

    setSelectedStack((prevStack) =>
      prevStack.filter((technology) => technology.id !== id)
    )
  }


  /* =========================================================
     SECTION 5: UI
     ========================================================= */

  return (
    <>
      <Navbar />

      <Banner />

      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* LEFT SIDE — Technologies */}
          <div className="lg:col-span-2">

            <Suspense fallback={<div>Loading...</div>}>

              <Technologies
                stackPromise={stackPromise}
                selectedStack={selectedStack}
                handleAddToStack={handleAddToStack}
              />

            </Suspense>

          </div>


          {/* RIGHT SIDE — Your Stack */}
          <div>

            <YourStack
              selectedStack={selectedStack}
              handleRemoveFromStack={handleRemoveFromStack}
              setSelectedStack={setSelectedStack}
            />

          </div>

        </div>

      </div>
    </>
  )
}

export default App