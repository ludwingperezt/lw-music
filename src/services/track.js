import lwMusicService from './lw-music';

const trackService = {};

trackService.search = function(q) {
  const type = 'track';

  return lwMusicService.get('/search', {
    params: { q: q, type:type }
  })
  .then(res => res.data)
  ;
}

trackService.getById = function(id) {
  return lwMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService;
