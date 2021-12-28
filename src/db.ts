import mysql from 'mysql2';
import * as dotenv from 'dotenv';
import {Stat} from './types/stat';
dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 2,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

export const db = {
  query(query: string, values: (number | Date)[]) : Promise<Stat[]> {
    return new Promise((resolve, reject) => {
      pool.query<Stat[]>(query, values, (err, results) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(results);
      });
    });
  },
};

export const dbFindOne = {
  query(query: string, values: (number | Date)[]) : Promise<Stat[]> {
    return new Promise((resolve, reject) => {
      pool.query<Stat[]>(query, values, (err, results) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(results);
      });
    });
  },
};
