import { createSelector } from 'reselect';

const selectImages = state => state.collections;

// export const selectCollections = createSelector(
//   [selectShop],
//   shop => shop.collections
// );

export const selectAllImages = createSelector(
  [selectImages],
  collections => collections.images
);

export const selectDefaultCharacter = createSelector(
  [selectImages],
  collections => {
    return {
      body: collections.images.body.find(item => item.name === 'Body'),
      eyes: collections.images.eyes.find(item => item.name === 'eyes_0'),
      mouths: collections.images.mouths.find(item => item.name === 'mouth_1'),
      head: collections.images.heads.find(item => item.name === 'head_1'),
      legs: collections.images.legs.find(item => item.name === 'legs_1'),
      hands: collections.images.hands.find(item => item.name === 'hands_1'),
    }
  }
);



// export const selectCollection = collectionUrlParam =>
//   createSelector(
//     [selectCollections],
//     collections => (collections ? collections[collectionUrlParam] : null)
//   );

// export const selectIsCollectionFetching = createSelector(
//   [selectShop],
//   shop => shop.isFetching
// );

// export const selectIsCollectionsLoaded = createSelector(
//   [selectShop],
//   shop => !!shop.collections
// );