import { Button } from '@heroui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-8xl font-bold text-gray-200">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-gray-500 text-sm">
        The page you are looking for does not exist.
      </p>
      <Button as={Link} href="/" color="primary" variant="flat">
        Back to Home
      </Button>
    </div>
  );
}
