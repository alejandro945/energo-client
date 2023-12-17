
import React from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { MdNotifications, MdEmail } from "react-icons/md";
import avatar from '/public/avatar.png';
import Image from 'next/image';
import { NavBarProps } from '@/presentation/types/NavBar';
import Link from '../Link';

const Navbar: React.FC<NavBarProps> = ({ onOpenSidenav, brandText }) => {
    return (
        <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
            <div className="ml-[6px]">
                <div className="h-6 w-[224px] pt-1">
                    <a
                        className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                        href="/admin"
                    >
                        Energo
                        <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
                            {' '}
                            /{' '}
                        </span>
                    </a>
                    <Link
                        className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                        href="#"
                    >
                        {brandText}
                    </Link>
                </div>
                <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
                    <Link
                        href="#"
                        className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
                    >
                        {brandText}
                    </Link>
                </p>
            </div>

            <div className="relative mt-[3px] flex h-[61px] w-[285px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[295px] md:flex-grow-0 md:gap-1 xl:w-[295px] xl:gap-2">
                {/* Menu Icon for xl.down devices */}
                <span className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden" onClick={onOpenSidenav} >
                    <FiAlignJustify className="h-5 w-5" />
                </span>
                {/* Notification Icon */}
                <div className='flex'>
                    <p className="cursor-pointer">
                        <MdNotifications className="h-6 w-6 text-gray-600 dark:text-white" />
                    </p>
                </div>
                {/* Email Icon */}
                <div className='flex'>
                    <p className="cursor-pointer">
                        <MdEmail className="h-6 w-6 text-gray-600 dark:text-white" />
                    </p>
                </div>
                {/* Profile Avatar */}
                <div className='flex items-center gap-1 '>
                    <Image
                        width="30"
                        height="30"
                        className="h-10 w-10 rounded-full"
                        src={avatar}
                        alt="Avatar"
                    />
                    {/* Profile Name */}
                    <p className="text-md font-medium">
                        Bullen Ziewcki
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;