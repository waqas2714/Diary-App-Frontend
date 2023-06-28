import React, { useReducer } from 'react'

export const PostContext = React.createContext();

const postReducer = (state, action) =>{
    switch (action.type) {
        case 'SET_POSTS':
            return {
                posts : action.payload 
            }
        case 'CREATE_POSTS':
            return [action.payload, ...state.posts]
        case 'DELETE_POST':
            return { 
                posts : state.posts.filter((post)=>post._id !== action.payload._id)
            }
        default:
            return state;
    }
}

export const PostsContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(postReducer,{
        posts : null
    })

    return(
        <PostContext.Provider value={{...state, dispatch}} >
            {children}
        </PostContext.Provider>
    )
}