import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './Finder.module.scss';
import { useFinder } from './useFinder';
import { Input } from 'Shared/ui/Input';
import { Button } from 'Shared/ui/Button';
import { Icon } from 'Shared/ui/Icon';

interface FinderProps {
    classes?: string;
    value: string;
    onChange: (name: string, value: string) => void;
    onSubmit: () => void;
    onClear: () => void;
    inputName?: string;
}

export const Finder = memo((props: FinderProps) => {
    const { onChange, value, onSubmit, classes, inputName, onClear } = props;
    const { isSearched } = useFinder();

    return (
        <form
            className={classNames(cls.Finder, [classes], {
                [cls.searched]: isSearched,
            })}
        >
            <Input
                leftIcon={<Icon iconName={'search'} />}
                rightIcon={<Icon iconName={'clearInput'} />}
                name={inputName}
                value={value}
                onChange={onChange}
                placeholder={'Телефоны, яблоки, груши...'}
                classes={cls.input}
                onClear={onClear}
            />
            <Button disabled={value === ''} onClick={onSubmit}>
                Искать
            </Button>
        </form>
    );
});
