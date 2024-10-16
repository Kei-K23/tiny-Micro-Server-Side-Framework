import { ServerResponse } from "http";

export class Response {
  constructor(private res: ServerResponse) {}

  public status(code: number) {
    this.res.statusCode = code;
    return this;
  }

  public send(data: string) {
    this.res.end(data);
  }

  public json(data: object) {
    this.res.setHeader("Content-Type", "application/json");
    this.res.end(JSON.stringify(data));
  }
}
