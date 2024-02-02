import React from 'react'


// const Intro = () =>{
//     return(
//         <section>
//             <h1 className="cetered">Result University</h1>
//             <h3 className="cetered" style={{color: '#666'}}>Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами</h3>
//         </section>
//     )
// }

// export default Intro

const Intro = () =>{
    return React.createElement('section',{key: 0},
     null,[
    React.createElement('h1', {className: 'cetered', key: 1},
     'Result University'),
     React.createElement('h3',
      {className: 'cetered', style:{color: '#666', key: 2} },
     'Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами')
    ])
}
export default Intro