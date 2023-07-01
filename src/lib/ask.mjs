import readline from "readline/promises";

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = async (question) => {
  const answer = await prompt.question(question);
  return answer;
};

export { askQuestion, prompt };
