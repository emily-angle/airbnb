import React, { memo } from 'react'
import IconLogo from '@/assets/svg/icon-logo'
import { HeaderLeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <a className='logo' href='/'>
      <IconLogo/>
      </a>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft