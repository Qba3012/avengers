interface ApiCharacterResponse {
  data: {
    results: [
      {
        name: string;
        description: string;
        thumbnail: {
          path: string;
          extension: string;
        };
        urls: [{ type: string; url: string }];
      }
    ];
  };
}

export default ApiCharacterResponse;