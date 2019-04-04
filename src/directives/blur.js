const blur = {}

function setBlur(el, binding) {
  // el: es un elemento HTML del dom normal, por lo tanto es manipulable
  // mediante los métodos disponibles en vanilla js.  En este caso se puede
  // acceder a la propiedad style para agregar o modificar código CSS.

  // Si el valor que viene dentro de la directiva es falsy se debe aplicar
  // el blur
  el.style.filter = !binding.value ? 'blur(3px)':'none'
  // También se cambia el cursor
  el.style.cursor = !binding.value ? 'not-allowed':'inherit'

  // querySelectorAll es una función de javascript que selecciona elementos
  // dentro del DOM, o dentro de los elementos hijos del elemento, en este caso
  // todos los links hijos.
  el.querySelectorAll('button').forEach(a => {
    if (!binding.value) {
      a.setAttribute('disabled', true)
    }
    else {
      a.removeAttibute('disabled')
    }
  })

}

blur.install = function(Vue) {
  Vue.directive('blur', {
    bind(el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
