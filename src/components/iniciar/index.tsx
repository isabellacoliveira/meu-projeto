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
import cartaoProtegido from '../../assets/entregas/cartao.webp'
import vitrine from '../../assets/entregas/parcelamento-carrossel-jpg.webp'
import recaptcha from '../../assets/entregas/recaptcha.webp'
import uniclassMion from '../../assets/entregas/Consorcio-Itau-Uniclass.avif'
import acessibilidade from '../../assets/entregas/diversidade_inclusao2.png'
import homeIp from '../../assets/entregas/Personnalite-Cover.webp'
import cloudfront from '../../assets/entregas/amazon-cloud-front.webp'
import undefined from '../../assets/entregas/images.jpg'
import uni from '../../assets/entregas/uni.png'
import crip from '../../assets/entregas/crip.jpg'
import charon from '../../assets/charon.jpg'
import ag from '../../assets/ag.jpg'
import aulas from '../../assets/ailas.png'
import akamai from '../../assets/akamai.jpg'
import aws from '../../assets/awssss.png'
import calculo from '../../assets/calculo.png'
import docs from '../../assets/docs.jpg'
import git from '../../assets/git.webp'
import releases from '../../assets/releases.jpg'
import reuniao from '../../assets/reuniao.jpg'
import tapete from '../../assets/tapete.jpg'
import { Button, ButtonGroup, Card, Table } from 'react-bootstrap';

