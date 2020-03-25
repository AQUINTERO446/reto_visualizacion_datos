import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSecurity } from '../../actions/security'

export class Form extends Component {
    state = {
        thefts_persons: '',
        thefts_commerce: '',
        personal_injuries: '',
        homicides: '',
        created_at: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { thefts_persons, thefts_commerce, personal_injuries, homicides, created_at } = this.state;
        const security = { thefts_persons, thefts_commerce, personal_injuries, homicides, created_at };
        this.props.addSecurity(security);
        this.setState({
            thefts_persons: '',
            thefts_commerce: '',
            personal_injuries: '',
            homicides: '',
            created_at: ''
        });
      };

    render() {
        const { thefts_persons, thefts_commerce, personal_injuries, homicides, created_at } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Registro de Seguridad</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Hurtos a personas</label>
                    <input
                    className="form-control"
                    type="number"
                    name="thefts_persons"
                    onChange={this.onChange}
                    value={thefts_persons}
                    />
                </div>
                <div className="form-group">
                    <label>Hurtos a comercio</label>
                    <input
                    className="form-control"
                    type="number"
                    name="thefts_commerce"
                    onChange={this.onChange}
                    value={thefts_commerce}
                    />
                </div>
                <div className="form-group">
                    <label>Lesiones personales</label>
                    <input
                    className="form-control"
                    type="number"
                    name="personal_injuries"
                    onChange={this.onChange}
                    value={personal_injuries}
                    />
                </div>
                <div className="form-group">
                    <label>Homicidios</label>
                    <input
                    className="form-control"
                    type="number"
                    name="homicides"
                    onChange={this.onChange}
                    value={homicides}
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

export default connect(null, { addSecurity })(Form);
