import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ImagesInterface } from '../../types/images';
import { imagesActions } from '../../slice/imagesSlice';

export const getImages = createAsyncThunk<ImagesInterface[], string>(
    'images/getImages',
    async (query, thunkApi) => {
        const getImagesUrl = 'https://api.unsplash.com/search/photos';

        try {
            const getImagesResponse = await axios.get(getImagesUrl, {
                params: {
                    client_id: 'Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs',
                    query: query,
                    page: 1,
                    per_page: 30,
                },
            });

            if (getImagesResponse.status !== 200) {
                return thunkApi.rejectWithValue({
                    message: 'Failed to fetch images',
                });
            }

            const {
                results,
                total_pages,
            }: { results: ImagesInterface[]; total_pages: number } =
                getImagesResponse.data;

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
                        page: 1,
                        isLast: 1 === total_pages,
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
