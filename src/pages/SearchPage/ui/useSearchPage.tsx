import { useAppDispatch, useAppSelector } from 'Shared/lib/hooks/redux';
import { useCallback, useState } from 'react';
import { getImages } from 'entities/Images/model/services/getImages/getImages';
import { imagesActions, imagesSelector } from 'entities/Images';
import { useInfiniteScroll } from 'Shared/lib/hooks/useInfinityScroll';
import { getMoreImages } from 'entities/Images/model/services/getMoreImages/getMoreImages';

export const useSearchPage = () => {
    const dispatch = useAppDispatch();
    const [form, setForm] = useState({
        search: '',
    });

    const onForm = useCallback(
        (name: string, value: string) => {
            setForm({ ...form, [name]: value });
        },
        [form],
    );
    const ids = useAppSelector(imagesSelector.selectTotal);
    const { isLastPage, isLoading } = useAppSelector((state) => state.images);

    const onLoadNextPart = useCallback(() => {
        dispatch(getMoreImages(form.search));
    }, [form, dispatch]);

    const lastElementRef = useInfiniteScroll(onLoadNextPart);
    const onSubmit = useCallback(() => {
        dispatch(getImages(form.search));
    }, [form, dispatch]);

    const onClear = useCallback(() => {
        setForm({ search: '' });
        dispatch(imagesActions.removeAll());
    }, [dispatch]);
    return {
        onForm,
        form,
        onSubmit,
        onClear,
        ids,
        isLoading,
        onLoadNextPart,
        lastElementRef,
        isLastPage,
    };
};
