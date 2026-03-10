// Vercel serverless function — proxies GNews API to avoid CORS
// Browser → this function (same origin) → GNews API (server-side, no CORS)

export default async function handler(req, res) {
    const { category = 'general', q = '', lang = 'en', max = '5' } = req.query;
    const apiKey = process.env.GNEWS_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured on server' });
    }

    let url;
    if (q) {
        url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=${lang}&max=${max}&apikey=${apiKey}`;
    } else {
        url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&max=${max}&apikey=${apiKey}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'public, max-age=3600');
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch from GNews API' });
    }
}
