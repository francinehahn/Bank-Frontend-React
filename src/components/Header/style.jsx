import { styled } from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    gap: 50vw;
    align-items: center;
    background-color: var(--lightgray);
    padding: 1rem 0;

    @media screen and (max-width: 1000px) {
        gap: 40vw;
    }
    @media screen and (max-width: 700px) {
        gap: 30vw;
    }
    @media screen and (max-width: 500px) {
        gap: 22vw;
    }

    img {
        width: 15rem;
        height: 3.5rem;
        
        @media screen and (max-width: 1000px) {
            width: 13rem;
            height: 3rem;
        }
        @media screen and (max-width: 580px) {
            width: 10rem;
            height: 2.5rem;
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: var(--purple);
        color: var(--white);
        font-size: 1rem;
        padding: .7rem 3rem;
        border: none;
        border-radius: 1.7rem;
        height: 2.8rem;

        @media screen and (max-width: 1000px) {
            padding: .5rem 2.5rem;
            height: 2.5rem;
        }
        @media screen and (max-width: 580px) {
            font-size: .9rem;
            padding: .5rem 1.5rem;
            height: 2.1rem;
        }
    }

    button:hover {
        cursor: pointer;
        opacity: .9;

        @keyframes arrowAnimation {
            from {transform: translateX(0)};
            to {transform: translateX(5px)};
        }

        svg {
            animation: arrowAnimation 1s ease;
        }
    }
`