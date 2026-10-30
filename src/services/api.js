const API = 'http://localhost:3000';
async function request(path, options = {}) {
  const response = await fetch(`${API}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  if (response.status === 204) return null;
  return response.json();
}
const makeResource = (name) => ({
  getAll: () => request(`/${name}`),
  getById: (id) => request(`/${name}/${id}`),
  create: (item) => request(`/${name}`, { method: 'POST', body: JSON.stringify(item) }),
  update: (id, item) => request(`/${name}/${id}`, { method: 'PUT', body: JSON.stringify(item) }),
  remove: (id) => request(`/${name}/${id}`, { method: 'DELETE' })
});
export const booksApi = makeResource('books');
export const membersApi = makeResource('members');
export const transactionsApi = makeResource('transactions');
