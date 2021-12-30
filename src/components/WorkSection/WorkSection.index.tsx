import SkillChip from 'components/SkillChip/SkillChip.index'
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
         >
            <SwiperSlide
               style={{
                  background: 'url("/img/fruits-thumb.jpg"), url("/img/BG.svg")'
               }}
            ></SwiperSlide>
            <SwiperSlide
               style={{
                  background: 'url("/img/profile.jpg"), url("/img/BG.svg")'
               }}
            ></SwiperSlide>
            <SwiperSlide
               style={{
                  background: 'url("/img/fruits-thumb.jpg"), url("/img/BG.svg")'
               }}
            ></SwiperSlide>
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
         <S.SkillContainer>
            <SkillChip>HTML</SkillChip>
            <SkillChip>CSS</SkillChip>
            <SkillChip>JavaScript</SkillChip>
         </S.SkillContainer>
         {/* <S.SwiperPagination className="swiper-pagination swiper-paginatin-horizontal">
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
         </S.SwiperPagination> */}
      </S.WorkDescription>
   </S.Container>
)

export default WorkSection
