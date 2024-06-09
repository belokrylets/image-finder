import { useAppSelector } from 'Shared/lib/hooks/redux';
import { imagesSelector } from 'entities/Images';

export const useFinder = () => {
    const imagesIds = useAppSelector(imagesSelector.selectIds);
    const { isEmptyResult } = useAppSelector((state) => state.images);

    const isSearched = !!imagesIds.length || isEmptyResult;

    return { isSearched };
};
