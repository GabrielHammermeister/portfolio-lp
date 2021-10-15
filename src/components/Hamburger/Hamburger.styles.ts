import styled from 'styled-components'

export const Wrapper = styled.label`
   display: flex;
   flex-direction: column;
   width: 35px;
   cursor: pointer;
   gap: 7px;

   & span {
      background: black;
      border-radius: 10px;
      height: 4px;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
   }

   span:nth-of-type(1) {
      width: 50%;
   }

   span:nth-of-type(2) {
      width: 100%;
   }

   span:nth-of-type(3) {
      width: 75%;
   }
   & input {
      display: none;
   }

   & input:checked ~ span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(8px, 0px);
   }
   & input:checked ~ span:nth-of-type(2) {
      transform-origin: top;
      transform: rotatez(-45deg);
   }
   & input:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 50%;
      transform: translate(30px, -11px) rotatez(45deg);
   }
`
