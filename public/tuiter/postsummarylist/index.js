import posts from "./posts";
import PostSummaryItem from "./postsummaryitem";

const PostSummaryList = () => {
   return (`
           <ul class="list-group">
           ${posts.map((p) => PostSummaryItem(p))}
           </ul>
`); }
export default PostSummaryList;
