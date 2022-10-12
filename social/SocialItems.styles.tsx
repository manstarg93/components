import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { variables } from '../../../styles/variables'


export const SocialItemContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        display: block;
        width: 1px;
        text-align: center;
        height: 100px;
        background-color: '#fff';
    }

    &::after {
        content: "";
        display: block;
        width: 1px;
        text-align: center;
        height: 100px;
        background-color: '#fff';
    }
`

export const SocialItemsLink = styled.a`
    text-decoration: none;
`
