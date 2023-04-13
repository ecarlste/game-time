import Link from 'next/link';
import React from 'react';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';

export function HomeLogo() {
  return (
    <Link href="/" className="hidden items-center space-x-2 md:flex">
      <Icons.logo className="h-6 w-6" />
      <span className="hidden font-bold sm:inline-block">
        {siteConfig.name}
      </span>
    </Link>
  );
}
