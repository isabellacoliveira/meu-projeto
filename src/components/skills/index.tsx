import Principal from "../principal";
import './styles.css'
import caracteristicas from '../../assets/caracteristicas.png'
import tracos from '../../assets/tracos.png'
import maistracos from '../../assets/aaaa.png'
import skills from '../../assets/skilss.png'
import strong from '../../assets/strong.png'
import mais from '../../assets/mais.png'
import maisum from '../../assets/maisum.png'

const Skills = () => {
    return (
        <div className="app">
            <Principal />
            <p className="title">Características da Personalidade (ESFJ-T)</p>
            <div className="infos">
                <div className="skils">
                    <div className="tables">
                        <ul className="list-group">
                            <li className="list-group-item active">Pontos Fortes</li>
                            <li className="list-group-item">Colaborativa</li>
                            <li className="list-group-item">Aberta a feedback</li>
                            <li className="list-group-item">Habilidosa com pessoas</li>
                            <li className="list-group-item">Altamente empática</li>
                        </ul>
                        <ul className="list-group">
                            <li className="list-group-item active">Pontos Fracos</li>
                            <li className="list-group-item">Descuido pessoal</li>
                            <li className="list-group-item">Morbi leo risus</li>
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
                    <p className="title">Traços Influentes</p>

                    <img src={tracos} alt="" className="image" />
                    <img src={maistracos} alt="" className="image" />
                    <img src={mais} alt="" className="image" />
                </div>
                {/* <div className="tracos">
                    <img src={skills} alt="" className="imageSkills" />
                    <img src={strong} alt="" className="imageSkills" />
                    <img src={maisum} alt="" className="imageSkills" />
                </div> */}
            </div>
        </div>
    );
};

export default Skills;
