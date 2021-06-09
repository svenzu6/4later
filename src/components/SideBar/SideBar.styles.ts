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
    display: flex;
    flex-direction: column;
    padding-left: 250px;
    padding-top: 100px;
    position: absolute;
    height: 100%;
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
    overflow: auto;
`

export const SideBarUsername = styled.h3`
    font-family: 'Rokkitt-Regular';
    color: #ff5e6c;
    text-align: center;
`
