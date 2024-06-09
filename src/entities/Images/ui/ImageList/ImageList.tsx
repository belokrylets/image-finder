import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './ImageList.module.scss';
import { useImageList } from './useImageList';
import { ImageCard } from 'Shared/ui/ImageCard';
import { Loaders } from './Loaders';

interface ImageListProps {
    classes?: string;
}

export const ImageList = memo(({ classes }: ImageListProps) => {
    const { imagesIds, isLoading } = useImageList();

    return (
        <div className={classNames(cls.ImageList, [classes])}>
            {imagesIds.map((image) => (
                <ImageCard key={image} id={image} />
            ))}
            {isLoading && <Loaders />}
        </div>
    );
});
