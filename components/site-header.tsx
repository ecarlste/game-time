import { siteConfig } from '@/config/site';
import React from 'react';
import { MainNav } from '@/components/main-nav';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ProfileDropdown />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
