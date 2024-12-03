import { CardData } from "../../../../interfaces/card-data";
import cartaoProtegido from '../../../../assets/entregas/cartao.webp'
import vitrine from '../../../../assets/entregas/parcelamento-carrossel-jpg.webp'
import recaptcha from '../../../../assets/entregas/recaptcha.webp'
import uniclassMion from '../../../../assets/entregas/Consorcio-Itau-Uniclass.avif'
import acessibilidade from '../../../../assets/entregas/diversidade_inclusao2.png'
import homeIp from '../../../../assets/entregas/Personnalite-Cover.webp'
import cloudfront from '../../../../assets/entregas/amazon-cloud-front.webp'
import undefined from '../../../../assets/entregas/images.jpg'
import uni from '../../../../assets/entregas/uni.png'
import tapeteLaranja from '../../../../assets/tapete-laranja.png'

export const aceleracaoData: CardData[] = [
    {
        title: "Adição do Seguro Cartão Protegido no meio do fluxo do Tapete Laranja",
        description: "Adição da oferta do seguro cartão protegido no meio do fluxo do tapete laranja.",
        imageSrc: cartaoProtegido,
        entregue: true
    },
    {
        title: "Tageamento da vitrine para o portal GA4",
        description: "Adição do tageamento da tela de vitrine para análise no portal GA4.",
        imageSrc: vitrine,
        entregue: true
    },
    {
        title: "Discovery - Levantamento do Ambiente de Dev via DNS",
        description: "Levantamento do ambiente de dev do tapete laranja via DNS.",
        imageSrc: cloudfront,
        entregue: true
    },
    {
        title: "Equalização da experiência de botões de seleção",
        description:
            "Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500.",
        imageSrc: cartaoProtegido,
        entregue: true
    },
    {
        title: "Correção de inconsistências de acessibilidade na jornada",
        description: "Correção de bugs de acessibilidade espalhados pelo fluxo do tapete laranja.",
        imageSrc: acessibilidade,
        entregue: true
    },
    {
        title: "Atualização da identidade visual do banco na jornada de abertura de contas",
        description: "Troca da identidade visual do banco nas telas de Uniclass.",
        imageSrc: uni,
        entregue: true
    },
    {
        title: "Envelopamento da Home Personnalite - Home IP",
        description: "Criação do visual da tela de home do segmento Personnalité.",
        imageSrc: homeIp,
        entregue: true
    },
    {
        title: "Envelopamento da Home Uniclass - Home IU",
        description: "Atualização do visual da tela de home do segmento Uniclass.",
        imageSrc: uniclassMion,
        entregue: true
    },
    {
        title: "Bug - Nome do correntista 'undefined'",
        description: "Correção do bug causado pelo CMS Headless no fluxo de Wayout do tapete laranja.",
        imageSrc: undefined,
        entregue: true
    },
    {
        title: "Correção de inconsistências de acessibilidade na tela de Home-IP",
        description: "Correções de acessibilidade no fluxo de personnalité do tapete laranja.",
        imageSrc: acessibilidade,
        entregue: true
    },
    {
        title: "Remoção do Recaptcha no fluxo do Folhas",
        description: "Remoção do recaptcha no fluxo de folhas do tapete laranja.",
        imageSrc: recaptcha,
        entregue: true
    },
    {
        title: "Integração com o Caronte e migração para a v2 do Recepção",
        description:
            "Atualização do início da jornada do tapete laranja para a estrutura do caronte e a v2 do bff-recepção",
        imageSrc: tapeteLaranja,
        entregue: true
    },
];
