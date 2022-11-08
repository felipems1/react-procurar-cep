import styled from 'styled-components';

export const Container = styled.div`
    main {
        background-color: #06416a;
        height: 100vh;
        display: flex;
        gap: 25px;
        flex-direction: column;
        align-items: center;
    }

    main h3 {
        margin-top: 110px;
        font-size: 35px;
        color: #ffd400;
    }

    main p {
        font-size: 22px;
        color: #FFF;
    }

    main input {
        outline: none;
        width: 450px;
        height: 48px;
        border-radius: 8px;
        font-size: 18px;
        padding: 10px 20px;
    }

    main button {
        width: 180px;
        height: 35px;
        font-size: 15px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background-color: #ffd400;
        transition: all ease 0.3s;
        text-transform: uppercase;
        font-weight: bold;
    }

    main button:hover {
        background-color: #c8a50e;
    }

    @media (max-width: 430px) {
        main {
            text-align: center;
        }

        main h3 {
            font-size: 30px;
            margin-top: 70px;
        }

        main p {
            font-size: 20px;
            margin: 0 25px;
        }

        main input {
            width: 300px;
        }
    }
`;