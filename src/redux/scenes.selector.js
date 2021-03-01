import { createSelector } from 'reselect';

const selectScenes = state => state.scenes;

export const selectAllScenes = createSelector(
    [selectScenes],
    scenes => scenes
  );

export const selectCharsOnScene = createSelector(
  [selectScenes],
  scenes => scenes.charsOnScene
);

export const selectCurrentBackground = createSelector(
  [selectScenes],
  scenes => scenes.chosenBackground
);
