import { createSelector } from 'reselect';

const selectCharacters = state => state.scenes;

export const selectAllScenes = createSelector(
    [selectCharacters],
    scenes => scenes
  );