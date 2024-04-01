// src/server.js
import { createServer, Model } from "miragejs"

export default function () {
    return createServer({
        models: {
            users: Model,
          },
        routes() {
            //this.namespace = "api";
        
            this.get("/users", (schema, request) => {
              return schema.users.all()
            });
            this.post("/users", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
              
                return schema.users.create(attrs)
            });
          },
        seeds(server) {
          server.db.loadData({
            users: [
                {email:'teste@mail.com', password: 'senha123'},
                {email:'teste2@mail.com',password: '123456'},
                {email:'teste3@mail.com',password: 'senha123'}
            ],
          })
        },
      })
}

