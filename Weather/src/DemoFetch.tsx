import React, {useEffect, useState} from 'react';

export default function DemoFetch({title, setInfos}) {
    

    var lien = 'https://api.openweathermap.org/data/2.5/weather?q=' + title +'&appid=efa3e552ae42bfda85e7f3c78acf365c'

    const [fetchData, setFetchedData] = useState<object>({})

    useEffect( () => {
        fetch(lien)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFetchedData(data)
                setInfos(
                    [{data: data}]
                );

            })
    }, [])


    const getDataSet = async() => {
        const response = await fetch(lien);
        const json = await response.json();
    }

    getDataSet();


   

    

    return (
        <div>
            <h1>Résultat : </h1>


        </div>
    )
}