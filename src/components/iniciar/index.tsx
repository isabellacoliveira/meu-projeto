import { useEffect, useState } from 'react';
import './styles.css'
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { CardData } from '../../interfaces/card-data';
import { aceleracaoData } from './data/aceleracao/aceleracao-data';
import { logadoData } from './data/logado/logado-data';
import { iscasData } from './data/iscas/iscas-data';
import { naoLogadoData } from './data/nao-logado/nao-logado-data';
import { buttonsData } from './data/buttons/buttons-data';
import { foraDaRtData } from './data/fora-rt/fora-da-rt-data';
import { ButtonData } from '../../interfaces/button-data';
import { initusData } from './data/initus/initus-data';
import CardTask from '../card-task';

export default function Iniciar() {
    const [selectedButton, setSelectedButton] = useState<number | null>(0);
    const [aceleracao, setAceleracao] = useState<CardData[]>();
    const [logado, setLogado] = useState<CardData[]>();
    const [iscas, setIscas] = useState<CardData[]>();
    const [naoLogado, setNaoLogado] = useState<CardData[]>();
    const [buttonData, setButtonData] = useState<ButtonData[]>();
    const [foraDaRT, setForaDaRT] = useState<CardData[]>();
    const [initus, setInitus] = useState<CardData[]>();

    const handleClick = (index: number) => {
        setSelectedButton(index);
    };

    useEffect(() => {
        setAceleracao(aceleracaoData);
        setLogado(logadoData);
        setIscas(iscasData);
        setNaoLogado(naoLogadoData);
        setButtonData(buttonsData);
        setForaDaRT(foraDaRtData);
        setInitus(initusData);
    }, []);

    return (
        <>
            <div>
                <h4 className='titulo'>Minhas Contribuições</h4>
                <div>
                    <div>
                        <div className='aceleracao'>
                            <ButtonGroup aria-label="Basic example">
                                {buttonData?.map((button, index) => (
                                    <Button
                                        key={index}
                                        variant={'secondary'}
                                        className={selectedButton === (button.buttonNumber) ? 'action-selected' : 'action'}
                                        onClick={() => handleClick(button.buttonNumber)}
                                    >
                                        {button.buttonText}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </div>

                        <div>
                            {selectedButton === 0 ?
                                <>
                                    <div className='container_tabela'>
                                        {aceleracao?.map((card, index) => (
                                            <CardTask key={index} card={card} />
                                        ))}
                                    </div>
                                </>
                                : ""}

                            {selectedButton === 1 ? <>
                                <div className='container_tabela'>
                                    {logado?.map((card, index) => (
                                        <CardTask key={index} card={card} />
                                    ))}
                                </div>
                            </> : ""}

                            {selectedButton === 2 ? <>
                                <div className='container_tabela'>
                                    {naoLogado?.map((card, index) => (
                                        <CardTask key={index} card={card} />
                                    ))}
                                </div>
                            </> : ""}

                            {selectedButton === 3 ? <>
                                <div className='container_tabela'>
                                    {iscas?.map((card, index) => (
                                        <CardTask key={index} card={card} />
                                    ))}
                                </div>
                            </> : ""}

                            {selectedButton === 4 ? <>
                                <div className='container_tabela'>
                                    {initus?.map((card, index) => (
                                        <CardTask key={index} card={card} />
                                    ))}
                                </div>
                            </> : ""}

                            {selectedButton === 5 ?
                                <>
                                    <div className='container_tabela'>
                                        <div className='tarefas'>
                                            {foraDaRT?.map((card, index) => (
                                                <CardTask key={index} card={card} />
                                            ))}
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