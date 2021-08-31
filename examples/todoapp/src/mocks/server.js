import { handlers } from '@visma/msw-openapi-backend-integration';
import { setupServer } from 'msw/node';
import definition from '../TodoMVC-API.json';
import requestLogicHandlers from './requestLogicHandlers';

export const server = setupServer(
  ...handlers({ definition: definition }, requestLogicHandlers)
);
