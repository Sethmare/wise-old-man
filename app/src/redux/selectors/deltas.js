import _ from 'lodash';
import { createSelector } from 'reselect';

const deltasSelector = state => state.deltas.deltas;
const leaderboardSelector = state => state.deltas.leaderboard;

export const getLeaderboard = createSelector(leaderboardSelector, map => {
  // Add a "rank" field to each delta of each period
  return _.mapValues(map, deltas => deltas.map((d, i) => ({ ...d, rank: i + 1 })));
});

export const getDeltasMap = createSelector(deltasSelector, map => map);

export const getDeltas = createSelector(deltasSelector, map => Object.values(map));

export const getPlayerDeltas = (state, playerId) => {
  return getDeltasMap(state)[playerId];
};
