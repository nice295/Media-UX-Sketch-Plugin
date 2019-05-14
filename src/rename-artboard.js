import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  var document = sketch.getSelectedDocument()
  var selectedLayers = document.selectedLayers
  var selectedCount = selectedLayers.length

  if (selectedCount === 0) {
    console.log('No layers are selected.')
  } else {
    console.log('Selected layers:');
    selectedLayers.forEach(function (layer, i) {
      console.log((i + 1) + '. ' + layer.name)
      // layer.name = layer.name.toLowerCase()
      // layer.name = layer.name.replace(/ \/\ /g, "/")
      layer.name = layer.name.replace(/ /g, "_")
      // layer.name = layer.name.trim()
    })
    sketch.UI.message(`👍🏼 ${selectedCount} layers' name changed`)
  }
}
