import {IApp} from './apps';
import {IEvents} from './events';

interface IAppConfig extends IApp {
  events: IEvents;
}

export interface IConfig {
  id: string;
  name: string;
  apps: IAppConfig[];
}

const configs: {[clientId: string]: IConfig} = {};

export default configs;