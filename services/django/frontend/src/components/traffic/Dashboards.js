import React, { Fragment } from 'react'
import MetrolineaDashboards from './metrolinea/Dashboards';
import SubpoenaDashboards from './subpoena/Dashboards';
import AccidentsDashboards from './accidents/Dashboards';
import InjuriesDashboards from './injuries/Dashboards';
import DeathsDashboards from './deaths/Dashboards';

export default function Dashboardss() {
    return (
        <Fragment>
            <MetrolineaDashboards />
            <SubpoenaDashboards />
            <AccidentsDashboards />
            <InjuriesDashboards />
            <DeathsDashboards />
        </Fragment>
    )
}
