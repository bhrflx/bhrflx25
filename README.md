# Felix Bahr - Personal Portfolio 2025

Welcome to the personal portfolio website of [Felix Bahr](https://felixbahr.com/)!
This document will explain the thought process that behind the creation of this website and the technologies it uses.

## Motivation
**My goals for my personal website were relatively simple:**

- It should be as performant as possible.
- It should not overcomplicate things.
- It should display relevant data in an easily navigatable and digestable manner.
- It should be cheap to operate and easy to maintain.

**From this I derived the following decisions:**

- The site will be static. Not an SPA, no SSR, just good old HTML, CSS and JS files. Nothing is faster than this.
- No external libraries will be used unless absolutely necessary. Keep the footprint as small as possible.
- No CMS for now: Content will be structured using Markdown.

**I therefore opted for the following tech stack:**

- 🚀 **[Astro](https://astro.build/):** This is the main framework behind my website. It's very flexible and can be used in a variety of ways. I, however, only use it as a SSG, because of its built-in Markdown support and stellar image and font optimisations.
- 🗒️ **[MDX](https://mdxjs.com/):** It allows me to go beyond simple Markdown formatting and implement my own Astro components. That way, I am more flexible to configure different layouts, such as grids, inside Markdown files.
- ⛩️ **[Takumi](https://takumi.kane.tw/):** A Rust-based alternative to [Satori](https://github.com/vercel/satori), a well known library for programmatic image generation. Takumi is a lot faster and can output pixel-based formats as well, while Satori only outputs svgs. I use it for build-time-generation of OG-Images.

And that's it! The rest is just good ol' HTML, CSS and a sprinkle of JS, where necessary. The site is hosted on a small, low-cost Linux VPS from [Hetzner](https://www.hetzner.com/de/cloud), which I manage using [Coolify](https://coolify.io/).

> [!NOTE]
> This repository is entirely free of AI. While I recognise the value of AI for specific applications, I have decided to use it very sparingly for
> programming. After using Cursor for several months, not only did I notice a stark decline in the enjoyment I usually derived from programming, but I also
> found that I was learning less. Beyond autocomplete, it did not noticeably affect the speed at which I finished projects. I therefore decided to revert to
> AI-free coding for this project. Lo and behold, the fun returned and I learned a lot.
> Watch [this](https://www.youtube.com/watch?v=0ZUkQF6boNg) video from Coding Garden for more thoughts on AI-coding that resonated with me.
