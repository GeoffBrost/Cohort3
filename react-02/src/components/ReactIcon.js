import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon'
import { home2 } from 'react-icons-kit/icomoon'
import { home3 } from 'react-icons-kit/icomoon'
import {neutral} from 'react-icons-kit/icomoon/neutral'

//lets say the icons on your side navigation are all color red
const SideIconContainer = 
    withBaseIcon({ size: 64, style: {color: '#fc962b'}})

export const HomeIcon1 = () => <SideIconContainer icon={home}/>
export const HomeIcon2 = () => <SideIconContainer icon={home2}/>
export const HomeIcon3 = () => <SideIconContainer icon={home3}/>
export const Neutral = () => <SideIconContainer icon={neutral} />
