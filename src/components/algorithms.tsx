'use client';

import { useRef, useState } from 'react';
import { FaStop } from 'react-icons/fa6';

import { useArray } from '@/hooks/useArray';
import { useSpeed } from '@/hooks/useSpeed';
import { UpdateArrayParams } from '@/types';
import { bubbleSort } from '@/util/bubble-sort';
import { heapSort } from '@/util/heap-sort';
import { insertionSort } from '@/util/insertion-sort';
import { mergeSort } from '@/util/merge-sort';
import { quickSort } from '@/util/quick-sort';
import { selectionSort } from '@/util/selection-sort';

import { Button } from '@/components/ui/button';

export const Algorithms = () => {
  const [isRunning, setIsRunning] = useState(false);
  const { array, updateArray } = useArray();
  const { speed } = useSpeed();
  const generatorRef =
    useRef<Generator<UpdateArrayParams, UpdateArrayParams, void>>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const sort = (
    sorter: (
      array: number[],
    ) => Generator<UpdateArrayParams, UpdateArrayParams, void>,
  ) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (generatorRef.current) {
      generatorRef.current.return({ array, indices: [] });
    }

    generatorRef.current = sorter(array);

    intervalRef.current = setInterval(() => {
      const {
        value: { array, indices },
        done,
      } = generatorRef.current!.next();
      if (done) {
        setIsRunning(false);
        updateArray({ array, indices });
        clearInterval(intervalRef.current!);
      } else {
        setIsRunning(true);
        updateArray({ array, indices });
      }
    }, speed); // Adjust the interval time as needed
  };

  const stop = () => {
    if (intervalRef.current) {
      setIsRunning(false);
      updateArray({ indices: [] });
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (generatorRef.current) {
      generatorRef.current.return({ array, indices: [] });
      generatorRef.current = null;
    }
  };

  return (
    <div className='flex flex-col items-center gap-y-4'>
      <div className='flex flex-wrap gap-4'>
        <Button className='w-32' onClick={() => sort(bubbleSort)}>
          Bubble Sort
        </Button>
        <Button className='w-32' onClick={() => sort(selectionSort)}>
          Selection Sort
        </Button>
        <Button className='w-32' onClick={() => sort(insertionSort)}>
          Insertion Sort
        </Button>
        <Button className='w-32' onClick={() => sort(mergeSort)}>
          Merge Sort
        </Button>
        <Button className='w-32' onClick={() => sort(quickSort)}>
          Quick Sort
        </Button>
        <Button className='w-32' onClick={() => sort(heapSort)}>
          Heap Sort
        </Button>
      </div>
      {isRunning && (
        <div>
          <Button onClick={stop}>
            Stop
            <FaStop className='h-1 w-1' />
          </Button>
        </div>
      )}
    </div>
  );
};
