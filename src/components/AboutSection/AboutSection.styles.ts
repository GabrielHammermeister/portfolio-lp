import styled from 'styled-components'

export const Container = styled.main`
   height: 70vh;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -20%;
      background-image: url('/backgrounds/large-triangles.svg');
      clip-path: polygon(0 0, 100% 0, 100% 40%, 0% 100%, 0 100%);
   }
`
