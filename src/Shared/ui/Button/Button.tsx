import React, { ButtonHTMLAttributes, memo } from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classes?: string;
    theme?: ButtonTheme;
    children?: React.ReactNode;
    disabled?: boolean;
}

export enum ButtonTheme {
    RED = 'red',
    SVG = 'svg',
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        disabled,
        classes,
        theme = ButtonTheme.RED,
        ...otherProps
    } = props;

    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(cls.Button, cls[theme], [classes])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
