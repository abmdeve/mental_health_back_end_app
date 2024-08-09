const Meditation = require("../../domain/entities/Meditation");
const UseCaseInterface = require("../interfaces/UseCaseInterface");

class GetAdviceByMood extends UseCaseInterface {
    constructor(quotesRepository){
        super();
        this.quotesRepository = quotesRepository;
    }

    async excute(mood){
        const quotesData = await this.quotesRepository.getAdviceByMood(mood);
        return new Meditation({text: quotesData});
    }
}

module.exports = GetAdviceByMood;