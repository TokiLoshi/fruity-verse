const vertexShader = /* glsl */ `
void main() {
  gl_Position = projectionMatrix * modelviewMatrix * vec4(position, 1.0);
}`
const fragmentShader = /* glsl */ `
uniform vec2 resolution;
void main() {
  vec2 screenPos = gl_FragCoord.xy / resolution.xy * 2.0 - 1.0;
  float dist = length(screenPos);

  vec3 color = vec3(0.0, 0.0, 0.0);

  vec3 purple = vec3(0.5, 0.0, 0.5);
  float edgeWidth = 0.5;
  float alpha = smoothstep(1.0 - edgeWidth, 1.0, dist);
  gl_FragColor = vec4(mix(color, purple, alpha), 1.0);
}`

export { vertexShader, fragmentShader }
