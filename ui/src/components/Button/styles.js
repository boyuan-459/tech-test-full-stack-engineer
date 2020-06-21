import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: #F7F7F7;
    border-radius: 2px;
    border: none;
    border-bottom: 2px solid #858B88;
    color: #000000;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.4;
    padding: 10px 30px;
    &:focus, &:hover {
        background-color: #858B88;
    }

    &.primary {
        color: #FFFFFF;
        background-color: rgb(255, 102, 0, 0.8);
        &:focus, &:hover {
            background-color: ;
            background-color: #ff6532;
        }
    }
`
