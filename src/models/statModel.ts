import {Stat} from '../types/stat';
import {db} from '../db';

export const statModel = {
  create(stat: Stat, callback: (err: Error|null ) => void) {
    const queryString =
        'INSERT INTO stat (infected, activeinfected, deceased, recovered, quarantined, tested, updated) ' +
        'VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(queryString, [
      stat.infected,
      stat.activeinfected,
      stat.deceased,
      stat.recovered,
      stat.quarantined,
      stat.tested,
      stat.updated,
    ],
    ).then(() => {
      callback(null);
    });
  },

  async findMaxDate() : Promise<Stat> {
    const queryString = 'SELECT MAX(updated) AS lastUpdated FROM stat';
    const result = await db.query(queryString, []);
    return result[0];
  },

  async findAll() : Promise<Stat[]> {
    const queryString = 'SELECT * FROM stat';
    return await db.query(queryString, []);
  },
};
