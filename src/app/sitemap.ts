import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sciencenight.it';

const getEditionSlugs = async () => {
    return ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2024", "2025"];
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const editionSlugs = await getEditionSlugs();

    const editionEntries: MetadataRoute.Sitemap = editionSlugs.map((slug) => ({
        url: `${BASE_URL}/story/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    const staticEntries: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/story`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        }
    ];

    return [...staticEntries, ...editionEntries];
}