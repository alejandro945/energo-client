'use client';
import { NavLinkProps } from '@/presentation/types/Link';
import NextLink from 'next/link';
import { useMemo } from 'react';

const Link: React.FC<NavLinkProps> = ({ className, children, styles, ...props }) => {
    const memoizedStyles = useMemo(() => ({ ...styles }), [styles]);

    return (
        <NextLink className={`${className}`} style={memoizedStyles} {...props}>
            {children}
        </NextLink>
    );
}

export default Link;