import React from "react";
import TaskApp from "./TaskAPP/TaskApp";




function App(){
  


  return(
    <>
<TaskApp />

    </>
  )
}

export default App;


// const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
//   accomplishment: 'spaceflight calculations',
//   imageId: 'MK3eW3A'
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
//   accomplishment: 'discovery of Arctic ozone hole',
//   imageId: 'mynHUSa'
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
//   accomplishment: 'electromagnetism theory',
//   imageId: 'bE7W1ji'
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
//   accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//   imageId: 'IOjWm71'
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
//   accomplishment: 'white dwarf star mass calculations',
//   imageId: 'lrWQx8l'
// }];


// export function getImageUrl(person) {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     's.jpg'
//   );
// }



// function App(){
//   const chemists=people.filter((person)=>person.profession==='chemist');
//   const elseEveryBody=people.filter((person)=>person.profession !=="chemist");
//   return(
//   <div>
//       <h1>Non-Chemists List</h1>
//       {chemists.map((person)=>{

//         return(
//           <div>
//       <li key={person.id}>
//           <h2>{person.name}</h2>
//           <img src={getImageUrl(person)}
//             alt={person.name}
//             width={80}
//             height={80}
//             />
//           <p>I am {person.profession}. I have contributed on {person.accomplishment} </p>
            
          
//           </li>


//           </div>
//         )
  
//       })}
//       <h1>Chemists List</h1>
//       {elseEveryBody.map((person)=>{

//         return(
//           <div>
//       <li key={person.id}>
//           <h2>{person.name}</h2>
//           <img src={getImageUrl(person)}
//             alt={person.name}
//             width={80}
//             height={80}
//             />
//           <p>I am {person.profession}. I have contributed on {person.accomplishment} </p>
            
          
//           </li>


//           </div>
//         )
  
//       })}
//    </div>
//   );

// }

// export default App;