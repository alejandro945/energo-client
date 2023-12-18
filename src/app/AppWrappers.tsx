'use client';
import React, { PropsWithChildren, ReactNode } from 'react';

import dynamic from 'next/dynamic';
import { NextUIProvider } from '@nextui-org/react';
import { SWRConfig } from 'swr';

const _NoSSR = ({ children }: PropsWithChildren) => <React.Fragment>{children}</React.Fragment>;

const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
    ssr: false,
});

export default function AppWrappers({ children }: { children: ReactNode }) {
    return (
        <NoSSR>
            <SWRConfig>
                <NextUIProvider>
                    {children}
                </NextUIProvider>
            </SWRConfig>
        </NoSSR>
    );
}