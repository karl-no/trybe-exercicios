import React, { Component } from 'react'
import ColorsContext from './ColorsContext';
import PropTypes from 'prop-types';

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['blue', 'red', 'yellow'],
      colorIndex: 0,
    };

    this.nextColor = this.nextColor.bind(this);

  }

  nextColor() {
    const { colors, colorIndex } = this.state;
    if (colorIndex < (colors.length - 1)) {
      this.setState((prevState) => ({ colorIndex: prevState.colorIndex + 1 }));
    } else {
      this.setState({ colorIndex: 0 });
    }
  };

  render() {
    const context= {
      ...this.state,
      nextColor: this.nextColor,
    };

    const { children } = this.props;

    return(
      <ColorsContext.Provider value={ context }>
        {children}
      </ColorsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
