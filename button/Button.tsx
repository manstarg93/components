import React, { FC } from 'react'
import { ButtonContainer } from './Button.styles'


interface IButtonProps {
    color?: string;
    background?: string;
    hoverColor?: string; 
    hoverBackground?: string;
    border?: string;
    type?: "button" | "submit" | "reset" | undefined;
    children: React.ReactNode;
    onClick?:  React.MouseEventHandler<HTMLButtonElement> 
}

const Button:FC<IButtonProps> = ({color,children,background,hoverBackground,hoverColor,type,onClick}) => {
  return (
  <ButtonContainer color={color} background={background} hoverBackground={hoverBackground} hoverColor={hoverColor} type={type} onClick={onClick}  >
      {children}
  </ButtonContainer>
  )
}

export default Button