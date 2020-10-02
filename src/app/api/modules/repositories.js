import axios from '../config';

export default {
  getRepository (payload) {
    const { owner, repo } = payload;

    return axios.get(`/repos/${owner}/${repo}`);
  },
  getRepositoryLangs (payload) {
    const { owner, repo } = payload;

    return axios.get(`/repos/${owner}/${repo}/languages`);
  },
  getRepositories (payload) {
    const langs = ['python', 'javascript', 'java', 'r', 'php', 'dart']
      .map((lang) => `language:${lang}`)
      .join('+')
  
    return axios.get(`/search/repositories?q=${langs}`)
  }
}
