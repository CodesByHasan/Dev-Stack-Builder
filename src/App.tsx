import React, { Suspense, useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Technologies from "./components/technologies/Technologies";
import YourStack from "./components/technologies/YourStack";

import type { IStack } from "./types/Types";


/* =========================================================
   SECTION 1: FETCH DATA
   ========================================================= */

const stackFetch = async (): Promise<IStack[]> => {
  const response = await fetch("/data.json");

  const data = await response.json();

  return data;
};


/* =========================================================
   SECTION 2: CREATE PROMISE ONCE
   ========================================================= */

const stackPromise = stackFetch();


/* =========================================================
   SECTION 3: APP COMPONENT
   ========================================================= */

const App = () => {

  const [stack, setStack] = useState<IStack[]>([]);


  /* =========================================================
     SECTION 4: ADD TO STACK
     ========================================================= */

  const handleAddToStack = (item: IStack) => {
    setStack((prevStack) => [...prevStack, item]);
  };


  return (
    <>
      <Navbar />

      <Banner />

      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Technologies */}

          <div className="lg:col-span-2">

            <Suspense fallback={<div>Loading...</div>}>

              <Technologies
                stackPromise={stackPromise}
                selectedStack={stack}
                handleAddToStack={handleAddToStack}
              />

            </Suspense>

          </div>


          {/* Your Stack */}

          <div>

            <YourStack
              stack={stack}
              setStack={setStack}
            />

          </div>

        </div>

      </div>
    </>
  );
};


export default App;