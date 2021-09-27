/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import "./ButtonIncDec.css";
import { connect } from "react-redux";
import {
  quantityPlus,
  quantityMinus,
} from "../../../configs/redux/actions/orderAction";


export class ButtonIncDec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: this.props.stock,
      min: 1,
    };
  }

  IncrementItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity < this.state.max) {
        return {
          quantity: prevState.quantity + 1,
        };
      } else {
        return null;
      }
    });
  };
  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity !== this.state.min) {
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return null;
      }
    });
  };
  ToggleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  render() {
    return (
      <div className="wrapper-size-qty">
        <button className="minus" onClick={this.props.Decrement}>
          -
        </button>
        <input
          className="size-qty"
          type="number"
          min={this.state.min}
          max={this.state.max}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <button className="plus" onClick={this.props.Increment}>
          +
        </button>
      </div>
    );
  }
}


export default ButtonIncDec;


//   class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         clicks: 0,
//         show: true,
//       };
//     }
//     render() {
//       return (
//         <div className="wrapper-size-qty">
//           <button
//             className="minus"
//             onClick={() => {
//               this.props.DecreaseItem();
//             }}
//           >
//             -
//           </button>
//           {this.state.show ? (
//             <p className="size-qty">{this.props.quantity}</p>
//           ) : (
//             ""
//           )}
//           <button className="plus" onClick={() => this.props.IncrementItem()}>
//             +
//           </button>
//         </div>
//       );
//     }
//   }

// const mapStateToProps = (state) => ({
//   quantity: state.order.quantity,
// });
// const mapDispatchToProps = (dispatch) => {
//   return {
//     IncrementItem: () => {
//       dispatch(quantityPlus());
//     },
//     DecreaseItem: () => {
//       dispatch(quantityMinus());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);