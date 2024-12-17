'use client';

import { FaShuffle } from 'react-icons/fa6';

import { useArray } from '@/hooks/useArray';
import { useSpeed } from '@/hooks/useSpeed';

import { Algorithms } from '@/components/algorithms';
import { BarChart } from '@/components/bar-chart';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const Home = () => {
  const { size, setArray } = useArray();
  const { speed, setSpeed } = useSpeed();

  const onShuffle = () => {
    setArray(size);
  };

  return (
    <div className='mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-y-4 px-6 md:px-16'>
      <div className='flex w-60 flex-col items-center gap-y-4'>
        <Slider
          defaultValue={[speed]}
          max={200}
          min={10}
          step={10}
          onValueChange={([value]) => {
            setSpeed(value);
          }}
        />
        <p>Delay Between Iterations: {speed.toString()}</p>
      </div>
      <div className='flex flex-row gap-x-4'>
        <div className='flex flex-col items-center gap-y-4'>
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
        <div>
          <Button onClick={onShuffle}>
            <FaShuffle />
          </Button>
        </div>
      </div>
      <BarChart />
      <Algorithms />
    </div>
  );
};

export default Home;
