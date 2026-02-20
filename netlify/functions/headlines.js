// Netlify serverless function — proxies GNews API to avoid CORS
// Browser → this function (same origin) → GNews API (server-side, no CORS)

exports.handler = async (event) => {
    const { category = 'general', lang = 'en', max = '5' } = event.queryStringParameters || {};
    const apiKey = process.env.GNEWS_API_KEY;

    if (!apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'API key not configured on server' }),
        };
    }

    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&max=${max}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
            },
            body: JSON.stringify(data),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch from GNews API' }),
        };
    }
};
