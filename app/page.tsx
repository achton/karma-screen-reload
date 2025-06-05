'use client';

import DevDataPanel from '@/app/components/DevDataPanel';
import DevScreenWrapper from '@/app/components/DevScreenWrapper';
import KarmaSlideshow from '@/app/components/SlideShow';

import { config } from '@/config';
import { KarmaNominee } from '@/types';

import { useEffect, useState } from 'react';

//eslint-disable-next-line
const isDev = process.env.NODE_ENV === 'development';

const useTestData = true;

const useDevWrapper = true;

export default function Page() {
  const [data, setData] = useState<KarmaNominee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use test data in dev, otherwise fetch from Firebase
        if (useTestData && Array.isArray(config.testKings)) {
          setData(config.testKings);
        } else {
          const res = await fetch(config.LatestKarmaNominations); // Your Firebase URL
          if (!res.ok) throw new Error(`Status ${res.status}`);
          const json = await res.json();
          setData(json as KarmaNominee[]);
        }
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error('Error fetching data:', err.message);
      }
    };

    console.log('Fetching Karma nominations data...');
    fetchData();
  }, []);

  if (!data.length) return <div className="text-center text-gray-500">Loading...</div>;

  const slideshow = <KarmaSlideshow data={data} />;

  return (
    <>
      {useDevWrapper ? (
        <>
          <DevScreenWrapper>{slideshow}</DevScreenWrapper>
          <DevDataPanel data={data} />
        </>
      ) : (
        slideshow
      )}
    </>
  );
}
