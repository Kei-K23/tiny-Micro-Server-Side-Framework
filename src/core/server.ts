import {
  createServer,
  IncomingMessage,
  ServerResponse,
  STATUS_CODES,
} from "http";

export class Server {
  private port: number;

  constructor(port: number) {
    this.port = port;
  }

  public start() {
    const server = createServer(this.requestHandler);

    // Start the server
    server.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

  // Request handler
  private requestHandler(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is message" }));
  }
}
