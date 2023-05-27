import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodeksSmall,
  DiMysql,
  DiReact

} from 'react-icons/di'

import '../styles/componetes/tecnologiaContainer.sass'

const tecnologia = [
  {id:"html", name: "HTML", icon: <DiHtml5/>},
  {id:"css", name: "CSS", icon: <DiCss3/>},
  {id:"js", name: "JavaScript", icon: <DiJsBadge/>},
  {id:"node", name: "Node.js", icon: <DiNodejsSmall/>},
  {id:"mysql", name: "MySql", icon: <DiMysql/>},
  {id:"react", name: "React", icon: <DiReact/>},
  id:"html", name: "HTML", icon: <DiHtml5/>,
];

const TecnologiaContainer = () => {
  return <section className='tecnologia-container'>
    <h2>Tecnologia</h2>
    <div className='tecnologia-grid'>
      {tecnologia.map ((tech) => (
        <div className="tecnologia-card" id={tech.id} key={tech.id}>
         <h3>{tech.icon}</h3> 
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>

         

      </div>
      ))}
    </div>
  </section>
}
export default TecnologiaContainer
