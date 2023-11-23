import { FaMoon, FaSun, FaTimes } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"

const Profilecard = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 802 })
        return isDesktop ? children : null
    }
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const [showProfileCard, setShowProfileCard] = useState(true); // State to manage card visibility

    const handleCloseProfileCard = () => {
        setShowProfileCard(false);
    };
    return (
        <div>
            <Desktop>
                {showProfileCard && (
                    <div className={`relative rounded-corner-radius-16-round-2 bg-maincolors-algawali-background-color shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] box-border w-full flex flex-col items-center justify-start p-4 gap-[24px] text-left text-5xl text-neutral-800 font-phragraph-title3 border-[1px] border-solid border-maincolors-algawali-stroke-color"  ${isDarkMode ? 'dark-mode text-white' : 'light-mode text-black'
                        }`}
                        style={{ marginTop: '462px' }}
                    >
                        <div className="self-stretch bg-maincolors-algawali-background-color flex flex-col items-start justify-center">
                            <div className={`self-stretch flex flex-col items-start justify-center ${isDarkMode ? 'dark-mode text-white' : 'light-mode text-black'
                                }`} >
                                <div className="self-stretch flex flex-row items-center justify-start">
                                    <b className="flex-1 relative tracking-[0.02em] leading-[140%] flex items-center h-9">{`Profile Info `}</b>
                                    <button onClick={handleCloseProfileCard} className="text-neutral-500">
                                        <FaTimes />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`self-stretch rounded-corner-radius-12-round bg-neutral-300 flex flex-col items-center justify-start p-2 text-lg" ${isDarkMode ? 'dark-mode text-white' : 'light-mode text-black'
                            }`}>
                            <div className={`self-stretch rounded-corner-radius-8-round bg-maincolors-algawali-background-color flex flex-col items-center justify-start p-4 gap-[24px] ${isDarkMode ? 'dark-mode text-white' : 'light-mode text-black'
                                }`}>
                                <div className="flex flex-row items-center justify-center relative gap-[10px]">
                                    <img
                                        className="rounded-[10000px] max-w-full overflow-hidden h-[184px] object-cover z-[0]"
                                        alt=""
                                        src="/user2.png"
                                    />
                                    <div className="my-0 mx-[!important] absolute right-[0px] bottom-[0px] rounded-[1000px] bg-neutral-whitepure1 flex flex-row items-center justify-center p-2 z-[1]">
                                        <img
                                            className="relative w-6 h-6 overflow-hidden shrink-0"
                                            alt=""
                                            src="/edit.png"
                                        />
                                    </div>
                                </div>
                                <div className={`self-stretch h-[49px] flex flex-col items-center justify-center gap-[4px] text-center${isDarkMode ? 'dark-mode text-white' : 'light-mode text-black'
                                    }`}>
                                    <b className="self-stretch relative tracking-[0.02em] items-center  leading-[140%]">
                                        Mark Smith
                                    </b>
                                    <div className="self-stretch relative text-sm tracking-[0.02em] items-center  leading-[140%] ">
                                        Admin/Staff Member
                                    </div>
                                </div>
                                <div className={`self-stretch rounded-corner-radius-12-round  overflow-hidden flex flex-row items-start justify-center p-1 gap-[4px] text-xs border-[1px] border-solid border-neutral-500 ${isDarkMode ? 'dark-mode text-white' : 'light-mode text-black'
                                    }`}>
                                    <div
                                        className={`flex-1 rounded-corner-radius-12-round  shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] overflow-hidden flex flex-row items-center justify-center p-3 gap-[4px] ${!isDarkMode ? 'bg-maincolors-algawali-background-color' : ''}`}
                                        onClick={!isDarkMode ? toggleMode : null}
                                    >
                                        <FaSun />
                                        <div className="relative tracking-[0.02em] leading-[136%]">Light</div>
                                    </div>
                                    <div
                                        className={`flex-1 rounded-corner-radius-8-round flex flex-row items-center justify-center p-3 gap-[4px]  ${isDarkMode ? 'bg-maincolors-algawali-background-color' : ''}`}
                                        onClick={isDarkMode ? toggleMode : null}
                                    >
                                        <FaMoon />
                                        <div className="relative tracking-[0.02em] leading-[136%]">Dark</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-14 flex flex-col items-center justify-center text-base text-statuscolor-red">
                                    <div className="self-stretch flex flex-row items-center justify-center py-4 px-6">
                                        <div className="flex flex-row items-center justify-center gap-[16px]">
                                            <img
                                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                                alt=""
                                                src="/icons2.svg"
                                            />
                                            <div className="flex flex-row items-center justify-start gap-[8px]">
                                                <div className="relative tracking-[0.02em]">Log Out</div>
                                                <div className="rounded-[39px] bg-maincolors-algawali-secondry-color-dark hidden" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Desktop>
      
        </div>
    )
}

export default Profilecard