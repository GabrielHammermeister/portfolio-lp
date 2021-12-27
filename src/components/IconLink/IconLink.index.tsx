import * as S from './IconLink.styles'
import Link from 'next/link'
import { Children } from 'react'

type Props = {
   href: string
}

const IconLink = ({ href }: Props) => <Link href={href}>{Children}</Link>
export default IconLink
