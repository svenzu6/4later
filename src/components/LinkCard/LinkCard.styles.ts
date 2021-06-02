import styled from 'styled-components'

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
    color: white;
`

export const LinkCardTitle = styled.h2`   
    margin: 0 ;
    padding: 12px;
    font-family: "Cormorant-Light";
`

export const LinkCardDescription = styled.p`   
    margin: 0 ;
    padding: 12px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    font-family: "Cormorant-Light";
`

export const LinkCardUrl = styled.p`   
    margin: 0 ;
    padding: 12px;
    font-family: "Cormorant-Light";
`

export const LinkCardIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    opacity: 0;
`

export const LinkCardFavoriteContainer = styled.div`
    padding: 4px 4px 0px 4px;
`

// export const LinkCardContent = styled('div')({
//     [LinkCardIconContainer]: {
//         opacity: 1,
//     },
//     background: 'red',
// })

export const LinkCardContent = styled.div`
    margin-bottom: 10px;   
    background-color:  #ff5e6c;
    border-radius: 6px; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 100%;
    &:hover ${LinkCardIconContainer} {
        opacity: 1
    }
`