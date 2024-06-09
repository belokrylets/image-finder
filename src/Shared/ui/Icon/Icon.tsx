import React from 'react';
import { Search } from './icons/Search';
import { ClearInput } from './icons/ClearInput';
import { CloseLightBox } from './icons/CloseLightBox';

interface IconProps {
    iconName?: string;
}

export const Icon = ({ iconName }: IconProps) => {
    if (!iconName) return null;

    const iconMapping: Record<string, JSX.Element> = {
        search: <Search />,
        clearInput: <ClearInput />,
        closeLightBox: <CloseLightBox />,
    };
    return iconMapping[iconName] || null;
};
