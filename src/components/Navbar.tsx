import navimg from '../assets/logo-text.png'

const navbar = () => {
  return (
    <div className="sticky top-0 navbar bg-base-100">
      <nav className="flex gap-4 items-center justify-between container mx-auto py-4">
        <img src={navimg} alt="DevStack Builder" className="h-10 w-auto" />
        <ul className="flex gap-4 items-center">
            <li>    
            <a className="text-[#DB2777]" href="Home">Home</a>
            </li>
            <li>
            <a className="text-[#475569]" href="Technologies">Technologies</a>
            </li>
            <li>
            <a className="text-[#475569]" href="Projects">Projects</a>
            </li>
            <li>
            <a className="text-[#475569]" href="About">About</a>
            </li>
            <li>
            <a className="text-[#475569]" href="Contact">Contact</a>
            </li>
        </ul>
        
        <div className="flex items-center gap-3">
       <button>Sign In</button>

        <button className="text-[#FFFFFF] bg-[#D91B7E] rounded-full px-6 py-2">
         Sign Up
       </button>
       </div>
      </nav>
    </div>
  )
}

export default navbar
      
     