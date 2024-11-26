import Principal from "../principal";
import { Popover } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import chapeu from '../../assets/chapeu-removebg-preview.png';
import loguinho from '../../assets/loguinho.png';
import nodebr from '../../assets/nodebr.png'
import fiap from '../../assets/fiap.png';
import baixadanerd from '../../assets/baixadanerd.png';
import devpr from '../../assets/devpr.png';

function Trajetoria() {
    const popover = (content: any) => (
        <Popover id="popover-basic">
            <Popover.Body>{content}</Popover.Body>
        </Popover>
    );

    return (
        <>
            <div className="config">
                <h3>Próximos Passos</h3>
                <div className="aaa">
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
            </div>

            <div className="config">
                <h3>Palestras</h3>

                <div className="aaa">
                    <div className="card" style={{
                        width: '20rem', height: '540px', flexBasis: 'calc(100% / 5)',
                    }}>
                        <div className="card-body">
                            <div className="infos">
                                <img className="loguinho" src={nodebr} alt="" />
                                <h5 className="card-title">AWS Lambda com Node.js: Escalabilidade sem servidores</h5>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">NODE BR</h6>
                            <p className="card-text" >
                                Ministrei uma das palestras na live do evento NodeBR, com uma talk sobre a combinação de AWS Lambda e Node.js, que pode transformar a forma de desenvolver e escalar aplicações na nuvem. Foram explorados os principais conceitos de arquitetura serverless e como criar funções Lambda eficientes com Node.js, eliminando a necessidade de gerenciar servidores e reduzindo custos operacionais.
                            </p>
                        </div>
                    </div>

                    <div className="card" style={{
                        width: '20rem', height: '540px', flexBasis: 'calc(100% / 5)',
                    }}>
                        <div className="card-body">
                            <div className="infos">
                                <img className="loguinho" src={fiap} alt="" />
                                <h5 className="card-title">Arquitetura: Microfrontends</h5>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">FIAP</h6>
                            <p className="card-text" style={{ overflowY: 'auto' }}>
                                Participei do Meetup da instituição FIAP, ministrando a palestra sobre Microfrontend. Frontend, Frameworks & Bibliotecas; O que é o MFE ? Em qual cenário ele surgiu ? Microserviços X Microfrontend; Module Federation, Web Components, Single SPA
                            </p>
                        </div>
                    </div>

                    <div className="card" style={{
                        width: '20rem', height: '540px', flexBasis: 'calc(100% / 5)',
                    }}>
                        <div className="card-body">
                            <div className="infos">
                                <img className="loguinho" src={devpr} alt="" />
                                <h5 className="card-title">Arquitetura de Software</h5>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">Dév Paraná</h6>
                            <p className="card-text">
                                Minha palestra foi sobre Arquitetura de Software onde trouxe algumas definições e tópicos relacionados, como: Microfrontends, BFFs, Microserviços, e API Gateway. Foi uma experiência ótima conhecer a cidade de Maringá e fazer networking com as pessoas, que foram muito interativas em minha palestra.
                            </p>
                        </div>
                    </div>

                    <div className="card" style={{
                        width: '20rem', height: '540px', flexBasis: 'calc(100% / 5)',
                    }}>
                        <div className="card-body">
                            <div className="infos">
                                <img className="loguinho" src={baixadanerd} alt="" />
                                <h5 className="card-title">Acessibilidade no Frontend: Criando experiencias web inclusivas</h5>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">Baixada Nerd</h6>
                            <p className="card-text">
                                Ministrei uma palestra no evento do Baixada Nerd para a ETEC de Peruibe, onde tive a oportunidade de compartilhar uma palestra sobre: Acessibilidade no Frontend - Criando experiências web inclusivas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trajetoria;
