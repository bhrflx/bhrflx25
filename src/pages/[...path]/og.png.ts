import { Renderer } from "@takumi-rs/core";
import { container, image, percentage, text } from "@takumi-rs/helpers";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import path from "node:path";

const portrait = {
  src: "portrait.png",
  data: await readFile(
    path.resolve(`${process.cwd()}/src/assets/photography/portrait.png`),
  ),
  width: 2063,
  height: 2063,
};

const projectImports = await getCollection("projects");
const projects = Object.values(projectImports);

const staticRoutes = [
  {
    params: { path: "/" },
    props: {
      slug: "home",
      title: "Home",
      img: "/src/assets/photography/portrait.png",
    },
  },
  {
    params: { path: "/about" },
    props: {
      slug: "about",
      title: "About",
      img: "/src/assets/photography/portrait.png",
    },
  },
  {
    params: { path: "/work" },
    props: {
      slug: "work",
      title: "Work",
      img: "/src/assets/photography/portrait.png",
    },
  },
  {
    params: { path: "/photography" },
    props: {
      slug: "photography",
      title: "Photography",
      img: "/src/assets/photography/portrait.png",
    },
  },
  {
    params: { path: "/imprint" },
    props: {
      slug: "imprint",
      title: "Imprint",
      img: "/src/assets/photography/portrait.png",
    },
  },
];

const dynamicRoutes = projects.map(({ id, data }) => ({
  params: { path: "/work/" + id },
  props: {
    slug: id,
    title: data.title,
    img: data.image.rawUrl,
  },
}));

const renderer = new Renderer({
  persistentImages: [portrait],
});

export const GET: APIRoute = async ({ params, props }) => {
  // Not elegant. But we know that every project starts with this string,
  // as we defined that in dynamicRoutes above.
  const isProject = params.path?.startsWith("work/");
  const imgFileName = isProject ? `${props.slug}.png` : "portrait.png";

  // Only need to append images for projects, everything else uses the portrait.
  if (isProject) {
    renderer.putPersistentImage(
      imgFileName,
      await readFile(path.resolve(process.cwd() + props.img)),
    );
  }

  const png = await renderer.render(
    createOpenGraphImage(props.title, imgFileName),
    {
      width: 1200,
      height: 630,
      format: "Png",
    },
  );

  return new Response(png, {
    status: 200,
    headers: { "Content-Type": "image/png" },
  });
};

function createOpenGraphImage(title: string, img: string) {
  return container({
    style: {
      width: 1200,
      height: 630,
      padding: 32,
      backgroundColor: "oklch(0.1776 0 0)",
    },
    children: [
      container({
        style: {
          width: percentage(100),
          height: percentage(100),
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 24,
          backgroundColor: "oklch(0.209 0 0)",
          border: "1px solid oklch(0.2727 0 0)",
          borderRadius: 48,
          boxShadow: "0px 2px 4px oklch(0 0 0 / 0.25) inset",
        },
        children: [
          image({
            src: img,
            style: {
              width: percentage(100),
              height: percentage(60),
              flex: 1,
              objectFit: img === "portrait.png" ? "contain" : "cover",
              borderRadius: 24,
            },
          }),
          container({
            style: {
              width: percentage(100),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
            },
            children: [
              text("Felix Bahr", {
                fontSize: 48,
                fontFamily: "Geist Mono",
                color: 0xffffff,
                textTransform: "uppercase",
                textAlign: "center",
              }),
              text(title, {
                fontSize: 72,
                fontWeight: 600,
                fontFamily: "Geist Mono",
                color: 0xffffff,
                textTransform: "uppercase",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export function getStaticPaths() {
  return staticRoutes.concat(dynamicRoutes);
}
