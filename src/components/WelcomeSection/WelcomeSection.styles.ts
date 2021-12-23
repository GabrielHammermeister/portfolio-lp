import styled from 'styled-components'

export const Container = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0 25px;

   & h1 {
      margin-bottom: 20px;
   }

   & p {
      margin-bottom: 27px;
   }
`

export const ProfileImage = styled.div`
   overflow: hidden;
   border-radius: 50%;
   height: 170px;
   width: 170px;
   margin-bottom: 35px;
   filter: drop-shadow(-5px 7px 0px #99c3cf);
   & img {
      object-fit: cover;
      width: 100%;
   }
`
