import type { Candy } from "../types";
import { candyImages } from "../assets/candies";

interface Props {
  type: Candy;
  scale?: number;
  padding?: number;
}

export default function CandyItem({ 
  type, 
  scale = 0.98, 
  padding = 0 
}: Props) {
  const scalePercentage = `${scale * 100}%`;
  
  const paddingClasses = [
    'p-0',
    'p-0.5',
    'p-1',
    'p-1.5',
    'p-2'
  ][padding] || 'p-0';

  return (
    <div className={`w-full h-full flex items-center justify-center select-none ${paddingClasses}`}>
      <img
        src={candyImages[type]}
        alt={type}
        draggable={false}
        style={{
          width: scalePercentage,
          height: scalePercentage,
        }}
        className="
          object-contain
          drop-shadow-xl
          pointer-events-none
          transition-all duration-200
          hover:scale-110
          active:scale-90
          hover:brightness-110
          active:brightness-90
        "
      />
    </div>
  );
}