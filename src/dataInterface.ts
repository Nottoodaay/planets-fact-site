interface Content {
    content: string;
    source: string;
}

export interface PlanetInterface {
    name: string;
    overview: Content;
    structure: Content;
    geology: Content;
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
        planet: string;
        internal: string;
        geology: string;
    };
    color: string
}