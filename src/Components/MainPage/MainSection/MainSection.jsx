import React, { Component } from "react";

class MainSection extends Component {
  render() {
    return (
      <main className="f-size-r w-screen flex flex-col items-center xl:mt-20 md:mt-40 max-sm:mt-44 px-2">
        <div
          id="header-ch"
          className="lg:pl-8 lg:pr-12 max-sm:pl-2 max-sm:pr-2 xl:py-5 lg:py-3 md:py-3 max-sm:w-screen lg:w-7/8 sm:w-screen md:w-screen flex flex-col"
        >
          <div className="border-1 xl:h-14 lg:h-14 md:h-14 sm:h-14 max-sm:h-10 overflow-hidden cursor-pointer max-sm:p-1 p-3 border-solid">
            <div className="w-full items-center h-8 flex justify-between">
              <div className="w-1/2 p-1 h-full flex items-center">
                <svg
                  className="h-3/4 mr-2 fill-red-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
                </svg>
                <p className="font-b">Coronavirus (COVID-19) support</p>
              </div>
              <svg
                className="h-3/4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z"></path>
              </svg>
            </div>
          </div>
          <div className="mt-10 p-1 w-full">
            <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
              Offers
            </h1>
            <p className="f-size-r">
              Promotions, deals, and special offers for you
            </p>
            <div className="w-full mt-2 text-white flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap max-sm:flex-wrap gap-4">
              <div className="offers-card-1 relative p-4 xl:h-44 lg:h-44 md:h-48 max-sm:h-40 flex xl:w-1/2 lg:w-1/2 md:w-full max-sm:w-full bg-white shadow rounded-sm">
                <div className=" w-3/4 flex flex-col justify-evenly h-full">
                  <p className="font-b">Escape for a while</p>
                  <p className="">
                    Enjoy the freedom of a monthly stay on Booking.com
                  </p>
                  <button className="btn-bg text-white w-1/2 py-2 ">
                    Discover monthly
                  </button>
                </div>
              </div>
              <div className="offers-card-2 relative p-4 xl:h-44 lg:h-44 md:h-48 max-sm:h-40 flex xl:w-1/2 lg:w-1/2 md:w-full max-sm:w-full bg-white shadow rounded-sm">
                <div className=" w-3/4 flex flex-col justify-evenly h-full">
                  <p className="font-b">New year, new adventures</p>
                  <p className="">
                    Save 15% or more when you book and stay before March 31,
                    2023 Find Early 2023 Deals
                  </p>
                  <button className="btn-bg text-white w-1/2 py-2 ">
                    Find Early 2023 Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 p-1 w-full">
            <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
              Explore United States of America
            </h1>
            <p className="f-size-r">
              These popular destinations have a lot to offer
            </p>
            <div className="w-full mt-2 flex gap-8 justify-around flex-wrap">
              <div className="md:w-40 max-sm:w-36">
                <div className="cursor-pointer h-full flex-col justify-between flex w-full">
                  <img
                    className="h-36 w-full"
                    src="https://r-xx.bstatic.com/xdata/images/city/250x250/349720.jpg?k=b7eca2cb90afd858f294732b0d5c194af47e70386b5be99373e3ff03be95c515&o="
                    alt=""
                  />
                  <div className="w-full mt-1">
                    <p className="font-b">Las Vegas</p>
                    <p className="text-gray-500">565 properties</p>
                  </div>
                </div>
              </div>
              <div className="md:w-40 max-sm:w-36">
                <div className="cursor-pointer h-full flex-col justify-between flex w-full">
                  <img
                    className="h-36 w-full"
                    src="https://r-xx.bstatic.com/xdata/images/city/250x250/976919.jpg?k=b4d2dd3f87340b547a0e1aa9fc7e89b47ebe9539086c7f5f4e637e5e2137be7c&o="
                    alt=""
                  />
                  <div className="w-full mt-1">
                    <p className="font-b">Orlando</p>
                    <p className="text-gray-500">3,684 properties</p>
                  </div>
                </div>
              </div>
              <div className="md:w-40 max-sm:w-36">
                <div className="cursor-pointer h-full flex-col justify-between flex w-full">
                  <img
                    className="h-36 w-full"
                    src="https://q-xx.bstatic.com/xdata/images/city/250x250/976784.jpg?k=717a6a83ea61edb06017bb8c9bd3d36511ec0e1aef59ac94235584d4fd1709cb&o="
                    alt=""
                  />
                  <div className="w-full mt-1">
                    <p className="font-b">New York</p>
                    <p className="text-gray-500">1,385 properties</p>
                  </div>
                </div>
              </div>
              <div className="md:w-40 max-sm:w-36">
                <div className="cursor-pointer h-full flex-col justify-between flex w-full">
                  <img
                    className="h-36 w-full"
                    src="https://r-xx.bstatic.com/xdata/images/city/250x250/976708.jpg?k=cb62481ca3494ac4e0b030345eedc77024732fb227f5642c773e5a11f534016c&o="
                    alt=""
                  />
                  <div className="w-full mt-1">
                    <p className="font-b">Los Angeles</p>
                    <p className="text-gray-500">1,712 properties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 h-72 w-full mt-10">
            <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
              Browse by property type
            </h1>
            <div className="w-full h-3/4 mt-4 flex xl:flex-nowrap max-sm:flex-wrap justify-evenly gap-4">
              <div className="h-full max-sm:w-40 md:w-60">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-40 w-full"
                    src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Hotels</p>
                    <p className="text-gray-500">938,651 hotels</p>
                  </div>
                </div>
              </div>
              <div className="h-full max-sm:w-40 md:w-60">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-40 w-full"
                    src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Aparttments</p>
                    <p className="text-gray-500">957,276 aparttments</p>
                  </div>
                </div>
              </div>
              <div className="h-full max-sm:w-40 md:w-60">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-40 w-full"
                    src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Resorts</p>
                    <p className="text-gray-500">18,836 Resorts</p>
                  </div>
                </div>
              </div>
              <div className="h-full max-sm:w-40 md:w-60">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-40 w-full"
                    src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Villas</p>
                    <p className="text-gray-500">517,936 villas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-sm:mt-52 text-white">
            <div className="w-full flex md:flex-nowrap max-sm:flex-wrap p-1 gap-2">
              <div className="max-sm:h-36 md:h-48 lg:h-48 xl:h-52 cursor-pointer sht md:w-1/2 max-sm:w-full h-full p-4 bg1">
                <h3 className="xl:text-2xl lg:text-2xl font-b md:text-xl sm:text-xl max-sm:text-lg">
                  Dublin
                </h3>
              </div>
              <div className="max-sm:h-36 md:h-48 lg:h-48 xl:h-52 cursor-pointer sht md:w-1/2 max-sm:w-full h-full p-4 bg2">
                <h3 className="xl:text-2xl lg:text-2xl font-b md:text-xl sm:text-xl max-sm:text-lg">
                  Washington, D.C.
                </h3>
              </div>
            </div>
            <div className="xl:h-72 lg:h-56 md:h-52 sm:h-52 max-sm:h-32 w-full flex gap-2 p-1">
              <div className="w-1/3 h-full cursor-pointer sht bg3 p-4">
                <h3 className="xl:text-2xl lg:text-2xl font-b md:text-xl sm:text-xl max-sm:text-lg">
                  San Francisco
                </h3>
              </div>
              <div className="w-1/3 h-full cursor-pointer sht bg4 p-4">
                <h3 className="xl:text-2xl lg:text-2xl font-b md:text-xl sm:text-xl max-sm:text-lg">
                  Boston
                </h3>
              </div>
              <div className="w-1/3 h-full cursor-pointer sht bg5 p-4">
                <h3 className="xl:text-2xl lg:text-2xl font-b md:text-xl sm:text-xl max-sm:text-lg">
                  Miami Beach
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:mt-8 lg:mt-24 md:mt-24 sm:mt-8 max-sm:mt-8 p-1 w-full">
            <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
              Quick and easy trip planner
            </h1>
            <p className="f-size-r mt-2">
              Pick a vibe and explore the top destinations in France
            </p>
            <ul className="h-10 mt-2 text-black w-full f-size-r flex">
              <li className="li-bg-main mr-2 xl:gap-2 xl:px-4 lg:gap-2 lg:px-3 sm:gap-2 sm:px-2 max-sm:gap-1 max-sm:px-2 py-3 rounded-full h-full flex justify-center items-center cursor-pointer border-1 border-white ">
                <svg
                  className="h-3/4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.541 21.325l-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014h1.082zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.418 6.418 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z"></path>
                </svg>
                Romance
              </li>
              <li className="li-bg-main-hover mr-2 xl:gap-2 xl:px-4 lg:gap-2 lg:px-3 sm:gap-1 sm:px-2 max-sm:gap-1 max-sm:px-2 py-3 rounded-full h-full flex justify-center items-center cursor-pointer ">
                <svg
                  className="h-3/4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.75 6h9.5a.25.25 0 0 1-.25-.25v17.5l.75-.75H2.25l.75.75V5.75a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.75c0-.69-.56-1.25-1.25-1.25h-9.5zm3-1.5h3.5A.25.25 0 0 1 9 2.75v2.5l.75-.75h-4.5l.75.75v-2.5a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.5c0-.69-.56-1.25-1.25-1.25h-3.5zM5.25 9h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zM7.5.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zM15.75 24h6a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 21 9h-4.5a1.5 1.5 0 0 0-1.5 1.5v12.75a.75.75 0 0 0 1.5 0V10.5H21v12.75l.75-.75h-6a.75.75 0 0 0 0 1.5zM19.5 8.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"></path>
                </svg>
                City
              </li>
              <li className="li-bg-main-hover mr-2 xl:gap-2 xl:px-4 lg:gap-2 lg:px-3 sm:gap-1 sm:px-2 max-sm:gap-1 max-sm:px-2 py-3 rounded-full h-full flex justify-center items-center cursor-pointer ">
                <svg
                  className="h-3/4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.72 14.295A7.35 7.35 0 0 1 8.997 8.85a7.148 7.148 0 0 1 2.25-4.972c.005-.005-.004-.005-.01-.01a7.173 7.173 0 0 1 2.261 5.03 7.332 7.332 0 0 1-2.722 5.397h.944zm-.944 1.166a.75.75 0 0 0 .944 0 8.85 8.85 0 0 0 3.277-6.555 8.683 8.683 0 0 0-2.72-6.12 1.482 1.482 0 0 0-2.069.01 8.658 8.658 0 0 0-2.71 6.062 8.869 8.869 0 0 0 3.278 6.603zm3.813-7.013A7.807 7.807 0 0 1 19.023 7.1l.003-.001a7.17 7.17 0 0 1-1.959 5.142 7.332 7.332 0 0 1-5.74 1.891.75.75 0 0 0-.158 1.492 8.85 8.85 0 0 0 6.953-2.318 8.68 8.68 0 0 0 2.404-6.233A1.495 1.495 0 0 0 19.029 5.6a9.304 9.304 0 0 0-5.282 1.608.75.75 0 1 0 .842 1.24zM8.75 7.221A9.239 9.239 0 0 0 3.417 5.6c-.815-.001-1.484.664-1.49 1.488a8.652 8.652 0 0 0 2.37 6.184 8.95 8.95 0 0 0 7.031 2.35.75.75 0 1 0-.158-1.49 7.431 7.431 0 0 1-5.82-1.927 7.142 7.142 0 0 1-1.923-5.091L3.426 7.1a7.746 7.746 0 0 1 4.476 1.357.75.75 0 0 0 .848-1.236zm-4.944 3.966c-2.223.948-3.808 2.716-3.808 4.441 0 3.47 5.422 6 12 6a22.404 22.404 0 0 0 6.977-1.047.75.75 0 0 0 .523-.715v-3.488l-.75.75h4.383a.75.75 0 0 0 .715-.524c.1-.315.15-.643.152-.973 0-2.068-1.986-3.858-5.079-4.944a.75.75 0 1 0-.497 1.416c2.56.898 4.076 2.265 4.076 3.525 0 .176-.028.354-.082.524l.715.226v-.75h-4.383a.75.75 0 0 0-.75.75v3.488l.523-.715a20.922 20.922 0 0 1-6.516.977c-5.856 0-10.507-2.17-10.507-4.5 0-1.02 1.17-2.325 2.896-3.061a.75.75 0 0 0-.588-1.38z"></path>
                </svg>
                Relax
              </li>
              <li className="li-bg-main-hover mr-2 xl:gap-2 xl:px-4 lg:gap-2 lg:px-3 sm:gap-1 sm:px-2 max-sm:gap-1 max-sm:px-2 py-3 rounded-full h-full flex justify-center items-center cursor-pointer ">
                <svg
                  className="h-3/4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.62 6.45a3.14 3.14 0 1 0-3.13-3.14 3.15 3.15 0 0 0 3.13 3.14Zm0-4.77A1.64 1.64 0 1 1 14 3.31a1.64 1.64 0 0 1 1.62-1.63ZM23.26 18.64a.74.74 0 0 0-1-.31l-.33.17-3.59-6.69a2.19 2.19 0 0 0 .48-1.37 2.25 2.25 0 0 0-2.24-2.26h-1.89l-1.84-2a3.5 3.5 0 0 0-4.53-.58L3.7 8.71A3.05 3.05 0 0 0 4 14l2.82 1.47-1.14 1.21a2.33 2.33 0 0 0-.56 1.25l-3.38-1.69a.75.75 0 0 0-1 .33.76.76 0 0 0 .34 1L13 23.52a2.78 2.78 0 0 0 1.26.3 2.74 2.74 0 0 0 1.33-.34l.82-.45a.75.75 0 0 0-.72-1.32l-.82.46a1.3 1.3 0 0 1-1.2 0l-4.78-2.36.11-.12 2.6-2.89a2.81 2.81 0 0 0-.8-4.37l-2.6-1.35 1.9-1.26 1.9 2.12a2.22 2.22 0 0 0 1.66.74h2.86a2 2 0 0 0 .5-.06l3.58 6.58-.54.29a.75.75 0 0 0-.31 1 .74.74 0 0 0 .66.39.72.72 0 0 0 .35-.08l.55-.3.44.83a.77.77 0 0 0 .67.4.73.73 0 0 0 .35-.09.76.76 0 0 0 .31-1l-.45-.82.32-.17a.75.75 0 0 0 .31-1.01Zm-6.7-7.46H13.7a.77.77 0 0 1-.56-.25l-2.51-2.76a.5.5 0 0 0-.63-.08l-3.79 2.54a.61.61 0 0 0 0 1l3.88 2.09a1.31 1.31 0 0 1 .69.92 1.28 1.28 0 0 1-.31 1.11l-2.56 2.93a.71.71 0 0 1-.55.25.77.77 0 0 1-.51-.19.76.76 0 0 1 0-1.06l1.79-2a.73.73 0 0 0-.21-1.15l-3.74-1.91A1.56 1.56 0 0 1 4.54 10l4.62-3.16a2 2 0 0 1 2.58.32L14 9.68h2.54a.75.75 0 0 1 0 1.5Z"></path>
                </svg>
                Ski
              </li>
              <li className="li-bg-main-hover mr-2 xl:gap-2 xl:px-4 lg:gap-2 lg:px-3 sm:gap-1 sm:px-2 max-sm:gap-1 max-sm:px-2 py-3 rounded-full h-full flex justify-center items-center cursor-pointer ">
                <svg
                  className="h-3/4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M.153 22.237l.85 1.117c.634.76 1.724.856 2.456.244.078-.066.15-.138.216-.217l.944-1.132a.228.228 0 0 1 .349.001l.944 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.95 1.132a1.728 1.728 0 0 0 2.65 0l.942-1.133a.228.228 0 0 1 .349.001l.942 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.94 1.13a1.728 1.728 0 0 0 2.652.001l.585-.7a.75.75 0 1 0-1.15-.962l-.585.7a.228.228 0 0 1-.35 0l-.94-1.13a1.728 1.728 0 0 0-2.652-.001l-.944 1.132a.228.228 0 0 1-.349-.001l-.942-1.13a1.728 1.728 0 0 0-2.651-.001l-.943 1.132a.228.228 0 0 1-.348-.001l-.95-1.132a1.726 1.726 0 0 0-2.65 0l-.944 1.133a.228.228 0 0 1-.349-.001l-.944-1.13a1.728 1.728 0 0 0-2.65 0l-.945 1.13a.228.228 0 0 1-.349-.001l-.828-1.09a.75.75 0 1 0-1.194.91zm11.335-2.68A7.161 7.161 0 0 1 15.77 18h7.481a.75.75 0 0 0 0-1.5h-7.5a8.673 8.673 0 0 0-5.196 1.884.75.75 0 1 0 .934 1.174zM22.285 7.969a1.729 1.729 0 0 0 .781-2.711C19.43.713 12.8-.022 8.256 3.614a10.536 10.536 0 0 0-3.952 8.171A1.73 1.73 0 0 0 6.6 13.427l15.684-5.459zm-.494-1.416L6.107 12.01a.229.229 0 0 1-.304-.218 9.036 9.036 0 0 1 16.09-5.599.228.228 0 0 1-.102.359zm-9.459-4.2L11.69.504a.75.75 0 1 0-1.416.492l.643 1.848a.75.75 0 1 0 1.416-.492zm1.156 7.883l2.527 7.262a.75.75 0 1 0 1.416-.494l-2.527-7.26a.75.75 0 1 0-1.416.492z"></path>
                </svg>
                Beach
              </li>
            </ul>
            <div className="w-full flex justify-evenly flex-wrap">
              <div className="h-40 md:w-40 mt-4 lg:w-48 xl:w-48 max-sm:w-40">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-32 w-full"
                    src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140025101.jpg?k=631b787d380ee36d1b49691317925976e4ae3d2cf9ca9544a26ccc9885202e12&o="
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Villejuif</p>
                    <p className="text-gray-500">700 miles Away</p>
                  </div>
                </div>
              </div>
              <div className="h-40 mt-4 md:w-40 lg:w-48 xl:w-48 max-sm:w-40">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-32 w-full"
                    src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140046613.jpg?k=bf730767ccc5a12020fddd6584eb018e535432b59030c7e658ac5d3e6a5ddfae&o="
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Fort Payne</p>
                    <p className="text-gray-500">775 miles Away</p>
                  </div>
                </div>
              </div>
              <div className="h-40 md:w-40 lg:w-48 mt-4 xl:w-48 max-sm:w-40">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-32 w-full"
                    src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140046623.jpg?k=638b9bb3f8bb3460bfa44632c4ebde6abf38d9d5a0180c4cf2f5b3795a968869&o="
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Hunstville</p>
                    <p className="text-gray-500">803 miles Away</p>
                  </div>
                </div>
              </div>
              <div className="h-40 md:w-40 lg:w-48 mt-4 xl:w-48 max-sm:w-40">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-32 w-full"
                    src="https://q-xx.bstatic.com/xdata/images/city/250x250/689603.jpg?k=59e9972a1882387f6a8f35f6f2193c7f4e5203723651307392170ce756247bb7&o="
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Myrtlr Beach</p>
                    <p className="text-gray-500">2,643 properties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="w-full flex justify-between items-center h-11">
              <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
                Get inspiration for your next trip
              </h1>
              <div className="hover:underline font-b more-link cursor-pointer">
                More
              </div>
            </div>
            <div className="w-full text-white xl:h-60 md:h-60 max-sm:h-52 flex mt-4 xl:justify-start md:justify-center max:sm:justify-center flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap max-sm:flex-wrap gap-4">
              <div className="cursor-pointer overflow-hidden japan-img xl:w-1/2 lg:w-1/2 md:w-3/4 max-sm:w-full relative h-full">
                <img
                  className="h-full w-full"
                  src="https://cf.bstatic.com/xdata/images/xphoto/700x350/191445417.webp?k=158eec3229f0447f2259710f61b7190c8912fd6fcdf8bc95812346c78365d5db&o="
                  alt=""
                />
                <div className="absolute bg-gradient-to-b from-transparent to-black bg-gradient bottom-0 w-full h-18 p-4">
                  <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
                    Get inspiration for your next trip
                  </h1>
                  <p className="f-size-r mt-2 font-b">
                    Pick a vibe and explore the top destinations in France
                  </p>
                </div>
              </div>
              <div className="text-black xl:w-1/2 lg:w-1/2 md:w-3/4 max-sm:w-full h-full flex gap-2">
                <div className="h-full w-1/2">
                  <div className="w-full h-3/5">
                    <img
                      className="h-full w-full"
                      src="https://cf.bstatic.com/xdata/images/xphoto/540x405/145842056.webp?k=35826ff67dda354074826a1290656e9616b7de7b6ba83b4f263eb9adfcd76055&o="
                      alt=""
                    />
                  </div>
                  <div className="w-full mt-1 md:h-2/5 max-sm:h-1/5 flex flex-col justify-evenly">
                    <p className="font-b ">
                      The world’s most romantic destinations
                    </p>
                    <p>
                      Love is certainly all around at these amorous locations.
                    </p>
                  </div>
                </div>
                <div className="h-full w-1/2">
                  <div className="w-full h-3/5">
                    <img
                      className="h-full w-full"
                      src="https://cf.bstatic.com/xdata/images/xphoto/540x405/194638265.webp?k=c0e9506aba1aba9344c84fc3f3cd9d0ef3cd094fe3de8bc4fe28be17cba92603&o="
                      alt=""
                    />
                  </div>
                  <div className="w-full mt-1 md:h-2/5 max-sm:h-1/5 flex flex-col justify-evenly">
                    <p className="font-b ">
                      TWhere to experience spring break in the US
                    </p>
                    <p>
                      Featuring frosty mountain hot springs and beaches with
                      lots of parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:mt-8 lg:mt-24 md:mt-72 sm:mt-60 max-sm:mt-60 p-1 xl:h-96 lg:h-52 md:h-52 sm:h-48 max-sm:h-40 w-full">
            <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
              Stay at our top unique properties
            </h1>
            <p className="f-size-r mt-1">
              From castles and villas to boats and igloos, we have it all
            </p>
            <div className="w-full lg:justify-evenly max-sm:justify-evenly mt-6 flex gap-2 flex-wrap">
              <div className="xl:w-52 lg:w-48 md:w-44 max-sm:w-40 h-72">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-40 w-full"
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1"
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">La Roulotte de Ciney</p>
                    <p className="text-gray-500 mt-1">Belgium, Ciney</p>
                    <div className="w-full mt-1 items-center flex text-gray-500">
                      <div className="text-xs h-6 flex justify-center items-center text-white rounded-sm bg-main w-6">
                        8.4
                      </div>
                      <p className="ml-2">
                        <span className="text-black">very good</span> . 252
                        reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-52 lg:w-48 md:w-44 max-sm:w-40 h-72">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-40 w-full"
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1"
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Wierszyki Shelters</p>
                    <p className="text-gray-500 mt-1">Poland, Kiszkowo</p>
                    <div className="w-full mt-1 items-center flex text-gray-500">
                      <div className="text-xs h-6 flex justify-center items-center text-white rounded-sm bg-main w-6">
                        9.7
                      </div>
                      <p className="ml-2">
                        <span className="text-black">Exceptional</span> . 88
                        reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-52 lg:w-48 md:w-44 max-sm:w-40 h-72">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-40 w-full"
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1"
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Ranczo w Dolinie</p>
                    <p className="text-gray-500 mt-1">Poland, Kiszkowo</p>
                    <div className="w-full mt-1 items-center flex text-gray-500">
                      <div className="text-xs h-6 flex justify-center items-center text-white rounded-sm bg-main w-6">
                        9.5
                      </div>
                      <p className="ml-2">
                        <span className="text-black">Exceptional</span> . 233
                        reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-52 lg:w-48 md:w-44 max-sm:w-40 h-72">
                <div className="cursor-pointer h-full flex-col flex w-full">
                  <img
                    className="h-40 w-full"
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1"
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Tiny House Dreischwesternherz</p>
                    <p className="text-gray-500 mt-1">Germany, Trier</p>
                    <div className=" w-full mt-1 items-center flex text-gray-500">
                      <div className="h-6 text-xs  flex justify-center items-center text-white rounded-sm bg-main w-6">
                        9.6
                      </div>
                      <p className="ml-2">
                        <span className="text-black">Exceptional</span> . 135
                        reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mtC xl:mt-8 lg:mt-52 md:mt-48 p-1  w-full">
            <div className="w-full flex justify-between items-center h-11">
              <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
                Homes guests love
              </h1>
              <div className="hover:underline font-b more-link">
                Discover Homes
              </div>
            </div>
            <div className="w-full mt-3 flex justify-evenly flex-wrap gap-4">
              <div className="xl:w-56 md:w-66 max-sm:w-40 ">
                <div className="cursor-pointer h-full flex-col justify-between flex w-full">
                  <img
                    className="md:h-52 max-sm:h-40 w-full"
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1"
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">
                      6 Continents Apartments by Prague Residences
                    </p>
                    <p className="text-gray-500 mt-1">
                      Starting from
                      <span className="font-b text-black">$222</span>
                    </p>
                    <div className="w-full mt-1 items-center flex text-gray-500">
                      <div className="text-xs h-6 flex justify-center items-center text-white rounded-sm bg-main w-6">
                        8.3
                      </div>
                      <p className="ml-2">
                        <span className="text-black">very good</span> . 252
                        reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-56 md:w-66 max-sm:w-40 ">
                <div className="cursor-pointer h-full flex-col justify-between flex w-full">
                  <img
                    className="md:h-52 max-sm:h-40 w-full"
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=f3889222c82f4a8e3783dddb5f1cc04d6140eeb2d5cb8297817a15aacfe4d191&o=&s=1"
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">
                      3 Epoques Apartments by Prague Residences
                    </p>
                    <p className="text-gray-500 mt-1">
                      Starting from
                      <span className="font-b text-black">$311</span>
                    </p>
                    <div className="w-full mt-1 items-center flex text-gray-500">
                      <div className="text-xs h-6 flex justify-center items-center text-white rounded-sm bg-main w-6">
                        8.7
                      </div>
                      <p className="ml-2">
                        <span className="text-black">Excellent</span> . 404
                        reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-56 md:w-66 max-sm:w-40 ">
                <div className="cursor-pointer h-full flex-col justify-between flex w-full">
                  <img
                    className="md:h-52 max-sm:h-40 w-full"
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1"
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">
                      6 Continents Apartments by Prague Residences
                    </p>
                    <p className="text-gray-500 mt-1">
                      Starting from
                      <span className="font-b text-black">$126</span>
                    </p>
                    <div className="w-full mt-1 items-center flex text-gray-500">
                      <div className="text-xs h-6 flex justify-center items-center text-white rounded-sm bg-main w-6">
                        8.7
                      </div>
                      <p className="ml-2">
                        <span className="text-black">Excellent</span> . 2,584
                        reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-56 md:w-66 max-sm:w-40 ">
                <div className="cursor-pointer h-full flex-col justify-between flex w-full">
                  <img
                    className="md:h-52 max-sm:h-40 w-full"
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">
                      6 Continents Apartments by Prague Residences
                    </p>
                    <p className="text-gray-500 mt-1">
                      Starting from
                      <span className="font-b text-black">$216</span>
                    </p>
                    <div className="w-full mt-1 items-center flex text-gray-500">
                      <div className="text-xs h-6 flex justify-center items-center text-white rounded-sm bg-main w-6">
                        8.7
                      </div>
                      <p className="ml-2">
                        <span className="text-black">Excellent</span> . 7,284
                        reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-1  w-full">
            <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
              Homes guests love
            </h1>
            <div className="w-full h-3/4 mt-3 gap-4 flex-wrap flex gap-4">
              <div className="h-full md:w-48 max-sm:w-40">
                <div className="cursor-pointer h-full flex-col justify-between flex w-full">
                  <img
                    className="md:h-56 max-sm:h-48 w-full"
                    src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/f43b42664bbf44f174b44c64fd71440b4af56888.jpg"
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">Travel discussion</p>
                    <p className="text-gray-500 mt-1">View forum</p>
                    <p className="text-gray-500 mt-1">559,436 travelers</p>
                  </div>
                </div>
              </div>
              <div className="h-full md:w-48 max-sm:w-40">
                <div className="cursor-pointer h-full flex-col justify-between flex w-full">
                  <img
                    className="md:h-56 max-sm:h-48 w-full"
                    src="https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/592ac5a7bbd5433c1aba6f1afdea794e572c9a69.png"
                    alt=""
                  />
                  <div className="w-full mt-2">
                    <p className="font-b">My Communities</p>
                    <p className="text-gray-500 mt-1">View all</p>
                    <p className="text-gray-500 mt-1">9,894,940 travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-8 wroldmap-bg w-full xl:h-44 md:h-36 max-sm:h-32 border-1 border-gray-300 border-solid flex py-2 px-4">
            <img
              className="lg:h-40 md:h-36 max-sm:h-20"
              src="https://t-cf.bstatic.com/design-assets/assets/v3.62.0/illustrations-traveller/GlobeGeniusBadge.png"
              alt=""
            />
            <div className="h-full flex flex-col justify-center p-2">
              <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
                Get instant discounts
              </h1>
              <p className="mt-2">
                Just sign into your Booking.com account and look for the blue
                Genius logo to save
              </p>
              <div className="btn-con-wr py-1 w-1/3 justify-evenly items-center flex mt-2">
              <button className="f-size-r bg-white text-sec border-1 md:h-8 max-sm:h-5 xl:px-3 px-2 border-solid flex items-center justify-between">
                    Register
                  </button>
                  <button className="f-size-r bg-white text-sec border-1 md:h-8 max-sm:h-5 xl:px-3 px-2 border-solid flex items-center justify-between">
                    Sign in
                  </button>
              </div>
            </div>
          </div>
          <div className="xl:mt-8 lg:mt-24 md:mt-24 sm:mt-8 max-sm:mt-8 p-1 w-full">
            <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
              Quick and easy trip planner
            </h1>
            <ul className="h-10 mt-5 text-black w-full f-size-r flex">
              <li className="li-bg-main mr-2 xl:gap-2 xl:px-4 lg:gap-2 lg:px-3 sm:gap-2 sm:px-2 max-sm:gap-1 max-sm:px-2 py-3 rounded-full h-full flex justify-center items-center cursor-pointer border-1 border-white ">
                Regions
              </li>
              <li className="li-bg-main-hover mr-2 xl:gap-2 xl:px-4 lg:gap-2 lg:px-3 sm:gap-1 sm:px-2 max-sm:gap-1 max-sm:px-2 py-3 rounded-full h-full flex justify-center items-center cursor-pointer ">
                Cities
              </li>
              <li className="li-bg-main-hover mr-2 xl:gap-2 xl:px-4 lg:gap-2 lg:px-3 sm:gap-1 sm:px-2 max-sm:gap-1 max-sm:px-2 py-3 rounded-full h-full flex justify-center items-center cursor-pointer ">
                Place of interest
              </li>
            </ul>
            <div className="w-full md:flex-nowrap max-sm:flex-wrap mt-3 flex gap-4">
              <ul className="w-1/5 p-2 h-full flex flex-col gap-4">
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Mykonos</p>
                  <p className="text-gray-500">1,453 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Ras Al Khaimah</p>
                  <p className="text-gray-500">113 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Uttar Pradesh</p>
                  <p className="text-gray-500">4,402 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Ibiza</p>
                  <p className="text-gray-500">1,645 properties</p>
                </li>
              </ul>
              <ul className="w-1/5 p-2 h-full flex flex-col gap-4">
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">texel</p>
                  <p className="text-gray-500">1,453 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Bora Bora</p>
                  <p className="text-gray-500">59 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Santoini</p>
                  <p className="text-gray-500">4,762 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Zanzibar</p>
                  <p className="text-gray-500">837 properties</p>
                </li>
              </ul>
              <ul className="w-1/5 p-2 h-full flex flex-col gap-4">
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Guernsey</p>
                  <p className="text-gray-500">61 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Phuket Province</p>
                  <p className="text-gray-500">5,495 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Bihar</p>
                  <p className="text-gray-500">764 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Hawaii</p>
                  <p className="text-gray-500">5,521 properties</p>
                </li>
              </ul>
              <ul className="w-1/5 p-2 h-full flex flex-col gap-4">
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Isle of Wight</p>
                  <p className="text-gray-500">940 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Jersey</p>
                  <p className="text-gray-500">89 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Tenerife</p>
                  <p className="text-gray-500">9,612 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">England</p>
                  <p className="text-gray-500">74,157 properties</p>
                </li>
              </ul>
              <ul className="w-1/5 p-2 h-full flex flex-col gap-4">
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Cornwall</p>
                  <p className="text-gray-500">5,313 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Lake Distric</p>
                  <p className="text-gray-500">2,406 properties</p>
                </li>
                <li className="w-full flex justify-evenly flex-col p-2 h-1/4">
                  <p className="font-bold">Ball</p>
                  <p className="text-gray-500">12,684 properties</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default MainSection;
