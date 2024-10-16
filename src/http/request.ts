import { IncomingMessage } from "http";

export class Request {
  constructor(private req: IncomingMessage) {}

  get url(): string | undefined {
    return this.req.url;
  }

  get method(): string | undefined {
    return this.req.method;
  }

  public async json<T = unknown>(): Promise<T> {
    return new Promise((resolve, reject) => {
      let body: Uint8Array[] = [];

      this.req
        .on("error", (err) => {
          reject(err);
        })
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          try {
            const parsedBody = JSON.parse(Buffer.concat(body).toString());

            resolve(parsedBody as T);
          } catch {
            reject(new Error("Invalid JSON"));
          }
        });
    });
  }
}
