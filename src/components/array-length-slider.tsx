'use client';

import { useArray } from '@/hooks/useArray';

import { Slider } from '@/components/ui/slider';

export const ArrayLengthSlider = () => {
  const { size, setArray } = useArray();

  return (
    <div className='flex w-60 flex-col items-center gap-y-4'>
      <Slider
        defaultValue={[size]}
        max={1000}
        min={10}
        step={5}
        onValueChange={([value]) => {
          setArray(value);
        }}
      />
      <p>Number of Elements: {size.toString()}</p>
    </div>
  );
};
