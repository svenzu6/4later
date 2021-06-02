import styled from 'styled-components'

export const SideBarRoot = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    background-color:#fff5d7;
`

export const SideBarDrawer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 15%;
    padding-top: 100px;
    padding-bottom: 8%; 
`

export const SideBarPageContent = styled.div`
    width: 100%;
    height: 100%;
`

export const SideBarUsername = styled.h3`
    font-family: Cormorant-Light;
    color: #ff5e6c;
`