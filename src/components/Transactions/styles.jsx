import { styled } from "styled-components";

export const TransactionContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    gap: 6rem;
    background-color: ${props => props.$index % 2 !== 0 ? 'var(--mediumgrey)' : 'transparent'};

    @media screen and (max-width: 1100px) {
        gap: 4rem;
    }
    @media screen and (max-width: 660px) {
        gap: 3rem;
    }
    @media screen and (max-width: 540px) {
        gap: 2rem;
    }

    p {
        width: 10rem;
        font-size: 1rem;
        line-height: 2.2rem;

        @media screen and (max-width: 1100px) {
            width: 8rem;
            line-height: 2rem;
        }
        @media screen and (max-width: 800px) {
            width: 6rem;
            font-size: .8rem;
            line-height: 1.7rem;
        }
        @media screen and (max-width: 660px) {
            width: 5rem;
            font-size: .7rem;
        }
    }

    :nth-child(1), :nth-child(4) {
        @media screen and (max-width: 540px) {
            width: 3rem;
        }
    }
    :nth-child(2) {
        @media screen and (max-width: 540px) {
            width: 4rem;
        }
    }
    
    :nth-child(3) {
        @media screen and (max-width: 540px) {
            width: 5rem;
        }
    }
    :nth-child(4) {
        @media screen and (max-width: 540px) {
            width: 2.5rem;
        }
    }
`