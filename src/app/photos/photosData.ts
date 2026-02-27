export interface PhotoEdition {
    slug: string;
    year: string;
    title: string;
    cover: string;
    photoNumber: number;
   // photos: string[];
}

export const PREFIX = "/gallery";

export const PHOTO_EDITIONS: PhotoEdition[] = [
    {
        slug: "2009",
        year: "2009",
        title: "Festascienze 2009",
        cover: PREFIX + "/thumbs/2009.webp",
        photoNumber: 27
    },
    {
        slug: "2010",
        year: "2010",
        title: "Festascienze 2010",
        cover: PREFIX + "/thumbs/2010.webp",
        photoNumber: 136
    },
    {
        slug: "2011",
        year: "2011",
        title: "Festascienze 2011",
        cover: PREFIX + "/thumbs/2011.webp",
        photoNumber: 461
    },
    {
        slug: "2012",
        year: "2012",
        title: "Festascienze 2012",
        cover: PREFIX + "/thumbs/2012.webp",
        photoNumber: 439
    },
    {
        slug: "2013",
        year: "2013",
        title: "Festascienze 2013",
        cover: PREFIX + "/thumbs/2013.webp",
        photoNumber: 682
    },
    {
        slug: "2014",
        year: "2014",
        title: "Festascienze 2014",
        cover: PREFIX + "/thumbs/2014.webp",
        photoNumber: 690
    },
    {
        slug: "2015",
        year: "2015",
        title: "Festascienze 2015",
        cover: PREFIX + "/thumbs/2015.webp",
        photoNumber: 1048
    },
    {
        slug: "2016",
        year: "2016",
        title: "Festascienze 2016",
        cover: PREFIX + "/thumbs/2016.webp",
        photoNumber: 717
    },
    {
        slug: "2017",
        year: "2017",
        title: "Festascienze 2017",
        cover: PREFIX + "/thumbs/2017.webp",
        photoNumber: 737
    },
    {
        slug: "2018",
        year: "2018",
        title: "Festascienze 2018",
        cover: PREFIX + "/thumbs/2018.webp",
        photoNumber: 1869
    },
    {
        slug: "2024",
        year: "2024",
        title: "Science Night 2024",
        cover: PREFIX + "/thumbs/2024.webp",
        photoNumber: 1002
    },
    {
        slug: "2025",
        year: "2025",
        title: "Science Night 2025",
        cover: PREFIX + "/thumbs/2025.webp",
        photoNumber: 835
    },
];
