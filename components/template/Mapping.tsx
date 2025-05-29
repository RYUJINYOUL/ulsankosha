import React from 'react'
import { CiMap } from "react-icons/ci";
import { HiArrowTurnRightUp } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
import { HiMiniMapPin } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { PiCalendarCheck } from "react-icons/pi";
import { AiOutlineCar } from "react-icons/ai";
import { IoWifiOutline } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaToiletsPortable } from "react-icons/fa6";
import useUIState from "@/hooks/useUIState";
import { cn } from "@/lib/utils";
import Map from "@/components/map"
import { usePathname } from 'next/navigation'

const Mapping = () => {
   const { push } = useRouter();
   const pathname = usePathname()
   const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();

   const onClickCategory = (item:any ,src:any) => {
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
    <div className='md:my-6 p-3.5'>
    <section className={cn('flex flex-col justify-center items-center md:pt-0' , pathname === "/map"&&'pt-15')}>
    <div className='lg:mt-13' />
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>오시는길</div>
          <hr className="mt-1 h-0.5 md:block hidden bg-[#474b53] border-t-0 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className={cn('flex flex-col md:h-[40px] h-[20px] justify-end', pathname === "/map"&&'hidden')}>
          <div className={cn('lg:text-end md:block hidden text-center text-[14px]', pathname === "/map"&&'hidden')}
          onClick={() => {onClickCategory("오시는길" ,"/map")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
       </div>
       </div>
       </div>
      </section>

      

        <section className='md:mt-7 mt-0 flex justify-center items-center'>
        <div className={cn('md:w-[1100px] md:h-[500px] w-full h-[250px] md:pt-0', pathname === "/map"&&'mt-5')}>
          <Map />
        </div>
        </section>


        <div className='md:mt-8 mt-2' />
    
    <div className='md:block hidden'>
    <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <div className='lg:text-start text-center text-[15px]'>바른염색</div>
          <div className='mt-1' />
          <div className='lg:text-start font-semibold text-[#474b53] text-center text-[26px]'>경기도 성남시 분당구 돌마로 67 2층 202호</div>
          <div className='mt-8' />
        </div>
        <div className='flex flex-row gap-2'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px] p-2 bg-[#474b53] text-white'>
          <HiArrowTurnRightUp className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p/directions/-/14149767.041377425,4488074.974544348,%EB%B0%94%EB%A5%B8%EC%97%BC%EC%83%89,,/-/transit?c=15.00,0,0,0,dh")}}>길찾기</div>
          </div>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px] p-2 bg-[#474b53] text-white'>
          <CiMap className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://m.place.naver.com/place/1148432314/location?filter=location&selected_place_id=1148432314")}}>지도에서 보기</div>
          </div>
        </div>  
      </div>
    </section>

  
    <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-col'>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        <div className='mt-7' />
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <HiMiniMapPin className='text-[20px] text-gray-400'/>
          <div className=''>오시는길</div>
          </div>
          <div className='lg:text-start text-center text-[15px]'>
             <span className='text-[15px] text-[#888] text-start'>
          미금역1번출구 한방나로병원 건물2층 노란창문을 찿아오시면 됩니다~
          <br /> 분당구 돌마로 67 킹호텔 지하주차장 이용해주세요
         
        <div className='mt-2'/>  
        </span>
          <div className='lg:text-start text-center text-[15px] flex flex-row'>
            <div className='text-[15px] text-[#888]'>주차정보 | </div>
            <div className='text-[15px] font-semibold'>&nbsp;지하주차장 이용해주세요~</div>
          </div>
          </div>
        </div>  
        <div className='mt-7' />
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
      </div>
      </section>


      <section className='flex flex-col justify-center items-center'>
           <div className='mt-7' />
      <div className='w-[1100px] flex flex-col'>
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <MdAccessTimeFilled className='text-[20px] text-gray-400'/>
          <div className=''>이용시간</div>
          </div>
           <div className='text-[15px] text-[#888] text-start'>
             <div className="flex flex-col items-start justify-center">
              <span className="flex text-[15px] text-[#888] flex-row gap-19">
               <span className="sub_title">평일</span>
               <span className="sub_text">10:00 ~ 18:00</span>
              </span>
            <div className='mt-1' />
             <span className="flex flex-row text-[15px] text-[#888] gap-19">
              <span className="sub_title">일요일</span>
              <span className="sub_text">휴무</span>
             </span>
          </div>
          </div>
        </div>  
      </div>
      </section>

      <div className='mt-7' />
    
      <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-col'>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        <div className='mt-7' />
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <HiPhone className='text-[20px] text-gray-400'/>
          <div className=''>전화번호</div>
          </div>
           <div className='text-[15px] text-[#888] text-start'>
            <a href="tel:010-7496-4899" className="_callTel">
            010-7496-4899
            </a>
          </div>
          <div className='mt-2' /> 
        </div>  
         <div className='mt-7' />
         <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>     
        <div className='mt-7' />
     
      </div>
      </section>

        <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-col'>
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <FaCircleExclamation className='text-[20px] text-gray-400'/>
          <div className=''>이용안내</div>
          </div>
           <div className='text-[15px] text-[#888] text-start'>
             <div className="flex flex-col">
            {" "}
            <span className="flex flex-row gap-12">
              <span className="flex flex-col gap-2 ">
                  <PiCalendarCheck className='text-[30px] text-[#888]' />
                  <span className="sub_title text-[15px] text-[#888]">예약</span>
              </span>
              <span className="flex flex-col gap-2">
                  <AiOutlineCar className='text-[30px] text-[#888]'/>
                  <span className="sub_title text-[15px] text-[#888]">주차</span>
              </span>
             <span className="flex flex-col items-center justify-center gap-2">
                  <IoWifiOutline className='text-[30px] text-[#888]'/>
                  <span className="sub_title text-[15px] text-[#888]">무선인터넷</span>
              </span>
               <span className="flex flex-col items-center justify-center gap-2">
                  <FaToiletsPortable className='text-[30px] text-[#888]'/>
                  <span className="sub_title text-[15px] text-[#888]">남|여 화장실 구분</span>
               </span>
            </span>{" "}
          
          </div>
          </div>
        </div>  
        <div className='mt-7' />
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
      </div>
      </section>


      <section className='flex flex-col justify-center items-center'>
           <div className='mt-7' />
      <div className='w-[1100px] flex flex-col'>
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <IoIosPerson className='text-[20px] text-gray-400'/>
          <div className=''>사업자정보</div>
          </div>
           <div className='text-[15px] text-[#888] text-start'>
             <div className="flex flex-col">
            <span className="flex text-[15px] text-[#888] flex-row gap-22">
              <span className="sub_title">상호명</span>
              <span className="sub_text">바른염색</span>
            </span>
            <div className='mt-1' />
           <span className="flex flex-row text-[15px] text-[#888] gap-22">
              <span className="sub_title">대표자</span>
              <span className="sub_text">장정윤</span>
            </span>
            <div className='mt-1' />
           <span className="flex flex-row text-[15px] text-[#888] gap-22">
              <span className="sub_title">이메일</span>
              <span className="sub_text _taxNum">dori4899@naver.com</span>
            </span>
          </div>
          </div>
        </div>  
        <div className='mt-7' />
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
      </div>
      </section>



       <div className='mt-14' />
    
   
      </div>


      

    <section className='md:hidden block'>
    <div className='flex flex-row gap-2'>
          <div className='flex rounded-md flex-row gap-1.5 lg:text-start text-center text-[12px] p-2 bg-[#474b53] text-white'>
          <HiArrowTurnRightUp className='text-[15px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p/directions/-/14149767.041377425,4488074.974544348,%EB%B0%94%EB%A5%B8%EC%97%BC%EC%83%89,,/-/transit?c=15.00,0,0,0,dh")}}>길찾기</div>
          </div>
          <div className='flex flex-row gap-1.5 rounded-md lg:text-start text-center text-[12px] p-2 bg-[#474b53] text-white'>
          <CiMap className='text-[15px]'/>
          <div className='text-white' onClick={() => {window.open("https://m.place.naver.com/place/1148432314/location?filter=location&selected_place_id=1148432314")}}>지도에서 보기</div>
          </div>
        </div>  
    </section>

    <section className='md:hidden flex justify-center items-center'>
    <div className='flex md:p-0 p-3 flex-col w-full'>
      <div className='md:mt-10 mt-2' />
      <div className='md:text-[15px] text-[#222] font-bold text-start'>바른염색</div>
        <div className='mt-1' />
        <div className='text-[15px] text-[#888] text-start'>경기도 성남시 분당구 돌마로 67 2층 202호</div>
        <div className='mt-5' />
         <div className='md:text-[15px] text-[#222] font-bold text-start'>전화번호</div>
        <div className='mt-1' />
        <div className='text-[15px] text-[#888] text-start'><a href="tel:010-7496-4899" className="_callTel">
            010-7496-4899
          </a></div>

        <div className='mt-5' />  
        <div className='md:text-[15px] text-[#222] font-bold text-start'>이용시간</div>
         <div className='mt-1' />
         <div className='text-[15px] text-[#888] text-start'>
             <div className="flex flex-col items-start justify-center">
              <span className="flex text-[15px] text-[#888] flex-row gap-19">
               <span className="sub_title">평일</span>
               <span className="sub_text">10:00 ~ 18:00</span>
              </span>
            <div className='mt-1' />
             <span className="flex flex-row text-[15px] text-[#888] gap-19">
              <span className="sub_title">일요일</span>
              <span className="sub_text">휴무</span>
             </span>
          </div>
          </div>

        <div className='mt-5' />
        <div className='md:text-[15px] text-[#222] font-bold text-start'>오시는길</div>
         <div className='mt-1' />
        <div className='text-start text-[15px]'>
             <span className='text-[15px] text-[#888] text-start'>
          미금역1번출구 한방나로병원 건물2층 노란창문을 찿아오시면 됩니다~
          <br /> 분당구 돌마로 67 킹호텔 지하주차장 이용해주세요
         
        <div className='mt-2'/>  
        </span>
          <div className='lg:text-start text-center text-[15px] flex flex-row'>
            <div className='text-[15px] text-[#888]'>주차정보 | </div>
            <div className='text-[15px] font-semibold'>&nbsp;지하주차장 이용해주세요~</div>
          </div>
          </div>
     
        <div className='mt-5' />  
        <div className='md:text-[15px] text-[#222] font-bold text-start'>주차정보</div>
         <div className='mt-1' />
         <div className='text-[15px] text-[#888] text-start'><a href="tel:010-7496-4899" className="_callTel">
            지하주차장 이용해주세요~
        </a></div>  

        <div className='mt-5' />  
        <div className='md:text-[15px] text-[#222] font-bold text-start'>사업자정보</div>
         <div className='mt-1' />
         <div className='text-[15px] text-[#888] text-start'>
             <div className="flex flex-col">
            <span className="flex text-[15px] text-[#888] flex-row gap-22">
              <span className="sub_title">상호명</span>
              <span className="sub_text">바른염색</span>
            </span>
            <div className='mt-1' />
           <span className="flex flex-row text-[15px] text-[#888] gap-22">
              <span className="sub_title">대표자</span>
              <span className="sub_text">장정윤</span>
            </span>
            <div className='mt-1' />
           <span className="flex flex-row text-[15px] text-[#888] gap-22">
              <span className="sub_title">이메일</span>
              <span className="sub_text _taxNum">dori4899@naver.com</span>
            </span>
          </div>
          </div>
      

        <div className='mt-5' />
         <div className='md:text-[15px] text-[#222] font-bold text-start'>이용안내</div>
        <div className='mt-1' />
        <div className='text-[15px] text-start'>

          <div className='text-[15px] text-[#888] text-start'>
             <div className="flex flex-col">
            {" "}
            <span className="flex flex-row gap-8">
              <span className="flex flex-col gap-2 ">
                  <PiCalendarCheck className='text-[30px] text-[#888]' />
                  <span className="sub_title text-[15px] text-[#888]">예약</span>
              </span>
              <span className="flex flex-col gap-2">
                  <AiOutlineCar className='text-[30px] text-[#888]'/>
                  <span className="sub_title text-[15px] text-[#888]">주차</span>
              </span>
             <span className="flex flex-col items-center justify-center gap-2">
                  <IoWifiOutline className='text-[30px] text-[#888]'/>
                  <span className="sub_title text-[15px] text-[#888]">무선인터넷</span>
              </span>
               <span className="flex flex-col items-center justify-center gap-2">
                  <FaToiletsPortable className='text-[30px] text-[#888]'/>
                  <span className="sub_title text-[15px] text-[#888]">남|여 화장실 구분</span>
               </span>
            </span>{" "}
          
          </div>
          </div>
          
        </div>
       

        <div className='mt-5' />
      </div>  
     </section>  

     <div className={cn('flex flex-col md:w-[530px] w-full', pathname === "/map"&&'hidden')}>
          <div className='md:hidden flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 md:hidden block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-3 mt-3' />
          <div className='lg:text-end text-center md:hidden block text-[14px]' onClick={() => {onClickCategory("오시는길" ,"/map")}}>더보기 &nbsp;&gt;</div>
       </div>
       </div>
     </div>
  )
}

export default Mapping
