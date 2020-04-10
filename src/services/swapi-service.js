export default class SwapiService {
  _apiBase = "https://rickandmortyapi.com/api";
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(
        `could not fetch ${this._apiBase}, recieved ${res.status}`
      );
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/character/1,2,3,4,5,6,7`);
    return res.map(this._transformPerson);
  };
  getPerson = async (id) => {
    const res = await this.getResource(`/character/${id}`);
    return this._transformPerson(res);
  };
  getAllEpisodes = async () => {
    const res = await this.getResource(`/episode/1,2,3,4,5,6,7`);
    return res.map(this._transformEpisode);
  };
  getEpisode = async (id) => {
    const res = await this.getResource(`/episode/${id}/`);
    return this._transformEpisode(res);
  };
  getAllLocations = async () => {
    const res = await this.getResource(`/location/1,2,3,4,5,6,7`);
    return res.map(this._transformLocations);
  };
  getLocations = async (id) => {
    const res = await this.getResource(`/location/${id}/`);
    return this._transformStarship(res);
  };
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  _transformEpisode = (episode) => {
    return {
      id: episode.id,
      name: episode.name,
      number: episode.episode,
      airDate: episode.air_date,
    };
  };
  _transformLocations = (location) => {
    return {
      id: location.id,
      name: location.name,
      type: location.type,
      dimension: location.dimension,
    };
  };
  _transformPerson = (person) => {
    return {
      id: person.id,
      name: person.name,
      gender: person.gender,
      origin: person.origin.name,
      image: person.image,
      species: person.species,
    };
  };
}
