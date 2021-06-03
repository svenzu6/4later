import styled from 'styled-components'

export const SideBarRoot = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`

export const SideBarDrawer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 60px;
`

export const SideBarPageContent = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
`

export const SideBarUsername = styled.h3`
    font-family: Cormorant-Light;
    color: #ff5e6c;
    text-align: center;
    margin-bottom: -0.3px;
    `

export const SidebarTitle = styled.h2`
    font-size: 20px;
    text-align: center;
    font-family: Cormorant-Bold;
`
