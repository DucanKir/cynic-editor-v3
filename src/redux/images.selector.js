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

export const selectBeards = createSelector(
  [selectImages],
  collections => collections.beards
);
export const selectBody = createSelector(
  [selectImages],
  collections => collections.body
);
export const selectBoobs = createSelector(
  [selectImages],
  collections => collections.boobs
);
export const selectBrows = createSelector(
  [selectImages],
  collections => collections.backgrounds
);
export const selectClothes = createSelector(
  [selectImages],
  collections => collections.clothes
);
export const selectEyes = createSelector(
  [selectImages],
  collections => collections.eyes
);
export const selectGlasses = createSelector(
  [selectImages],
  collections => collections.glasses
);

export const selectHair = createSelector(
  [selectImages],
  collections => collections.hair
);

export const selectHands = createSelector(
  [selectImages],
  collections => collections.hands
);

export const selectHats = createSelector(
  [selectImages],
  collections => collections.hats
);

export const selectLegs = createSelector(
  [selectImages],
  collections => collections.legs
);

export const selectMasks = createSelector(
  [selectImages],
  collections => collections.masks
);

export const selectMouths = createSelector(
  [selectImages],
  collections => collections.mouths
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