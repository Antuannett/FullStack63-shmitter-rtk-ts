import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {FOLLOWERS, FOLLOWING} from "../../utils/constants.ts";

type StatsType = typeof FOLLOWERS| typeof FOLLOWING;

interface StatsPayload {
    statsType: StatsType;
    sum: number;
}

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        [FOLLOWERS]: 0,
        [FOLLOWING]: 0
    },
    reducers: {
        changeStats: {
            reducer: (state, action: PayloadAction<StatsPayload>) => {
                const res = state[action.payload.statsType] + action.payload.sum;
                state[action.payload.statsType] = res < 0 ? 0 : res;
            },
            prepare: (statsType: StatsType, sum: number) => ({payload: {statsType, sum}}),
        }
    }
})

export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer;