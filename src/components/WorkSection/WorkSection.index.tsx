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
               modules={[Navigation, Pagination, Controller]}
               navigation
               pagination
               slidesPerView={1}
               controller={{ control: controlledSwiper }}
            >
               <SwiperSlide
                  style={{
                     background:
                        'url("/img/fruits-thumb.jpg"), url("/img/BG.svg")'
                  }}
               ></SwiperSlide>
               <SwiperSlide
                  style={{
                     background: 'url("/img/profile.jpg"), url("/img/BG.svg")'
                  }}
               ></SwiperSlide>
               <SwiperSlide
                  style={{
                     background:
                        'url("/img/fruits-thumb.jpg"), url("/img/BG.svg")'
                  }}
               ></SwiperSlide>
            </Swiper>
         </S.WorkThumbnail>

         <S.WorkDescription>
            <Swiper modules={[Controller]} onSwiper={setControlledSwiper}>
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
