import { IncomingMessage } from "http";

export class Request {
  constructor(private req: IncomingMessage) {}

  get url(): string | undefined {
    return this.req.url;
  }

  get method(): string | undefined {
    return this.req.method;
  }
}
