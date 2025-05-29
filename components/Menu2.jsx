"use client"
import React, { useRef } from "react"
import { useState, useEffect } from 'react'
import useUIState2 from "@/hooks/useUIState2";
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'



export default function Menu2(props) {
  const { push } = useRouter();
  const { homeCategory2, setHomeCategory2, setHeaderImageSrc2, headerImageSrc2} = useUIState2();
  let total = props
  const homeCategoryList = [
       {
      label: "시설안내",
      src: "/dastory/pro",
    },
    {
      label: "방-Type A",
      src: "/dastory/reser",
    },
    {
      label: "방-Type B",
      src: "/dastory/jun",
    },
     {
      label: "방-Type C",
      src: "/dastory/gyu",
    },
    {
      label: "공용시설",
      src: "/dastory/gong",
    },
  ];

 

  const onClickCategory = (item) => {
    if (homeCategory2 === item.label) {
      setHeaderImageSrc2("");
      setHomeCategory2(item.label);
    } else {
      setHeaderImageSrc2(item.src);
      setHomeCategory2(item.label);
      push(item.src, {scroll: false})
    }
  };

  useEffect(() => {
    slideRight()

}, [headerImageSrc2]);





const slideRight = () => {
  var slider = document.getElementById('nav2');
  // slider.scroll(100, 400)
  // console.log(slider.offsetWidth)
  // if (headerImageSrc === "/dastory/reser") {
  //   slider.scroll(100, 200)
  // }
  // if (headerImageSrc === "/dastory/pro") {
  //   slider.scroll(200, 400)
  // }
  // if (headerImageSrc === "/dastory/jun") {
  //   slider.scroll(300, 500)
  // }
  // if (headerImageSrc === "/dastory/gyu") {
  //   slider.scroll(500, 600)
  // }
};
  
  return (
    <nav id="nav2" className="md:m-0 md:px-100 ml-5 w-full+10 flex gap-2 overflow-x-auto md:pr-0 pr-4">
    {homeCategoryList.map((item, i) => {
      return (
        <div
          onClick={() => onClickCategory(item)}
          key={item.label}
          id={i}
          className={cn(
            "h-[38px] md:text-[15px] text-[14px] text-white min-w-fit px-2 pt-2 flex justify-center items-center",
            total.total&&"md:text-black text-[#aaa]",
            item.label === homeCategory2 &&
              "font-semibold text-black"
          )}
        >
            {item.label}
        </div>
        
      );
    })}
  </nav>
  )
}


