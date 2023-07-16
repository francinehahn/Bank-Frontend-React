import { styled } from "styled-components";

export const FormContainer = styled.section `
    margin-top: 3.5rem;

    form {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 3rem;

        div {
            display: flex;
            flex-direction: column;
            gap: .4rem;

            label {
                font-size: 1rem;
            }

            input {
                font-size: 1rem;
                width: 10rem;
                padding: .3rem .5rem;
                border: 1px solid var(--darkgrey);
            }

            input:focus {
                outline: none;
            }
        }

        div:nth-child(3) {
            input {
                width: 20rem;
                padding: .4rem .5rem;
            }
        }

        button {
            display: flex;
            align-items: center;
            gap: .7rem;
            padding: .5rem 1.2rem;
            background-color: var(--lightgray);
            border: 1px solid var(--darkgrey);
            border-radius: 2px;
            cursor: pointer;

            span {
                font-size: 1rem;
            }

            svg {
                width: 1rem;
                height: 1rem;
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
    }
`

export const TransactionsContainer = styled.section `
    margin-top: 4rem;
    
    span {
        display: flex;
        justify-content: center;
        gap: 6rem;

        h2 {
            font-size: 1.2rem;
        }
    }
`