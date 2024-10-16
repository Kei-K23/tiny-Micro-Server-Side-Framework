import { Request } from "../http/request";
import { Response } from "../http/response";

type RequestHandler = (req: Request, res: Response) => void;

interface Route {
  path: string;
  method: string;
  handler: RequestHandler;
}

export class Router {
  private routes: Route[] = [];

  public get(path: string, handler: RequestHandler) {
    this.routes.push({
      method: "GET",
      path,
      handler,
    });
  }

  public post(path: string, handler: RequestHandler) {
    this.routes.push({
      method: "POST",
      path,
      handler,
    });
  }

  public findRoute(req: Request): Route | undefined {
    return this.routes.find(
      (route) => route.path === req.url && route.method === req.method
    );
  }
}
