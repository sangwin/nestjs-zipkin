import { Tracer, ExplicitContext, BatchRecorder } from 'zipkin';
import { HttpLogger } from 'zipkin-transport-http';
import { expressMiddleware } from 'zipkin-instrumentation-express';
// import * as express from 'express';

const zipkinUrl = 'http://localhost:9411/api/v2/spans';

const ctxImpl = new ExplicitContext();

const recorder = new BatchRecorder({
  logger: new HttpLogger({
    endpoint: zipkinUrl,
  }),
});

export const tracer = new Tracer({ ctxImpl, recorder });

export const zipkinMiddleware = expressMiddleware({
  tracer,
});
