const PostSummaryItem = (item) => {
  return(`
    <li>
    <div>
    ${item.topic}
    </div>
    <div>
    ${item.userName}${item.item}
    </div>
    <div>
    ${item.title}
    </div>
    <img src="${item.image}" alt="../../images/avatar.png" class="rounded-circle">
    </li>`
  );
}
export default PostSummaryItem;