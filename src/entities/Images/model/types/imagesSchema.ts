import { ImagesInterface } from './images';
import { EntityState } from '@reduxjs/toolkit';

export interface ImagesSchema extends EntityState<ImagesInterface, string> {
    isLoading: boolean;
    error?: string;
    isEmptyResult: boolean;
    currentPage: number;
    isLastPage: boolean;
}
