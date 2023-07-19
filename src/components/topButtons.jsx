import React from "react";

function TopButtons() {

    const cities= [
    {
    
        id: 1,
        title: 'Hyderabad'
    },
    {
        id: 2,
        title: 'Mumbai'
    },
    {
    
        id: 3,
        title: 'Delhi'
    },
    {
    
        id: 4,
        title: 'Dubai'
    },
    {
    
        id: 5,
        title: 'Jeddah'
    }
    ]


 return <div className="flex items-center justify-around my-6">
    {cities.map((city) => (

       <button key={city.id} className="text-white text-lg font-medium transition ease-out hover:scale-125">{city.title}</button>

    ))}
    </div>
}

export default TopButtons;