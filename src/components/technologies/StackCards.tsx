import React from 'react';
import type { IStack } from '../../types/Types';

const badgeStyles: Record<string, string> = {
  blue: "bg-blue-50 text-blue-500 border-blue-100",
  green: "bg-green-50 text-green-500 border-green-100",
  orange: "bg-orange-50 text-orange-500 border-orange-100",
  red: "bg-red-50 text-red-500 border-red-100",
  yellow: "bg-yellow-50 text-yellow-600 border-yellow-100",
  cyan: "bg-cyan-50 text-cyan-500 border-cyan-100",
};


const StackCards = ({ stack }: { stack: IStack[] }) => {

   return (
  <div className="grid grid-cols-3 justify-items-start gap-4 mt-6 py-8 px-0 w-[950px]">
    {stack.map((item: IStack, idx: number) => {
      return (
        <div
          key={idx}
            className="card w-full rounded-2xl border border-gray-100 bg-white shadow-sm"
        >
          <div className="card-body p-5">

            {/* Icon + Badge */}
            <div className="flex items-center justify-between">
              <img
                src={item.icon}
                alt={item.name}
                className="h-8 w-8 object-contain"
              />

              {item.badge && (
                <div className={` p-1 rounded-full px-3 badge ${item.badgeColor ? badgeStyles[item.badgeColor] : 'badge-info badge-soft'}`}>
                  {item.badge}
                </div>
              )}
            </div>

            {/* Name */}
            <h2 className="card-title mt-3 text-xl font-bold text-base-content">
              {item.name}
            </h2>

            {/* Description */}
            <p className="text-sm mt-3 text-[#64748B] text-base-content/60">
              {item.description}
            </p>

            <div className="my-4 h-px w-full bg-gray-100"></div>

            {/* Info */}
        
              <div className="flex items-center justify-between mt-3">

           <div className="rounded-md border border-gray-100 bg-gray-50 px-3 py-1 text-sm text-[#475569]">
           {item.category}
           </div>

          <span className="text-sm text-[#475569]">
          {item.difficulty}
          </span>

              <span className="text-sm text-base-content/60">
                ⭐ {item.rating}
              </span>
            </div>

            {/* Button */}
            <button className="btn btn-neutral w-full rounded-lg border-none bg-[#0A0F1D] text-white mt-4 py-2">
              Add to Stack
            </button>
          </div>
        </div>
      );
    })}
  </div>
);
}

export default StackCards;