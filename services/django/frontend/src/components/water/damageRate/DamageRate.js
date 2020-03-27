import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDamageRate, deleteDamageRate } from '../../../actions/water/damageRate';

export class DamageRate extends Component {
    static propTypes = {
        damageRate: PropTypes.array.isRequired,
        getDamageRate: PropTypes.func.isRequired,
        deleteDamageRate: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getDamageRate();
    }

    render() {
        return (
            <Fragment>
                <h2>Tasa de daños</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Número de daños atendidos en redes matrices</th>
                    <th>Número de daños atendidos en acometidas</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.damageRate.map(damageRate => (
                    <tr key={damageRate.id}>
                        <td>{damageRate.id}</td>
                        <td>{damageRate.parent_networks}</td>
                        <td>{damageRate.rush}</td>
                        <td>{damageRate.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteDamageRate.bind(this, damageRate.id)}
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
    damageRate: state.damageRate.damageRate
});

export default connect(mapStateToProps, 
    { getDamageRate, deleteDamageRate }
    )(DamageRate);
