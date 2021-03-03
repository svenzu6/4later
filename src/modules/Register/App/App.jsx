import { Register } from '../Register'

import { GlobalStyle } from './App.styles'

// FIXME: move app module outside of register module
export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Register />
        </>
    )
}
