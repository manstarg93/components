import styled from "styled-components";
import { device } from "../../../styles/mediaquery";





interface iTextContainerStyle {
    backgroundColor?:string
    textBackgroundPosition?: 'absolute' | 'relative' | 'initial' | undefined;
}

interface ITextStyle {
    paddingTop?: string;
    textAlign?: string | undefined;
    color?:string
}

export const TextBackgroundContainer = styled.div<iTextContainerStyle>`
   
    background-color: ${ props => props.backgroundColor ? props.backgroundColor :   '#1d1d1d'};
    position: absolute;
    position: ${props => props.textBackgroundPosition ? props.textBackgroundPosition : 'absolute' };
    height: 100%;

    right: 0;
    left: 0;
    
    display: none;
    justify-content: center;
  
 
    @media ${device.tablet}{
        display: flex;
    }
`
export const TextBackgroundText = styled.h1<ITextStyle>`
    font-size: 15rem;
    text-align: ${props => props.textAlign ? props.textAlign : 'end'};
    opacity: .5;
    color: ${ props => props.color ? props.color :  '#444444'};
    padding: 20px ;
    margin: 0;
    width: 100%;
    padding-top: ${props => props.paddingTop && props.paddingTop };
    display: none;
 
 
    @media ${device.tablet}{
        display: block;
    }

`