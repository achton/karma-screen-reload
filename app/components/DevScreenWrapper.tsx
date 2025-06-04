'use client';

export default function DevScreenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 overflow-hidden">
      <div
        className="relative border-4 border-white shadow-2xl rounded-xl overflow-hidden"
        style={{
          width: '1080px',
          height: '1920px',
          transform: 'scale(0.7)',
          transformOrigin: 'center',
          backgroundColor: '#000',
        }}
      >
        {children}
      </div>
    </div>
  );
}
