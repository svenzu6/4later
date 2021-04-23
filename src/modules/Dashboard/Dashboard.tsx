import React from 'react'

import { DashboardRoot } from './Dashboard.styles'
import { DashboardCreateDialog } from './DashboardCreateDialog'

export const Dashboard: React.FunctionComponent = () => {
    return (
        <DashboardRoot>
            <h1>
                DASHBOARD
            </h1>
            <DashboardCreateDialog />
        </DashboardRoot>
    )
}
