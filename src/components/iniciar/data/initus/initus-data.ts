import { CardData } from "../../../../interfaces/card-data";
import shell from '../../../../assets/shell-gas-stations-front-let.webp'
import conta from '../../../../assets/cartoes-itau-platinum-laranja-fundo-azul-coracao.avif'

export const initusData: CardData[] = [
    {
        title: "Adição do modal no fluxo do SHELL V3",
        description: "Adição do modal nos testes do SHELL V3",
        imageSrc: shell,
        entregue: false
    },
    {
        title: "Adição da geração de massas conta-pagamento",
        description: "Adição da geração de massas conta-pagamento no portal de massas",
        imageSrc: conta,
        entregue: false
    },
];
