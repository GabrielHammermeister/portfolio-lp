import { ReactNode } from 'react'
import { colorTheme } from 'themes/colorTheme'
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
      | 'main-title'

   color: 'primary' | 'light' | 'dark'
   children: ReactNode
}

const Typography = ({ type, children, color }: Props) => {
   switch (type) {
      case 'main-title':
         return (
            <S.MainTitle textColor={colorTheme.text[color]}>
               {children}
            </S.MainTitle>
         )
      case 'heading-1':
         return (
            <S.Heading1 textColor={colorTheme.text[color]}>
               {children}
            </S.Heading1>
         )
      case 'heading-2':
         return (
            <S.Heading2 textColor={colorTheme.text[color]}>
               {children}
            </S.Heading2>
         )
      case 'heading-3':
         return (
            <S.Heading3 textColor={colorTheme.text[color]}>
               {children}
            </S.Heading3>
         )
      case 'body':
         return <S.Body textColor={colorTheme.text[color]}>{children}</S.Body>
      case 'text-button':
         return (
            <S.TextButton textColor={colorTheme.text[color]}>
               {children}
            </S.TextButton>
         )
      case 'button':
         return (
            <S.LabelButton textColor={colorTheme.text[color]}>
               {children}
            </S.LabelButton>
         )
      case 'chip':
         return <S.Chip textColor={colorTheme.text[color]}>{children}</S.Chip>
      case 'label':
         return <S.Label textColor={colorTheme.text[color]}>{children}</S.Label>
      default:
         return <></>
   }
}

export default Typography
