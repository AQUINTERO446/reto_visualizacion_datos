import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addGlobalParameters } from '../../../actions/water/globalParameters';

export class Form extends Component {
    state = {
        consumption_per_capita: '',
        created_at: ''
    }

    static propTypes = {
        addGlobalParameters: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { consumption_per_capita, created_at } = this.state;
        const globalParameters = { consumption_per_capita, created_at };
        this.props.addGlobalParameters(globalParameters);
        this.setState({
            consumption_per_capita: '',
            created_at: ''
        });
      };

    render() {
        const { consumption_per_capita, created_at } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Parametros Globales</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Consumo per capita</label>
                    <input
                    className="form-control"
                    type="number"
                    name="consumption_per_capita"
                    onChange={this.onChange}
                    value={consumption_per_capita}
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

export default connect(null, { addGlobalParameters })(Form);
