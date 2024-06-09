import React, { memo, useEffect } from 'react';
import classNames from 'classnames';
import cls from './LightBox.module.scss';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { ButtonTheme } from '../Button/Button';

interface LightBoxProps {
    classes?: string;
    src: string;
    alt: string;
    onClose: () => void;
}

export const LightBox = memo(
    ({ classes, src, alt, onClose }: LightBoxProps) => {
        useEffect(() => {
            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.overflow = '';
            };
        }, []);
        return (
            <div className={classNames(cls.lightboxOverlay, [classes])}>
                <div className={cls.close} onClick={onClose}>
                    <Button theme={ButtonTheme.SVG}>
                        <Icon iconName="closeLightBox" />
                    </Button>
                </div>
                <div className={cls.lightboxContent}>
                    <img src={src} alt={alt} />
                </div>
            </div>
        );
    },
);
