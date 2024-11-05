import Principal from "../principal";
import { Popover } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import chapeu from '../../assets/chapeu-removebg-preview.png';
import loguinho from '../../assets/loguinho.png';

function Trajetoria() {
    const popover = (content: any) => (
        <Popover id="popover-basic">
            <Popover.Body>{content}</Popover.Body>
        </Popover>
    );

    return (
        <>
            <div className="config">
                <div className="card" style={{ width: '20rem', height: '200px' }}>
                    <div className="card-body">
                        <div className="infos">
                            <img className="graduacao" src={chapeu} alt="" />
                            <h5 className="card-title">Graduação</h5>
                        </div>
                        <h6 className="card-subtitle mb-2 text-muted">FATEC</h6>
                        <p className="card-text">Análise e Desenvolvimento de Sistemas - FATEC (conclusão em Dez/2024)</p>
                    </div>
                </div>

                <div className="card" style={{ width: '20rem', height: '200px' }}>
                    <div className="card-body">
                        <div className="infos">
                            <img className="graduacao" src={chapeu} alt="" />
                            <h5 className="card-title">Próximos Passos</h5>
                        </div>
                        <h6 className="card-subtitle mb-2 text-muted">Pós Graduação</h6>
                        <p className="card-text">Front-end Engineering</p>
                    </div>
                </div>

                <div className="card" style={{ width: '20rem', height: '200px' }}>
                    <div className="card-body">
                        <div className="infos">
                            <img className="loguinho" src={loguinho} alt="" />
                            <h5 className="card-title">Próximos Passos</h5>
                        </div>
                        <h6 className="card-subtitle mb-2 text-muted">Promoção</h6>
                        <p className="card-text">Analista de Engenharia de TI Pleno</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trajetoria;
