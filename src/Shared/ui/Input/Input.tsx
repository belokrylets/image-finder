import React, { InputHTMLAttributes, memo, useCallback } from 'react';
import classNames from 'classnames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    classes?: string;
    value?: string;
    name?: string;
    placeholder?: string;
    onChange?: (name: string, value: string) => void;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClear?: () => void;
}

export const Input = memo((props: InputProps) => {
    const {
        classes,
        onClear,
        value,
        name,
        placeholder,
        onChange,
        rightIcon,
        leftIcon,
    } = props;

    const onInput = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            if (onChange) onChange(name, value);
        },
        [onChange],
    );

    return (
        <label className={classNames(cls.label, [classes])}>
            <div className={cls.InputWrapper}>
                {leftIcon && <div className={cls.leftIcon}>{leftIcon}</div>}
                <input
                    onChange={onInput}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    className={classNames(cls.Input)}
                />
                {rightIcon && value !== '' && (
                    <div onClick={onClear} className={cls.rightIcon}>
                        {rightIcon}
                    </div>
                )}
            </div>
        </label>
    );
});
