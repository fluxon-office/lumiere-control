const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080').replace(/\/+$/, '');

function buildApiUrl(path) {
  if (!path.startsWith('/')) {
    return `${API_BASE_URL}/${path}`;
  }

  return `${API_BASE_URL}${path}`;
}

async function readJsonResponse(response) {
  const contentType = response.headers.get('content-type') || '';

  if (!contentType.includes('application/json')) {
    return null;
  }

  return response.json();
}

export { API_BASE_URL, buildApiUrl, readJsonResponse };
