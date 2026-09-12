import { Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Technologies from './components/technologies/Technologies' 

const stackFetch = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}

function App() {
  const stackPromise = stackFetch();
  console.log(stackPromise)

  return (
    <>
     <Navbar />
     <Banner />
     <Suspense fallback={<div>Loading...</div>}>
       <Technologies stackPromise={stackPromise} />
     </Suspense>
    </>
  )
}

export default App