export interface Network {
  trackerUrl: string;
  scannerUrl: string;
}

export interface Networks {
  ethereumKovan: Network;
}

export interface Server {
  port: number;
}

export interface Support {
  mailto: string;
}

export interface Database {
  directory: String;
}

export interface Config {
  server?: Server;
  support?: Support;
  networks?: Networks;
  database?: Database;
}
