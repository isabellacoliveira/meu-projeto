import seguro from '../../../assets/seguro.png';
import acess from '../../../assets/ssi.jpg';
import person from '../../../assets/person.png';
import crip from '../../../assets/entregas/crip.jpg'
import family from '../../../assets/family.jpg'
import { CardInfo } from '../../../interfaces/card-info-data';

export const destaquesData: CardInfo[] = [
  {
    imgSrc: seguro,
    title: "💳 Adição do Seguro Cartão Protegido no Tapete Laranja",
    description: "Colocar aqui os valores de negócios.",
    impacts: [
      { id: 1, description: "Pipopopo" },
      { id: 2, description: "Pipopopo" }
    ],
    values: [
      "✅ A gente trabalha para o cliente",
      "✅ A gente é movido por resultado"
    ]
  },
  {
    imgSrc: acess,
    title: "👨‍🦽 Correção de inconsistências de acessibilidade na jornada",
    description: "Colocar aqui os valores de negócios.",
    impacts: [
      { id: 1, description: "Pipopopo" },
      { id: 2, description: "Pipopopo" }
    ],
    values: [
      "✅ A gente trabalha para o cliente",
      "✅ A gente é movido por resultado",
      "✅ A gente quer diversidade e inclusão"
    ]
  },
  {
    imgSrc: person,
    title: "🏦 Envelopamento das Homes Uniclass e Personnalité",
    description: "Colocar aqui os valores de negócios.",
    impacts: [
      { id: 1, description: "Pipopopo" },
      { id: 2, description: "Pipopopo" }
    ],
    values: [
      "✅ A gente trabalha para o cliente",
      "✅ A gente é movido por resultado"
    ]
  },
  {
    imgSrc: crip,
    title: "🔒Integrações com o Caronte",
    description: "Colocar aqui os valores de negócios.",
    impacts: [
      { id: 1, description: "Aumento da segurança do sistema de abertura de conta" },
      { id: 2, description: "Adequação do sistema às conformidades da politica de segurança do Itaú" }
    ],
    values: [
      "✅ A gente trabalha para o cliente",
      "✅ A gente é movido por resultado"
    ]
  },
  {
    imgSrc: family,
    title: "🫂 Family & Friends - Testes Iscas",
    description: "Colocar aqui os valores de negócios.",
    impacts: [
      { id: 1, description: "Pipopopo" },
      { id: 2, description: "Pipopopo" }
    ],
    values: [
      "✅ A gente vai de turma",
      "✅ A gente trabalha para o cliente",
      "✅ A gente é movido por resultado"
    ]
  }
];
