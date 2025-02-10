export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  dialectOptions: {
    ssl: {
      require: boolean,  // Enable SSL
      rejectUnauthorized: boolean, // AWS RDS requires this setting
    },
  },
  urlDatabase?: string;
  logging?: boolean;
  synchronize?: boolean,
  sync?: {
    force: boolean
    alter: { drop: boolean }
  }
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
}