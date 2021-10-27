import styled from "styled-components";

export const ContainerPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`

export const FormCards = styled.div`
    margin-top: 50px;
    width: 300px;
    height: 350px;
    padding: 10px 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: rgba( 255, 255, 255, 0.8 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;

    button {
        height: 35px;
        padding: 0 55px;
        border: none;
        background-color:#94bbe9;
        transition: 1s;
        width: 100%;
    }

    button:hover {
        cursor: pointer;
        border-radius: 7px;
    }

    div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    input {
        height: 30px;
        width: 100%;
    }

`

export const ContainerCards = styled.ul`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 40px;

    li {
        margin: 20px;
    }
`
