/* eslint-disable @typescript-eslint/no-explicit-any */
import WorkDescription from 'components/WorkDescription/WorkDescription.index'
import { useState } from 'react'
import { Navigation, Pagination, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as S from './WorkSection.styles'

const WorkSection = () => {
   // const [controlledSwiper, setControlledSwiper] = useState<any>(null)
   return (
      <S.Container>
         <S.CarouselContainer></S.CarouselContainer>
      </S.Container>
   )
}

export default WorkSection
