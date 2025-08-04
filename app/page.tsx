'use client';

import DevDataPanel from '@/app/components/DevDataPanel';
import DevScreenWrapper from '@/app/components/DevScreenWrapper';
import KarmaSlideshow from '@/app/components/SlideShow';
import { Typo } from '@/app/components/typo';

import { config } from '@/config';
import { KarmaNominee } from '@/types';

import { useEffect, useState } from 'react';

// eslint-disable-next-line
const isDev = process.env.NODE_ENV === 'development';

const useTestData = false;

const useDevWrapper = false;

export default function Page() {
  const [data, setData] = useState<KarmaNominee[]>(config.testKings);

  console.log('data at start?', data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use test data in dev, otherwise fetch from Firebase
        if (useTestData && Array.isArray(config.testKings)) {
          setData(config.testKings);
        } else {
          const res = await fetch(config.LatestKarmaNominations);
          if (!res.ok) throw new Error(`Status ${res.status}`);
          const json = await res.json();
          delete json.week;
          delete json.year;
          const nominees = Object.values(json);
          setData(nominees as KarmaNominee[]);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error('Error fetching data:', err.message);
      }
    };

    console.log('Fetching Karma nominations data...');
    fetchData();
  }, []);

  if (!data.length)
    return (
      <div className="h-screen flex items-center justify-center bg-reload-secondary">
        <Typo className="text-center" variant={'large'} font={'grotesk'}>
          Der er ingen nominerede i øjeblikket!
        </Typo>
      </div>
    );

  console.log('data?', data);
  const slideshow = <KarmaSlideshow data={data} />;

  return (
    <div className="relative w-full mx-auto overflow-hidden h-screen">
      {useDevWrapper ? (
        <>
          <DevScreenWrapper>{slideshow}</DevScreenWrapper>
          <DevDataPanel data={data} />
        </>
      ) : (
        slideshow
      )}
    </div>
  );
}
