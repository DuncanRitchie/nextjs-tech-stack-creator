const technologies = {
    a: [
        "APIs",
        "Angular",
        "Astro",
        "Apache",
        "Amazon Web Services",
        "Ada",
        "Algol",
    ],
    b: [
        "Bash",
        "Bootstrap",
        "Bulma",
        "Babel",
        "Backbone",
    ],
    c: [
        "CSS",
        "Create React App",
        "Cassandra",
        "CockroachDB",
        "Cloudflare",
        "C#",
        "Clojure",
    ],
    d: [
        "Docker",
        "Dart",
        "Datadog",
        "Drupal",
    ],
    e: [
        "Express",
        "Eclipse",
        "EcmaScript",
        "Elm",
        "Elmish",
        "Excel",
    ],
    f: [
        "F#",
        "Fable",
        "Fulma",
        "FaunaDB",
        "Flink",
        "FLutter",
        "Figma",
    ],
    g: [
        "Giraffe",
        "GraphQL",
        "GSAP",
        "Go",
        "Groovy",
        "GraphML",
    ],
    h: [
        "HTML",
        "Hotwire",
        "Handlebars",
        "Haskell",
        "Haml",
    ],
    i: [
        "IBM",
        "Internet of Things",
    ],
    j: [
        "JavaScript",
        "Json",
        "Jquery",
        "Java",
        "Jest",
        "Julia",
    ],
    k: [
        "Kafka",
        "Kubernetes",
        "Kotlin",
        "Keyhole Markup Language"
    ],
    l: [
        "Laravel",
        "Less",
        "Linq",
        "Liferay",
        "Lodash",
        "LaTex",
        "Lua",
    ],
    m: [
        "MongoDB",
        "Mongoose",
        "MySql",
        "Markdown",
        "Material UI",
        "Microsoft Sql",
        "Moustache",
    ],
    n: [
        "Node",
        "Next",
        "Nest",
        "Nuxt",
        "Nunjucks",
        "NginX"
    ],
    o: [
        "OpenAPI",
        "OCaml",
        "Open Office XML",
        "Objective-C",
    ],
    p: [
        "Python",
        "Postgres",
        "Prettier",
        "Perl",
        "PHP",
        "Pug",
        "Pascal",
        "PowerShell",
    ],
    q: [
        "Quicktime",
        "Q",
        "Kubernetes",
    ],
    r: [
        "React",
        "Ruby",
        "Ruby on Rails",
        "Rust",
        "Rest",
        "Reactive Extensions",
        "RSS",
        "R",
    ],
    s: [
        "Svelte",
        "Swift",
        "Strapi",
        "Socket.io",
        "Sass",
        "Saturn",
        "Styled Components",
        "Snowpack",
        "Shopify",
        "Scalable Vector Graphics",
        "Soap",
    ],
    t: [
        "TypeScript",
        "Tailwind",
        "TeX",
        "Twilio",
    ],
    u: [
        "Underscore",
        "Ubuntu",
        "Unity",
    ],
    v: [
        "Vue",
        "Visual Studio",
        "Vim",
        "Vite",
        "Visual Basic",
    ],
    w: [
        "Wordpress",
        "Webpack",
        "WebAssembly",
        "Web Components",
        "Wix",
    ],
    x: [
        "XML",
        "xUnit",
        "XSLT",
        "Express",
        "Excel",
    ],
    y: [
        "Yaml",
        "Yahoo!",
    ],
    z: [
        "Zebra"
    ],
}

//// Eg "Duncan" -> ["Docker", "Underscore", "Node", "CSS", "APIs", "Next"]
export default async function getStack(name) {
    const sanitisedName = name.toLowerCase().replace(/[^a-z]/g, '')
    const arrayOfLetters = [...sanitisedName]

    //// Build up an array of technologies dependent on the array of letters.
    return arrayOfLetters.reduce((accumulated, letter) => {
        //// For each letter, look for a suitable technology.
        const newTechnology = technologies[letter].find(technology => {
            return !accumulated.includes(technology)
        })
        //// If a technology was found, add it.
        return newTechnology
            ? [...accumulated, newTechnology]
            : accumulated
    }, [])
}
