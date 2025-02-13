import React from 'react'

export const ArrayDemo5 = () => {
    var city = [
        {
            id:0o1 ,
            CityName:"Ahmedabad",
            population:300000,
            AQI : 106,
        },
        {
            id:0o2,
            CityName:"Delhi",
            population:150000,
            AQI:400,        
        },
        {
            id:0o3,
            CityName:"Mumbai",
            population:400000,
            AQI: 250,
        },
        {
            id:0o4,
            CityName:"Bangalore",
            population: 200000,
            AQI: 278,
        }

    ];
  return (
    <div style={{ textAlign: "center" }}>
         <h1 style={{color:"red"}}>ARRAY DEMO 5</h1>
         <table border="1" style={{ width: "100%", height: "100px"
         }}>

            <thead>
            <tr>
            <th>ID</th>
            <th>CITY_NAME</th>
            <th>POPULATION</th>
            <th>AQI</th>
          </tr>
            </thead>
            <tbody>
                {city.map((city) => {
                    return (
                        <tr>
                            <td style={{color:'black'}} >{city.id}</td>
                            <td style={{color:'black'}} >{city.CityName}</td>
                            <td style={{color:city.population>200000 ? "red":"black"}} >{city.population}</td>
                            <td style={{color:city.AQI>300?"red":(city.AQI<200?"green":"black")}}>{city.AQI}</td>
                        </tr>

                
                );
                })}
            </tbody>
         </table>













         </div>
  )
}
