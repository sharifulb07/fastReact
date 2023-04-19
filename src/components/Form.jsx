// import React, { useState } from 'react'

// function Form() {
//     const [person, setPerson] = useState({
//         name: 'Niki de Saint Phalle',
//         artwork: {
//             title: 'Blue Nana',
//             city: 'Hamburg',
//             image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//         }
//     });

//     const handleNameChange = (e) => {
//         setPerson({

//             ...person,
//             name: e.target.value,
//         }
//         )
//     }


//     const handleTitlechange=(e)=>{
//         setPerson({
//             ...person,
//             artwork:{
//                 ...person.artwork,
//                 title:e.target.value,
//             }
//         })
//     }


//     const handleCityChange=(e)=>{
//         setPerson({
//             ...person,
//             artwork:{
//                 ...person.artwork,
//                 city:e.target.value,
//             }
//         })
//     }



//     const handleImageUrlChange=(e)=>{
//         setPerson({
//             ...person,
//             artwork:{
//                 ...person.artwork,
//                 image:e.target.value,
//             }
//         })
//     }





// const handleSubmit=(e)=>{
//     e.preventDefault();
//     alert({
//         name:person.name,
//         title:person.title,
//         city:person.city,
//         image:person.image,
//     })
// }


//     return (
//         <div>

//         <label>
//             Name:
//             <input type='text' onChange={handleNameChange} placeholder='Please your full Name' />
//         </label>

//         <label>
//             Artwork Title:
//             <input type='text' onChange={handleTitlechange} placeholder='here is your artwork title' />
//         </label>

//         <label>
//             City:
//             <input type='text' onChange={handleCityChange} placeholder='your city' />

//         </label>

//         <label>
//             Image:
//             <input type='text' onChange={handleImageUrlChange} placeholder='image address' />
//         </label>
//         <button type='submit' onSubmit={handleSubmit}>Submit </button>

//         </div>
//     )
// }

// export default Form
