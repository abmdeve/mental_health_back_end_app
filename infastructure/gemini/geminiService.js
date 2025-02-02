const { GoogleGenerativeAI } = require("@google/generative-ai");
const QuotesRepository = require("../../application/interfaces/QuotesRespository");

const genAi = new GoogleGenerativeAI("API_KEY");
const model = genAi.getGenerativeModel({model: "gemini-1.5-pro"});

class GeminiApi extends QuotesRepository {

    async getDailyQuotes() {
        const prompt = `Please provide three inspirational quotes for meditation, one for each part of the day: morning, noon and evening. Return the response in JSON format with the following structures:
        {
        "morningQuote": "Your morning quote here",
        "noonQuote": "Your noon quote here",
        "eveningQuote": "Your evening quote here"
        } return the json only without using keyboard json`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    }
    
    async getAdviceByMood(mood) {
        const prompt = `Given the current mood of the user, provide an appropriate meditation advice or mental health exercice. The possible
        {
        "advice": "specific advice or exercise based on the user's mood"
        }

        For example, if the user's mood is "happy", the response should be:

        {
        "advice": "Engage in a gratitude practice by listing three things tou are thankful for today. This will help sustain your positive"
        },
        So the mood is : ${mood}
        return the json only without using keyboard json
         `;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    }


}

module.exports = GeminiApi;