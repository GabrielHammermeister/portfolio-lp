import styled from 'styled-components'

export const Container = styled.main`
   padding-bottom: 30px;

   @media (min-width: 500px) {
      padding-top: 40px;
      padding-bottom: 30px;
   }
   @media (min-width: 900px) {
      & p {
         font-size: 3vh;
      }
      padding-top: 80px;
   }

   & p {
      overflow: hidden;
      text-overflow: ellipsis;
      line-clamp: 4;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
   }
`

export const SkillContainer = styled.div`
   display: none;
   gap: 16px;
   margin-top: 2vh;

   @media (min-width: 900px) {
      display: flex;
   }
`
