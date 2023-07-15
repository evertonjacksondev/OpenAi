const axios = require('axios');

const apiKey = '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';

const examples = [
    {
      document: 'Pergunta: Quanto é 2 + 2?\nResposta: 4',
    },
    {
      document: 'Pergunta: Qual é a capital da França?\nResposta: Paris',
    },
    // Adicione mais exemplos de pergunta e resposta aqui
  ];
  
  async function trainChatGPT() {
    const trainingData = examples.map(({ document }) => document);
  
    const fineTuneData = {
      documents: trainingData,
      model: 'gpt-3.5-turbo',
      n_epochs: 1,
    };
  
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/fine-tunes',
        fineTuneData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );
  
      console.log('Treinamento concluído:', response.data);
    } catch (error) {
      console.error('Erro durante o treinamento:', error.response.data);
    }
  }
  
  trainChatGPT();