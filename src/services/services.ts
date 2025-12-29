import type { 
  DestinationsType, 
  TestimonialsType,
  HighlightsType,
  AccordionType
} from '@/types/types'
import { Rocket, Orbit, User } from 'lucide-react'

export const destinations: DestinationsType[] = [
  {
    id: 'mars',
    name: 'Marte',
    description:
      'Viva 10 dias explorando a superfície marciana com vistas deslumbrantes e experiências únicas.',
    rating: 4,
    reviews: 320,
    durationDays: 10,
    price: 85000,
    img: {
      src: '/destinations/marte.png',
      alt: 'Superfície do planeta Marte com paisagem rochosa avermelhada'
    },
    highlights: [
      'Exploração da superfície',
      'Paisagens marcianas',
      'Experiência imersiva'
    ]
  },
  {
    id: 'moon',
    name: 'Lua',
    description:
      'Um fim de semana inesquecível na superfície lunar com passeios guiados e observação da Terra.',
    rating: 5,
    reviews: 3135,
    durationDays: 3,
    price: 45000,
    img: {
      src: '/destinations/lua.png',
      alt: 'Superfície da Lua com a Terra visível ao fundo no espaço'
    },
    highlights: [
      'Baixa gravidade',
      'Vista da Terra',
      'Passeios guiados'
    ]
  },
  {
    id: 'saturn',
    name: 'Saturno',
    description:
      'Experimente a vida de um astronauta e participe de pesquisas científicas reais no espaço.',
    rating: 5,
    reviews: 120,
    durationDays: 10,
    price: 75000,
    img: {
      src: '/destinations/saturno.png',
      alt: 'Planeta Saturno com seus anéis vistos do espaço'
    },
    highlights: [
      'Anéis de Saturno',
      'Pesquisa científica',
      'Experiência de astronauta'
    ]
  }
]

export const testimonials: TestimonialsType[] = [
  {
    id: '1',
    name: 'Matheus Alvarez',
    avatar: '/users/user1.png',
    rating: 5,
    testimonial:
      'O momento em que vi o planeta azul pela janela foi profundamente emocional. Lá em cima, tudo parece silencioso e imenso. A sensação de estar flutuando, livre da gravidade, foi libertadora.',
  },
  {
    id: '2',
    name: 'Mariana Silva',
    avatar: '/users/user2.png',
    rating: 5,
    testimonial:
      'A viagem começou com um treinamento super bem planejado, o que me deixou tranquila quanto aos procedimentos e à segurança. Quando finalmente decolamos, senti uma mistura de euforia e paz.',
  },
  {
    id: '3',
    name: 'Carlos Henrique',
    avatar: '/users/user3.png',
    rating: 4,
    testimonial:
      'Estar no espaço parecia ficção científica, mas ali estava eu, orbitando a Terra. O treinamento pré-lançamento foi intenso, mas essencial para entender cada etapa. A bordo, me impressionei com o conforto!',
  },
  {
    id: '4',
    name: 'Beatriz Maria',
    avatar: '/users/user4.png',
    rating: 5,
    testimonial:
      'Desde pequena sou fascinada pelo universo, e essa viagem foi a realização de um sonho antigo. Durante a órbita, pude observar as luzes das cidades, a curvatura do planeta e até a aurora boreal lá de cima.',
  },
  {
    id: '5',
    name: 'Diego Lima',
    avatar: '/users/user5.png',
    rating: 4,
    testimonial:
      'Como profissional da saúde, minha principal preocupação era a segurança. Fiquei impressionado com o nível de preparo da equipe e os protocolos seguidos em cada fase da missão.',
  },
  {
    id: '6',
    name: 'Júlia Santos',
    avatar: '/users/user6.png',
    rating: 4,
    testimonial:
      'Sempre fui apaixonada por astronomia, mas nada me preparou para o que senti ao olhar pela escotilha. A Terra é tão frágil e bela vista de cima. Me vi refletindo sobre nossa existência.',
  },
]

export const highlights: HighlightsType[] = [
  {
    id: 1,
    title: 'Partidas Semanais',
    description:
      'Embarque em nossas naves modernas com saídas regulares, garantindo flexibilidade e rapidez para iniciar sua aventura.',
    icon: Rocket,
  },
  {
    id: 2,
    title: 'Destinos Incríveis',
    description:
      'Conheça planetas, luas e estações espaciais, cada um com paisagens únicas e experiências marcantes.',
    icon: Orbit,
  },
  {
    id: 3,
    title: 'Experiência Única',
    description:
      'Sinta-se como um verdadeiro astronauta com atividades e treinamentos imersivos durante a viagem.',
    icon: User,
  },
]

export const accordionData: AccordionType[] = [
  {
    id: 1,
    title: 'É seguro viajar para o espaço?',
    content:
      'As viagens espaciais seguem protocolos rigorosos de segurança e passam por múltiplas etapas de testes antes do lançamento. Embora envolvam riscos, as tecnologias atuais e o treinamento da tripulação reduzem significativamente as chances de incidentes.',
  },
  {
    id: 2,
    title: 'O que está incluso no valor da viagem?',
    content:
      'O pacote inclui treinamento pré-voo, equipamentos de segurança, trajes espaciais, suporte médico, acomodação antes do lançamento e a experiência completa da missão espacial.',
  },
  {
    id: 3,
    title: 'Preciso de treinamento antes do embarque?',
    content:
      'Sim. Todos os passageiros passam por um treinamento preparatório que inclui simulações de gravidade zero, orientações de segurança e adaptação às condições da viagem.',
  },
  {
    id: 4,
    title: 'Qual é a duração média das viagens?',
    content:
      'A duração varia conforme o tipo de missão, mas viagens turísticas suborbitais costumam durar entre 2 e 4 horas, enquanto missões orbitais podem se estender por vários dias.',
  },
  {
    id: 5,
    title: 'Quais formas de pagamento são aceitas?',
    content:
      'Aceitamos cartões de crédito internacionais, transferências bancárias e criptomoedas selecionadas. Parcelamentos e planos personalizados podem estar disponíveis mediante consulta.',
  },
]