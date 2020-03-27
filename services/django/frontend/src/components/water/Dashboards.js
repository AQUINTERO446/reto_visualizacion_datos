import React, { Fragment } from 'react'
import ReinstallationWaterService from './reinstallationWaterService/Dashboards';
import DamageRate from './damageRate/Dashboards';
import WaterSources from './waterSources/Dashboards';
import WaterProduction from './waterProduction/Dashboards';
import InventoryDashboards from './inventory/Dashboards';

export default function Dashboardss() {
    return (
        <Fragment>
            <ReinstallationWaterService />
            <DamageRate />
            <WaterSources />
            <WaterProduction />
            <InventoryDashboards />
        </Fragment>
    )
}
