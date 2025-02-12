import { CardData } from "../../../../interfaces/card-data";
import midia from '../../../../assets/midia.jpg'
import cartao from '../../../../assets/entregas/cartao-com-pontos.jpg'
import equalizacao from '../../../../assets/entregas/equalizacao.avif'
import cp from '../../../../assets/entregas/cp.avif'

export const naoLogadoData: CardData[] = [
    {
      title: "Tageamento do Adjust na efetivação da conta",
      description: "Tageamento no fluxo do One Itaú Não Logado.",
      imageSrc: midia,
      entregue: true
    },
    {
      title: "Equalização dos argumentos na Home",
      description: "Tageamento no fluxo do One Itaú Não Logado.",
      imageSrc: equalizacao,
      entregue: true
    },
    {
      title: "Conta pagamento V2",
      description: "Integração do MFE utilizando a estrutura do caronte para a nova experiência do Conta Pagamento V2",
      imageSrc: cp,
      entregue: true
    },
    {
      title: "Cartão com Pontos - Uniclass",
      description: "Adição do cartão com pontos no fluxo de Uniclass do One Itaú",
      imageSrc: cartao,
      entregue: true
    },
  ];
  