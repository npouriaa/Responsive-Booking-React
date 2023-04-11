import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Flights.css";

class Flights extends Component {
  constructor(props) {
    super(props);
    this.errorRef = React.createRef();
  }

  flightsList = [
    {
      id: "0",
      departure: {
        departure_time_origin: "4:38 PM",
        departure_time_destination: "4:18 PM",
        departure_date_origin: "Feb 23",
        departure_date_destination: "Feb 23",
        departure_airline_img:
          "https://r-xx.bstatic.com/data/airlines_logo/AA.png",
        departure_length: "6h 29m",
        departure_stop_number: "1 stop",
      },
      return: {
        return_time_origin: "4:38 PM",
        return_time_destination: "4:18 PM",
        return_date_origin: "Feb 23",
        return_date_destination: "Feb 23",
        return_airline_img:
          "https://r-xx.bstatic.com/data/airlines_logo/AA.png",
        return_length: "6h 29m",
        return_stop_number: "1 stop",
      },
      ticket_price: "$571.80",
    },
    {
      id: "1",
      departure: {
        departure_time_origin: "8:20 AM",
        departure_time_destination: "4:18 PM",
        departure_date_origin: "Feb 24",
        departure_date_destination: "Feb 24",
        departure_airline_img:
          "https://r-xx.bstatic.com/data/airlines_logo/NK.png",
        departure_length: "3h 44m",
        departure_stop_number: "  Direct",
      },
      return: {
        return_time_origin: "11:59 AM",
        return_time_destination: "2:50 PM",
        return_date_origin: "Feb 26",
        return_date_destination: "Feb 26",
        return_airline_img:
          "https://r-xx.bstatic.com/data/airlines_logo/AA.png",
        return_length: "3h 51m",
        return_stop_number: "Direct",
      },
      ticket_price: "$409.46",
    },
    {
      id: "2",
      departure: {
        departure_time_origin: "4:55 AM",
        departure_time_destination: "9:39 PM",
        departure_date_origin: "Feb 23",
        departure_date_destination: "Feb 23",
        departure_airline_img:
          "https://r-xx.bstatic.com/data/airlines_logo/UA.png",
        departure_length: "3h 44m",
        departure_stop_number: "1 stop",
      },
      return: {
        return_time_origin: "3:00 PM",
        return_time_destination: "5:50 AM",
        return_date_origin: "Feb 27",
        return_date_destination: "Feb 27",
        return_airline_img:
          "https://r-xx.bstatic.com/data/airlines_logo/UA.png",
        return_length: "6h 50m",
        return_stop_number: "Direct",
      },
      ticket_price: "$592.16",
    },
  ];

  showError = (text, bg) => {
    this.errorRef.current.classList.toggle("hidden");
    this.errorRef.current.classList.add(bg);
    this.errorRef.current.textContent = text;
    setTimeout(() => {
      this.errorRef.current.classList.toggle("hidden");
    }, 2000);
  };

  reserveFlight = (id) => {
    let isLogin = JSON.parse(localStorage.getItem("Logged-in-user"));
    if (isLogin) {
      this.flightsList.map((item) => {
        if (item.id === id) {
          let reservedArray = [];
          let lsArray = JSON.parse(localStorage.getItem("reserved-flights"));
          if (lsArray) {
            reservedArray = lsArray;
          } else {
            reservedArray = [];
          }
          reservedArray.push(item);
          localStorage.setItem(
            "reserved-flights",
            JSON.stringify(reservedArray)
          );
          this.errorRef.current.classList.remove("bg-red-500");

          this.showError("reserved successfuly", "bg-green-500");
        }
      });
    } else {
      this.errorRef.current.classList.remove("bg-green-500");
      this.showError("Please Login First", "bg-red-500");
    }
  };

