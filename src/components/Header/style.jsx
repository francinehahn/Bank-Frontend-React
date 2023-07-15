import { styled } from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--lightgray);
    padding: 1rem 10rem;

    img {
        width: 15rem;
        height: 3.5rem;
    }

    button {
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: var(--purple);
        color: var(--white);
        font-size: 1rem;
        padding: .7rem 2.5rem;
        border: none;
        border-radius: 1.7rem;
        height: 3rem;
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