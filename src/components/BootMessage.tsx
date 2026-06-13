'use client';

import { useState } from 'react';

export default function BootMessage() {
  return (
    <div className="flex items-center justify-center gap-2 text-surface-tint font-code-md opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
      <span className="text-surface-tint">[OK]</span>
      <span>SYSTEM ONLINE / USER DETECTED / READY.</span>
    </div>
  );
}
