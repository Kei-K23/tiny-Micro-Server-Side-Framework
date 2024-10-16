import { MicroServer } from "./core/server";
import { Router } from "./router/router";

const router = new Router();
const server = new MicroServer(router, { port: 8080 });

router.get("/", (req, res) => {
  res.json({ message: "hello world again" });
});

router.get("/about", (req, res) => {
  res.json({ message: "This is about" });
});

server.listen();
