import axios from 'axios'

class MusicDataService {
    retrieveAllMusic(name) {
        return axios.get(`http://localhost:8080/users/${name}/music`);
         //console.log('executed service')
     }
}

export default new MusicDataService