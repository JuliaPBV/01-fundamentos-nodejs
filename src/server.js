import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method == "GET" && url == "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method == "POST" && url == "/users") {
    users.push({
      id: 1,
      name: "Joana Carla",
      email: "joanacarala@example.com",
    });

    return res.writeHead(201).end();
  }

  return res.writeHend(404).end();
});

server.listen(3333);
