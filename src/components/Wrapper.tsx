import styled from "styled-components";

interface WrapperPropsType {
    maxWidth?: string;
}

export const Wrapper = styled.div<WrapperPropsType>`
    max-width: ${props => props.maxWidth};
    button + button{
        margin-left: 1rem;
    }
`