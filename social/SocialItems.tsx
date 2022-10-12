import React from 'react'
import Icon from '../icon/Icon'
import { SocialItemContainer, SocialItemsLink } from './SocialItems.styles'
import {Facebook, LinkedIn, GitHub, Google} from '@mui/icons-material'
const SocialItems = () => {

   

  return (
    <SocialItemContainer>
        <SocialItemsLink href='https://github.com/manstarg93' target={'_blank'}>
        <Icon Icon={<GitHub/>}/>
        </SocialItemsLink>

        <SocialItemsLink href='https://www.linkedin.com/in/samuel-simon-a23900189/' target={'_blank'}>
        <Icon Icon={<LinkedIn/>}/>
        </SocialItemsLink>

        <SocialItemsLink href='https://www.facebook.com/sammydads'  target={'_blank'}>
        <Icon Icon={<Facebook/>}/>
        </SocialItemsLink>

        <SocialItemsLink href='mailto:manstarg93@gmail.com' target={'_blank'} >
        <Icon Icon={<Google/>}/>
        </SocialItemsLink>
        
    </SocialItemContainer>
  )
}

export default SocialItems