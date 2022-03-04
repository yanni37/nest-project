
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
type: 'sqlite',
database: 'db',
entities:['dist/src/**/*.entity.js'],

// hors prod / local auto save de la bdd
synchronize: true

// en prod on passe le synchronize en false et on ajoute une migration:
// synchronize: false,
// migrations: [
// 'dist/src/db/migrations/*.js'
// ],
// cli: {
//     migrationsDir:'src/db/migrations'
// }
}

export default config;