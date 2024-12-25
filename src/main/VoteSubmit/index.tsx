import React from "react";

export const VoteSubmit = (props) => {
    const { countVote, setVote } = props;
    const [openPopup, setOpenPopup] = React.useState(false);

    const onOpen = (open) => {
        setOpenPopup(open)
        if (!open) {
            setVote([])
        }
    }
    const renderSubmit = () => {
        return <>
            <button
                onClick={() => onOpen(true)}
                data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                type="button"
                className={`inline-block fixed bottom-[40px] right-[40px] 
            p-3 bg-yellow-700 text-white font-medium text-xs leading-tight border-none hover:border-none
            uppercase rounded-full shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg 
            focus:outline-none active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out ${countVote == 0 && 'opacity-50 cursor-not-allowed'}`}>
                Submit ballot ({countVote})
            </button>
        </>
    };

    const renderPopup = () => {
        return <div id="popup-modal" tabIndex={-1}
            className="bg-black bg-opacity-60 transition-opacity duration-300 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full h-full m-auto flex items-center">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-4/5">
                    <button onClick={() => onOpen(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-14 shrink-0 fill-green-500 inline" viewBox="0 0 512 512">
                            <path
                                d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"
                                data-original="#000000" />
                            <path
                                d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"
                                data-original="#000000" />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 mt-4">Successfully </h3>
                    </div>
                </div>
            </div>
        </div>
    }

    return <>
        {renderSubmit()}
        {openPopup && countVote > 0 && renderPopup()}
    </>
}