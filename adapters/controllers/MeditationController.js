const GeminiApi = require("../../infastructure/gemini/geminiService");
const GetAdviceByMood = require("../../application/use-cases/GetAdviceByMood");
// const Get

class MeditationController {
    static async dailyQuote(req, res){
        try {
            const quotesRepository = new GeminiApi();
            const getDailyQuotes = new GetAdviceByMood(quotesRepository);
            const quotes = await getDailyQuotes.excute();

            res.json()
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}