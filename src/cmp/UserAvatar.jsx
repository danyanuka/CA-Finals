import { useEffect, useState } from "react";

import { utilService } from "/src/services/util.service.js";
import { constService } from "/src/services/const.service.js";


export function UserAvatar({ userFullName, userImg }) {

  const [isValidImg, setIsValidImg] = useState(false)
  const [isDarkText, setIsDarkText] = useState(true)
  const [bgColor, setBgColor] = useState("#C0C0C0")

  useEffect(() => {
    async function calcImgProps() {
      const isDark = await utilService.isDarkImg(userImg)
      setIsValidImg(true)
      setIsDarkText(false)
    }

    if (userImg && isValidUrl(userImg)) {
      calcImgProps()
    } else {
      const defaultColors = constService.defaultAvatarColor
      const calcLength = userFullName?.length ? userFullName.length : 0
      const calcIndx = calcLength % defaultColors.length
      const userColor = defaultColors[calcIndx]
      const isDark = utilService.isDarkColor(userColor)
      setBgColor(userColor)
      setIsDarkText(!isDark)
    }
  }, [])

  function isValidUrl(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  function buildStyles() {
    const styleProps = {}
    styleProps.backgroundImage = `url(${userImg})`
    styleProps.backgroundColor = bgColor
    styleProps.color = isDarkText ? "black" : "white"
    return styleProps
  }

  return <button className="user-avatar" style={buildStyles()}>
    {
      !isValidImg &&
      <data>{utilService.getUserShortName(userFullName)}</data>
    }
  </button>
}