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
        <div>
            {postFetchIsPending && <div>Loading...</div>}
            {postFetchErrorMessage && <div>{postFetchErrorMessage}</div>}
            {postList &&
                postList.map((post) => {
                    return (
                        <div style={{margin: 20}} key={post.id}>{post.body}</div>
                    )
                })
            }
        </div>
    )
}

export default PostList;