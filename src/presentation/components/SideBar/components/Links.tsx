"use client";
import React from 'react';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { MdDashboard } from "react-icons/md";
import Link from '../../Link';
import { RoutesType } from '@/core/types/Routes';

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
    const pathname = usePathname();
    const { routes } = props;

    // verifies if routeName is the one active (in browser input)
    const activeRoute = useCallback(
        (routeName: string) => {
            return pathname === routeName;
        },
        [pathname],
    );

    const createLinks = (routes: RoutesType[]) => {
        return routes.map((route, index) => {
            return (
                <LinkButton key={index} route={route} activeRoute={activeRoute} />
            )
        });
    };
    // BRAND
    return <>{createLinks(routes)}</>;
};

export default SidebarLinks;

export const LinkButton = ({index, route, activeRoute = undefined}: any) => {
    return (
    <Link key={index} href={route.path}>
        <div className="relative mb-3 flex hover:cursor-pointer">
            <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
            >
                <span
                    className={`${activeRoute(route.path) === true
                        ? 'font-bold text-white'
                        : 'font-medium text-gray-600'
                        }`}
                >
                    {route.icon ? route.icon : <MdDashboard />}{' '}
                </span>
                <p
                    className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                        ? 'font-bold text-white'
                        : 'font-medium text-gray-600'
                        }`}
                >
                    {route.name}
                </p>
            </li>
            {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-white dark:bg-brand-400" />
            ) : null}
        </div>
    </Link>
    )
}