import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

import '../styles/componetes/socialnetwork'


const SocialNetwork = () => [

    {name: "linkedin", icon: <FaLinkedinIn/>},
    {name: "github", icon: <FaGithub/>},
    {name: "FaInstagram", icon: <FaInstagram/>},
];

  function SocialNetwork() => {
  return <section id="social-network">
    {SocialNetwork.map ((network) =>(
      <a href="a" className="social-btn" id={network.name} key={network.name}>
      {network.icon}
      
      </a>

      
    ))}
  
  </section>
}

export default SocialNetwork