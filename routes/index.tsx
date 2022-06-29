/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Site, SiteRecord } from "../models/site.ts";

interface HomeData {
  sites: SiteRecord[];
}

export const handler: Handlers<HomeData> = {
  async GET(_, ctx) {
    const sites = (await Site.all()) as unknown as SiteRecord[];

    return ctx.render({
      sites,
    });
  },
};

export default function Home({ data }: PageProps<HomeData>) {
  return (
    <div>
      <h1>Kishu</h1>
      <p>The static site PaaS</p>
      {data.sites.length === 0 ? (
        <p>No sites found</p>
      ) : (
        <ul>
          {data.sites.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
