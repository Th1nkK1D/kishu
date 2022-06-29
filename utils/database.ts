import { MongoDBConnector, Database } from "denodb";
import { Site } from "../models/site.ts";

const connection = new MongoDBConnector({
  uri: `mongodb://${Deno.env.get("MONGO_HOST")}`,
  database: Deno.env.get("MONGO_DATABASE") as string,
});

export const db = new Database(connection);

db.link([Site]);
await db.sync();
