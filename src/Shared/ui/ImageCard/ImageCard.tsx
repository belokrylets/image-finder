import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './ImageCard.module.scss';
import { useImageCard } from './useImageCard';
import { LightBox } from '../LightBox';

interface ImageCardProps {
    classes?: string;
    id: string;
}

export const ImageCard = memo(({ classes, id }: ImageCardProps) => {
    const { image, onImageClick, isShowLightBox, onClose } = useImageCard(id);

    return (
        <>
            {isShowLightBox && (
                <LightBox
                    src={image.urls.full}
                    alt={image.urls.full}
                    onClose={onClose}
                />
            )}
            <div
                className={classNames(cls.ImageCard, [classes])}
                onClick={onImageClick}
            >
                <img alt={''} src={image.urls.small} />
            </div>
        </>
    );
});
