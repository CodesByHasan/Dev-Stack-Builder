import footImg from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-16 pr-70 w-full border-t border-gray-100">

      {/* Footer Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <img
            src={footImg}
            alt="Dev Stack"
            className="h-8"
          />

          <p className="mt-4 text-sm text-gray-400">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex gap-5">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>


        {/* Product */}
        <div>
          <h3 className="font-bold">Product</h3>

          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <a href="#" className="block">Home</a>
            <a href="#" className="block">Technologies</a>
            <a href="#" className="block">Projects</a>
          </div>
        </div>


        {/* Company */}
        <div>
          <h3 className="font-bold">Company</h3>

          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <a href="#" className="block">About</a>
            <a href="#" className="block">Contact</a>
            <a href="#" className="block">Careers</a>
          </div>
        </div>


        {/* Legal */}
        <div>
          <h3 className="font-bold">Legal</h3>

          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <a href="#" className="block">Privacy Policy</a>
            <a href="#" className="block">Terms of Service</a>
          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-5 text-sm text-gray-400">

          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;