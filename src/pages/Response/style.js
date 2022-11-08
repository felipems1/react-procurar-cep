import styled from 'styled-components';

export const Container = styled.div`
    background-color: #DDD;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-top: 150px;
        font-size: 35px;
        text-align: center;
    }

    p {
        font-size: 23px;
        margin-top: 15px;
        margin-bottom: 30px;
        color: #333;
        text-align: center;
    }

    #table-desktop {
        margin-top: 120px;
        margin-bottom: 60px;
        border-collapse: collapse;
    }

    #table-desktop thead tr th,
    #table-desktop tbody tr td {
        padding: 20px 50px;
        text-align: center;
    }

    #table-desktop thead tr th {
        background-color: #0879b5;
        color: #EEE;
    }

    button {
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

    button:hover {
        background-color: #c8a50e;
    }

    #table-mobile {
        display: none;
    }

    @media (max-width: 768px) {
        #table-desktop thead tr th,
        #table-desktop tbody tr td  {
            padding: 15px 30px;
        }
    }

    @media (max-width: 430px) {
        #table-desktop {
            display: none; 
        }
        
        #table-mobile {
            margin-top: 35px;
            margin-bottom: 20px;
            display: block;
        }

        #table-mobile tr{
            display: flex;
            flex-direction: column;
            text-align: center;
        }

        #table-mobile tr th,
        #table-mobile tr td {
            padding: 9px 60px;
        }

        #table-mobile tr th {
            background-color: #0879b5;
            color: #EEE;
        }

        h2 {
            margin-top: 100px;
        }
    }
`;