import React, { memo } from 'react';
import { useImages } from './useImages';
import { ImageList } from './ImageList/ImageList';
import cls from './Images.module.scss';

interface ImagesProps {
    classes?: string;
}

export const Images = memo(({ classes }: ImagesProps) => {
    const { isEmptyResult } = useImages();

    return (
        <>
            {isEmptyResult ? (
                <div className={cls.emptyResult}>
                    К сожалению, поиск не дал результатов
                </div>
            ) : (
                <ImageList />
            )}
        </>
    );
});
