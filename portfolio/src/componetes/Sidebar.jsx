import Avatar from '../img/fotoportfolio.jpg'
import"../styles/componetes/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Alex Amorim Santiago"></img>
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href=""className="btn">
        Download curriculo
      </a>

    </aside>
  )
}

export default Sidebar
