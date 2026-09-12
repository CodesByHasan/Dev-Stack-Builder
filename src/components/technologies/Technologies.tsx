import { use } from "react";

const technologies = ({ stackPromise }) => {
    const stack = use(stackPromise);
    return (
        <div className="my-[40px] container mx-auto">
  <h2 className="text-3xl font-bold">
    Explore the{" "}
    <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
      Technologies
    </span>
  </h2>

  <p className="mt-2 text-base text-[#64748B]">
    Pick one technology per category to build your ideal stack.
  </p>
</div>
    );
};

export default technologies;