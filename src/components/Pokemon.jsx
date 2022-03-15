import React, {useState} from "react";

const Pokemon = () => {

    let [pokeList, setPokeList] = useState([])

    const getPokeApi = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((response)=>{
                return response.json()
            })
            .then((response)=>{
                console.log(response.results)
                setPokeList(response.results)
            })
            .catch((err)=>{
                console.log("error", err)
            })
    }

    return <>
            <button onClick={getPokeApi}>Click hear to get pokemon</button>
            {
                pokeList.map((pokeObj, index)=>{
                    return <div>
                        <h1>{pokeObj.name}</h1>
                    </div>
                })
            }

        </>
}

export default Pokemon