import { styled } from "styled-components";

export const MainContainer = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`

export const FormContainer = styled.form `
    margin: 4.5rem 5rem 0 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    gap: 3rem;

    @media screen and (max-width: 1100px) {
        gap: 2rem;
    }
    @media screen and (max-width: 650px) {
        gap: 1rem;
        margin: 4rem 1rem 0 1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .4rem;

        label {
            font-size: 1rem;
            @media screen and (max-width: 480px) {
                font-size: .8rem;
            }
        }

        input {
            font-size: 1rem;
            width: 10rem;
            padding: .3rem .5rem;
            border: 1px solid var(--darkgrey);

            @media screen and (max-width: 480px) {
                font-size: .8rem;
                width: 9rem;
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
                width: 15rem;
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
          
            @media screen and (max-width: 650px) {
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

export const DateErrorMessage = styled.p `
    margin: .5rem 3rem 0 3rem;
    font-size: .9rem;
    color: var(--red);
`

export const TransactionsContainer = styled.section `
    margin: 4rem 2rem 0 2rem;
`

export const Titles = styled.div `
    display: flex;
    justify-content: flex-start;
    gap: 4rem;
    background-color: var(--mediumgrey);

    @media screen and (max-width: 1100px) {
        gap: 2rem;
    }
    @media screen and (max-width: 660px) {
        gap: 0rem;
    }

    h3 {
        font-size: 1rem;
        line-height: 2.2rem;
        width: 12rem;

        @media screen and (max-width: 1100px) {
            width: 10rem;
        }
        @media screen and (max-width: 800px) {
            font-size: .8rem;
            line-height: 1.5rem;
            width: 8rem;
            padding: .3rem 0;
        }
        @media screen and (max-width: 660px) {
            line-height: 1.1rem;
        }
    }

    :nth-child(1), :nth-child(4) {
        @media screen and (max-width: 540px) {
            width: 5rem;
        }
    }
    :nth-child(2) {
        @media screen and (max-width: 540px) {
            width: 6rem;
        }
    }
    
    :nth-child(3) {
        @media screen and (max-width: 540px) {
            width: 7rem;
        }
    }
    :nth-child(4) {
        @media screen and (max-width: 540px) {
            width: 4.5rem;
        }
    }
`

export const Balance = styled.div `
    display: flex;
    justify-content: flex-start;
    gap: 7rem;
    margin: 1rem 0;

    @media screen and (max-width: 800px) {
        gap: 4rem;
    }
       
    h2 {
        font-size: 1.2rem;

        @media screen and (max-width: 1100px) {
            font-size: 1rem;
        }
        @media screen and (max-width: 600px) {
            font-size: .9rem;
        }
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
        @media screen and (max-width: 800px) {
            font-size: 1rem;
        }
    }
    svg {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;

        @media screen and (max-width: 800px) {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
    svg:hover {
        opacity: .7;
    }
`