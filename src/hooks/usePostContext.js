import { useContext } from "react"
import { PostContext } from "../context/PostsContext";


export const usePostContext = ()=>{
    const context = useContext(PostContext);
    if (!context) {
        throw new Error("usePostContext must be used inside the postContextProvider.")
    }
    return context;
}