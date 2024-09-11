import { useState } from 'react';
import './styles.css'
import me from '../../assets/me.jpg';
import Angular from '../../assets/amazon-s3-simple-storage-service.svg'
import Sla from '../../assets/angular.png'
import Novamente from '../../assets/aws-api-gateway-logo-368082D845-seeklogo.com.png'
import Cloudfront from '../../assets/aws-cloudfront-logo-D475098A98-seeklogo.com.png'
import Gtw from '../../assets/images.jpg'
import Image from '../../assets/images.png'
import React from '../../assets/react.png'
import Spring from '../../assets/spring.png'
import { Button, ButtonGroup, Card, Table } from 'react-bootstrap';

export default function Iniciar() {
    const [promocao, setPromocao] = useState<string>('JR');
    const [selectedButton, setSelectedButton] = useState<number | null>(0);
    const [isOpen, setIsOpen] = useState(false);
    const [openned, setOpenned] = useState<number | null>(null);

    const toggleTable = (index: number) => {
        setOpenned(index);
    };

    const handleClick = (index: number) => {
        setSelectedButton(index);
    };

    function promover() {
        setPromocao('PL')
    }

    return (
        <>
            <div className='fundo'>
                <img src={me} alt="" className='me' />
                <div>
                    <p className='typing-text'>Isabella Oliveira</p>
                    <p className='cargo'>ANALISTA DE ENGENHARIA DE TI {promocao}</p>
                    <p className='cargo'>Contas e Tarifas - Abertura de Contas PF</p>
                    <p>- API Owner</p>
                    <p>- Desenvolvedora Front-End/Back-end</p>
                    <div>
                        <p>Skills</p>
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
                    <button className='promo' onClick={promover}>Promoção</button>
                </div>
            </div>
            <div>
                <h4 className='titulo'>Minhas Contribuições</h4>
                <div>
                    <div>
                        <div className='aceleracao'>
                            <ButtonGroup aria-label="Basic example">
                                <Button
                                    variant={'secondary'}
                                    className={selectedButton === 0 ? 'action-selected' : 'action'}
                                    onClick={() => handleClick(0)}
                                >
                                    Squad Aceleração
                                </Button>
                                <Button
                                    variant={'secondary'}
                                    className={selectedButton === 1 ? 'action-selected' : 'action'}
                                    onClick={() => handleClick(1)}
                                >
                                    Squad One Itaú Logado
                                </Button>
                                <Button
                                    variant={'secondary'}
                                    className={selectedButton === 2 ? 'action-selected' : 'action'}
                                    onClick={() => handleClick(2)}
                                >
                                    Fora da Squad/RT
                                </Button>
                            </ButtonGroup>
                        </div>

                        <div>
                            {selectedButton === 0 ?
                                <>
                                    <p onClick={() => toggleTable(0)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} className='entregas'>
                                        Minhas entregas
                                        <span className={`arrow ${isOpen ? 'down' : 'up'}`}></span>
                                    </p>
                                    {isOpen && openned === 0 && (
                                        <div className='container_tabela'>
                                            <Table responsive="sm" className='table'>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Entrega</th>
                                                        <th>Tempo de Execução</th>
                                                        <th>Impacto ao Cliente</th>
                                                        <th>Tipo</th>
                                                        <th>Número da Tarefa</th>
                                                        <th>BCP</th>
                                                        <th>Quantidade de BCP</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Adicionar Seguro Cartão Protegido no meio do fluxo </td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Front-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Discovery - Levantamento do Ambiente de Dev via DNS</td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Front-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Equalização da experiência de botões de seleção</td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Front-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Tageamento da vitrine para o portal GA4</td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Front-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Correção de inconsistências de acessibilidade na jornada</td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Front-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Atualização da identidade visual do banco na jornada de abertura de contas</td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Front-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>Envelopamento da Home Personnalite - Home IP</td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Front-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>Envelopamento da Home Uniclass - Home IU</td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Front-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>Bug - Nome do correntista "undefined" </td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Front-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>Correção de inconsistências de acessibilidade na tela de Home-IP</td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Front-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                    <tr>
                                                        <td>11</td>
                                                        <td>Remoção do Recaptcha no fluxo do Folhas</td>
                                                        <td>X dias</td>
                                                        <td> - </td>
                                                        <td>Back-End</td>
                                                        <td>HIS-0123-123</td>
                                                        <td>Sim</td>
                                                        <td>Tanto</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>)}
                                </>
                                : ""}

                            {selectedButton === 2 ?
                                <>
                                    <div className='contribuicoes'>
                                        <p onClick={() => toggleTable(1)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} className='entregas'>
                                            Contribuições dentro da RT
                                            <span className={`arrow ${openned ? 'down' : 'up'}`}></span>
                                        </p>
                                        {openned === 1 && (
                                            <>
                                                <div className='tarefas'>
                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                                        <Card.Body>
                                                            <Card.Title>Organização do Soluções em Foco</Card.Title>
                                                            <Card.Text>
                                                                Organização da reunião "Soluções em Foco", reunião focada em passagens de conhecimento e discussões de soluções que podem ser adotadas para nossa RT.

                                                            </Card.Text>
                                                            <Button variant="primary">Sextas-Feiras: 15h</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Estabilização do Ambiente de Dev - Tapete Laranja</Card.Title>
                                                            <Card.Text>
                                                                Discovery e estabilização do ambiente de desenvolvimento do fluxo do tapete laranja. Saindo da margem de 100% de erros para um cenário de 70% das rotas funcionando.

                                                            </Card.Text>
                                                            <Button variant="primary">Discovery/Estabilização</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Alimentação do Sharepoint da RT com documentações explicativas</Card.Title>
                                                            <Card.Text>
                                                                Alimentação do Sharepoint da RT com documentações explicativas para Onboarding e auxilio aos colaboradores.

                                                            </Card.Text>
                                                            <Button variant="primary">Discovery/Estabilização</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Aulas de Front-end</Card.Title>
                                                            <Card.Text>
                                                                Junto com outro colaborador, fomos responsáveis por puxar aulas sobre front-end para ensinar os outros colaboradores.
                                                                Ensinando tecnologias que utilizamos em nossa RT.
                                                            </Card.Text>
                                                            <Button variant="primary">Aulas sobre Angular</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Café com Git</Card.Title>
                                                            <Card.Text>
                                                                Passagem de conhecimento sobre Git para a Squad Aceleração. 
                                                                Apresentação com slides explicativos
                                                            </Card.Text>
                                                            <Button variant="primary">Passagem de Conhecimento</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Apresentação da R2</Card.Title>
                                                            <Card.Text>
                                                                Apresentação das principais entregas da Release 2 feitas pela Squad Aceleração. 
                                                            </Card.Text>
                                                            <Button variant="primary">Apresentação</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Apresentação da R3</Card.Title>
                                                            <Card.Text>
                                                                Apresentação das principais entregas que seriam feitas na Release 3 pela Squad Aceleração. 
                                                            </Card.Text>
                                                            <Button variant="primary">Apresentação</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Passagem de conhecimento Cloudfront + Akamai</Card.Title>
                                                            <Card.Text>
                                                                Apresentação explicando a diferença entre Cloudfront e Akamai no "Soluções em Foco" para a RT toda. 
                                                            </Card.Text>
                                                            <Button variant="primary">Apresentação</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Apresentação do PDCA - Ambiente Dev</Card.Title>
                                                            <Card.Text>
                                                                Apresentação feita no PDCA sobre o levantamento do ambiente de dev, levantando os principais progressos e resultados. 
                                                            </Card.Text>
                                                            <Button variant="primary">Apresentação</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </>
                                        )}

                                        <p onClick={() => toggleTable(2)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} className='entregas'>
                                            Contribuições fora da RT
                                            <span className={`arrow ${openned ? 'down' : 'up'}`}></span>
                                        </p>
                                        {openned === 2 && (
                                            <>
                                                <div className='tarefas'>
                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Desenvolvimento do "Calcula Interjornada"</Card.Title>
                                                            <Card.Text>
                                                                Desenvolvimento do aplicativo "Calcula Interjornada" que fornece funcionalidades para que os Itubers consigam fazer a gestão de suas horas do banco de horas.
                                                            </Card.Text>
                                                            <Button variant="primary">
                                                                <a href="https://calcula-interjornada-itau.vercel.app/" target='blank'>Acesse o app</a>
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Passagem de conhecimento AWS</Card.Title>
                                                            <Card.Text>
                                                                Passagem de conhecimento sobre AWS para colaboradores de outras RTs.
                                                            </Card.Text>
                                                            <Button variant="primary">AWS</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px' }}>
                                                        <Card.Body>
                                                            <Card.Title>Passagem de conhecimento Git</Card.Title>
                                                            <Card.Text>
                                                                Passagem de conhecimento sobre Git para um cientista de dados de Shared Experience PJ. 
                                                            </Card.Text>
                                                            <Button variant="primary">Git</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </>
                                        )}

                                    </div>
                                </> : ""}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}