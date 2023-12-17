"use client";

import { HiX } from 'react-icons/hi';
import Links, { LinkButton } from './components/Links';
import logo from '/public/logo.png';
import { SideBarProps } from '@/presentation/types/SideBar';
import Image from 'next/image';
import { MdLogout } from "react-icons/md";
const Sidebar: React.FC<SideBarProps> = ({ routes, open, setOpen }) => {
    return (
        <div className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-navy-900 text-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${open ? 'translate-x-0' : '-translate-x-96 xl:translate-x-0'}`} >
            <span
                className="absolute right-4 top-4 block cursor-pointer xl:hidden"
                onClick={() => setOpen(false)}
            >
                <HiX />
            </span>

            <div className={`mx-[80px] mt-[40px] mb-[60px] flex items-center flex-col`}>
                <Image src={logo} alt="logo" width={50} height={50} />
                <div className="ml-1 mt-1 h-2.5 font-poppins text-[32px] font-bold uppercase text-white">
                    ENERGO
                </div>
            </div>

            {/* Nav item */}
            <ul className="mb-auto pt-1">
                <Links routes={routes} />
            </ul>

            <div>
                <LinkButton index={3} route={{
                    name: 'Sign out',
                    layout: '/admin',
                    path: '/',
                    icon: <MdLogout className="h-6 w-6" />,
                }} activeRoute={() => {}}/>
            </div>
        </div>
    );
}

export default Sidebar;