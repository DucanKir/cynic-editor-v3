import { createSelector } from 'reselect';

const selectImages = state => state.collections.images;

// export const selectCollections = createSelector(
//   [selectShop],
//   shop => shop.collections
// );

export const selectAllImages = createSelector(
  [selectImages],
  collections => collections
);

export const selectBackgrounds = createSelector(
  [selectImages],
  collections => collections.backgrounds
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