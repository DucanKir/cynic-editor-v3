import { createSelector } from 'reselect';

const selectCharacters = state => state.characters;

export const selectAllCharacters = createSelector(
  [selectCharacters],
  characters => characters.allCharacters
);
export const selectCurrentCharacter = createSelector(
  [selectCharacters],
  characters => characters.currentCharacter
);

export const selectDefaultCharacter = createSelector(
  [selectCharacters],
  characters => characters.defaultCharacter
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