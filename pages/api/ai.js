export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { input } = req.body;
  
      try {
        const response = await fetch('https://api.example.com/ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
          },
          body: JSON.stringify({ input })
        });
  
        const data = await response.json();
        return data;

        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }

  