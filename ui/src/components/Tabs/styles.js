import styled from 'styled-components'
import { Tabs as _Tabs, Tab as _Tab, TabList as _TabList, TabPanel as _TabPanel } from 'react-tabs'

export const Tabs = styled(_Tabs)`
`

export const TabList = styled(_TabList)`
    display: flex;
    flex: 1;
    margin: 0;
    padding: 0;
    list-style-type: none;

    > li {
        display: flex;
        flex: 1;
        justify-content: center;
        padding: 20px 20px;
        font-size: 15px;
        font-weight: 600;
        background-color: #FFFFFF;

        &:first-of-type {
            border-right: 1px solid #EAEAEF;
        }
    }
`

export const Tab = styled(_Tab)`
    float: left;
    padding: 3px 10px 10px;
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 1px;

    &[aria-selected="true"] {
        color: black;
        border-bottom: 2px solid rgb(255, 102, 0);
    }
`

export const TabPanel = styled(_TabPanel)`
`
