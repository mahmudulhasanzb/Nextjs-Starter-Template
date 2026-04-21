import { Button, Card } from '@heroui/react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16">
      {/* Hero Section */}
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-4xl font-bold">Next.js Starter Template 🚀</h1>
        <p className="text-gray-500 text-lg max-w-md">
          A clean and minimal foundation to start your next project fast.
        </p>
        <div className="flex gap-3 justify-center mt-2">
          <Link href="/">
            <Button color="primary" size="md">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/mahmudulhasanzb/Nextjs-Starter-Template" target='blank'>
            <Button color="danger" size="md">
              View on GitHub
            </Button>
          </Link>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        <Card className="p-4 flex flex-col gap-1">
          <h2 className="font-semibold text-lg">⚡ Next.js</h2>
          <p className="text-gray-500 text-sm">
            App Router সহ latest Next.js setup।
          </p>
        </Card>

        <Card className="p-4 flex flex-col gap-1">
          <h2 className="font-semibold text-lg">🎨 Tailwind v4</h2>
          <p className="text-gray-500 text-sm">
            Latest Tailwind CSS দিয়ে fast styling।
          </p>
        </Card>

        <Card className="p-4 flex flex-col gap-1">
          <h2 className="font-semibold text-lg">🧩 HeroUI</h2>
          <p className="text-gray-500 text-sm">
            Beautiful components, ready to use।
          </p>
        </Card>
      </div>
    </div>
  );
}
