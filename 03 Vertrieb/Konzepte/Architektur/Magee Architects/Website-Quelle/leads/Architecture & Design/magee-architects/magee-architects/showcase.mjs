// Segmented photographs bent along a circular gallery.
export function bendPoint(x,y,angle,radius=15){
 const theta=angle+x/radius;
 return [Math.sin(theta)*radius,y,Math.cos(theta)*radius];
}
export async function mountShowcase(stage,signal){
 const THREE=await import('../../../natura-assets/vendor/three.module.js');
 if(signal.aborted)return;
 const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
 renderer.domElement.className='curved-gallery';renderer.domElement.setAttribute('aria-hidden','true');
 const scene=new THREE.Scene(),group=new THREE.Group();scene.add(group);
 const camera=new THREE.PerspectiveCamera(48,1,.1,100);camera.position.set(0,0,22);camera.setFocalLength(22.56276459333814);
 const photos=[...stage.querySelectorAll('.orbit-card img')].slice(0,3),textures=[],geometries=[],materials=[];
 let disposed=false;
 const draw=()=>{if(!signal.aborted&&!disposed)renderer.render(scene,camera);};
 const loader=new THREE.TextureLoader();
 for(let i=0;i<photos.length;i++){
  const geometry=new THREE.PlaneGeometry(5,480/720*.85*5,40,1),pos=geometry.attributes.position;
  for(let j=0;j<pos.count;j++)pos.setXYZ(j,...bendPoint(pos.getX(j),pos.getY(j),-.065*Math.PI*4+i*.065*Math.PI*2));
  geometry.computeVertexNormals();geometries.push(geometry);
  const texture=loader.load(photos[i].src,()=>{
   if(signal.aborted||disposed){texture.dispose();return;}
   const aspect=texture.image.width/texture.image.height,target=720/(480*.85);
   texture.repeat.set(Math.min(1,target/aspect),Math.min(1,aspect/target));
   texture.offset.set((1-texture.repeat.x)/2,(1-texture.repeat.y)/2);draw();
  });
  texture.colorSpace=THREE.SRGBColorSpace;textures.push(texture);
  const material=new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide});materials.push(material);
  group.add(new THREE.Mesh(geometry,material));
 }
 const overlays=[];
 for(let i=1;i<3;i++){
  const geometry=new THREE.PlaneGeometry(5,480/720*.85*5);geometries.push(geometry);
  const material=new THREE.ShaderMaterial({transparent:true,uniforms:{map:{value:textures[i]},progress:{value:0}},vertexShader:'varying vec2 uvOut;void main(){uvOut=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'uniform sampler2D map;uniform float progress;varying vec2 uvOut;void main(){if(uvOut.y>progress)discard;gl_FragColor=texture2D(map,uvOut);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}'});materials.push(material);
  const mesh=new THREE.Mesh(geometry,material);mesh.position.z=15.02+i*.01;mesh.visible=false;scene.add(mesh);overlays.push(mesh);
 }
 const caption=document.createElement('p');caption.className='gallery-caption';
 const progress=document.createElementNS('http://www.w3.org/2000/svg','svg');progress.classList.add('gallery-progress');progress.setAttribute('viewBox','0 0 48 48');progress.setAttribute('aria-hidden','true');progress.innerHTML='<circle cx="24" cy="24" r="20"/><circle cx="24" cy="24" r="20"/>';
 stage.append(renderer.domElement,caption,progress);stage.classList.add('webgl-ready');
 const resize=()=>{renderer.setSize(stage.clientWidth,stage.clientHeight);camera.aspect=stage.clientWidth/stage.clientHeight;camera.updateProjectionMatrix();draw();};
 const observer=new ResizeObserver(resize);observer.observe(stage);
 const state={progress:0};
 const update=()=>{
  stage.style.setProperty('--gallery-progress',state.progress);
  const p=state.progress*3,turn=Math.min(1,p),zoom=Math.max(0,Math.min(1,p-1));
  const easeInOut=t=>t<.5?2*t*t:1-(-2*t+2)**2/2;
  group.rotation.y=.065*Math.PI*4*(1-(1-turn)**2);
  const z=easeInOut(zoom*zoom),y=easeInOut(zoom);
  camera.position.z=22+(57.4-22)*z;camera.position.y=.9*y;camera.setFocalLength(22.56276459333814+(300-22.56276459333814)*z);
  camera.setViewOffset(stage.clientWidth,stage.clientHeight,0,(1-y)*stage.clientHeight*-.15,stage.clientWidth,stage.clientHeight);
  const phase=Math.max(0,p-2);
  overlays.forEach((mesh,i)=>{mesh.visible=phase>0;mesh.material.uniforms.progress.value=Math.max(0,Math.min(1,phase*2-i));});
  caption.textContent=photos[Math.min(2,Math.floor(phase*2))].alt;draw();
 };
 const tween=gsap.to(state,{progress:1,ease:'none',onUpdate:update,scrollTrigger:{trigger:stage,start:'top top',end:'+=400%',pin:true,scrub:.8,invalidateOnRefresh:true}});
 const move=e=>gsap.to(group.rotation,{x:(e.clientY/innerHeight-.5)*.04,duration:.6,onUpdate:draw,overwrite:'auto'});
 stage.addEventListener('pointermove',move,{signal});
 const cleanup=()=>{
  if(disposed)return;disposed=true;
  tween.scrollTrigger.kill();tween.kill();gsap.killTweensOf(group.rotation);observer.disconnect();stage.removeEventListener('pointermove',move);
  stage.classList.remove('webgl-ready');renderer.domElement.remove();caption.remove();progress.remove();
  textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());geometries.forEach(g=>g.dispose());renderer.dispose();
 };
 signal.addEventListener('abort',cleanup,{once:true});
 renderer.domElement.addEventListener('webglcontextlost',cleanup,{once:true,signal});
 resize();update();ScrollTrigger.refresh();
}

