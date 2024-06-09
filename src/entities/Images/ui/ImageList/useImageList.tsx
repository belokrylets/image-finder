import { useAppSelector } from 'Shared/lib/hooks/redux';
import { imagesSelector } from '../../model/slice/imagesSlice';

export const useImageList = () => {
    const imagesIds = useAppSelector(imagesSelector.selectIds);
    const { isLoading } = useAppSelector((state) => state.images);

    return { imagesIds, isLoading };
};
