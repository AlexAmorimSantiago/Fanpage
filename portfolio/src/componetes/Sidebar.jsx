import Avatar from "../img/fotoportfolio.jpg"

import"../styles/componetes/sidebar.sass"
import SocialNetwork from './SocialNetwork'

import informacaoContainer from "./informacaoContainer"



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Alex Amorim Santiago"></img>
      <p className="title">Desenvolvedor</p>
      <SocialNetwork/>
      <informacaoContainer/>
      <a href=""className="btn">
        Download curriculo
      </a>

    </aside>
  )
}

export default Sidebar
