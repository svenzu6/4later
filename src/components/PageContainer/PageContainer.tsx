import React from 'react'

import {
    PageContainerBar,
    PageContainerRoot,
} from './PageContainer.styles'

export const PageContainer: React.FunctionComponent = (props) => {
    return (
        <PageContainerRoot>
            <PageContainerBar>
                <h2>
                    tab name
                </h2>
            </PageContainerBar>
            {props.children}
        </PageContainerRoot>
    )
}
