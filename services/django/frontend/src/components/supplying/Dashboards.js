import React, { Fragment } from 'react'
import Form from './Form';
import Supplying from './Supplying';
import TargetVolumesDashboards from './targetVolumes/Dashboards';

export default function Dashboardss() {
    return (
        <Fragment>
            <Form />
            <Supplying />
            <TargetVolumesDashboards />
        </Fragment>
    )
}
