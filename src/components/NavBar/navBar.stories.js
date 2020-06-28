
import React from 'react'
import NavBar, { MenuItem } from '.'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import 'styled-components/macro'

export default {
  title: "Page Component/NavBar",
  component: NavBar
}

export const Default = () => <NavBar>DEFAULT</NavBar>

export const Menu = () => {
  return (
    <div css={`background-color: ${({ theme }) => theme.darkPurple}; width: 100px`}>
      <MenuItem showBadge active icon={faCommentDots} />
    </div>
  )
}