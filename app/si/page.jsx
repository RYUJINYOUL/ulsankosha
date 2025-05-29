import React from 'react'
import Image from "next/image";
import Footer from '@/components/template/Footer'

function page (){
  return (
    <div>
    <div className='md:my-25 my-15 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
    
          <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>시술은 이곳</div>
          <hr className="mt-1 h-0.5 md:bg-neutral-700 bg-white border-t-0 bg-neutral-700 opacity-100 w-[100px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1000px]"/>
       </div>
       </div>
       </div>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosavaDBzK.jpeg"}
          />

           <div className='flex flex-col md:w-[1100px] w-full md:mt-20 mt-5'>
            <div className='text-[15px] font-semibold'>사용제품</div>
            <div className='text-[16px] mt-3'>염모제</div>
          </div>

          <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosaFR4K8d.jpeg"}
          />

          <div className='flex flex-col md:w-[1100px] w-full md:mt-20 mt-5'>
            <div className='text-[15px] font-semibold'>헤어제품</div>
            <div className='text-[16px] mt-3'>모발과 두피제품</div>
          </div>


           <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosaIM88Uk.jpeg"}
          />
         
           <div className='mt-7' />
    
      
       </section>

       <div className='h-[150px]'/>
      
       </div>
        <Footer />
       </div>
  )
}

export default page
