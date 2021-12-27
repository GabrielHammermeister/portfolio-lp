import { ReactNode } from 'react'
import * as S from './Typography.styles'

type Props = {
   type:
      | 'heading-1'
      | 'heading-2'
      | 'heading-3'
      | 'body'
      | 'text-button'
      | 'button'
      | 'chip'
      | 'label'
   children: ReactNode
}

const Typography = ({ type, children }: Props) => {
   switch (type) {
      case 'heading-1':
         return <S.Heading1>{children}</S.Heading1>
      case 'heading-2':
         return <S.Heading2>{children}</S.Heading2>
      case 'heading-3':
         return <S.Heading3>{children}</S.Heading3>
      case 'body':
         return <S.Body>{children}</S.Body>
      case 'text-button':
         return <S.TextButton>{children}</S.TextButton>
      case 'button':
         return <S.LabelButton>{children}</S.LabelButton>
      case 'chip':
         return <S.Chip>{children}</S.Chip>
      case 'label':
         return <S.Label>{children}</S.Label>
      default:
         return <></>
   }
}

export default Typography
