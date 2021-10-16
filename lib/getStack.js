const technologies = {
    a: [
        "APIs",
        "Angular",
        "Android",
        "Astro",
        "Apache",
        "Amazon Web Services",
        "Ada",
        "Algol",
    ],
    b: [
        "Bash",
        "Babel",
        "Bootstrap",
        "Bitbucket",
        "Bulma",
        "Backbone",
    ],
    c: [
        "CSS",
        "Create React App",
        "Cassandra",
        "CoffeeScript",
        "CockroachDB",
        "Cloudflare",
        "C#",
        "Clojure",
    ],
    d: [
        "Docker",
        "Dart",
        "Django",
        "Datadog",
        "Drupal",
        "Debian",
        "Digital Ocean",
    ],
    e: [
        "Express",
        "Eclipse",
        "EcmaScript",
        "Ember",
        "Elm",
        "Elmish",
        "Excel",
    ],
    f: [
        "F#",
        "Fable",
        "Firebase",
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
        "Gulp",
    ],
    h: [
        "HTML",
        "Heroku",
        "Hotwire",
        "Handlebars",
        "Haskell",
        "Haml",
    ],
    i: [
        "Internet Explorer",
        "Ionic",
        "IntelliJ",
        "IBM",
        "Internet of Things",
    ],
    j: [
        "JavaScript",
        "Json",
        "Jekyll",
        "Jquery",
        "Jenkins",
        "Java",
        "Jest",
        "Julia",
    ],
    k: [
        "Kraken",
        "Kafka",
        "Kubernetes",
        "Kotlin",
        "Keyhole Markup Language"
    ],
    l: [
        "Laravel",
        "Less",
        "Linq",
        "Linux",
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
        "Modernizr",
        "Material UI",
        "Microsoft Sql",
        "Moustache",
        "Meteor",
    ],
    n: [
        "Node",
        "Next",
        "Nest",
        "Nuxt",
        "Nunjucks",
        "NginX",
        "Netbeans",
    ],
    o: [
        "OpenAPI",
        "Openshift",
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
        "Kubernetes",
        "Quicktime",
        "Q",
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
        "Stack Overflow",
        "Svelte",
        "Swift",
        "Strapi",
        "Socket.io",
        "Sass",
        "Scala",
        "Saturn",
        "Styled Components",
        "Snowpack",
        "Shopify",
        "Scalable Vector Graphics",
        "Soap",
        "Sqlite",
    ],
    t: [
        "TypeScript",
        "Terminal",
        "Tailwind",
        "TeX",
        "Twilio",
    ],
    u: [
        "UIKit",
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
        "Nginx",
    ],
    y: [
        "Yaml",
        "Yeoman",
        "Yahoo!",
    ],
    z: [
        "Zend",
        "Zebra",
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
