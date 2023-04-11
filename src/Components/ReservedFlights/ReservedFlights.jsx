import React, { Component } from "react";
import "./ReservedFlights.css";
import Header from "../Header/Header";

class ReservedFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      flights: [],
    };
  }

  componentDidMount() {
    let ls = localStorage.getItem("Logged-in-user");
    if (ls) {
      let reservedFlights = JSON.parse(
        localStorage.getItem("reserved-flights")
      );
      this.setState({ isLogin: true }, () => {});
      if (reservedFlights) {
        this.setState({ flights: reservedFlights }, () => {});
      }
    } else {
      this.setState({ isLogin: false }, () => {});
    }
  }

  render() {
    return (
      <>
        <Header />
        <main className="f-size-r w-screen flex flex-col items-center mt-20">
          <div
            className="xl:py-5 lg:py-3 md:py-3 px-4 max-sm:w-screen lg:w-7/8 sm:w-screen md:w-screen flex flex-col items-center"
            id="header-ch"
          >
            {this.state.isLogin ? (
              <div className="w-full flex flex-col gap-4 h-full p-3">
                <h1 className="">Your Flights List : </h1>
                <table className="w-full">
                  <thead className="w-full h-12">
                    <th className="border-1">Flight ID</th>
                    <th className="border-1">Flight type</th>
                    <th className="border-1">Flight ticket price</th>
                  </thead>
                  <tbody className="">
                    {this.state.flights.map((item) => (
                      <tr>
                        <td className="p-2 border-1 text-center h-2">{item.id}</td>
                        <td className="p-2 border-1 text-center h-2">
                          round-trip
                        </td>
                        <td className="p-2 border-1 text-center h-2">{item.ticket_price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div
                ref={this.errorRef}
                className="w-full text-white lg:text-xl md:text-lg max-sm:text-xs lg:h-20 max-sm:h-10 md:h-14 flex justify-center items-center bg-red-400"
              >
                Please Login First
              </div>
            )}
          </div>
        </main>
      </>
    );
  }
}

export default ReservedFlights;
