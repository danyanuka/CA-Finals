import { useEffect, useState } from "react";

import { utilService } from "/src/services/util.service.js";


export function UserAvatar({ userFullName, userImg = "/public/imgs/defaultUserImg.png" }) {

  const [isDarkImg, setIsDarkImg] = useState(true)

  useEffect(() => {
    async function updateIsDark() {
      const isDark = await utilService.isDarkImg(userImg)
      console.log("meitar: ", isDark)
      setIsDarkImg(isDark)
    }
    updateIsDark()
  }, [])

  function isWebUrl(userImg) {
    const path = userImg.toLowerCase()
    const strToCheck = ["http", "//", "www"]
    return 0 < strToCheck.filter((st) => path.includes(st)).length
  }

  return <button className="user-avatar" style={{ backgroundImage: `url(${userImg})`, color: (isDarkImg ? "white" : "black") }}>
    {
      !isWebUrl(userImg) &&
      <data>{utilService.getUserShortName(userFullName)}</data>
    }
  </button>
}