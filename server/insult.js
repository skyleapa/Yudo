const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function insult(keyword, array) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "if the following number is " +
      keyword +
      "': '" +
      stringer(array) +
      "'. Return the average of these values.",
    temperature: 0.43,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  // console.log("Response is " + response.data.choices[0].text);

  return response.data.choices[0].text;
}

// "beach", ["cool", "clear sky", "edgy"]
async function avgGenerator(keyword, tags) {
  arrResponse = await respond(keyword, tags);

  console.log(arrResponse);

  return arrResponse;

  // arrResponse.then(function(result) {
  //   // console.log(result)
  //   // console.log(typeof(result));
  //   var final = parseInt(result);
  //   console.log(final);
  //   // console.log(typeof(final));
  //   return final;
  // })
}

console.log(avgGenerator("beach", ["cool", "clear sky", "edgy"]));

module.exports = { respond };