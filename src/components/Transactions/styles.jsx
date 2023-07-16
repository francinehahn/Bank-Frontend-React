import { styled } from "styled-components";

export const TransactionContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    gap: 6rem;
    background-color: ${props => props.index % 2 !== 0? 'var(--mediumgrey)' : 'transparent'};

    p {
        width: 10rem;
        font-size: 1rem;
        line-height: 2.2rem;
    }
`