import { ImagesSchema } from '../types/imagesSchema';
import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { ImagesInterface } from '../types/images';
import { StateSchema } from 'app/providers/StoreProvider';
import { getImages } from '../services/getImages/getImages';
import { getMoreImages } from '../services/getMoreImages/getMoreImages';

const imagesAdapter = createEntityAdapter<ImagesInterface>();

const initialState: ImagesSchema = imagesAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    isEmptyResult: false,
    currentPage: 0,
    isLastPage: false,
});

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        removeAll: (state) => {
            imagesAdapter.removeAll(state);
            state.isEmptyResult = false;
            state.currentPage = 0;
            state.isLastPage = false;
        },
        onChangeEmptyResult: (state, { payload }: PayloadAction<boolean>) => {
            state.isEmptyResult = payload;
        },
        onChangeCurrentPage: (
            state,
            { payload }: PayloadAction<{ page: number; isLast: boolean }>,
        ) => {
            state.currentPage = payload.page;
            state.isEmptyResult = false;
            if (payload.isLast) state.isLastPage = payload.isLast;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getImages.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                getImages.fulfilled,
                (state, action: PayloadAction<ImagesInterface[]>) => {
                    state.isLoading = false;
                    state.error = undefined;
                    imagesAdapter.setAll(state, action.payload);
                },
            )
            .addCase(getImages.rejected, (state, action) => {
                state.isLoading = false;
                //@ts-ignore
                state.error = action.payload.message;
            })
            .addCase(getMoreImages.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                getMoreImages.fulfilled,
                (state, action: PayloadAction<ImagesInterface[]>) => {
                    state.isLoading = false;
                    state.error = undefined;
                    imagesAdapter.addMany(state, action.payload);
                },
            )
            .addCase(getMoreImages.rejected, (state, action) => {
                state.isLoading = false;
                //@ts-ignore
                state.error = action.payload.message;
            });
    },
});

export const imagesSelector = imagesAdapter.getSelectors(
    (state: StateSchema) => state.images,
);
export const { actions: imagesActions } = imagesSlice;
export const { reducer: imagesReducer } = imagesSlice;
