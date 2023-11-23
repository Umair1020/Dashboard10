import { FaArrowRight } from "react-icons/fa";
import Sidebar from "../component/Sidebar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMediaQuery } from "react-responsive";

const HomeCollapeseVersion = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  return (
    <>
      <Desktop>
        <div className="relative bg-maincolors-algawali-background-color w-full h-[1024px] flex flex-row items-start justify-start text-left text-5xl text-neutral-whitepure1 font-fonts-body-medium">
          <div className="bg-maincolors-algawali-background-color box-border h-[1024px] overflow-hidden flex flex-col items-start justify-start gap-[32px] border-r-[1px] border-solid border-neutral-500">
            {/* <div className="flex flex-col items-start justify-start pt-0 px-0 pb-12 gap-[80px]"> */}
            <Sidebar />
            <main className="main " id="main">

              <div className=" self-stretch flex-1 flex flex-col items-start justify-start gap-[24px] text-3xs text-neutral-800">
                <div className="row self-stretch rounded-corner-radius-12-round bg-neutral-200 flex flex-row items-center justify-start py-6 px-4 gap-[16px] text-neutral-whitepure border-[1px] border-solid border-maincolors-algawali-stroke-color">
                  <div className="col-lg-4  flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4">
                    <div className="self-stretch flex flex-col  justify-center gap-[16px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                        <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons9.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-neutral-800 text-left">
                          Hired By Client
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-neutral-800">
                        <b className="relative tracking-[0.02em] leading-[140%]">
                          23
                        </b>
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            123,23
                          </div>
                        </div>
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/icons10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4">
                    <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
                      <div className=" self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                        <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons11.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-neutral-800 text-left">
                          Planed Interviews
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-neutral-800">
                        <b className="relative tracking-[0.02em] leading-[140%]">
                          17
                        </b>
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            123,23
                          </div>
                        </div>
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/icons10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 self-stretch flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4 text-center">
                    <div className=" self-stretch flex-1 flex flex-col items-center justify-start gap-[16px]">
                      <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
                        <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/icons12.svg"
                        />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-neutral-800 text-left">
                          Maids Hidden From Main Site
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-left text-13xl text-neutral-800">
                        <b className="flex-1 relative tracking-[0.02em] leading-[140%]">
                          02
                        </b>
                        <FaArrowRight />
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-7001 hidden">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            123,23
                          </div>
                        </div>
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/icons10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4  self-stretch flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4 text-center">
                    <div className="self-stretch  flex flex-col items-center justify-start gap-[16px]">
                      <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
                        <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons15.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-neutral-800 text-left">
                          Total Number Of Non-Hire Maids
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-left text-13xl text-statuscolor-red">
                        <b className="flex-1 relative tracking-[0.02em] leading-[140%]">
                          2310
                        </b>
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/icons16.svg"
                        />
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-7001 hidden">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            123,23
                          </div>
                        </div>
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/icons10.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-corner-radius-12-round bg-neutral-200 flex flex-row items-start justify-start py-6 px-4 gap-[16px] border-[1px] border-solid border-maincolors-algawali-stroke-color">
                  <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                      <div className="col-lg-4 self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                        <div className="rounded-corner-radius-16-round-2 bg-agent flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons16.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                          Agents Requests
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl">
                        <b className="relative tracking-[0.02em] leading-[140%]">
                          72,299
                        </b>
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            72,299
                          </div>
                        </div>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                      <div className="col-lg-4 self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                        <div className="rounded-corner-radius-16-round-2 bg-agent flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons15.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                          Agents Accepted Requests
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-statuscolor-green">
                        <b className="relative tracking-[0.02em] leading-[140%]">
                          72,299
                        </b>
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            72,299
                          </div>
                        </div>
                        <FaArrowRight />

                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                        <div className="rounded-corner-radius-16-round-2 bg-agent flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons15.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                          Agents Pending Requests
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-maincolors-algawali-primary">
                        <b className="relative tracking-[0.02em] leading-[140%]">
                          72,299
                        </b>
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            72,299
                          </div>
                        </div>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                        <div className="rounded-corner-radius-16-round-2 bg-agent flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons23.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">{`Agent Rejected Requests `}</b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-statuscolor-red">
                        <b className="relative tracking-[0.02em] leading-[140%]">
                          72,299
                        </b>
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            72,299
                          </div>
                        </div>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-corner-radius-12-round bg-neutral-200 flex flex-row items-start justify-start py-6 px-4 gap-[16px] border-[1px] border-solid border-maincolors-algawali-stroke-color">
                  <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                        <div className="rounded-corner-radius-16-round-2 bg-maid flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons15.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                          Self Applied Requests
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl">
                        <b className="relative tracking-[0.02em] leading-[140%]">
                          72,299
                        </b>
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            72,299
                          </div>
                        </div>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                        <div className="rounded-corner-radius-16-round-2 bg-maid flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons15.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                          Self Applied Accepted Requests
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-statuscolor-green">
                        <b className="relative tracking-[0.02em] leading-[140%]">
                          72,299
                        </b>
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            72,299
                          </div>
                        </div>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                        <div className="rounded-corner-radius-16-round-2 bg-maid flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons15.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                          Self Applied Pending Requests
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-maincolors-algawali-primary">
                        <b className="relative tracking-[0.02em] leading-[140%]">
                          72,299
                        </b>
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            72,299
                          </div>
                        </div>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                        <div className="rounded-corner-radius-16-round-2 bg-maid flex flex-row items-start justify-start p-3 relative gap-[10px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                            alt=""
                            src="/icons15.svg"
                          />
                          <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              13
                            </div>
                          </div>
                        </div>
                        <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">{`Self Applied  Rejected Requests `}</b>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-statuscolor-red">
                        <b className="relative tracking-[0.02em] leading-[140%]">
                          72,299
                        </b>
                        <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                          Today
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative tracking-[0.02em] leading-[140%]">
                            Total till now
                          </div>
                          <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                            72,299
                          </div>
                        </div>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         </main>
          </div>
        </div>
      </Desktop>
      <Mobile>
      <main className="main " id="main">

        <div className="relative bg-neutral-200 w-full overflow-hidden flex flex-col items-start justify-start pt-[190px] px-0 pb-14 box-border text-left text-3xs text-neutral-800 font-phragraph-title3">
          <div className="self-stretch flex flex-col  justify-start z-[0]">
            <div className="self-stretch bg-neutral-200 box-border overflow-x-auto flex flex-row items-start justify-start p-4 gap-[16px] min-w-[288px] text-neutral-whitepure border-[1px] border-solid border-maincolors-algawali-stroke-color">
              <div className="rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)]  w-[300px] shrink-0 flex flex-col items-start justify-start p-4 box-border" >
                <div className="self-stretch flex flex-col  justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center " >
                    <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons9.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-neutral-800 text-left">
                      Hired By Client
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-neutral-800">
                    <b className="relative tracking-[0.02em] leading-[140%]">23</b>
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative tracking-[0.02em] leading-[140%]">
                        Total till now
                      </div>
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                        123,23
                      </div>
                    </div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] w-[300px] shrink-0 flex flex-col items-start justify-start p-4 box-border">
                <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                    <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons11.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-neutral-800 text-left">
                      Planed Interviews
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-neutral-800">
                    <b className="relative tracking-[0.02em] leading-[140%]">17</b>
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative tracking-[0.02em] leading-[140%]">
                        Total till now
                      </div>
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                        123,23
                      </div>
                    </div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] w-[300px] h-[181px] shrink-0 flex flex-col items-start justify-start p-4 box-border text-center">
                <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
                    <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons4.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-neutral-800 text-left">
                      Maids Hidden From Main Site
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-left text-13xl text-neutral-800">
                    <b className="flex-1 relative tracking-[0.02em] leading-[140%]">
                      02
                    </b>
                   <FaArrowRight />
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-7001 hidden">
                      Today
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] w-[300px] h-[181px] shrink-0 flex flex-col items-start justify-start p-4 box-border text-center">
                <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
                    <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                    <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons15.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-neutral-800 text-left">
                      Total Number Of Non-Hire Maids
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-left text-13xl text-statuscolor-red">
                    <b className="flex-1 relative tracking-[0.02em] leading-[140%]">
                      2310
                    </b>
                    <FaArrowRight />
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-7001 hidden">
                      Today
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-200 box-border overflow-x-auto flex flex-row items-start justify-start p-4 gap-[16px] min-w-[288px] border-[1px] border-solid border-maincolors-algawali-stroke-color">
              <div className="rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] w-[300px] shrink-0 flex flex-col items-start justify-start p-4 box-border">
                <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                    <div className="rounded-corner-radius-16-round-2 bg-agent flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons8.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                      Agents Requests
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl">
                    <b className="relative tracking-[0.02em] leading-[140%]">
                      72,299
                    </b>
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative tracking-[0.02em] leading-[140%]">
                        Total till now
                      </div>
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                        72,299
                      </div>
                    </div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] w-[300px] shrink-0 flex flex-col items-start justify-start p-4 box-border">
                <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                    <div className="rounded-corner-radius-16-round-2 bg-agent flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons10.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                      Agents Accepted Requests
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-statuscolor-green">
                    <b className="relative tracking-[0.02em] leading-[140%]">
                      72,299
                    </b>
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative tracking-[0.02em] leading-[140%]">
                        Total till now
                      </div>
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                        72,299
                      </div>
                    </div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] w-[300px] shrink-0 flex flex-col items-start justify-start p-4 box-border">
                <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                    <div className="rounded-corner-radius-16-round-2 bg-agent flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons12.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                      Agents Pending Requests
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-maincolors-algawali-primary">
                    <b className="relative tracking-[0.02em] leading-[140%]">
                      72,299
                    </b>
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative tracking-[0.02em] leading-[140%]">
                        Total till now
                      </div>
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                        72,299
                      </div>
                    </div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] w-[300px] shrink-0 flex flex-col items-start justify-start p-4 box-border">
                <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                    <div className="rounded-corner-radius-16-round-2 bg-agent flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons14.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">{`Agent Rejected Requests `}</b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-statuscolor-red">
                    <b className="relative tracking-[0.02em] leading-[140%]">
                      72,299
                    </b>
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative tracking-[0.02em] leading-[140%]">
                        Total till now
                      </div>
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                        72,299
                      </div>
                    </div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-200 box-border overflow-x-auto flex flex-row items-start justify-start p-4 gap-[16px] min-w-[288px] border-[1px] border-solid border-maincolors-algawali-stroke-color">
              <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4 box-border min-w-[300px]">
                <div className="w-[260.33px] flex flex-col items-start justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                    <div className="rounded-corner-radius-16-round-2 bg-maid flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons16.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                      Self Applied Requests
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl">
                    <b className="relative tracking-[0.02em] leading-[140%]">
                      72,299
                    </b>
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative tracking-[0.02em] leading-[140%]">
                        Total till now
                      </div>
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                        72,299
                      </div>
                    </div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4 box-border min-w-[300px]">
                <div className="w-[260.33px] flex flex-col items-start justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                    <div className="rounded-corner-radius-16-round-2 bg-maid flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons18.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                      Self Applied Accepted Requests
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-statuscolor-green">
                    <b className="relative tracking-[0.02em] leading-[140%]">
                      72,299
                    </b>
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative tracking-[0.02em] leading-[140%]">
                        Total till now
                      </div>
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                        72,299
                      </div>
                    </div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4 box-border min-w-[300px]">
                <div className="w-[293.33px] flex flex-col items-start justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                    <div className="rounded-corner-radius-16-round-2 bg-maid flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons20.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">
                      Self Applied Pending Requests
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-maincolors-algawali-primary">
                    <b className="relative tracking-[0.02em] leading-[140%]">
                      72,299
                    </b>
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative tracking-[0.02em] leading-[140%]">
                        Total till now
                      </div>
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                        72,299
                      </div>
                    </div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-corner-radius-8-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-start p-4 box-border min-w-[300px]">
                <div className="w-[260.33px] flex flex-col items-start justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-center">
                    <div className="rounded-corner-radius-16-round-2 bg-maid flex flex-row items-start justify-start p-3 relative gap-[10px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                        alt=""
                        src="/icons22.svg"
                      />
                      <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                          13
                        </div>
                      </div>
                    </div>
                    <b className="flex-1 relative text-sm tracking-[0.02em] leading-[140%] text-left">{`Self Applied  Rejected Requests `}</b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-13xl text-statuscolor-red">
                    <b className="relative tracking-[0.02em] leading-[140%]">
                      72,299
                    </b>
                    <div className="flex-1 relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">
                      Today
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative tracking-[0.02em] leading-[140%]">
                        Total till now
                      </div>
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium text-neutral-800">
                        72,299
                      </div>
                    </div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[0px] left-[0px] bg-maincolors-algawali-primary-2 shadow-[0px_2px_6px_rgba(0,_7,_38,_0.32)] w-[360px] flex flex-col items-start justify-start p-4 box-border gap-[8px] z-[1] text-center text-neutral-whitepure">
            <Sidebar />

          </div>
        </div>
        </main>

      </Mobile>
    </>
  );
};

export default HomeCollapeseVersion;
