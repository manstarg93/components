import styled from "styled-components";
import { device } from "../../../styles/mediaquery";
import { fadeIn, slideInRight, variables } from "../../../styles/variables";

interface ISidebarStyleProps {
    align?: 'left' | 'right' | undefined;
}

export const SidebarContainer = styled.div<ISidebarStyleProps>`
    z-index: inherit;
    width: 100%;
    background-color: ${variables.white};
        color: ${variables.darkGrey};
        position: fixed;
        top: 0;
        bottom: 0;
        left: ${props => props.align === 'left' ? 0 : 'auto'};
        right: ${props => props.align === 'right' ? 0 : 0};
        overflow: scroll;
    animation: ${fadeIn} 0.5s;
    animation-fill-mode: both;
    @media ${device.tablet}{
        width: 500px;
        animation: ${slideInRight} 0.5s;
    }
`

