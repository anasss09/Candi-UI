import { useState } from "react";
import CandyItem from "./Candy";
import { type Candy, candies } from "../types";

const COLS = 6;
const ROWS = 5;

export default function Board() {
  const [board] = useState<Candy[]>(
    Array.from(
      { length: COLS * ROWS },
      () => candies[Math.floor(Math.random() * candies.length)]
    )
  );

  return (
    <div 
      className="w-full h-screen flex items-center justify-center p-4 overflow-hidden" 
      style={{
        background: 'linear-gradient(135deg, #ffc0e5 0%, #ffb3d9 25%, #ffa6ce 50%, #ff99c2 75%, #ff8cb7 100%)'
      }}
    >
      <div className="relative w-full max-w-4xl max-h-full" style={{ aspectRatio: '6/5' }}>
        {/* Candy Cane Striped Border */}
        <div 
          className="absolute -inset-4 rounded-[2.5rem]"
          style={{
            background: 'repeating-linear-gradient(45deg, #ff6b9d 0px, #ff6b9d 12px, #ffffff 12px, #ffffff 24px)',
          }}
        />
        
        {/* Purple Board Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl shadow-2xl" />

        {/* Candy Grid */}
        <div
          className="absolute inset-0 grid gap-2 p-6"
          style={{
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          }}
        >
          {board.map((candy, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
            >
              <CandyItem type={candy} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}