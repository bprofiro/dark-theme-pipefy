export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#BB86FC'],
          user: 'https://avatars0.githubusercontent.com/u/59852846?s=400&amp;u=85458110a262ce4ede656199281dbbe254841399&amp;v=4'
        },
        {
          id: 2,
          content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: ['#BB86FC'],
          user: 'https://avatars0.githubusercontent.com/u/59852846?s=400&amp;u=85458110a262ce4ede656199281dbbe254841399&amp;v=4'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#BB86FC'],
          user: 'https://avatars0.githubusercontent.com/u/59852846?s=400&amp;u=85458110a262ce4ede656199281dbbe254841399&amp;v=4'
        },
        {
          id: 4,
          content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#03DAC6'],
          user: 'https://avatars0.githubusercontent.com/u/59852846?s=400&amp;u=85458110a262ce4ede656199281dbbe254841399&amp;v=4'
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#03DAC6'],
          user: 'https://avatars0.githubusercontent.com/u/59852846?s=400&amp;u=85458110a262ce4ede656199281dbbe254841399&amp;v=4'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://avatars0.githubusercontent.com/u/59852846?s=400&amp;u=85458110a262ce4ede656199281dbbe254841399&amp;v=4'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: ['#BB86FC'],
          user: 'https://avatars0.githubusercontent.com/u/59852846?s=400&amp;u=85458110a262ce4ede656199281dbbe254841399&amp;v=4'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#03DAC6'],
          user: 'https://avatars0.githubusercontent.com/u/59852846?s=400&amp;u=85458110a262ce4ede656199281dbbe254841399&amp;v=4'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#03DAC6'],
        },
        {
          id: 13,
          content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#BB86FC'],
        }
      ]
    },
  ];
}