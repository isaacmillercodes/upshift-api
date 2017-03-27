const databaseName = 'upshift';

module.exports = {
  development: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${databaseName}`,
  },
  test: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${databaseName}_test`,
  }
};
