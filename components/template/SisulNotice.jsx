"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import useUIState from "@/hooks/useUIState";

const SisulNotice = () => {
   const { push } = useRouter();
       const [ widths, setWidths ] = useState(false);
       const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
     
    
       const onClickCategory = (item ,src) => {
        if (homeCategory === item) {
          setHeaderImageSrc("");
          setHomeCategory(item);
        } else {
          setHeaderImageSrc(src);
          setHomeCategory(item);
          push(src)
        }
      };



      
  return (
    <div>
         <section className='flex flex-col justify-center items-center'>
    
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>안내</div>
          <hr className="mt-1 h-0.5 md:block hidden border-t-0 bg-neutral-700 opacity-100 w-[40px] dark:opacity-50"/>
       </div>
          <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("안내" ,"/si")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1060px]"/>
       </div>
       </div>
       </div>
      
       <div className='md:mt-7' />
       <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-start items-start gap-10'>
        <div className='relative md:w-[530px] w-full h-[353px]'>
       <Image
          alt="mediaItem"
          className="object-cover rounded-md"
          // width={530}
          // height={353}
          fill
          src={"/Image/mosahEK0nY.jpeg"}
        />  
        </div>
        <div className='flex flex-col md:w-[530px] w-full'>
          <div className="area_text">
  <div className="txt_box">
    <div className="txt_component align_l ">
      <p className="text-[15px] text-[#666666]">
      <div className="area_text">
  <div className="txt_box">
    <div className="text-[20px] text-[#222222] font-semibold">
      <h4 className="">"노동부지정 울산 건설기초안전보건교육장" </h4>
    </div>
    <div className='mt-2'/>
  </div>
  <div className="txt_box">
    <div className="text-[15px] text-[#666666]">
      <p className="_ellipsis">
        (공지) 2025년도 취약계층 무료교육 시작합니다. (1/2일부터~ 선착순)
        ●평일(월~금)오전 09:00-13:00시(4시간) ●평일(월~금)오후 13:30-17:30시(4시간)
        ●토요일 오전 09:00-13:00시(4시간) ●교육후 당일 이수증 발급 가능 ●교육비:
        7만원(현금/카드/이체가능) ●준비물: 신분증 (이수증 사진 촬영 무료)
        "고용노동부와 안전보건공단 지정교육기관" ☎전화문의: 052-988-0070 /
        010-4555-0068
      </p>
    </div>
  </div>
  <div className='mt-2'/>
</div>
      </p>
    </div>
  </div>
  <div className='mt-3'></div>
 
</div>

          <div className='md:mt-10 mt-8' />
          <div className='md:hidden block flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-10 mt-3' />
          <div className='lg:text-end text-center text-[14px]' onClick={() => {onClickCategory("안내" ,"/si")}}>더보기 &nbsp;&gt;</div>
       </div>
        </div>  
        </div>
       </section>
    </div>
  )
}

export default SisulNotice
