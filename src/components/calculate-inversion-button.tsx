'use client';

import { useArray } from '@/hooks/useArray';
import { calculateInversionScale } from '@/util/count-inversions';

import { Button } from '@/components/ui/button';

export const CalculateInversionButton = () => {
  const { array } = useArray();

  const inversionHandler = () => {
    const res = calculateInversionScale(array);
    console.log('Inversion', res);
  };

  return <Button onClick={inversionHandler}>Count Inversions</Button>;
};
