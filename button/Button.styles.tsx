

import styled from 'styled-components'


interface IButtonStyle {
    color?: string;
    background?: string;
    hoverColor?: string; 
    hoverBackground?: string;
    border?: string
}

export const ButtonContainer = styled.button<IButtonStyle>`
    
    cursor: pointer;
    border: ${props => props.border ? props.border : `solid .3px #fff` };
    color: ${props => props.color ? props.color : '#fff'};
    background-color: ${props => props.color ? props.color : 'transparent'};
    padding: 10px;
    width: max-content;
    transition: all .3s ease-in-out;

&:hover{
    color: ${props => props.hoverColor ? props.hoverColor : props.color || '#fff'};
    background-color: ${props => props.hoverBackground ? props.hoverBackground : props.background || 'transparent'};
}
`