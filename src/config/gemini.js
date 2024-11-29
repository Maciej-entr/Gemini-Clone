import {
    GoogleGenerativeAI,
  } from "@google/generative-ai";
  
  const apiKey ='AIzaSyCv1pe0leZ1t1HwHEmUddKQJeJ18uYC1Tg/6/';
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
  });
  
  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return (result.response.text());
  }
  
  export default run
