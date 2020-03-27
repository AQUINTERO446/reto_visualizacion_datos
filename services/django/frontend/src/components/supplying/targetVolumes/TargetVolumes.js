import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTargetVolumes, deleteTargetVolumes } from '../../../actions/targetVolumes';

export class TargetVolumes extends Component {
    static propTypes = {
        targetVolumes: PropTypes.array.isRequired,
        getTargetVolumes: PropTypes.func.isRequired,
        deleteTargetVolumes: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getTargetVolumes();
    }

    render() {
        return (
            <Fragment>
                <h2>Volumenes de destino (Hasta las 6am)</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Departamento del Atlantico</th>
                    <th>Departamento de la Guajira</th>
                    <th>Departamento de Bolivar</th>
                    <th>Departamento del Cesar</th>
                    <th>Departamento de Magdalena</th>
                    <th>Departamento de Norte de Santander</th>
                    <th>Magdalena Medio (Barrancabermeja, Sabana de Torres, Puerto Wilches, San Vicente, Cimitarra</th>
                    <th>Nororiente antioqueño</th>
                    <th>Provincia Guanentina</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.targetVolumes.map(targetVolumes => (
                    <tr key={targetVolumes.id}>
                        <td>{targetVolumes.id}</td>
                        <td>{targetVolumes.atlatinco}</td>
                        <td>{targetVolumes.guajira}</td>
                        <td>{targetVolumes.bolivar}</td>
                        <td>{targetVolumes.cesar}</td>
                        <td>{targetVolumes.magdalena}</td>
                        <td>{targetVolumes.norte_santander}</td>
                        <td>{targetVolumes.magdalena_medio}</td>
                        <td>{targetVolumes.nororiente_antioqueño}</td>
                        <td>{targetVolumes.provincia_guanentina}</td>
                        <td>{targetVolumes.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteTargetVolumes.bind(this, targetVolumes.id)}
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
    targetVolumes: state.targetVolumes.targetVolumes
});

export default connect(mapStateToProps, 
    { getTargetVolumes, deleteTargetVolumes }
    )(TargetVolumes);
