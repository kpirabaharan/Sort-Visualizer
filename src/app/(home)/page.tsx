'use client';

import { Algorithms } from '@/components/algorithms';
import { ArrayLengthSlider } from '@/components/array-length-slider';
import { ArrayShuffleButton } from '@/components/array-shuffle-button';
import { BarChart } from '@/components/bar-chart';
import { CalculateInversionButton } from '@/components/calculate-inversion-button';
import { DelaySlider } from '@/components/delay-slider';

const Home = () => {
  return (
    <div className='mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-y-4 px-6 md:px-16 py-8'>
      <div className='flex flex-row gap-x-4'>
        <DelaySlider />
        <ArrayLengthSlider />
      </div>
      <BarChart />
      <Algorithms />
      <div className='flex flex-row gap-x-4'>
        <CalculateInversionButton />
        <ArrayShuffleButton />
      </div>
    </div>
  );
};

export default Home;
