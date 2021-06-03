import styled from 'styled-components'

export const FavoritesRoot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 20px;
    align-items: center;
    width: 100%;
`

export const FavoritesContent = styled.div`
    display: flex;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FavoritesHeader = styled.div`
    z-index: 300;
    padding: 0 100px;
    font-family: "Cormorant-SemiBold";
    display: flex;
    position: sticky;
    align-items: center;
    top: 0;
    background-color: #ffffff;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`
