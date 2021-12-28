import axios from 'axios';
import {Stat} from '../types/stat';
import {statModel} from '../models/statModel';
import {StatResponse} from '../types/statResponse';

const covidStatUrl = 'https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items?format=json&cl';

export const saveCovidStats = async () => {
  const latestUpdateDate = await getLatestUpdateDate();
  let covidStatApiData = await getCovidStatDataFromApi();

  if (latestUpdateDate) {
    covidStatApiData = covidStatApiData.filter((stat) => {
      return new Date(stat.lastUpdatedAtApify) > latestUpdateDate;
    });
  }

  covidStatApiData = covidStatApiData.filter((item) => {
    return Object.values(item).every((value) => {
      return !!value;
    });
  });

  const processedCovidStatData: Stat[] = covidStatApiData.map((stat) => {
    return {
      id: 0,
      infected: stat.infected ? stat.infected : 0,
      activeinfected: stat.activeInfected ? stat.activeInfected : 0,
      deceased: stat.deceased ? stat.deceased : 0,
      recovered: stat.recovered ? stat.recovered : 0,
      quarantined: stat.quarantined ? stat.quarantined : 0,
      tested: stat.tested ? stat.tested : 0,
      updated: new Date(stat.lastUpdatedAtApify),
    } as Stat;
  });

  processedCovidStatData.forEach((stat) => {
    statModel.create(stat, (err: Error|null) => {
      if (err) {
        console.log(`error happened during database creation ${err}`);
      }
    });
  });
};

export const getCovidStatDataFromApi = () => {
  return axios.get<StatResponse[]>(covidStatUrl)
      .then((response) => {
        return response.data;
      });
};

const getLatestUpdateDate = async () => {
  const latestUpdateDate: Stat = await statModel.findMaxDate();
  return latestUpdateDate.lastUpdated;
};
