import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../slices/postSlice";

const PostList = () => {
  const dispatch = useDispatch();

  const postList = useSelector(({ posts: { postList } }) => postList);

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  console.log(postList);

  return (
    <div>
      {postList.map((post) => {
        return (
          <div style={{ margin: 20, backgroundColor: "whitesmoke", padding: '1rem' }} key={post.id}>
            {post.body}
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
