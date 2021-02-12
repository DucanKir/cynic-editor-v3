import ImagesTypes from './images.types';

export const updateImages = (imagesMap) => ({
    type: ImagesTypes.UPDATE_IMAGES,
    payload: imagesMap
})