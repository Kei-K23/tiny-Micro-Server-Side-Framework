import { MicroServer } from "./core/server";
import { Request } from "./http/request";
import { Router } from "./router/router";

const router = new Router();
const server = new MicroServer(router, { port: 8080 });

interface User {
  name: string;
  age: number;
}

router.get("/", (req, res) => {
  res.json({ message: "hello world again" });
});

router.get("/about", (req: Request, res) => {
  res.json({ message: "This is about" });
});

router.post("/", async (req: Request, res) => {
  const body = await req.json<User>();
  res.json({ message: "This is about", name: body.name, age: body.age });
});

server.listen();
