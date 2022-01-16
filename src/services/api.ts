import axios from 'axios';
import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com/v1/public/characters?ts='

const publicKey = 'dbcd6e9fdb562ea095f0bfe29e5b6f01'

const privateKey = '44c39dca1e53bd012c3f15742b4e358bda27728e'

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: time,
    apikey: publicKey,
    hash: hash,
  }
})

export default api;