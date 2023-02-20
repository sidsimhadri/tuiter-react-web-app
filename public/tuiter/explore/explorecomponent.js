import PostSummaryList
   from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <div class="input-group">
                    <input type="text" class="form-control rounded-pill" placeholder="Search Twitter">
                    <div class="input-group-append">
                    <i class="fa fa-search"></i>
                    </div>
                    <i class="fa fa-cog"></i>
                    </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <ul class="nav nav-tabs">
   <li class="nav-item">
       <a class="nav-link active" href="#">For you</a>
   </li>
   <li class="nav-item">
       <a class="nav-link" href="#">Trending</a>
   </li>
   <li class="nav-item">
       <a class="nav-link" href="#">News</a>
   </li>
   <li class="nav-item">
       <a class="nav-link" href="#">Sports</a>
   </li>
      <li class="nav-item">
       <a class="nav-link" href="#">Entertainment</a>
   </li>
</ul>
           </ul>
           <div class="list-group">
    <li class="list-group-item">
        <img src="../images/spacship.jpeg" class="img-fluid justify-content-center" alt="Responsive image">
    </li>
</div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
