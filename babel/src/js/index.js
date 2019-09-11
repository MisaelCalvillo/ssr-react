import './../css/index.css'
import search from './search';
import render from './render';

const id = prompt('Dame el id del pokemon');

search(id)
  .then((data) => {
    render(data);
  })
  .catch(() => {
    console.log('no hay pokemon');
  })