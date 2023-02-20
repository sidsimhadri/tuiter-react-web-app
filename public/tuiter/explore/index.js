import NavigationSidebar from "./NavigationSidebar/index.js";
import ExploreComponent from "./explorecomponent.js";
import WhoToFollowList from "../whotofollowlist/index.js";
/* eslint-env jquery */

function explorePage() {
   $('#wd-explore').append(`
       <h2>Explore</h2>
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-warning">
    ${NavigationSidebar}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 bg-primary">
    ${ExploreComponent}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-danger">
    ${WhoToFollowList}
   </div>
  </div>
   `);
}
$(explorePage);