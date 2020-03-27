import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMetrolinea } from '../../../actions/traffic/metrolinea';

export class Form extends Component {
    state = {
        passengers: '',
        created_at: ''
    }

    static propTypes = {
        addMetrolinea: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { passengers, created_at } = this.state;
        const metrolinea = { passengers, created_at };
        this.props.addMetrolinea(metrolinea);
        this.setState({
            passengers: '',
            created_at: ''
        });
      };

    render() {
        const { passengers, created_at } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indice de Metrolínea</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Número de pasajeros en metrolinea</label>
                    <input
                    className="form-control"
                    type="number"
                    name="passengers"
                    onChange={this.onChange}
                    value={passengers}
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

export default connect(null, { addMetrolinea })(Form);
