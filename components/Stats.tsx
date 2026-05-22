import Avatar from "./Avatar.tsx";
import {changeStats} from "../features/stats/statsSlice.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {FOLLOWERS, FOLLOWING} from "../utils/constants.ts";

const Stats = () => {
    const {name} = useAppSelector(state => state.user);
    const {[FOLLOWERS]: followers, [FOLLOWING]: following} = useAppSelector(state => state.stats);
    const dispatch = useAppDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeStats(FOLLOWERS, 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats(FOLLOWERS, -1));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(changeStats(FOLLOWING, 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats(FOLLOWING, -1));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    )
}

export default Stats;