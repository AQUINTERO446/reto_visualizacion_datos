import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addReinstallationWaterService } from '../../../actions/water/reinstallationWaterService';

export class Form extends Component {
    state = {
        disconnection: '',
        pending: '',
        created_at: ''
    }

    static propTypes = {
        addReinstallationWaterService: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { disconnection, created_at, pending } = this.state;
        const reinstallationWaterService = { disconnection, created_at, pending };
        this.props.addReinstallationWaterService(reinstallationWaterService);
        this.setState({
            disconnection: '',
            pending: '',
            created_at: ''
        });
      };

    render() {
        const { disconnection, created_at, pending } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indice de Reinstalación y reconexión del servicio de agua potable</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Hogares totales con desconexión</label>
                    <input
                    className="form-control"
                    type="number"
                    name="disconnection"
                    onChange={this.onChange}
                    value={disconnection}
                    />
                </div>
                <div className="form-group">
                    <label>Hogares con reinstalaciones pendientes</label>
                    <input
                    className="form-control"
                    type="number"
                    name="pending"
                    onChange={this.onChange}
                    value={pending}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha</label>
                    <input
                    className="form-control"
                    type="date"
                    name="created_at"
                    onChange={this.onChange}
                    value={created_at}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
                </form>
            </div>
    
        )
    }
}

export default connect(null, { addReinstallationWaterService })(Form);