  render() {
    return (
      <>
        <Header />
        <main className="f-size-r w-screen flex flex-col items-center max-sm:mt-40 md:mt-40 lg:mt-20">
          <div
            id="header-ch"
            className="xl:py-5 lg:py-3 md:py-3 px-4 max-sm:w-screen lg:w-7/8 sm:w-screen md:w-screen flex flex-col items-center"
          >
            <div
              ref={this.errorRef}
              className="w-full text-white hidden lg:text-xl md:text-lg max-sm:text-xs lg:h-20 max-sm:h-10 md:h-14 flex justify-center items-center"
            ></div>
            <div className="w-full flex flex-col gap-4 h-full p-3 flight-list-con">
              {this.flightsList.map((i) => {
                return (
                  <div
                    key={i.id}
                    className="w-full flex xl:h-48 lg:h-40 md:h-40 sm:h-28 max-sm:h-32 border-1 p-2 max-sm"
                  >
                    <div className="w-3/4 h-full">
                      <div className="w-full justify-evenly gap-2 h-1/2 flex items-center p-2">
                        <img
                          src={i.departure.departure_airline_img}
                          className="h-1/2"
                          alt=""
                        />
                        <div className="">
                          <p className="font-b">
                            {i.departure.departure_time_origin}
                          </p>
                          <p className="text-gray-500 f-size-r-m">
                            ICT - {i.departure.departure_date_origin}
                          </p>
                        </div>
                        <div className="gap-2 w-1/2 h-full text-gray-500 justify-evenly flex flex-col items-center">
                          <p className="f-size-r-m">
                            {i.departure.departure_length}
                          </p>
                          <div className="w-full h-1px bg-gray-300 relative flex justify-center">
                            <div className="h-2 w-2 rounded-full bg-gray-300 absolute -top-1"></div>
                          </div>
                          <p className="f-size-r-m">
                            {i.departure.departure_stop_number}
                          </p>
                        </div>
                        <div className="">
                          <p className="font-b">
                            {i.departure.departure_time_destination}
                          </p>
                          <p className="text-gray-500 f-size-r-m">
                            ICT - {i.departure.departure_date_destination}
                          </p>
                        </div>
                      </div>
                      <div className="w-full justify-evenly gap-2 h-1/2 flex items-center p-2">
                        <img
                          src={i.return.return_airline_img}
                          className="h-1/2"
                          alt=""
                        />
                        <div className="">
                          <p className="font-b">
                            {i.return.return_time_origin}
                          </p>
                          <p className="text-gray-500 f-size-r-m">
                            ICT - {i.return.return_date_origin}
                          </p>
                        </div>
                        <div className="gap-2 w-1/2 h-full text-gray-500 justify-evenly flex flex-col items-center">
                          <p className="f-size-r-m">{i.return.return_length}</p>
                          <div className="w-full h-1px bg-gray-300 relative flex justify-center">
                            <div className="h-2 w-2 rounded-full bg-gray-300 absolute -top-1"></div>
                          </div>
                          <p className="f-size-r-m">
                            {i.return.return_stop_number}
                          </p>
                        </div>
                        <div className="">
                          <p className="font-b">
                            {i.return.return_time_destination}
                          </p>
                          <p className="text-gray-500 f-size-r-m">
                            ICT -{i.return.return_date_destination}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/4 h-full flex py-3 flex-col gap-2">
                      <div className="w-full flex justify-between flex-col h-1/3">
                        <div className="w-full h-1/2 flex  items-center justify-end gap-1">
                          <svg
                            className="h-full"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                          </svg>
                          <svg
                            className="h-full"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="m 15 12.75 H 9 C 8.036 12.755 7.255 13.536 7.25 14.5 v 4 c 0.005 0.964 0.786 1.745 1.75 1.75 h 6 c 0.964 -0.005 1.745 -0.786 1.75 -1.75 v -4 C 16.745 13.536 15.964 12.755 15 12.75 z m -6 1.5 h 6 c 0.138 0 0.25 0.112 0.25 0.25 v 0.62 h -6.5 V 14.5 c 0 -0.138 0.112 -0.25 0.25 -0.25 z m 6 4.5 H 9 c -0.138 0 -0.25 -0.112 -0.25 -0.25 v -1.88 h 3.5 v 0.26 a 0.75 0.75 0 0 0 1.5 0 v -0.26 h 1.5 v 1.88 c 0 0.138 -0.112 0.25 -0.25 0.25 z M 15.69 4.42 a 3.73 3.73 0 0 0 -7.38 0 C 6.219 4.958 4.755 6.84 4.75 9 v 11.5 c 0 1.243 1.007 2.25 2.25 2.25 h 10 c 1.243 0 2.25 -1.007 2.25 -2.25 V 9 C 19.245 6.84 17.781 4.958 15.69 4.42 z M 12 2.75 c 0.95 0.002 1.796 0.603 2.11 1.5 H 9.89 C 10.204 3.353 11.05 2.752 12 2.75 z m 5.75 17.75 c -0.005 0.412 -0.338 0.745 -0.75 0.75 H 7 C 6.588 21.245 6.255 20.912 6.25 20.5 V 9 C 6.255 7.207 7.707 5.755 9.5 5.75 h 5 c 1.793 0.005 3.245 1.457 3.25 3.25 z"></path>
                          </svg>
                        </div>
                        <p className="text-gray-500 text-center f-size-r-m">
                          Included: personal item
                        </p>
                      </div>
                      <div className="w-full flex flex-col justify-between h-1/3">
                        <div className="w-full h-1/2 flex  items-center justify-end gap-2">
                          <p className="font-b">{i.ticket_price}</p>
                          <svg
                            className="h-full py-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
                          </svg>
                        </div>
                        <p className="w-full flex justify-center text-gray-500 f-size-r-m">
                          Total price for all travelers
                        </p>
                      </div>
                      <div className="w-full flex h-1/3">
                        <button
                          onClick={() => this.reserveFlight(i.id)}
                          id={i.id}
                          className="btn-reserve xl:h-full lg:h-7 md:h-6 sm:h-5 max-sm:h-5 rounded-lg text-blue-500 rounded-sm w-full border-1 border-blue-500"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Flights;
