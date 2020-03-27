import React, { Fragment } from 'react'
import SecurityDashboards from './security/Dashboards';
import CoexistenceDashboards from './coexistence/Dashboards';

export default function Dashboardss() {
    return (
        <Fragment>
            <SecurityDashboards />
            <CoexistenceDashboards />
        </Fragment>
    )
}
