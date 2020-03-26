import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSecurity, deleteSecurity } from '../../actions/security';

export class Security extends Component {
    static propTypes = {
        security: PropTypes.array.isRequired,
        getSecurity: PropTypes.func.isRequired,
        deleteSecurity: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getSecurity();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de seguridad</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Hurtos a personas</th>
                    <th>Hurtos a comercio</th>
                    <th>Lesiones personales</th>
                    <th>Homicidios</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.security.map(security => (
                    <tr key={security.id}>
                        <td>{security.id}</td>
                        <td>{security.thefts_persons}</td>
                        <td>{security.thefts_commerce}</td>
                        <td>{security.personal_injuries}</td>
                        <td>{security.homicides}</td>
                        <td>{security.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteSecurity.bind(this, security.id)}
                                className="btn btn-danger btn-sm">
                                    { " " }
                                    Delete
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
    security: state.security.security
});

export default connect(mapStateToProps, 
    { getSecurity, deleteSecurity }
    )(Security);
