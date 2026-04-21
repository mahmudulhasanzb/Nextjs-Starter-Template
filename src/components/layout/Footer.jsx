import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t px-6 py-4 mt-auto text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Next.js Starter Template All rights reserved.
      </p>
    </footer>
  );
};

export default Footer 
