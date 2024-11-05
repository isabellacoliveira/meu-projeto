import me from '../../assets/me.jpg';
import Angular from '../../assets/amazon-s3-simple-storage-service.svg'
import Sla from '../../assets/angular.png'
import Novamente from '../../assets/aws-api-gateway-logo-368082D845-seeklogo.com.png'
import Cloudfront from '../../assets/aws-cloudfront-logo-D475098A98-seeklogo.com.png'
import Gtw from '../../assets/images.jpg'
import Image from '../../assets/images.png'
import React from '../../assets/react.png'
import Spring from '../../assets/spring.png'
import { useState } from 'react';

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
                    {/* <button className='promo' onClick={promover}>Promoção</button> */}
                </div>
            </div>
        </>
    );
}

export default Principal;