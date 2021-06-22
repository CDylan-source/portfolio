var value = 20;
if(window.matchMedia("(min-width : 768px)").matches){
  value = 40;
}
else{
  value = 15;
}

$("#tsparticles")
  .particles()
  .init(
    {
 
  "particles": {
      "color":{
          "value": ['#ff0000', "#F9FC66", "#1AD2DE", "#2E18B6", "#A6D3EE", '#fff']
      },
    "links": {
      "color": {
        "value": '#fff'
      },
      "distance": 500,
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "direction": "top",
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": false,
      },
      "value": value
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 0.5
      },
      "animation": {
        "speed": 1,
        "minimumValue": 0.1
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 1,
        "max": 15
      },
      "animation": {
        "speed": 40,
        "minimumValue": 0.1
      },
    }
  }
}
    )