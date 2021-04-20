import { rest } from 'msw';

import { API_URL } from '../constants/api';
import list from './data/list.json';

/* Req timeout in ms */
const TIMEOUT = 1500;

export const handlers = [
  rest.get(`${API_URL}/api/v1/list`, (req, res, ctx) => {
    /*
     * You can also simply return the response instead of timeout if want
       return res(
        ctx.json({
          status: 'success',
        }),
       );
    */
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res(ctx.json(list)));
      }, TIMEOUT);
    });
  }),
];
