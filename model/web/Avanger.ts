type ApiCharacter  = {
        name: string;
        description: string;
        thumbnail: {
          path: string;
          extension: string;
        };
        urls: [{ type: string; url: string }];
}

class Avenger {
    name: string;
    description: string;
    thumbnailUrl: string;
    wikiUrl: string | undefined;

    constructor(character: ApiCharacter) {
        this.name = character.name;
        this.description = character.description;
        this.thumbnailUrl = `${character.thumbnail.path}/landscape_large.${character.thumbnail.extension}`;
        this.wikiUrl = character.urls.find(url => url.type === "wiki")?.url;
    }
}

export default Avenger