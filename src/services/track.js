import lwMusicService from './lwMusicService';

const trackService = {};

trackService.search = function(q) {
  const type = 'track';

  return lwMusicService.get('/search', {
    params: { q: q, type:type }
  })
  .then(res => res.data)
  ;
}

export default trackService;
