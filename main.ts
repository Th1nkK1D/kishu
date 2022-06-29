/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import "dotenv";
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import "./utils/database.ts";

await start(manifest);
