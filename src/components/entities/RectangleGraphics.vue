<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'rectangle-graphics',
  mixins: [entityGraphics],
  props: {
    coordinates: Object,
    height: Number,
    heightReference: Number,
    extrudedHeight: Number,
    extrudedHeightReference: Number,
    show: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: true
    },
    material: [Object, String],
    outline: {
      type: Boolean,
      default: false
    },
    outlineColor: Object,
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    rotation: {
      type: [Number, Object],
      default: 0.0
    },
    stRotation: {
      type: [Number, Object],
      default: 0.0
    },
    granularity: {
      type: Number,
      default: Math.PI / 180.0
    },
    shadows: Number,
    distanceDisplayCondition: Number,
    classificationType: Number,
    zIndex: Number
  },
  watch: {
    coordinates (val) {
      this.graphics.coordinates = val instanceof Cesium.Rectangle ? val : Cesium.Rectangle.fromDegrees(val.west, val.south, val.east, val.north)
    },
    height (val) {
      this.graphics.height = val
    },
    heightReference (val) {
      this.graphics.heightReference = val
    },
    extrudedHeight (val) {
      this.graphics.extrudedHeight = val
    },
    extrudedHeightReference (val) {
      this.graphics.extrudedHeightReference = val
    },
    show (val) {
      this.graphics.show = val
    },
    fill (val) {
      this.graphics.fill = val
    },
    material (val) {
      this.graphics.material = val
    },
    outline (val) {
      this.graphics.outline = val
    },
    outlineColor (val) {
      this.graphics.outlineColor = val
    },
    outlineWidth (val) {
      this.graphics.outlineWidth = val
    },
    rotation (val) {
      this.graphics.rotation = val
    },
    stRotation (val) {
      this.graphics.stRotation = val
    },
    granularity (val) {
      this.graphics.granularity = val
    },
    shadows (val) {
      this.graphics.shadows = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    },
    classificationType (val) {
      this.graphics.classificationType = val
    },
    zIndex (val) {
      this.graphics.zIndex = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, coordinates, height, heightReference, extrudedHeight, extrudedHeightReference, show, fill, material, outline, outlineColor,
        outlineWidth, rotation, stRotation, granularity, shadows, distanceDisplayCondition, classificationType, zIndex } = this
      let options = {
        coordinates: coordinates instanceof Cesium.Rectangle || this.isEmptyObj(coordinates) ? coordinates : Cesium.Rectangle.fromDegrees(coordinates.west, coordinates.south, coordinates.east, coordinates.north),
        height,
        heightReference,
        extrudedHeight,
        extrudedHeightReference,
        show,
        fill,
        material,
        outline,
        outlineColor,
        outlineWidth,
        rotation,
        stRotation,
        granularity,
        shadows,
        distanceDisplayCondition,
        classificationType,
        zIndex
      }
      this.removeNullItem(options)
      return new Cesium.RectangleGraphics(options)
    }
  }
}
</script>
