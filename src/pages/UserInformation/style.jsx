import { styled } from "styled-components";

export const MainContainer = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`

export const FormContainer = styled.form `
    margin: 3.5rem 5rem 0 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    gap: 3rem;

    @media screen and (max-width: 1100px) {
        gap: 2rem;
    }
    @media screen and (max-width: 480px) {
        gap: 1rem;
        margin: 3.5rem 1rem 0 1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .4rem;

        label {
            font-size: 1rem;
            @media screen and (max-width: 480px) {
                font-size: .9rem;
            }
        }

        input {
            font-size: 1rem;
            width: 10rem;
            padding: .3rem .5rem;
            border: 1px solid var(--darkgrey);

            @media screen and (max-width: 480px) {
                font-size: .9rem;
            }
        }

        input:focus {
            outline: none;
        }
    }

    div:nth-child(3) {
        input {
            width: 20rem;
            padding: .4rem .5rem;

            @media screen and (max-width: 480px) {
                font-size: .9rem;
                width: 16rem;
                padding: .3rem .4rem;
            }
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: .7rem;
        padding: .55rem 1.2rem;
        background-color: var(--green);
        border: none;
        border-radius: 2px;
        cursor: pointer;

        @media screen and (max-width: 480px) {
            padding: .45rem 1rem;
        }

        span {
            font-size: 1rem;
            @media screen and (max-width: 480px) {
                font-size: .9rem;
            }

            @media screen and (max-width: 480px) {
                display: none;
            }
        }

        svg {
            width: 1.1rem;
            height: 1.1rem;

            @media screen and (max-width: 480px) {
                width: 1rem;
                height: 1rem;
            }            
        }
    }

    button:hover {
        opacity: .8;

        @keyframes searchAnimation {
            from {transform: rotateY('0')};
            to {transform: rotateY(180deg)};
        }

        svg {
            animation: searchAnimation 2s ease;
        }
    }
`

export const TransactionsContainer = styled.section `
    margin-top: 4rem;
`

export const Titles = styled.div `
    display: flex;
    justify-content: flex-start;
    gap: 4rem;
    background-color: var(--mediumgrey);

    h3 {
        font-size: 1rem;
        line-height: 2.2rem;
        width: 12rem;
    }
`

export const Balance = styled.div `
    display: flex;
    justify-content: flex-start;
    gap: 7rem;
    margin: 1rem 0;

    h2 {
        font-size: 1.2rem;
    }
`

export const NoData = styled.p `
    margin-top: 2rem;
    color: var(--red);
`

export const PageNumber = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    p {
        font-size: 1.1rem;
    }
    svg {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
    }
    svg:hover {
        opacity: .7;
    }
`