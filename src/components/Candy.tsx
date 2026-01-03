import type { Candy } from "../types";
import { candyImages } from "../assets/candies";

interface Props {
  type: Candy;
}

export default function CandyItem({ type }: Props) {
  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <img
        src={candyImages[type]}
        alt={type}
        draggable={false}
        className="
          w-[85%] h-[85%]
          object-contain
          drop-shadow-lg
          pointer-events-none
          transition-transform duration-200
          active:scale-90
        "
      />
    </div>
  );
}
