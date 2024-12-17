'use client';

import { useEffect } from 'react';

import { useArray } from '@/hooks/useArray';

export const BarChart = () => {
  const { array, setArray } = useArray();

  useEffect(() => {
    setArray(50); // Set the array size to 50 after the component mounts
  }, [setArray]);

  const barWidth = `${100 / array.length}%`;

  // Find the maximum value in the array
  const maxValue = Math.max(...array);

  // Scaling function to map array values to a height value between 1 and 250 pixels
  const scaleHeight = (value: number) => {
    const minHeight = 1;
    const maxHeight = 256;
    return (value / maxValue) * (maxHeight - minHeight) + minHeight;
  };

  return (
    <div className='flex h-64 w-full items-end'>
      {array.map((value, idx) => (
        <div
          key={idx}
          style={{
            height: `${scaleHeight(value)}px`,
            width: barWidth,
            background: `linear-gradient(45deg, #4A90E2, #50E3C2)`,
          }}
          className='mx-[0px]'
        />
      ))}
    </div>
  );
};
