'use client';
// Layout components
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Navbar from '@/presentation/components/NavBar';
import Sidebar from '@/presentation/components/SideBar';
import { getActiveNavbar, getActiveRoute } from '@/core/utils';
import routes from '@/core/utils/routes';


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // states and functions
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-full w-full bg-gray-50 dark:bg-blue-900">
      <Sidebar routes={routes} open={open} setOpen={setOpen} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full p-0 md:p-8 font-dm dark:bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-4  flex-none transition-all md:pr-2 xl:ml-[310px]`}
        >
          {/* Routes */}
          <div>
            <Navbar
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            />
            <div className="mx-auto min-h-[83vh] p-2 !pt-[40px]">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}