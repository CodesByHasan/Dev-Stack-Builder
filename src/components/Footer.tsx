import footImg from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-16 pr-70 w-full border-t border-gray-100">

    
      <div className="w-full">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-4">

   
          <div>
            <img
              src={footImg}
              alt="Dev Stack"
              className="h-8 w-auto"
            />

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-6 flex gap-5 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

    
          <div>
            <h3 className="text-sm font-bold uppercase">
              Product
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-400">
              <a href="#" className="block">Home</a>
              <a href="#" className="block">Technologies</a>
              <a href="#" className="block">Projects</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-400">
              <a href="#" className="block">About</a>
              <a href="#" className="block">Contact</a>
              <a href="#" className="block">Careers</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase">
              Legal
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-400">
              <a href="#" className="block">Privacy Policy</a>
              <a href="#" className="block">Terms of Service</a>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-6 text-sm text-gray-400 md:flex-row md:items-center">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;