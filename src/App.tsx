import { Suspense, useState } from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Technologies from './components/technologies/Technologies'
import YourStack from './components/technologies/YourStack'

import type { IStack } from './types/Types'


/* =========================================================
    FETCH DATA SECTION
   ========================================================= */

const stackFetch = async (): Promise<IStack[]> => {
  const response = await fetch('/data.json')
  const data = await response.json()

  return data
}

const stackPromise = stackFetch()


/* =========================================================
    APP SECTION
   ========================================================= */

function App() {

  const [selectedStack, setSelectedStack] = useState<IStack[]>([])


  /* =========================================================
      ADD TECHNOLOGY SECTION
     ========================================================= */

  const handleAddToStack = (item: IStack) => {

    // Check if the technology is already selected
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
      REMOVE TECHNOLOGY SECTION
     ========================================================= */

  const handleRemoveFromStack = (id: string | number) => {

    setSelectedStack((prevStack) =>
      prevStack.filter((technology) => technology.id !== id)
    )
  }


  /* =========================================================
     UI SECTION
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