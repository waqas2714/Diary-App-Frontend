import { useAuthContext } from "./useAuthContext";
import { usePostContext } from "./usePostContext";


export const useLogout = () => {
    const { dispatch : dispatchUser } = useAuthContext();
    const { dispatch : dispatchPosts  } = usePostContext();

    const logout = () => {
        localStorage.removeItem('user');
        dispatchUser({ type: 'LOGOUT' });
        dispatchPosts({ type: 'SET_POSTS', payload: null });
    }

    return { logout };
};