import WhoToFollowListItem from "./whotofollowlistitem";
import who from "./who.js"

const WhoToFollowList = () => {
   return (`
           <ul class="list-group">
           ${who.map((wh) => WhoToFollowListItem(wh))}
           </ul>
`); }
export default WhoToFollowList;