const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function insult(score) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "State an insult or a compliment for a person doing a plank exercise, based on how close the following percentage is to 100%. If the person has a percentage above 50%, compliment them. If they have a low percentage, insult them:\"" + String(score) + "%\"",
    temperature: 0.43,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.data.choices[0].text;
}

module.exports = { insult };