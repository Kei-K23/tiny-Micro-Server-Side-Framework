import http, { Server } from "http";
import { Router } from "../router/router";
import { Request } from "../http/request";
import { Response } from "../http/response";

interface Options {
  port: number;
}

export class MicroServer {
  private server: Server;
  private options: Options;
  private router: Router;

  constructor(router: Router, options: Options) {
    this.options = options;
    this.router = router;
    this.server = http.createServer(this.requestHandler.bind(this));
  }

  private requestHandler(req: http.IncomingMessage, res: http.ServerResponse) {
    const request = new Request(req);
    const response = new Response(res);

    const route = this.router.findRoute(request);
    if (route) {
      route.handler(request, response);
    } else {
      response.status(404).json({ error: "route not found" });
    }
  }

  public listen() {
    this.server.listen(this.options.port, () => {
      console.log(`Server running on port ${this.options.port}`);
    });
  }
}
