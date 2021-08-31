import { setupWorker } from 'msw';
import { handlers } from '@visma/msw-openapi-backend-integration';
import requestLogicHandlers, { definition } from './requestLogicHandlers';

export const worker = setupWorker(
  ...handlers({ definition }, requestLogicHandlers)
);
