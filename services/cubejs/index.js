const CubejsServer = require('@cubejs-backend/server');

const server = new CubejsServer();

setInterval(() => server.runScheduledRefresh(), 5000);

server.listen().then(({ port }) => {
  console.log(`🚀 Cube.js server is listening on ${port}`);
}).catch(e => {
  console.error('Fatal error during server start: ');
  console.error(e.stack || e);
});
