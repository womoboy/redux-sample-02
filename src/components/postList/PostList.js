import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../slices/postSlice";
import { useEffect } from 'react';

const PostList = () => {

    const dispatch = useDispatch();
    const postList = useSelector(state => state.posts.postList);
    const postFetchIsPending = useSelector(state => state.posts.fetchPosts);
    const postFetchErrorMessage = useSelector(state => state.posts.errorMessage);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    return (
        <div style={{padding: '1rem', backgroundColor: 'whitesmoke', margin: '1rem 0',}}>
            <h2 style={{textAlign: 'center', backgroundColor: 'black', color: 'white', padding: '1rem', width: 'fit-content', margin: 'auto', borderRadius: '1rem'}}>The posts list</h2>
            {postFetchIsPending && <div>Loading...</div>}
            {postFetchErrorMessage && <div>{postFetchErrorMessage}</div>}
            {postList &&
                postList.map((post) => {
                    return (
                        <div style={{margin: 20, padding: 20, backgroundColor: 'whitesmoke', borderRadius: '1rem', boxShadow: '0 0 1rem gray'}} key={post.id}>{post.body}</div>
                    )
                })
            }
        </div>
    )
}

export default PostList;