"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import useUIState from "@/hooks/useUIState";




const Sisul = () => {
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
      <section className='md:hidden flex flex-col justify-center items-center'>
            
            <div className='flex flex-col'>
            <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
                <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
                  <div className='flex flex-row gap-2'>
                     <div className='lg:px-0 flex flex-col h-[40px] justify-end'>
                      <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>소개</div>
                      <hr className="mt-1 h-0.5 md:block hidden bg-[#474b53] border-t-0 opacity-100 w-[40px] dark:opacity-50"/>
                  </div>
                  </div>
                <hr className="mt-1 h-0.5 md:bg-[#7f88e8] bg-white border-t-0 opacity-100 w-[70px] dark:opacity-50"/>
             </div>
             </div>
             </div>
            
             
             <div className='md:mt-7 mt-2' />
      
             <div className='relative md:hidden flex flex-row w-full px-3 py-1 justify-center items-start rounded-md gap-1' 
             onClick={() => { push("/dae")}} >
                <Image
                  alt="mediaItem"
                  className="w-full h-[155px] rounded-md"
                  width={225}
                  height={155}
                  src={"/Image/mosahEK0nY.jpeg"}
                />
          
             </div>
           <div className='flex md:p-0 p-3 flex-col md:w-[1100px] w-full'>
              <div className='md:mt-10' />
                <div className='text-[15px] text-[#222222] block md:hidden truncate text-start'>
                 <p className="text_intro _remark_text">
                    <br />
                    울산 남구 달동 롯데마트 사거리에 위치. <br />☎ 052-988-0070 / 010-4555-0068{" "}
                  </p></div>
                <div className='md:mt-10 mt-2' />
                {/* <div className='md:hidden flex flex-col h-[40px] justify-end'>
                <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
                <div className='md:mt-10 mt-3' />
                <div className='lg:text-end text-center text-[14px]' onClick={() => { widths ? setWidths(false) : setWidths(true)}}>{widths === false ? "열기" : "닫기"} &nbsp;</div>
                </div> */}
              </div>  
             </section>
    </div>
  )
}

export default Sisul
