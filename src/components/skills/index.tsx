import Principal from "../principal";
import './styles.css'
import caracteristicas from '../../assets/caracteristicas.png'
import tracos from '../../assets/tracos.png'
// import maistracos from '../../assets/aaaa.png'
// import skills from '../../assets/skilss.png'
// import strong from '../../assets/strong.png'
// import mais from '../../assets/mais.png'
// import maisum from '../../assets/maisum.png'
import Angular from '../../assets/amazon-s3-simple-storage-service.svg'
import Sla from '../../assets/angular.png'
import Novamente from '../../assets/aws-api-gateway-logo-368082D845-seeklogo.com.png'
import Cloudfront from '../../assets/aws-cloudfront-logo-D475098A98-seeklogo.com.png'
import Gtw from '../../assets/images.jpg'
import Image from '../../assets/images.png'
import React from '../../assets/react.png'
import Spring from '../../assets/spring.png'

const Skills = () => {
    return (
        <div className="app">
            <Principal />
            <div>
                <p className="title">Tecnologias</p>
                <div className='container_skills'>
                    <img className="skills" src={Angular} alt="" />
                    <img className="skills" src={Sla} alt="" />
                    <img className="skills" src={Novamente} alt="" />
                    <img className="skills" src={Cloudfront} alt="" />
                    <img className="skills" src={Gtw} alt="" />
                    <img className="skills" src={Image} alt="" />
                    <img className="skills" src={React} alt="" />
                    <img className="skills" src={Spring} alt="" />
                </div>
            </div>
            <div>
                <p className="title">Características da Personalidade (ESFJ-T/Cônsul)</p>
                <div className="infos">
                    <div className="skils">
                        <div className="tables">
                            <ul className="list-group">
                                <li className="list-group-item active">Pontos Fortes</li>
                                <li className="list-group-item">Colaborativa</li>
                                <li className="list-group-item">Habilidosa com pessoas</li>
                                <li className="list-group-item">Altamente empática</li>
                            </ul>
                            <ul className="list-group">
                                <li className="list-group-item active">Pontos Fracos</li>
                                <li className="list-group-item">Busca por aprovação</li>
                                <li className="list-group-item">Preocupado em agradar os outros</li>
                                <li className="list-group-item">Necessidade de validação</li>
                            </ul>
                        </div>
                    </div>
                    <div className="personalidade">
                        <img src={caracteristicas} alt="" className="image" />
                    </div>

                </div>
                <div>
                    <div className="tracos">
                        <img src={tracos} alt="" className="image" />
                        {/* <img src={maistracos} alt="" className="image" />
                    <img src={mais} alt="" className="image" /> */}
                    </div>
                    <div>

                    </div>
                    {/* <div className="tracos">
                    <img src={skills} alt="" className="imageSkills" />
                    <img src={strong} alt="" className="imageSkills" />
                    <img src={maisum} alt="" className="imageSkills" />
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default Skills;
