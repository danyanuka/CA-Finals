import { useEffect, useState } from "react";

import { utilService } from "/src/services/util.service.js";


export function UserAvatar({ userFullName, userImg }) {

  const [isDarkImg, setIsDarkImg] = useState(false)

  useEffect(() => {
    async function updateIsDark() {
      const isDark = await utilService.isDarkImg(userImg)
      setIsDarkImg(isDark)
    }
    updateIsDark()
  }, [])

  function isWebUrl(userImg) {
    const path = userImg.toLowerCase()
    const strToCheck = ["http", "//", "www"]
    return 0 < strToCheck.filter((st) => path.includes(st)).length
  }

  function isValidUrl(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  return <button className="user-avatar" style={{ backgroundImage: `url(${userImg})`, backgroundColor: "#C0C0C0", color: (isDarkImg ? "white" : "black") }}>
    {
      !isValidUrl(userImg) &&
      <data>{utilService.getUserShortName(userFullName)}</data>
    }
  </button>
}