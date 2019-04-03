const msToMm = {}

function convertMsToMm(ms) {
  const min = Math.floor(ms / 60000)
  const seconds = ((ms % 60000 / 1000).toFixed(0))

  return `${min}:${seconds}`
}

msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    //la función SIEMPRE debe devolver un valor.
    return convertMsToMm(val)
  })
}

export default msToMm
