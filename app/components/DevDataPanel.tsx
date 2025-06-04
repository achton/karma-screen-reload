'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

type DevDebugPanelProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export default function DevDebugPanel({ data }: DevDebugPanelProps) {
  const [open, setOpen] = useState(false);

  if (!data) return null;
  return (
    <motion.div layout className="fixed bottom-4 right-4 z-50 text-xs flex flex-col items-end">
      <motion.button
        layout
        onClick={() => setOpen((prev) => !prev)}
        className="bg-gray-800 text-white px-8 py-4  mt-2 text-md rounded shadow-lg hover:bg-gray-800"
      >
        {open ? 'Close Data Panel' : 'Open Data Panel'}
      </motion.button>
      <AnimatePresence initial={false}>
        <motion.div
          layout
          key="panel"
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          style={{ display: open ? 'block' : 'none' }}
          className="w-[720px] max-h-[80vh] bg-white border border-gray-300 shadow-xl rounded-lg overflow-auto p-4"
        >
          <h2 className="font-bold mb-2 text-gray-800">Fetched JSON</h2>

          <pre className="text-gray-800 whitespace-pre-wrap break-words">
            {JSON.stringify(data, null, 2)}
          </pre>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
