import { rest } from 'msw';

const packagesPayload = require('./api/packages.json');

export const handlers = [
  rest.get('http://localhost:9000/-/verdaccio/packages', (req, res, ctx) => {
    return res(ctx.json(packagesPayload));
  }),
  rest.get('http://localhost:4873/-/verdaccio/packages', (req, res, ctx) => {
    return res(ctx.json(packagesPayload));
  }),
];
