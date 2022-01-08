import WorkDescription from 'components/WorkDescription/WorkDescription.index'
import { useState } from 'react'
import { Navigation, Pagination, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as S from './WorkSection.styles'

const WorkSection = () => {
   const [controlledSwiper, setControlledSwiper] = useState<any>(null)
   return (
      <S.Container id="works">
         <S.WorkThumbnail>
            <Swiper
               modules={[Navigation, Controller]}
               navigation
               slidesPerView={1}
               controller={{ control: controlledSwiper }}
            >
               <SwiperSlide
                  style={{
                     backgroundImage: 'url("/img/profile.jpg")'
                  }}
               ></SwiperSlide>
               <SwiperSlide
                  style={{
                     backgroundImage: 'url("/img/profile.jpg")'
                  }}
               ></SwiperSlide>
               <SwiperSlide
                  style={{
                     backgroundImage: 'url("/img/profile.jpg")'
                  }}
               ></SwiperSlide>
            </Swiper>
         </S.WorkThumbnail>

         <S.WorkDescription>
            <Swiper
               modules={[Controller, Pagination]}
               onSwiper={setControlledSwiper}
               pagination={{ clickable: false }}
               allowTouchMove={false}
               allowSlideNext={false}
               allowSlidePrev={false}
            >
               <SwiperSlide>
                  <WorkDescription />
               </SwiperSlide>
               <SwiperSlide>
                  <WorkDescription />
               </SwiperSlide>
               <SwiperSlide>
                  <WorkDescription />
               </SwiperSlide>
            </Swiper>
         </S.WorkDescription>
      </S.Container>
   )
}

export default WorkSection
