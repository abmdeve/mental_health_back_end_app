// FETCH ALL SONGS
// GET DAILY QUOTE -> CALL GEMINI -> {MORNING, NOON, EVENING}
// PROVIDE ADVICE {BAD}

const Song = require("../../domain/entities/Songs");
const UseCaseInterface = require("../interfaces/UseCaseInterface");

class GetSongs extends UseCaseInterface {
    async excute(){
        const songRows = await getAllSongs();

        return songRows.map(song => new Song({
            id: song.id,
            title: song.title,
            author: song.author,
            songLink: song.songLink,
        }));
    }
}

module.exports = GetSongs;