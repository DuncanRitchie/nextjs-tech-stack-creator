const technologies = {
    a: [
        "Angular",
    ],
    b: [
        "Bootstrap"
    ],
    c: [
        "CSS"
    ],
    d: [
        "Datadog"
    ],
    e: [
        "Express"
    ],
    f: [
        "F#"
    ],
    g: [
        "GraphQL"
    ],
    h: [
        "HTML"
    ],
    i: [
        "I"
    ],
    j: [
        "JavaScript"
    ],
    k: [
        "Kafka"
    ],
    l: [
        "Liferay"
    ],
    m: [
        "MongoDB"
    ],
    n: [
        "Next"
    ],
    o: [
        "O"
    ],
    p: [
        "Postgres"
    ],
    q: [
        "Q"
    ],
    r: [
        "React"
    ],
    s: [
        "Strapi"
    ],
    t: [
        "Tailwind"
    ],
    u: [
        "Underscore"
    ],
    v: [
        "Vue"
    ],
    w: [
        "Wordpress"
    ],
    x: [
        "XML"
    ],
    y: [
        "Yaml"
    ],
    z: [
        "Z"
    ],
}

export default async function getStack(name) {
    const sanitisedName = name.toLowerCase().replace(/[^a-z]/g, '')

    return [...sanitisedName].map(letter => {
        return technologies[letter][0]
    })
}
