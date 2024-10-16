import http, { Server } from "http";

interface Options {
  port: number;
}

export class MicroServer {
  private server: Server;
  private options: Options;

  constructor(options: Options) {
    this.options = options;
    this.server = http.createServer(this.requestHandler.bind(this));
  }

  private requestHandler(req: http.IncomingMessage, res: http.ServerResponse) {
    res.end("Hello world!");
  }

  public listen() {
    this.server.listen(this.options.port, () => {
      console.log(`Server running on port ${this.options.port}`);
    });
  }
}
