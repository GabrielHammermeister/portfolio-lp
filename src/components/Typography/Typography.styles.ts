import styled from 'styled-components'

type Props = {
   textColor: string
}

export const MainTitle = styled.h1<Props>`
   font-size: 2.375rem;
   color: ${(props) => props.textColor};
   font-weight: 800;
   margin-bottom: 20px;
   text-transform: uppercase;
`
export const Heading1 = styled.h1<Props>`
   font-size: 2.375rem;
   color: ${(props) => props.textColor};
   font-weight: 600;
   margin-bottom: 20px;
`
export const Heading2 = styled.h2<Props>`
   font-size: 2rem;
   color: ${(props) => props.textColor};
   line-height: 2.875rem;
   font-weight: 700;
`
export const Heading3 = styled.h3<Props>`
   font-size: 1.5rem;
   color: ${(props) => props.textColor};
   font-weight: 500;
`
export const Body = styled.p<Props>`
   font-size: 1.5rem;
   color: ${(props) => props.textColor};
   line-height: 170%;
   font-weight: 400;
`
export const TextButton = styled.span<Props>`
   font-size: 1.125rem;
   color: ${(props) => props.textColor};
   font-weight: 400;
`
export const LabelButton = styled.span<Props>`
   font-size: 1rem;
   color: ${(props) => props.textColor};
   font-weight: 400;
   line-height: 130%;
`

export const Chip = styled.span<Props>`
   font-size: 14px;
   color: ${(props) => props.textColor};
   line-height: 170%;
   font-weight: 400;
`
export const Label = styled.span<Props>`
   font-size: 12px;
   color: ${(props) => props.textColor};
   font-weight: 400;
`

export const Link = styled.a<Props>`
   color: ${(props) => props.textColor};

   &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      cursor: pointer;
   }
`
