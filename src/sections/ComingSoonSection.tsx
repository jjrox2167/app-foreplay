import React from 'react'

export default function ComingSoonSection
() {
  return (
    <div>

<section className="py-14 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full md:px-16 px-10 md:pt-16 pt-10 pb-10 bg-gray-900 rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
                <div className="flex-col justify-end items-center lg:gap-16 gap-10 flex">
                    <div className="flex-col justify-center items-center gap-10 flex">
                        <div className="flex-col justify-start items-center gap-2.5 flex">
                            <h2 className="text-center text-emerald-400 md:text-6xl text-5xl font-bold font-manrope leading-normal">App Coming Soon</h2>
                            <p className="text-center text-gray-500 text-base font-normal leading-relaxed">TBD remaining until the big reveal of our new product!</p>
                        </div>
                        <div className="flex items-start justify-center w-full gap-2 count-down-main">
                            <div className="timer flex flex-col gap-0.5">
                                <div className="">
                                    <h3 className="countdown-element days text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                                </div>
                                <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">DAYS</p>
                            </div>
                            <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
                            <div className="timer flex flex-col gap-0.5">
                                <div className="">
                                    <h3 className="countdown-element hours text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                                </div>
                                <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">HRS</p>
                            </div>
                            <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
                            <div className="timer flex flex-col gap-0.5">
                                <div className="">
                                    <h3 className="countdown-element minutes text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                                </div>
                                <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">MINS</p>
                            </div>
                            <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
                            <div className="timer flex flex-col gap-0.5">
                                <div className="">
                                    <h3 className="countdown-element seconds text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                                </div>
                                <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">SECS</p>
                            </div>
                        </div>
                        <div className="w-full flex-col justify-center items-center gap-5 flex">
                            <h6 className="text-center text-emerald-400 text-base font-semibold leading-relaxed">Launched Date: TBD</h6>
                            <div className="justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                                <input type="text" className="w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex" 
                                placeholder="Please enter your e-mail address..."
                                 />
                                <button className="sm:w-fit w-full px-3.5 py-2 bg-emerald-400 hover:bg-emerald-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                    <span className="px-1.5 text-gray-900 text-sm font-medium leading-6 whitespace-nowrap">Notify Me!</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-sm font-normal leading-snug">Get in touch with us: <a href="" className="hover:text-gray-100 transition-all duration-700 ease-in-out"> support@foreplay.com</a></p>
            </div>
        </div>
    </section>
    </div>
  )
}
