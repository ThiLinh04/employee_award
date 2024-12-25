import React from "react";

export const Card = (props) => {
    const { item, vote, onSelect } = props;

    const renderItem = () => {
        return JSON.parse(item.data).length > 0 && JSON.parse(item.data).map((value, index) => {
            return <div className="pr-4 pt-4 max-w-sm" key={index}>
                <div className="flex rounded-lg h-full dark:bg-gray-800 p-8 flex-col border border-yellow-500">
                    <div className="flex items-center mb-3 justify-center">
                        <h2 className="text-lg font-medium ">{value?.name}</h2>
                    </div>

                    <div className="mb-5">
                        <img src={value?.image} className="rounded" />
                    </div>
                    <button className={` hover:bg-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded focus:outline-none
                    ${vote?.find(i => i.type === item?.type && i.id === value?.id) ? 'text-white bg-yellow-500' : 'text-yellow-700 bg-transparent'}`}
                        onClick={() => onSelect(item?.type, value?.id)}>
                        {vote?.find(i => i.type === item?.type && i.id === value?.id) ? "Selected" : "Vote"}
                    </button>
                </div>
            </div>
        })
    }

    return <div className="flex flex-wrap mt-2">
        {renderItem()}
    </div>
}