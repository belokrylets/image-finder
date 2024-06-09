import { ImagesSchema } from './model/types/imagesSchema';
import { ImagesInterface, Urls } from './model/types/images';

export {
    imagesSelector,
    imagesReducer,
    imagesActions,
} from './model/slice/imagesSlice';

export { Images } from './ui/Images';

export type { ImagesSchema, Urls, ImagesInterface };
