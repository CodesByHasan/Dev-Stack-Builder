import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center gap-4 py-10">

      {/* Left Side */}
      <div className="max-w-2xl py-8">
        <h2 className="mb-4 text-4xl font-bold">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>

        <p className="mb-8 text-lg text-[#475569]">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        {/* <div className="flex gap-3">
          <button className="btn bg-gradient-to-r from-orange-500 to-pink-500 text-white">
            Explore Technologies
          </button>

          <button className="btn btn-outline">
            Learn More
          </button>
        </div> */}

        <div className="flex gap-3">
        <button className="btn rounded-lg border-0 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-2">
        Explore Technologies
       </button>

      {/* <button className="btn btn-outline rounded-lg py-2 px-4 border-[#E5E7EB] ">
        Learn More
      </button> */}
       <button className="btn h-11 min-h-11 w-[185px] rounded-lg border border-gray-200 bg-white text-gray-600">
       Learn More
     </button>
       </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-end">
        <img
          src={BannerImg}
          alt="DevStack Builder"
          className="h-[350px] w-[350px] object-contain"
        />
      </div>

    </div>
  );
};

export default Banner;