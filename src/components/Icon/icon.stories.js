
import React from 'react'
import Icon from '.'
import {ReactComponent as SmileIcon} from 'assets/icon/smile.svg'

export default {
  title: "UI components/Icon",
  component: Icon
}

export const Default = () => <Icon icon={SmileIcon} />

export const CustomColor = () => <Icon icon={SmileIcon} color="#cccccc" />

export const CustomSize = () => <Icon width={48} height={48} icon={SmileIcon} color="#cccccc" />