import React, { FC } from 'react'
import { TextBackgroundContainer, TextBackgroundText } from './TextBackground.styles'


interface iTextBackgroundProps {
    text: string;
    paddingTop?: string;
    textAlign?: 'start' | 'center' | 'end' | undefined;
    textBackgroundPosition?: 'absolute' | 'relative' | 'initial' | undefined;
    color?: string;
    backgroundColor?: string

}

const TextBackGround:FC<iTextBackgroundProps> = ({text,paddingTop,textAlign,textBackgroundPosition,color,backgroundColor}) => {
    console.log(textBackgroundPosition)
  return (
   <TextBackgroundContainer textBackgroundPosition={textBackgroundPosition} backgroundColor={backgroundColor}>
       <TextBackgroundText textAlign={textAlign}   paddingTop={paddingTop} color={color}>{text}</TextBackgroundText>
      
   </TextBackgroundContainer>
  )
}

export default TextBackGround