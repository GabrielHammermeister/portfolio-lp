import styled from 'styled-components'

export const Container = styled.main`
   height: 70vh;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #010012;
      clip-path: polygon(0 0, 100% 0, 100% 41%, 26% 100%, 0 100%);
   }
`
