'use client';

import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const TARGET_WIDTH = 2160;
const TARGET_HEIGHT = 3840;

export default function DevScreenWrapper({ children }: Props) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scaleX = vw / TARGET_WIDTH;
      const scaleY = vh / TARGET_HEIGHT;
      setScale(Math.min(scaleX, scaleY));
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div
      style={{
        width: `${TARGET_WIDTH}px`,
        height: `${TARGET_HEIGHT}px`,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        backgroundColor: 'black',
      }}
    >
      {children}
    </div>
  );
}
