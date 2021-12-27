import React, { ReactNode } from 'react'
import * as S from './IconLink.styles'
type Props = {
   href: string
   children: ReactNode
}

const IconLink = ({ href, children }: Props) => (
   <S.Link href={href} target="_blank">
      {children}
   </S.Link>
)
export default IconLink
