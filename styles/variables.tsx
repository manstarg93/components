
import styled, { keyframes } from "styled-components";

export const variables = {
    white: '#fff',
    black: '#000',
    blue: '#02576e',
    orange: '#ff944d',
    yellow: '#ffb200',
    purple: '#3c0263',
    red: '#fa0000',
    lightGray: '#d6d6d6;',
    gray: '#444444',
    darkGrey: '#1d1d1d',
    lightBlue: '#007da0',
    green: '#005f00',
    lightgreen: '#009c00',


    
}

export const boxShadow = (boxShadowType:string) => {
    let boxShadow;
if(boxShadowType === 'normal'){
boxShadow = '0px 5px 8px -5px rgba(0,0,0,0.41)'

}
if(boxShadowType === 'inset'){
    boxShadow=  'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;'
}
else{
    boxShadow = '0px 5px 8px -5px rgba(0,0,0,0.41)'
}

return boxShadow
}


export const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

export const fadeInTransparent = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: .8;
    }
`

export const slideInRight = keyframes`
    0%{
        opacity: 0;
        margin-right: -100%;
    }
    100%{
        opacity: 1;
        margin-right: 0;
    }
`