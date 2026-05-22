import {changeAvatar, changeName} from "../features/user/userSlice.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";

interface Props {
    size?: 'small'
}

const Avatar = ({size}: Props) => {
    const {avatar, name} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter avatar URL');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                dispatch(changeName(name));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    )
}

export default Avatar;