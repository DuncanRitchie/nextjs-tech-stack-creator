# Tech-stack creator with Next.js
[See it live.](https://duncan-tech-stacks.netlify.app/)

As part of learning Next.js, I followed this tutorial from Chris Bongers: https://daily-dev-tips.com/posts/how-i-created-a-stack-guessing-tool-using-nextjs/

It’s a simple website that invents a tech-stack that fits the letters of the input. For example, if you input “Duncan”, it suggests “Docker, Underscore, Node, CSS, APIs, Next”.

I deviated from the tutorial in three ways:
* I didn’t include any of the Tailwind styles or React icons.
* My list of technologies is different.
* The tutorial only allows one technology per letter and discards repeated letters, so for “Duncan” you actually get “Dunca”. I have multiple technologies for each letter, so repeated letters can get different technologies in my version.
