import { IRoute } from '@/core/types/Routes';

export const isWindowAvailable = () => typeof window !== 'undefined';

export const findCurrentRoute = ( routes: IRoute[], pathname: string ): any => {
    if (!isWindowAvailable()) return null;

    for (let route of routes) {
        if (!!route.items) {
            const found = findCurrentRoute(route.items, pathname);
            if (!!found) return found;
        }
        if (pathname == route.path && route) return route;
    }
};

export const getActiveRoute = (routes: IRoute[], pathname: string): string => {
    const route = findCurrentRoute(routes, pathname);
    return route?.name || 'Main Dashboard';
};

export const getActiveNavbar = ( routes: IRoute[], pathname: string ): boolean => {
    const route = findCurrentRoute(routes, pathname);
    return route?.secondary || false;
};

export const getActiveNavbarText = ( routes: IRoute[], pathname: string ): string | boolean => {
    return getActiveRoute(routes, pathname) || false;
};