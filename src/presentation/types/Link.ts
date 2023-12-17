import { LinkProps as NextLinkProps } from 'next/link';
import {
    CSSProperties,
    PropsWithChildren,
} from 'react';

export type NavLinkProps = NextLinkProps &
    PropsWithChildren & {
        styles?: CSSProperties;
        className?: string;
    };