import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWaterSources, deleteWaterSources } from '../../../actions/water/waterSources';

export class WaterSources extends Component {
    static propTypes = {
        waterSources: PropTypes.array.isRequired,
        getWaterSources: PropTypes.func.isRequired,
        deleteWaterSources: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getWaterSources();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de Fuentes de agua (cruda)</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Localización</th>
                    <th>Caudal [m3/s]</th>
                    <th>Turbiedad [Ntu]</th>
                    <th>Color (Unidades de Pt-Co)</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.waterSources.map(waterSources => (
                    <tr key={waterSources.id}>
                        <td>{waterSources.id}</td>
                        <td>{waterSources.location}</td>
                        <td>{waterSources.flow}</td>
                        <td>{waterSources.turbidity}</td>
                        <td>{waterSources.color}</td>
                        <td>{waterSources.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteWaterSources.bind(this, waterSources.id)}
                                className="btn btn-danger btn-sm">
                                    { " " }
                                    Eliminar
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    waterSources: state.waterSources.waterSources
});

export default connect(mapStateToProps, 
    { getWaterSources, deleteWaterSources }
    )(WaterSources);
