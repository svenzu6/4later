import styled from 'styled-components'

export const DashboardRoot = styled.div`
    padding: 20px;
`
export const DashboardListRoot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DashboardListContent = styled.div`
    display: grid;
    align-items: center;
    grid-column-gap: 150px;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    row-gap: 100px;
    width: 50%;
`
