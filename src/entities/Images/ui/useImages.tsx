import { useAppSelector } from 'Shared/lib/hooks/redux';

export const useImages = () => {
    const { isEmptyResult } = useAppSelector((state) => state.images);
    return { isEmptyResult };
};
