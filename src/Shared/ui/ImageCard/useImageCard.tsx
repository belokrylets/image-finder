import { imagesSelector } from 'entities/Images';
import { useAppSelector } from '../../lib/hooks/redux';
import { useCallback, useState } from 'react';

export const useImageCard = (id: string) => {
    const [isShowLightBox, setIsShowLightBox] = useState(false);

    const image = useAppSelector((state) =>
        imagesSelector.selectById(state, id),
    );

    const onImageClick = useCallback(() => {
        setIsShowLightBox(true);
    }, []);
    const onClose = useCallback(() => {
        setIsShowLightBox(false);
    }, []);
    return { image, isShowLightBox, onImageClick, onClose };
};
