import me from '../../assets/me.jpg';
import { useState } from 'react';
import loguinho from '../../assets/loguinho.png';
import sre from '../../assets/SRE-removebg-preview.png';
import './styles.css'

function Principal() {
    const [promocao, setPromocao] = useState<string>('JR');

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
                    <p className='cargo'>Começou no Itaú em Maio/2024</p>
                    {/* <p>- API Owner</p> */}

                    <div>

                    </div>
                    <div className='certificacoes'>
                        <div className='itens'>
                            <img className="sre" src={loguinho} alt="" />
                            <p>API Owner</p>
                        </div>
                        <div className='itens'>
                            <img className="sree" src={sre} alt="" />
                            <p>SRE Trained</p>
                        </div>
                        {/* <button className='promo' onClick={promover}>Promoção</button> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Principal;