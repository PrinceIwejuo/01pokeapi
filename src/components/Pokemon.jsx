import React, {useState} from "react";
import axios from 'axios';

const Pokemon = () => {

    let [pokeList, setPokeList] = useState([])

    const getPokeApi = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
              .then((response)=>{
                console.log(response.data)
                setPokeList(response.data.results)
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