import React, { memo, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Container.module.scss';

interface ContainerProps {
    children: ReactNode;
}

export const Container = memo((props: ContainerProps) => {
    const { children } = props;
    return <div className={classNames(cls.container)}>{children}</div>;
});
