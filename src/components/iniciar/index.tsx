import { useState } from 'react';
import './styles.css'
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
import tapeteLaranja from '../../assets/tapete-laranja.png'
import data from '../../assets/data.jpg'
import dog from '../../assets/dog.jpg'
import pac from '../../assets/pac.jpg'
import clima from '../../assets/clima_brasil.jpg'
import midia from '../../assets/midia.jpg'
import family from '../../assets/family.jpg'
import { Button, ButtonGroup, Card } from 'react-bootstrap';

export default function Iniciar() {
    const [selectedButton, setSelectedButton] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setSelectedButton(index);
    };

    return (
        <>
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
                                    Squad One Itaú Não Logado
                                </Button>
                                <Button
                                    variant={'secondary'}
                                    className={selectedButton === 3 ? 'action-selected' : 'action'}
                                    onClick={() => handleClick(3)}
                                >
                                    Squad Iscas
                                </Button>
                                <Button
                                    variant={'secondary'}
                                    className={selectedButton === 4 ? 'action-selected' : 'action'}
                                    onClick={() => handleClick(4)}
                                >
                                    Fora da Squad/RT
                                </Button>
                                {/* <Button
                                    variant={'secondary'}
                                    className={selectedButton === 5 ? 'action-selected' : 'action'}
                                    onClick={() => handleClick(5)}
                                >
                                    Entregas de BCPs
                                </Button> */}
                            </ButtonGroup>
                        </div>

                        <div>
                            {selectedButton === 0 ?
                                <>
                                    <div className='container_tabela'>
                                        <Card style={{
                                            width: '18rem',
                                            marginRight: '20px',
                                            flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img
                                                variant="top"
                                                style={{ width: '100%', height: '200px' }}
                                                src={cartaoProtegido}
                                            />
                                            <Card.Body style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between'
                                            }}>
                                                <div>
                                                    <Card.Title>
                                                        Adição do Seguro Cartão Protegido no meio do fluxo do Tapete Laranja
                                                    </Card.Title>
                                                    <Card.Text>
                                                        Adição da oferta do seguro cartão protegido no meio do fluxo do tapete laranja.
                                                    </Card.Text>
                                                </div>
                                                <button className='promo' style={{ marginTop: 'auto' }}>
                                                    BCPs entregues: 75
                                                </button>
                                            </Card.Body>
                                        </Card>


                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={vitrine} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Tageamento da vitrine para o portal GA4</Card.Title>
                                                    <Card.Text>
                                                        Adição do tageamento da tela de vitrine para análise no portal GA4.
                                                    </Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues: 63</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={cloudfront} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Discovery - Levantamento do Ambiente de Dev via DNS</Card.Title>
                                                    <Card.Text>Levantamento do ambiente de dev do tapete laranja via DNS.</Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues:</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={cartaoProtegido} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Equalização da experiência de botões de seleção</Card.Title>
                                                    <Card.Text>
                                                        Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500.
                                                    </Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues: 12</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={acessibilidade} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Correção de inconsistências de acessibilidade na jornada</Card.Title>
                                                    <Card.Text>Correção de bugs de acessibilidade espalhados pelo fluxo do tapete laranja.</Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues:</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={uni} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Atualização da identidade visual do banco na jornada de abertura de contas</Card.Title>
                                                    <Card.Text>Troca da identidade visual do banco nas telas de Uniclass.</Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues: 14</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={homeIp} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Envelopamento da Home Personnalite - Home IP</Card.Title>
                                                    <Card.Text>Criação do visual da tela de home do segmento Personnalité.</Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues: 11</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={uniclassMion} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Envelopamento da Home Uniclass - Home IU</Card.Title>
                                                    <Card.Text>Atualização do visual da tela de home do segmento Uniclass.</Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues: 24</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={undefined} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Bug - Nome do correntista "undefined"</Card.Title>
                                                    <Card.Text>Correção do bug causado pelo CMS Headless no fluxo de Wayout do tapete laranja.</Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues: 42</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={acessibilidade} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Correção de inconsistências de acessibilidade na tela de Home-IP</Card.Title>
                                                    <Card.Text>Correções de acessibilidade no fluxo de personnalité do tapete laranja.</Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues:</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={recaptcha} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Remoção do Recaptcha no fluxo do Folhas</Card.Title>
                                                    <Card.Text>Remoção do recaptcha no fluxo de folhas do tapete laranja.</Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues: 86</button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                            border: '0.5px solid black'
                                        }}>
                                            <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={tapeteLaranja} />
                                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Card.Title>Integração com o Caronte e migração para a v2 do Recepção</Card.Title>
                                                    <Card.Text>Atualização do início da jornada do tapete laranja para a estrutura do caronte e a v2 do bff-recepção</Card.Text>
                                                </div>
                                                <button className='promo'>BCPs entregues</button>
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
                                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <Card.Title>Integração do Caronte com a aplicação de Oferta</Card.Title>
                                                <Card.Text>Integração do front-end com o back-end utilizando a estrutura do Caronte.</Card.Text>
                                            </div>
                                            <button className='promo'>BCPs entregues: 127</button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={ag} />
                                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <Card.Title>Busca de Agência da aplicação</Card.Title>
                                                <Card.Text>Integração do Google Maps para busca de agência do usuário logado.</Card.Text>
                                            </div>
                                            <button className='promo'>BCPs entregues: 74</button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={charon} />
                                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <Card.Title>Integração do Caronte na peça de Autenticação</Card.Title>
                                                <Card.Text>Integração do Caronte no MFE Autenticação.</Card.Text>
                                            </div>
                                            <button className='promo'>BCPs entregues: 101</button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={pac} />
                                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <Card.Title>Correção da Estrutura Visual da PAC</Card.Title>
                                                <Card.Text>Correção de Bugs visuais presentes na proposta de abertura de conta.</Card.Text>
                                            </div>
                                            <button className='promo'>BCPs entregues</button>
                                        </Card.Body>
                                    </Card>

                                </div>
                            </> : ""}

                            {selectedButton === 2 ? <>
                                <div className='container_tabela'>
                                <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={midia} />
                                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <Card.Title>Tageamento do Adjust na efetivação da conta</Card.Title>
                                                <Card.Text>Tageamento no fluxo do One Itaú Não Logado.</Card.Text>
                                            </div>
                                            <button className='promo'>BCPs entregues</button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </> : ""}

                            {selectedButton === 3 ? <>
                                <div className='container_tabela'>
                                    <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={family} />
                                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <Card.Title>Teste: Family and Friends - Abertura de Conta (fluxo: Pix)</Card.Title>
                                                <Card.Text>Ajudei nos testes de abertura de contas via pix para o fluxo de Iscas.</Card.Text>
                                            </div>
                                            <button className='promo'>BCPs entregues</button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={data} />
                                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <Card.Title>Discovery: Bug "undefined" em atualização cadastral</Card.Title>
                                                <Card.Text>Utilizando o Datadog, foi feito um estudo no fluxo de Iscas e descoberto o bug que aparece em produção onde "undefined" aparece no lugar do bairro.</Card.Text>
                                            </div>
                                            <button className='promo'>BCPs entregues</button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={dog} />
                                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <Card.Title>Discovery: Bug do "meu endereço não tem número"</Card.Title>
                                                <Card.Text>Utilizando o Datadog, foi feito um estudo no fluxo de Iscas e descoberto o bug que aparece um "erro" quando o usuário marca e desmarca o checkbox.</Card.Text>
                                            </div>
                                            <button className='promo'>BCPs entregues</button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{
                                        width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                        border: '0.5px solid black'
                                    }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={crip} />
                                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <Card.Title>Discovery: Bug relacionado a instabilidade do Caronte</Card.Title>
                                                <Card.Text>Utilizando o datadog, foi estudado o cenário onde tinhamos erro na requisição do caronte e houve um estudo para propor sua solução</Card.Text>
                                            </div>
                                            <button className='promo'>BCPs entregues</button>
                                        </Card.Body>
                                    </Card>

                                </div>
                            </> : ""}

                            {selectedButton === 4 ?
                                <>
                                    <div className='container_tabela'>
                                        <div className='tarefas'>
                                            <Card style={{
                                                width: '18rem',
                                                marginRight: '20px',
                                                flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={reuniao} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Organização do Soluções em Foco</Card.Title>
                                                    <Card.Text>
                                                        Organização da reunião "Soluções em Foco", reunião focada em passagens de conhecimento e discussões de soluções que podem ser adotadas para nossa RT.

                                                    </Card.Text>
                                                    <Button variant="primary">Sextas-Feiras: 15h</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={clima} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Participação no Grupo do Clima</Card.Title>
                                                    <Card.Text>
                                                        Para organização de Happy Hours, festas de integração e melhor convivência dos membros da RT, o grupo do clima visa melhorar o ambiente de trabalho da comunidade.
                                                    </Card.Text>
                                                    <Button variant="primary">Sextas-Feiras: 15h</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={tapete} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Estabilização do Ambiente de Dev - Tapete Laranja</Card.Title>
                                                    <Card.Text>
                                                        Discovery e estabilização do ambiente de desenvolvimento do fluxo do tapete laranja. Saindo da margem de 100% de erros para um cenário de 70% das rotas funcionando.

                                                    </Card.Text>
                                                    <Button variant="primary">Discovery/Estabilização</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={docs} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Alimentação do Sharepoint da RT com documentações explicativas</Card.Title>
                                                    <Card.Text>
                                                        Alimentação do Sharepoint da RT com documentações explicativas para Onboarding e auxilio aos colaboradores.

                                                    </Card.Text>
                                                    <Button variant="primary">Discovery/Estabilização</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={aulas} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Aulas de Front-end</Card.Title>
                                                    <Card.Text>
                                                        Junto com outro colaborador, fomos responsáveis por puxar aulas sobre front-end para ensinar os outros colaboradores.
                                                        Ensinando tecnologias que utilizamos em nossa RT.
                                                    </Card.Text>
                                                    <Button variant="primary">Aulas sobre Angular</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={git} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Café com Git</Card.Title>
                                                    <Card.Text>
                                                        Passagem de conhecimento sobre Git para a Squad Aceleração.
                                                        Apresentação com slides explicativos
                                                    </Card.Text>
                                                    <Button variant="primary">Passagem de Conhecimento</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={releases} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Apresentação da R2</Card.Title>
                                                    <Card.Text>
                                                        Apresentação das principais entregas da Release 2 feitas pela Squad Aceleração.
                                                    </Card.Text>
                                                    <Button variant="primary">Apresentação</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={releases} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Apresentação da R3</Card.Title>
                                                    <Card.Text>
                                                        Apresentação das principais entregas que seriam feitas na Release 3 pela Squad Aceleração.
                                                    </Card.Text>
                                                    <Button variant="primary">Apresentação</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={akamai} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Passagem de conhecimento Cloudfront + Akamai</Card.Title>
                                                    <Card.Text>
                                                        Apresentação explicando a diferença entre Cloudfront e Akamai no "Soluções em Foco" para a RT toda.
                                                    </Card.Text>
                                                    <Button variant="primary">Apresentação</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={releases} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Apresentação do PDCA - Ambiente Dev</Card.Title>
                                                    <Card.Text>
                                                        Apresentação feita no PDCA sobre o levantamento do ambiente de dev, levantando os principais progressos e resultados.
                                                    </Card.Text>
                                                    <Button variant="primary">Apresentação</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={calculo} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Desenvolvimento do "Calcula Interjornada"</Card.Title>
                                                    <Card.Text>
                                                        Desenvolvimento do aplicativo "Calcula Interjornada" que fornece funcionalidades para que os Itubers consigam fazer a gestão de suas horas do banco de horas.
                                                    </Card.Text>
                                                    <Button variant="primary">
                                                        <a href="https://calcula-interjornada-itau.vercel.app/" target='blank'>Acesse o app</a>
                                                    </Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={aws} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Card.Title>Passagem de conhecimento AWS</Card.Title>
                                                    <Card.Text>
                                                        Passagem de conhecimento sobre AWS para colaboradores de outras RTs.
                                                    </Card.Text>
                                                    <Button variant="primary">AWS</Button>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{
                                                width: '18rem', marginRight: '20px', flexBasis: 'calc(100% / 5)',
                                                border: '0.5px solid black'
                                            }}>
                                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={git} />
                                                <Card.Body style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
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