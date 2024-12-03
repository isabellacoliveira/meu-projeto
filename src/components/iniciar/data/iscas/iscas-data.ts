import { CardData } from "../../../../interfaces/card-data";
import family from '../../../../assets/family.jpg'
import data from '../../../../assets/data.jpg'
import dog from '../../../../assets/dog.jpg'
import crip from '../../../../assets/entregas/crip.jpg'

export const iscasData: CardData[] = [
    {
      title: "Teste: Family and Friends - Abertura de Conta (fluxo: Pix)",
      description: "Ajudei nos testes de abertura de contas via pix para o fluxo de Iscas.",
      imageSrc: family,
      entregue: true
    },
    {
      title: "Discovery: Bug 'undefined' em atualização cadastral",
      description: "Utilizando o Datadog, foi feito um estudo no fluxo de Iscas e descoberto o bug que aparece em produção onde 'undefined' aparece no lugar do bairro.",
      imageSrc: data,
      entregue: true
    },
    {
      title: "Discovery: Bug do 'meu endereço não tem número'",
      description: "Utilizando o Datadog, foi feito um estudo no fluxo de Iscas e descoberto o bug que aparece um 'erro' quando o usuário marca e desmarca o checkbox.",
      imageSrc: dog,
      entregue: true
    },
    {
      title: "Discovery: Bug relacionado a instabilidade do Caronte",
      description: "Utilizando o Datadog, foi estudado o cenário onde tínhamos erro na requisição do Caronte e houve um estudo para propor sua solução.",
      imageSrc: crip,
      entregue: true
    },
  ];
  