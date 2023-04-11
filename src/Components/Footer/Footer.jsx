import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="f-size-r w-screen text-white flex flex-col items-center xl:mt-20 lg:mt-28 md:mt-32 sm:mt-28 max-sm:mt-28
      ">
        <div className="flex relative flex-col items-center h-64 xl:w-screen max-sm:w-screen lg:w-7/8 sm:w-screen md:w-screen flex flex-col">
          <div className="w-3/4 py-4 flex-col items-center flex">
            <div className="w-3/4 h-1/2 flex-col items-center flex">
              <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg">
                Save time, save money!
              </h1>
              <p className="mt-2">
                Sign up and we'll send the best deals to you
              </p>
            </div>
            <form
              action=""
              className="xl:py-4 lg:py-4 md:py-6 sm:py-5 max-sm:py-8 w-1/2 gap-1 flex justify-center"
            >
              <input
                placeholder="Your email address"
                className="outline-none text-black w-1/2 px-4 rounded-sm"
                required
                type="email"
                name=""
                id=""
              />
              <input
                className="w-1/4 btn-bg max-sm:h-4 lg:h-10 cursor-pointer rounded-sm"
                value="Subscribe"
                type="submit"
              />
            </form>
          </div>
          <div className="w-full h-1/4 bg-main flex justify-center items-center">
            <button className="f-size-r  p-2 max-sm:p-1 bg-hover  border-1 h-1/1 px-2 text-white border-solid flex items-center justify-between">
              List your property
            </button>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
