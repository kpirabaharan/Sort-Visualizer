'use client';

import { useSpeed } from '@/hooks/useSpeed';

import { Slider } from '@/components/ui/slider';

export const DelaySlider = () => {
  const { speed, setSpeed } = useSpeed();

  return (
    <div className='flex w-60 flex-col items-center gap-y-4'>
      <Slider
        defaultValue={[speed]}
        max={400}
        min={10}
        step={10}
        onValueChange={([value]) => {
          setSpeed(value);
        }}
      />
      <p>Delay Between Iterations: {speed.toString()}</p>
    </div>
  );
};
