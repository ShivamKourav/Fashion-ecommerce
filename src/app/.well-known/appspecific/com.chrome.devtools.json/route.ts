import { NextResponse } from 'next/server';

export async function GET() {
  // Chrome DevTools configuration
  const devToolsConfig = {
    "devtools_url": "chrome-devtools://devtools/bundled/devtools_app.html?ws=localhost:3000/_next/static/chunks/webpack.js",
    "type": "node",
    "title": "Next.js E-commerce App",
    "description": "Chrome DevTools configuration for Next.js development",
    "webSocketDebuggerUrl": "ws://localhost:3000/_next/webpack-hmr"
  };

  return NextResponse.json(devToolsConfig, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
