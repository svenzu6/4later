import styled from 'styled-components'

export const LinkCardContent = styled.div`
    margin-bottom: 10px;   
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 6px; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 100%;
`

export const LinkCardRoot = styled.div` 
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
`

export const LinkCardLinkContent = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    justify-content: space-between;
    padding: 0 12px;
`

export const LinkCardTitle = styled.h2`   
    margin: 0 ;
    padding: 12px;
`

export const LinkCardDescription = styled.p`   
    margin: 0 ;
    padding: 12px;
    overflow: hidden; 
    text-overflow: ellipsis; 
`

export const LinkCardIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
`

export const LinkCardFavoriteContainer = styled.div`
    padding: 4px 4px 0px 4px;
`
