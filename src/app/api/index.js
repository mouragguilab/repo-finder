import repositories from './modules/repositories';

export default {
  fetch (path, payload) {
    const [module, method] = path.split('/');
    return this[module][method](payload);
  },
  repositories
};