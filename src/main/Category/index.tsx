import React from "react";
import { Card } from "../../component/Card";
import { VoteSubmit } from "../VoteSubmit";

export enum ETypeAward {
    Employee = 'best-employee',
    Leader = 'best-leader'
}

export const Category = () => {
    const [listData, setListData] = React.useState([]);
    const [vote, setVote] = React.useState([]);

    React.useEffect(() => {
        getBallotData()
    }, [])

    const getBallotData = () => {
        const url = 'https://676a15d4863eaa5ac0dd51c7.mockapi.io/api/list'
        fetch(url, {
            method: "GET",
            // headers: {
            //     "X-RapidAPI-Key": "your-api-key",
            //     "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
            // },
        })
            .then((response) => response.json())
            .then((data) => {
                setListData(data)
            })
            .catch((error) => console.log(error));
    }

    const handleSelect = (type, id) => {
        let _vote = [...vote]
        const index = _vote.findIndex(item => item.type === type);
        if (index !== -1) {
            _vote[index].id = id;
        } else {
            _vote.push({ type, id });
        }
        setVote(_vote)
    }

    const renderAward = () => {
        if (listData?.length == 0) return null;
        return listData?.map((item, index) => {
            return <div key={index}>
                <div className="w-auto bg-yellow-600 text-white rounded-sm p-2 mt-8">{item.name}</div>
                <Card item={item} vote={vote} onSelect={handleSelect} />
            </div>
        })
    }

    return <div>
        <div>
            <div className="text-center uppercase font-bold text-yellow-900 text-2xl mb-4">Employee Award</div>
            <div className="text-center mb-10 italic">Please vote to honor your favorite outstanding individuals in each category</div>
        </div >
        {renderAward()}
        <VoteSubmit countVote={vote?.length} setVote={setVote} />
    </div >
}