import {AiFillphone, AiOutlineMail, AiFilliEnvironmnet} from "react-icons/ai";


import "../styles/componetes/informacaocontainer.sass"

 const informacaoContainer = () => {
  return <section id="information">
    <div className="info-card">
        <AiFillphone id="phone-icons"/>
        <div>
            <h3>Telefone</h3>
            <p>(011)99192-9492</p>
        </div>
    </div>
 
    <div className="info-card">
        <AiOutlineMail id="email-icons"/>
        <div>
            <h3>E-mail</h3>
            <p>alexsantiago87@yahoo.com.br</p>
        </div>
    </div>

    <div className="info-card">
        <AiFilliEnvironmnet id="pin-icons"/>
        <div>
            <h3>Localização</h3>
            <p>São Paulo - SP</p>
        </div>
    </div>


  </section>
}
export default informacaoContainer
