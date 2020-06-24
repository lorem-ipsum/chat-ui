
import React from 'react'
import Icon from '.'
import {ReactComponent as SmileIcon} from 'assets/icon/smile.svg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCommentDots} from '@fortawesome/free-solid-svg-icons'

export default {
  title: "UI components/Icon",
  component: Icon
}

export const Default = () => <Icon icon={SmileIcon} />

export const CustomColor = () => <Icon icon={SmileIcon} color="#cccccc" />

export const CustomSize = () => <Icon width={48} height={48} icon={SmileIcon} color="#cccccc" />

export const FontAwesome = () => <FontAwesomeIcon icon={faCommentDots} />

export const FontAwesomeColor = () => <FontAwesomeIcon icon={faCommentDots} color="#cccccc" />

export const FontAwesomeSizes = () => <FontAwesomeIcon icon={faCommentDots} style={{fontSize: "240px"}} />