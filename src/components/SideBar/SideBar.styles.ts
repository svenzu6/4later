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
    height: 100%;
    padding-left: 15%;
    padding-top: 100px;
    padding-bottom: 8%;
`

export const SideBarPageContent = styled.div`
    width: 100%;
    height: 100%;
`

export const SideBarLinksContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    justify-content: center;
`

export const SideBarUsername = styled.h3`
  text-align: left;
  padding-bottom: 40px;
  color: #ff5e6c;
`