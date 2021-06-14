import styled from 'styled-components'

export const SideBarRoot = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 0 15%;
`

export const SideBarDrawer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 5% 30px;
    position: fixed;
    top: 0;
`
export const SidebarImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SidebarImage = styled.img`
    width: 83px;
    height: 83px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-image: url("https://picsum.photos/200/300?random=1");
`

export const SideBarPageContent = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`

export const SideBarUsername = styled.h3`
    font-family: 'Rokkitt-Regular';
    color: #ff5e6c;
    text-align: center;
`

export const SidebarHeader = styled.div`
    z-index: 300;
    font-family: "Rokkitt-Bold";
    display: flex;
    position: sticky;
    align-items: center;
    top: 0;
    background-color: #ffffff;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -6px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    padding: 0 30px;
`

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`