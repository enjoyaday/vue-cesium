import cmp from './virtualCmp'
import mergeDescriptors from '../util/mergeDescriptors'

const props = {}
const computed = {}
const methods = {
  mount () {
    const { viewer, primitive } = this
    primitive.readyPromise
      .then(primitive => {
        const listener = this.$listeners['readyPromise']
        listener && this.$emit('readyPromise', primitive)
      })
      .otherwise(error => {
        throw new Cesium.DeveloperError(error)
      })
    viewer && viewer.scene.primitives.add(primitive)
  },
  unload () {
    const { viewer, primitive } = this
    viewer && viewer.scene.primitives.remove(primitive)
  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get primitive () {
        return vm.primitive
      },
      get geometryInstancesContainer () {
        return vm
      }
    })
  }
}
const watch = {}

export default {
  mixins: [cmp],
  props,
  computed,
  watch,
  methods,
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    Object.defineProperties(this, {
      primitive: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
