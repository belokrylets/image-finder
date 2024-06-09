import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ImagesInterface } from '../../types/images';
import { imagesActions } from '../../slice/imagesSlice';
import { RootState } from 'app/providers/StoreProvider';

export const getMoreImages = createAsyncThunk<ImagesInterface[], string>(
    'images/getMoreImages',
    async (query, thunkApi) => {
        const getMoreImagesUrl = 'https://api.unsplash.com/search/photos';
        const state = thunkApi.getState() as RootState;

        const currentPage = state.images.currentPage;
        try {
            const getMoreImagesResponse = await axios.get(getMoreImagesUrl, {
                params: {
                    client_id: 'Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs',
                    query: query,
                    page: currentPage + 1,
                    per_page: 30,
                },
            });

            if (getMoreImagesResponse.status !== 200) {
                return thunkApi.rejectWithValue({
                    message: 'Failed to fetch images',
                });
            }

            const {
                results,
                total_pages,
            }: { results: ImagesInterface[]; total_pages: number } =
                getMoreImagesResponse.data;

            if (!results) {
                throw new Error('No data found');
            }

            if (!results.length) {
                thunkApi.dispatch(
                    imagesActions.onChangeEmptyResult(!results.length),
                );
            } else {
                thunkApi.dispatch(
                    imagesActions.onChangeCurrentPage({
                        page: currentPage + 1,
                        isLast: currentPage + 1 === total_pages,
                    }),
                );
            }

            return results;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkApi.rejectWithValue({
                    message: error.response?.data?.message || error.message,
                });
            } else {
                return thunkApi.rejectWithValue({
                    message:
                        error instanceof Error
                            ? error.message
                            : 'Unknown error',
                });
            }
        }
    },
);
