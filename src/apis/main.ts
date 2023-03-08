import { client } from './instance';

export const getProduct = client.get('/products').then(({ data }) => data);
