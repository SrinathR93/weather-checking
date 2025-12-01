import React from 'react';
const Locdetails = ({location})=>
    {
    return(
        <div className="text-center mt-4 p-3 text-light"><h3>☁️Weather details of {location.name}, {location.region}, {location.country}</h3></div>
    )
}
export default Locdetails