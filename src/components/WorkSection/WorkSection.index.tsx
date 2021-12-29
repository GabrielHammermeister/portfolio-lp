import Typography from 'components/Typography/Typography.index'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as S from './WorkSection.styles'

const WorkSection = () => (
   <S.Container>
      <S.WorkThumbnail>
         <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination
            slidesPerView={1}
            onSlideChange={() => console.log('Slide changed')}
         >
            <SwiperSlide>slide 1</SwiperSlide>
            <SwiperSlide>slide 2</SwiperSlide>
            <SwiperSlide>slide 3</SwiperSlide>
         </Swiper>
      </S.WorkThumbnail>

      <S.WorkDescription>
         <Typography type="heading-2" color="primary">
            Works
         </Typography>
         <Typography type="heading-3" color="primary">
            Simon Game
         </Typography>
         <Typography type="body" color="dark">
            An inquisitive Computer Science Engineering student, skilled in
            leadership, seeking to leverage solid development skills with focus
            on collaboration, communication and passion.
         </Typography>
      </S.WorkDescription>
   </S.Container>
)

export default WorkSection
