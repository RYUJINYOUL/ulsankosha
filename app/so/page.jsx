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
          <div className='lg:text-start font-semibold text-center text-[20px]'>염색전문점 창업</div>
          <hr className="mt-1 h-0.5 md:bg-neutral-700 bg-white border-t-0 bg-neutral-700 opacity-100 w-[130px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[970px]"/>
       </div>
       </div>
       </div>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={560}
            src={"/Image/mosaLIGRXV.jpeg"}
          />

           <div className='flex flex-col md:w-[1100px] w-full md:mt-20 mt-5'>
            <div className='text-[20px] text-[#474B53] font-semibold'>바른염색 창업컨설팅</div>
            <div className='text-[15px] text-[#333333] mt-10'>
              <p>
                  성공적인&nbsp;창업의&nbsp;첫걸음을&nbsp;함께합니다!
                  <br />
                  <br />
                  창업의&nbsp;꿈을&nbsp;가지고&nbsp;계신가요?&nbsp;바른염색&nbsp;창업컨설팅과&nbsp;함께라면&nbsp;성공적인&nbsp;미래가&nbsp;보장됩니다.
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;왜&nbsp;바른염색&nbsp;창업컨설팅인가?
                  <br />
                  <br />
                  1.&nbsp;전문성
                  <br />
                  &nbsp;오랜&nbsp;경험과&nbsp;노하우:&nbsp;바른염색은&nbsp;다년간의&nbsp;경험을&nbsp;통해&nbsp;축적된&nbsp;전문성과&nbsp;노하우를&nbsp;보유하고&nbsp;있습니다.&nbsp;성공적인&nbsp;창업을&nbsp;위해&nbsp;필요한&nbsp;모든&nbsp;정보를&nbsp;제공합니다.
                  <br />
                  맞춤형&nbsp;컨설팅:고객의&nbsp;상황과&nbsp;목표에&nbsp;맞춘&nbsp;맞춤형&nbsp;컨설팅을&nbsp;통해&nbsp;창업의&nbsp;모든&nbsp;과정을&nbsp;세심하게&nbsp;안내해&nbsp;드립니다.
                  <br />
                  <br />
                  2.&nbsp;종합적인&nbsp;지원
                  <br />
                  -시장&nbsp;분석:&nbsp;철저한&nbsp;시장&nbsp;분석을&nbsp;통해&nbsp;창업의&nbsp;가능성을&nbsp;극대화합니다.&nbsp;경쟁&nbsp;분석,&nbsp;트렌드&nbsp;파악&nbsp;등을&nbsp;통해&nbsp;성공적인&nbsp;전략을&nbsp;수립합니다.
                  <br />
                  -&nbsp;비즈니스&nbsp;플랜&nbsp;작성:&nbsp;실현&nbsp;가능한&nbsp;비즈니스&nbsp;플랜을&nbsp;작성하여&nbsp;창업&nbsp;초기의&nbsp;불확실성을&nbsp;최소화합니다.&nbsp;자금&nbsp;계획,&nbsp;마케팅&nbsp;전략,&nbsp;운영&nbsp;계획&nbsp;등&nbsp;모든&nbsp;부분을&nbsp;꼼꼼하게&nbsp;준비해&nbsp;드립니다.
                  <br />
                  -&nbsp;실전&nbsp;교육:&nbsp;현장에서&nbsp;바로&nbsp;적용&nbsp;가능한&nbsp;실전&nbsp;교육을&nbsp;제공합니다.&nbsp;이론과&nbsp;실습을&nbsp;병행하여&nbsp;창업에&nbsp;필요한&nbsp;기술과&nbsp;지식을&nbsp;완벽하게&nbsp;습득할&nbsp;수&nbsp;있습니다.
                  <br />
                  <br />
                  3.&nbsp;지속적인&nbsp;사후&nbsp;관리
                  <br />
                  -&nbsp;1:1&nbsp;멘토링:&nbsp;창업&nbsp;이후에도&nbsp;지속적인&nbsp;1:1&nbsp;멘토링을&nbsp;통해&nbsp;성장과&nbsp;발전을&nbsp;도모합니다.&nbsp;문제&nbsp;발생&nbsp;시&nbsp;신속한&nbsp;해결책을&nbsp;제시하여&nbsp;안정적인&nbsp;운영을&nbsp;지원합니다.
                  <br />
                  <br />
                </p>

            </div>
          </div>

         
    
      
       </section>

       <div className='h-[150px]'/>
      
       </div>
        <Footer />
       </div>
  )
}

export default page
