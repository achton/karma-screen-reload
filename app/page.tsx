'use client';

import DevDataPanel from '@/app/components/DevDataPanel';
import DevScreenWrapper from '@/app/components/DevScreenWrapper';
import KarmaSlideshow from '@/app/components/SlideShow';

import { config } from '@/config';
import { KarmaNominee } from '@/types';

import { useEffect, useState } from 'react';

const isDev = process.env.NODE_ENV === 'development';

export default function Page() {
  const [data, setData] = useState<KarmaNominee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use test data in dev, otherwise fetch from Firebase
        if (isDev && Array.isArray(config.testKings)) {
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

    fetchData();
  }, []);

  if (!data.length) return null;

  const slideshow = <KarmaSlideshow data={data} />;

  return (
    <>
      {isDev ? (
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
