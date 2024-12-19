'use client';

import { FaShuffle } from 'react-icons/fa6';

import { useArray } from '@/hooks/useArray';

import { Button } from '@/components/ui/button';

export const ArrayShuffleButton = () => {
  const { shuffleArray } = useArray();

  const onShuffle = () => {
    shuffleArray();
  };

  return (
    <Button onClick={onShuffle}>
      <FaShuffle />
    </Button>
  );
};
