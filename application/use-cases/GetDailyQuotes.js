const Meditation = require("../../domain/entities/Meditation");
const UseCaseInterface = require("../interfaces/UseCaseInterface");

class GetDailyQuotes extends UseCaseInterface {
    constructor(quotesRepository){
        super();
        this.quotesRepository = quotesRepository;
    }

    async excute(){
        const quotesData = await this.quotesRepository.getDailyQuotes();
        return new Meditation({text: quotesData});
    }
}

module.exports = GetDailyQuotes;