export default function Iniciar() {
    const [promocao, setPromocao] = useState<string>('JR');
    const [selectedButton, setSelectedButton] = useState<number | null>(0);
    const [isOpen, setIsOpen] = useState(false);
    const [openned, setOpenned] = useState(false);
    const [dentroDaRT, setDentroDaRT] = useState(false);
    const [foraDaRT, setForaDaRT] = useState(false);

    const toggleTable = () => {
        setOpenned(!isOpen);
    };

    const openDentroDaRT = () => {
        setDentroDaRT(!dentroDaRT);
    };

    const openForaDaRT = () => {
        setForaDaRT(!foraDaRT);
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
                                    <div className='container_tabela'>
                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={cartaoProtegido} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Adição do Seguro Cartão Protegido no meio do fluxo do Tapete Laranja</Card.Title>
                                                <Card.Text>
                                                    Adição da oferta do seguro cartão protegido no meio do fluxo do tapete laranja. <br />
                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={vitrine} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Tageamento da vitrine para o portal GA4</Card.Title>
                                                <Card.Text>
                                                    Adição do tageamento da tela de vitrine para análise no portal GA4.<br />
                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                                {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</button> */}
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={cloudfront} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Discovery - Levantamento do Ambiente de Dev via DNS</Card.Title>
                                                <Card.Text>
                                                    Levantamento do ambiente de dev do tapete laranja via DNS.<br />

                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                                {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</button> */}
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={cartaoProtegido} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Equalização da experiência de botões de seleção</Card.Title>
                                                <Card.Text>
                                                    Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500
                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                                {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</button> */}
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={acessibilidade} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Correção de inconsistências de acessibilidade na jornada</Card.Title>
                                                <Card.Text>
                                                    Correção de bugs de acessibilidade espalhados pelo fluxo do tapete laranja.
                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                                {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</button> */}
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={uni} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Atualização da identidade visual do banco na jornada de abertura de contas</Card.Title>
                                                <Card.Text>
                                                    Troca da identidade visual do banco nas telas de Uniclass.
                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                                {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</button> */}
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={homeIp} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Envelopamento da Home Personnalite - Home IP</Card.Title>
                                                <Card.Text>
                                                    Criação do visual da tela de home do segmento Personnalité.
                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                                {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</button> */}
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={uniclassMion} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Envelopamento da Home Uniclass - Home IU</Card.Title>
                                                <Card.Text>
                                                    Atualização do visual da tela de home do segmento Uniclass.
                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={undefined} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Bug - Nome do correntista "undefined"</Card.Title>
                                                <Card.Text>
                                                    Correção do bug causado pelo CMS Headless no fluxo de Wayout do tapete laranja.
                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                                {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</button> */}
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={acessibilidade} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Correção de inconsistências de acessibilidade na tela de Home-IP</Card.Title>
                                                <Card.Text>
                                                    Correções de acessibilidade no fluxo de personnalité do tapete laranja.
                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                                {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</button> */}
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={recaptcha} />
                                            <Card.Body>
                                                <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Remoção do Recaptcha no fluxo do Folhas</Card.Title>
                                                <Card.Text>
                                                    Remoção do recaptcha no fluxo de folhas do tapete laranja.
                                                </Card.Text>
                                                <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                                {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</Button> */}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </>
                                : ""}

                            {selectedButton === 1 ? <>
                                <div className='container_tabela'>
                                    <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={crip} />
                                        <Card.Body>
                                            <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Integração do Caronte com a aplicação de Oferta</Card.Title>
                                            <Card.Text>
                                                Integração do front-end com o back-end utilizando a estrutura do Caronte
                                            </Card.Text>
                                            <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={ag} />
                                        <Card.Body>
                                            <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Busca de Agência da aplicação</Card.Title>
                                            <Card.Text>
                                                Integração do Google Maps para busca de agência do usuário logado.
                                            </Card.Text>
                                            <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                            {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</button> */}
                                        </Card.Body>
                                    </Card>

                                    <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={charon} />
                                        <Card.Body>
                                            <Card.Title style={{ display: 'flex', flexDirection: 'column' }}>Integração do Caronte na peça de Autenticação</Card.Title>
                                            <Card.Text>
                                                Integração do Caronte no MFE Autenticação
                                            </Card.Text>
                                            <button className='promo' style={{ marginTop: 'auto' }}>BCPs entregues:</button>
                                            {/* <button className='promo' style={{ marginTop: 'auto' }}>Impacto ao cliente</button> */}
                                        </Card.Body>
                                    </Card>
                                </div>
                            </> : ""}

                            {selectedButton === 2 ?
                                <>
                                    <div className='contribuicoes'>
                                                <div className='tarefas'>
                                                    <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                        <Card.Img variant="top" src={reuniao} />
                                                        <Card.Body>
                                                            <Card.Title>Organização do Soluções em Foco</Card.Title>
                                                            <Card.Text>
                                                                Organização da reunião "Soluções em Foco", reunião focada em passagens de conhecimento e discussões de soluções que podem ser adotadas para nossa RT.

                                                            </Card.Text>
                                                            <Button variant="primary">Sextas-Feiras: 15h</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                        <Card.Img variant="top" src={tapete} />
                                                        <Card.Body>
                                                            <Card.Title>Estabilização do Ambiente de Dev - Tapete Laranja</Card.Title>
                                                            <Card.Text>
                                                                Discovery e estabilização do ambiente de desenvolvimento do fluxo do tapete laranja. Saindo da margem de 100% de erros para um cenário de 70% das rotas funcionando.

                                                            </Card.Text>
                                                            <Button variant="primary">Discovery/Estabilização</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                        <Card.Img variant="top" src={docs} />
                                                        <Card.Body>
                                                            <Card.Title>Alimentação do Sharepoint da RT com documentações explicativas</Card.Title>
                                                            <Card.Text>
                                                                Alimentação do Sharepoint da RT com documentações explicativas para Onboarding e auxilio aos colaboradores.

                                                            </Card.Text>
                                                            <Button variant="primary">Discovery/Estabilização</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                        <Card.Img variant="top" src={aulas} />
                                                        <Card.Body>
                                                            <Card.Title>Aulas de Front-end</Card.Title>
                                                            <Card.Text>
                                                                Junto com outro colaborador, fomos responsáveis por puxar aulas sobre front-end para ensinar os outros colaboradores.
                                                                Ensinando tecnologias que utilizamos em nossa RT.
                                                            </Card.Text>
                                                            <Button variant="primary">Aulas sobre Angular</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                        <Card.Img variant="top" src={git} />
                                                        <Card.Body>
                                                            <Card.Title>Café com Git</Card.Title>
                                                            <Card.Text>
                                                                Passagem de conhecimento sobre Git para a Squad Aceleração.
                                                                Apresentação com slides explicativos
                                                            </Card.Text>
                                                            <Button variant="primary">Passagem de Conhecimento</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                        <Card.Img variant="top" src={releases} />
                                                        <Card.Body>
                                                            <Card.Title>Apresentação da R2</Card.Title>
                                                            <Card.Text>
                                                                Apresentação das principais entregas da Release 2 feitas pela Squad Aceleração.
                                                            </Card.Text>
                                                            <Button variant="primary">Apresentação</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                        <Card.Img variant="top" src={releases} />
                                                        <Card.Body>
                                                            <Card.Title>Apresentação da R3</Card.Title>
                                                            <Card.Text>
                                                                Apresentação das principais entregas que seriam feitas na Release 3 pela Squad Aceleração.
                                                            </Card.Text>
                                                            <Button variant="primary">Apresentação</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                        <Card.Img variant="top" src={akamai} />
                                                        <Card.Body>
                                                            <Card.Title>Passagem de conhecimento Cloudfront + Akamai</Card.Title>
                                                            <Card.Text>
                                                                Apresentação explicando a diferença entre Cloudfront e Akamai no "Soluções em Foco" para a RT toda.
                                                            </Card.Text>
                                                            <Button variant="primary">Apresentação</Button>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                        <Card.Img variant="top" src={releases} />
                                                        <Card.Body>
                                                            <Card.Title>Apresentação do PDCA - Ambiente Dev</Card.Title>
                                                            <Card.Text>
                                                                Apresentação feita no PDCA sobre o levantamento do ambiente de dev, levantando os principais progressos e resultados.
                                                            </Card.Text>
                                                            <Button variant="primary">Apresentação</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                        <div className='tarefas'>
                                            <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                <Card.Img variant="top" src={calculo} />
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

                                            <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                <Card.Img variant="top" src={aws} />
                                                <Card.Body>
                                                    <Card.Title>Passagem de conhecimento AWS</Card.Title>
                                                    <Card.Text>
                                                        Passagem de conhecimento sobre AWS para colaboradores de outras RTs.
                                                    </Card.Text>
                                                    <Button variant="primary">AWS</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{ width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black' }}>
                                                <Card.Img variant="top" src={git} />
                                                <Card.Body>
                                                    <Card.Title>Passagem de conhecimento Git</Card.Title>
                                                    <Card.Text>
                                                        Passagem de conhecimento sobre Git para um cientista de dados de Shared Experience PJ.
                                                    </Card.Text>
                                                    <Button variant="primary">Git</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                </> : ""}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}