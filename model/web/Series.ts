type SeriesApi = {
  id: number;
  title: string;
  description: string;
};

class Series {
  id: string;
  title: string;
  description: string;

  constructor(response: SeriesApi) {
    this.id = response.id.toString();
    this.title = response.title;
    this.description = response.description;
  }
}

export default Series;
