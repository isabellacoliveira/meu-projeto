import { CardData } from "../../../../interfaces/card-data";
import crip from '../../../../assets/entregas/crip.jpg'
import ag from '../../../../assets/ag.jpg'
import charon from '../../../../assets/charon.jpg'
import pac from '../../../../assets/pac.jpg'

export const logadoData: CardData[] = [
    {
        title: "Integração do Caronte com a aplicação de Oferta",
        description: "Integração do front-end com o back-end utilizando a estrutura do Caronte.",
        imageSrc: crip,
        entregue: true
    },
    {
        title: "Busca de Agência da aplicação",
        description: "Integração do Google Maps para busca de agência do usuário logado.",
        imageSrc: ag,
        entregue: true
    },
    {
        title: "Integração do Caronte na peça de Autenticação",
        description: "Integração do Caronte no MFE Autenticação.",
        imageSrc: charon,
        entregue: true
    },
    {
        title: "Correção da Estrutura Visual da PAC",
        description: "Correção de Bugs visuais presentes na proposta de abertura de conta.",
        imageSrc: pac,
        entregue: true
    },
];
