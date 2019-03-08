import trae from 'trae'
import configService from './config'

const lwMusicService = trae.create({
  baseUrl: configService.apiUrl
});

export default lwMusicService;
