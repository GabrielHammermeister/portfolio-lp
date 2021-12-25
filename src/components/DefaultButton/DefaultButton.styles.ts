import styled from 'styled-components'

export const Button = styled.button`
   color: white;
   border: none;
   padding: 10px 20px;
   border-radius: 2px;
   height: 47px;
   background: ${(props) => props.theme.primary};

   font-size: 20px;
   font-weight: 500;
   line-height: 29px;
`
