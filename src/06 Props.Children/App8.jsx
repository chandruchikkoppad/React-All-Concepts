// !class based component
 
// import React, { Component } from 'react'
// import Child from './Child';
// export default class App8 extends Component {
//   render() {
//     return (
//       <div>
//         <Child>
//           <h1>JavaScript</h1>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
//             doloremque, praesentium itaque id dolores repellendus labore,
//             recusandae vel, aspernatur iusto consequuntur. Aliquid libero
//             explicabo laborum facere dolores ad non exercitationem veritatis
//             minus deserunt, fugiat assumenda cupiditate animi fuga unde optio
//             nisi accusamus corrupti voluptatum debitis? Beatae sunt placeat
//             inventore! Illum.
//           </p>
//           <button>Join for component</button>
//         </Child>
//         <Child>
//           <h1>Java</h1>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
//             doloremque, praesentium itaque id dolores repellendus labore,
//             recusandae vel, aspernatur iusto consequuntur. Aliquid libero
//             explicabo laborum facere dolores ad non exercitationem veritatis
//             minus deserunt, fugiat assumenda cupiditate animi fuga unde optio
//             nisi accusamus corrupti voluptatum debitis? Beatae sunt placeat
//             inventore! Illum.
//           </p>
//           <button>Join for component</button>
//         </Child>
//         <Child>
//           <h1>Python</h1>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
//             doloremque, praesentium itaque id dolores repellendus labore,
//             recusandae vel, aspernatur iusto consequuntur. Aliquid libero
//             explicabo laborum facere dolores ad non exercitationem veritatis
//             minus deserunt, fugiat assumenda cupiditate animi fuga unde optio
//             nisi accusamus corrupti voluptatum debitis? Beatae sunt placeat
//             inventore! Illum.
//           </p>
//           <button>Join for component</button>
//         </Child>
//       </div>
//     );
//   }
// }

// ================
// !Function based component

import React from 'react'
import Courses from '../06 Props.Children/Courses';

const App8 = () => {
  return (
    <section>
      <article>
        <Courses coursename="java" trainer="dixith" duration="3 months">
          <p>
            Get Java for desktop applications. Download Java · What is Java?
            Uninstall help. Happy Java User. Are you a software developer
            looking for JDK downloads?
          </p>
          <button>Join for Java</button>
        </Courses>
        <Courses coursename="javascript" trainer="Shashi" duration="3 months">
          <p>
            JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web. JavaScript is
            easy to learn.
          </p>
          <button>Join for Javascript</button>
        </Courses>
        <Courses coursename="Python" trainer="gagan" duration="3 months">
          <p>
            Python is a popular programming language. Python can be used on a
            server to create web applications.
          </p>
          <button>Join for Python</button>
        </Courses>
        <Courses coursename="php" trainer="Sharath" duration="3 months">
          <p>
            A popular general-purpose scripting language that is especially
            suited to web development. Fast, flexible and pragmatic, PHP powers
            everything from your blog to ..
          </p>
          <button>Join for php</button>
        </Courses>
      </article>
    </section>
  );
}

export default App8

// ====================================================
// !PropType
// ? it is used to check the data type if the data type is not matching it will throw an warning

