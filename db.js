import pg from 'pg';

const Pool = pg.Pool;
export const pool = new Pool({
  user: 'postgres',
  password: 'daa',
  host: 'localhost',
  port: 5432,
  database: 'node_postgres'
});