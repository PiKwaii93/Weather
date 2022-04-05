import React from "react";

export default function Card({valeur}) {

    
    if(valeur.cod!=='404'){
        console.log(valeur)
        const temporaireC = valeur.main.temp - 273.15

        var C = temporaireC.toFixed(2);

        var nom = valeur.name

        console.log(valeur.weather[0].main)

        switch(valeur.weather[0].main){

            case "Mist" : {
                var image = "./img/mist.png";
                break;
            }
            case "Clouds" : {
                var image = "./img/clouds.png";
                break;
            }
            case "Clear" : {
                var image = "./img/clear.png";
                break;
            }
            case "Rain" : {
                var image = "./img/rain.png";
                break;
            }
            case "Snow" : {
                var image = "./img/snow.png";
                break;
            }
            case "Thunderstorm" : {
                var image = "./img/thunderstorm.png";
                break;
            }
            case "Haze" : {
                var image = "./img/haze.png";
                break;
            }
            default: {
                image = "./img/point.png";
                break;
            }
            
        }


    }else{

        C = "-"
        nom = "Ville non reconnue"
        image = "./img/point.png"
    }

    



    return (

        <div className="card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{nom}</h5>
                    <p className="card-text">{C} °C</p>
            </div>
        </div>

        
    )
}