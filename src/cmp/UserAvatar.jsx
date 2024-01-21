
import { utilService } from "/src/services/util.service.js";

export function UserAvatar({ userFullName, userImg="/public/imgs/defaultUserImg.png" }) {

  function getUserTxtColor() {
    console.log(utilService.isImgDark(userImg))
    if (utilService.isImgDark(userImg))
      return "white"
    return "black"
  }

  return <button className="user-avatar" style={{ backgroundImage: `url(${userImg})`, color: getUserTxtColor() }}>
    <data>{utilService.getUserShortName(userFullName)}</data>
  </button>

}