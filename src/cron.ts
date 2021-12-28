import {CronJob} from 'cron';
import * as apiManager from './models/apiModel';

export class Cron {
  cronJob: CronJob;

  constructor() {
    this.cronJob = new CronJob('0 0 7 * * 1-5', async () => {
      try {
        await this.updateCovidStatCron();
      } catch (e) {
        console.error(e);
      }
    });

    if (!this.cronJob.running) {
      console.log('Cron job is running');
      this.cronJob.start();
    }
  }

  async updateCovidStatCron(): Promise<void> {
    await apiManager.saveCovidStats();
  }
}
