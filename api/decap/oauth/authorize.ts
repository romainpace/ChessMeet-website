import type { VercelRequest, VercelResponse } from '@vercel/node';

function getOrigin(req: VercelRequest): string {
  const proto = (req.headers['x-forwarded-proto'] as string) || 'https';
  const host = (req.headers['x-forwarded-host'] as string) || (req.headers.host as string);
  return `${proto}://${host}`;
}

function randomState(length = 24) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let out = '';
  for (let i = 0; i < length; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return res.status(500).json({ error: 'Missing GITHUB_CLIENT_ID' });
  }

  const origin = getOrigin(req);
  const redirectUri = `${origin}/api/decap/oauth/callback`;
  const state = randomState();
  res.setHeader('Set-Cookie', `decap_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo user:email',
    state
  });

  const url = `https://github.com/login/oauth/authorize?${params.toString()}`;
  res.status(302).setHeader('Location', url).end();
}


