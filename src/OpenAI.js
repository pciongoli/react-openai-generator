import axios from "axios";

const openai = axios.create({
   baseURL: "https://api.openai.com/v1/",
   headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
   },
});

async function generateOutput(prompt, model = "text-davinci-002") {
   const response = await openai.post(`engines/${model}/completions`, {
      prompt,
      max_tokens: 1024,
      n: 1,
      temperature: 0.7,
      stop: "\n",
   });
   return response.data.choices[0].text.trim();
}

const openAI = { generateOutput };

export default openAI;
