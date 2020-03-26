import React, { Fragment } from 'react'
import Form from './Form';
import Security from './Security';
import CoexistenceDashboards from './coexistence/Dashboards';

export default function Dashboardss() {
    return (
        <Fragment>
            <Form />
            <Security />
            <CoexistenceDashboards />
        </Fragment>
    )
}
