import React, { Component } from 'react';
import canvasSketch from 'canvas-sketch';
import createShader from 'canvas-sketch-util/shader';
import glsl from 'glslify';

class Shader1 extends Component {

  componentDidMount() {

    // var winWidth = window.innerWidth;
    // var winHeight = window.innerHeight;

    // Setup our sketch
    const settings = {
      context: 'webgl',
      animate: true,
      dimensions: [800, 800],
      scaleToFit: false,
      id: 'shader1'
    };
    
    // Your glsl code
    const frag = glsl(`
      precision highp float;

      float hue2rgb(float f1, float f2, float hue) {
        if (hue < 0.0)
            hue += 1.0;
        else if (hue > 1.0)
            hue -= 1.0;
        float res;
        if ((6.0 * hue) < 1.0)
            res = f1 + (f2 - f1) * 6.0 * hue;
        else if ((2.0 * hue) < 1.0)
            res = f2;
        else if ((3.0 * hue) < 2.0)
            res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
        else
            res = f1;
        return res;
      }
      
      vec3 hsl2rgb(vec3 hsl) {
          vec3 rgb;
          
          if (hsl.y == 0.0) {
              rgb = vec3(hsl.z); // Luminance
          } else {
              float f2;
              
              if (hsl.z < 0.5)
                  f2 = hsl.z * (1.0 + hsl.y);
              else
                  f2 = hsl.z + hsl.y - hsl.y * hsl.z;
                  
              float f1 = 2.0 * hsl.z - f2;
              
              rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));
              rgb.g = hue2rgb(f1, f2, hsl.x);
              rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));
          }   
          return rgb;
      }
      
      vec3 hsl2rgb(float h, float s, float l) {
          return hsl2rgb(vec3(h, s, l));
      }


      vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
      
      vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
      
      vec4 permute(vec4 x) {
           return mod289(((x*34.0)+1.0)*x);
      }
      
      vec4 taylorInvSqrt(vec4 r)
      {
        return 1.79284291400159 - 0.85373472095314 * r;
      }
      
      float snoise(vec3 v)
        {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      
      // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;
      
      // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
      
        //   x0 = x0 - 0.0 + 0.0 * C.xxx;
        //   x1 = x0 - i1  + 1.0 * C.xxx;
        //   x2 = x0 - i2  + 2.0 * C.xxx;
        //   x3 = x0 - 1.0 + 3.0 * C.xxx;
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
      
      // Permutations
        i = mod289(i);
        vec4 p = permute( permute( permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      
      // Gradients: 7x7 points over a square, mapped onto an octahedron.
      // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;
      
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
      
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
      
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
      
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
      
        //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
        //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
      
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
      
      //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
      
      // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
        }
      
    
      
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
    



        float n = snoise(vec3(pos.x * 0.9, pos.y * 1.4, time * 0.2));
        float n2 = snoise(vec3(pos.x * 0.3 - 2.5, pos.y * 0.7 - 5.0, time * 0.1));
    
        float col = 0.5 * n2 + 0.5;
        // col = n2 * n * 0.6 + 0.75;
        col = col > 0.5 ? 0.18 * n2 + 1.0 : 0.23 * n2 + 0.667;

        float hue = mod(time * 0.15, 1.0);
        // vec3 color = hsl2rgb(1.0, 0.0, col);
        vec3 color = hsl2rgb(col, 1.0, 0.55);
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

export default Shader1;
