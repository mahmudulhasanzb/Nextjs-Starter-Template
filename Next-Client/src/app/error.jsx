'use client';

import { Button } from '@heroui/react';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-8xl font-bold text-gray-200">500</h1>
      <h2 className="text-2xl font-semibold">Something Went Wrong</h2>
      <p className="text-gray-500 text-sm">
        {error?.message || 'An unexpected error occurred.'}
      </p>
      <Button onClick={reset} color="danger" variant="flat">
        Try Again
      </Button>
    </div>
  );
}
