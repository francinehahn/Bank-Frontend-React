import { styled } from "styled-components";


export const HomeContainer = styled.section `
    background-color: var(--purple);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 23rem;

        @media screen and (max-width: 480px) {
            width: 18rem;
        }

        label {
            font-size: 1.1rem;
            color: var(--white);

            @media screen and (max-width: 480px) {
                font-size: 1rem;
            }
        }

        select {
            font-size: .9rem;
            padding: .5rem;
            border: none;
        }

        select:focus {
            outline: none;
        }

        button {
            padding: .5rem 0;
            background-color: var(--white);
            border: none;
            font-size: .9rem;
            cursor: pointer;
        }

        button:hover {
            background-color: var(--light-purple);
        }

        p {
            font-size: .9rem;
            color: var(--white);
        }
    }
`