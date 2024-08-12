import styled, {css} from "styled-components";
import {Theme} from "./styles/Theme.styled";

interface ButtonPropsType {
    primary?: boolean,
    outlined?: boolean
}

export const Button = styled.button<ButtonPropsType>`
    border-radius: 5px;
    padding: .6rem 2rem;
    margin-top: ${Theme.margin.main};

    
${props => props.outlined && css<ButtonPropsType>`
    color:${Theme.colors.primary};
    background: ${Theme.colors.transparent};
    border: 2px solid ${Theme.colors.primary};
`}
${props => props.primary && css<ButtonPropsType>`
    color:${Theme.colors.white};
    background: ${Theme.colors.primary};
    border: 2px solid ${Theme.colors.transparent};
`}
`


