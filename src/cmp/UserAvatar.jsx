import { useEffect, useState } from "react";

import { utilService } from "/src/services/util.service.js";


export function UserAvatar({ userFullName, userImg="/public/imgs/defaultUserImg.png" }) {

  const [isDarkImg, setIsDarkImg] = useState(true)

  useEffect(() => {
    async function updateIsDark() {
      const isDark = await utilService.isDarkImg(userImg)
      console.log("meitar: ", isDark)
      setIsDarkImg(isDark)
    }
    updateIsDark()
  }, [])

  return <button className="user-avatar" style={{ backgroundImage: `url(${userImg})`, color: (isDarkImg ? "white" : "black") }}>
    <data>{utilService.getUserShortName(userFullName)}</data>
  </button>
}