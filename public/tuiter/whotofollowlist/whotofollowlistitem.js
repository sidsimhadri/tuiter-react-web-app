const WhoToFollowListItem = (who) => {
  return(`
    <li>
    <img src="../images/${who.avatarIcon}" alt="../../images/avatar.png" class="rounded-circle">
      (${who.userName})
      ${who.handle}
    </li>`
  );
}
export default WhoToFollowListItem;