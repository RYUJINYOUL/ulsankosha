import Image from "next/image";
import PagePadding from '@/components/PagePadding';

const Footer = () => {


return (
     
    <section>
    
     <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
     </section>       
     <PagePadding>     
     <div className='mt-7'/>
         <div className='md:mb-18 mb-4'>
         <div className='w-full flex flex-col justify-center items-center gap-3'>
   
          <Image
             alt="logo"
             className="object-cover rounded-full"
             width={70}
             height={70}
             src={"/Image/mosayGkZ9W.jpeg"}
           />  

            <ul className="list_info flex flex-col items-center">
                <li className='text-[#000000] text-[15px] font-semibold'>
                  <span className="item_description">바른염색</span>
                </li>
                  <li className='text-[#959595] text-[13px]'>
                  <span className="item_title">대표자 : </span>
                  <span className="item_description">장정윤</span>
                </li>
                  <li className='text-[#959595] text-[13px]'>
                  <span className="item_title">전화번호 : </span>
                  <span className="item_description">01074964899</span>
                </li>
                  <li className='text-[#959595] text-[13px]'>
                  <span className="item_title">이메일 : </span>
                  <span className="item_description">dori4899@naver.com</span>
                </li>
                  <li className='text-[#959595] text-[13px]'>
                  <span className="item_title">주소 : </span>
                  <span className="item_description">경기도 성남시 분당구 돌마로67 202호</span>
                </li>
                  <li className='text-[#959595] text-[13px]'>
                  <span className="item_title">사업자정보 : </span>
                  <span className="item_description">
                                364-05-02381
                            </span>
                </li>
                <div className='mt-5'/>  
                        
                        <a href='https://m.search.naver.com/search.naver?query=%EB%B0%94%EB%A5%B8%EC%97%BC%EC%83%89%40' target='_blank'>
                        <li className='text-[#959595] p-2 text-[13px] border-1 border-[#9d9d9d]'>
                          <span className="item_title">바른생각@ </span>
                        </li>
                        </a>
              </ul>
           </div>
         </div>
          </PagePadding> 
      <div className='mt-7'/>    
      <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>   
     </section>
 )
}

export default Footer;