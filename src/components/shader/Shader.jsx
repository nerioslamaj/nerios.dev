import React, { Component } from 'react';
import canvasSketch from 'canvas-sketch';
import createShader from 'canvas-sketch-util/shader';
import glsl from 'glslify';
import './Shader.css';

class Shader extends Component {

  componentDidMount() {
    // Setup our sketch
    const settings = {
      context: 'webgl',
      animate: true,
      dimensions: [512, 512],
      scaleToFit: true
    };
    
    // Your glsl code
    const frag = glsl(`
      precision highp float;
    
      #pragma glslify: noise = require('glsl-noise/simplex/3d)
      #pragma glslify: hsl2rgb = require('glsl-hsl2rgb)
      
      uniform float time;
      uniform float aspect;
      varying vec2 vUv;
    
      // Create a second layer of noise over the first one for sharper edges
    
      void main () {
        vec2 pos = vUv - 0.5;
        pos.x *= aspect;
    
        float d = length(pos);
        d = d > 0.501 ? 0.0 : 1.0;
    
        // vec3 color = vec3(vUv.x * 1.0, sin(vUv.y + time) * 0.5 + 0.5, 1.0);
    
        float f = 0.4;
        float f2 = 0.1;
        float n = noise(vec3(pos.x * f, pos.y * f2, time * 0.02));
        float n2 = noise(vec3(pos.x * 0.5 + 2.5, pos.y * f2, time * 0.22));
    
        float hue = mod(time * 0.15, 1.0);
        vec3 color = hsl2rgb(n * 0.7 * n2 + 0.76, 1.0, 0.5);
        gl_FragColor = vec4(vec3(color), 1);
      }
    `);
    
    // Your sketch, which simply returns the shader
    const sketch = ({ gl }) => {
      // Create the shader and return it
      return createShader({
        clearColor: 'rgba(255,255,255,0)',
        // Pass along WebGL context
        gl,
        // Specify fragment and/or vertex shader strings
        frag,
        // Specify additional uniforms to pass down to the shaders
        uniforms: {
          // Expose props from canvas-sketch
          time: ({ time }) => time,
          aspect: ({ width, height }) => (width / height)
        }
      });
    };
    
    canvasSketch(sketch, settings);
  }



  render() {
    return (
      <div></div>
    );
  }
}

export default Shader;
