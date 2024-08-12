import styled, {css} from "styled-components";
import {Theme} from "../styles/Theme.styled";

interface TypographyPropsType {
    color?: string,
    maxWidth?: string

}

export const Typography = styled.div<TypographyPropsType>`
    font-family: Inter, sans-serif;
    margin-top: ${Theme.margin.main};
    
    ${props => props.as === 'h1' && css<TypographyPropsType>`
        font-size: ${Theme.fontSize.main};
        font-weight: bold;
    `}

    ${props => props.as === 'p' && css<TypographyPropsType>`
        font-size: ${Theme.fontSize.small};
        max-width: ${props => props.maxWidth};
        font-weight: 500;
        line-height: 167%;
        color: ${props => props.color || '#ABB3BA'};
    `}
`
