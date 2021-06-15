import styled from 'styled-components'

export const HomeRoot = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const HomeBackground = styled.div`
    background-image: url('icons/floppy.jpg');
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(8px);
    height: 100%;
    width: 100%;
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-image: url('icons/floppy.jpg');
    background-position: center;
    background-size: cover;
    height: 80%;
    width: 60%;
    position: absolute;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 10px;
`
