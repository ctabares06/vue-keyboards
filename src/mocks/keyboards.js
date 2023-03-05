import { LoremIpsum } from 'lorem-ipsum';

const setup = (options) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  return lorem;
}

export const generateKeyboards = () => {
  const keyboardJson = {};
  const lorem = setup();
  const image = 'https://placebear.com/300/200';
  const items = Math.floor(Math.random() * 49);

  for (let i = 0; i <= items; i++) {
    const title = Math.ceil(Math.random() * 3);
    keyboardJson[i] = {
      title: lorem.generateWords(title),
      description: lorem.generateParagraphs(1),
      price: parseFloat((Math.random() * 10).toFixed(2)),
      image,
      id: i+1,
    }
  }

  return { items: keyboardJson, done: true };
}