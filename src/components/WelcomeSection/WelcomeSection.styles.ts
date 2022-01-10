import { Link } from 'components/IconLink/IconLink.styles'
import styled from 'styled-components'

interface Props {
   backgroundImage: string
   backgroundDecoration: string
}

export const Container = styled.main`
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   /* background-image: url('/backgrosunds/large-triangles.svg'); */
   height: 100vh;
   padding: 10vh 50px;
   gap: 55px;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background-color: red; */
   }

   @media (min-width: 900px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
   }

   @media (min-width: 500px) {
      padding: 10vh 100px;
   }
   @media (min-width: 900px) {
      padding: 10vh 150px;
   }
`
export const ProfileImage = styled.div<Props>`
   height: 100%;
   width: 100%;
   min-width: 50%;
   max-height: 55%;
   max-width: 90%;
   padding: 20px 20px 0;

   margin: 0 auto;

   background-image: ${({ backgroundImage, backgroundDecoration }) =>
      `url(${backgroundImage}), url(${backgroundDecoration})`};
   background-origin: content-box, border-box;
   background-position: top, top left;
   background-size: cover, 100px;
   background-repeat: no-repeat, no-repeat;
   clip-path: polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%);

   @media (min-width: 500px) {
      background-size: cover, 120px;
      max-height: 60%;
      max-width: 70%;
      padding: 40px 40px 0;
   }
   @media (min-width: 900px) {
      background-size: cover, 140px;
      max-height: 100%;
      max-width: 45%;
      min-width: 40%;
   }
`

export const Content = styled.aside`
   flex: 1;
   text-align: center;
   & h2 {
      margin-bottom: 1.4rem;
   }

   & p {
      margin-bottom: 3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      line-clamp: 4;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
   }

   @media (max-width: 900px) {
      & ${Link} {
         display: none;
      }
   }

   @media (min-width: 900px) {
      text-align: left;
      padding-top: 6.25rem;
      display: flex;
      flex-direction: column;
      max-width: 900px;
   }
`

export const LinksContainer = styled.div`
   color: ${({ theme }) => theme.text.dark};
   font-size: 32px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 30px;

   @media (min-width: 900px) {
      justify-content: flex-start;
   }
`

export const Button = styled.button`
   color: ${({ theme }) => theme.text.light};
   border: none;
   padding: 10px 20px;
   border-radius: 2px;
   height: 47px;
   background: ${({ theme }) => theme.background.primary};

   font-size: 20px;
   font-weight: 500;
   line-height: 29px;
`
