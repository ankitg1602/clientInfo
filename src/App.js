import React from 'react';
import logo from './logo.svg';
import './App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SlateComp from './slateComp'

import { connect } from 'react-redux'
import { findAllByDisplayValue } from '@testing-library/react';

function App() {
  return (
    <div className="border">
      <SlateComp/>
        
    </div>
  );
}

// export default App;

// class App extends React.Component {
  
//   constructor() {
//     super();
//       this.state = {
//       seat: [
//         '1','2','3','4','5','6','7','8','9','10',
//         '11','12','13','14','15','16','17','18','19','20',
//         '21','22','23','24','25','26','27','28','29','30',
//       ],
//       seatAvailable: [
//         '1','2','3','4','5','6','7','8','9','10',
//         '11','12','13','14','15','16','17','18','19','20',
//         '21','22','23','24','25','26','27','28','29','30',
//       ],
//       seatReserved: [],
//       movieDetails: {
//         'Movie': 'Gingerclown',
//         'Time': 'April3, 21:00',
//         Tickets: 0,
//         Total: '$0',
//         seats: 0
//       },
//       totalAmount: 0,
//       ticketCost: 100,
//       totalTicket: 0
//     }
//   }

//   componentDidMount() {
//     if (localStorage.getItem('seatReserved') && localStorage.getItem('seatReserved').length) {
//       this.setState({seatReserved: localStorage.getItem('seatReserved').split(',')})
//     } else {
//       this.setState({seatReserved: []})
//     }
    
//   }
  
//   onClickData(seat) {
//     if(this.state.seatReserved.indexOf(seat) > -1 ) {
//       let amount = this.state.ticketCost
//       let totalAmount = this.state.totalAmount
//       let totalTicket = this.state.totalTicket
//       if (totalAmount) {
//         totalAmount -= amount
//       } else {
//         totalAmount = amount
//       }
//       if (totalTicket) {
//         totalTicket -= 1
//       } else {
//         totalTicket = 0
//       }
//       this.setState({
//         seatAvailable: this.state.seatAvailable.concat(seat),
//         seatReserved: this.state.seatReserved.filter(res => res != seat),
//         totalAmount,
//         totalTicket
//       })
//     } else {
//       let amount = this.state.ticketCost
//       let totalAmount = this.state.totalAmount
//       let totalTicket = this.state.totalTicket
//       if (totalAmount) {
//         totalAmount += amount
//       } else {
//         totalAmount = amount
//       }
//       if (totalTicket) {
//         totalTicket += 1
//       } else {
//         totalTicket = 1
//       }
//       localStorage.setItem('seatReserved', this.state.seatReserved.concat(seat))
//       this.setState({
//         seatReserved: this.state.seatReserved.concat(seat),
//         seatAvailable: this.state.seatAvailable.filter(res => res != seat),
//         totalAmount,
//         totalTicket
//       }, () => {

//       })
//     }
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>Screen</h1>
//         <DrawGrid 
//           seat = { this.state.seat }
//           available = { this.state.seatAvailable }
//           reserved = { this.state.seatReserved }
//           onClickData = { this.onClickData.bind(this) }
//           movieDetails = {this.state.movieDetails}
//           totalAmount = {this.state.totalAmount}
//           totalTicket = {this.state.totalTicket}
//           />
//       </div>
//     )
//   }
// }

// class DrawGrid extends React.Component {
//   // displayValue(key) {
//   //   if (key === 'Total') {
//   //    return this.props.totalAmount
//   //   } else {
//   //     return this.props.movieDetails[key]
//   //   }
//   // }
//   render() {
//     return (
//        <div className="container">
//         <h2></h2>
//         <table className="grid">
//           <tbody>
//               <tr>
//                 { this.props.seat.map( (row, index) =>
//                   <td 
//                     className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
//                     key={row} onClick = {e => this.onClickSeat(row, index)}>{row} </td>) }
//               </tr>
//           </tbody>
//         </table>
      
//         {
//           Object.keys(this.props.movieDetails).map(key => 
//             // {this.props.totalAmount}
//           <p>{key}: <h4>{key === 'Total' ? this.props.totalAmount : key === 'Tickets' ? this.props.totalTicket :  key === 'seats' ? this.props.totalTicket : this.props.movieDetails[key] }</h4></p>
//             )
//         }
        
//         {/* <AvailableList available = { this.props.available } /> */}
//         {/* <ReservedList reserved = { this.props.reserved } /> */}
//        </div>
//     )
//   }
  
//   onClickSeat(seat) {
//     this.props.onClickData(seat);
//   }
// }

// class AvailableList extends React.Component {
//   render() {
//     const seatCount = this.props.available.length;
//     return(
//       <div className="left">
//         <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
//         <ul>
//           {this.props.available.map( res => <li key={res} >{res}</li> )}
//         </ul>
//       </div>
//     )
//   }
// }

// class ReservedList extends React.Component {
//   render() {
//     return(
//       <div className="right">
//         <h4>Reserved Seats: ({this.props.reserved.length})</h4>
//         <ul>
//           { this.props.reserved.map(res => <li key={res} >{res}</li>) }
//         </ul>
//       </div>
//     )
//   }
// }


// ReactDOM.render(<App name="Rachelle" />, document.getElementById('app'));
export default App;
