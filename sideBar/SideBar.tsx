import React, { FC } from 'react'
import Modal from '../modal/Modal'
import { SidebarContainer } from './SideBar.styles'

interface ISideBarProps {
    show: boolean,
    close: React.MouseEventHandler<HTMLDivElement>
    children: React.ReactNode;
    align?: 'left' | 'right' | undefined;
}


const SideBar:FC<ISideBarProps> = ({show,close,children,align}) => {

    console.log(show)

  return (
      <Modal show={show} close={close}>
 <SidebarContainer align={align}>
    {children}
 </SidebarContainer>
      </Modal>
   
  )
}

export default SideBar