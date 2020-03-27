import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDamageRate } from '../../../actions/water/damageRate';

export class Form extends Component {
    state = {
        parent_networks: '',
        rush: '',
        created_at: ''
    }

    static propTypes = {
        addDamageRate: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { parent_networks, created_at, rush } = this.state;
        const damageRate = { parent_networks, created_at, rush };
        this.props.addDamageRate(damageRate);
        this.setState({
            parent_networks: '',
            rush: '',
            created_at: ''
        });
      };

    render() {
        const { parent_networks, created_at, rush } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Tasa de daños</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Número de daños atendidos en redes matrices</label>
                    <input
                    className="form-control"
                    type="number"
                    name="parent_networks"
                    onChange={this.onChange}
                    value={parent_networks}
                    />
                </div>
                <div className="form-group">
                    <label>Número de daños atendidos en acometidas</label>
                    <input
                    className="form-control"
                    type="number"
                    name="rush"
                    onChange={this.onChange}
                    value={rush}
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

export default connect(null, { addDamageRate })(Form);
