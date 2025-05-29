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
             src={"/Image/mainmiddle.jpeg"}
           />  

            <ul className="list_info flex flex-col items-center">
                <li className='text-[#000000] text-[15px] font-semibold'>
                 <span className="item_description">건설기초안전보건주식회사</span>
                </li>
                  <li className='text-[#959595] text-[13px]'>
                  <span className="item_title">전화번호 : </span>
                  <span className="item_description">052-988-0070</span>
                </li>
                  <li className='text-[#959595] text-[13px]'>
                  <span className="item_title">이메일 : </span>
                  <span className="item_description">seyangkorea83@naver.com</span>
                </li>
                  <li className='text-[#959595] text-[13px]'>
                      <span className="item_title">주소 : </span>
                      <span className="item_description">
                      울산 남구 삼산로 57(신정동 661-10번지), 윤영빌딩 4층</span>
                </li>
                  <li className='text-[#959595] text-[13px]'>
                  <span className="item_title">사업자정보 : </span>
                  <span className="item_description">754-86-01264</span>
                </li>
                  
                <div className='mt-5'/>  
                        
                        <a href='https://m.search.naver.com/search.naver?query=%EC%9A%B8%EC%82%B0+%EA%B1%B4%EC%84%A4+%EA%B8%B0%EC%B4%88%EC%95%88%EC%A0%84%EB%B3%B4%EA%B1%B4%EA%B5%90%EC%9C%A1%EC%9E%A5%40' target='_blank'>
                        <li className='text-[#959595] p-2 text-[13px] border-1 border-[#9d9d9d]'>
                          <span className="item_title">울산 건설 기초안전보건교육장@ </span>
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