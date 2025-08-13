import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const code = (req.query.code as string) || '';
  const state = (req.query.state as string) || '';
  const cookieState = (req.headers.cookie || '').split(';').map(s => s.trim()).find(s => s.startsWith('decap_oauth_state='))?.split('=')[1];
  if (!state || !cookieState || state !== cookieState) {
    return res.status(400).json({ error: 'Invalid OAuth state' });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'Missing GitHub OAuth env' });
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
  });
  const tokenJson = await tokenRes.json();
  if (!tokenJson.access_token) {
    return res.status(400).json({ error: 'OAuth failed', detail: tokenJson });
  }

  // Decap expects the token JSON directly
  res.status(200).json({ token: tokenJson.access_token });
}


