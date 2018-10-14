import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/fuelSavingsActions';
import FuelSavingsForm from '../FuelSavingsForm';

export class FuelSavingsPage extends React.Component {
  hasErrored = false;

  saveFuelSavings = () => {
    this.props.actions.saveFuelSavings(this.props.fuelSavings);
  }

  onErrorClick = () => {
    this.hasErrored = true;
    this.props.actions.calculateError();
  }

  calculateFuelSavings = e => {
    this.props.actions.calculateFuelSavings(this.props.fuelSavings, e.target.name, e.target.value);
  }

  render() {
    if (this.hasErrored) { window.willThrowRenderError(); }
    return (
      <FuelSavingsForm
        onSaveClick={this.saveFuelSavings}
        onErrorClick={this.onErrorClick}
        onChange={this.calculateFuelSavings}
        fuelSavings={this.props.fuelSavings}
      />
    );
  }
}

FuelSavingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuelSavingsPage);
