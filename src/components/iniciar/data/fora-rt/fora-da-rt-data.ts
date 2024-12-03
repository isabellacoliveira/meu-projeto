import { CardData } from "../../../../interfaces/card-data";
import aulas from '../../../../assets/ailas.png'
import akamai from '../../../../assets/akamai.jpg'
import aws from '../../../../assets/awssss.png'
import calculo from '../../../../assets/calculo.png'
import docs from '../../../../assets/docs.jpg'
import git from '../../../../assets/git.webp'
import releases from '../../../../assets/releases.jpg'
import reuniao from '../../../../assets/reuniao.jpg'
import tapete from '../../../../assets/tapete.jpg'
import clima from '../../../../assets/clima_brasil.jpg'

export const foraDaRtData: CardData[] = [
    {
        title: 'Organização do Soluções em Foco',
        description: 'Organização da reunião "Soluções em Foco", focada em passagens de conhecimento e discussões de soluções que podem ser adotadas para nossa RT.',
        imageSrc: reuniao,
        // button: 'Sextas-Feiras: 15h',
    },
    {
        title: 'Participação no Grupo do Clima',
        description: 'Para organização de Happy Hours, festas de integração e melhor convivência dos membros da RT, o grupo do clima visa melhorar o ambiente de trabalho da comunidade.',
        imageSrc: clima,
        // button: 'Sextas-Feiras: 15h',
    },
    {
        title: 'Estabilização do Ambiente de Dev - Tapete Laranja',
        description: 'Discovery e estabilização do ambiente de desenvolvimento do fluxo do tapete laranja. Saindo da margem de 100% de erros para 70% das rotas funcionando.',
        imageSrc: tapete,
        // button: 'Discovery/Estabilização',
    },
    {
        title: 'Alimentação do Sharepoint da RT',
        description: 'Documentações explicativas para Onboarding e auxílio aos colaboradores.',
        imageSrc: docs,
        // button: 'Discovery/Estabilização',
    },
    {
        title: 'Aulas de Front-end',
        description: 'Aulas sobre front-end para ensinar tecnologias utilizadas na RT, como Angular.',
        imageSrc: aulas,
        // button: 'Aulas sobre Angular',
    },
    {
        title: 'Café com Git',
        description: 'Passagem de conhecimento sobre Git para a Squad Aceleração, com apresentação explicativa.',
        imageSrc: git,
        // button: 'Passagem de Conhecimento',
    },
    {
        title: 'Apresentação da R2',
        description: 'Principais entregas da Release 2 feitas pela Squad Aceleração.',
        imageSrc: releases,
        // button: 'Apresentação',
    },
    {
        title: 'Apresentação da R3',
        description: 'Principais entregas que seriam feitas na Release 3 pela Squad Aceleração.',
        imageSrc: releases,
        // button: 'Apresentação',
    },
    {
        title: 'Passagem de conhecimento Cloudfront + Akamai',
        description: 'Apresentação explicando a diferença entre Cloudfront e Akamai no "Soluções em Foco".',
        imageSrc: akamai,
        // button: 'Apresentação',
    },
    {
        title: 'Apresentação do PDCA - Ambiente Dev',
        description: 'Levantamento do ambiente de dev, com principais progressos e resultados.',
        imageSrc: releases,
        // button: 'Apresentação',
    },
    {
        title: 'Desenvolvimento do "Calcula Interjornada"',
        description: 'Aplicativo que auxilia na gestão de horas do banco de horas dos Itubers.',
        imageSrc: calculo,
        // button: '<a href="https://calcula-interjornada-itau.vercel.app/" target="_blank" rel="noopener noreferrer">Acesse o app</a>',
    },
    {
        title: 'Passagem de conhecimento AWS',
        description: 'Passagem de conhecimento sobre AWS para colaboradores de outras RTs.',
        imageSrc: aws,
        // button: 'AWS',
    },
    {
        title: 'Passagem de conhecimento Git',
        description: 'Passagem de conhecimento sobre Git para um cientista de dados de Shared Experience PJ.',
        imageSrc: git,
        // button: 'Git',
    },
]