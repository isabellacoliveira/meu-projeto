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
            <p className="title">Características da Personalidade</p>
            <div className="infos">
                <div className="skils">
                    <div className="tables">
                        <ul className="list-group">
                            <li className="list-group-item active">Hard Skills</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <link rel="stylesheet" href="https://www.16personalities.com/br/personalidade-esfj" />
                        </ul>
                        <ul className="list-group">
                            <li className="list-group-item active">Soft Skills</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
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
                <div className="tracos">
                    <img src={skills} alt="" className="imageSkills" />
                    <img src={strong} alt="" className="imageSkills" />
                    <img src={maisum} alt="" className="imageSkills" />
                </div>
                
            </div>
        </div>
    );
};

export default Skills;
