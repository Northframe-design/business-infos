/*
 * Vault Orrery — bundled by esbuild. Do not edit main.js directly.
 * Engine source: vault-orrery-v2.html  ->  scripts/build-engine.mjs
 */

var Rm=Object.defineProperty;var pE=Object.getOwnPropertyDescriptor;var mE=Object.getOwnPropertyNames;var gE=Object.prototype.hasOwnProperty;var Ly=(s,e)=>{for(var t in e)Rm(s,t,{get:e[t],enumerable:!0})},vE=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of mE(e))!gE.call(s,i)&&i!==t&&Rm(s,i,{get:()=>e[i],enumerable:!(n=pE(e,i))||n.enumerable});return s};var yE=s=>vE(Rm({},"__esModule",{value:!0}),s);var vL={};Ly(vL,{default:()=>sp});module.exports=yE(vL);var fr=require("obsidian");var dr=require("obsidian");var xg={};Ly(xg,{ACESFilmicToneMapping:()=>ww,AddEquation:()=>co,AddOperation:()=>gw,AdditiveAnimationBlendMode:()=>lg,AdditiveBlending:()=>Ut,AlphaFormat:()=>Rw,AlwaysDepth:()=>cw,AlwaysStencilFunc:()=>_b,AmbientLight:()=>Do,AmbientLightProbe:()=>Hf,AnimationClip:()=>So,AnimationLoader:()=>D0,AnimationMixer:()=>Gf,AnimationObjectGroup:()=>Uf,AnimationUtils:()=>gn,ArcCurve:()=>eu,ArrayCamera:()=>Rh,ArrowHelper:()=>eg,Audio:()=>uu,AudioAnalyser:()=>Of,AudioContext:()=>pg,AudioListener:()=>B0,AudioLoader:()=>Ff,AxesHelper:()=>Kf,AxisHelper:()=>eL,BackSide:()=>xn,BasicDepthPacking:()=>xb,BasicShadowMap:()=>_E,BinaryTextureLoader:()=>sL,Bone:()=>Yl,BooleanKeyframeTrack:()=>Gs,BoundingBoxHelper:()=>tL,Box2:()=>Ra,Box3:()=>mi,Box3Helper:()=>$0,BoxBufferGeometry:()=>xa,BoxGeometry:()=>xa,BoxHelper:()=>Jf,BufferAttribute:()=>Ze,BufferGeometry:()=>it,BufferGeometryLoader:()=>Df,ByteType:()=>_w,Cache:()=>To,Camera:()=>Fs,CameraHelper:()=>K0,CanvasRenderer:()=>oL,CanvasTexture:()=>hr,CatmullRomCurve3:()=>tu,CineonToneMapping:()=>xw,CircleBufferGeometry:()=>wo,CircleGeometry:()=>wo,ClampToEdgeWrapping:()=>Mi,Clock:()=>Bf,Color:()=>Ce,ColorKeyframeTrack:()=>$h,CompressedTexture:()=>Ch,CompressedTextureLoader:()=>I0,ConeBufferGeometry:()=>Ph,ConeGeometry:()=>Ph,CubeCamera:()=>Gl,CubeReflectionMapping:()=>pu,CubeRefractionMapping:()=>mu,CubeTexture:()=>wa,CubeTextureLoader:()=>Mf,CubeUVReflectionMapping:()=>ic,CubeUVRefractionMapping:()=>gu,CubicBezierCurve:()=>$l,CubicBezierCurve3:()=>nu,CubicInterpolant:()=>wf,CullFaceBack:()=>h0,CullFaceFront:()=>Jx,CullFaceFrontBack:()=>bE,CullFaceNone:()=>Zx,Curve:()=>Ai,CurvePath:()=>Af,CustomBlending:()=>$f,CustomToneMapping:()=>bw,CylinderBufferGeometry:()=>bo,CylinderGeometry:()=>bo,Cylindrical:()=>q0,DataTexture:()=>ba,DataTexture2DArray:()=>Th,DataTexture3D:()=>Ah,DataTextureLoader:()=>Ef,DataUtils:()=>tg,DecrementStencilOp:()=>IE,DecrementWrapStencilOp:()=>FE,DefaultLoadingManager:()=>Gb,DepthFormat:()=>po,DepthStencilFormat:()=>Hl,DepthTexture:()=>xf,DirectionalLight:()=>Aa,DirectionalLightHelper:()=>J0,DiscreteInterpolant:()=>bf,DodecahedronBufferGeometry:()=>Dh,DodecahedronGeometry:()=>Dh,DoubleSide:()=>ri,DstAlphaFactor:()=>iw,DstColorFactor:()=>sw,DynamicBufferAttribute:()=>WR,DynamicCopyUsage:()=>ZE,DynamicDrawUsage:()=>Fi,DynamicReadUsage:()=>XE,EdgesGeometry:()=>Ih,EdgesHelper:()=>nL,EllipseCurve:()=>Ao,EqualDepth:()=>uw,EqualStencilFunc:()=>OE,EquirectangularReflectionMapping:()=>nf,EquirectangularRefractionMapping:()=>rf,Euler:()=>Ir,EventDispatcher:()=>Jr,ExtrudeBufferGeometry:()=>Qr,ExtrudeGeometry:()=>Qr,FaceColors:()=>IR,FileLoader:()=>ur,FlatShading:()=>sg,Float16BufferAttribute:()=>ff,Float32Attribute:()=>$R,Float32BufferAttribute:()=>rt,Float64Attribute:()=>QR,Float64BufferAttribute:()=>pf,FloatType:()=>Ds,Fog:()=>Lh,FogExp2:()=>yo,Font:()=>hu,FontLoader:()=>N0,FrontSide:()=>tc,Frustum:()=>Ns,GLBufferAttribute:()=>qf,GLSL1:()=>KE,GLSL3:()=>S0,GammaEncoding:()=>tp,GreaterDepth:()=>fw,GreaterEqualDepth:()=>dw,GreaterEqualStencilFunc:()=>VE,GreaterStencilFunc:()=>UE,GridHelper:()=>Zf,Group:()=>On,HalfFloatType:()=>vo,HemisphereLight:()=>ru,HemisphereLightHelper:()=>j0,HemisphereLightProbe:()=>Nf,IcosahedronBufferGeometry:()=>vi,IcosahedronGeometry:()=>vi,ImageBitmapLoader:()=>If,ImageLoader:()=>Kl,ImageUtils:()=>ks,ImmediateRenderObject:()=>Yf,IncrementStencilOp:()=>DE,IncrementWrapStencilOp:()=>kE,InstancedBufferAttribute:()=>wn,InstancedBufferGeometry:()=>ko,InstancedInterleavedBuffer:()=>Wf,InstancedMesh:()=>cr,Int16Attribute:()=>jR,Int16BufferAttribute:()=>uf,Int32Attribute:()=>JR,Int32BufferAttribute:()=>df,Int8Attribute:()=>qR,Int8BufferAttribute:()=>lf,IntType:()=>Ew,InterleavedBuffer:()=>Bs,InterleavedBufferAttribute:()=>_a,Interpolant:()=>kr,InterpolateDiscrete:()=>bh,InterpolateLinear:()=>_h,InterpolateSmooth:()=>Qd,InvertStencilOp:()=>NE,JSONLoader:()=>lL,KeepStencilOp:()=>ef,KeyframeTrack:()=>Zi,LOD:()=>gf,LatheBufferGeometry:()=>Hh,LatheGeometry:()=>Hh,Layers:()=>Sh,LensFlare:()=>hL,LessDepth:()=>hw,LessEqualDepth:()=>tf,LessEqualStencilFunc:()=>zE,LessStencilFunc:()=>BE,Light:()=>Ji,LightProbe:()=>Io,Line:()=>Ti,Line3:()=>Xf,LineBasicMaterial:()=>hn,LineCurve:()=>Ro,LineCurve3:()=>Tf,LineDashedMaterial:()=>Jh,LineLoop:()=>xo,LinePieces:()=>PR,LineSegments:()=>Zn,LineStrip:()=>CR,LinearEncoding:()=>Ei,LinearFilter:()=>qt,LinearInterpolant:()=>Kh,LinearMipMapLinearFilter:()=>AE,LinearMipMapNearestFilter:()=>TE,LinearMipmapLinearFilter:()=>La,LinearMipmapNearestFilter:()=>og,LinearToneMapping:()=>vw,Loader:()=>ii,LoaderUtils:()=>cu,LoadingManager:()=>Qh,LogLuvEncoding:()=>yb,LoopOnce:()=>pb,LoopPingPong:()=>gb,LoopRepeat:()=>mb,LuminanceAlphaFormat:()=>Cw,LuminanceFormat:()=>Lw,MOUSE:()=>xE,Material:()=>Vn,MaterialLoader:()=>Pf,Math:()=>uS,MathUtils:()=>uS,Matrix3:()=>Bn,Matrix4:()=>st,MaxEquation:()=>p0,Mesh:()=>wt,MeshBasicMaterial:()=>Pn,MeshDepthMaterial:()=>Wl,MeshDistanceMaterial:()=>ql,MeshFaceMaterial:()=>FR,MeshLambertMaterial:()=>jh,MeshMatcapMaterial:()=>Zh,MeshNormalMaterial:()=>Yh,MeshPhongMaterial:()=>Sa,MeshPhysicalMaterial:()=>qh,MeshStandardMaterial:()=>Jl,MeshToonMaterial:()=>Xh,MinEquation:()=>f0,MirroredRepeatWrapping:()=>yh,MixOperation:()=>mw,MultiMaterial:()=>NR,MultiplyBlending:()=>d0,MultiplyOperation:()=>fu,NearestFilter:()=>Ln,NearestMipMapLinearFilter:()=>SE,NearestMipMapNearestFilter:()=>EE,NearestMipmapLinearFilter:()=>af,NearestMipmapNearestFilter:()=>sf,NeverDepth:()=>lw,NeverStencilFunc:()=>HE,NoBlending:()=>Is,NoColors:()=>DR,NoToneMapping:()=>fo,NormalAnimationBlendMode:()=>ep,NormalBlending:()=>kl,NotEqualDepth:()=>pw,NotEqualStencilFunc:()=>GE,NumberKeyframeTrack:()=>Mo,Object3D:()=>Ft,ObjectLoader:()=>F0,ObjectSpaceNormalMap:()=>bb,OctahedronBufferGeometry:()=>jl,OctahedronGeometry:()=>jl,OneFactor:()=>du,OneMinusDstAlphaFactor:()=>rw,OneMinusDstColorFactor:()=>aw,OneMinusSrcAlphaFactor:()=>nc,OneMinusSrcColorFactor:()=>nw,OrthographicCamera:()=>Po,PCFShadowMap:()=>rg,PCFSoftShadowMap:()=>Kx,PMREMGenerator:()=>ng,ParametricBufferGeometry:()=>Bh,ParametricGeometry:()=>Bh,Particle:()=>BR,ParticleBasicMaterial:()=>UR,ParticleSystem:()=>OR,ParticleSystemMaterial:()=>GR,Path:()=>Lo,PerspectiveCamera:()=>Rn,Plane:()=>Yi,PlaneBufferGeometry:()=>$r,PlaneGeometry:()=>$r,PlaneHelper:()=>Q0,PointCloud:()=>HR,PointCloudMaterial:()=>zR,PointLight:()=>Co,PointLightHelper:()=>Y0,Points:()=>Ni,PointsMaterial:()=>Os,PolarGridHelper:()=>Z0,PolyhedronBufferGeometry:()=>zs,PolyhedronGeometry:()=>zs,PositionalAudio:()=>O0,PropertyBinding:()=>tn,PropertyMixer:()=>zf,QuadraticBezierCurve:()=>Ql,QuadraticBezierCurve3:()=>iu,Quaternion:()=>pn,QuaternionKeyframeTrack:()=>Ta,QuaternionLinearInterpolant:()=>_f,REVISION:()=>ig,RGBADepthPacking:()=>wb,RGBAFormat:()=>oi,RGBAIntegerFormat:()=>Hw,RGBA_ASTC_10x10_Format:()=>Jw,RGBA_ASTC_10x5_Format:()=>Yw,RGBA_ASTC_10x6_Format:()=>jw,RGBA_ASTC_10x8_Format:()=>Zw,RGBA_ASTC_12x10_Format:()=>Kw,RGBA_ASTC_12x12_Format:()=>$w,RGBA_ASTC_4x4_Format:()=>Ow,RGBA_ASTC_5x4_Format:()=>zw,RGBA_ASTC_5x5_Format:()=>Uw,RGBA_ASTC_6x5_Format:()=>Gw,RGBA_ASTC_6x6_Format:()=>Vw,RGBA_ASTC_8x5_Format:()=>Ww,RGBA_ASTC_8x6_Format:()=>qw,RGBA_ASTC_8x8_Format:()=>Xw,RGBA_BPTC_Format:()=>Qw,RGBA_ETC2_EAC_Format:()=>E0,RGBA_PVRTC_2BPPV1_Format:()=>_0,RGBA_PVRTC_4BPPV1_Format:()=>b0,RGBA_S3TC_DXT1_Format:()=>g0,RGBA_S3TC_DXT3_Format:()=>v0,RGBA_S3TC_DXT5_Format:()=>y0,RGBDEncoding:()=>ug,RGBEEncoding:()=>np,RGBEFormat:()=>Pw,RGBFormat:()=>ga,RGBIntegerFormat:()=>Nw,RGBM16Encoding:()=>hg,RGBM7Encoding:()=>cg,RGB_ETC1_Format:()=>Bw,RGB_ETC2_Format:()=>M0,RGB_PVRTC_2BPPV1_Format:()=>w0,RGB_PVRTC_4BPPV1_Format:()=>x0,RGB_S3TC_DXT1_Format:()=>m0,RGFormat:()=>kw,RGIntegerFormat:()=>Fw,RawShaderMaterial:()=>Ea,Ray:()=>Kr,Raycaster:()=>G0,RectAreaLight:()=>ou,RedFormat:()=>Dw,RedIntegerFormat:()=>Iw,ReinhardToneMapping:()=>yw,RepeatWrapping:()=>go,ReplaceStencilOp:()=>PE,ReverseSubtractEquation:()=>Qx,RingBufferGeometry:()=>Hi,RingGeometry:()=>Hi,SRGB8_ALPHA8_ASTC_10x10_Format:()=>ub,SRGB8_ALPHA8_ASTC_10x5_Format:()=>lb,SRGB8_ALPHA8_ASTC_10x6_Format:()=>cb,SRGB8_ALPHA8_ASTC_10x8_Format:()=>hb,SRGB8_ALPHA8_ASTC_12x10_Format:()=>db,SRGB8_ALPHA8_ASTC_12x12_Format:()=>fb,SRGB8_ALPHA8_ASTC_4x4_Format:()=>eb,SRGB8_ALPHA8_ASTC_5x4_Format:()=>tb,SRGB8_ALPHA8_ASTC_5x5_Format:()=>nb,SRGB8_ALPHA8_ASTC_6x5_Format:()=>ib,SRGB8_ALPHA8_ASTC_6x6_Format:()=>rb,SRGB8_ALPHA8_ASTC_8x5_Format:()=>sb,SRGB8_ALPHA8_ASTC_8x6_Format:()=>ab,SRGB8_ALPHA8_ASTC_8x8_Format:()=>ob,Scene:()=>Hs,SceneUtils:()=>cL,ShaderChunk:()=>It,ShaderLib:()=>Dr,ShaderMaterial:()=>mn,ShadowMaterial:()=>Wh,Shape:()=>Zr,ShapeBufferGeometry:()=>Zl,ShapeGeometry:()=>Zl,ShapePath:()=>kf,ShapeUtils:()=>jr,ShortType:()=>Mw,Skeleton:()=>vf,SkeletonHelper:()=>jf,SkinnedMesh:()=>Xl,SmoothShading:()=>ME,Sphere:()=>ar,SphereBufferGeometry:()=>Us,SphereGeometry:()=>Us,Spherical:()=>W0,SphericalHarmonics3:()=>lu,SplineCurve:()=>ec,SpotLight:()=>au,SpotLightHelper:()=>X0,Sprite:()=>lr,SpriteMaterial:()=>or,SrcAlphaFactor:()=>ag,SrcAlphaSaturateFactor:()=>ow,SrcColorFactor:()=>tw,StaticCopyUsage:()=>jE,StaticDrawUsage:()=>Bl,StaticReadUsage:()=>qE,StereoCamera:()=>H0,StreamCopyUsage:()=>JE,StreamDrawUsage:()=>WE,StreamReadUsage:()=>YE,StringKeyframeTrack:()=>Vs,SubtractEquation:()=>$x,SubtractiveBlending:()=>u0,TOUCH:()=>wE,TangentSpaceNormalMap:()=>Fo,TetrahedronBufferGeometry:()=>_o,TetrahedronGeometry:()=>_o,TextBufferGeometry:()=>Oh,TextGeometry:()=>Oh,Texture:()=>ni,TextureLoader:()=>Sf,TorusBufferGeometry:()=>zh,TorusGeometry:()=>zh,TorusKnotBufferGeometry:()=>Uh,TorusKnotGeometry:()=>Uh,Triangle:()=>li,TriangleFanDrawMode:()=>LE,TriangleStripDrawMode:()=>RE,TrianglesDrawMode:()=>vb,TubeBufferGeometry:()=>Gh,TubeGeometry:()=>Gh,UVMapping:()=>Qf,Uint16Attribute:()=>ZR,Uint16BufferAttribute:()=>Ol,Uint32Attribute:()=>KR,Uint32BufferAttribute:()=>zl,Uint8Attribute:()=>XR,Uint8BufferAttribute:()=>cf,Uint8ClampedAttribute:()=>YR,Uint8ClampedBufferAttribute:()=>hf,Uniform:()=>Vf,UniformsLib:()=>je,UniformsUtils:()=>Ab,UnsignedByteType:()=>Ca,UnsignedInt248Type:()=>Fl,UnsignedIntType:()=>fh,UnsignedShort4444Type:()=>Sw,UnsignedShort5551Type:()=>Tw,UnsignedShort565Type:()=>Aw,UnsignedShortType:()=>wh,VSMShadowMap:()=>Dl,Vector2:()=>_e,Vector3:()=>L,Vector4:()=>Lt,VectorKeyframeTrack:()=>Eo,Vertex:()=>VR,VertexColors:()=>kR,VideoTexture:()=>yf,WebGL1Renderer:()=>mf,WebGLCubeRenderTarget:()=>Vl,WebGLMultisampleRenderTarget:()=>of,WebGLRenderTarget:()=>Cn,WebGLRenderTargetCube:()=>aL,WebGLRenderer:()=>Jt,WebGLUtils:()=>Hb,WireframeGeometry:()=>Vh,WireframeHelper:()=>iL,WrapAroundEnding:()=>Mh,XHRLoader:()=>rL,ZeroCurvatureEnding:()=>ho,ZeroFactor:()=>ew,ZeroSlopeEnding:()=>uo,ZeroStencilOp:()=>CE,sRGBEncoding:()=>Pa});var ig="128",xE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wE={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zx=0,h0=1,Jx=2,bE=3,_E=0,rg=1,Kx=2,Dl=3,tc=0,xn=1,ri=2,sg=1,ME=2,Is=0,kl=1,Ut=2,u0=3,d0=4,$f=5,co=100,$x=101,Qx=102,f0=103,p0=104,ew=200,du=201,tw=202,nw=203,ag=204,nc=205,iw=206,rw=207,sw=208,aw=209,ow=210,lw=0,cw=1,hw=2,tf=3,uw=4,dw=5,fw=6,pw=7,fu=0,mw=1,gw=2,fo=0,vw=1,yw=2,xw=3,ww=4,bw=5,Qf=300,pu=301,mu=302,nf=303,rf=304,ic=306,gu=307,go=1e3,Mi=1001,yh=1002,Ln=1003,sf=1004,EE=1004,af=1005,SE=1005,qt=1006,og=1007,TE=1007,La=1008,AE=1008,Ca=1009,_w=1010,Mw=1011,wh=1012,Ew=1013,fh=1014,Ds=1015,vo=1016,Sw=1017,Tw=1018,Aw=1019,Fl=1020,Rw=1021,ga=1022,oi=1023,Lw=1024,Cw=1025,Pw=oi,po=1026,Hl=1027,Dw=1028,Iw=1029,kw=1030,Fw=1031,Nw=1032,Hw=1033,m0=33776,g0=33777,v0=33778,y0=33779,x0=35840,w0=35841,b0=35842,_0=35843,Bw=36196,M0=37492,E0=37496,Ow=37808,zw=37809,Uw=37810,Gw=37811,Vw=37812,Ww=37813,qw=37814,Xw=37815,Yw=37816,jw=37817,Zw=37818,Jw=37819,Kw=37820,$w=37821,Qw=36492,eb=37840,tb=37841,nb=37842,ib=37843,rb=37844,sb=37845,ab=37846,ob=37847,lb=37848,cb=37849,hb=37850,ub=37851,db=37852,fb=37853,pb=2200,mb=2201,gb=2202,bh=2300,_h=2301,Qd=2302,ho=2400,uo=2401,Mh=2402,ep=2500,lg=2501,vb=0,RE=1,LE=2,Ei=3e3,Pa=3001,tp=3007,np=3002,yb=3003,cg=3004,hg=3005,ug=3006,xb=3200,wb=3201,Fo=0,bb=1,CE=0,ef=7680,PE=7681,DE=7682,IE=7683,kE=34055,FE=34056,NE=5386,HE=512,BE=513,OE=514,zE=515,UE=516,GE=517,VE=518,_b=519,Bl=35044,Fi=35048,WE=35040,qE=35045,XE=35049,YE=35041,jE=35046,ZE=35050,JE=35042,KE="100",S0="300 es",Jr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},si=[];for(let s=0;s<256;s++)si[s]=(s<16?"0":"")+s.toString(16);var dd=1234567,mo=Math.PI/180,Eh=180/Math.PI;function ji(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(si[s&255]+si[s>>8&255]+si[s>>16&255]+si[s>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[t&63|128]+si[t>>8&255]+"-"+si[t>>16&255]+si[t>>24&255]+si[n&255]+si[n>>8&255]+si[n>>16&255]+si[n>>24&255]).toUpperCase()}function ai(s,e,t){return Math.max(e,Math.min(t,s))}function dg(s,e){return(s%e+e)%e}function $E(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function QE(s,e,t){return s!==e?(t-s)/(e-s):0}function ph(s,e,t){return(1-t)*s+t*e}function eS(s,e,t,n){return ph(s,e,1-Math.exp(-t*n))}function tS(s,e=1){return e-Math.abs(dg(s,e*2)-e)}function nS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function iS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function rS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sS(s,e){return s+Math.random()*(e-s)}function aS(s){return s*(.5-Math.random())}function oS(s){return s!==void 0&&(dd=s%2147483647),dd=dd*16807%2147483647,(dd-1)/2147483646}function lS(s){return s*mo}function cS(s){return s*Eh}function T0(s){return(s&s-1)===0&&s!==0}function Mb(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Eb(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hS(s,e,t,n,i){let r=Math.cos,a=Math.sin,l=r(t/2),h=a(t/2),c=r((e+n)/2),m=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),g=r((n-e)/2),y=a((n-e)/2);switch(i){case"XYX":s.set(l*m,h*d,h*f,l*c);break;case"YZY":s.set(h*f,l*m,h*d,l*c);break;case"ZXZ":s.set(h*d,h*f,l*m,l*c);break;case"XZX":s.set(l*m,h*y,h*g,l*c);break;case"YXY":s.set(h*g,l*m,h*y,l*c);break;case"ZYZ":s.set(h*y,h*g,l*m,l*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var uS=Object.freeze({__proto__:null,DEG2RAD:mo,RAD2DEG:Eh,generateUUID:ji,clamp:ai,euclideanModulo:dg,mapLinear:$E,inverseLerp:QE,lerp:ph,damp:eS,pingpong:tS,smoothstep:nS,smootherstep:iS,randInt:rS,randFloat:sS,randFloatSpread:aS,seededRandom:oS,degToRad:lS,radToDeg:cS,isPowerOfTwo:T0,ceilPowerOfTwo:Mb,floorPowerOfTwo:Eb,setQuaternionFromProperEuler:hS}),_e=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};_e.prototype.isVector2=!0;var Bn=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,l,h,c){let m=this.elements;return m[0]=e,m[1]=i,m[2]=l,m[3]=t,m[4]=r,m[5]=h,m[6]=n,m[7]=a,m[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],l=n[3],h=n[6],c=n[1],m=n[4],d=n[7],f=n[2],g=n[5],y=n[8],M=i[0],S=i[3],_=i[6],x=i[1],A=i[4],N=i[7],O=i[2],C=i[5],q=i[8];return r[0]=a*M+l*x+h*O,r[3]=a*S+l*A+h*C,r[6]=a*_+l*N+h*q,r[1]=c*M+m*x+d*O,r[4]=c*S+m*A+d*C,r[7]=c*_+m*N+d*q,r[2]=f*M+g*x+y*O,r[5]=f*S+g*A+y*C,r[8]=f*_+g*N+y*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],h=e[6],c=e[7],m=e[8];return t*a*m-t*l*c-n*r*m+n*l*h+i*r*c-i*a*h}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],h=e[6],c=e[7],m=e[8],d=m*a-l*c,f=l*h-m*r,g=c*r-a*h,y=t*d+n*f+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/y;return e[0]=d*M,e[1]=(i*c-m*n)*M,e[2]=(l*n-i*a)*M,e[3]=f*M,e[4]=(m*t-i*h)*M,e[5]=(i*r-l*t)*M,e[6]=g*M,e[7]=(n*h-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,l){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*a+c*l)+a+e,-i*c,i*h,-i*(-c*a+h*l)+l+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],l=i[6],h=i[1],c=i[4],m=i[7];return i[0]=t*r+n*h,i[3]=t*a+n*c,i[6]=t*l+n*m,i[1]=-n*r+t*h,i[4]=-n*a+t*c,i[7]=-n*l+t*m,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bn.prototype.isMatrix3=!0;var fl,ks=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fl===void 0&&(fl=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),fl.width=e.width,fl.height=e.height;let n=fl.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fl}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},dS=0,ni=class s extends Jr{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Mi,i=Mi,r=qt,a=La,l=oi,h=Ca,c=1,m=Ei){super(),Object.defineProperty(this,"id",{value:dS++}),this.uuid=ji(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=h,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=ji()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let a=0,l=i.length;a<l;a++)i[a].isDataTexture?r.push(Lm(i[a].image)):r.push(Lm(i[a]))}else r=Lm(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};ni.DEFAULT_IMAGE=void 0;ni.DEFAULT_MAPPING=Qf;ni.prototype.isTexture=!0;function Lm(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ks.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lt=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,h=e.elements,c=h[0],m=h[4],d=h[8],f=h[1],g=h[5],y=h[9],M=h[2],S=h[6],_=h[10];if(Math.abs(m-f)<.01&&Math.abs(d-M)<.01&&Math.abs(y-S)<.01){if(Math.abs(m+f)<.1&&Math.abs(d+M)<.1&&Math.abs(y+S)<.1&&Math.abs(c+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,N=(g+1)/2,O=(_+1)/2,C=(m+f)/4,q=(d+M)/4,X=(y+S)/4;return A>N&&A>O?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=C/n,r=q/n):N>O?N<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(N),n=C/i,r=X/i):O<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(O),n=q/r,i=X/r),this.set(n,i,r,t),this}let x=Math.sqrt((S-y)*(S-y)+(d-M)*(d-M)+(f-m)*(f-m));return Math.abs(x)<.001&&(x=1),this.x=(S-y)/x,this.y=(d-M)/x,this.z=(f-m)/x,this.w=Math.acos((c+g+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Lt.prototype.isVector4=!0;var Cn=class extends Jr{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),n=n||{},this.texture=new ni(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.prototype.isWebGLRenderTarget=!0;var of=class extends Cn{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};of.prototype.isWebGLMultisampleRenderTarget=!0;var pn=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,l){let h=n[i+0],c=n[i+1],m=n[i+2],d=n[i+3],f=r[a+0],g=r[a+1],y=r[a+2],M=r[a+3];if(l===0){e[t+0]=h,e[t+1]=c,e[t+2]=m,e[t+3]=d;return}if(l===1){e[t+0]=f,e[t+1]=g,e[t+2]=y,e[t+3]=M;return}if(d!==M||h!==f||c!==g||m!==y){let S=1-l,_=h*f+c*g+m*y+d*M,x=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){let O=Math.sqrt(A),C=Math.atan2(O,_*x);S=Math.sin(S*C)/O,l=Math.sin(l*C)/O}let N=l*x;if(h=h*S+f*N,c=c*S+g*N,m=m*S+y*N,d=d*S+M*N,S===1-l){let O=1/Math.sqrt(h*h+c*c+m*m+d*d);h*=O,c*=O,m*=O,d*=O}}e[t]=h,e[t+1]=c,e[t+2]=m,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let l=n[i],h=n[i+1],c=n[i+2],m=n[i+3],d=r[a],f=r[a+1],g=r[a+2],y=r[a+3];return e[t]=l*y+m*d+h*g-c*f,e[t+1]=h*y+m*f+c*d-l*g,e[t+2]=c*y+m*g+l*f-h*d,e[t+3]=m*y-l*d-h*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,r=e._z,a=e._order,l=Math.cos,h=Math.sin,c=l(n/2),m=l(i/2),d=l(r/2),f=h(n/2),g=h(i/2),y=h(r/2);switch(a){case"XYZ":this._x=f*m*d+c*g*y,this._y=c*g*d-f*m*y,this._z=c*m*y+f*g*d,this._w=c*m*d-f*g*y;break;case"YXZ":this._x=f*m*d+c*g*y,this._y=c*g*d-f*m*y,this._z=c*m*y-f*g*d,this._w=c*m*d+f*g*y;break;case"ZXY":this._x=f*m*d-c*g*y,this._y=c*g*d+f*m*y,this._z=c*m*y+f*g*d,this._w=c*m*d-f*g*y;break;case"ZYX":this._x=f*m*d-c*g*y,this._y=c*g*d+f*m*y,this._z=c*m*y-f*g*d,this._w=c*m*d+f*g*y;break;case"YZX":this._x=f*m*d+c*g*y,this._y=c*g*d+f*m*y,this._z=c*m*y-f*g*d,this._w=c*m*d-f*g*y;break;case"XZY":this._x=f*m*d-c*g*y,this._y=c*g*d-f*m*y,this._z=c*m*y+f*g*d,this._w=c*m*d+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],l=t[5],h=t[9],c=t[2],m=t[6],d=t[10],f=n+l+d;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(m-h)*g,this._y=(r-c)*g,this._z=(a-i)*g}else if(n>l&&n>d){let g=2*Math.sqrt(1+n-l-d);this._w=(m-h)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(r+c)/g}else if(l>d){let g=2*Math.sqrt(1+l-n-d);this._w=(r-c)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(h+m)/g}else{let g=2*Math.sqrt(1+d-n-l);this._w=(a-i)/g,this._x=(r+c)/g,this._y=(h+m)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ai(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,l=t._x,h=t._y,c=t._z,m=t._w;return this._x=n*m+a*l+i*c-r*h,this._y=i*m+a*h+r*l-n*c,this._z=r*m+a*c+n*h-i*l,this._w=a*m-n*l-i*h-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,l=a*e._w+n*e._x+i*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let h=1-l*l;if(h<=Number.EPSILON){let g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(h),m=Math.atan2(c,l),d=Math.sin((1-t)*m)/c,f=Math.sin(t*m)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};pn.prototype.isQuaternion=!0;var L=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Cy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cy.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,l=e.z,h=e.w,c=h*t+a*i-l*n,m=h*n+l*t-r*i,d=h*i+r*n-a*t,f=-r*t-a*n-l*i;return this.x=c*h+f*-r+m*-l-d*-a,this.y=m*h+f*-a+d*-r-c*-l,this.z=d*h+f*-l+c*-a-m*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,l=t.y,h=t.z;return this.x=i*h-r*l,this.y=r*a-n*h,this.z=n*l-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cm.copy(this).projectOnVector(e),this.sub(Cm)}reflect(e){return this.sub(Cm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ai(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};L.prototype.isVector3=!0;var Cm=new L,Cy=new pn,mi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,l=-1/0;for(let h=0,c=e.length;h<c;h+=3){let m=e[h],d=e[h+1],f=e[h+2];m<t&&(t=m),d<n&&(n=d),f<i&&(i=f),m>r&&(r=m),d>a&&(a=d),f>l&&(l=f)}return this.min.set(t,n,i),this.max.set(r,a,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,l=-1/0;for(let h=0,c=e.count;h<c;h++){let m=e.getX(h),d=e.getY(h),f=e.getZ(h);m<t&&(t=m),d<n&&(n=d),f<i&&(i=f),m>r&&(r=m),d>a&&(a=d),f>l&&(l=f)}return this.min.set(t,n,i),this.max.set(r,a,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=eh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Pm.copy(t.boundingBox),Pm.applyMatrix4(e.matrixWorld),this.union(Pm));let n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new L),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,eh),eh.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(th),fd.subVectors(this.max,th),pl.subVectors(e.a,th),ml.subVectors(e.b,th),gl.subVectors(e.c,th),la.subVectors(ml,pl),ca.subVectors(gl,ml),to.subVectors(pl,gl);let t=[0,-la.z,la.y,0,-ca.z,ca.y,0,-to.z,to.y,la.z,0,-la.x,ca.z,0,-ca.x,to.z,0,-to.x,-la.y,la.x,0,-ca.y,ca.x,0,-to.y,to.x,0];return!Dm(t,pl,ml,gl,fd)||(t=[1,0,0,0,1,0,0,0,1],!Dm(t,pl,ml,gl,fd))?!1:(pd.crossVectors(la,ca),t=[pd.x,pd.y,pd.z],Dm(t,pl,ml,gl,fd))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new L),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return eh.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(eh).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(As[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),As[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),As[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),As[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),As[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),As[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),As[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),As[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(As),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};mi.prototype.isBox3=!0;var As=[new L,new L,new L,new L,new L,new L,new L,new L],eh=new L,Pm=new mi,pl=new L,ml=new L,gl=new L,la=new L,ca=new L,to=new L,th=new L,fd=new L,pd=new L,no=new L;function Dm(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){no.fromArray(s,r);let l=i.x*Math.abs(no.x)+i.y*Math.abs(no.y)+i.z*Math.abs(no.z),h=e.dot(no),c=t.dot(no),m=n.dot(no);if(Math.max(-Math.max(h,c,m),Math.min(h,c,m))>l)return!1}return!0}var fS=new mi,Py=new L,Im=new L,km=new L,ar=class{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fS.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new L),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new mi),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){km.subVectors(e,this.center);let t=km.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(km.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Im.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Py.copy(e.center).add(Im)),this.expandByPoint(Py.copy(e.center).sub(Im)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rs=new L,Fm=new L,md=new L,ha=new L,Nm=new L,gd=new L,Hm=new L,Kr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new L),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rs)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new L),t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rs.copy(this.direction).multiplyScalar(t).add(this.origin),Rs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fm.copy(e).add(t).multiplyScalar(.5),md.copy(t).sub(e).normalize(),ha.copy(this.origin).sub(Fm);let r=e.distanceTo(t)*.5,a=-this.direction.dot(md),l=ha.dot(this.direction),h=-ha.dot(md),c=ha.lengthSq(),m=Math.abs(1-a*a),d,f,g,y;if(m>0)if(d=a*h-l,f=a*l-h,y=r*m,d>=0)if(f>=-y)if(f<=y){let M=1/m;d*=M,f*=M,g=d*(d+a*f+2*l)+f*(a*d+f+2*h)+c}else f=r,d=Math.max(0,-(a*f+l)),g=-d*d+f*(f+2*h)+c;else f=-r,d=Math.max(0,-(a*f+l)),g=-d*d+f*(f+2*h)+c;else f<=-y?(d=Math.max(0,-(-a*r+l)),f=d>0?-r:Math.min(Math.max(-r,-h),r),g=-d*d+f*(f+2*h)+c):f<=y?(d=0,f=Math.min(Math.max(-r,-h),r),g=f*(f+2*h)+c):(d=Math.max(0,-(a*r+l)),f=d>0?r:Math.min(Math.max(-r,-h),r),g=-d*d+f*(f+2*h)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+l)),g=-d*d+f*(f+2*h)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(md).multiplyScalar(f).add(Fm),g}intersectSphere(e,t){Rs.subVectors(e.center,this.origin);let n=Rs.dot(this.direction),i=Rs.dot(Rs)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),l=n-a,h=n+a;return l<0&&h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,l,h,c=1/this.direction.x,m=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),m>=0?(r=(e.min.y-f.y)*m,a=(e.max.y-f.y)*m):(r=(e.max.y-f.y)*m,a=(e.min.y-f.y)*m),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),d>=0?(l=(e.min.z-f.z)*d,h=(e.max.z-f.z)*d):(l=(e.max.z-f.z)*d,h=(e.min.z-f.z)*d),n>h||l>i)||((l>n||n!==n)&&(n=l),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rs)!==null}intersectTriangle(e,t,n,i,r){Nm.subVectors(t,e),gd.subVectors(n,e),Hm.crossVectors(Nm,gd);let a=this.direction.dot(Hm),l;if(a>0){if(i)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ha.subVectors(this.origin,e);let h=l*this.direction.dot(gd.crossVectors(ha,gd));if(h<0)return null;let c=l*this.direction.dot(Nm.cross(ha));if(c<0||h+c>a)return null;let m=-l*ha.dot(Hm);return m<0?null:this.at(m/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class s{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,l,h,c,m,d,f,g,y,M,S){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=l,_[13]=h,_[2]=c,_[6]=m,_[10]=d,_[14]=f,_[3]=g,_[7]=y,_[11]=M,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/vl.setFromMatrixColumn(e,0).length(),r=1/vl.setFromMatrixColumn(e,1).length(),a=1/vl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),h=Math.cos(i),c=Math.sin(i),m=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*m,g=a*d,y=l*m,M=l*d;t[0]=h*m,t[4]=-h*d,t[8]=c,t[1]=g+y*c,t[5]=f-M*c,t[9]=-l*h,t[2]=M-f*c,t[6]=y+g*c,t[10]=a*h}else if(e.order==="YXZ"){let f=h*m,g=h*d,y=c*m,M=c*d;t[0]=f+M*l,t[4]=y*l-g,t[8]=a*c,t[1]=a*d,t[5]=a*m,t[9]=-l,t[2]=g*l-y,t[6]=M+f*l,t[10]=a*h}else if(e.order==="ZXY"){let f=h*m,g=h*d,y=c*m,M=c*d;t[0]=f-M*l,t[4]=-a*d,t[8]=y+g*l,t[1]=g+y*l,t[5]=a*m,t[9]=M-f*l,t[2]=-a*c,t[6]=l,t[10]=a*h}else if(e.order==="ZYX"){let f=a*m,g=a*d,y=l*m,M=l*d;t[0]=h*m,t[4]=y*c-g,t[8]=f*c+M,t[1]=h*d,t[5]=M*c+f,t[9]=g*c-y,t[2]=-c,t[6]=l*h,t[10]=a*h}else if(e.order==="YZX"){let f=a*h,g=a*c,y=l*h,M=l*c;t[0]=h*m,t[4]=M-f*d,t[8]=y*d+g,t[1]=d,t[5]=a*m,t[9]=-l*m,t[2]=-c*m,t[6]=g*d+y,t[10]=f-M*d}else if(e.order==="XZY"){let f=a*h,g=a*c,y=l*h,M=l*c;t[0]=h*m,t[4]=-d,t[8]=c*m,t[1]=f*d+M,t[5]=a*m,t[9]=g*d-y,t[2]=y*d-g,t[6]=l*m,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pS,e,mS)}lookAt(e,t,n){let i=this.elements;return qi.subVectors(e,t),qi.lengthSq()===0&&(qi.z=1),qi.normalize(),ua.crossVectors(n,qi),ua.lengthSq()===0&&(Math.abs(n.z)===1?qi.x+=1e-4:qi.z+=1e-4,qi.normalize(),ua.crossVectors(n,qi)),ua.normalize(),vd.crossVectors(qi,ua),i[0]=ua.x,i[4]=vd.x,i[8]=qi.x,i[1]=ua.y,i[5]=vd.y,i[9]=qi.y,i[2]=ua.z,i[6]=vd.z,i[10]=qi.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],l=n[4],h=n[8],c=n[12],m=n[1],d=n[5],f=n[9],g=n[13],y=n[2],M=n[6],S=n[10],_=n[14],x=n[3],A=n[7],N=n[11],O=n[15],C=i[0],q=i[4],X=i[8],te=i[12],se=i[1],we=i[5],ce=i[9],Z=i[13],ne=i[2],ie=i[6],j=i[10],Le=i[14],Oe=i[3],ke=i[7],et=i[11],ze=i[15];return r[0]=a*C+l*se+h*ne+c*Oe,r[4]=a*q+l*we+h*ie+c*ke,r[8]=a*X+l*ce+h*j+c*et,r[12]=a*te+l*Z+h*Le+c*ze,r[1]=m*C+d*se+f*ne+g*Oe,r[5]=m*q+d*we+f*ie+g*ke,r[9]=m*X+d*ce+f*j+g*et,r[13]=m*te+d*Z+f*Le+g*ze,r[2]=y*C+M*se+S*ne+_*Oe,r[6]=y*q+M*we+S*ie+_*ke,r[10]=y*X+M*ce+S*j+_*et,r[14]=y*te+M*Z+S*Le+_*ze,r[3]=x*C+A*se+N*ne+O*Oe,r[7]=x*q+A*we+N*ie+O*ke,r[11]=x*X+A*ce+N*j+O*et,r[15]=x*te+A*Z+N*Le+O*ze,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],l=e[5],h=e[9],c=e[13],m=e[2],d=e[6],f=e[10],g=e[14],y=e[3],M=e[7],S=e[11],_=e[15];return y*(+r*h*d-i*c*d-r*l*f+n*c*f+i*l*g-n*h*g)+M*(+t*h*g-t*c*f+r*a*f-i*a*g+i*c*m-r*h*m)+S*(+t*c*d-t*l*g-r*a*d+n*a*g+r*l*m-n*c*m)+_*(-i*l*m-t*h*d+t*l*f+i*a*d-n*a*f+n*h*m)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],h=e[6],c=e[7],m=e[8],d=e[9],f=e[10],g=e[11],y=e[12],M=e[13],S=e[14],_=e[15],x=d*S*c-M*f*c+M*h*g-l*S*g-d*h*_+l*f*_,A=y*f*c-m*S*c-y*h*g+a*S*g+m*h*_-a*f*_,N=m*M*c-y*d*c+y*l*g-a*M*g-m*l*_+a*d*_,O=y*d*h-m*M*h-y*l*f+a*M*f+m*l*S-a*d*S,C=t*x+n*A+i*N+r*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/C;return e[0]=x*q,e[1]=(M*f*r-d*S*r-M*i*g+n*S*g+d*i*_-n*f*_)*q,e[2]=(l*S*r-M*h*r+M*i*c-n*S*c-l*i*_+n*h*_)*q,e[3]=(d*h*r-l*f*r-d*i*c+n*f*c+l*i*g-n*h*g)*q,e[4]=A*q,e[5]=(m*S*r-y*f*r+y*i*g-t*S*g-m*i*_+t*f*_)*q,e[6]=(y*h*r-a*S*r-y*i*c+t*S*c+a*i*_-t*h*_)*q,e[7]=(a*f*r-m*h*r+m*i*c-t*f*c-a*i*g+t*h*g)*q,e[8]=N*q,e[9]=(y*d*r-m*M*r-y*n*g+t*M*g+m*n*_-t*d*_)*q,e[10]=(a*M*r-y*l*r+y*n*c-t*M*c-a*n*_+t*l*_)*q,e[11]=(m*l*r-a*d*r-m*n*c+t*d*c+a*n*g-t*l*g)*q,e[12]=O*q,e[13]=(m*M*i-y*d*i+y*n*f-t*M*f-m*n*S+t*d*S)*q,e[14]=(y*l*i-a*M*i-y*n*h+t*M*h+a*n*S-t*l*S)*q,e[15]=(a*d*i-m*l*i+m*n*h-t*d*h-a*n*f+t*l*f)*q,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,l=e.y,h=e.z,c=r*a,m=r*l;return this.set(c*a+n,c*l-i*h,c*h+i*l,0,c*l+i*h,m*l+n,m*h-i*a,0,c*h-i*l,m*h+i*a,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,l=t._z,h=t._w,c=r+r,m=a+a,d=l+l,f=r*c,g=r*m,y=r*d,M=a*m,S=a*d,_=l*d,x=h*c,A=h*m,N=h*d,O=n.x,C=n.y,q=n.z;return i[0]=(1-(M+_))*O,i[1]=(g+N)*O,i[2]=(y-A)*O,i[3]=0,i[4]=(g-N)*C,i[5]=(1-(f+_))*C,i[6]=(S+x)*C,i[7]=0,i[8]=(y+A)*q,i[9]=(S-x)*q,i[10]=(1-(f+M))*q,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=vl.set(i[0],i[1],i[2]).length(),a=vl.set(i[4],i[5],i[6]).length(),l=vl.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Rr.copy(this);let c=1/r,m=1/a,d=1/l;return Rr.elements[0]*=c,Rr.elements[1]*=c,Rr.elements[2]*=c,Rr.elements[4]*=m,Rr.elements[5]*=m,Rr.elements[6]*=m,Rr.elements[8]*=d,Rr.elements[9]*=d,Rr.elements[10]*=d,t.setFromRotationMatrix(Rr),n.x=r,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let l=this.elements,h=2*r/(t-e),c=2*r/(n-i),m=(t+e)/(t-e),d=(n+i)/(n-i),f=-(a+r)/(a-r),g=-2*a*r/(a-r);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a){let l=this.elements,h=1/(t-e),c=1/(n-i),m=1/(a-r),d=(t+e)*h,f=(n+i)*c,g=(a+r)*m;return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=-2*m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};st.prototype.isMatrix4=!0;var vl=new L,Rr=new st,pS=new L(0,0,0),mS=new L(1,1,1),ua=new L,vd=new L,qi=new L,Dy=new st,Iy=new pn,Ir=class s{constructor(e=0,t=0,n=0,i=s.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){let i=e.elements,r=i[0],a=i[4],l=i[8],h=i[1],c=i[5],m=i[9],d=i[2],f=i[6],g=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(ai(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ai(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ai(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-ai(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ai(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ai(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-m,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dy,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Iy.setFromEuler(this),this.setFromQuaternion(Iy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Ir.prototype.isEuler=!0;Ir.DefaultOrder="XYZ";Ir.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Sh=class{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}},gS=0,ky=new L,yl=new pn,Ls=new st,yd=new L,nh=new L,vS=new L,yS=new pn,Fy=new L(1,0,0),Ny=new L(0,1,0),Hy=new L(0,0,1),xS={type:"added"},By={type:"removed"},Ft=class s extends Jr{constructor(){super(),Object.defineProperty(this,"id",{value:gS++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DefaultUp.clone();let e=new L,t=new Ir,n=new pn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new Bn}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=s.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yl.setFromAxisAngle(e,t),this.quaternion.multiply(yl),this}rotateOnWorldAxis(e,t){return yl.setFromAxisAngle(e,t),this.quaternion.premultiply(yl),this}rotateX(e){return this.rotateOnAxis(Fy,e)}rotateY(e){return this.rotateOnAxis(Ny,e)}rotateZ(e){return this.rotateOnAxis(Hy,e)}translateOnAxis(e,t){return ky.copy(e).applyQuaternion(this.quaternion),this.position.add(ky.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fy,e)}translateY(e){return this.translateOnAxis(Ny,e)}translateZ(e){return this.translateOnAxis(Hy,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ls.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yd.copy(e):yd.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),nh.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ls.lookAt(nh,yd,this.up):Ls.lookAt(yd,nh,this.up),this.quaternion.setFromRotationMatrix(Ls),i&&(Ls.extractRotation(i.matrixWorld),yl.setFromRotationMatrix(Ls),this.quaternion.premultiply(yl.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(By)),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(By)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ls),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new L),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new pn),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nh,e,vS),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new L),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nh,yS,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new L),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let h=l.shapes;if(Array.isArray(h))for(let c=0,m=h.length;c<m;c++){let d=h[c];r(e.shapes,d)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let h=0,c=this.material.length;h<c;h++)l.push(r(e.materials,this.material[h]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){let h=this.animations[l];i.animations.push(r(e.animations,h))}}if(t){let l=a(e.geometries),h=a(e.materials),c=a(e.textures),m=a(e.images),d=a(e.shapes),f=a(e.skeletons),g=a(e.animations);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),m.length>0&&(n.images=m),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g)}return n.object=i,n;function a(l){let h=[];for(let c in l){let m=l[c];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ft.DefaultUp=new L(0,1,0);Ft.DefaultMatrixAutoUpdate=!0;Ft.prototype.isObject3D=!0;var Bm=new L,wS=new L,bS=new Bn,Yi=class{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Bm.subVectors(n,t).cross(wS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new L),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new L);let n=e.delta(Bm),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new L),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bS.getNormalMatrix(e),i=this.coplanarPoint(Bm).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Yi.prototype.isPlane=!0;var Lr=new L,Cs=new L,Om=new L,Ps=new L,xl=new L,wl=new L,Oy=new L,zm=new L,Um=new L,Gm=new L,li=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new L),i.subVectors(n,t),Lr.subVectors(e,t),i.cross(Lr);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Lr.subVectors(i,t),Cs.subVectors(n,t),Om.subVectors(e,t);let a=Lr.dot(Lr),l=Lr.dot(Cs),h=Lr.dot(Om),c=Cs.dot(Cs),m=Cs.dot(Om),d=a*c-l*l;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new L),d===0)return r.set(-2,-1,-1);let f=1/d,g=(c*h-l*m)*f,y=(a*m-l*h)*f;return r.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ps),Ps.x>=0&&Ps.y>=0&&Ps.x+Ps.y<=1}static getUV(e,t,n,i,r,a,l,h){return this.getBarycoord(e,t,n,i,Ps),h.set(0,0),h.addScaledVector(r,Ps.x),h.addScaledVector(a,Ps.y),h.addScaledVector(l,Ps.z),h}static isFrontFacing(e,t,n,i){return Lr.subVectors(n,t),Cs.subVectors(e,t),Lr.cross(Cs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lr.subVectors(this.c,this.b),Cs.subVectors(this.a,this.b),Lr.cross(Cs).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new L),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Yi),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return s.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new L);let n=this.a,i=this.b,r=this.c,a,l;xl.subVectors(i,n),wl.subVectors(r,n),zm.subVectors(e,n);let h=xl.dot(zm),c=wl.dot(zm);if(h<=0&&c<=0)return t.copy(n);Um.subVectors(e,i);let m=xl.dot(Um),d=wl.dot(Um);if(m>=0&&d<=m)return t.copy(i);let f=h*d-m*c;if(f<=0&&h>=0&&m<=0)return a=h/(h-m),t.copy(n).addScaledVector(xl,a);Gm.subVectors(e,r);let g=xl.dot(Gm),y=wl.dot(Gm);if(y>=0&&g<=y)return t.copy(r);let M=g*c-h*y;if(M<=0&&c>=0&&y<=0)return l=c/(c-y),t.copy(n).addScaledVector(wl,l);let S=m*y-g*d;if(S<=0&&d-m>=0&&g-y>=0)return Oy.subVectors(r,i),l=(d-m)/(d-m+(g-y)),t.copy(i).addScaledVector(Oy,l);let _=1/(S+M+f);return a=M*_,l=f*_,t.copy(n).addScaledVector(xl,a).addScaledVector(wl,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_S=0;function Vn(){Object.defineProperty(this,"id",{value:_S++}),this.uuid=ji(),this.name="",this.type="Material",this.fog=!0,this.blending=kl,this.side=tc,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ag,this.blendDst=nc,this.blendEquation=co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=tf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_b,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ef,this.stencilZFail=ef,this.stencilZPass=ef,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Vn.prototype=Object.assign(Object.create(Jr.prototype),{constructor:Vn,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(s){if(s!==void 0)for(let e in s){let t=s[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===sg;continue}let n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(s){let e=s===void 0||typeof s=="string";e&&(s={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(s).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(s).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(s).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(s).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(s).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(s).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==kl&&(t.blending=this.blending),this.side!==tc&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){let r=[];for(let a in i){let l=i[a];delete l.metadata,r.push(l)}return r}if(e){let i=n(s.textures),r=n(s.images);i.length>0&&(t.textures=i),r.length>0&&(t.images=r)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(s){this.name=s.name,this.fog=s.fog,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;let e=s.clippingPlanes,t=null;if(e!==null){let n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Vn.prototype,"needsUpdate",{set:function(s){s===!0&&this.version++}});var Sb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},xd={h:0,s:0,l:0};function Vm(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Wm(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qm(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ce=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=dg(e,1),t=ai(t,0,1),n=ai(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=Vm(r,i,e+1/3),this.g=Vm(r,i,e),this.b=Vm(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(i[1])/360,h=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(l,h,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Sb[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Wm(e.r),this.g=Wm(e.g),this.b=Wm(e.b),this}copyLinearToSRGB(e){return this.r=qm(e.r),this.g=qm(e.g),this.b=qm(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),a=Math.min(t,n,i),l,h,c=(a+r)/2;if(a===r)l=0,h=0;else{let m=r-a;switch(h=c<=.5?m/(r+a):m/(2-r-a),r){case t:l=(n-i)/m+(n<i?6:0);break;case n:l=(i-t)/m+2;break;case i:l=(t-n)/m+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Cr),Cr.h+=e,Cr.s+=t,Cr.l+=n,this.setHSL(Cr.h,Cr.s,Cr.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(xd);let n=ph(Cr.h,xd.h,t),i=ph(Cr.s,xd.s,t),r=ph(Cr.l,xd.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};Ce.NAMES=Sb;Ce.prototype.isColor=!0;Ce.prototype.r=1;Ce.prototype.g=1;Ce.prototype.b=1;var Pn=class extends Vn{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};Pn.prototype.isMeshBasicMaterial=!0;var fn=new L,wd=new _e,Ze=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Bl,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Ce),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new _e),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new L),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Lt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wd.fromBufferAttribute(this,t),wd.applyMatrix3(e),this.setXY(t,wd.x,wd.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.x=this.getX(t),fn.y=this.getY(t),fn.z=this.getZ(t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.x=this.getX(t),fn.y=this.getY(t),fn.z=this.getZ(t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.x=this.getX(t),fn.y=this.getY(t),fn.z=this.getZ(t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};Ze.prototype.isBufferAttribute=!0;var lf=class extends Ze{constructor(e,t,n){super(new Int8Array(e),t,n)}},cf=class extends Ze{constructor(e,t,n){super(new Uint8Array(e),t,n)}},hf=class extends Ze{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},uf=class extends Ze{constructor(e,t,n){super(new Int16Array(e),t,n)}},Ol=class extends Ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}},df=class extends Ze{constructor(e,t,n){super(new Int32Array(e),t,n)}},zl=class extends Ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ff=class extends Ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}};ff.prototype.isFloat16BufferAttribute=!0;var rt=class extends Ze{constructor(e,t,n){super(new Float32Array(e),t,n)}},pf=class extends Ze{constructor(e,t,n){super(new Float64Array(e),t,n)}};function Tb(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}var MS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function uh(s,e){return new MS[s](e)}var ES=0,qr=new st,Xm=new Ft,bl=new L,Xi=new mi,ih=new mi,ti=new L,it=class s extends Jr{constructor(){super(),Object.defineProperty(this,"id",{value:ES++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tb(e)>65535?zl:Ol)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return qr.makeRotationX(e),this.applyMatrix4(qr),this}rotateY(e){return qr.makeRotationY(e),this.applyMatrix4(qr),this}rotateZ(e){return qr.makeRotationZ(e),this.applyMatrix4(qr),this}translate(e,t,n){return qr.makeTranslation(e,t,n),this.applyMatrix4(qr),this}scale(e,t,n){return qr.makeScale(e,t,n),this.applyMatrix4(qr),this}lookAt(e){return Xm.lookAt(e),Xm.updateMatrix(),this.applyMatrix4(Xm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bl).negate(),this.translate(bl.x,bl.y,bl.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Xi.setFromBufferAttribute(r),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,Xi.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,Xi.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(Xi.min),this.boundingBox.expandByPoint(Xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Xi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];ih.setFromBufferAttribute(l),this.morphTargetsRelative?(ti.addVectors(Xi.min,ih.min),Xi.expandByPoint(ti),ti.addVectors(Xi.max,ih.max),Xi.expandByPoint(ti)):(Xi.expandByPoint(ih.min),Xi.expandByPoint(ih.max))}Xi.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ti.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ti));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],h=this.morphTargetsRelative;for(let c=0,m=l.count;c<m;c++)ti.fromBufferAttribute(l,c),h&&(bl.fromBufferAttribute(e,c),ti.add(bl)),i=Math.max(i,n.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,l=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ze(new Float32Array(4*l),4));let h=t.tangent.array,c=[],m=[];for(let se=0;se<l;se++)c[se]=new L,m[se]=new L;let d=new L,f=new L,g=new L,y=new _e,M=new _e,S=new _e,_=new L,x=new L;function A(se,we,ce){d.fromArray(i,se*3),f.fromArray(i,we*3),g.fromArray(i,ce*3),y.fromArray(a,se*2),M.fromArray(a,we*2),S.fromArray(a,ce*2),f.sub(d),g.sub(d),M.sub(y),S.sub(y);let Z=1/(M.x*S.y-S.x*M.y);isFinite(Z)&&(_.copy(f).multiplyScalar(S.y).addScaledVector(g,-M.y).multiplyScalar(Z),x.copy(g).multiplyScalar(M.x).addScaledVector(f,-S.x).multiplyScalar(Z),c[se].add(_),c[we].add(_),c[ce].add(_),m[se].add(x),m[we].add(x),m[ce].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:n.length}]);for(let se=0,we=N.length;se<we;++se){let ce=N[se],Z=ce.start,ne=ce.count;for(let ie=Z,j=Z+ne;ie<j;ie+=3)A(n[ie+0],n[ie+1],n[ie+2])}let O=new L,C=new L,q=new L,X=new L;function te(se){q.fromArray(r,se*3),X.copy(q);let we=c[se];O.copy(we),O.sub(q.multiplyScalar(q.dot(we))).normalize(),C.crossVectors(X,we);let Z=C.dot(m[se])<0?-1:1;h[se*4]=O.x,h[se*4+1]=O.y,h[se*4+2]=O.z,h[se*4+3]=Z}for(let se=0,we=N.length;se<we;++se){let ce=N[se],Z=ce.start,ne=ce.count;for(let ie=Z,j=Z+ne;ie<j;ie+=3)te(n[ie+0]),te(n[ie+1]),te(n[ie+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,a=new L,l=new L,h=new L,c=new L,m=new L,d=new L;if(e)for(let f=0,g=e.count;f<g;f+=3){let y=e.getX(f+0),M=e.getX(f+1),S=e.getX(f+2);i.fromBufferAttribute(t,y),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,S),m.subVectors(a,r),d.subVectors(i,r),m.cross(d),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),l.add(m),h.add(m),c.add(m),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(S,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),m.subVectors(a,r),d.subVectors(i,r),m.cross(d),n.setXYZ(f+0,m.x,m.y,m.z),n.setXYZ(f+1,m.x,m.y,m.z),n.setXYZ(f+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let a=n[i].array,l=e.attributes[i],h=l.array,c=l.itemSize*t,m=Math.min(h.length,a.length-c);for(let d=0,f=c;d<m;d++,f++)a[f]=h[d]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ti.fromBufferAttribute(e,t),ti.normalize(),e.setXYZ(t,ti.x,ti.y,ti.z)}toNonIndexed(){function e(l,h){let c=l.array,m=l.itemSize,d=l.normalized,f=new c.constructor(h.length*m),g=0,y=0;for(let M=0,S=h.length;M<S;M++){g=h[M]*m;for(let _=0;_<m;_++)f[y++]=c[g++]}return new Ze(f,m,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let l in i){let h=i[l],c=e(h,n);t.setAttribute(l,c)}let r=this.morphAttributes;for(let l in r){let h=[],c=r[l];for(let m=0,d=c.length;m<d;m++){let f=c[m],g=e(f,n);h.push(g)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,h=a.length;l<h;l++){let c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let h in n){let c=n[h];e.data.attributes[h]=c.toJSON(e.data)}let i={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],m=[];for(let d=0,f=c.length;d<f;d++){let g=c[d];m.push(g.toJSON(e.data))}m.length>0&&(i[h]=m,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new s().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let m=i[c];this.setAttribute(c,m.clone(t))}let r=e.morphAttributes;for(let c in r){let m=[],d=r[c];for(let f=0,g=d.length;f<g;f++)m.push(d[f].clone(t));this.morphAttributes[c]=m}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,m=a.length;c<m;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};it.prototype.isBufferGeometry=!0;var zy=new st,_l=new Kr,Ym=new ar,da=new L,fa=new L,pa=new L,jm=new L,Zm=new L,Jm=new L,bd=new L,_d=new L,Md=new L,Ed=new _e,Sd=new _e,Td=new _e,Km=new L,Ad=new L,wt=class extends Ft{constructor(e=new it,t=new Pn){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ym.copy(n.boundingSphere),Ym.applyMatrix4(r),e.ray.intersectsSphere(Ym)===!1)||(zy.copy(r).invert(),_l.copy(e.ray).applyMatrix4(zy),n.boundingBox!==null&&_l.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){let l=n.index,h=n.attributes.position,c=n.morphAttributes.position,m=n.morphTargetsRelative,d=n.attributes.uv,f=n.attributes.uv2,g=n.groups,y=n.drawRange;if(l!==null)if(Array.isArray(i))for(let M=0,S=g.length;M<S;M++){let _=g[M],x=i[_.materialIndex],A=Math.max(_.start,y.start),N=Math.min(_.start+_.count,y.start+y.count);for(let O=A,C=N;O<C;O+=3){let q=l.getX(O),X=l.getX(O+1),te=l.getX(O+2);a=Rd(this,x,e,_l,h,c,m,d,f,q,X,te),a&&(a.faceIndex=Math.floor(O/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{let M=Math.max(0,y.start),S=Math.min(l.count,y.start+y.count);for(let _=M,x=S;_<x;_+=3){let A=l.getX(_),N=l.getX(_+1),O=l.getX(_+2);a=Rd(this,i,e,_l,h,c,m,d,f,A,N,O),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(i))for(let M=0,S=g.length;M<S;M++){let _=g[M],x=i[_.materialIndex],A=Math.max(_.start,y.start),N=Math.min(_.start+_.count,y.start+y.count);for(let O=A,C=N;O<C;O+=3){let q=O,X=O+1,te=O+2;a=Rd(this,x,e,_l,h,c,m,d,f,q,X,te),a&&(a.faceIndex=Math.floor(O/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{let M=Math.max(0,y.start),S=Math.min(h.count,y.start+y.count);for(let _=M,x=S;_<x;_+=3){let A=_,N=_+1,O=_+2;a=Rd(this,i,e,_l,h,c,m,d,f,A,N,O),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};wt.prototype.isMesh=!0;function SS(s,e,t,n,i,r,a,l){let h;if(e.side===xn?h=n.intersectTriangle(a,r,i,!0,l):h=n.intersectTriangle(i,r,a,e.side!==ri,l),h===null)return null;Ad.copy(l),Ad.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ad);return c<t.near||c>t.far?null:{distance:c,point:Ad.clone(),object:s}}function Rd(s,e,t,n,i,r,a,l,h,c,m,d){da.fromBufferAttribute(i,c),fa.fromBufferAttribute(i,m),pa.fromBufferAttribute(i,d);let f=s.morphTargetInfluences;if(e.morphTargets&&r&&f){bd.set(0,0,0),_d.set(0,0,0),Md.set(0,0,0);for(let y=0,M=r.length;y<M;y++){let S=f[y],_=r[y];S!==0&&(jm.fromBufferAttribute(_,c),Zm.fromBufferAttribute(_,m),Jm.fromBufferAttribute(_,d),a?(bd.addScaledVector(jm,S),_d.addScaledVector(Zm,S),Md.addScaledVector(Jm,S)):(bd.addScaledVector(jm.sub(da),S),_d.addScaledVector(Zm.sub(fa),S),Md.addScaledVector(Jm.sub(pa),S)))}da.add(bd),fa.add(_d),pa.add(Md)}s.isSkinnedMesh&&e.skinning&&(s.boneTransform(c,da),s.boneTransform(m,fa),s.boneTransform(d,pa));let g=SS(s,e,t,n,da,fa,pa,Km);if(g){l&&(Ed.fromBufferAttribute(l,c),Sd.fromBufferAttribute(l,m),Td.fromBufferAttribute(l,d),g.uv=li.getUV(Km,da,fa,pa,Ed,Sd,Td,new _e)),h&&(Ed.fromBufferAttribute(h,c),Sd.fromBufferAttribute(h,m),Td.fromBufferAttribute(h,d),g.uv2=li.getUV(Km,da,fa,pa,Ed,Sd,Td,new _e));let y={a:c,b:m,c:d,normal:new L,materialIndex:0};li.getNormal(da,fa,pa,y.normal),g.face=y}return g}var xa=class extends it{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let l=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let h=[],c=[],m=[],d=[],f=0,g=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,i,a,2),y("x","z","y",1,-1,e,n,-t,i,a,3),y("x","y","z",1,-1,e,t,n,i,r,4),y("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(m,3)),this.setAttribute("uv",new rt(d,2));function y(M,S,_,x,A,N,O,C,q,X,te){let se=N/q,we=O/X,ce=N/2,Z=O/2,ne=C/2,ie=q+1,j=X+1,Le=0,Oe=0,ke=new L;for(let et=0;et<j;et++){let ze=et*we-Z;for(let ht=0;ht<ie;ht++){let gt=ht*se-ce;ke[M]=gt*x,ke[S]=ze*A,ke[_]=ne,c.push(ke.x,ke.y,ke.z),ke[M]=0,ke[S]=0,ke[_]=C>0?1:-1,m.push(ke.x,ke.y,ke.z),d.push(ht/q),d.push(1-et/X),Le+=1}}for(let et=0;et<X;et++)for(let ze=0;ze<q;ze++){let ht=f+ze+ie*et,gt=f+ze+ie*(et+1),xe=f+(ze+1)+ie*(et+1),Kt=f+(ze+1)+ie*et;h.push(ht,gt,Kt),h.push(gt,xe,Kt),Oe+=6}l.addGroup(g,Oe,te),g+=Oe,f+=Le}}};function Ul(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pi(s){let e={};for(let t=0;t<s.length;t++){let n=Ul(s[t]);for(let i in n)e[i]=n[i]}return e}var Ab={clone:Ul,merge:pi},TS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Vn{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=TS,this.fragmentShader=AS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ul(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};mn.prototype.isShaderMaterial=!0;var Fs=class extends Ft{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new L),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Fs.prototype.isCamera=!0;var Rn=class extends Fs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Eh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/h,t-=a.offsetY*n/c,i*=a.width/h,n*=a.height/c}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};Rn.prototype.isPerspectiveCamera=!0;var Ml=90,El=1,Gl=class extends Ft{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new Rn(Ml,El,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);let r=new Rn(Ml,El,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);let a=new Rn(Ml,El,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new L(0,1,0)),this.add(a);let l=new Rn(Ml,El,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new L(0,-1,0)),this.add(l);let h=new Rn(Ml,El,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new L(0,0,1)),this.add(h);let c=new Rn(Ml,El,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,r,a,l,h,c]=this.children,m=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=m}},wa=class extends ni{constructor(e,t,n,i,r,a,l,h,c,m){e=e!==void 0?e:[],t=t!==void 0?t:pu,l=l!==void 0?l:ga,super(e,t,n,i,r,a,l,h,c,m),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};wa.prototype.isCubeTexture=!0;var Vl=class extends Cn{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new wa(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=oi,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xa(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Ul(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Is});r.uniforms.tEquirect.value=t;let a=new wt(i,r),l=t.minFilter;return t.minFilter===La&&(t.minFilter=qt),new Gl(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};Vl.prototype.isWebGLCubeRenderTarget=!0;var ba=class extends ni{constructor(e,t,n,i,r,a,l,h,c,m,d,f){super(null,a,l,h,c,m,i,r,d,f),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:Ln,this.minFilter=m!==void 0?m:Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};ba.prototype.isDataTexture=!0;var Sl=new ar,Ld=new L,Ns=class{constructor(e=new Yi,t=new Yi,n=new Yi,i=new Yi,r=new Yi,a=new Yi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],l=n[3],h=n[4],c=n[5],m=n[6],d=n[7],f=n[8],g=n[9],y=n[10],M=n[11],S=n[12],_=n[13],x=n[14],A=n[15];return t[0].setComponents(l-i,d-h,M-f,A-S).normalize(),t[1].setComponents(l+i,d+h,M+f,A+S).normalize(),t[2].setComponents(l+r,d+c,M+g,A+_).normalize(),t[3].setComponents(l-r,d-c,M-g,A-_).normalize(),t[4].setComponents(l-a,d-m,M-y,A-x).normalize(),t[5].setComponents(l+a,d+m,M+y,A+x).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Sl.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Sl)}intersectsSprite(e){return Sl.center.set(0,0,0),Sl.radius=.7071067811865476,Sl.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sl)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ld.x=i.normal.x>0?e.max.x:e.min.x,Ld.y=i.normal.y>0?e.max.y:e.min.y,Ld.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ld)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rb(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function RS(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,m){let d=c.array,f=c.usage,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,d,f),c.onUploadCallback();let y=5126;return d instanceof Float32Array?y=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c.isFloat16BufferAttribute?t?y=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):y=5123:d instanceof Int16Array?y=5122:d instanceof Uint32Array?y=5125:d instanceof Int32Array?y=5124:d instanceof Int8Array?y=5120:d instanceof Uint8Array&&(y=5121),{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,m,d){let f=m.array,g=m.updateRange;s.bindBuffer(d,c),g.count===-1?s.bufferSubData(d,0,f):(t?s.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):s.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);let m=n.get(c);m&&(s.deleteBuffer(m.buffer),n.delete(c))}function h(c,m){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);d===void 0?n.set(c,i(c,m)):d.version<c.version&&(r(d.buffer,c,m),d.version=c.version)}return{get:a,remove:l,update:h}}var $r=class extends it{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,l=Math.floor(n),h=Math.floor(i),c=l+1,m=h+1,d=e/l,f=t/h,g=[],y=[],M=[],S=[];for(let _=0;_<m;_++){let x=_*f-a;for(let A=0;A<c;A++){let N=A*d-r;y.push(N,-x,0),M.push(0,0,1),S.push(A/l),S.push(1-_/h)}}for(let _=0;_<h;_++)for(let x=0;x<l;x++){let A=x+c*_,N=x+c*(_+1),O=x+1+c*(_+1),C=x+1+c*_;g.push(A,N,C),g.push(N,O,C)}this.setIndex(g),this.setAttribute("position",new rt(y,3)),this.setAttribute("normal",new rt(M,3)),this.setAttribute("uv",new rt(S,2))}},LS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,CS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PS=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,DS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,IS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kS="vec3 transformed = vec3( position );",FS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NS=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,HS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,XS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,YS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QS="gl_FragColor = linearToOutputTexel( gl_FragColor );",eT=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,tT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aT=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,oT=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,lT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,uT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,dT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fT=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,pT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,mT=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,gT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vT=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,yT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,wT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,bT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_T=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ST=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,RT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,LT=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,CT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,NT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,HT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,BT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,OT=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,UT=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,GT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,VT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,WT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,qT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KT=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$T=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QT=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,e2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,i2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l2=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c2=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,h2=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,u2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,d2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,f2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,p2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,m2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,g2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,v2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,y2=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,x2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w2=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,M2=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,A2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D2=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F2=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H2=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O2=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z2=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,V2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Y2=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Z2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,It={alphamap_fragment:LS,alphamap_pars_fragment:CS,alphatest_fragment:PS,aomap_fragment:DS,aomap_pars_fragment:IS,begin_vertex:kS,beginnormal_vertex:FS,bsdfs:NS,bumpmap_pars_fragment:HS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:OS,clipping_planes_pars_vertex:zS,clipping_planes_vertex:US,color_fragment:GS,color_pars_fragment:VS,color_pars_vertex:WS,color_vertex:qS,common:XS,cube_uv_reflection_fragment:YS,defaultnormal_vertex:jS,displacementmap_pars_vertex:ZS,displacementmap_vertex:JS,emissivemap_fragment:KS,emissivemap_pars_fragment:$S,encodings_fragment:QS,encodings_pars_fragment:eT,envmap_fragment:tT,envmap_common_pars_fragment:nT,envmap_pars_fragment:iT,envmap_pars_vertex:rT,envmap_physical_pars_fragment:mT,envmap_vertex:sT,fog_vertex:aT,fog_pars_vertex:oT,fog_fragment:lT,fog_pars_fragment:cT,gradientmap_pars_fragment:hT,lightmap_fragment:uT,lightmap_pars_fragment:dT,lights_lambert_vertex:fT,lights_pars_begin:pT,lights_toon_fragment:gT,lights_toon_pars_fragment:vT,lights_phong_fragment:yT,lights_phong_pars_fragment:xT,lights_physical_fragment:wT,lights_physical_pars_fragment:bT,lights_fragment_begin:_T,lights_fragment_maps:MT,lights_fragment_end:ET,logdepthbuf_fragment:ST,logdepthbuf_pars_fragment:TT,logdepthbuf_pars_vertex:AT,logdepthbuf_vertex:RT,map_fragment:LT,map_pars_fragment:CT,map_particle_fragment:PT,map_particle_pars_fragment:DT,metalnessmap_fragment:IT,metalnessmap_pars_fragment:kT,morphnormal_vertex:FT,morphtarget_pars_vertex:NT,morphtarget_vertex:HT,normal_fragment_begin:BT,normal_fragment_maps:OT,normalmap_pars_fragment:zT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:GT,clearcoat_pars_fragment:VT,packing:WT,premultiplied_alpha_fragment:qT,project_vertex:XT,dithering_fragment:YT,dithering_pars_fragment:jT,roughnessmap_fragment:ZT,roughnessmap_pars_fragment:JT,shadowmap_pars_fragment:KT,shadowmap_pars_vertex:$T,shadowmap_vertex:QT,shadowmask_pars_fragment:e2,skinbase_vertex:t2,skinning_pars_vertex:n2,skinning_vertex:i2,skinnormal_vertex:r2,specularmap_fragment:s2,specularmap_pars_fragment:a2,tonemapping_fragment:o2,tonemapping_pars_fragment:l2,transmissionmap_fragment:c2,transmissionmap_pars_fragment:h2,uv_pars_fragment:u2,uv_pars_vertex:d2,uv_vertex:f2,uv2_pars_fragment:p2,uv2_pars_vertex:m2,uv2_vertex:g2,worldpos_vertex:v2,background_frag:y2,background_vert:x2,cube_frag:w2,cube_vert:b2,depth_frag:_2,depth_vert:M2,distanceRGBA_frag:E2,distanceRGBA_vert:S2,equirect_frag:T2,equirect_vert:A2,linedashed_frag:R2,linedashed_vert:L2,meshbasic_frag:C2,meshbasic_vert:P2,meshlambert_frag:D2,meshlambert_vert:I2,meshmatcap_frag:k2,meshmatcap_vert:F2,meshtoon_frag:N2,meshtoon_vert:H2,meshphong_frag:B2,meshphong_vert:O2,meshphysical_frag:z2,meshphysical_vert:U2,normal_frag:G2,normal_vert:V2,points_frag:W2,points_vert:q2,shadow_frag:X2,shadow_vert:Y2,sprite_frag:j2,sprite_vert:Z2},je={common:{diffuse:{value:new Ce(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Bn},uv2Transform:{value:new Bn},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Bn}},sprite:{diffuse:{value:new Ce(15658734)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Bn}}},Dr={basic:{uniforms:pi([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:pi([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.fog,je.lights,{emissive:{value:new Ce(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:pi([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:pi([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:pi([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Ce(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:pi([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:pi([je.points,je.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:pi([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:pi([je.common,je.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:pi([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:It.normal_vert,fragmentShader:It.normal_frag},sprite:{uniforms:pi([je.sprite,je.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Bn},t2D:{value:null}},vertexShader:It.background_vert,fragmentShader:It.background_frag},cube:{uniforms:pi([je.envmap,{opacity:{value:1}}]),vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:pi([je.common,je.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:pi([je.lights,je.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Dr.physical={uniforms:pi([Dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _e(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Ce(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};function J2(s,e,t,n,i){let r=new Ce(0),a=0,l,h,c=null,m=0,d=null;function f(y,M,S,_){let x=M.isScene===!0?M.background:null;x&&x.isTexture&&(x=e.get(x));let A=s.xr,N=A.getSession&&A.getSession();N&&N.environmentBlendMode==="additive"&&(x=null),x===null?g(r,a):x&&x.isColor&&(g(x,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ic)?(h===void 0&&(h=new wt(new xa(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Ul(Dr.cube.uniforms),vertexShader:Dr.cube.vertexShader,fragmentShader:Dr.cube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,C,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x._needsFlipEnvMap?-1:1,(c!==x||m!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,c=x,m=x.version,d=s.toneMapping),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new wt(new $r(2,2),new mn({name:"BackgroundMaterial",uniforms:Ul(Dr.background.uniforms),vertexShader:Dr.background.vertexShader,fragmentShader:Dr.background.fragmentShader,side:tc,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||m!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,c=x,m=x.version,d=s.toneMapping),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,M){t.buffers.color.setClear(y.r,y.g,y.b,M,i)}return{getClearColor:function(){return r},setClearColor:function(y,M=1){r.set(y),a=M,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(r,a)},render:f}}function K2(s,e,t,n){let i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,l={},h=M(null),c=h;function m(Z,ne,ie,j,Le){let Oe=!1;if(a){let ke=y(j,ie,ne);c!==ke&&(c=ke,f(c.object)),Oe=S(j,Le),Oe&&_(j,Le)}else{let ke=ne.wireframe===!0;(c.geometry!==j.id||c.program!==ie.id||c.wireframe!==ke)&&(c.geometry=j.id,c.program=ie.id,c.wireframe=ke,Oe=!0)}Z.isInstancedMesh===!0&&(Oe=!0),Le!==null&&t.update(Le,34963),Oe&&(q(Z,ne,ie,j),Le!==null&&s.bindBuffer(34963,t.get(Le).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(Z){return n.isWebGL2?s.bindVertexArray(Z):r.bindVertexArrayOES(Z)}function g(Z){return n.isWebGL2?s.deleteVertexArray(Z):r.deleteVertexArrayOES(Z)}function y(Z,ne,ie){let j=ie.wireframe===!0,Le=l[Z.id];Le===void 0&&(Le={},l[Z.id]=Le);let Oe=Le[ne.id];Oe===void 0&&(Oe={},Le[ne.id]=Oe);let ke=Oe[j];return ke===void 0&&(ke=M(d()),Oe[j]=ke),ke}function M(Z){let ne=[],ie=[],j=[];for(let Le=0;Le<i;Le++)ne[Le]=0,ie[Le]=0,j[Le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:ie,attributeDivisors:j,object:Z,attributes:{},index:null}}function S(Z,ne){let ie=c.attributes,j=Z.attributes,Le=0;for(let Oe in j){let ke=ie[Oe],et=j[Oe];if(ke===void 0||ke.attribute!==et||ke.data!==et.data)return!0;Le++}return c.attributesNum!==Le||c.index!==ne}function _(Z,ne){let ie={},j=Z.attributes,Le=0;for(let Oe in j){let ke=j[Oe],et={};et.attribute=ke,ke.data&&(et.data=ke.data),ie[Oe]=et,Le++}c.attributes=ie,c.attributesNum=Le,c.index=ne}function x(){let Z=c.newAttributes;for(let ne=0,ie=Z.length;ne<ie;ne++)Z[ne]=0}function A(Z){N(Z,0)}function N(Z,ne){let ie=c.newAttributes,j=c.enabledAttributes,Le=c.attributeDivisors;ie[Z]=1,j[Z]===0&&(s.enableVertexAttribArray(Z),j[Z]=1),Le[Z]!==ne&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Z,ne),Le[Z]=ne)}function O(){let Z=c.newAttributes,ne=c.enabledAttributes;for(let ie=0,j=ne.length;ie<j;ie++)ne[ie]!==Z[ie]&&(s.disableVertexAttribArray(ie),ne[ie]=0)}function C(Z,ne,ie,j,Le,Oe){n.isWebGL2===!0&&(ie===5124||ie===5125)?s.vertexAttribIPointer(Z,ne,ie,Le,Oe):s.vertexAttribPointer(Z,ne,ie,j,Le,Oe)}function q(Z,ne,ie,j){if(n.isWebGL2===!1&&(Z.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Le=j.attributes,Oe=ie.getAttributes(),ke=ne.defaultAttributeValues;for(let et in Oe){let ze=Oe[et];if(ze>=0){let ht=Le[et];if(ht!==void 0){let gt=ht.normalized,xe=ht.itemSize,Kt=t.get(ht);if(Kt===void 0)continue;let Ct=Kt.buffer,xt=Kt.type,ut=Kt.bytesPerElement;if(ht.isInterleavedBufferAttribute){let Gt=ht.data,Rt=Gt.stride,St=ht.offset;Gt&&Gt.isInstancedInterleavedBuffer?(N(ze,Gt.meshPerAttribute),j._maxInstanceCount===void 0&&(j._maxInstanceCount=Gt.meshPerAttribute*Gt.count)):A(ze),s.bindBuffer(34962,Ct),C(ze,xe,xt,gt,Rt*ut,St*ut)}else ht.isInstancedBufferAttribute?(N(ze,ht.meshPerAttribute),j._maxInstanceCount===void 0&&(j._maxInstanceCount=ht.meshPerAttribute*ht.count)):A(ze),s.bindBuffer(34962,Ct),C(ze,xe,xt,gt,0,0)}else if(et==="instanceMatrix"){let gt=t.get(Z.instanceMatrix);if(gt===void 0)continue;let xe=gt.buffer,Kt=gt.type;N(ze+0,1),N(ze+1,1),N(ze+2,1),N(ze+3,1),s.bindBuffer(34962,xe),s.vertexAttribPointer(ze+0,4,Kt,!1,64,0),s.vertexAttribPointer(ze+1,4,Kt,!1,64,16),s.vertexAttribPointer(ze+2,4,Kt,!1,64,32),s.vertexAttribPointer(ze+3,4,Kt,!1,64,48)}else if(et==="instanceColor"){let gt=t.get(Z.instanceColor);if(gt===void 0)continue;let xe=gt.buffer,Kt=gt.type;N(ze,1),s.bindBuffer(34962,xe),s.vertexAttribPointer(ze,3,Kt,!1,12,0)}else if(ke!==void 0){let gt=ke[et];if(gt!==void 0)switch(gt.length){case 2:s.vertexAttrib2fv(ze,gt);break;case 3:s.vertexAttrib3fv(ze,gt);break;case 4:s.vertexAttrib4fv(ze,gt);break;default:s.vertexAttrib1fv(ze,gt)}}}}O()}function X(){we();for(let Z in l){let ne=l[Z];for(let ie in ne){let j=ne[ie];for(let Le in j)g(j[Le].object),delete j[Le];delete ne[ie]}delete l[Z]}}function te(Z){if(l[Z.id]===void 0)return;let ne=l[Z.id];for(let ie in ne){let j=ne[ie];for(let Le in j)g(j[Le].object),delete j[Le];delete ne[ie]}delete l[Z.id]}function se(Z){for(let ne in l){let ie=l[ne];if(ie[Z.id]===void 0)continue;let j=ie[Z.id];for(let Le in j)g(j[Le].object),delete j[Le];delete ie[Z.id]}}function we(){ce(),c!==h&&(c=h,f(c.object))}function ce(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:m,reset:we,resetDefaultState:ce,dispose:X,releaseStatesOfGeometry:te,releaseStatesOfProgram:se,initAttributes:x,enableAttribute:A,disableUnusedAttributes:O}}function $2(s,e,t,n){let i=n.isWebGL2,r;function a(c){r=c}function l(c,m){s.drawArrays(r,c,m),t.update(m,r,1)}function h(c,m,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,c,m,d),t.update(m,r,d)}this.setMode=a,this.render=l,this.renderInstances=h}function Q2(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext,l=t.precision!==void 0?t.precision:"highp",h=r(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let c=t.logarithmicDepthBuffer===!0,m=s.getParameter(34930),d=s.getParameter(35660),f=s.getParameter(3379),g=s.getParameter(34076),y=s.getParameter(34921),M=s.getParameter(36347),S=s.getParameter(36348),_=s.getParameter(36349),x=d>0,A=a||e.has("OES_texture_float"),N=x&&A,O=a?s.getParameter(36183):0;return{isWebGL2:a,getMaxAnisotropy:i,getMaxPrecision:r,precision:l,logarithmicDepthBuffer:c,maxTextures:m,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:N,maxSamples:O}}function e3(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Yi,l=new Bn,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){let y=d.length!==0||f||n!==0||i;return i=f,t=m(d,g,0),n=d.length,y},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,f,g){let y=d.clippingPlanes,M=d.clipIntersection,S=d.clipShadows,_=s.get(d);if(!i||y===null||y.length===0||r&&!S)r?m(null):c();else{let x=r?0:n,A=x*4,N=_.clippingState||null;h.value=N,N=m(y,f,A,g);for(let O=0;O!==A;++O)N[O]=t[O];_.clippingState=N,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(d,f,g,y){let M=d!==null?d.length:0,S=null;if(M!==0){if(S=h.value,y!==!0||S===null){let _=g+M*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(S===null||S.length<_)&&(S=new Float32Array(_));for(let A=0,N=g;A!==M;++A,N+=4)a.copy(d[A]).applyMatrix4(x,l),a.normal.toArray(S,N),S[N+3]=a.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function t3(s){let e=new WeakMap;function t(a,l){return l===nf?a.mapping=pu:l===rf&&(a.mapping=mu),a}function n(a){if(a&&a.isTexture){let l=a.mapping;if(l===nf||l===rf)if(e.has(a)){let h=e.get(a).texture;return t(h,a.mapping)}else{let h=a.image;if(h&&h.height>0){let c=s.getRenderTarget(),m=new Vl(h.height/2);return m.fromEquirectangularTexture(s,a),e.set(a,m),s.setRenderTarget(c),a.addEventListener("dispose",i),t(m.texture,a.mapping)}else return null}}return a}function i(a){let l=a.target;l.removeEventListener("dispose",i);let h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function n3(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function i3(s,e,t,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",a),delete i[f.id];let g=r.get(f);g&&(e.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function h(d){let f=d.attributes;for(let y in f)e.update(f[y],34962);let g=d.morphAttributes;for(let y in g){let M=g[y];for(let S=0,_=M.length;S<_;S++)e.update(M[S],34962)}}function c(d){let f=[],g=d.index,y=d.attributes.position,M=0;if(g!==null){let x=g.array;M=g.version;for(let A=0,N=x.length;A<N;A+=3){let O=x[A+0],C=x[A+1],q=x[A+2];f.push(O,C,C,q,q,O)}}else{let x=y.array;M=y.version;for(let A=0,N=x.length/3-1;A<N;A+=3){let O=A+0,C=A+1,q=A+2;f.push(O,C,C,q,q,O)}}let S=new(Tb(f)>65535?zl:Ol)(f,1);S.version=M;let _=r.get(d);_&&e.remove(_),r.set(d,S)}function m(d){let f=r.get(d);if(f){let g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:l,update:h,getWireframeAttribute:m}}function r3(s,e,t,n){let i=n.isWebGL2,r;function a(f){r=f}let l,h;function c(f){l=f.type,h=f.bytesPerElement}function m(f,g){s.drawElements(r,g,l,f*h),t.update(g,r,1)}function d(f,g,y){if(y===0)return;let M,S;if(i)M=s,S="drawElementsInstanced";else if(M=e.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[S](r,g,l,f*h,y),t.update(g,r,y)}this.setMode=a,this.setIndex=c,this.render=m,this.renderInstances=d}function s3(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case 4:t.triangles+=l*(r/3);break;case 1:t.lines+=l*(r/2);break;case 3:t.lines+=l*(r-1);break;case 2:t.lines+=l*r;break;case 0:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function a3(s,e){return s[0]-e[0]}function o3(s,e){return Math.abs(e[1])-Math.abs(s[1])}function l3(s){let e={},t=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,a,l,h){let c=r.morphTargetInfluences,m=c===void 0?0:c.length,d=e[a.id];if(d===void 0){d=[];for(let S=0;S<m;S++)d[S]=[S,0];e[a.id]=d}for(let S=0;S<m;S++){let _=d[S];_[0]=S,_[1]=c[S]}d.sort(o3);for(let S=0;S<8;S++)S<m&&d[S][1]?(n[S][0]=d[S][0],n[S][1]=d[S][1]):(n[S][0]=Number.MAX_SAFE_INTEGER,n[S][1]=0);n.sort(a3);let f=l.morphTargets&&a.morphAttributes.position,g=l.morphNormals&&a.morphAttributes.normal,y=0;for(let S=0;S<8;S++){let _=n[S],x=_[0],A=_[1];x!==Number.MAX_SAFE_INTEGER&&A?(f&&a.getAttribute("morphTarget"+S)!==f[x]&&a.setAttribute("morphTarget"+S,f[x]),g&&a.getAttribute("morphNormal"+S)!==g[x]&&a.setAttribute("morphNormal"+S,g[x]),t[S]=A,y+=A):(f&&a.hasAttribute("morphTarget"+S)===!0&&a.deleteAttribute("morphTarget"+S),g&&a.hasAttribute("morphNormal"+S)===!0&&a.deleteAttribute("morphNormal"+S),t[S]=0)}let M=a.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",t)}return{update:i}}function c3(s,e,t,n){let i=new WeakMap;function r(h){let c=n.render.frame,m=h.geometry,d=e.get(h,m);return i.get(d)!==c&&(e.update(d),i.set(d,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),d}function a(){i=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Th=class extends ni{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Th.prototype.isDataTexture2DArray=!0;var Ah=class extends ni{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Ah.prototype.isDataTexture3D=!0;var Lb=new ni,h3=new Th,u3=new Ah,Cb=new wa,Uy=[],Gy=[],Vy=new Float32Array(16),Wy=new Float32Array(9),qy=new Float32Array(4);function rc(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Uy[i];if(r===void 0&&(r=new Float32Array(i),Uy[i]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,s[a].toArray(r,l)}return r}function Si(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function gi(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Pb(s,e){let t=Gy[e];t===void 0&&(t=new Int32Array(e),Gy[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function d3(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function f3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Si(t,e))return;s.uniform2fv(this.addr,e),gi(t,e)}}function p3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Si(t,e))return;s.uniform3fv(this.addr,e),gi(t,e)}}function m3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Si(t,e))return;s.uniform4fv(this.addr,e),gi(t,e)}}function g3(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Si(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gi(t,e)}else{if(Si(t,n))return;qy.set(n),s.uniformMatrix2fv(this.addr,!1,qy),gi(t,n)}}function v3(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Si(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gi(t,e)}else{if(Si(t,n))return;Wy.set(n),s.uniformMatrix3fv(this.addr,!1,Wy),gi(t,n)}}function y3(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Si(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gi(t,e)}else{if(Si(t,n))return;Vy.set(n),s.uniformMatrix4fv(this.addr,!1,Vy),gi(t,n)}}function x3(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function w3(s,e){let t=this.cache;Si(t,e)||(s.uniform2iv(this.addr,e),gi(t,e))}function b3(s,e){let t=this.cache;Si(t,e)||(s.uniform3iv(this.addr,e),gi(t,e))}function _3(s,e){let t=this.cache;Si(t,e)||(s.uniform4iv(this.addr,e),gi(t,e))}function M3(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function E3(s,e){let t=this.cache;Si(t,e)||(s.uniform2uiv(this.addr,e),gi(t,e))}function S3(s,e){let t=this.cache;Si(t,e)||(s.uniform3uiv(this.addr,e),gi(t,e))}function T3(s,e){let t=this.cache;Si(t,e)||(s.uniform4uiv(this.addr,e),gi(t,e))}function A3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Lb,i)}function R3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||u3,i)}function L3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Cb,i)}function C3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||h3,i)}function P3(s){switch(s){case 5126:return d3;case 35664:return f3;case 35665:return p3;case 35666:return m3;case 35674:return g3;case 35675:return v3;case 35676:return y3;case 5124:case 35670:return x3;case 35667:case 35671:return w3;case 35668:case 35672:return b3;case 35669:case 35673:return _3;case 5125:return M3;case 36294:return E3;case 36295:return S3;case 36296:return T3;case 35678:case 36198:case 36298:case 36306:case 35682:return A3;case 35679:case 36299:case 36307:return R3;case 35680:case 36300:case 36308:case 36293:return L3;case 36289:case 36303:case 36311:case 36292:return C3}}function D3(s,e){s.uniform1fv(this.addr,e)}function I3(s,e){let t=rc(e,this.size,2);s.uniform2fv(this.addr,t)}function k3(s,e){let t=rc(e,this.size,3);s.uniform3fv(this.addr,t)}function F3(s,e){let t=rc(e,this.size,4);s.uniform4fv(this.addr,t)}function N3(s,e){let t=rc(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function H3(s,e){let t=rc(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function B3(s,e){let t=rc(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function O3(s,e){s.uniform1iv(this.addr,e)}function z3(s,e){s.uniform2iv(this.addr,e)}function U3(s,e){s.uniform3iv(this.addr,e)}function G3(s,e){s.uniform4iv(this.addr,e)}function V3(s,e){s.uniform1uiv(this.addr,e)}function W3(s,e){s.uniform2uiv(this.addr,e)}function q3(s,e){s.uniform3uiv(this.addr,e)}function X3(s,e){s.uniform4uiv(this.addr,e)}function Y3(s,e,t){let n=e.length,i=Pb(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||Lb,i[r])}function j3(s,e,t){let n=e.length,i=Pb(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||Cb,i[r])}function Z3(s){switch(s){case 5126:return D3;case 35664:return I3;case 35665:return k3;case 35666:return F3;case 35674:return N3;case 35675:return H3;case 35676:return B3;case 5124:case 35670:return O3;case 35667:case 35671:return z3;case 35668:case 35672:return U3;case 35669:case 35673:return G3;case 5125:return V3;case 36294:return W3;case 36295:return q3;case 36296:return X3;case 35678:case 36198:case 36298:case 36306:case 35682:return Y3;case 35680:case 36300:case 36308:case 36293:return j3}}function J3(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=P3(e.type)}function Db(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Z3(e.type)}Db.prototype.updateCache=function(s){let e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),gi(e,s)};function Ib(s){this.id=s,this.seq=[],this.map={}}Ib.prototype.setValue=function(s,e,t){let n=this.seq;for(let i=0,r=n.length;i!==r;++i){let a=n[i];a.setValue(s,e[a.id],t)}};var $m=/(\w+)(\])?(\[|\.)?/g;function Xy(s,e){s.seq.push(e),s.map[e.id]=e}function K3(s,e,t){let n=s.name,i=n.length;for($m.lastIndex=0;;){let r=$m.exec(n),a=$m.lastIndex,l=r[1],h=r[2]==="]",c=r[3];if(h&&(l=l|0),c===void 0||c==="["&&a+2===i){Xy(t,c===void 0?new J3(l,s,e):new Db(l,s,e));break}else{let d=t.map[l];d===void 0&&(d=new Ib(l),Xy(t,d)),t=d}}}function va(s,e){this.seq=[],this.map={};let t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);K3(i,r,this)}}va.prototype.setValue=function(s,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(s,t,n)};va.prototype.setOptional=function(s,e,t){let n=e[t];n!==void 0&&this.setValue(s,t,n)};va.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){let a=e[i],l=t[a.id];l.needsUpdate!==!1&&a.setValue(s,l.value,n)}};va.seqWithValue=function(s,e){let t=[];for(let n=0,i=s.length;n!==i;++n){let r=s[n];r.id in e&&t.push(r)}return t};function Yy(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var $3=0;function Q3(s){let e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function kb(s){switch(s){case Ei:return["Linear","( value )"];case Pa:return["sRGB","( value )"];case np:return["RGBE","( value )"];case cg:return["RGBM","( value, 7.0 )"];case hg:return["RGBM","( value, 16.0 )"];case ug:return["RGBD","( value, 256.0 )"];case tp:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case yb:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function jy(s,e,t){let n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=s.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+Q3(r)}function rh(s,e){let t=kb(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function eA(s,e){let t=kb(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tA(s,e){let t;switch(e){case vw:t="Linear";break;case yw:t="Reinhard";break;case xw:t="OptimizedCineon";break;case ww:t="ACESFilmic";break;case bw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nA(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dh).join(`
`)}function iA(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rA(s,e){let t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){let a=s.getActiveAttrib(e,i).name;t[a]=s.getAttribLocation(e,a)}return t}function dh(s){return s!==""}function Zy(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jy(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sA=/^[ \t]*#include +<([\w\d./]+)>/gm;function A0(s){return s.replace(sA,aA)}function aA(s,e){let t=It[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return A0(t)}var oA=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,lA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ky(s){return s.replace(lA,Fb).replace(oA,cA)}function cA(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Fb(s,e,t,n)}function Fb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $y(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Dl&&(e="SHADOWMAP_TYPE_VSM"),e}function uA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pu:case mu:e="ENVMAP_TYPE_CUBE";break;case ic:case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mu:case gu:e="ENVMAP_MODE_REFRACTION";break}return e}function fA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case mw:e="ENVMAP_BLENDING_MIX";break;case gw:e="ENVMAP_BLENDING_ADD";break}return e}function pA(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,h=hA(t),c=uA(t),m=dA(t),d=fA(t),f=s.gammaFactor>0?s.gammaFactor:1,g=t.isWebGL2?"":nA(t),y=iA(r),M=i.createProgram(),S,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=[y].filter(dh).join(`
`),S.length>0&&(S+=`
`),_=[g,y].filter(dh).join(`
`),_.length>0&&(_+=`
`)):(S=[$y(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dh).join(`
`),_=[g,$y(t),"#define SHADER_NAME "+t.shaderName,y,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+m:"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fo?"#define TONE_MAPPING":"",t.toneMapping!==fo?It.tonemapping_pars_fragment:"",t.toneMapping!==fo?tA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",It.encodings_pars_fragment,t.map?rh("mapTexelToLinear",t.mapEncoding):"",t.matcap?rh("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?rh("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?rh("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?rh("lightMapTexelToLinear",t.lightMapEncoding):"",eA("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dh).join(`
`)),a=A0(a),a=Zy(a,t),a=Jy(a,t),l=A0(l),l=Zy(l,t),l=Jy(l,t),a=Ky(a),l=Ky(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,S=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===S0?"":"out highp vec4 pc_fragColor;",t.glslVersion===S0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let A=x+S+a,N=x+_+l,O=Yy(i,35633,A),C=Yy(i,35632,N);if(i.attachShader(M,O),i.attachShader(M,C),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M),s.debug.checkShaderErrors){let te=i.getProgramInfoLog(M).trim(),se=i.getShaderInfoLog(O).trim(),we=i.getShaderInfoLog(C).trim(),ce=!0,Z=!0;if(i.getProgramParameter(M,35714)===!1){ce=!1;let ne=jy(i,O,"vertex"),ie=jy(i,C,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(M,35715),"gl.getProgramInfoLog",te,ne,ie)}else te!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",te):(se===""||we==="")&&(Z=!1);Z&&(this.diagnostics={runnable:ce,programLog:te,vertexShader:{log:se,prefix:S},fragmentShader:{log:we,prefix:_}})}i.deleteShader(O),i.deleteShader(C);let q;this.getUniforms=function(){return q===void 0&&(q=new va(i,M)),q};let X;return this.getAttributes=function(){return X===void 0&&(X=rA(i,M)),X},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.name=t.shaderName,this.id=$3++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=C,this}function mA(s,e,t,n,i,r){let a=[],l=n.isWebGL2,h=n.logarithmicDepthBuffer,c=n.floatVertexTextures,m=n.maxVertexUniforms,d=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},y=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function M(C){let X=C.skeleton.bones;if(c)return 1024;{let se=Math.floor((m-20)/4),we=Math.min(se,X.length);return we<X.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+X.length+" bones. This GPU supports "+we+"."),0):we}}function S(C){let q;return C&&C.isTexture?q=C.encoding:C&&C.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),q=C.texture.encoding):q=Ei,q}function _(C,q,X,te,se){let we=te.fog,ce=C.isMeshStandardMaterial?te.environment:null,Z=e.get(C.envMap||ce),ne=g[C.type],ie=se.isSkinnedMesh?M(se):0;C.precision!==null&&(f=n.getMaxPrecision(C.precision),f!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",f,"instead."));let j,Le;if(ne){let et=Dr[ne];j=et.vertexShader,Le=et.fragmentShader}else j=C.vertexShader,Le=C.fragmentShader;let Oe=s.getRenderTarget();return{isWebGL2:l,shaderID:ne,shaderName:C.type,vertexShader:j,fragmentShader:Le,defines:C.defines,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:f,instancing:se.isInstancedMesh===!0,instancingColor:se.isInstancedMesh===!0&&se.instanceColor!==null,supportsVertexTextures:d,outputEncoding:Oe!==null?S(Oe.texture):s.outputEncoding,map:!!C.map,mapEncoding:S(C.map),matcap:!!C.matcap,matcapEncoding:S(C.matcap),envMap:!!Z,envMapMode:Z&&Z.mapping,envMapEncoding:S(Z),envMapCubeUV:!!Z&&(Z.mapping===ic||Z.mapping===gu),lightMap:!!C.lightMap,lightMapEncoding:S(C.lightMap),aoMap:!!C.aoMap,emissiveMap:!!C.emissiveMap,emissiveMapEncoding:S(C.emissiveMap),bumpMap:!!C.bumpMap,normalMap:!!C.normalMap,objectSpaceNormalMap:C.normalMapType===bb,tangentSpaceNormalMap:C.normalMapType===Fo,clearcoatMap:!!C.clearcoatMap,clearcoatRoughnessMap:!!C.clearcoatRoughnessMap,clearcoatNormalMap:!!C.clearcoatNormalMap,displacementMap:!!C.displacementMap,roughnessMap:!!C.roughnessMap,metalnessMap:!!C.metalnessMap,specularMap:!!C.specularMap,alphaMap:!!C.alphaMap,gradientMap:!!C.gradientMap,sheen:!!C.sheen,transmissionMap:!!C.transmissionMap,combine:C.combine,vertexTangents:C.normalMap&&C.vertexTangents,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&se.geometry&&se.geometry.attributes.color&&se.geometry.attributes.color.itemSize===4,vertexUvs:!!C.map||!!C.bumpMap||!!C.normalMap||!!C.specularMap||!!C.alphaMap||!!C.emissiveMap||!!C.roughnessMap||!!C.metalnessMap||!!C.clearcoatMap||!!C.clearcoatRoughnessMap||!!C.clearcoatNormalMap||!!C.displacementMap||!!C.transmissionMap,uvsVertexOnly:!(C.map||C.bumpMap||C.normalMap||C.specularMap||C.alphaMap||C.emissiveMap||C.roughnessMap||C.metalnessMap||C.clearcoatNormalMap||C.transmissionMap)&&!!C.displacementMap,fog:!!we,useFog:C.fog,fogExp2:we&&we.isFogExp2,flatShading:!!C.flatShading,sizeAttenuation:C.sizeAttenuation,logarithmicDepthBuffer:h,skinning:C.skinning&&ie>0,maxBones:ie,useVertexTexture:c,morphTargets:C.morphTargets,morphNormals:C.morphNormals,numDirLights:q.directional.length,numPointLights:q.point.length,numSpotLights:q.spot.length,numRectAreaLights:q.rectArea.length,numHemiLights:q.hemi.length,numDirLightShadows:q.directionalShadowMap.length,numPointLightShadows:q.pointShadowMap.length,numSpotLightShadows:q.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:C.toneMapped?s.toneMapping:fo,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:C.premultipliedAlpha,alphaTest:C.alphaTest,doubleSided:C.side===ri,flipSided:C.side===xn,depthPacking:C.depthPacking!==void 0?C.depthPacking:!1,index0AttributeName:C.index0AttributeName,extensionDerivatives:C.extensions&&C.extensions.derivatives,extensionFragDepth:C.extensions&&C.extensions.fragDepth,extensionDrawBuffers:C.extensions&&C.extensions.drawBuffers,extensionShaderTextureLOD:C.extensions&&C.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||t.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function x(C){let q=[];if(C.shaderID?q.push(C.shaderID):(q.push(C.fragmentShader),q.push(C.vertexShader)),C.defines!==void 0)for(let X in C.defines)q.push(X),q.push(C.defines[X]);if(C.isRawShaderMaterial===!1){for(let X=0;X<y.length;X++)q.push(C[y[X]]);q.push(s.outputEncoding),q.push(s.gammaFactor)}return q.push(C.customProgramCacheKey),q.join()}function A(C){let q=g[C.type],X;if(q){let te=Dr[q];X=Ab.clone(te.uniforms)}else X=C.uniforms;return X}function N(C,q){let X;for(let te=0,se=a.length;te<se;te++){let we=a[te];if(we.cacheKey===q){X=we,++X.usedTimes;break}}return X===void 0&&(X=new pA(s,q,C,i),a.push(X)),X}function O(C){if(--C.usedTimes===0){let q=a.indexOf(C);a[q]=a[a.length-1],a.pop(),C.destroy()}}return{getParameters:_,getProgramCacheKey:x,getUniforms:A,acquireProgram:N,releaseProgram:O,programs:a}}function gA(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,l){s.get(r)[a]=l}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function vA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qy(s){let e=[],t=0,n=[],i=[],r={id:-1};function a(){t=0,n.length=0,i.length=0}function l(f,g,y,M,S,_){let x=e[t],A=s.get(y);return x===void 0?(x={id:f.id,object:f,geometry:g,material:y,program:A.program||r,groupOrder:M,renderOrder:f.renderOrder,z:S,group:_},e[t]=x):(x.id=f.id,x.object=f,x.geometry=g,x.material=y,x.program=A.program||r,x.groupOrder=M,x.renderOrder=f.renderOrder,x.z=S,x.group=_),t++,x}function h(f,g,y,M,S,_){let x=l(f,g,y,M,S,_);(y.transparent===!0?i:n).push(x)}function c(f,g,y,M,S,_){let x=l(f,g,y,M,S,_);(y.transparent===!0?i:n).unshift(x)}function m(f,g){n.length>1&&n.sort(f||vA),i.length>1&&i.sort(g||yA)}function d(){for(let f=t,g=e.length;f<g;f++){let y=e[f];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.program=null,y.group=null}}return{opaque:n,transparent:i,init:a,push:h,unshift:c,finish:d,sort:m}}function xA(s){let e=new WeakMap;function t(i,r){let a;return e.has(i)===!1?(a=new Qy(s),e.set(i,[a])):r>=e.get(i).length?(a=new Qy(s),e.get(i).push(a)):a=e.get(i)[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function wA(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function bA(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var _A=0;function MA(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function EA(s,e){let t=new wA,n=bA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let m=0;m<9;m++)i.probe.push(new L);let r=new L,a=new st,l=new st;function h(m){let d=0,f=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let y=0,M=0,S=0,_=0,x=0,A=0,N=0,O=0;m.sort(MA);for(let q=0,X=m.length;q<X;q++){let te=m[q],se=te.color,we=te.intensity,ce=te.distance,Z=te.shadow&&te.shadow.map?te.shadow.map.texture:null;if(te.isAmbientLight)d+=se.r*we,f+=se.g*we,g+=se.b*we;else if(te.isLightProbe)for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(te.sh.coefficients[ne],we);else if(te.isDirectionalLight){let ne=t.get(te);if(ne.color.copy(te.color).multiplyScalar(te.intensity),te.castShadow){let ie=te.shadow,j=n.get(te);j.shadowBias=ie.bias,j.shadowNormalBias=ie.normalBias,j.shadowRadius=ie.radius,j.shadowMapSize=ie.mapSize,i.directionalShadow[y]=j,i.directionalShadowMap[y]=Z,i.directionalShadowMatrix[y]=te.shadow.matrix,A++}i.directional[y]=ne,y++}else if(te.isSpotLight){let ne=t.get(te);if(ne.position.setFromMatrixPosition(te.matrixWorld),ne.color.copy(se).multiplyScalar(we),ne.distance=ce,ne.coneCos=Math.cos(te.angle),ne.penumbraCos=Math.cos(te.angle*(1-te.penumbra)),ne.decay=te.decay,te.castShadow){let ie=te.shadow,j=n.get(te);j.shadowBias=ie.bias,j.shadowNormalBias=ie.normalBias,j.shadowRadius=ie.radius,j.shadowMapSize=ie.mapSize,i.spotShadow[S]=j,i.spotShadowMap[S]=Z,i.spotShadowMatrix[S]=te.shadow.matrix,O++}i.spot[S]=ne,S++}else if(te.isRectAreaLight){let ne=t.get(te);ne.color.copy(se).multiplyScalar(we),ne.halfWidth.set(te.width*.5,0,0),ne.halfHeight.set(0,te.height*.5,0),i.rectArea[_]=ne,_++}else if(te.isPointLight){let ne=t.get(te);if(ne.color.copy(te.color).multiplyScalar(te.intensity),ne.distance=te.distance,ne.decay=te.decay,te.castShadow){let ie=te.shadow,j=n.get(te);j.shadowBias=ie.bias,j.shadowNormalBias=ie.normalBias,j.shadowRadius=ie.radius,j.shadowMapSize=ie.mapSize,j.shadowCameraNear=ie.camera.near,j.shadowCameraFar=ie.camera.far,i.pointShadow[M]=j,i.pointShadowMap[M]=Z,i.pointShadowMatrix[M]=te.shadow.matrix,N++}i.point[M]=ne,M++}else if(te.isHemisphereLight){let ne=t.get(te);ne.skyColor.copy(te.color).multiplyScalar(we),ne.groundColor.copy(te.groundColor).multiplyScalar(we),i.hemi[x]=ne,x++}}_>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=je.LTC_FLOAT_1,i.rectAreaLTC2=je.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=je.LTC_HALF_1,i.rectAreaLTC2=je.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let C=i.hash;(C.directionalLength!==y||C.pointLength!==M||C.spotLength!==S||C.rectAreaLength!==_||C.hemiLength!==x||C.numDirectionalShadows!==A||C.numPointShadows!==N||C.numSpotShadows!==O)&&(i.directional.length=y,i.spot.length=S,i.rectArea.length=_,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=O,i.spotShadowMap.length=O,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=N,i.spotShadowMatrix.length=O,C.directionalLength=y,C.pointLength=M,C.spotLength=S,C.rectAreaLength=_,C.hemiLength=x,C.numDirectionalShadows=A,C.numPointShadows=N,C.numSpotShadows=O,i.version=_A++)}function c(m,d){let f=0,g=0,y=0,M=0,S=0,_=d.matrixWorldInverse;for(let x=0,A=m.length;x<A;x++){let N=m[x];if(N.isDirectionalLight){let O=i.directional[f];O.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(_),f++}else if(N.isSpotLight){let O=i.spot[y];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(_),O.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(_),y++}else if(N.isRectAreaLight){let O=i.rectArea[M];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(_),l.identity(),a.copy(N.matrixWorld),a.premultiply(_),l.extractRotation(a),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(l),O.halfHeight.applyMatrix4(l),M++}else if(N.isPointLight){let O=i.point[g];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(_),g++}else if(N.isHemisphereLight){let O=i.hemi[S];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(_),O.direction.normalize(),S++}}}return{setup:h,setupView:c,state:i}}function ex(s,e){let t=new EA(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function l(d){i.push(d)}function h(){t.setup(n)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:h,setupLightsView:c,pushLight:a,pushShadow:l}}function SA(s,e){let t=new WeakMap;function n(r,a=0){let l;return t.has(r)===!1?(l=new ex(s,e),t.set(r,[l])):a>=t.get(r).length?(l=new ex(s,e),t.get(r).push(l)):l=t.get(r)[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var Wl=class extends Vn{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=xb,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Wl.prototype.isMeshDepthMaterial=!0;var ql=class extends Vn{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ql.prototype.isMeshDistanceMaterial=!0;var TA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Nb(s,e,t){let n=new Ns,i=new _e,r=new _e,a=new Lt,l=[],h=[],c={},m=t.maxTextureSize,d={0:xn,1:tc,2:ri},f=new mn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:AA,fragmentShader:TA}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let y=new it;y.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new wt(y,f),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rg,this.render=function(C,q,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||C.length===0)return;let te=s.getRenderTarget(),se=s.getActiveCubeFace(),we=s.getActiveMipmapLevel(),ce=s.state;ce.setBlending(Is),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);for(let Z=0,ne=C.length;Z<ne;Z++){let ie=C[Z],j=ie.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);let Le=j.getFrameExtents();if(i.multiply(Le),r.copy(j.mapSize),(i.x>m||i.y>m)&&(i.x>m&&(r.x=Math.floor(m/Le.x),i.x=r.x*Le.x,j.mapSize.x=r.x),i.y>m&&(r.y=Math.floor(m/Le.y),i.y=r.y*Le.y,j.mapSize.y=r.y)),j.map===null&&!j.isPointLightShadow&&this.type===Dl){let ke={minFilter:qt,magFilter:qt,format:oi};j.map=new Cn(i.x,i.y,ke),j.map.texture.name=ie.name+".shadowMap",j.mapPass=new Cn(i.x,i.y,ke),j.camera.updateProjectionMatrix()}if(j.map===null){let ke={minFilter:Ln,magFilter:Ln,format:oi};j.map=new Cn(i.x,i.y,ke),j.map.texture.name=ie.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();let Oe=j.getViewportCount();for(let ke=0;ke<Oe;ke++){let et=j.getViewport(ke);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),ce.viewport(a),j.updateMatrices(ie,ke),n=j.getFrustum(),O(q,X,j.camera,ie,this.type)}!j.isPointLightShadow&&this.type===Dl&&_(j,X),j.needsUpdate=!1}S.needsUpdate=!1,s.setRenderTarget(te,se,we)};function _(C,q){let X=e.update(M);f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(q,null,X,f,M,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(q,null,X,g,M,null)}function x(C,q,X){let te=C<<0|q<<1|X<<2,se=l[te];return se===void 0&&(se=new Wl({depthPacking:wb,morphTargets:C,skinning:q}),l[te]=se),se}function A(C,q,X){let te=C<<0|q<<1|X<<2,se=h[te];return se===void 0&&(se=new ql({morphTargets:C,skinning:q}),h[te]=se),se}function N(C,q,X,te,se,we,ce){let Z=null,ne=x,ie=C.customDepthMaterial;if(te.isPointLight===!0&&(ne=A,ie=C.customDistanceMaterial),ie===void 0){let j=!1;X.morphTargets===!0&&(j=q.morphAttributes&&q.morphAttributes.position&&q.morphAttributes.position.length>0);let Le=!1;C.isSkinnedMesh===!0&&(X.skinning===!0?Le=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",C));let Oe=C.isInstancedMesh===!0;Z=ne(j,Le,Oe)}else Z=ie;if(s.localClippingEnabled&&X.clipShadows===!0&&X.clippingPlanes.length!==0){let j=Z.uuid,Le=X.uuid,Oe=c[j];Oe===void 0&&(Oe={},c[j]=Oe);let ke=Oe[Le];ke===void 0&&(ke=Z.clone(),Oe[Le]=ke),Z=ke}return Z.visible=X.visible,Z.wireframe=X.wireframe,ce===Dl?Z.side=X.shadowSide!==null?X.shadowSide:X.side:Z.side=X.shadowSide!==null?X.shadowSide:d[X.side],Z.clipShadows=X.clipShadows,Z.clippingPlanes=X.clippingPlanes,Z.clipIntersection=X.clipIntersection,Z.wireframeLinewidth=X.wireframeLinewidth,Z.linewidth=X.linewidth,te.isPointLight===!0&&Z.isMeshDistanceMaterial===!0&&(Z.referencePosition.setFromMatrixPosition(te.matrixWorld),Z.nearDistance=se,Z.farDistance=we),Z}function O(C,q,X,te,se){if(C.visible===!1)return;if(C.layers.test(q.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&se===Dl)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld);let Z=e.update(C),ne=C.material;if(Array.isArray(ne)){let ie=Z.groups;for(let j=0,Le=ie.length;j<Le;j++){let Oe=ie[j],ke=ne[Oe.materialIndex];if(ke&&ke.visible){let et=N(C,Z,ke,te,X.near,X.far,se);s.renderBufferDirect(X,null,Z,et,C,Oe)}}}else if(ne.visible){let ie=N(C,Z,ne,te,X.near,X.far,se);s.renderBufferDirect(X,null,Z,ie,C,null)}}let ce=C.children;for(let Z=0,ne=ce.length;Z<ne;Z++)O(ce[Z],q,X,te,se)}}function RA(s,e,t){let n=t.isWebGL2;function i(){let K=!1,Ne=new Lt,We=null,ot=new Lt(0,0,0,0);return{setMask:function(Me){We!==Me&&!K&&(s.colorMask(Me,Me,Me,Me),We=Me)},setLocked:function(Me){K=Me},setClear:function(Me,dt,Ht,bn,Jn){Jn===!0&&(Me*=bn,dt*=bn,Ht*=bn),Ne.set(Me,dt,Ht,bn),ot.equals(Ne)===!1&&(s.clearColor(Me,dt,Ht,bn),ot.copy(Ne))},reset:function(){K=!1,We=null,ot.set(-1,0,0,0)}}}function r(){let K=!1,Ne=null,We=null,ot=null;return{setTest:function(Me){Me?ht(2929):gt(2929)},setMask:function(Me){Ne!==Me&&!K&&(s.depthMask(Me),Ne=Me)},setFunc:function(Me){if(We!==Me){if(Me)switch(Me){case lw:s.depthFunc(512);break;case cw:s.depthFunc(519);break;case hw:s.depthFunc(513);break;case tf:s.depthFunc(515);break;case uw:s.depthFunc(514);break;case dw:s.depthFunc(518);break;case fw:s.depthFunc(516);break;case pw:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);We=Me}},setLocked:function(Me){K=Me},setClear:function(Me){ot!==Me&&(s.clearDepth(Me),ot=Me)},reset:function(){K=!1,Ne=null,We=null,ot=null}}}function a(){let K=!1,Ne=null,We=null,ot=null,Me=null,dt=null,Ht=null,bn=null,Jn=null;return{setTest:function(W){K||(W?ht(2960):gt(2960))},setMask:function(W){Ne!==W&&!K&&(s.stencilMask(W),Ne=W)},setFunc:function(W,un,ci){(We!==W||ot!==un||Me!==ci)&&(s.stencilFunc(W,un,ci),We=W,ot=un,Me=ci)},setOp:function(W,un,ci){(dt!==W||Ht!==un||bn!==ci)&&(s.stencilOp(W,un,ci),dt=W,Ht=un,bn=ci)},setLocked:function(W){K=W},setClear:function(W){Jn!==W&&(s.clearStencil(W),Jn=W)},reset:function(){K=!1,Ne=null,We=null,ot=null,Me=null,dt=null,Ht=null,bn=null,Jn=null}}}let l=new i,h=new r,c=new a,m={},d=null,f={},g=null,y=!1,M=null,S=null,_=null,x=null,A=null,N=null,O=null,C=!1,q=null,X=null,te=null,se=null,we=null,ce=s.getParameter(35661),Z=!1,ne=0,ie=s.getParameter(7938);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Z=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Z=ne>=2);let j=null,Le={},Oe=new Lt(0,0,s.canvas.width,s.canvas.height),ke=new Lt(0,0,s.canvas.width,s.canvas.height);function et(K,Ne,We){let ot=new Uint8Array(4),Me=s.createTexture();s.bindTexture(K,Me),s.texParameteri(K,10241,9728),s.texParameteri(K,10240,9728);for(let dt=0;dt<We;dt++)s.texImage2D(Ne+dt,0,6408,1,1,0,6408,5121,ot);return Me}let ze={};ze[3553]=et(3553,3553,1),ze[34067]=et(34067,34069,6),l.setClear(0,0,0,1),h.setClear(1),c.setClear(0),ht(2929),h.setFunc(tf),St(!1),Ie(h0),ht(2884),Gt(Is);function ht(K){m[K]!==!0&&(s.enable(K),m[K]=!0)}function gt(K){m[K]!==!1&&(s.disable(K),m[K]=!1)}function xe(K){K!==d&&(s.bindFramebuffer(36160,K),d=K)}function Kt(K,Ne){Ne===null&&d!==null&&(Ne=d),f[K]!==Ne&&(s.bindFramebuffer(K,Ne),f[K]=Ne,n&&(K===36009&&(f[36160]=Ne),K===36160&&(f[36009]=Ne)))}function Ct(K){return g!==K?(s.useProgram(K),g=K,!0):!1}let xt={[co]:32774,[$x]:32778,[Qx]:32779};if(n)xt[f0]=32775,xt[p0]=32776;else{let K=e.get("EXT_blend_minmax");K!==null&&(xt[f0]=K.MIN_EXT,xt[p0]=K.MAX_EXT)}let ut={[ew]:0,[du]:1,[tw]:768,[ag]:770,[ow]:776,[sw]:774,[iw]:772,[nw]:769,[nc]:771,[aw]:775,[rw]:773};function Gt(K,Ne,We,ot,Me,dt,Ht,bn){if(K===Is){y===!0&&(gt(3042),y=!1);return}if(y===!1&&(ht(3042),y=!0),K!==$f){if(K!==M||bn!==C){if((S!==co||A!==co)&&(s.blendEquation(32774),S=co,A=co),bn)switch(K){case kl:s.blendFuncSeparate(1,771,1,771);break;case Ut:s.blendFunc(1,1);break;case u0:s.blendFuncSeparate(0,0,769,771);break;case d0:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case kl:s.blendFuncSeparate(770,771,1,771);break;case Ut:s.blendFunc(770,1);break;case u0:s.blendFunc(0,769);break;case d0:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}_=null,x=null,N=null,O=null,M=K,C=bn}return}Me=Me||Ne,dt=dt||We,Ht=Ht||ot,(Ne!==S||Me!==A)&&(s.blendEquationSeparate(xt[Ne],xt[Me]),S=Ne,A=Me),(We!==_||ot!==x||dt!==N||Ht!==O)&&(s.blendFuncSeparate(ut[We],ut[ot],ut[dt],ut[Ht]),_=We,x=ot,N=dt,O=Ht),M=K,C=null}function Rt(K,Ne){K.side===ri?gt(2884):ht(2884);let We=K.side===xn;Ne&&(We=!We),St(We),K.blending===kl&&K.transparent===!1?Gt(Is):Gt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.premultipliedAlpha),h.setFunc(K.depthFunc),h.setTest(K.depthTest),h.setMask(K.depthWrite),l.setMask(K.colorWrite);let ot=K.stencilWrite;c.setTest(ot),ot&&(c.setMask(K.stencilWriteMask),c.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),c.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),qe(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ht(32926):gt(32926)}function St(K){q!==K&&(K?s.frontFace(2304):s.frontFace(2305),q=K)}function Ie(K){K!==Zx?(ht(2884),K!==X&&(K===h0?s.cullFace(1029):K===Jx?s.cullFace(1028):s.cullFace(1032))):gt(2884),X=K}function Ge(K){K!==te&&(Z&&s.lineWidth(K),te=K)}function qe(K,Ne,We){K?(ht(32823),(se!==Ne||we!==We)&&(s.polygonOffset(Ne,We),se=Ne,we=We)):gt(32823)}function at(K){K?ht(3089):gt(3089)}function Je(K){K===void 0&&(K=33984+ce-1),j!==K&&(s.activeTexture(K),j=K)}function V(K,Ne){j===null&&Je();let We=Le[j];We===void 0&&(We={type:void 0,texture:void 0},Le[j]=We),(We.type!==K||We.texture!==Ne)&&(s.bindTexture(K,Ne||ze[K]),We.type=K,We.texture=Ne)}function B(){let K=Le[j];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function be(){try{s.compressedTexImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Qe(K){Oe.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),Oe.copy(K))}function Nt(K){ke.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),ke.copy(K))}function yt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},j=null,Le={},d=null,f={},g=null,y=!1,M=null,S=null,_=null,x=null,A=null,N=null,O=null,C=!1,q=null,X=null,te=null,se=null,we=null,Oe.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),l.reset(),h.reset(),c.reset()}return{buffers:{color:l,depth:h,stencil:c},enable:ht,disable:gt,bindFramebuffer:Kt,bindXRFramebuffer:xe,useProgram:Ct,setBlending:Gt,setMaterial:Rt,setFlipSided:St,setCullFace:Ie,setLineWidth:Ge,setPolygonOffset:qe,setScissorTest:at,activeTexture:Je,bindTexture:V,unbindTexture:B,compressedTexImage2D:be,texImage2D:ge,texImage3D:De,scissor:Qe,viewport:Nt,reset:yt}}function LA(s,e,t,n,i,r,a){let l=i.isWebGL2,h=i.maxTextures,c=i.maxCubemapSize,m=i.maxTextureSize,d=i.maxSamples,f=new WeakMap,g,y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(V){}function M(V,B){return y?new OffscreenCanvas(V,B):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function S(V,B,be,ge){let De=1;if((V.width>ge||V.height>ge)&&(De=ge/Math.max(V.width,V.height)),De<1||B===!0)if(typeof HTMLImageElement!="undefined"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&V instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&V instanceof ImageBitmap){let Qe=B?Eb:Math.floor,Nt=Qe(De*V.width),yt=Qe(De*V.height);g===void 0&&(g=M(Nt,yt));let K=be?M(Nt,yt):g;return K.width=Nt,K.height=yt,K.getContext("2d").drawImage(V,0,0,Nt,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+Nt+"x"+yt+")."),K}else return"data"in V&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),V;return V}function _(V){return T0(V.width)&&T0(V.height)}function x(V){return l?!1:V.wrapS!==Mi||V.wrapT!==Mi||V.minFilter!==Ln&&V.minFilter!==qt}function A(V,B){return V.generateMipmaps&&B&&V.minFilter!==Ln&&V.minFilter!==qt}function N(V,B,be,ge){s.generateMipmap(V);let De=n.get(B);De.__maxMipLevel=Math.log2(Math.max(be,ge))}function O(V,B,be){if(l===!1)return B;if(V!==null){if(s[V]!==void 0)return s[V];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let ge=B;return B===6403&&(be===5126&&(ge=33326),be===5131&&(ge=33325),be===5121&&(ge=33321)),B===6407&&(be===5126&&(ge=34837),be===5131&&(ge=34843),be===5121&&(ge=32849)),B===6408&&(be===5126&&(ge=34836),be===5131&&(ge=34842),be===5121&&(ge=32856)),(ge===33325||ge===33326||ge===34842||ge===34836)&&e.get("EXT_color_buffer_float"),ge}function C(V){return V===Ln||V===sf||V===af?9728:9729}function q(V){let B=V.target;B.removeEventListener("dispose",q),te(B),B.isVideoTexture&&f.delete(B),a.memory.textures--}function X(V){let B=V.target;B.removeEventListener("dispose",X),se(B),a.memory.textures--}function te(V){let B=n.get(V);B.__webglInit!==void 0&&(s.deleteTexture(B.__webglTexture),n.remove(V))}function se(V){let B=V.texture,be=n.get(V),ge=n.get(B);if(V){if(ge.__webglTexture!==void 0&&s.deleteTexture(ge.__webglTexture),V.depthTexture&&V.depthTexture.dispose(),V.isWebGLCubeRenderTarget)for(let De=0;De<6;De++)s.deleteFramebuffer(be.__webglFramebuffer[De]),be.__webglDepthbuffer&&s.deleteRenderbuffer(be.__webglDepthbuffer[De]);else s.deleteFramebuffer(be.__webglFramebuffer),be.__webglDepthbuffer&&s.deleteRenderbuffer(be.__webglDepthbuffer),be.__webglMultisampledFramebuffer&&s.deleteFramebuffer(be.__webglMultisampledFramebuffer),be.__webglColorRenderbuffer&&s.deleteRenderbuffer(be.__webglColorRenderbuffer),be.__webglDepthRenderbuffer&&s.deleteRenderbuffer(be.__webglDepthRenderbuffer);n.remove(B),n.remove(V)}}let we=0;function ce(){we=0}function Z(){let V=we;return V>=h&&console.warn("THREE.WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+h),we+=1,V}function ne(V,B){let be=n.get(V);if(V.isVideoTexture&&Ie(V),V.version>0&&be.__version!==V.version){let ge=V.image;if(ge===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(be,V,B);return}}t.activeTexture(33984+B),t.bindTexture(3553,be.__webglTexture)}function ie(V,B){let be=n.get(V);if(V.version>0&&be.__version!==V.version){ht(be,V,B);return}t.activeTexture(33984+B),t.bindTexture(35866,be.__webglTexture)}function j(V,B){let be=n.get(V);if(V.version>0&&be.__version!==V.version){ht(be,V,B);return}t.activeTexture(33984+B),t.bindTexture(32879,be.__webglTexture)}function Le(V,B){let be=n.get(V);if(V.version>0&&be.__version!==V.version){gt(be,V,B);return}t.activeTexture(33984+B),t.bindTexture(34067,be.__webglTexture)}let Oe={[go]:10497,[Mi]:33071,[yh]:33648},ke={[Ln]:9728,[sf]:9984,[af]:9986,[qt]:9729,[og]:9985,[La]:9987};function et(V,B,be){if(be?(s.texParameteri(V,10242,Oe[B.wrapS]),s.texParameteri(V,10243,Oe[B.wrapT]),(V===32879||V===35866)&&s.texParameteri(V,32882,Oe[B.wrapR]),s.texParameteri(V,10240,ke[B.magFilter]),s.texParameteri(V,10241,ke[B.minFilter])):(s.texParameteri(V,10242,33071),s.texParameteri(V,10243,33071),(V===32879||V===35866)&&s.texParameteri(V,32882,33071),(B.wrapS!==Mi||B.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(V,10240,C(B.magFilter)),s.texParameteri(V,10241,C(B.minFilter)),B.minFilter!==Ln&&B.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(B.type===Ds&&e.has("OES_texture_float_linear")===!1||l===!1&&B.type===vo&&e.has("OES_texture_half_float_linear")===!1)return;(B.anisotropy>1||n.get(B).__currentAnisotropy)&&(s.texParameterf(V,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,i.getMaxAnisotropy())),n.get(B).__currentAnisotropy=B.anisotropy)}}function ze(V,B){V.__webglInit===void 0&&(V.__webglInit=!0,B.addEventListener("dispose",q),V.__webglTexture=s.createTexture(),a.memory.textures++)}function ht(V,B,be){let ge=3553;B.isDataTexture2DArray&&(ge=35866),B.isDataTexture3D&&(ge=32879),ze(V,B),t.activeTexture(33984+be),t.bindTexture(ge,V.__webglTexture),s.pixelStorei(37440,B.flipY),s.pixelStorei(37441,B.premultiplyAlpha),s.pixelStorei(3317,B.unpackAlignment),s.pixelStorei(37443,0);let De=x(B)&&_(B.image)===!1,Qe=S(B.image,De,!1,m),Nt=_(Qe)||l,yt=r.convert(B.format),K=r.convert(B.type),Ne=O(B.internalFormat,yt,K);et(ge,B,Nt);let We,ot=B.mipmaps;if(B.isDepthTexture)Ne=6402,l?B.type===Ds?Ne=36012:B.type===fh?Ne=33190:B.type===Fl?Ne=35056:Ne=33189:B.type===Ds&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),B.format===po&&Ne===6402&&B.type!==wh&&B.type!==fh&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),B.type=wh,K=r.convert(B.type)),B.format===Hl&&Ne===6402&&(Ne=34041,B.type!==Fl&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),B.type=Fl,K=r.convert(B.type))),t.texImage2D(3553,0,Ne,Qe.width,Qe.height,0,yt,K,null);else if(B.isDataTexture)if(ot.length>0&&Nt){for(let Me=0,dt=ot.length;Me<dt;Me++)We=ot[Me],t.texImage2D(3553,Me,Ne,We.width,We.height,0,yt,K,We.data);B.generateMipmaps=!1,V.__maxMipLevel=ot.length-1}else t.texImage2D(3553,0,Ne,Qe.width,Qe.height,0,yt,K,Qe.data),V.__maxMipLevel=0;else if(B.isCompressedTexture){for(let Me=0,dt=ot.length;Me<dt;Me++)We=ot[Me],B.format!==oi&&B.format!==ga?yt!==null?t.compressedTexImage2D(3553,Me,Ne,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,Me,Ne,We.width,We.height,0,yt,K,We.data);V.__maxMipLevel=ot.length-1}else if(B.isDataTexture2DArray)t.texImage3D(35866,0,Ne,Qe.width,Qe.height,Qe.depth,0,yt,K,Qe.data),V.__maxMipLevel=0;else if(B.isDataTexture3D)t.texImage3D(32879,0,Ne,Qe.width,Qe.height,Qe.depth,0,yt,K,Qe.data),V.__maxMipLevel=0;else if(ot.length>0&&Nt){for(let Me=0,dt=ot.length;Me<dt;Me++)We=ot[Me],t.texImage2D(3553,Me,Ne,yt,K,We);B.generateMipmaps=!1,V.__maxMipLevel=ot.length-1}else t.texImage2D(3553,0,Ne,yt,K,Qe),V.__maxMipLevel=0;A(B,Nt)&&N(ge,B,Qe.width,Qe.height),V.__version=B.version,B.onUpdate&&B.onUpdate(B)}function gt(V,B,be){if(B.image.length!==6)return;ze(V,B),t.activeTexture(33984+be),t.bindTexture(34067,V.__webglTexture),s.pixelStorei(37440,B.flipY),s.pixelStorei(37441,B.premultiplyAlpha),s.pixelStorei(3317,B.unpackAlignment),s.pixelStorei(37443,0);let ge=B&&(B.isCompressedTexture||B.image[0].isCompressedTexture),De=B.image[0]&&B.image[0].isDataTexture,Qe=[];for(let Me=0;Me<6;Me++)!ge&&!De?Qe[Me]=S(B.image[Me],!1,!0,c):Qe[Me]=De?B.image[Me].image:B.image[Me];let Nt=Qe[0],yt=_(Nt)||l,K=r.convert(B.format),Ne=r.convert(B.type),We=O(B.internalFormat,K,Ne);et(34067,B,yt);let ot;if(ge){for(let Me=0;Me<6;Me++){ot=Qe[Me].mipmaps;for(let dt=0;dt<ot.length;dt++){let Ht=ot[dt];B.format!==oi&&B.format!==ga?K!==null?t.compressedTexImage2D(34069+Me,dt,We,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+Me,dt,We,Ht.width,Ht.height,0,K,Ne,Ht.data)}}V.__maxMipLevel=ot.length-1}else{ot=B.mipmaps;for(let Me=0;Me<6;Me++)if(De){t.texImage2D(34069+Me,0,We,Qe[Me].width,Qe[Me].height,0,K,Ne,Qe[Me].data);for(let dt=0;dt<ot.length;dt++){let bn=ot[dt].image[Me].image;t.texImage2D(34069+Me,dt+1,We,bn.width,bn.height,0,K,Ne,bn.data)}}else{t.texImage2D(34069+Me,0,We,K,Ne,Qe[Me]);for(let dt=0;dt<ot.length;dt++){let Ht=ot[dt];t.texImage2D(34069+Me,dt+1,We,K,Ne,Ht.image[Me])}}V.__maxMipLevel=ot.length}A(B,yt)&&N(34067,B,Nt.width,Nt.height),V.__version=B.version,B.onUpdate&&B.onUpdate(B)}function xe(V,B,be,ge){let De=B.texture,Qe=r.convert(De.format),Nt=r.convert(De.type),yt=O(De.internalFormat,Qe,Nt);ge===32879||ge===35866?t.texImage3D(ge,0,yt,B.width,B.height,B.depth,0,Qe,Nt,null):t.texImage2D(ge,0,yt,B.width,B.height,0,Qe,Nt,null),t.bindFramebuffer(36160,V),s.framebufferTexture2D(36160,be,ge,n.get(De).__webglTexture,0),t.bindFramebuffer(36160,null)}function Kt(V,B,be){if(s.bindRenderbuffer(36161,V),B.depthBuffer&&!B.stencilBuffer){let ge=33189;if(be){let De=B.depthTexture;De&&De.isDepthTexture&&(De.type===Ds?ge=36012:De.type===fh&&(ge=33190));let Qe=St(B);s.renderbufferStorageMultisample(36161,Qe,ge,B.width,B.height)}else s.renderbufferStorage(36161,ge,B.width,B.height);s.framebufferRenderbuffer(36160,36096,36161,V)}else if(B.depthBuffer&&B.stencilBuffer){if(be){let ge=St(B);s.renderbufferStorageMultisample(36161,ge,35056,B.width,B.height)}else s.renderbufferStorage(36161,34041,B.width,B.height);s.framebufferRenderbuffer(36160,33306,36161,V)}else{let ge=B.texture,De=r.convert(ge.format),Qe=r.convert(ge.type),Nt=O(ge.internalFormat,De,Qe);if(be){let yt=St(B);s.renderbufferStorageMultisample(36161,yt,Nt,B.width,B.height)}else s.renderbufferStorage(36161,Nt,B.width,B.height)}s.bindRenderbuffer(36161,null)}function Ct(V,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,V),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(B.depthTexture).__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),ne(B.depthTexture,0);let ge=n.get(B.depthTexture).__webglTexture;if(B.depthTexture.format===po)s.framebufferTexture2D(36160,36096,3553,ge,0);else if(B.depthTexture.format===Hl)s.framebufferTexture2D(36160,33306,3553,ge,0);else throw new Error("Unknown depthTexture format")}function xt(V){let B=n.get(V),be=V.isWebGLCubeRenderTarget===!0;if(V.depthTexture){if(be)throw new Error("target.depthTexture not supported in Cube render targets");Ct(B.__webglFramebuffer,V)}else if(be){B.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(36160,B.__webglFramebuffer[ge]),B.__webglDepthbuffer[ge]=s.createRenderbuffer(),Kt(B.__webglDepthbuffer[ge],V,!1)}else t.bindFramebuffer(36160,B.__webglFramebuffer),B.__webglDepthbuffer=s.createRenderbuffer(),Kt(B.__webglDepthbuffer,V,!1);t.bindFramebuffer(36160,null)}function ut(V){let B=V.texture,be=n.get(V),ge=n.get(B);V.addEventListener("dispose",X),ge.__webglTexture=s.createTexture(),ge.__version=B.version,a.memory.textures++;let De=V.isWebGLCubeRenderTarget===!0,Qe=V.isWebGLMultisampleRenderTarget===!0,Nt=B.isDataTexture3D||B.isDataTexture2DArray,yt=_(V)||l;if(l&&B.format===ga&&(B.type===Ds||B.type===vo)&&(B.format=oi,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),De){be.__webglFramebuffer=[];for(let K=0;K<6;K++)be.__webglFramebuffer[K]=s.createFramebuffer()}else if(be.__webglFramebuffer=s.createFramebuffer(),Qe)if(l){be.__webglMultisampledFramebuffer=s.createFramebuffer(),be.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,be.__webglColorRenderbuffer);let K=r.convert(B.format),Ne=r.convert(B.type),We=O(B.internalFormat,K,Ne),ot=St(V);s.renderbufferStorageMultisample(36161,ot,We,V.width,V.height),t.bindFramebuffer(36160,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,be.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),V.depthBuffer&&(be.__webglDepthRenderbuffer=s.createRenderbuffer(),Kt(be.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(De){t.bindTexture(34067,ge.__webglTexture),et(34067,B,yt);for(let K=0;K<6;K++)xe(be.__webglFramebuffer[K],V,36064,34069+K);A(B,yt)&&N(34067,B,V.width,V.height),t.bindTexture(34067,null)}else{let K=3553;Nt&&(l?K=B.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(K,ge.__webglTexture),et(K,B,yt),xe(be.__webglFramebuffer,V,36064,K),A(B,yt)&&N(3553,B,V.width,V.height),t.bindTexture(3553,null)}V.depthBuffer&&xt(V)}function Gt(V){let B=V.texture,be=_(V)||l;if(A(B,be)){let ge=V.isWebGLCubeRenderTarget?34067:3553,De=n.get(B).__webglTexture;t.bindTexture(ge,De),N(ge,B,V.width,V.height),t.bindTexture(ge,null)}}function Rt(V){if(V.isWebGLMultisampleRenderTarget)if(l){let B=V.width,be=V.height,ge=16384;V.depthBuffer&&(ge|=256),V.stencilBuffer&&(ge|=1024);let De=n.get(V);t.bindFramebuffer(36008,De.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,De.__webglFramebuffer),s.blitFramebuffer(0,0,B,be,0,0,B,be,ge,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,De.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function St(V){return l&&V.isWebGLMultisampleRenderTarget?Math.min(d,V.samples):0}function Ie(V){let B=a.render.frame;f.get(V)!==B&&(f.set(V,B),V.update())}let Ge=!1,qe=!1;function at(V,B){V&&V.isWebGLRenderTarget&&(Ge===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Ge=!0),V=V.texture),ne(V,B)}function Je(V,B){V&&V.isWebGLCubeRenderTarget&&(qe===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),qe=!0),V=V.texture),Le(V,B)}this.allocateTextureUnit=Z,this.resetTextureUnits=ce,this.setTexture2D=ne,this.setTexture2DArray=ie,this.setTexture3D=j,this.setTextureCube=Le,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Rt,this.safeSetTexture2D=at,this.safeSetTextureCube=Je}function Hb(s,e,t){let n=t.isWebGL2;function i(r){let a;if(r===Ca)return 5121;if(r===Sw)return 32819;if(r===Tw)return 32820;if(r===Aw)return 33635;if(r===_w)return 5120;if(r===Mw)return 5122;if(r===wh)return 5123;if(r===Ew)return 5124;if(r===fh)return 5125;if(r===Ds)return 5126;if(r===vo)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Rw)return 6406;if(r===ga)return 6407;if(r===oi)return 6408;if(r===Lw)return 6409;if(r===Cw)return 6410;if(r===po)return 6402;if(r===Hl)return 34041;if(r===Dw)return 6403;if(r===Iw)return 36244;if(r===kw)return 33319;if(r===Fw)return 33320;if(r===Nw)return 36248;if(r===Hw)return 36249;if(r===m0||r===g0||r===v0||r===y0)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===m0)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===g0)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===v0)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===y0)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===x0||r===w0||r===b0||r===_0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===x0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===w0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===b0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===M0||r===E0)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(r===M0)return a.COMPRESSED_RGB8_ETC2;if(r===E0)return a.COMPRESSED_RGBA8_ETC2_EAC}if(r===Ow||r===zw||r===Uw||r===Gw||r===Vw||r===Ww||r===qw||r===Xw||r===Yw||r===jw||r===Zw||r===Jw||r===Kw||r===$w||r===eb||r===tb||r===nb||r===ib||r===rb||r===sb||r===ab||r===ob||r===lb||r===cb||r===hb||r===ub||r===db||r===fb)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?r:null;if(r===Qw)return a=e.get("EXT_texture_compression_bptc"),a!==null?r:null;if(r===Fl)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var Rh=class extends Rn{constructor(e=[]){super(),this.cameras=e}};Rh.prototype.isArrayCamera=!0;var On=class extends Ft{constructor(){super(),this.type="Group"}};On.prototype.isGroup=!0;var CA={type:"move"},mh=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,l=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(l!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(CA))),c&&e.hand){a=!0;for(let M of e.hand.values()){let S=t.getJointPose(M,n);if(c.joints[M.jointName]===void 0){let x=new On;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[M.jointName]=x,c.add(x)}let _=c.joints[M.jointName];S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=S.radius),_.visible=S!==null}let m=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=m.position.distanceTo(d.position),g=.02,y=.005;c.inputState.pinching&&f>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));return l!==null&&(l.visible=i!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}},R0=class extends Jr{constructor(e,t){super();let n=this,i=e.state,r=null,a=1,l=null,h="local-floor",c=null,m=[],d=new Map,f=new Rn;f.layers.enable(1),f.viewport=new Lt;let g=new Rn;g.layers.enable(2),g.viewport=new Lt;let y=[f,g],M=new Rh;M.layers.enable(1),M.layers.enable(2);let S=null,_=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let Z=m[ce];return Z===void 0&&(Z=new mh,m[ce]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(ce){let Z=m[ce];return Z===void 0&&(Z=new mh,m[ce]=Z),Z.getGripSpace()},this.getHand=function(ce){let Z=m[ce];return Z===void 0&&(Z=new mh,m[ce]=Z),Z.getHandSpace()};function x(ce){let Z=d.get(ce.inputSource);Z&&Z.dispatchEvent({type:ce.type,data:ce.inputSource})}function A(){d.forEach(function(ce,Z){ce.disconnect(Z)}),d.clear(),S=null,_=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),we.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){a=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){h=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l},this.getSession=function(){return r},this.setSession=async function(ce){if(r=ce,r!==null){r.addEventListener("select",x),r.addEventListener("selectstart",x),r.addEventListener("selectend",x),r.addEventListener("squeeze",x),r.addEventListener("squeezestart",x),r.addEventListener("squeezeend",x),r.addEventListener("end",A),r.addEventListener("inputsourceschange",N);let Z=t.getContextAttributes();Z.xrCompatible!==!0&&await t.makeXRCompatible();let ne={antialias:Z.antialias,alpha:Z.alpha,depth:Z.depth,stencil:Z.stencil,framebufferScaleFactor:a},ie=new XRWebGLLayer(r,t,ne);r.updateRenderState({baseLayer:ie}),l=await r.requestReferenceSpace(h),we.setContext(r),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(ce){let Z=r.inputSources;for(let ne=0;ne<m.length;ne++)d.set(Z[ne],m[ne]);for(let ne=0;ne<ce.removed.length;ne++){let ie=ce.removed[ne],j=d.get(ie);j&&(j.dispatchEvent({type:"disconnected",data:ie}),d.delete(ie))}for(let ne=0;ne<ce.added.length;ne++){let ie=ce.added[ne],j=d.get(ie);j&&j.dispatchEvent({type:"connected",data:ie})}}let O=new L,C=new L;function q(ce,Z,ne){O.setFromMatrixPosition(Z.matrixWorld),C.setFromMatrixPosition(ne.matrixWorld);let ie=O.distanceTo(C),j=Z.projectionMatrix.elements,Le=ne.projectionMatrix.elements,Oe=j[14]/(j[10]-1),ke=j[14]/(j[10]+1),et=(j[9]+1)/j[5],ze=(j[9]-1)/j[5],ht=(j[8]-1)/j[0],gt=(Le[8]+1)/Le[0],xe=Oe*ht,Kt=Oe*gt,Ct=ie/(-ht+gt),xt=Ct*-ht;Z.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(xt),ce.translateZ(Ct),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert();let ut=Oe+Ct,Gt=ke+Ct,Rt=xe-xt,St=Kt+(ie-xt),Ie=et*ke/Gt*ut,Ge=ze*ke/Gt*ut;ce.projectionMatrix.makePerspective(Rt,St,Ie,Ge,ut,Gt)}function X(ce,Z){Z===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(Z.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.getCamera=function(ce){M.near=g.near=f.near=ce.near,M.far=g.far=f.far=ce.far,(S!==M.near||_!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,_=M.far);let Z=ce.parent,ne=M.cameras;X(M,Z);for(let j=0;j<ne.length;j++)X(ne[j],Z);ce.matrixWorld.copy(M.matrixWorld),ce.matrix.copy(M.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale);let ie=ce.children;for(let j=0,Le=ie.length;j<Le;j++)ie[j].updateMatrixWorld(!0);return ne.length===2?q(M,f,g):M.projectionMatrix.copy(f.projectionMatrix),M};let te=null;function se(ce,Z){if(c=Z.getViewerPose(l),c!==null){let ie=c.views,j=r.renderState.baseLayer;i.bindXRFramebuffer(j.framebuffer);let Le=!1;ie.length!==M.cameras.length&&(M.cameras.length=0,Le=!0);for(let Oe=0;Oe<ie.length;Oe++){let ke=ie[Oe],et=j.getViewport(ke),ze=y[Oe];ze.matrix.fromArray(ke.transform.matrix),ze.projectionMatrix.fromArray(ke.projectionMatrix),ze.viewport.set(et.x,et.y,et.width,et.height),Oe===0&&M.matrix.copy(ze.matrix),Le===!0&&M.cameras.push(ze)}}let ne=r.inputSources;for(let ie=0;ie<m.length;ie++){let j=m[ie],Le=ne[ie];j.update(Le,Z,l)}te&&te(ce,Z)}let we=new Rb;we.setAnimationLoop(se),this.setAnimationLoop=function(ce){te=ce},this.dispose=function(){}}};function PA(s){function e(_,x){_.fogColor.value.copy(x.color),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function t(_,x,A,N){x.isMeshBasicMaterial?n(_,x):x.isMeshLambertMaterial?(n(_,x),h(_,x)):x.isMeshToonMaterial?(n(_,x),m(_,x)):x.isMeshPhongMaterial?(n(_,x),c(_,x)):x.isMeshStandardMaterial?(n(_,x),x.isMeshPhysicalMaterial?f(_,x):d(_,x)):x.isMeshMatcapMaterial?(n(_,x),g(_,x)):x.isMeshDepthMaterial?(n(_,x),y(_,x)):x.isMeshDistanceMaterial?(n(_,x),M(_,x)):x.isMeshNormalMaterial?(n(_,x),S(_,x)):x.isLineBasicMaterial?(i(_,x),x.isLineDashedMaterial&&r(_,x)):x.isPointsMaterial?a(_,x,A,N):x.isSpriteMaterial?l(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function n(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map),x.alphaMap&&(_.alphaMap.value=x.alphaMap),x.specularMap&&(_.specularMap.value=x.specularMap);let A=s.get(x).envMap;if(A){_.envMap.value=A,_.flipEnvMap.value=A.isCubeTexture&&A._needsFlipEnvMap?-1:1,_.reflectivity.value=x.reflectivity,_.refractionRatio.value=x.refractionRatio;let C=s.get(A).__maxMipLevel;C!==void 0&&(_.maxMipLevel.value=C)}x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity);let N;x.map?N=x.map:x.specularMap?N=x.specularMap:x.displacementMap?N=x.displacementMap:x.normalMap?N=x.normalMap:x.bumpMap?N=x.bumpMap:x.roughnessMap?N=x.roughnessMap:x.metalnessMap?N=x.metalnessMap:x.alphaMap?N=x.alphaMap:x.emissiveMap?N=x.emissiveMap:x.clearcoatMap?N=x.clearcoatMap:x.clearcoatNormalMap?N=x.clearcoatNormalMap:x.clearcoatRoughnessMap&&(N=x.clearcoatRoughnessMap),N!==void 0&&(N.isWebGLRenderTarget&&(N=N.texture),N.matrixAutoUpdate===!0&&N.updateMatrix(),_.uvTransform.value.copy(N.matrix));let O;x.aoMap?O=x.aoMap:x.lightMap&&(O=x.lightMap),O!==void 0&&(O.isWebGLRenderTarget&&(O=O.texture),O.matrixAutoUpdate===!0&&O.updateMatrix(),_.uv2Transform.value.copy(O.matrix))}function i(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity}function r(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function a(_,x,A,N){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*A,_.scale.value=N*.5,x.map&&(_.map.value=x.map),x.alphaMap&&(_.alphaMap.value=x.alphaMap);let O;x.map?O=x.map:x.alphaMap&&(O=x.alphaMap),O!==void 0&&(O.matrixAutoUpdate===!0&&O.updateMatrix(),_.uvTransform.value.copy(O.matrix))}function l(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map),x.alphaMap&&(_.alphaMap.value=x.alphaMap);let A;x.map?A=x.map:x.alphaMap&&(A=x.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),_.uvTransform.value.copy(A.matrix))}function h(_,x){x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap)}function c(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap),x.bumpMap&&(_.bumpMap.value=x.bumpMap,_.bumpScale.value=x.bumpScale,x.side===xn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,_.normalScale.value.copy(x.normalScale),x.side===xn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias)}function m(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap),x.bumpMap&&(_.bumpMap.value=x.bumpMap,_.bumpScale.value=x.bumpScale,x.side===xn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,_.normalScale.value.copy(x.normalScale),x.side===xn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias)}function d(_,x){_.roughness.value=x.roughness,_.metalness.value=x.metalness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap),x.bumpMap&&(_.bumpMap.value=x.bumpMap,_.bumpScale.value=x.bumpScale,x.side===xn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,_.normalScale.value.copy(x.normalScale),x.side===xn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),s.get(x).envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function f(_,x){d(_,x),_.reflectivity.value=x.reflectivity,_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.sheen&&_.sheen.value.copy(x.sheen),x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),_.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===xn&&_.clearcoatNormalScale.value.negate()),_.transmission.value=x.transmission,x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap)}function g(_,x){x.matcap&&(_.matcap.value=x.matcap),x.bumpMap&&(_.bumpMap.value=x.bumpMap,_.bumpScale.value=x.bumpScale,x.side===xn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,_.normalScale.value.copy(x.normalScale),x.side===xn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias)}function y(_,x){x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias)}function M(_,x){x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),_.referencePosition.value.copy(x.referencePosition),_.nearDistance.value=x.nearDistance,_.farDistance.value=x.farDistance}function S(_,x){x.bumpMap&&(_.bumpMap.value=x.bumpMap,_.bumpScale.value=x.bumpScale,x.side===xn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,_.normalScale.value.copy(x.normalScale),x.side===xn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function DA(){let s=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return s.style.display="block",s}function Jt(s){s=s||{};let e=s.canvas!==void 0?s.canvas:DA(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,l=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,h=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",m=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1,d=null,f=null,g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Ei,this.physicallyCorrectLights=!1,this.toneMapping=fo,this.toneMappingExposure=1;let M=this,S=!1,_=0,x=0,A=null,N=-1,O=null,C=new Lt,q=new Lt,X=null,te=e.width,se=e.height,we=1,ce=null,Z=null,ne=new Lt(0,0,te,se),ie=new Lt(0,0,te,se),j=!1,Le=new Ns,Oe=!1,ke=!1,et=new st,ze=new L,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return A===null?we:1}let xe=t;function Kt(k,pe){for(let le=0;le<k.length;le++){let G=k[le],ye=e.getContext(G,pe);if(ye!==null)return ye}return null}try{let k={alpha:n,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:m};if(e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Ht,!1),xe===null){let pe=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&pe.shift(),xe=Kt(pe,k),xe===null)throw Kt(pe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}xe.getShaderPrecisionFormat===void 0&&(xe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let Ct,xt,ut,Gt,Rt,St,Ie,Ge,qe,at,Je,V,B,be,ge,De,Qe,Nt,yt,K,Ne,We;function ot(){Ct=new n3(xe),xt=new Q2(xe,Ct,s),Ct.init(xt),Ne=new Hb(xe,Ct,xt),ut=new RA(xe,Ct,xt),Gt=new s3(xe),Rt=new gA,St=new LA(xe,Ct,ut,Rt,xt,Ne,Gt),Ie=new t3(M),Ge=new RS(xe,xt),We=new K2(xe,Ct,Ge,xt),qe=new i3(xe,Ge,Gt,We),at=new c3(xe,qe,Ge,Gt),Nt=new l3(xe),ge=new e3(Rt),Je=new mA(M,Ie,Ct,xt,We,ge),V=new PA(Rt),B=new xA(Rt),be=new SA(Ct,xt),Qe=new J2(M,Ie,ut,at,l),De=new Nb(M,at,xt),yt=new $2(xe,Ct,Gt,xt),K=new r3(xe,Ct,Gt,xt),Gt.programs=Je.programs,M.capabilities=xt,M.extensions=Ct,M.properties=Rt,M.renderLists=B,M.shadowMap=De,M.state=ut,M.info=Gt}ot();let Me=new R0(M,xe);this.xr=Me,this.getContext=function(){return xe},this.getContextAttributes=function(){return xe.getContextAttributes()},this.forceContextLoss=function(){let k=Ct.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=Ct.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(k){k!==void 0&&(we=k,this.setSize(te,se,!1))},this.getSize=function(k){return k===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),k=new _e),k.set(te,se)},this.setSize=function(k,pe,le){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=k,se=pe,e.width=Math.floor(k*we),e.height=Math.floor(pe*we),le!==!1&&(e.style.width=k+"px",e.style.height=pe+"px"),this.setViewport(0,0,k,pe)},this.getDrawingBufferSize=function(k){return k===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),k=new _e),k.set(te*we,se*we).floor()},this.setDrawingBufferSize=function(k,pe,le){te=k,se=pe,we=le,e.width=Math.floor(k*le),e.height=Math.floor(pe*le),this.setViewport(0,0,k,pe)},this.getCurrentViewport=function(k){return k===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),k=new Lt),k.copy(C)},this.getViewport=function(k){return k.copy(ne)},this.setViewport=function(k,pe,le,G){k.isVector4?ne.set(k.x,k.y,k.z,k.w):ne.set(k,pe,le,G),ut.viewport(C.copy(ne).multiplyScalar(we).floor())},this.getScissor=function(k){return k.copy(ie)},this.setScissor=function(k,pe,le,G){k.isVector4?ie.set(k.x,k.y,k.z,k.w):ie.set(k,pe,le,G),ut.scissor(q.copy(ie).multiplyScalar(we).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(k){ut.setScissorTest(j=k)},this.setOpaqueSort=function(k){ce=k},this.setTransparentSort=function(k){Z=k},this.getClearColor=function(k){return k===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),k=new Ce),k.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(k,pe,le){let G=0;(k===void 0||k)&&(G|=16384),(pe===void 0||pe)&&(G|=256),(le===void 0||le)&&(G|=1024),xe.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),B.dispose(),be.dispose(),Rt.dispose(),Ie.dispose(),at.dispose(),We.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ac),Me.removeEventListener("sessionend",xu),Fe.stop()};function dt(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let k=Gt.autoReset,pe=De.enabled,le=De.autoUpdate,G=De.needsUpdate,ye=De.type;ot(),Gt.autoReset=k,De.enabled=pe,De.autoUpdate=le,De.needsUpdate=G,De.type=ye}function bn(k){let pe=k.target;pe.removeEventListener("dispose",bn),Jn(pe)}function Jn(k){W(k),Rt.remove(k)}function W(k){let pe=Rt.get(k).programs;pe!==void 0&&pe.forEach(function(le){Je.releaseProgram(le)})}function un(k,pe){k.render(function(le){M.renderBufferImmediate(le,pe)})}this.renderBufferImmediate=function(k,pe){We.initAttributes();let le=Rt.get(k);k.hasPositions&&!le.position&&(le.position=xe.createBuffer()),k.hasNormals&&!le.normal&&(le.normal=xe.createBuffer()),k.hasUvs&&!le.uv&&(le.uv=xe.createBuffer()),k.hasColors&&!le.color&&(le.color=xe.createBuffer());let G=pe.getAttributes();k.hasPositions&&(xe.bindBuffer(34962,le.position),xe.bufferData(34962,k.positionArray,35048),We.enableAttribute(G.position),xe.vertexAttribPointer(G.position,3,5126,!1,0,0)),k.hasNormals&&(xe.bindBuffer(34962,le.normal),xe.bufferData(34962,k.normalArray,35048),We.enableAttribute(G.normal),xe.vertexAttribPointer(G.normal,3,5126,!1,0,0)),k.hasUvs&&(xe.bindBuffer(34962,le.uv),xe.bufferData(34962,k.uvArray,35048),We.enableAttribute(G.uv),xe.vertexAttribPointer(G.uv,2,5126,!1,0,0)),k.hasColors&&(xe.bindBuffer(34962,le.color),xe.bufferData(34962,k.colorArray,35048),We.enableAttribute(G.color),xe.vertexAttribPointer(G.color,3,5126,!1,0,0)),We.disableUnusedAttributes(),xe.drawArrays(4,0,k.count),k.count=0},this.renderBufferDirect=function(k,pe,le,G,ye,Pt){pe===null&&(pe=ht);let Be=ye.isMesh&&ye.matrixWorld.determinant()<0,_t=oc(k,pe,G,ye);ut.setMaterial(G,Be);let tt=le.index,nt=le.attributes.position;if(tt===null){if(nt===void 0||nt.count===0)return}else if(tt.count===0)return;let ft=1;G.wireframe===!0&&(tt=qe.getWireframeAttribute(le),ft=2),(G.morphTargets||G.morphNormals)&&Nt.update(ye,le,G,_t),We.setup(ye,G,_t,le,tt);let pt,Mt=yt;tt!==null&&(pt=Ge.get(tt),Mt=K,Mt.setIndex(pt));let Xt=tt!==null?tt.count:nt.count,zn=le.drawRange.start*ft,Dn=le.drawRange.count*ft,dn=Pt!==null?Pt.start*ft:0,yi=Pt!==null?Pt.count*ft:1/0,nn=Math.max(zn,dn),No=Math.min(Xt,zn+Dn,dn+yi)-1,Wn=Math.max(0,No-nn+1);if(Wn!==0){if(ye.isMesh)G.wireframe===!0?(ut.setLineWidth(G.wireframeLinewidth*gt()),Mt.setMode(1)):Mt.setMode(4);else if(ye.isLine){let rn=G.linewidth;rn===void 0&&(rn=1),ut.setLineWidth(rn*gt()),ye.isLineSegments?Mt.setMode(1):ye.isLineLoop?Mt.setMode(2):Mt.setMode(3)}else ye.isPoints?Mt.setMode(0):ye.isSprite&&Mt.setMode(4);if(ye.isInstancedMesh)Mt.renderInstances(nn,Wn,ye.count);else if(le.isInstancedBufferGeometry){let rn=Math.min(le.instanceCount,le._maxInstanceCount);Mt.renderInstances(nn,Wn,rn)}else Mt.render(nn,Wn)}},this.compile=function(k,pe){f=be.get(k),f.init(),k.traverseVisible(function(le){le.isLight&&le.layers.test(pe.layers)&&(f.pushLight(le),le.castShadow&&f.pushShadow(le))}),f.setupLights(),k.traverse(function(le){let G=le.material;if(G)if(Array.isArray(G))for(let ye=0;ye<G.length;ye++){let Pt=G[ye];Ia(Pt,k,le)}else Ia(G,k,le)})};let ci=null;function bt(k){ci&&ci(k)}function ac(){Fe.stop()}function xu(){Fe.start()}let Fe=new Rb;Fe.setAnimationLoop(bt),typeof window!="undefined"&&Fe.setContext(window),this.setAnimationLoop=function(k){ci=k,Me.setAnimationLoop(k),k===null?Fe.stop():Fe.start()},Me.addEventListener("sessionstart",ac),Me.addEventListener("sessionend",xu),this.render=function(k,pe){let le,G;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),le=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),G=arguments[3]),pe!==void 0&&pe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;k.autoUpdate===!0&&k.updateMatrixWorld(),pe.parent===null&&pe.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(pe=Me.getCamera(pe)),k.isScene===!0&&k.onBeforeRender(M,k,pe,le||A),f=be.get(k,y.length),f.init(),y.push(f),et.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),Le.setFromProjectionMatrix(et),ke=this.localClippingEnabled,Oe=ge.init(this.clippingPlanes,ke,pe),d=B.get(k,g.length),d.init(),g.push(d),Kn(k,pe,0,M.sortObjects),d.finish(),M.sortObjects===!0&&d.sort(ce,Z),Oe===!0&&ge.beginShadows();let ye=f.state.shadowsArray;De.render(ye,k,pe),f.setupLights(),f.setupLightsView(pe),Oe===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),le!==void 0&&this.setRenderTarget(le),Qe.render(d,k,pe,G);let Pt=d.opaque,Be=d.transparent;Pt.length>0&&Q(Pt,k,pe),Be.length>0&&Q(Be,k,pe),A!==null&&(St.updateRenderTargetMipmap(A),St.updateMultisampleRenderTarget(A)),k.isScene===!0&&k.onAfterRender(M,k,pe),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1),We.resetDefaultState(),N=-1,O=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Kn(k,pe,le,G){if(k.visible===!1)return;if(k.layers.test(pe.layers)){if(k.isGroup)le=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(pe);else if(k.isLight)f.pushLight(k),k.castShadow&&f.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||Le.intersectsSprite(k)){G&&ze.setFromMatrixPosition(k.matrixWorld).applyMatrix4(et);let Be=at.update(k),_t=k.material;_t.visible&&d.push(k,Be,_t,le,ze.z,null)}}else if(k.isImmediateRenderObject)G&&ze.setFromMatrixPosition(k.matrixWorld).applyMatrix4(et),d.push(k,null,k.material,le,ze.z,null);else if((k.isMesh||k.isLine||k.isPoints)&&(k.isSkinnedMesh&&k.skeleton.frame!==Gt.render.frame&&(k.skeleton.update(),k.skeleton.frame=Gt.render.frame),!k.frustumCulled||Le.intersectsObject(k))){G&&ze.setFromMatrixPosition(k.matrixWorld).applyMatrix4(et);let Be=at.update(k),_t=k.material;if(Array.isArray(_t)){let tt=Be.groups;for(let nt=0,ft=tt.length;nt<ft;nt++){let pt=tt[nt],Mt=_t[pt.materialIndex];Mt&&Mt.visible&&d.push(k,Be,Mt,le,ze.z,pt)}}else _t.visible&&d.push(k,Be,_t,le,ze.z,null)}}let Pt=k.children;for(let Be=0,_t=Pt.length;Be<_t;Be++)Kn(Pt[Be],pe,le,G)}function Q(k,pe,le){let G=pe.isScene===!0?pe.overrideMaterial:null;for(let ye=0,Pt=k.length;ye<Pt;ye++){let Be=k[ye],_t=Be.object,tt=Be.geometry,nt=G===null?Be.material:G,ft=Be.group;if(le.isArrayCamera){let pt=le.cameras;for(let Mt=0,Xt=pt.length;Mt<Xt;Mt++){let zn=pt[Mt];_t.layers.test(zn.layers)&&(ut.viewport(C.copy(zn.viewport)),f.setupLightsView(zn),Tt(_t,pe,zn,tt,nt,ft))}}else Tt(_t,pe,le,tt,nt,ft)}}function Tt(k,pe,le,G,ye,Pt){if(k.onBeforeRender(M,pe,le,G,ye,Pt),k.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),k.isImmediateRenderObject){let Be=oc(le,pe,ye,k);ut.setMaterial(ye),We.reset(),un(k,Be)}else M.renderBufferDirect(le,pe,G,ye,k,Pt);k.onAfterRender(M,pe,le,G,ye,Pt)}function Ia(k,pe,le){pe.isScene!==!0&&(pe=ht);let G=Rt.get(k),ye=f.state.lights,Pt=f.state.shadowsArray,Be=ye.state.version,_t=Je.getParameters(k,ye.state,Pt,pe,le),tt=Je.getProgramCacheKey(_t),nt=G.programs;G.environment=k.isMeshStandardMaterial?pe.environment:null,G.fog=pe.fog,G.envMap=Ie.get(k.envMap||G.environment),nt===void 0&&(k.addEventListener("dispose",bn),nt=new Map,G.programs=nt);let ft=nt.get(tt);if(ft!==void 0){if(G.currentProgram===ft&&G.lightsStateVersion===Be)return Ki(k,_t),ft}else _t.uniforms=Je.getUniforms(k),k.onBuild(_t,M),k.onBeforeCompile(_t,M),ft=Je.acquireProgram(_t,tt),nt.set(tt,ft),G.uniforms=_t.uniforms;let pt=G.uniforms;(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(pt.clippingPlanes=ge.uniform),Ki(k,_t),G.needsLights=es(k),G.lightsStateVersion=Be,G.needsLights&&(pt.ambientLightColor.value=ye.state.ambient,pt.lightProbe.value=ye.state.probe,pt.directionalLights.value=ye.state.directional,pt.directionalLightShadows.value=ye.state.directionalShadow,pt.spotLights.value=ye.state.spot,pt.spotLightShadows.value=ye.state.spotShadow,pt.rectAreaLights.value=ye.state.rectArea,pt.ltc_1.value=ye.state.rectAreaLTC1,pt.ltc_2.value=ye.state.rectAreaLTC2,pt.pointLights.value=ye.state.point,pt.pointLightShadows.value=ye.state.pointShadow,pt.hemisphereLights.value=ye.state.hemi,pt.directionalShadowMap.value=ye.state.directionalShadowMap,pt.directionalShadowMatrix.value=ye.state.directionalShadowMatrix,pt.spotShadowMap.value=ye.state.spotShadowMap,pt.spotShadowMatrix.value=ye.state.spotShadowMatrix,pt.pointShadowMap.value=ye.state.pointShadowMap,pt.pointShadowMatrix.value=ye.state.pointShadowMatrix);let Mt=ft.getUniforms(),Xt=va.seqWithValue(Mt.seq,pt);return G.currentProgram=ft,G.uniformsList=Xt,ft}function Ki(k,pe){let le=Rt.get(k);le.outputEncoding=pe.outputEncoding,le.instancing=pe.instancing,le.numClippingPlanes=pe.numClippingPlanes,le.numIntersection=pe.numClipIntersection,le.vertexAlphas=pe.vertexAlphas}function oc(k,pe,le,G){pe.isScene!==!0&&(pe=ht),St.resetTextureUnits();let ye=pe.fog,Pt=le.isMeshStandardMaterial?pe.environment:null,Be=A===null?M.outputEncoding:A.texture.encoding,_t=Ie.get(le.envMap||Pt),tt=le.vertexColors===!0&&G.geometry&&G.geometry.attributes.color&&G.geometry.attributes.color.itemSize===4,nt=Rt.get(le),ft=f.state.lights;if(Oe===!0&&(ke===!0||k!==O)){let nn=k===O&&le.id===N;ge.setState(le,k,nn)}let pt=!1;le.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==ft.state.version||nt.outputEncoding!==Be||G.isInstancedMesh&&nt.instancing===!1||!G.isInstancedMesh&&nt.instancing===!0||nt.envMap!==_t||le.fog&&nt.fog!==ye||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ge.numPlanes||nt.numIntersection!==ge.numIntersection)||nt.vertexAlphas!==tt)&&(pt=!0):(pt=!0,nt.__version=le.version);let Mt=nt.currentProgram;pt===!0&&(Mt=Ia(le,pe,G));let Xt=!1,zn=!1,Dn=!1,dn=Mt.getUniforms(),yi=nt.uniforms;if(ut.useProgram(Mt.program)&&(Xt=!0,zn=!0,Dn=!0),le.id!==N&&(N=le.id,zn=!0),Xt||O!==k){if(dn.setValue(xe,"projectionMatrix",k.projectionMatrix),xt.logarithmicDepthBuffer&&dn.setValue(xe,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),O!==k&&(O=k,zn=!0,Dn=!0),le.isShaderMaterial||le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshStandardMaterial||le.envMap){let nn=dn.map.cameraPosition;nn!==void 0&&nn.setValue(xe,ze.setFromMatrixPosition(k.matrixWorld))}(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&dn.setValue(xe,"isOrthographic",k.isOrthographicCamera===!0),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial||le.isShadowMaterial||le.skinning)&&dn.setValue(xe,"viewMatrix",k.matrixWorldInverse)}if(le.skinning){dn.setOptional(xe,G,"bindMatrix"),dn.setOptional(xe,G,"bindMatrixInverse");let nn=G.skeleton;if(nn){let No=nn.bones;if(xt.floatVertexTextures){if(nn.boneTexture===null){let Wn=Math.sqrt(No.length*4);Wn=Mb(Wn),Wn=Math.max(Wn,4);let rn=new Float32Array(Wn*Wn*4);rn.set(nn.boneMatrices);let Ho=new ba(rn,Wn,Wn,oi,Ds);nn.boneMatrices=rn,nn.boneTexture=Ho,nn.boneTextureSize=Wn}dn.setValue(xe,"boneTexture",nn.boneTexture,St),dn.setValue(xe,"boneTextureSize",nn.boneTextureSize)}else dn.setOptional(xe,nn,"boneMatrices")}}return(zn||nt.receiveShadow!==G.receiveShadow)&&(nt.receiveShadow=G.receiveShadow,dn.setValue(xe,"receiveShadow",G.receiveShadow)),zn&&(dn.setValue(xe,"toneMappingExposure",M.toneMappingExposure),nt.needsLights&&Ws(yi,Dn),ye&&le.fog&&V.refreshFogUniforms(yi,ye),V.refreshMaterialUniforms(yi,le,we,se),va.upload(xe,nt.uniformsList,yi,St)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(va.upload(xe,nt.uniformsList,yi,St),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&dn.setValue(xe,"center",G.center),dn.setValue(xe,"modelViewMatrix",G.modelViewMatrix),dn.setValue(xe,"normalMatrix",G.normalMatrix),dn.setValue(xe,"modelMatrix",G.matrixWorld),Mt}function Ws(k,pe){k.ambientLightColor.needsUpdate=pe,k.lightProbe.needsUpdate=pe,k.directionalLights.needsUpdate=pe,k.directionalLightShadows.needsUpdate=pe,k.pointLights.needsUpdate=pe,k.pointLightShadows.needsUpdate=pe,k.spotLights.needsUpdate=pe,k.spotLightShadows.needsUpdate=pe,k.rectAreaLights.needsUpdate=pe,k.hemisphereLights.needsUpdate=pe}function es(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return A},this.setRenderTarget=function(k,pe=0,le=0){A=k,_=pe,x=le,k&&Rt.get(k).__webglFramebuffer===void 0&&St.setupRenderTarget(k);let G=null,ye=!1,Pt=!1;if(k){let Be=k.texture;(Be.isDataTexture3D||Be.isDataTexture2DArray)&&(Pt=!0);let _t=Rt.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(G=_t[pe],ye=!0):k.isWebGLMultisampleRenderTarget?G=Rt.get(k).__webglMultisampledFramebuffer:G=_t,C.copy(k.viewport),q.copy(k.scissor),X=k.scissorTest}else C.copy(ne).multiplyScalar(we).floor(),q.copy(ie).multiplyScalar(we).floor(),X=j;if(ut.bindFramebuffer(36160,G),ut.viewport(C),ut.scissor(q),ut.setScissorTest(X),ye){let Be=Rt.get(k.texture);xe.framebufferTexture2D(36160,36064,34069+pe,Be.__webglTexture,le)}else if(Pt){let Be=Rt.get(k.texture),_t=pe||0;xe.framebufferTextureLayer(36160,36064,Be.__webglTexture,le||0,_t)}},this.readRenderTargetPixels=function(k,pe,le,G,ye,Pt,Be){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Rt.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Be!==void 0&&(_t=_t[Be]),_t){ut.bindFramebuffer(36160,_t);try{let tt=k.texture,nt=tt.format,ft=tt.type;if(nt!==oi&&Ne.convert(nt)!==xe.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let pt=ft===vo&&(Ct.has("EXT_color_buffer_half_float")||xt.isWebGL2&&Ct.has("EXT_color_buffer_float"));if(ft!==Ca&&Ne.convert(ft)!==xe.getParameter(35738)&&!(ft===Ds&&(xt.isWebGL2||Ct.has("OES_texture_float")||Ct.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}xe.checkFramebufferStatus(36160)===36053?pe>=0&&pe<=k.width-G&&le>=0&&le<=k.height-ye&&xe.readPixels(pe,le,G,ye,Ne.convert(nt),Ne.convert(ft),Pt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let tt=A!==null?Rt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(36160,tt)}}},this.copyFramebufferToTexture=function(k,pe,le=0){let G=Math.pow(2,-le),ye=Math.floor(pe.image.width*G),Pt=Math.floor(pe.image.height*G),Be=Ne.convert(pe.format);St.setTexture2D(pe,0),xe.copyTexImage2D(3553,le,Be,k.x,k.y,ye,Pt,0),ut.unbindTexture()},this.copyTextureToTexture=function(k,pe,le,G=0){let ye=pe.image.width,Pt=pe.image.height,Be=Ne.convert(le.format),_t=Ne.convert(le.type);St.setTexture2D(le,0),xe.pixelStorei(37440,le.flipY),xe.pixelStorei(37441,le.premultiplyAlpha),xe.pixelStorei(3317,le.unpackAlignment),pe.isDataTexture?xe.texSubImage2D(3553,G,k.x,k.y,ye,Pt,Be,_t,pe.image.data):pe.isCompressedTexture?xe.compressedTexSubImage2D(3553,G,k.x,k.y,pe.mipmaps[0].width,pe.mipmaps[0].height,Be,pe.mipmaps[0].data):xe.texSubImage2D(3553,G,k.x,k.y,Be,_t,pe.image),G===0&&le.generateMipmaps&&xe.generateMipmap(3553),ut.unbindTexture()},this.copyTextureToTexture3D=function(k,pe,le,G,ye=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:Pt,height:Be,data:_t}=le.image,tt=Ne.convert(G.format),nt=Ne.convert(G.type),ft;if(G.isDataTexture3D)St.setTexture3D(G,0),ft=32879;else if(G.isDataTexture2DArray)St.setTexture2DArray(G,0),ft=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}xe.pixelStorei(37440,G.flipY),xe.pixelStorei(37441,G.premultiplyAlpha),xe.pixelStorei(3317,G.unpackAlignment);let pt=xe.getParameter(3314),Mt=xe.getParameter(32878),Xt=xe.getParameter(3316),zn=xe.getParameter(3315),Dn=xe.getParameter(32877);xe.pixelStorei(3314,Pt),xe.pixelStorei(32878,Be),xe.pixelStorei(3316,k.min.x),xe.pixelStorei(3315,k.min.y),xe.pixelStorei(32877,k.min.z),xe.texSubImage3D(ft,ye,pe.x,pe.y,pe.z,k.max.x-k.min.x+1,k.max.y-k.min.y+1,k.max.z-k.min.z+1,tt,nt,_t),xe.pixelStorei(3314,pt),xe.pixelStorei(32878,Mt),xe.pixelStorei(3316,Xt),xe.pixelStorei(3315,zn),xe.pixelStorei(32877,Dn),ye===0&&G.generateMipmaps&&xe.generateMipmap(ft),ut.unbindTexture()},this.initTexture=function(k){St.setTexture2D(k,0),ut.unbindTexture()},this.resetState=function(){_=0,x=0,A=null,ut.reset(),We.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var mf=class extends Jt{};mf.prototype.isWebGL1Renderer=!0;var yo=class s{constructor(e,t=25e-5){this.name="",this.color=new Ce(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};yo.prototype.isFogExp2=!0;var Lh=class s{constructor(e,t=1,n=1e3){this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Lh.prototype.isFog=!0;var Hs=class extends Ft{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Hs.prototype.isScene=!0;var Bs=class s{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ji(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new s(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};Bs.prototype.isInterleavedBuffer=!0;var Nn=new L,_a=class s{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nn.x=this.getX(t),Nn.y=this.getY(t),Nn.z=this.getZ(t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.x=this.getX(t),Nn.y=this.getY(t),Nn.z=this.getZ(t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.x=this.getX(t),Nn.y=this.getY(t),Nn.z=this.getZ(t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};_a.prototype.isInterleavedBufferAttribute=!0;var or=class extends Vn{constructor(e){super(),this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};or.prototype.isSpriteMaterial=!0;var Tl,sh=new L,Al=new L,Rl=new L,Ll=new _e,ah=new _e,Bb=new st,Cd=new L,oh=new L,Pd=new L,tx=new _e,Qm=new _e,nx=new _e,lr=class extends Ft{constructor(e){if(super(),this.type="Sprite",Tl===void 0){Tl=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bs(t,5);Tl.setIndex([0,1,2,0,2,3]),Tl.setAttribute("position",new _a(n,3,0,!1)),Tl.setAttribute("uv",new _a(n,2,3,!1))}this.geometry=Tl,this.material=e!==void 0?e:new or,this.center=new _e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Al.setFromMatrixScale(this.matrixWorld),Bb.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rl.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Al.multiplyScalar(-Rl.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Dd(Cd.set(-.5,-.5,0),Rl,a,Al,i,r),Dd(oh.set(.5,-.5,0),Rl,a,Al,i,r),Dd(Pd.set(.5,.5,0),Rl,a,Al,i,r),tx.set(0,0),Qm.set(1,0),nx.set(1,1);let l=e.ray.intersectTriangle(Cd,oh,Pd,!1,sh);if(l===null&&(Dd(oh.set(-.5,.5,0),Rl,a,Al,i,r),Qm.set(0,1),l=e.ray.intersectTriangle(Cd,Pd,oh,!1,sh),l===null))return;let h=e.ray.origin.distanceTo(sh);h<e.near||h>e.far||t.push({distance:h,point:sh.clone(),uv:li.getUV(sh,Cd,oh,Pd,tx,Qm,nx,new _e),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};lr.prototype.isSprite=!0;function Dd(s,e,t,n,i,r){Ll.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ah.x=r*Ll.x-i*Ll.y,ah.y=i*Ll.x+r*Ll.y):ah.copy(Ll),s.copy(e),s.x+=ah.x,s.y+=ah.y,s.applyMatrix4(Bb)}var Id=new L,ix=new L,gf=class extends Ft{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);let n=this.levels,i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Id.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Id);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Id.setFromMatrixPosition(e.matrixWorld),ix.setFromMatrixPosition(this.matrixWorld);let n=Id.distanceTo(ix)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance})}return t}},rx=new L,sx=new Lt,ax=new Lt,IA=new L,ox=new st,Xl=class extends wt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new st,this.bindMatrixInverse=new st}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;sx.fromBufferAttribute(i.attributes.skinIndex,e),ax.fromBufferAttribute(i.attributes.skinWeight,e),rx.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=ax.getComponent(r);if(a!==0){let l=sx.getComponent(r);ox.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(IA.copy(rx).applyMatrix4(ox),a)}}return t.applyMatrix4(this.bindMatrixInverse)}};Xl.prototype.isSkinnedMesh=!0;var Yl=class extends Ft{constructor(){super(),this.type="Bone"}};Yl.prototype.isBone=!0;var lx=new st,kA=new st,vf=class s{constructor(e=[],t=[]){this.uuid=ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let l=e[r]?e[r].matrixWorld:kA;lx.multiplyMatrices(l,t[r]),lx.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Yl),this.bones.push(a),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let l=n[i];e.boneInverses.push(l.toArray())}return e}},cx=new st,hx=new st,kd=[],lh=new wt,cr=class extends wt{constructor(e,t,n){super(e,t),this.instanceMatrix=new Ze(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(lh.geometry=this.geometry,lh.material=this.material,lh.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,cx),hx.multiplyMatrices(n,cx),lh.matrixWorld=hx,lh.raycast(e,kd);for(let a=0,l=kd.length;a<l;a++){let h=kd[a];h.instanceId=r,h.object=this,t.push(h)}kd.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ze(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};cr.prototype.isInstancedMesh=!0;var hn=class extends Vn{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Ce(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}};hn.prototype.isLineBasicMaterial=!0;var ux=new L,dx=new L,fx=new st,e0=new Kr,Fd=new ar,Ti=class extends Ft{constructor(e=new it,t=new hn){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ux.fromBufferAttribute(t,i-1),dx.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ux.distanceTo(dx);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fd.copy(n.boundingSphere),Fd.applyMatrix4(i),Fd.radius+=r,e.ray.intersectsSphere(Fd)===!1)return;fx.copy(i).invert(),e0.copy(e.ray).applyMatrix4(fx);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,c=new L,m=new L,d=new L,f=new L,g=this.isLineSegments?2:1;if(n.isBufferGeometry){let y=n.index,S=n.attributes.position;if(y!==null){let _=Math.max(0,a.start),x=Math.min(y.count,a.start+a.count);for(let A=_,N=x-1;A<N;A+=g){let O=y.getX(A),C=y.getX(A+1);if(c.fromBufferAttribute(S,O),m.fromBufferAttribute(S,C),e0.distanceSqToSegment(c,m,f,d)>h)continue;f.applyMatrix4(this.matrixWorld);let X=e.ray.origin.distanceTo(f);X<e.near||X>e.far||t.push({distance:X,point:d.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{let _=Math.max(0,a.start),x=Math.min(S.count,a.start+a.count);for(let A=_,N=x-1;A<N;A+=g){if(c.fromBufferAttribute(S,A),m.fromBufferAttribute(S,A+1),e0.distanceSqToSegment(c,m,f,d)>h)continue;f.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Ti.prototype.isLine=!0;var px=new L,mx=new L,Zn=class extends Ti{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)px.fromBufferAttribute(t,i),mx.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+px.distanceTo(mx);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};Zn.prototype.isLineSegments=!0;var xo=class extends Ti{constructor(e,t){super(e,t),this.type="LineLoop"}};xo.prototype.isLineLoop=!0;var Os=class extends Vn{constructor(e){super(),this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};Os.prototype.isPointsMaterial=!0;var gx=new st,L0=new Kr,Nd=new ar,Hd=new L,Ni=class extends Ft{constructor(e=new it,t=new Os){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nd.copy(n.boundingSphere),Nd.applyMatrix4(i),Nd.radius+=r,e.ray.intersectsSphere(Nd)===!1)return;gx.copy(i).invert(),L0.copy(e.ray).applyMatrix4(gx);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l;if(n.isBufferGeometry){let c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let y=f,M=g;y<M;y++){let S=c.getX(y);Hd.fromBufferAttribute(d,S),vx(Hd,S,h,i,e,t,this)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,M=g;y<M;y++)Hd.fromBufferAttribute(d,y),vx(Hd,y,h,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Ni.prototype.isPoints=!0;function vx(s,e,t,n,i,r,a){let l=L0.distanceSqToPoint(s);if(l<t){let h=new L;L0.closestPointToPoint(s,h),h.applyMatrix4(n);let c=i.ray.origin.distanceTo(h);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,object:a})}}var yf=class extends ni{constructor(e,t,n,i,r,a,l,h,c){super(e,t,n,i,r,a,l,h,c),this.format=l!==void 0?l:ga,this.minFilter=a!==void 0?a:qt,this.magFilter=r!==void 0?r:qt,this.generateMipmaps=!1;let m=this;function d(){m.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};yf.prototype.isVideoTexture=!0;var Ch=class extends ni{constructor(e,t,n,i,r,a,l,h,c,m,d,f){super(null,a,l,h,c,m,i,r,d,f),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};Ch.prototype.isCompressedTexture=!0;var hr=class extends ni{constructor(e,t,n,i,r,a,l,h,c){super(e,t,n,i,r,a,l,h,c),this.needsUpdate=!0}};hr.prototype.isCanvasTexture=!0;var xf=class extends ni{constructor(e,t,n,i,r,a,l,h,c,m){if(m=m!==void 0?m:po,m!==po&&m!==Hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===po&&(n=wh),n===void 0&&m===Hl&&(n=Fl),super(null,i,r,a,l,h,m,n,c),this.image={width:e,height:t},this.magFilter=l!==void 0?l:Ln,this.minFilter=h!==void 0?h:Ln,this.flipY=!1,this.generateMipmaps=!1}};xf.prototype.isDepthTexture=!0;var wo=class extends it{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],l=[],h=[],c=new L,m=new _e;a.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let g=n+d/t*i;c.x=e*Math.cos(g),c.y=e*Math.sin(g),a.push(c.x,c.y,c.z),l.push(0,0,1),m.x=(a[f]/e+1)/2,m.y=(a[f+1]/e+1)/2,h.push(m.x,m.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(h,2))}},bo=class extends it{constructor(e=1,t=1,n=1,i=8,r=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h};let c=this;i=Math.floor(i),r=Math.floor(r);let m=[],d=[],f=[],g=[],y=0,M=[],S=n/2,_=0;x(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(m),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(g,2));function x(){let N=new L,O=new L,C=0,q=(t-e)/n;for(let X=0;X<=r;X++){let te=[],se=X/r,we=se*(t-e)+e;for(let ce=0;ce<=i;ce++){let Z=ce/i,ne=Z*h+l,ie=Math.sin(ne),j=Math.cos(ne);O.x=we*ie,O.y=-se*n+S,O.z=we*j,d.push(O.x,O.y,O.z),N.set(ie,q,j).normalize(),f.push(N.x,N.y,N.z),g.push(Z,1-se),te.push(y++)}M.push(te)}for(let X=0;X<i;X++)for(let te=0;te<r;te++){let se=M[te][X],we=M[te+1][X],ce=M[te+1][X+1],Z=M[te][X+1];m.push(se,we,Z),m.push(we,ce,Z),C+=6}c.addGroup(_,C,0),_+=C}function A(N){let O=y,C=new _e,q=new L,X=0,te=N===!0?e:t,se=N===!0?1:-1;for(let ce=1;ce<=i;ce++)d.push(0,S*se,0),f.push(0,se,0),g.push(.5,.5),y++;let we=y;for(let ce=0;ce<=i;ce++){let ne=ce/i*h+l,ie=Math.cos(ne),j=Math.sin(ne);q.x=te*j,q.y=S*se,q.z=te*ie,d.push(q.x,q.y,q.z),f.push(0,se,0),C.x=ie*.5+.5,C.y=j*.5*se+.5,g.push(C.x,C.y),y++}for(let ce=0;ce<i;ce++){let Z=O+ce,ne=we+ce;N===!0?m.push(ne,ne+1,Z):m.push(ne+1,ne,Z),X+=3}c.addGroup(_,X,N===!0?1:2),_+=X}}},Ph=class extends bo{constructor(e=1,t=1,n=8,i=1,r=!1,a=0,l=Math.PI*2){super(0,e,t,n,i,r,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:l}}},zs=class extends it{constructor(e,t,n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];l(i),c(n),m(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let A=new L,N=new L,O=new L;for(let C=0;C<t.length;C+=3)g(t[C+0],A),g(t[C+1],N),g(t[C+2],O),h(A,N,O,x)}function h(x,A,N,O){let C=O+1,q=[];for(let X=0;X<=C;X++){q[X]=[];let te=x.clone().lerp(N,X/C),se=A.clone().lerp(N,X/C),we=C-X;for(let ce=0;ce<=we;ce++)ce===0&&X===C?q[X][ce]=te:q[X][ce]=te.clone().lerp(se,ce/we)}for(let X=0;X<C;X++)for(let te=0;te<2*(C-X)-1;te++){let se=Math.floor(te/2);te%2===0?(f(q[X][se+1]),f(q[X+1][se]),f(q[X][se])):(f(q[X][se+1]),f(q[X+1][se+1]),f(q[X+1][se]))}}function c(x){let A=new L;for(let N=0;N<r.length;N+=3)A.x=r[N+0],A.y=r[N+1],A.z=r[N+2],A.normalize().multiplyScalar(x),r[N+0]=A.x,r[N+1]=A.y,r[N+2]=A.z}function m(){let x=new L;for(let A=0;A<r.length;A+=3){x.x=r[A+0],x.y=r[A+1],x.z=r[A+2];let N=S(x)/2/Math.PI+.5,O=_(x)/Math.PI+.5;a.push(N,1-O)}y(),d()}function d(){for(let x=0;x<a.length;x+=6){let A=a[x+0],N=a[x+2],O=a[x+4],C=Math.max(A,N,O),q=Math.min(A,N,O);C>.9&&q<.1&&(A<.2&&(a[x+0]+=1),N<.2&&(a[x+2]+=1),O<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function g(x,A){let N=x*3;A.x=e[N+0],A.y=e[N+1],A.z=e[N+2]}function y(){let x=new L,A=new L,N=new L,O=new L,C=new _e,q=new _e,X=new _e;for(let te=0,se=0;te<r.length;te+=9,se+=6){x.set(r[te+0],r[te+1],r[te+2]),A.set(r[te+3],r[te+4],r[te+5]),N.set(r[te+6],r[te+7],r[te+8]),C.set(a[se+0],a[se+1]),q.set(a[se+2],a[se+3]),X.set(a[se+4],a[se+5]),O.copy(x).add(A).add(N).divideScalar(3);let we=S(O);M(C,se+0,x,we),M(q,se+2,A,we),M(X,se+4,N,we)}}function M(x,A,N,O){O<0&&x.x===1&&(a[A]=x.x-1),N.x===0&&N.z===0&&(a[A]=O/2/Math.PI+.5)}function S(x){return Math.atan2(x.z,-x.x)}function _(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}},Dh=class extends zs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}},Bd=new L,Od=new L,t0=new L,zd=new li,Ih=class extends it{constructor(e,t){if(super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1,e.isGeometry===!0){console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}let i=Math.pow(10,4),r=Math.cos(mo*t),a=e.getIndex(),l=e.getAttribute("position"),h=a?a.count:l.count,c=[0,0,0],m=["a","b","c"],d=new Array(3),f={},g=[];for(let y=0;y<h;y+=3){a?(c[0]=a.getX(y),c[1]=a.getX(y+1),c[2]=a.getX(y+2)):(c[0]=y,c[1]=y+1,c[2]=y+2);let{a:M,b:S,c:_}=zd;if(M.fromBufferAttribute(l,c[0]),S.fromBufferAttribute(l,c[1]),_.fromBufferAttribute(l,c[2]),zd.getNormal(t0),d[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,d[1]=`${Math.round(S.x*i)},${Math.round(S.y*i)},${Math.round(S.z*i)}`,d[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){let A=(x+1)%3,N=d[x],O=d[A],C=zd[m[x]],q=zd[m[A]],X=`${N}_${O}`,te=`${O}_${N}`;te in f&&f[te]?(t0.dot(f[te].normal)<=r&&(g.push(C.x,C.y,C.z),g.push(q.x,q.y,q.z)),f[te]=null):X in f||(f[X]={index0:c[x],index1:c[A],normal:t0.clone()})}}for(let y in f)if(f[y]){let{index0:M,index1:S}=f[y];Bd.fromBufferAttribute(l,M),Od.fromBufferAttribute(l,S),g.push(Bd.x,Bd.y,Bd.z),g.push(Od.x,Od.y,Od.z)}this.setAttribute("position",new rt(g,3))}},FA={triangulate:function(s,e,t){t=t||2;let n=e&&e.length,i=n?e[0]*t:s.length,r=Ob(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let l,h,c,m,d,f,g;if(n&&(r=zA(s,e,r,t)),s.length>80*t){l=c=s[0],h=m=s[1];for(let y=t;y<i;y+=t)d=s[y],f=s[y+1],d<l&&(l=d),f<h&&(h=f),d>c&&(c=d),f>m&&(m=f);g=Math.max(c-l,m-h),g=g!==0?1/g:0}return kh(r,a,t,l,h,g),a}};function Ob(s,e,t,n,i){let r,a;if(i===KA(s,e,t,n)>0)for(r=e;r<t;r+=n)a=yx(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=yx(r,s[r],s[r+1],a);return a&&ip(a,a.next)&&(Nh(a),a=a.next),a}function Ma(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ip(t,t.next)||En(t.prev,t,t.next)===0)){if(Nh(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function kh(s,e,t,n,i,r,a){if(!s)return;!a&&r&&qA(s,n,i,r);let l=s,h,c;for(;s.prev!==s.next;){if(h=s.prev,c=s.next,r?HA(s,n,i,r):NA(s)){e.push(h.i/t),e.push(s.i/t),e.push(c.i/t),Nh(s),s=c.next,l=c.next;continue}if(s=c,s===l){a?a===1?(s=BA(Ma(s),e,t),kh(s,e,t,n,i,r,2)):a===2&&OA(s,e,t,n,i,r):kh(Ma(s),e,t,n,i,r,1);break}}}function NA(s){let e=s.prev,t=s,n=s.next;if(En(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Il(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&En(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function HA(s,e,t,n){let i=s.prev,r=s,a=s.next;if(En(i,r,a)>=0)return!1;let l=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,h=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,c=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,m=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,d=C0(l,h,e,t,n),f=C0(c,m,e,t,n),g=s.prevZ,y=s.nextZ;for(;g&&g.z>=d&&y&&y.z<=f;){if(g!==s.prev&&g!==s.next&&Il(i.x,i.y,r.x,r.y,a.x,a.y,g.x,g.y)&&En(g.prev,g,g.next)>=0||(g=g.prevZ,y!==s.prev&&y!==s.next&&Il(i.x,i.y,r.x,r.y,a.x,a.y,y.x,y.y)&&En(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=d;){if(g!==s.prev&&g!==s.next&&Il(i.x,i.y,r.x,r.y,a.x,a.y,g.x,g.y)&&En(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=f;){if(y!==s.prev&&y!==s.next&&Il(i.x,i.y,r.x,r.y,a.x,a.y,y.x,y.y)&&En(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function BA(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!ip(i,r)&&zb(i,n,n.next,r)&&Fh(i,r)&&Fh(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),Nh(n),Nh(n.next),n=s=r),n=n.next}while(n!==s);return Ma(n)}function OA(s,e,t,n,i,r){let a=s;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&jA(a,l)){let h=Ub(a,l);a=Ma(a,a.next),h=Ma(h,h.next),kh(a,e,t,n,i,r),kh(h,e,t,n,i,r);return}l=l.next}a=a.next}while(a!==s)}function zA(s,e,t,n){let i=[],r,a,l,h,c;for(r=0,a=e.length;r<a;r++)l=e[r]*n,h=r<a-1?e[r+1]*n:s.length,c=Ob(s,l,h,n,!1),c===c.next&&(c.steiner=!0),i.push(YA(c));for(i.sort(UA),r=0;r<i.length;r++)GA(i[r],t),t=Ma(t,t.next);return t}function UA(s,e){return s.x-e.x}function GA(s,e){if(e=VA(s,e),e){let t=Ub(e,s);Ma(e,e.next),Ma(t,t.next)}}function VA(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r){if(r=f,f===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===r)return a;let l=a,h=a.x,c=a.y,m=1/0,d;t=a;do n>=t.x&&t.x>=h&&n!==t.x&&Il(i<c?n:r,i,h,c,i<c?r:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),Fh(t,s)&&(d<m||d===m&&(t.x>a.x||t.x===a.x&&WA(a,t)))&&(a=t,m=d)),t=t.next;while(t!==l);return a}function WA(s,e){return En(s.prev,s,e.prev)<0&&En(e.next,s,s.next)<0}function qA(s,e,t,n){let i=s;do i.z===null&&(i.z=C0(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,XA(i)}function XA(s){let e,t,n,i,r,a,l,h,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,l=0,e=0;e<c&&(l++,n=n.nextZ,!!n);e++);for(h=c;l>0||h>0&&n;)l!==0&&(h===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,l--):(i=n,n=n.nextZ,h--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function C0(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function YA(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Il(s,e,t,n,i,r,a,l){return(i-a)*(e-l)-(s-a)*(r-l)>=0&&(s-a)*(n-l)-(t-a)*(e-l)>=0&&(t-a)*(r-l)-(i-a)*(n-l)>=0}function jA(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ZA(s,e)&&(Fh(s,e)&&Fh(e,s)&&JA(s,e)&&(En(s.prev,s,e.prev)||En(s,e.prev,e))||ip(s,e)&&En(s.prev,s,s.next)>0&&En(e.prev,e,e.next)>0)}function En(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ip(s,e){return s.x===e.x&&s.y===e.y}function zb(s,e,t,n){let i=Gd(En(s,e,t)),r=Gd(En(s,e,n)),a=Gd(En(t,n,s)),l=Gd(En(t,n,e));return!!(i!==r&&a!==l||i===0&&Ud(s,t,e)||r===0&&Ud(s,n,e)||a===0&&Ud(t,s,n)||l===0&&Ud(t,e,n))}function Ud(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Gd(s){return s>0?1:s<0?-1:0}function ZA(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&zb(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Fh(s,e){return En(s.prev,s,s.next)<0?En(s,e,s.next)>=0&&En(s,s.prev,e)>=0:En(s,e,s.prev)<0||En(s,s.next,e)<0}function JA(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ub(s,e){let t=new P0(s.i,s.x,s.y),n=new P0(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function yx(s,e,t,n){let i=new P0(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Nh(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function P0(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function KA(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var jr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];xx(e),wx(n,e);let a=e.length;t.forEach(xx);for(let h=0;h<t.length;h++)i.push(a),a+=t[h].length,wx(n,t[h]);let l=FA.triangulate(n,i);for(let h=0;h<l.length;h+=3)r.push(l.slice(h,h+3));return r}};function xx(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function wx(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Qr=class extends it{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let l=0,h=e.length;l<h;l++){let c=e[l];a(c)}this.setAttribute("position",new rt(i,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function a(l){let h=[],c=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:100,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:6,y=t.bevelSize!==void 0?t.bevelSize:g-2,M=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:$A;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);let A,N=!1,O,C,q,X;_&&(A=_.getSpacedPoints(m),N=!0,f=!1,O=_.computeFrenetFrames(m,!1),C=new L,q=new L,X=new L),f||(S=0,g=0,y=0,M=0);let te=l.extractPoints(c),se=te.shape,we=te.holes;if(!jr.isClockWise(se)){se=se.reverse();for(let Ie=0,Ge=we.length;Ie<Ge;Ie++){let qe=we[Ie];jr.isClockWise(qe)&&(we[Ie]=qe.reverse())}}let Z=jr.triangulateShape(se,we),ne=se;for(let Ie=0,Ge=we.length;Ie<Ge;Ie++){let qe=we[Ie];se=se.concat(qe)}function ie(Ie,Ge,qe){return Ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),Ge.clone().multiplyScalar(qe).add(Ie)}let j=se.length,Le=Z.length;function Oe(Ie,Ge,qe){let at,Je,V,B=Ie.x-Ge.x,be=Ie.y-Ge.y,ge=qe.x-Ie.x,De=qe.y-Ie.y,Qe=B*B+be*be,Nt=B*De-be*ge;if(Math.abs(Nt)>Number.EPSILON){let yt=Math.sqrt(Qe),K=Math.sqrt(ge*ge+De*De),Ne=Ge.x-be/yt,We=Ge.y+B/yt,ot=qe.x-De/K,Me=qe.y+ge/K,dt=((ot-Ne)*De-(Me-We)*ge)/(B*De-be*ge);at=Ne+B*dt-Ie.x,Je=We+be*dt-Ie.y;let Ht=at*at+Je*Je;if(Ht<=2)return new _e(at,Je);V=Math.sqrt(Ht/2)}else{let yt=!1;B>Number.EPSILON?ge>Number.EPSILON&&(yt=!0):B<-Number.EPSILON?ge<-Number.EPSILON&&(yt=!0):Math.sign(be)===Math.sign(De)&&(yt=!0),yt?(at=-be,Je=B,V=Math.sqrt(Qe)):(at=B,Je=be,V=Math.sqrt(Qe/2))}return new _e(at/V,Je/V)}let ke=[];for(let Ie=0,Ge=ne.length,qe=Ge-1,at=Ie+1;Ie<Ge;Ie++,qe++,at++)qe===Ge&&(qe=0),at===Ge&&(at=0),ke[Ie]=Oe(ne[Ie],ne[qe],ne[at]);let et=[],ze,ht=ke.concat();for(let Ie=0,Ge=we.length;Ie<Ge;Ie++){let qe=we[Ie];ze=[];for(let at=0,Je=qe.length,V=Je-1,B=at+1;at<Je;at++,V++,B++)V===Je&&(V=0),B===Je&&(B=0),ze[at]=Oe(qe[at],qe[V],qe[B]);et.push(ze),ht=ht.concat(ze)}for(let Ie=0;Ie<S;Ie++){let Ge=Ie/S,qe=g*Math.cos(Ge*Math.PI/2),at=y*Math.sin(Ge*Math.PI/2)+M;for(let Je=0,V=ne.length;Je<V;Je++){let B=ie(ne[Je],ke[Je],at);xt(B.x,B.y,-qe)}for(let Je=0,V=we.length;Je<V;Je++){let B=we[Je];ze=et[Je];for(let be=0,ge=B.length;be<ge;be++){let De=ie(B[be],ze[be],at);xt(De.x,De.y,-qe)}}}let gt=y+M;for(let Ie=0;Ie<j;Ie++){let Ge=f?ie(se[Ie],ht[Ie],gt):se[Ie];N?(q.copy(O.normals[0]).multiplyScalar(Ge.x),C.copy(O.binormals[0]).multiplyScalar(Ge.y),X.copy(A[0]).add(q).add(C),xt(X.x,X.y,X.z)):xt(Ge.x,Ge.y,0)}for(let Ie=1;Ie<=m;Ie++)for(let Ge=0;Ge<j;Ge++){let qe=f?ie(se[Ge],ht[Ge],gt):se[Ge];N?(q.copy(O.normals[Ie]).multiplyScalar(qe.x),C.copy(O.binormals[Ie]).multiplyScalar(qe.y),X.copy(A[Ie]).add(q).add(C),xt(X.x,X.y,X.z)):xt(qe.x,qe.y,d/m*Ie)}for(let Ie=S-1;Ie>=0;Ie--){let Ge=Ie/S,qe=g*Math.cos(Ge*Math.PI/2),at=y*Math.sin(Ge*Math.PI/2)+M;for(let Je=0,V=ne.length;Je<V;Je++){let B=ie(ne[Je],ke[Je],at);xt(B.x,B.y,d+qe)}for(let Je=0,V=we.length;Je<V;Je++){let B=we[Je];ze=et[Je];for(let be=0,ge=B.length;be<ge;be++){let De=ie(B[be],ze[be],at);N?xt(De.x,De.y+A[m-1].y,A[m-1].x+qe):xt(De.x,De.y,d+qe)}}}xe(),Kt();function xe(){let Ie=i.length/3;if(f){let Ge=0,qe=j*Ge;for(let at=0;at<Le;at++){let Je=Z[at];ut(Je[2]+qe,Je[1]+qe,Je[0]+qe)}Ge=m+S*2,qe=j*Ge;for(let at=0;at<Le;at++){let Je=Z[at];ut(Je[0]+qe,Je[1]+qe,Je[2]+qe)}}else{for(let Ge=0;Ge<Le;Ge++){let qe=Z[Ge];ut(qe[2],qe[1],qe[0])}for(let Ge=0;Ge<Le;Ge++){let qe=Z[Ge];ut(qe[0]+j*m,qe[1]+j*m,qe[2]+j*m)}}n.addGroup(Ie,i.length/3-Ie,0)}function Kt(){let Ie=i.length/3,Ge=0;Ct(ne,Ge),Ge+=ne.length;for(let qe=0,at=we.length;qe<at;qe++){let Je=we[qe];Ct(Je,Ge),Ge+=Je.length}n.addGroup(Ie,i.length/3-Ie,1)}function Ct(Ie,Ge){let qe=Ie.length;for(;--qe>=0;){let at=qe,Je=qe-1;Je<0&&(Je=Ie.length-1);for(let V=0,B=m+S*2;V<B;V++){let be=j*V,ge=j*(V+1),De=Ge+at+be,Qe=Ge+Je+be,Nt=Ge+Je+ge,yt=Ge+at+ge;Gt(De,Qe,Nt,yt)}}}function xt(Ie,Ge,qe){h.push(Ie),h.push(Ge),h.push(qe)}function ut(Ie,Ge,qe){Rt(Ie),Rt(Ge),Rt(qe);let at=i.length/3,Je=x.generateTopUV(n,i,at-3,at-2,at-1);St(Je[0]),St(Je[1]),St(Je[2])}function Gt(Ie,Ge,qe,at){Rt(Ie),Rt(Ge),Rt(at),Rt(Ge),Rt(qe),Rt(at);let Je=i.length/3,V=x.generateSideWallUV(n,i,Je-6,Je-3,Je-2,Je-1);St(V[0]),St(V[1]),St(V[3]),St(V[1]),St(V[2]),St(V[3])}function Rt(Ie){i.push(h[Ie*3+0]),i.push(h[Ie*3+1]),i.push(h[Ie*3+2])}function St(Ie){r.push(Ie.x),r.push(Ie.y)}}}toJSON(){let e=it.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return QA(t,n,e)}},$A={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],l=e[n*3],h=e[n*3+1],c=e[i*3],m=e[i*3+1];return[new _e(r,a),new _e(l,h),new _e(c,m)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],l=e[t*3+1],h=e[t*3+2],c=e[n*3],m=e[n*3+1],d=e[n*3+2],f=e[i*3],g=e[i*3+1],y=e[i*3+2],M=e[r*3],S=e[r*3+1],_=e[r*3+2];return Math.abs(l-m)<.01?[new _e(a,1-h),new _e(c,1-d),new _e(f,1-y),new _e(M,1-_)]:[new _e(l,1-h),new _e(m,1-d),new _e(g,1-y),new _e(S,1-_)]}};function QA(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var vi=class extends zs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}},Hh=class extends it{constructor(e,t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ai(i,0,Math.PI*2);let r=[],a=[],l=[],h=1/t,c=new L,m=new _e;for(let d=0;d<=t;d++){let f=n+d*h*i,g=Math.sin(f),y=Math.cos(f);for(let M=0;M<=e.length-1;M++)c.x=e[M].x*g,c.y=e[M].y,c.z=e[M].x*y,a.push(c.x,c.y,c.z),m.x=d/t,m.y=M/(e.length-1),l.push(m.x,m.y)}for(let d=0;d<t;d++)for(let f=0;f<e.length-1;f++){let g=f+d*e.length,y=g,M=g+e.length,S=g+e.length+1,_=g+1;r.push(y,M,_),r.push(M,S,_)}if(this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("uv",new rt(l,2)),this.computeVertexNormals(),i===Math.PI*2){let d=this.attributes.normal.array,f=new L,g=new L,y=new L,M=t*e.length*3;for(let S=0,_=0;S<e.length;S++,_+=3)f.x=d[_+0],f.y=d[_+1],f.z=d[_+2],g.x=d[M+_+0],g.y=d[M+_+1],g.z=d[M+_+2],y.addVectors(f,g).normalize(),d[_+0]=d[M+_+0]=y.x,d[_+1]=d[M+_+1]=y.y,d[_+2]=d[M+_+2]=y.z}}},jl=class extends zs{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}},Bh=class extends it{constructor(e,t,n){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};let i=[],r=[],a=[],l=[],h=1e-5,c=new L,m=new L,d=new L,f=new L,g=new L;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let y=t+1;for(let M=0;M<=n;M++){let S=M/n;for(let _=0;_<=t;_++){let x=_/t;e(x,S,m),r.push(m.x,m.y,m.z),x-h>=0?(e(x-h,S,d),f.subVectors(m,d)):(e(x+h,S,d),f.subVectors(d,m)),S-h>=0?(e(x,S-h,d),g.subVectors(m,d)):(e(x,S+h,d),g.subVectors(d,m)),c.crossVectors(f,g).normalize(),a.push(c.x,c.y,c.z),l.push(x,S)}}for(let M=0;M<n;M++)for(let S=0;S<t;S++){let _=M*y+S,x=M*y+S+1,A=(M+1)*y+S+1,N=(M+1)*y+S;i.push(_,x,N),i.push(x,A,N)}this.setIndex(i),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}},Hi=class extends it{constructor(e=.5,t=1,n=8,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let l=[],h=[],c=[],m=[],d=e,f=(t-e)/i,g=new L,y=new _e;for(let M=0;M<=i;M++){for(let S=0;S<=n;S++){let _=r+S/n*a;g.x=d*Math.cos(_),g.y=d*Math.sin(_),h.push(g.x,g.y,g.z),c.push(0,0,1),y.x=(g.x/t+1)/2,y.y=(g.y/t+1)/2,m.push(y.x,y.y)}d+=f}for(let M=0;M<i;M++){let S=M*(n+1);for(let _=0;_<n;_++){let x=_+S,A=x,N=x+n+1,O=x+n+2,C=x+1;l.push(A,N,C),l.push(N,O,C)}}this.setIndex(l),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(m,2))}},Zl=class extends it{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],l=0,h=0;if(Array.isArray(e)===!1)c(e);else for(let m=0;m<e.length;m++)c(e[m]),this.addGroup(l,h,m),l+=h,h=0;this.setIndex(n),this.setAttribute("position",new rt(i,3)),this.setAttribute("normal",new rt(r,3)),this.setAttribute("uv",new rt(a,2));function c(m){let d=i.length/3,f=m.extractPoints(t),g=f.shape,y=f.holes;jr.isClockWise(g)===!1&&(g=g.reverse());for(let S=0,_=y.length;S<_;S++){let x=y[S];jr.isClockWise(x)===!0&&(y[S]=x.reverse())}let M=jr.triangulateShape(g,y);for(let S=0,_=y.length;S<_;S++){let x=y[S];g=g.concat(x)}for(let S=0,_=g.length;S<_;S++){let x=g[S];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let S=0,_=M.length;S<_;S++){let x=M[S],A=x[0]+d,N=x[1]+d,O=x[2]+d;n.push(A,N,O),h+=3}}}toJSON(){let e=it.prototype.toJSON.call(this),t=this.parameters.shapes;return eR(t,e)}};function eR(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Us=class extends it{constructor(e=1,t=8,n=6,i=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let h=Math.min(a+l,Math.PI),c=0,m=[],d=new L,f=new L,g=[],y=[],M=[],S=[];for(let _=0;_<=n;_++){let x=[],A=_/n,N=0;_==0&&a==0?N=.5/t:_==n&&h==Math.PI&&(N=-.5/t);for(let O=0;O<=t;O++){let C=O/t;d.x=-e*Math.cos(i+C*r)*Math.sin(a+A*l),d.y=e*Math.cos(a+A*l),d.z=e*Math.sin(i+C*r)*Math.sin(a+A*l),y.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),S.push(C+N,1-A),x.push(c++)}m.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){let A=m[_][x+1],N=m[_][x],O=m[_+1][x],C=m[_+1][x+1];(_!==0||a>0)&&g.push(A,N,C),(_!==n-1||h<Math.PI)&&g.push(N,O,C)}this.setIndex(g),this.setAttribute("position",new rt(y,3)),this.setAttribute("normal",new rt(M,3)),this.setAttribute("uv",new rt(S,2))}},_o=class extends zs{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}},Oh=class extends Qr{constructor(e,t={}){let n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new it;let i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t),this.type="TextGeometry"}},zh=class extends it{constructor(e=1,t=.4,n=8,i=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],h=[],c=[],m=new L,d=new L,f=new L;for(let g=0;g<=n;g++)for(let y=0;y<=i;y++){let M=y/i*r,S=g/n*Math.PI*2;d.x=(e+t*Math.cos(S))*Math.cos(M),d.y=(e+t*Math.cos(S))*Math.sin(M),d.z=t*Math.sin(S),l.push(d.x,d.y,d.z),m.x=e*Math.cos(M),m.y=e*Math.sin(M),f.subVectors(d,m).normalize(),h.push(f.x,f.y,f.z),c.push(y/i),c.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){let M=(i+1)*g+y-1,S=(i+1)*(g-1)+y-1,_=(i+1)*(g-1)+y,x=(i+1)*g+y;a.push(M,S,x),a.push(S,_,x)}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(c,2))}},Uh=class extends it{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let l=[],h=[],c=[],m=[],d=new L,f=new L,g=new L,y=new L,M=new L,S=new L,_=new L;for(let A=0;A<=n;++A){let N=A/n*r*Math.PI*2;x(N,r,a,e,g),x(N+.01,r,a,e,y),S.subVectors(y,g),_.addVectors(y,g),M.crossVectors(S,_),_.crossVectors(M,S),M.normalize(),_.normalize();for(let O=0;O<=i;++O){let C=O/i*Math.PI*2,q=-t*Math.cos(C),X=t*Math.sin(C);d.x=g.x+(q*_.x+X*M.x),d.y=g.y+(q*_.y+X*M.y),d.z=g.z+(q*_.z+X*M.z),h.push(d.x,d.y,d.z),f.subVectors(d,g).normalize(),c.push(f.x,f.y,f.z),m.push(A/n),m.push(O/i)}}for(let A=1;A<=n;A++)for(let N=1;N<=i;N++){let O=(i+1)*(A-1)+(N-1),C=(i+1)*A+(N-1),q=(i+1)*A+N,X=(i+1)*(A-1)+N;l.push(O,C,X),l.push(C,q,X)}this.setIndex(l),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(m,2));function x(A,N,O,C,q){let X=Math.cos(A),te=Math.sin(A),se=O/N*A,we=Math.cos(se);q.x=C*(2+we)*.5*X,q.y=C*(2+we)*te*.5,q.z=C*Math.sin(se)*.5}}},Gh=class extends it{constructor(e,t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let l=new L,h=new L,c=new _e,m=new L,d=[],f=[],g=[],y=[];M(),this.setIndex(y),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(g,2));function M(){for(let A=0;A<t;A++)S(A);S(r===!1?t:0),x(),_()}function S(A){m=e.getPointAt(A/t,m);let N=a.normals[A],O=a.binormals[A];for(let C=0;C<=i;C++){let q=C/i*Math.PI*2,X=Math.sin(q),te=-Math.cos(q);h.x=te*N.x+X*O.x,h.y=te*N.y+X*O.y,h.z=te*N.z+X*O.z,h.normalize(),f.push(h.x,h.y,h.z),l.x=m.x+n*h.x,l.y=m.y+n*h.y,l.z=m.z+n*h.z,d.push(l.x,l.y,l.z)}}function _(){for(let A=1;A<=t;A++)for(let N=1;N<=i;N++){let O=(i+1)*(A-1)+(N-1),C=(i+1)*A+(N-1),q=(i+1)*A+N,X=(i+1)*(A-1)+N;y.push(O,C,X),y.push(C,q,X)}}function x(){for(let A=0;A<=t;A++)for(let N=0;N<=i;N++)c.x=A/t,c.y=N/i,g.push(c.x,c.y)}}toJSON(){let e=it.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}},Vh=class extends it{constructor(e){if(super(),this.type="WireframeGeometry",e.isGeometry===!0){console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}let t=[],n=[0,0],i={},r=new L;if(e.index!==null){let a=e.attributes.position,l=e.index,h=e.groups;h.length===0&&(h=[{start:0,count:l.count,materialIndex:0}]);for(let c=0,m=h.length;c<m;++c){let d=h[c],f=d.start,g=d.count;for(let y=f,M=f+g;y<M;y+=3)for(let S=0;S<3;S++){let _=l.getX(y+S),x=l.getX(y+(S+1)%3);n[0]=Math.min(_,x),n[1]=Math.max(_,x);let A=n[0]+","+n[1];i[A]===void 0&&(i[A]={index1:n[0],index2:n[1]})}}for(let c in i){let m=i[c];r.fromBufferAttribute(a,m.index1),t.push(r.x,r.y,r.z),r.fromBufferAttribute(a,m.index2),t.push(r.x,r.y,r.z)}}else{let a=e.attributes.position;for(let l=0,h=a.count/3;l<h;l++)for(let c=0;c<3;c++){let m=3*l+c;r.fromBufferAttribute(a,m),t.push(r.x,r.y,r.z);let d=3*l+(c+1)%3;r.fromBufferAttribute(a,d),t.push(r.x,r.y,r.z)}}this.setAttribute("position",new rt(t,3))}},_i=Object.freeze({__proto__:null,BoxGeometry:xa,BoxBufferGeometry:xa,CircleGeometry:wo,CircleBufferGeometry:wo,ConeGeometry:Ph,ConeBufferGeometry:Ph,CylinderGeometry:bo,CylinderBufferGeometry:bo,DodecahedronGeometry:Dh,DodecahedronBufferGeometry:Dh,EdgesGeometry:Ih,ExtrudeGeometry:Qr,ExtrudeBufferGeometry:Qr,IcosahedronGeometry:vi,IcosahedronBufferGeometry:vi,LatheGeometry:Hh,LatheBufferGeometry:Hh,OctahedronGeometry:jl,OctahedronBufferGeometry:jl,ParametricGeometry:Bh,ParametricBufferGeometry:Bh,PlaneGeometry:$r,PlaneBufferGeometry:$r,PolyhedronGeometry:zs,PolyhedronBufferGeometry:zs,RingGeometry:Hi,RingBufferGeometry:Hi,ShapeGeometry:Zl,ShapeBufferGeometry:Zl,SphereGeometry:Us,SphereBufferGeometry:Us,TetrahedronGeometry:_o,TetrahedronBufferGeometry:_o,TextGeometry:Oh,TextBufferGeometry:Oh,TorusGeometry:zh,TorusBufferGeometry:zh,TorusKnotGeometry:Uh,TorusKnotBufferGeometry:Uh,TubeGeometry:Gh,TubeBufferGeometry:Gh,WireframeGeometry:Vh}),Wh=class extends Vn{constructor(e){super(),this.type="ShadowMaterial",this.color=new Ce(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};Wh.prototype.isShadowMaterial=!0;var Ea=class extends mn{constructor(e){super(e),this.type="RawShaderMaterial"}};Ea.prototype.isRawShaderMaterial=!0;var Jl=class extends Vn{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}};Jl.prototype.isMeshStandardMaterial=!0;var qh=class extends Jl{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=ai(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new Ce).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}};qh.prototype.isMeshPhysicalMaterial=!0;var Sa=class extends Vn{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Sa.prototype.isMeshPhongMaterial=!0;var Xh=class extends Vn{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};Xh.prototype.isMeshToonMaterial=!0;var Yh=class extends Vn{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Yh.prototype.isMeshNormalMaterial=!0;var jh=class extends Vn{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};jh.prototype.isMeshLambertMaterial=!0;var Zh=class extends Vn{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ce(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Zh.prototype.isMeshMatcapMaterial=!0;var Jh=class extends hn{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};Jh.prototype.isLineDashedMaterial=!0;var tR=Object.freeze({__proto__:null,ShadowMaterial:Wh,SpriteMaterial:or,RawShaderMaterial:Ea,ShaderMaterial:mn,PointsMaterial:Os,MeshPhysicalMaterial:qh,MeshStandardMaterial:Jl,MeshPhongMaterial:Sa,MeshToonMaterial:Xh,MeshNormalMaterial:Yh,MeshLambertMaterial:jh,MeshDepthMaterial:Wl,MeshDistanceMaterial:ql,MeshBasicMaterial:Pn,MeshMatcapMaterial:Zh,LineDashedMaterial:Jh,LineBasicMaterial:hn,Material:Vn}),gn={arraySlice:function(s,e,t){return gn.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let l=t[r]*e;for(let h=0;h!==e;++h)i[a++]=s[l+h]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){let r=s.clone();r.name=e;let a=[];for(let h=0;h<r.tracks.length;++h){let c=r.tracks[h],m=c.getValueSize(),d=[],f=[];for(let g=0;g<c.times.length;++g){let y=c.times[g]*i;if(!(y<t||y>=n)){d.push(c.times[g]);for(let M=0;M<m;++M)f.push(c.values[g*m+M])}}d.length!==0&&(c.times=gn.convertArray(d,c.times.constructor),c.values=gn.convertArray(f,c.values.constructor),a.push(c))}r.tracks=a;let l=1/0;for(let h=0;h<r.tracks.length;++h)l>r.tracks[h].times[0]&&(l=r.tracks[h].times[0]);for(let h=0;h<r.tracks.length;++h)r.tracks[h].shift(-1*l);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){let l=t.tracks[a],h=l.ValueTypeName;if(h==="bool"||h==="string")continue;let c=s.tracks.find(function(_){return _.name===l.name&&_.ValueTypeName===h});if(c===void 0)continue;let m=0,d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=d/3);let f=0,g=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=g/3);let y=l.times.length-1,M;if(r<=l.times[0]){let _=m,x=d-m;M=gn.arraySlice(l.values,_,x)}else if(r>=l.times[y]){let _=y*d+m,x=_+d-m;M=gn.arraySlice(l.values,_,x)}else{let _=l.createInterpolant(),x=m,A=d-m;_.evaluate(r),M=gn.arraySlice(_.resultBuffer,x,A)}h==="quaternion"&&new pn().fromArray(M).normalize().conjugate().toArray(M);let S=c.times.length;for(let _=0;_<S;++_){let x=_*g+f;if(h==="quaternion")pn.multiplyQuaternionsFlat(c.values,x,M,0,c.values,x);else{let A=g-f*2;for(let N=0;N<A;++N)c.values[x+N]-=M[N]}}}return s.blendMode=lg,s}},kr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===l)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===h)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};kr.prototype.beforeStart_=kr.prototype.copySampleValue_;kr.prototype.afterEnd_=kr.prototype.copySampleValue_;var wf=class extends kr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ho,endingEnd:ho}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,l=i[r],h=i[a];if(l===void 0)switch(this.getSettings_().endingStart){case uo:r=e,l=2*t-n;break;case Mh:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case uo:a=e,h=2*n-t;break;case Mh:a=1,h=n+i[1]-i[0];break;default:a=e-1,h=t}let c=(n-t)*.5,m=this.valueSize;this._weightPrev=c/(t-l),this._weightNext=c/(h-n),this._offsetPrev=r*m,this._offsetNext=a*m}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=e*l,c=h-l,m=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,g=this._weightNext,y=(n-t)/(i-t),M=y*y,S=M*y,_=-f*S+2*f*M-f*y,x=(1+f)*S+(-1.5-2*f)*M+(-.5+f)*y+1,A=(-1-g)*S+(1.5+g)*M+.5*y,N=g*S-g*M;for(let O=0;O!==l;++O)r[O]=_*a[m+O]+x*a[c+O]+A*a[h+O]+N*a[d+O];return r}},Kh=class extends kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=e*l,c=h-l,m=(n-t)/(i-t),d=1-m;for(let f=0;f!==l;++f)r[f]=a[c+f]*d+a[h+f]*m;return r}},bf=class extends kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gn.convertArray(t,this.TimeBufferType),this.values=gn.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gn.convertArray(e.times,Array),values:gn.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bh:t=this.InterpolantFactoryMethodDiscrete;break;case _h:t=this.InterpolantFactoryMethodLinear;break;case Qd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bh;case this.InterpolantFactoryMethodLinear:return _h;case this.InterpolantFactoryMethodSmooth:return Qd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=gn.arraySlice(n,r,a),this.values=gn.arraySlice(this.values,r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let h=n[l];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,h),e=!1;break}if(a!==null&&a>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,h,a),e=!1;break}a=h}if(i!==void 0&&gn.isTypedArray(i))for(let l=0,h=i.length;l!==h;++l){let c=i[l];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,c),e=!1;break}}return e}optimize(){let e=gn.arraySlice(this.times),t=gn.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Qd,r=e.length-1,a=1;for(let l=1;l<r;++l){let h=!1,c=e[l],m=e[l+1];if(c!==m&&(l!==1||c!==e[0]))if(i)h=!0;else{let d=l*n,f=d-n,g=d+n;for(let y=0;y!==n;++y){let M=t[d+y];if(M!==t[f+y]||M!==t[g+y]){h=!0;break}}}if(h){if(l!==a){e[a]=e[l];let d=l*n,f=a*n;for(let g=0;g!==n;++g)t[f+g]=t[d+g]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,h=a*n,c=0;c!==n;++c)t[h+c]=t[l+c];++a}return a!==e.length?(this.times=gn.arraySlice(e,0,a),this.values=gn.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=gn.arraySlice(this.times,0),t=gn.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=_h;var Gs=class extends Zi{};Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=bh;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var $h=class extends Zi{};$h.prototype.ValueTypeName="color";var Mo=class extends Zi{};Mo.prototype.ValueTypeName="number";var _f=class extends kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=(n-t)/(i-t),c=e*l;for(let m=c+l;c!==m;c+=4)pn.slerpFlat(r,0,a,c-l,a,c,h);return r}},Ta=class extends Zi{InterpolantFactoryMethodLinear(e){return new _f(this.times,this.values,this.getValueSize(),e)}};Ta.prototype.ValueTypeName="quaternion";Ta.prototype.DefaultInterpolation=_h;Ta.prototype.InterpolantFactoryMethodSmooth=void 0;var Vs=class extends Zi{};Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=bh;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends Zi{};Eo.prototype.ValueTypeName="vector";var So=class{constructor(e,t=-1,n,i=ep){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ji(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(iR(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Zi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let l=0;l<r;l++){let h=[],c=[];h.push((l+r-1)%r,l,(l+1)%r),c.push(0,1,0);let m=gn.getKeyframeOrder(h);h=gn.sortedArray(h,1,m),c=gn.sortedArray(c,1,m),!i&&h[0]===0&&(h.push(r),c.push(c[0])),a.push(new Mo(".morphTargetInfluences["+t[l].name+"]",h,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,h=e.length;l<h;l++){let c=e[l],m=c.name.match(r);if(m&&m.length>1){let d=m[1],f=i[d];f||(i[d]=f=[]),f.push(c)}}let a=[];for(let l in i)a.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,f,g,y,M){if(g.length!==0){let S=[],_=[];gn.flattenJSON(g,S,_,y),S.length!==0&&M.push(new d(f,S,_))}},i=[],r=e.name||"default",a=e.fps||30,l=e.blendMode,h=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let g={},y;for(y=0;y<f.length;y++)if(f[y].morphTargets)for(let M=0;M<f[y].morphTargets.length;M++)g[f[y].morphTargets[M]]=-1;for(let M in g){let S=[],_=[];for(let x=0;x!==f[y].morphTargets.length;++x){let A=f[y];S.push(A.time),_.push(A.morphTarget===M?1:0)}i.push(new Mo(".morphTargetInfluence["+M+"]",S,_))}h=g.length*(a||1)}else{let g=".bones["+t[d].name+"]";n(Eo,g+".position",f,"pos",i),n(Ta,g+".quaternion",f,"rot",i),n(Eo,g+".scale",f,"scl",i)}}return i.length===0?null:new this(r,h,i,l)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function nR(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return Eo;case"color":return $h;case"quaternion":return Ta;case"bool":case"boolean":return Gs;case"string":return Vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function iR(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=nR(s.type);if(s.times===void 0){let t=[],n=[];gn.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var To={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Qh=class{constructor(e,t,n){let i=this,r=!1,a=0,l=0,h,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){l++,r===!1&&i.onStart!==void 0&&i.onStart(m,a,l),r=!0},this.itemEnd=function(m){a++,i.onProgress!==void 0&&i.onProgress(m,a,l),a===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(m){i.onError!==void 0&&i.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,d){return c.push(m,d),this},this.removeHandler=function(m){let d=c.indexOf(m);return d!==-1&&c.splice(d,2),this},this.getHandler=function(m){for(let d=0,f=c.length;d<f;d+=2){let g=c[d],y=c[d+1];if(g.global&&(g.lastIndex=0),g.test(m))return y}return null}}},Gb=new Qh,ii=class{constructor(e){this.manager=e!==void 0?e:Gb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Pr={},ur=class extends ii{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=To.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;if(Pr[e]!==void 0){Pr[e].push({onLoad:t,onProgress:n,onError:i});return}let l=/^data:(.*?)(;base64)?,(.*)$/,h=e.match(l),c;if(h){let m=h[1],d=!!h[2],f=h[3];f=decodeURIComponent(f),d&&(f=atob(f));try{let g,y=(this.responseType||"").toLowerCase();switch(y){case"arraybuffer":case"blob":let M=new Uint8Array(f.length);for(let _=0;_<f.length;_++)M[_]=f.charCodeAt(_);y==="blob"?g=new Blob([M.buffer],{type:m}):g=M.buffer;break;case"document":g=new DOMParser().parseFromString(f,m);break;case"json":g=JSON.parse(f);break;default:g=f;break}setTimeout(function(){t&&t(g),r.manager.itemEnd(e)},0)}catch(g){setTimeout(function(){i&&i(g),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{Pr[e]=[],Pr[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(m){let d=this.response,f=Pr[e];if(delete Pr[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),To.add(e,d);for(let g=0,y=f.length;g<y;g++){let M=f[g];M.onLoad&&M.onLoad(d)}r.manager.itemEnd(e)}else{for(let g=0,y=f.length;g<y;g++){let M=f[g];M.onError&&M.onError(m)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(m){let d=Pr[e];for(let f=0,g=d.length;f<g;f++){let y=d[f];y.onProgress&&y.onProgress(m)}},!1),c.addEventListener("error",function(m){let d=Pr[e];delete Pr[e];for(let f=0,g=d.length;f<g;f++){let y=d[f];y.onError&&y.onError(m)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(m){let d=Pr[e];delete Pr[e];for(let f=0,g=d.length;f<g;f++){let y=d[f];y.onError&&y.onError(m)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let m in this.requestHeader)c.setRequestHeader(m,this.requestHeader[m]);c.send(null)}return r.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},D0=class extends ii{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new ur(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(r.parse(JSON.parse(l)))}catch(h){i?i(h):console.error(h),r.manager.itemError(e)}},n,i)}parse(e){let t=[];for(let n=0;n<e.length;n++){let i=So.parse(e[n]);t.push(i)}return t}},I0=class extends ii{constructor(e){super(e)}load(e,t,n,i){let r=this,a=[],l=new Ch,h=new ur(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(r.withCredentials);let c=0;function m(d){h.load(e[d],function(f){let g=r.parse(f,!0);a[d]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},c+=1,c===6&&(g.mipmapCount===1&&(l.minFilter=qt),l.image=a,l.format=g.format,l.needsUpdate=!0,t&&t(l))},n,i)}if(Array.isArray(e))for(let d=0,f=e.length;d<f;++d)m(d);else h.load(e,function(d){let f=r.parse(d,!0);if(f.isCubemap){let g=f.mipmaps.length/f.mipmapCount;for(let y=0;y<g;y++){a[y]={mipmaps:[]};for(let M=0;M<f.mipmapCount;M++)a[y].mipmaps.push(f.mipmaps[y*f.mipmapCount+M]),a[y].format=f.format,a[y].width=f.width,a[y].height=f.height}l.image=a}else l.image.width=f.width,l.image.height=f.height,l.mipmaps=f.mipmaps;f.mipmapCount===1&&(l.minFilter=qt),l.format=f.format,l.needsUpdate=!0,t&&t(l)},n,i);return l}},Kl=class extends ii{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=To.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let l=document.createElementNS("http://www.w3.org/1999/xhtml","img");function h(){l.removeEventListener("load",h,!1),l.removeEventListener("error",c,!1),To.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(m){l.removeEventListener("load",h,!1),l.removeEventListener("error",c,!1),i&&i(m),r.manager.itemError(e),r.manager.itemEnd(e)}return l.addEventListener("load",h,!1),l.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(e),l.src=e,l}},Mf=class extends ii{constructor(e){super(e)}load(e,t,n,i){let r=new wa,a=new Kl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let l=0;function h(c){a.load(e[c],function(m){r.images[c]=m,l++,l===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)h(c);return r}},Ef=class extends ii{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new ba,l=new ur(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(r.withCredentials),l.load(e,function(h){let c=r.parse(h);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Mi,a.wrapT=c.wrapT!==void 0?c.wrapT:Mi,a.magFilter=c.magFilter!==void 0?c.magFilter:qt,a.minFilter=c.minFilter!==void 0?c.minFilter:qt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=La),c.mipmapCount===1&&(a.minFilter=qt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}},Sf=class extends ii{constructor(e){super(e)}load(e,t,n,i){let r=new ni,a=new Kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){r.image=l;let h=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=h?ga:oi,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let l=0,h=r-1,c;for(;l<=h;)if(i=Math.floor(l+(h-l)/2),c=n[i]-a,c<0)l=i+1;else if(c>0)h=i-1;else{h=i;break}if(i=h,n[i]===a)return i/(r-1);let m=n[i],f=n[i+1]-m,g=(a-m)/f;return(i+g)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),l=this.getPoint(r),h=t||(a.isVector2?new _e:new L);return h.copy(l).sub(a).normalize(),h}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],a=[],l=new L,h=new st;for(let g=0;g<=e;g++){let y=g/e;i[g]=this.getTangentAt(y,new L),i[g].normalize()}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,m=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);m<=c&&(c=m,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],l),a[0].crossVectors(i[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),l.crossVectors(i[g-1],i[g]),l.length()>Number.EPSILON){l.normalize();let y=Math.acos(ai(i[g-1].dot(i[g]),-1,1));r[g].applyMatrix4(h.makeRotationAxis(l,y))}a[g].crossVectors(i[g],r[g])}if(t===!0){let g=Math.acos(ai(r[0].dot(r[e]),-1,1));g/=e,i[0].dot(l.crossVectors(r[0],r[e]))>0&&(g=-g);for(let y=1;y<=e;y++)r[y].applyMatrix4(h.makeRotationAxis(i[y],g*y)),a[y].crossVectors(i[y],r[y])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ao=class extends Ai{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,l=!1,h=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=h}getPoint(e,t){let n=t||new _e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let l=this.aStartAngle+e*r,h=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let m=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=h-this.aX,g=c-this.aY;h=f*m-g*d+this.aX,c=f*d+g*m+this.aY}return n.set(h,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};Ao.prototype.isEllipseCurve=!0;var eu=class extends Ao{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.type="ArcCurve"}};eu.prototype.isArcCurve=!0;function fg(){let s=0,e=0,t=0,n=0;function i(r,a,l,h){s=r,e=l,t=-3*r+3*a-2*l-h,n=2*r-2*a+l+h}return{initCatmullRom:function(r,a,l,h,c){i(a,l,c*(l-r),c*(h-a))},initNonuniformCatmullRom:function(r,a,l,h,c,m,d){let f=(a-r)/c-(l-r)/(c+m)+(l-a)/m,g=(l-a)/m-(h-a)/(m+d)+(h-l)/d;f*=m,g*=m,i(a,l,f,g)},calc:function(r){let a=r*r,l=a*r;return s+e*r+t*a+n*l}}}var Vd=new L,n0=new fg,i0=new fg,r0=new fg,tu=class extends Ai{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1);let c,m;this.closed||l>0?c=i[(l-1)%r]:(Vd.subVectors(i[0],i[1]).add(i[0]),c=Vd);let d=i[l%r],f=i[(l+1)%r];if(this.closed||l+2<r?m=i[(l+2)%r]:(Vd.subVectors(i[r-1],i[r-2]).add(i[r-1]),m=Vd),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(d),g),M=Math.pow(d.distanceToSquared(f),g),S=Math.pow(f.distanceToSquared(m),g);M<1e-4&&(M=1),y<1e-4&&(y=M),S<1e-4&&(S=M),n0.initNonuniformCatmullRom(c.x,d.x,f.x,m.x,y,M,S),i0.initNonuniformCatmullRom(c.y,d.y,f.y,m.y,y,M,S),r0.initNonuniformCatmullRom(c.z,d.z,f.z,m.z,y,M,S)}else this.curveType==="catmullrom"&&(n0.initCatmullRom(c.x,d.x,f.x,m.x,this.tension),i0.initCatmullRom(c.y,d.y,f.y,m.y,this.tension),r0.initCatmullRom(c.z,d.z,f.z,m.z,this.tension));return n.set(n0.calc(h),i0.calc(h),r0.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};tu.prototype.isCatmullRomCurve3=!0;function bx(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,l=s*s,h=s*l;return(2*t-2*n+r+a)*h+(-3*t+3*n-2*r-a)*l+r*s+t}function rR(s,e){let t=1-s;return t*t*e}function sR(s,e){return 2*(1-s)*s*e}function aR(s,e){return s*s*e}function gh(s,e,t,n){return rR(s,e)+sR(s,t)+aR(s,n)}function oR(s,e){let t=1-s;return t*t*t*e}function lR(s,e){let t=1-s;return 3*t*t*s*e}function cR(s,e){return 3*(1-s)*s*s*e}function hR(s,e){return s*s*s*e}function vh(s,e,t,n,i){return oR(s,e)+lR(s,t)+cR(s,n)+hR(s,i)}var $l=class extends Ai{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){let n=t,i=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(vh(e,i.x,r.x,a.x,l.x),vh(e,i.y,r.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};$l.prototype.isCubicBezierCurve=!0;var nu=class extends Ai{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(vh(e,i.x,r.x,a.x,l.x),vh(e,i.y,r.y,a.y,l.y),vh(e,i.z,r.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};nu.prototype.isCubicBezierCurve3=!0;var Ro=class extends Ai{constructor(e=new _e,t=new _e){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new _e;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ro.prototype.isLineCurve=!0;var Tf=class extends Ai{constructor(e=new L,t=new L){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ql=class extends Ai{constructor(e=new _e,t=new _e,n=new _e){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(gh(e,i.x,r.x,a.x),gh(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ql.prototype.isQuadraticBezierCurve=!0;var iu=class extends Ai{constructor(e=new L,t=new L,n=new L){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(gh(e,i.x,r.x,a.x),gh(e,i.y,r.y,a.y),gh(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};iu.prototype.isQuadraticBezierCurve3=!0;var ec=class extends Ai{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),l=r-a,h=i[a===0?a:a-1],c=i[a],m=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(bx(l,h.x,c.x,m.x,d.x),bx(l,h.y,c.y,m.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _e().fromArray(i))}return this}};ec.prototype.isSplineCurve=!0;var k0=Object.freeze({__proto__:null,ArcCurve:eu,CatmullRomCurve3:tu,CubicBezierCurve:$l,CubicBezierCurve3:nu,EllipseCurve:Ao,LineCurve:Ro,LineCurve3:Tf,QuadraticBezierCurve:Ql,QuadraticBezierCurve3:iu,SplineCurve:ec}),Af=class extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ro(t,e))}getPoint(e){let t=e*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=t){let r=n[i]-t,a=this.curves[i],l=a.getLength(),h=l===0?0:1-r/l;return a.getPointAt(h)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],l=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,h=a.getPoints(l);for(let c=0;c<h.length;c++){let m=h[c];n&&n.equals(m)||(t.push(m),n=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new k0[i.type]().fromJSON(i))}return this}},Lo=class extends Af{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ro(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ql(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let l=new $l(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ec(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+l,t+h,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,l,h){let c=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+c,t+m,n,i,r,a,l,h),this}absellipse(e,t,n,i,r,a,l,h){let c=new Ao(e,t,n,i,r,a,l,h);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let m=c.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Zr=class extends Lo{constructor(e){super(e),this.uuid=ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Lo().fromJSON(i))}return this}},Ji=class extends Ft{constructor(e,t=1){super(),this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};Ji.prototype.isLight=!0;var ru=class extends Ji{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ft.DefaultUp),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e){return Ji.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};ru.prototype.isHemisphereLight=!0;var _x=new st,Mx=new L,Ex=new L,su=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Mx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mx),Ex.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ex),t.updateMatrixWorld(),_x.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_x),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rf=class extends su{constructor(){super(new Rn(50,1,.5,500)),this.focus=1}updateMatrices(e){let t=this.camera,n=Eh*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};Rf.prototype.isSpotLightShadow=!0;var au=class extends Ji{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Ft.DefaultUp),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new Rf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};au.prototype.isSpotLight=!0;var Sx=new st,ch=new L,s0=new L,Lf=class extends su{constructor(){super(new Rn(90,1,.5,500)),this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ch.setFromMatrixPosition(e.matrixWorld),n.position.copy(ch),s0.copy(n.position),s0.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(s0),n.updateMatrixWorld(),i.makeTranslation(-ch.x,-ch.y,-ch.z),Sx.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sx)}};Lf.prototype.isPointLightShadow=!0;var Co=class extends Ji{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};Co.prototype.isPointLight=!0;var Po=class extends Fs{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,l=i+t,h=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=m*this.view.offsetY,h=l-m*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Po.prototype.isOrthographicCamera=!0;var Cf=class extends su{constructor(){super(new Po(-5,5,5,-5,.5,500))}};Cf.prototype.isDirectionalLightShadow=!0;var Aa=class extends Ji{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ft.DefaultUp),this.updateMatrix(),this.target=new Ft,this.shadow=new Cf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};Aa.prototype.isDirectionalLight=!0;var Do=class extends Ji{constructor(e,t){super(e,t),this.type="AmbientLight"}};Do.prototype.isAmbientLight=!0;var ou=class extends Ji{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};ou.prototype.isRectAreaLight=!0;var lu=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}};lu.prototype.isSphericalHarmonics3=!0;var Io=class extends Ji{constructor(e=new lu,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};Io.prototype.isLightProbe=!0;var Pf=class extends ii{constructor(e){super(e),this.textures={}}load(e,t,n,i){let r=this,a=new ur(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(JSON.parse(l)))}catch(h){i?i(h):console.error(h),r.manager.itemError(e)}},n,i)}parse(e){let t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}let i=new tR[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new Ce().setHex(e.sheen)),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let r in e.uniforms){let a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new Ce().setHex(a.value);break;case"v2":i.uniforms[r].value=new _e().fromArray(a.value);break;case"v3":i.uniforms[r].value=new L().fromArray(a.value);break;case"v4":i.uniforms[r].value=new Lt().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Bn().fromArray(a.value);break;case"m4":i.uniforms[r].value=new st().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(let r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new _e().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(i.transmission=e.transmission),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),i}setTextures(e){return this.textures=e,this}},cu=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},ko=class extends it{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};ko.prototype.isInstancedBufferGeometry=!0;var wn=class extends Ze{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};wn.prototype.isInstancedBufferAttribute=!0;var Df=class extends ii{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new ur(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(JSON.parse(l)))}catch(h){i?i(h):console.error(h),r.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(g,y){if(t[y]!==void 0)return t[y];let S=g.interleavedBuffers[y],_=r(g,S.buffer),x=uh(S.type,_),A=new Bs(x,S.stride);return A.uuid=S.uuid,t[y]=A,A}function r(g,y){if(n[y]!==void 0)return n[y];let S=g.arrayBuffers[y],_=new Uint32Array(S).buffer;return n[y]=_,_}let a=e.isInstancedBufferGeometry?new ko:new it,l=e.data.index;if(l!==void 0){let g=uh(l.type,l.array);a.setIndex(new Ze(g,1))}let h=e.data.attributes;for(let g in h){let y=h[g],M;if(y.isInterleavedBufferAttribute){let S=i(e.data,y.data);M=new _a(S,y.itemSize,y.offset,y.normalized)}else{let S=uh(y.type,y.array),_=y.isInstancedBufferAttribute?wn:Ze;M=new _(S,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),y.updateRange!==void 0&&(M.updateRange.offset=y.updateRange.offset,M.updateRange.count=y.updateRange.count),a.setAttribute(g,M)}let c=e.data.morphAttributes;if(c)for(let g in c){let y=c[g],M=[];for(let S=0,_=y.length;S<_;S++){let x=y[S],A;if(x.isInterleavedBufferAttribute){let N=i(e.data,x.data);A=new _a(N,x.itemSize,x.offset,x.normalized)}else{let N=uh(x.type,x.array);A=new Ze(N,x.itemSize,x.normalized)}x.name!==void 0&&(A.name=x.name),M.push(A)}a.morphAttributes[g]=M}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let g=0,y=d.length;g!==y;++g){let M=d[g];a.addGroup(M.start,M.count,M.materialIndex)}let f=e.data.boundingSphere;if(f!==void 0){let g=new L;f.center!==void 0&&g.fromArray(f.center),a.boundingSphere=new ar(g,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},F0=class extends ii{constructor(e){super(e)}load(e,t,n,i){let r=this,a=this.path===""?cu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let l=new ur(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){let c=null;try{c=JSON.parse(h)}catch(d){i!==void 0&&i(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}let m=c.metadata;if(m===void 0||m.type===void 0||m.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}parse(e,t){let n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),l=this.parseTextures(e.textures,a),h=this.parseMaterials(e.materials,l),c=this.parseObject(e.object,r,h,n),m=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,m),t!==void 0){let d=!1;for(let f in a)if(a[f]instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}parseShapes(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let r=new Zr().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let l=new vf().fromJSON(e[r],i);n[l.uuid]=l}return n}parseGeometries(e,t){let n={},i;if(e!==void 0){let r=new Df;for(let a=0,l=e.length;a<l;a++){let h,c=e[a];switch(c.type){case"PlaneGeometry":case"PlaneBufferGeometry":h=new _i[c.type](c.width,c.height,c.widthSegments,c.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":h=new _i[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":h=new _i[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":h=new _i[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":h=new _i[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":h=new _i[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":h=new _i[c.type](c.radius,c.detail);break;case"RingGeometry":case"RingBufferGeometry":h=new _i[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":h=new _i[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":h=new _i[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);break;case"TubeGeometry":case"TubeBufferGeometry":h=new _i[c.type](new k0[c.path.type]().fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);break;case"LatheGeometry":case"LatheBufferGeometry":h=new _i[c.type](c.points,c.segments,c.phiStart,c.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":h=new _i[c.type](c.vertices,c.indices,c.radius,c.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":i=[];for(let d=0,f=c.shapes.length;d<f;d++){let g=t[c.shapes[d]];i.push(g)}h=new _i[c.type](i,c.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":i=[];for(let d=0,f=c.shapes.length;d<f;d++){let g=t[c.shapes[d]];i.push(g)}let m=c.options.extrudePath;m!==void 0&&(c.options.extrudePath=new k0[m.type]().fromJSON(m)),h=new _i[c.type](i,c.options);break;case"BufferGeometry":case"InstancedBufferGeometry":h=r.parse(c);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+c.type+'"');continue}h.uuid=c.uuid,c.name!==void 0&&(h.name=c.name),h.isBufferGeometry===!0&&c.userData!==void 0&&(h.userData=c.userData),n[c.uuid]=h}}return n}parseMaterials(e,t){let n={},i={};if(e!==void 0){let r=new Pf;r.setTextures(t);for(let a=0,l=e.length;a<l;a++){let h=e[a];if(h.type==="MultiMaterial"){let c=[];for(let m=0;m<h.materials.length;m++){let d=h.materials[m];n[d.uuid]===void 0&&(n[d.uuid]=r.parse(d)),c.push(n[d.uuid])}i[h.uuid]=c}else n[h.uuid]===void 0&&(n[h.uuid]=r.parse(h)),i[h.uuid]=n[h.uuid]}}return i}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let i=e[n],r=So.parse(i);t[r.uuid]=r}return t}parseImages(e,t){let n=this,i={},r;function a(h){return n.manager.itemStart(h),r.load(h,function(){n.manager.itemEnd(h)},void 0,function(){n.manager.itemError(h),n.manager.itemEnd(h)})}function l(h){if(typeof h=="string"){let c=h,m=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(m)}else return h.data?{data:uh(h.type,h.data),width:h.width,height:h.height}:null}if(e!==void 0&&e.length>0){let h=new Qh(t);r=new Kl(h),r.setCrossOrigin(this.crossOrigin);for(let c=0,m=e.length;c<m;c++){let d=e[c],f=d.url;if(Array.isArray(f)){i[d.uuid]=[];for(let g=0,y=f.length;g<y;g++){let M=f[g],S=l(M);S!==null&&(S instanceof HTMLImageElement?i[d.uuid].push(S):i[d.uuid].push(new ba(S.data,S.width,S.height)))}}else{let g=l(d.url);g!==null&&(i[d.uuid]=g)}}}return i}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let l=e[r];l.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',l.uuid),t[l.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",l.image);let h,c=t[l.image];Array.isArray(c)?(h=new wa(c),c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ba(c.data,c.width,c.height):h=new ni(c),c&&(h.needsUpdate=!0)),h.uuid=l.uuid,l.name!==void 0&&(h.name=l.name),l.mapping!==void 0&&(h.mapping=n(l.mapping,uR)),l.offset!==void 0&&h.offset.fromArray(l.offset),l.repeat!==void 0&&h.repeat.fromArray(l.repeat),l.center!==void 0&&h.center.fromArray(l.center),l.rotation!==void 0&&(h.rotation=l.rotation),l.wrap!==void 0&&(h.wrapS=n(l.wrap[0],Tx),h.wrapT=n(l.wrap[1],Tx)),l.format!==void 0&&(h.format=l.format),l.type!==void 0&&(h.type=l.type),l.encoding!==void 0&&(h.encoding=l.encoding),l.minFilter!==void 0&&(h.minFilter=n(l.minFilter,Ax)),l.magFilter!==void 0&&(h.magFilter=n(l.magFilter,Ax)),l.anisotropy!==void 0&&(h.anisotropy=l.anisotropy),l.flipY!==void 0&&(h.flipY=l.flipY),l.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=l.premultiplyAlpha),l.unpackAlignment!==void 0&&(h.unpackAlignment=l.unpackAlignment),i[l.uuid]=h}return i}parseObject(e,t,n,i){let r;function a(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function l(m){if(m!==void 0){if(Array.isArray(m)){let d=[];for(let f=0,g=m.length;f<g;f++){let y=m[f];n[y]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",y),d.push(n[y])}return d}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}let h,c;switch(e.type){case"Scene":r=new Hs,e.background!==void 0&&Number.isInteger(e.background)&&(r.background=new Ce(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?r.fog=new Lh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(r.fog=new yo(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":r=new Rn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(r.focus=e.focus),e.zoom!==void 0&&(r.zoom=e.zoom),e.filmGauge!==void 0&&(r.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(r.filmOffset=e.filmOffset),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"OrthographicCamera":r=new Po(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(r.zoom=e.zoom),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"AmbientLight":r=new Do(e.color,e.intensity);break;case"DirectionalLight":r=new Aa(e.color,e.intensity);break;case"PointLight":r=new Co(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":r=new ou(e.color,e.intensity,e.width,e.height);break;case"SpotLight":r=new au(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":r=new ru(e.color,e.groundColor,e.intensity);break;case"LightProbe":r=new Io().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),c=l(e.material),r=new Xl(h,c),e.bindMode!==void 0&&(r.bindMode=e.bindMode),e.bindMatrix!==void 0&&r.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(r.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),c=l(e.material),r=new wt(h,c);break;case"InstancedMesh":h=a(e.geometry),c=l(e.material);let m=e.count,d=e.instanceMatrix,f=e.instanceColor;r=new cr(h,c,m),r.instanceMatrix=new Ze(new Float32Array(d.array),16),f!==void 0&&(r.instanceColor=new Ze(new Float32Array(f.array),f.itemSize));break;case"LOD":r=new gf;break;case"Line":r=new Ti(a(e.geometry),l(e.material));break;case"LineLoop":r=new xo(a(e.geometry),l(e.material));break;case"LineSegments":r=new Zn(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":r=new Ni(a(e.geometry),l(e.material));break;case"Sprite":r=new lr(l(e.material));break;case"Group":r=new On;break;case"Bone":r=new Yl;break;default:r=new Ft}if(r.uuid=e.uuid,e.name!==void 0&&(r.name=e.name),e.matrix!==void 0?(r.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=e.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(e.position!==void 0&&r.position.fromArray(e.position),e.rotation!==void 0&&r.rotation.fromArray(e.rotation),e.quaternion!==void 0&&r.quaternion.fromArray(e.quaternion),e.scale!==void 0&&r.scale.fromArray(e.scale)),e.castShadow!==void 0&&(r.castShadow=e.castShadow),e.receiveShadow!==void 0&&(r.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(r.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(r.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(r.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(r.visible=e.visible),e.frustumCulled!==void 0&&(r.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(r.renderOrder=e.renderOrder),e.userData!==void 0&&(r.userData=e.userData),e.layers!==void 0&&(r.layers.mask=e.layers),e.children!==void 0){let m=e.children;for(let d=0;d<m.length;d++)r.add(this.parseObject(m[d],t,n,i))}if(e.animations!==void 0){let m=e.animations;for(let d=0;d<m.length;d++){let f=m[d];r.animations.push(i[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(r.autoUpdate=e.autoUpdate);let m=e.levels;for(let d=0;d<m.length;d++){let f=m[d],g=r.getObjectByProperty("uuid",f.object);g!==void 0&&r.addLevel(g,f.distance)}}return r}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}},uR={UVMapping:Qf,CubeReflectionMapping:pu,CubeRefractionMapping:mu,EquirectangularReflectionMapping:nf,EquirectangularRefractionMapping:rf,CubeUVReflectionMapping:ic,CubeUVRefractionMapping:gu},Tx={RepeatWrapping:go,ClampToEdgeWrapping:Mi,MirroredRepeatWrapping:yh},Ax={NearestFilter:Ln,NearestMipmapNearestFilter:sf,NearestMipmapLinearFilter:af,LinearFilter:qt,LinearMipmapNearestFilter:og,LinearMipmapLinearFilter:La},If=class extends ii{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=To.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){To.add(e,h),t&&t(h),r.manager.itemEnd(e)}).catch(function(h){i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}};If.prototype.isImageBitmapLoader=!0;var kf=class{constructor(){this.type="ShapePath",this.color=new Ce,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Lo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(x){let A=[];for(let N=0,O=x.length;N<O;N++){let C=x[N],q=new Zr;q.curves=C.curves,A.push(q)}return A}function i(x,A){let N=A.length,O=!1;for(let C=N-1,q=0;q<N;C=q++){let X=A[C],te=A[q],se=te.x-X.x,we=te.y-X.y;if(Math.abs(we)>Number.EPSILON){if(we<0&&(X=A[q],se=-se,te=A[C],we=-we),x.y<X.y||x.y>te.y)continue;if(x.y===X.y){if(x.x===X.x)return!0}else{let ce=we*(x.x-X.x)-se*(x.y-X.y);if(ce===0)return!0;if(ce<0)continue;O=!O}}else{if(x.y!==X.y)continue;if(te.x<=x.x&&x.x<=X.x||X.x<=x.x&&x.x<=te.x)return!0}}return O}let r=jr.isClockWise,a=this.subPaths;if(a.length===0)return[];if(t===!0)return n(a);let l,h,c,m=[];if(a.length===1)return h=a[0],c=new Zr,c.curves=h.curves,m.push(c),m;let d=!r(a[0].getPoints());d=e?!d:d;let f=[],g=[],y=[],M=0,S;g[M]=void 0,y[M]=[];for(let x=0,A=a.length;x<A;x++)h=a[x],S=h.getPoints(),l=r(S),l=e?!l:l,l?(!d&&g[M]&&M++,g[M]={s:new Zr,p:S},g[M].s.curves=h.curves,d&&M++,y[M]=[]):y[M].push({h,p:S[0]});if(!g[0])return n(a);if(g.length>1){let x=!1,A=[];for(let N=0,O=g.length;N<O;N++)f[N]=[];for(let N=0,O=g.length;N<O;N++){let C=y[N];for(let q=0;q<C.length;q++){let X=C[q],te=!0;for(let se=0;se<g.length;se++)i(X.p,g[se].p)&&(N!==se&&A.push({froms:N,tos:se,hole:q}),te?(te=!1,f[se].push(X)):x=!0);te&&f[N].push(X)}}A.length>0&&(x||(y=f))}let _;for(let x=0,A=g.length;x<A;x++){c=g[x].s,m.push(c),_=y[x];for(let N=0,O=_.length;N<O;N++)c.holes.push(_[N].h)}return m}},hu=class{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){let n=[],i=dR(e,t,this.data);for(let r=0,a=i.length;r<a;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}};function dR(s,e,t){let n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,a=[],l=0,h=0;for(let c=0;c<n.length;c++){let m=n[c];if(m===`
`)l=0,h-=r;else{let d=fR(m,i,l,h,t);l+=d.offsetX,a.push(d.path)}}return a}function fR(s,e,t,n,i){let r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}let a=new kf,l,h,c,m,d,f,g,y;if(r.o){let M=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let S=0,_=M.length;S<_;)switch(M[S++]){case"m":l=M[S++]*e+t,h=M[S++]*e+n,a.moveTo(l,h);break;case"l":l=M[S++]*e+t,h=M[S++]*e+n,a.lineTo(l,h);break;case"q":c=M[S++]*e+t,m=M[S++]*e+n,d=M[S++]*e+t,f=M[S++]*e+n,a.quadraticCurveTo(d,f,c,m);break;case"b":c=M[S++]*e+t,m=M[S++]*e+n,d=M[S++]*e+t,f=M[S++]*e+n,g=M[S++]*e+t,y=M[S++]*e+n,a.bezierCurveTo(d,f,g,y,c,m);break}}return{offsetX:r.ha*e,path:a}}hu.prototype.isFont=!0;var N0=class extends ii{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new ur(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let h;try{h=JSON.parse(l)}catch(m){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),h=JSON.parse(l.substring(65,l.length-2))}let c=r.parse(h);t&&t(c)},n,i)}parse(e){return new hu(e)}},Wd,pg={getContext:function(){return Wd===void 0&&(Wd=new(window.AudioContext||window.webkitAudioContext)),Wd},setContext:function(s){Wd=s}},Ff=class extends ii{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new ur(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let h=l.slice(0);pg.getContext().decodeAudioData(h,function(m){t(m)})}catch(h){i?i(h):console.error(h),r.manager.itemError(e)}},n,i)}},Nf=class extends Io{constructor(e,t,n=1){super(void 0,n);let i=new Ce().set(e),r=new Ce().set(t),a=new L(i.r,i.g,i.b),l=new L(r.r,r.g,r.b),h=Math.sqrt(Math.PI),c=h*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(l).multiplyScalar(h),this.sh.coefficients[1].copy(a).sub(l).multiplyScalar(c)}};Nf.prototype.isHemisphereLightProbe=!0;var Hf=class extends Io{constructor(e,t=1){super(void 0,t);let n=new Ce().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}};Hf.prototype.isAmbientLightProbe=!0;var Rx=new st,Lx=new st,H0=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Rn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Rn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;let i=e.projectionMatrix.clone(),r=t.eyeSep/2,a=r*t.near/t.focus,l=t.near*Math.tan(mo*t.fov*.5)/t.zoom,h,c;Lx.elements[12]=-r,Rx.elements[12]=r,h=-l*t.aspect+a,c=l*t.aspect+a,i.elements[0]=2*t.near/(c-h),i.elements[8]=(c+h)/(c-h),this.cameraL.projectionMatrix.copy(i),h=-l*t.aspect-a,c=l*t.aspect-a,i.elements[0]=2*t.near/(c-h),i.elements[8]=(c+h)/(c-h),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Lx),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Rx)}},Bf=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Cx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Cx(){return(typeof performance=="undefined"?Date:performance).now()}var io=new L,Px=new pn,pR=new L,ro=new L,B0=class extends Ft{constructor(){super(),this.type="AudioListener",this.context=pg.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Bf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(io,Px,pR),ro.set(0,0,-1).applyQuaternion(Px),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(io.x,i),t.positionY.linearRampToValueAtTime(io.y,i),t.positionZ.linearRampToValueAtTime(io.z,i),t.forwardX.linearRampToValueAtTime(ro.x,i),t.forwardY.linearRampToValueAtTime(ro.y,i),t.forwardZ.linearRampToValueAtTime(ro.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(io.x,io.y,io.z),t.setOrientation(ro.x,ro.y,ro.z,n.x,n.y,n.z)}},uu=class extends Ft{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},so=new L,Dx=new pn,mR=new L,ao=new L,O0=class extends uu{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(so,Dx,mR),ao.set(0,0,1).applyQuaternion(Dx);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(so.x,n),t.positionY.linearRampToValueAtTime(so.y,n),t.positionZ.linearRampToValueAtTime(so.z,n),t.orientationX.linearRampToValueAtTime(ao.x,n),t.orientationY.linearRampToValueAtTime(ao.y,n),t.orientationZ.linearRampToValueAtTime(ao.z,n)}else t.setPosition(so.x,so.y,so.z),t.setOrientation(ao.x,ao.y,ao.z)}},Of=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},zf=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let l=0;l!==i;++l)n[r+l]=n[l];a=t}else{a+=t;let l=t/a;this._mixBufferRegion(n,r,0,l,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let h=t*this._origIndex;this._mixBufferRegion(n,i,h,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let h=t,c=t+t;h!==c;++h)if(n[h]!==n[h+t]){l.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){pn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;pn.multiplyQuaternionsFlat(e,a,e,t,e,n),pn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let l=0;l!==r;++l){let h=t+l;e[h]=e[h]*a+e[n+l]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]+e[n+a]*i}}},mg="\\[\\]\\.:\\/",gR=new RegExp("["+mg+"]","g"),gg="[^"+mg+"]",vR="[^"+mg.replace("\\.","")+"]",yR=/((?:WC+[\/:])*)/.source.replace("WC",gg),xR=/(WCOD+)?/.source.replace("WCOD",vR),wR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gg),bR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gg),_R=new RegExp("^"+yR+xR+wR+bR+"$"),MR=["material","materials","bones"],z0=class{constructor(e,t,n){let i=n||tn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tn=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gR,"")}static parseTrackName(e){let t=_R.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);MR.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let h=n(l.children);if(h)return h}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===c){c=m;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tn.Composite=z0;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uf=class{constructor(){this.uuid=ji(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,l,h=e.length,c=this.nCachedObjects_;for(let m=0,d=arguments.length;m!==d;++m){let f=arguments[m],g=f.uuid,y=t[g];if(y===void 0){y=h++,t[g]=y,e.push(f);for(let M=0,S=a;M!==S;++M)r[M].push(new tn(f,n[M],i[M]))}else if(y<c){l=e[y];let M=--c,S=e[M];t[S.uuid]=y,e[y]=S,t[g]=M,e[M]=f;for(let _=0,x=a;_!==x;++_){let A=r[_],N=A[M],O=A[y];A[y]=N,O===void 0&&(O=new tn(f,n[_],i[_])),A[M]=O}}else e[y]!==l&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,l=arguments.length;a!==l;++a){let h=arguments[a],c=h.uuid,m=t[c];if(m!==void 0&&m>=r){let d=r++,f=e[d];t[f.uuid]=m,e[m]=f,t[c]=d,e[d]=h;for(let g=0,y=i;g!==y;++g){let M=n[g],S=M[d],_=M[m];M[m]=S,M[d]=_}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=e.length;for(let l=0,h=arguments.length;l!==h;++l){let c=arguments[l],m=c.uuid,d=t[m];if(d!==void 0)if(delete t[m],d<r){let f=--r,g=e[f],y=--a,M=e[y];t[g.uuid]=d,e[d]=g,t[M.uuid]=f,e[f]=M,e.pop();for(let S=0,_=i;S!==_;++S){let x=n[S],A=x[f],N=x[y];x[d]=A,x[f]=N,x.pop()}}else{let f=--a,g=e[f];f>0&&(t[g.uuid]=d),e[d]=g,e.pop();for(let y=0,M=i;y!==M;++y){let S=n[y];S[d]=S[f],S.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,l=this._parsedPaths,h=this._objects,c=h.length,m=this.nCachedObjects_,d=new Array(c);i=r.length,n[e]=i,a.push(e),l.push(t),r.push(d);for(let f=m,g=h.length;f!==g;++f){let y=h[f];d[f]=new tn(y,e,t)}return d}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,l=a.length-1,h=a[l],c=e[l];t[c]=n,a[n]=h,a.pop(),r[n]=r[l],r.pop(),i[n]=i[l],i.pop()}}};Uf.prototype.isAnimationObjectGroup=!0;var U0=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,l=new Array(a),h={endingStart:ho,endingEnd:ho};for(let c=0;c!==a;++c){let m=r[c].createInterpolant(null);l[c]=m,m.settings=h}this._interpolantSettings=h,this._interpolants=l,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=mb,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,l=i/r;e.warp(1,a,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,l=this._timeScaleInterpolant;l===null&&(l=i._lendControlInterpolant(),this._timeScaleInterpolant=l);let h=l.parameterPositions,c=l.sampleValues;return h[0]=r,h[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let h=(e-r)*n;if(h<0||n===0)return;this._startTime=null,t=n*h}t*=this._updateTimeScale(e);let a=this._updateTime(t),l=this._updateWeight(e);if(l>0){let h=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case lg:for(let m=0,d=h.length;m!==d;++m)h[m].evaluate(a),c[m].accumulateAdditive(l);break;case ep:default:for(let m=0,d=h.length;m!==d;++m)h[m].evaluate(a),c[m].accumulate(i,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===gb;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===pb){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let l=Math.floor(i/t);i-=t*l,r+=Math.abs(l);let h=this.repetitions-r;if(h<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(h===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=uo,i.endingEnd=uo):(e?i.endingStart=this.zeroSlopeAtStart?uo:ho:i.endingStart=Mh,t?i.endingEnd=this.zeroSlopeAtEnd?uo:ho:i.endingEnd=Mh)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let l=a.parameterPositions,h=a.sampleValues;return l[0]=r,h[0]=t,l[1]=r+e,h[1]=n,this}},Gf=class extends Jr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,l=e._interpolants,h=n.uuid,c=this._bindingsByRootAndName,m=c[h];m===void 0&&(m={},c[h]=m);for(let d=0;d!==r;++d){let f=i[d],g=f.name,y=m[g];if(y!==void 0)a[d]=y;else{if(y=a[d],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,h,g));continue}let M=t&&t._propertyBindings[d].binding.parsedPath;y=new zf(tn.create(n,g,M),f.ValueTypeName,f.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,h,g),a[d]=y}l[d].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let l=a.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,l=a[r],h=l.knownActions,c=h[h.length-1],m=e._byClipCacheIndex;c._byClipCacheIndex=m,h[m]=c,h.pop(),e._byClipCacheIndex=null;let d=l.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],h.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,l=a[i],h=t[t.length-1],c=e._cacheIndex;h._cacheIndex=c,t[c]=h,t.pop(),delete l[r],Object.keys(l).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Kh(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?So.findByName(i,e):e,l=a!==null?a.uuid:e,h=this._actionsByClip[l],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ep),h!==void 0){let d=h.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=h.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let m=new U0(this,a,t,n);return this._bindAction(m,c),this._addInactiveAction(m,l,r),m}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?So.findByName(n,e):e,a=r?r.uuid:e,l=this._actionsByClip[a];return l!==void 0&&l.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let l=this._bindings,h=this._nActiveBindings;for(let c=0;c!==h;++c)l[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let l=0,h=a.length;l!==h;++l){let c=a[l];this._deactivateAction(c);let m=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=m,t[m]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let l=n[a].actionByRoot,h=l[t];h!==void 0&&(this._deactivateAction(h),this._removeInactiveAction(h))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let l=r[a];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};Gf.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var Vf=class s{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},Wf=class extends Bs{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};Wf.prototype.isInstancedInterleavedBuffer=!0;var qf=class{constructor(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};qf.prototype.isGLBufferAttribute=!0;var G0=class{constructor(e,t,n=0,i=1/0){this.ray=new Kr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return V0(e,this,n,t),n.sort(Ix),n}intersectObjects(e,t=!1,n=[]){for(let i=0,r=e.length;i<r;i++)V0(e[i],this,n,t);return n.sort(Ix),n}};function Ix(s,e){return s.distance-e.distance}function V0(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)V0(i[r],e,t,!0)}}var W0=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ai(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},q0=class{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},kx=new _e,Ra=class{constructor(e=new _e(1/0,1/0),t=new _e(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kx.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new _e),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new _e),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new _e),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new _e),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return kx.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Ra.prototype.isBox2=!0;var Fx=new L,qd=new L,Xf=class{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new L),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new L),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new L),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Fx.subVectors(e,this.start),qd.subVectors(this.end,this.start);let n=qd.dot(qd),r=qd.dot(Fx)/n;return t&&(r=ai(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new L),this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Yf=class extends Ft{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}};Yf.prototype.isImmediateRenderObject=!0;var Nx=new L,X0=class extends Ft{constructor(e,t){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;let n=new it,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,l=1,h=32;a<h;a++,l++){let c=a/h*Math.PI*2,m=l/h*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(m),Math.sin(m),1)}n.setAttribute("position",new rt(i,3));let r=new hn({fog:!1,toneMapped:!1});this.cone=new Zn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Nx.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Nx),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},ma=new L,Xd=new st,a0=new st,jf=class extends Zn{constructor(e){let t=Vb(e),n=new it,i=[],r=[],a=new Ce(0,0,1),l=new Ce(0,1,0);for(let c=0;c<t.length;c++){let m=t[c];m.parent&&m.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(l.r,l.g,l.b))}n.setAttribute("position",new rt(i,3)),n.setAttribute("color",new rt(r,3));let h=new hn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,h),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");a0.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let l=t[r];l.parent&&l.parent.isBone&&(Xd.multiplyMatrices(a0,l.matrixWorld),ma.setFromMatrixPosition(Xd),i.setXYZ(a,ma.x,ma.y,ma.z),Xd.multiplyMatrices(a0,l.parent.matrixWorld),ma.setFromMatrixPosition(Xd),i.setXYZ(a+1,ma.x,ma.y,ma.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Vb(s){let e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Vb(s.children[t]));return e}var Y0=class extends wt{constructor(e,t,n){let i=new Us(t,4,2),r=new Pn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},ER=new L,Hx=new Ce,Bx=new Ce,j0=class extends Ft{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;let i=new jl(t);i.rotateY(Math.PI*.5),this.material=new Pn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new Ze(a,3)),this.add(new wt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Hx.copy(this.light.color),Bx.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){let r=n<i/2?Hx:Bx;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}e.lookAt(ER.setFromMatrixPosition(this.light.matrixWorld).negate())}},Zf=class extends Zn{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ce(n),i=new Ce(i);let r=t/2,a=e/t,l=e/2,h=[],c=[];for(let f=0,g=0,y=-l;f<=t;f++,y+=a){h.push(-l,0,y,l,0,y),h.push(y,0,-l,y,0,l);let M=f===r?n:i;M.toArray(c,g),g+=3,M.toArray(c,g),g+=3,M.toArray(c,g),g+=3,M.toArray(c,g),g+=3}let m=new it;m.setAttribute("position",new rt(h,3)),m.setAttribute("color",new rt(c,3));let d=new hn({vertexColors:!0,toneMapped:!1});super(m,d),this.type="GridHelper"}},Z0=class extends Zn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new Ce(r),a=new Ce(a);let l=[],h=[];for(let d=0;d<=t;d++){let f=d/t*(Math.PI*2),g=Math.sin(f)*e,y=Math.cos(f)*e;l.push(0,0,0),l.push(g,0,y);let M=d&1?r:a;h.push(M.r,M.g,M.b),h.push(M.r,M.g,M.b)}for(let d=0;d<=n;d++){let f=d&1?r:a,g=e-e/n*d;for(let y=0;y<i;y++){let M=y/i*(Math.PI*2),S=Math.sin(M)*g,_=Math.cos(M)*g;l.push(S,0,_),h.push(f.r,f.g,f.b),M=(y+1)/i*(Math.PI*2),S=Math.sin(M)*g,_=Math.cos(M)*g,l.push(S,0,_),h.push(f.r,f.g,f.b)}}let c=new it;c.setAttribute("position",new rt(l,3)),c.setAttribute("color",new rt(h,3));let m=new hn({vertexColors:!0,toneMapped:!1});super(c,m),this.type="PolarGridHelper"}},Ox=new L,Yd=new L,zx=new L,J0=class extends Ft{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new it;i.setAttribute("position",new rt([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new hn({fog:!1,toneMapped:!1});this.lightPlane=new Ti(i,r),this.add(this.lightPlane),i=new it,i.setAttribute("position",new rt([0,0,0,0,0,1],3)),this.targetLine=new Ti(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Ox.setFromMatrixPosition(this.light.matrixWorld),Yd.setFromMatrixPosition(this.light.target.matrixWorld),zx.subVectors(Yd,Ox),this.lightPlane.lookAt(Yd),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Yd),this.targetLine.scale.z=zx.length()}},jd=new L,An=new Fs,K0=class extends Zn{constructor(e){let t=new it,n=new hn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={},l=new Ce(16755200),h=new Ce(16711680),c=new Ce(43775),m=new Ce(16777215),d=new Ce(3355443);f("n1","n2",l),f("n2","n4",l),f("n4","n3",l),f("n3","n1",l),f("f1","f2",l),f("f2","f4",l),f("f4","f3",l),f("f3","f1",l),f("n1","f1",l),f("n2","f2",l),f("n3","f3",l),f("n4","f4",l),f("p","n1",h),f("p","n2",h),f("p","n3",h),f("p","n4",h),f("u1","u2",c),f("u2","u3",c),f("u3","u1",c),f("c","t",m),f("p","c",d),f("cn1","cn2",d),f("cn3","cn4",d),f("cf1","cf2",d),f("cf3","cf4",d);function f(y,M,S){g(y,S),g(M,S)}function g(y,M){i.push(0,0,0),r.push(M.r,M.g,M.b),a[y]===void 0&&(a[y]=[]),a[y].push(i.length/3-1)}t.setAttribute("position",new rt(i,3)),t.setAttribute("color",new rt(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update()}update(){let e=this.geometry,t=this.pointMap,n=1,i=1;An.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Hn("c",t,e,An,0,0,-1),Hn("t",t,e,An,0,0,1),Hn("n1",t,e,An,-n,-i,-1),Hn("n2",t,e,An,n,-i,-1),Hn("n3",t,e,An,-n,i,-1),Hn("n4",t,e,An,n,i,-1),Hn("f1",t,e,An,-n,-i,1),Hn("f2",t,e,An,n,-i,1),Hn("f3",t,e,An,-n,i,1),Hn("f4",t,e,An,n,i,1),Hn("u1",t,e,An,n*.7,i*1.1,-1),Hn("u2",t,e,An,-n*.7,i*1.1,-1),Hn("u3",t,e,An,0,i*2,-1),Hn("cf1",t,e,An,-n,0,1),Hn("cf2",t,e,An,n,0,1),Hn("cf3",t,e,An,0,-i,1),Hn("cf4",t,e,An,0,i,1),Hn("cn1",t,e,An,-n,0,-1),Hn("cn2",t,e,An,n,0,-1),Hn("cn3",t,e,An,0,-i,-1),Hn("cn4",t,e,An,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Hn(s,e,t,n,i,r,a){jd.set(i,r,a).unproject(n);let l=e[s];if(l!==void 0){let h=t.getAttribute("position");for(let c=0,m=l.length;c<m;c++)h.setXYZ(l[c],jd.x,jd.y,jd.z)}}var Zd=new mi,Jf=class extends Zn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new it;r.setIndex(new Ze(n,1)),r.setAttribute("position",new Ze(i,3)),super(r,new hn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Zd.setFromObject(this.object),Zd.isEmpty())return;let t=Zd.min,n=Zd.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return Zn.prototype.copy.call(this,e),this.object=e.object,this}},$0=class extends Zn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new it;r.setIndex(new Ze(n,1)),r.setAttribute("position",new rt(i,3)),super(r,new hn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}},Q0=class extends Ti{constructor(e,t=1,n=16776960){let i=n,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],a=new it;a.setAttribute("position",new rt(r,3)),a.computeBoundingSphere(),super(a,new hn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let l=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],h=new it;h.setAttribute("position",new rt(l,3)),h.computeBoundingSphere(),this.add(new wt(h,new Pn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?xn:tc,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}},Ux=new L,Jd,o0,eg=class extends Ft{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Jd===void 0&&(Jd=new it,Jd.setAttribute("position",new rt([0,0,0,0,1,0],3)),o0=new bo(0,.5,1,5,1),o0.translate(0,-.5,0)),this.position.copy(t),this.line=new Ti(Jd,new hn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new wt(o0,new Pn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ux.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ux,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}},Kf=class extends Zn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new it;i.setAttribute("position",new rt(t,3)),i.setAttribute("color",new rt(n,3));let r=new hn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Wb=new Float32Array(1),SR=new Int32Array(Wb.buffer),tg=class{static toHalfFloat(e){Wb[0]=e;let t=SR[0],n=t>>16&32768,i=t>>12&2047,r=t>>23&255;return r<103?n:r>142?(n|=31744,n|=(r==255?0:1)&&t&8388607,n):r<113?(i|=2048,n|=(i>>114-r)+(i>>113-r&1),n):(n|=r-112<<10|i>>1,n+=i&1,n)}},Nl=4,ya=8,Xr=Math.pow(2,ya),qb=[.125,.215,.35,.446,.526,.582],Xb=ya-Nl+1+qb.length,Cl=20,Yr={[Ei]:0,[Pa]:1,[np]:2,[cg]:3,[hg]:4,[ug]:5,[tp]:6},oo=new Pn({side:xn,depthWrite:!1,depthTest:!1}),TR=new wt(new xa,oo),l0=new Po,{_lodPlanes:hh,_sizeLods:Gx,_sigmas:Kd}=RR(),Vx=new Ce,c0=null,lo=(1+Math.sqrt(5))/2,Pl=1/lo,Wx=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,lo,Pl),new L(0,lo,-Pl),new L(Pl,0,lo),new L(-Pl,0,lo),new L(lo,Pl,0),new L(-lo,Pl,0)];function qx(s){let e=Math.max(s.r,s.g,s.b),t=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return s.multiplyScalar(Math.pow(2,-t)),(t+128)/255}var ng=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=LR(Cl),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){c0=this._renderer.getRenderTarget();let r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=jx(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Yx(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<hh.length;e++)hh[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(c0),e.scissorTest=!1,$d(e,0,0,e.width,e.height)}_fromTexture(e){c0=this._renderer.getRenderTarget();let t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){let t={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ca,format:Pw,encoding:AR(e)?e.encoding:np,depthBuffer:!1},n=Xx(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Xx(t),n}_compileMaterial(e){let t=new wt(hh[0],e);this._renderer.compile(t,l0)}_sceneToCubeUV(e,t,n,i){let l=new Rn(90,1,t,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,f=m.outputEncoding,g=m.toneMapping;m.getClearColor(Vx),m.toneMapping=fo,m.outputEncoding=Ei,m.autoClear=!1;let y=!1,M=e.background;if(M){if(M.isColor){oo.color.copy(M).convertSRGBToLinear(),e.background=null;let S=qx(oo.color);oo.opacity=S,y=!0}}else{oo.color.copy(Vx).convertSRGBToLinear();let S=qx(oo.color);oo.opacity=S,y=!0}for(let S=0;S<6;S++){let _=S%3;_==0?(l.up.set(0,h[S],0),l.lookAt(c[S],0,0)):_==1?(l.up.set(0,0,h[S]),l.lookAt(0,c[S],0)):(l.up.set(0,h[S],0),l.lookAt(0,0,c[S])),$d(i,_*Xr,S>2?Xr:0,Xr,Xr),m.setRenderTarget(i),y&&m.render(TR,l),m.render(e,l)}m.toneMapping=g,m.outputEncoding=f,m.autoClear=d}_textureToCubeUV(e,t){let n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=jx()):this._equirectShader==null&&(this._equirectShader=Yx());let i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new wt(hh[0],i),a=i.uniforms;a.envMap.value=e,e.isCubeTexture||a.texelSize.value.set(1/e.image.width,1/e.image.height),a.inputEncoding.value=Yr[e.encoding],a.outputEncoding.value=Yr[t.texture.encoding],$d(t,0,0,3*Xr,2*Xr),n.setRenderTarget(t),n.render(r,l0)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Xb;i++){let r=Math.sqrt(Kd[i]*Kd[i]-Kd[i-1]*Kd[i-1]),a=Wx[(i-1)%Wx.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,l){let h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let m=3,d=new wt(hh[i],c),f=c.uniforms,g=Gx[n]-1,y=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Cl-1),M=r/y,S=isFinite(r)?1+Math.floor(m*M):Cl;S>Cl&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cl}`);let _=[],x=0;for(let C=0;C<Cl;++C){let q=C/M,X=Math.exp(-q*q/2);_.push(X),C==0?x+=X:C<S&&(x+=2*X)}for(let C=0;C<_.length;C++)_[C]=_[C]/x;f.envMap.value=e.texture,f.samples.value=S,f.weights.value=_,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l),f.dTheta.value=y,f.mipInt.value=ya-n,f.inputEncoding.value=Yr[e.texture.encoding],f.outputEncoding.value=Yr[e.texture.encoding];let A=Gx[i],N=3*Math.max(0,Xr-2*A),O=(i===0?0:2*Xr)+2*A*(i>ya-Nl?i-ya+Nl:0);$d(t,N,O,3*A,2*A),h.setRenderTarget(t),h.render(d,l0)}};function AR(s){return s===void 0||s.type!==Ca?!1:s.encoding===Ei||s.encoding===Pa||s.encoding===tp}function RR(){let s=[],e=[],t=[],n=ya;for(let i=0;i<Xb;i++){let r=Math.pow(2,n);e.push(r);let a=1/r;i>ya-Nl?a=qb[i-ya+Nl-1]:i==0&&(a=0),t.push(a);let l=1/(r-1),h=-l/2,c=1+l/2,m=[h,h,c,h,c,c,h,h,c,c,h,c],d=6,f=6,g=3,y=2,M=1,S=new Float32Array(g*f*d),_=new Float32Array(y*f*d),x=new Float32Array(M*f*d);for(let N=0;N<d;N++){let O=N%3*2/3-1,C=N>2?0:-1,q=[O,C,0,O+2/3,C,0,O+2/3,C+1,0,O,C,0,O+2/3,C+1,0,O,C+1,0];S.set(q,g*f*N),_.set(m,y*f*N);let X=[N,N,N,N,N,N];x.set(X,M*f*N)}let A=new it;A.setAttribute("position",new Ze(S,g)),A.setAttribute("uv",new Ze(_,y)),A.setAttribute("faceIndex",new Ze(x,M)),s.push(A),n>Nl&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function Xx(s){let e=new Cn(3*Xr,3*Xr,s);return e.texture.mapping=ic,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function $d(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function LR(s){let e=new Float32Array(s),t=new L(0,1,0);return new Ea({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Yr[Ei]},outputEncoding:{value:Yr[Ei]}},vertexShader:vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${yg()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function Yx(){let s=new _e(1,1);return new Ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:Yr[Ei]},outputEncoding:{value:Yr[Ei]}},vertexShader:vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${yg()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function jx(){return new Ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Yr[Ei]},outputEncoding:{value:Yr[Ei]}},vertexShader:vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${yg()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function vg(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yg(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}var CR=0,PR=1,DR=0,IR=1,kR=2;function FR(s){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),s}function NR(s=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),s.isMultiMaterial=!0,s.materials=s,s.clone=function(){return s.slice()},s}function HR(s,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new Ni(s,e)}function BR(s){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new lr(s)}function OR(s,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new Ni(s,e)}function zR(s){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new Os(s)}function UR(s){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new Os(s)}function GR(s){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new Os(s)}function VR(s,e,t){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new L(s,e,t)}function WR(s,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new Ze(s,e).setUsage(Fi)}function qR(s,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new lf(s,e)}function XR(s,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new cf(s,e)}function YR(s,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new hf(s,e)}function jR(s,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new uf(s,e)}function ZR(s,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new Ol(s,e)}function JR(s,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new df(s,e)}function KR(s,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new zl(s,e)}function $R(s,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new rt(s,e)}function QR(s,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new pf(s,e)}Ai.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Ai.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};Lo.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};function eL(s){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Kf(s)}function tL(s,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Jf(s,e)}function nL(s,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new Zn(new Ih(s.geometry),new hn({color:e!==void 0?e:16777215}))}Zf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};jf.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};function iL(s,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new Zn(new Vh(s.geometry),new hn({color:e!==void 0?e:16777215}))}ii.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),cu.extractUrlBase(s)};ii.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};function rL(s){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new ur(s)}function sL(s){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Ef(s)}Ra.prototype.center=function(s){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(s)};Ra.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ra.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Ra.prototype.size=function(s){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(s)};mi.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};mi.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};mi.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};mi.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};mi.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};ar.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ns.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};Xf.prototype.center=function(s){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s)};Bn.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};Bn.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};Bn.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Bn.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};Bn.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Bn.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};st.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};st.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};st.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)};st.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};st.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};st.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};st.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};st.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};st.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};st.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};st.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};st.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};st.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};st.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};st.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};st.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};st.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};st.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};st.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Yi.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};pn.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};pn.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Kr.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Kr.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};Kr.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};li.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};li.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};li.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};li.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};li.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};li.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),li.getBarycoord(s,e,t,n,i)};li.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),li.getNormal(s,e,t,n)};Zr.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};Zr.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Qr(this,s)};Zr.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Zl(this,s)};_e.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};_e.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};_e.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};L.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};L.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};L.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};L.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};L.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};L.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};L.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};L.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};L.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Lt.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Lt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ft.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Ft.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ft.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};Ft.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ft.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Ft.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});wt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(wt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),vb},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Xl.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Rn.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(Ji.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(Ze.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Fi},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Fi)}}});Ze.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Fi:Bl),this};Ze.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ze.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};it.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};it.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new Ze(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};it.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};it.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};it.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};it.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};it.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(it.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Bs.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Fi:Bl),this};Bs.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Qr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Qr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Qr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Hs.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Vf.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(Vn.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ce}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===sg}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}}});Object.defineProperties(mn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Jt.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};Jt.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Jt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Jt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Jt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Jt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Jt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Jt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Jt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Jt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Jt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Jt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Jt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Jt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Jt.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Jt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Jt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Jt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Jt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Jt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Jt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Jt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Jt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Jt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Jt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Jt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Pa:Ei}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Nb.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});function aL(s,e,t){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new Vl(s,t)}Object.defineProperties(Cn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});uu.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new Ff().load(s,function(n){e.setBuffer(n)}),this};Of.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Gl.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};Gl.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};ks.crossOrigin=void 0;ks.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new Sf;i.setCrossOrigin(this.crossOrigin);let r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};ks.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new Mf;i.setCrossOrigin(this.crossOrigin);let r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};ks.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ks.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};function oL(){console.error("THREE.CanvasRenderer has been removed")}function lL(){console.error("THREE.JSONLoader has been removed.")}var cL={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};function hL(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ig}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ig);var Yb=`<canvas id="gl"></canvas>

<div id="hud">

  <!-- the scale bar, sized by writeHUD to a round number of units -->
  <div id="sbar"><i></i><span id="sbar-t">\u2014</span></div>

  <div class="pane glass" id="idp">
    <div class="ttl"><b>VAULT ORRERY</b><i class="fx" id="instog" data-i18n-title="hud.inst.t">[ \u22EF ]</i></div>
    <div class="bd">
      <div class="big" id="vault-name">EMPTY SPACE</div>
      <div class="sub" data-i18n="hud.sub">\uD3F4\uB354\uB294 \uD56D\uC131 \xB7 \uB178\uD2B8\uB294 \uD589\uC131</div>
      <div class="row"><span>NODES</span><span id="s-nodes">0</span></div>
      <div class="row"><span>EDGES</span><span id="s-edges">0</span></div>
      <div class="row"><span>SYSTEMS</span><span id="s-sys">0</span></div>
      <!-- Collected since the host metadata went in and never shown until now.
           Clickable, because a count of dead links is a job rather than a
           statistic: it filters the cosmos down to the notes carrying them. -->
      <div class="row brk" id="r-broken" title=""><span data-i18n="hud.broken">\uB04A\uC5B4\uC9C4 \uB9C1\uD06C</span><span id="s-broken">0</span></div>
      <div class="row"><span>SPAN</span><span id="s-span">\u2014</span></div>
      <!-- which link types are drawn, cycled with L. It used to sit in the
           gesture panel, which is gone; it is vault state, not hand state. -->
      <div class="row"><span>LINK LAYER</span><span id="g-layer">ALL</span></div>
      <!-- the three link types now differ in stroke as well as in colour, and
           a convention nobody is told is not a convention. Tinted to the
           EDGE_TINT entries they stand for, so the key and the cosmos cannot
           drift apart without it being visible here. -->
      <div class="row lk">
        <span style="color:#53d8ff">\u2501\u2501 WIKI</span>
        <span style="color:#ff9d3c">\u2501 \u2501 SRC</span>
      </div>
      <!-- The camera's readings. Instrument data rather than vault data: worth
           having when you are measuring, noise when you are reading, so they
           sit behind the [ \u22EF ] in the title bar. The values are still written
           every frame \u2014 render diagnostics reads them from here. -->
      <div id="inst">
      <div class="row"><span>RANGE</span><span id="s-dist">\u2014</span></div>
      <!-- what one pixel is worth at the range the camera is focused on; the
           bar at the bottom of the frame is the same number drawn -->
      <div class="row"><span>SCALE</span><span id="s-scale">\u2014</span></div>
      <div class="row"><span>FPS</span><span id="s-fps" title="click for frame budget">\u2014</span></div>
      <div class="bar"><i style="width:100%"></i></div>
      </div>
      <!-- opened by clicking FPS; see the PERF block for what fills it -->
      <div id="perf">
        <div class="hd">FRAME BUDGET \xB7 MS</div>
        <div class="row"><span>SIM</span><span id="p-sim">\u2014</span></div>
        <div class="row"><span>PICK</span><span id="p-pick">\u2014</span></div>
        <div class="row"><span>BODIES</span><span id="p-inst">\u2014</span></div>
        <div class="row"><span>LINKS</span><span id="p-link">\u2014</span></div>
        <div class="row"><span>TRAILS</span><span id="p-trlms">\u2014</span></div>
        <div class="row"><span>SPRITES</span><span id="p-spr">\u2014</span></div>
        <div class="row"><span>SUBMIT</span><span id="p-draw">\u2014</span></div>
        <div class="row"><span>CPU TOTAL</span><span id="p-tot">\u2014</span></div>
        <div class="hd" style="margin-top:5px">GEOMETRY</div>
        <div class="row"><span>LINK PTS</span><span id="p-lv">\u2014</span></div>
        <div class="row"><span>OFF SCREEN</span><span id="p-cull">\u2014</span></div>
        <div class="row"><span>TRAILS</span><span id="p-trl">\u2014</span></div>
        <div class="row"><span>DRAW CALLS</span><span id="p-dc">\u2014</span></div>
      </div>
    </div>
  </div>

  <div class="pane glass foldable" id="leg">
    <div class="ttl"><b>STAR SYSTEMS</b>
      <span class="tr"><i id="l-cnt">0</i><i class="fx" id="legfold">[ \u2212 ]</i></span>
    </div>
    <div class="bd" id="legbody"></div>
  </div>

  <div class="pane glass" id="ctl">
    <div class="ttl" id="ctltl"><b>ORRERY CONTROL</b><span id="ctlfold">[ \u2212 ]</span></div>
    <div class="bd">
      <!-- Both shelves are filled by the CONTROL DECK block from the KNOBS
           table, not written out here. Thirty-odd sliders spelt in markup is
           thirty chances for an id to disagree with the code that reads it,
           and \u2014 the reason it changed \u2014 which shelf a knob sits on is the
           reader's to decide and cannot be a fact about the document. -->
      <div id="ctlknobs">
        <!-- Above the knobs because it is the knobs: eight of them at once. -->
        <div id="qrow" data-i18n-title="q.t"><b>QUALITY</b>
          <div class="langsel qsel" id="qsel">
            <u data-q="cinematic">CINEMA</u><u data-q="balanced">BALANCED</u><u data-q="fast">FAST</u>
          </div>
        </div>
        <div id="ctlgrid"></div>
        <div id="advtog">\u25B8 ADVANCED</div>
        <div id="ctladv"></div>
      </div>
      <div class="sep"></div>
      <div class="vs">
        <div class="langsel" id="langsel">
          <u data-l="ko">\uD55C</u><u data-l="en">EN</u><u data-l="ja">\u65E5</u><u data-l="zh">\u4E2D</u>
        </div>
        <div class="mini" id="b-load" data-i18n="btn.load">\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30</div>
        <div class="mini am" id="b-clear" style="display:none" data-i18n="btn.clear">\u2715 \uBCFC\uD2B8 \uBE44\uC6B0\uAE30</div>
        <div class="mini" id="b-gen" data-i18n="btn.gen" data-i18n-title="btn.gen.t">\u25CC \uD56D\uC131\uACC4 \uC0DD\uC131</div>
        <div class="mini" id="b-post" data-i18n="btn.post" data-i18n-title="btn.post.t">\u2913 \uD3EC\uC2A4\uD130</div>
        <div class="mini" id="b-snd" data-i18n="btn.snd" data-i18n-title="btn.snd.t">\u266A \uC0AC\uC6B4\uB4DC</div>
        <div class="mini" id="b-rst" data-i18n="btn.rst">\u21BA \uC124\uC815 \uCD08\uAE30\uD654</div>
      </div>
    </div>
  </div>

  <div class="pane glass foldable" id="keys">
    <div class="ttl"><b>SHORTCUTS</b>
      <span class="tr"><i class="fx" id="keyshelp" data-i18n-title="guide.open">[ ? ]</i><i class="fx" id="keysfold">[ \u2212 ]</i></span>
    </div>
    <div class="bd" style="padding:7px 10px">
      <div class="row" id="k-open" style="display:none"><span>OPEN NOTE</span><span>O \xB7 CTRL-CLICK</span></div>
      <div class="row"><span>COMMAND</span><span>/ \xB7 CTRL-K</span></div>
      <div class="row"><span>MIND MAP</span><span>M \xB7 DBL-CLICK</span></div>
      <div class="row"><span>GENESIS</span><span>G</span></div>
      <div class="row"><span>RIPPLE \xB7 POSTER</span><span>SPACE \xB7 P</span></div>
      <div class="row"><span>LINK LAYER</span><span>L</span></div>
      <div class="row"><span>REFERENCE PLANE</span><span>X</span></div>
      <div class="row"><span>RESET \xB7 HIDE HUD</span><span>R \xB7 H</span></div>
      <div class="row"><span>GUIDE</span><span>?</span></div>
      <div class="row"><span>DRAG / WHEEL</span><span>ORBIT \xB7 ZOOM</span></div>
      <div class="row"><span>RIGHT-DRAG</span><span>PAN</span></div>
      <div class="row"><span>SHIFT+DRAG</span><span>MOVE NODE</span></div>
    </div>
  </div>

  <div class="pane glass" id="insp">
    <div class="ttl"><b>NODE INSPECTOR</b><span id="i-kind">\u2014</span></div>
    <div class="bd">
      <div id="i-empty" data-i18n="insp.empty">\uB300\uC0C1\uC744 \uC9C0\uC815\uD558\uC2ED\uC2DC\uC624<br><span style="opacity:.6">\uB178\uB4DC\uB97C \uD074\uB9AD</span></div>
      <div id="i-real" style="display:none">
        <div id="i-name"></div>
        <div id="i-path"></div>
        <!-- What you can do with the note comes straight after which note it
             is. At the foot of the panel the buttons were below every link the
             note has, which on a well-linked note is off the bottom of the
             pane \u2014 the actions went missing exactly on the notes that matter. -->
        <div id="i-acts">
        <div class="mini host vio" id="i-open" style="display:none" data-i18n="insp.open">\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30 [O]</div>
        <div class="mini am" id="i-go" data-i18n="insp.go">\u25CE \uC774\uB3D9\uD558\uAE30</div>
        <div class="mini" id="i-mm" data-i18n="insp.mm">\u25C8 \uB9C8\uC778\uB4DC\uB9F5 \uC5F4\uAE30 [M]</div>
        <div class="mini" id="i-ripple" data-i18n="insp.ripple">\u25C9 \uC5EC\uAE30\uC11C \uD30C\uBB38 \uC77C\uC73C\uD0A4\uAE30 [SPACE]</div>
        <div class="mini" id="i-route" data-i18n="insp.route">\u25C7 \uC5EC\uAE30\uC11C \uACBD\uB85C \uCC3E\uAE30</div>
        <div class="mini" id="i-core" data-i18n="insp.core">\u2605 \uC774 \uB178\uD2B8\uB97C \uC911\uC2EC \uD56D\uC131\uC73C\uB85C</div>
        </div>
        <div class="cbox">
          <div><u id="c-pl">0</u><s data-i18n="cnt.links">\uC5F0\uACB0 \uD589\uC131</s></div>
          <div><u id="c-mo">0</u><s data-i18n="cnt.moons">\uC9C1\uC18D \uC704\uC131</s></div>
          <div><u id="c-mo2">0</u><s data-i18n="cnt.far">\uC5F0\uACB0 \uC704\uC131</s></div>
        </div>
        <!-- the note's own front-matter properties; see propsOf -->
        <div id="i-props"></div>
        <div id="i-tags"></div>
        <div id="i-x"></div>
        <div id="i-links"></div>
        <!-- the orbit this body is actually on \u2014 see orbitReadout() -->
        <div class="cbox orb" id="i-orb">
          <div><u id="o-a">\u2014</u><s data-i18n="orb.a">\uC7A5\uBC18\uACBD</s></div>
          <div><u id="o-e">\u2014</u><s data-i18n="orb.e">\uC774\uC2EC\uB960</s></div>
          <div><u id="o-p">\u2014</u><s data-i18n="orb.p">\uACF5\uC804 \uC8FC\uAE30</s></div>
          <div><u id="o-i">\u2014</u><s data-i18n="orb.i">\uADA4\uB3C4 \uACBD\uC0AC</s></div>
        </div>
      </div>
    </div>
  </div>

  <div class="pane glass" id="gen">
    <div class="ttl"><b data-i18n="gen.ttl">GENESIS \xB7 \uD56D\uC131\uACC4 \uC0DD\uC131</b><span id="gen-date">\u2014</span><span class="fx" id="gen-x" data-i18n-title="gen.close.t">[ \u2715 ]</span></div>
    <div class="bd">
      <div id="genstage"><u id="gen-ph">VOID</u><s id="gen-desc" data-i18n="gen.p0">\uC544\uC9C1 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4</s></div>
      <div id="genrow">
        <u id="gen-play" data-i18n-title="gen.play.t">\u25B6</u>
        <u id="gen-rst" data-i18n-title="gen.rst.t">\u21BA</u>
        <input type="range" id="gen-r" min="0" max="1000" step="1" value="0">
        <u id="gen-spd" data-i18n-title="gen.spd.t">1\xD7</u>
        <s id="gen-cnt">0</s>
      </div>
      <div id="genmarks"></div>
    </div>
  </div>

</div>


<div id="tgt"></div>

<div class="glass" id="srch">
  <input id="sin" data-i18n-ph="search.ph" placeholder="\uB178\uD2B8 \uAC80\uC0C9 \u2026" autocomplete="off" spellcheck="false">
  <div id="sres"></div>
</div>

<div id="mind">
  <div class="glass" id="mindbox">
    <div class="ttl">
      <b style="flex:0 0 auto">MIND MAP</b>
      <div id="mmnav">
        <div id="mmback" data-i18n="mm.back">\u2190 \uB4A4\uB85C</div>
        <div id="mmcrumbs"></div>
      </div>
      <s id="mm-close" data-i18n="mm.close">\uB2EB\uAE30 [ ESC ]</s>
    </div>
    <div id="mindbody">
      <div id="mmside">
        <div class="mmsec">
          <div id="mm-kind">\u2014</div>
          <div id="mm-name"></div>
          <div id="mm-path"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.conn">\uC5F0\uACB0</h4>
          <div class="cbox" style="margin-bottom:0">
            <div><u id="m-pl">0</u><s data-i18n="cnt.links">\uC5F0\uACB0 \uD589\uC131</s></div>
            <div><u id="m-mo">0</u><s data-i18n="cnt.moons">\uC9C1\uC18D \uC704\uC131</s></div>
            <div><u id="m-mo2">0</u><s data-i18n="cnt.far">\uC5F0\uACB0 \uC704\uC131</s></div>
          </div>
        </div>
        <div class="mmsec" id="mm-tagsec">
          <h4 data-i18n="mm.sec.tags">\uD0DC\uADF8</h4>
          <div id="mm-tags" style="display:flex;flex-wrap:wrap;gap:4px"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.excerpt">\uBC1C\uCDCC</h4>
          <div id="mm-x"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.links">\uB9C1\uD06C</h4>
          <div id="mm-links"></div>
        </div>
        <div class="mmsec act">
          <div class="mini host vio" id="mm-open" style="display:none" data-i18n="mm.open">\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30</div>
          <div class="mini am" id="mm-go" data-i18n="mm.go">\u25CE \uC774 \uB178\uB4DC\uB85C \uC774\uB3D9</div>
          <div class="mini" id="mm-center" data-i18n="mm.center">\u25C8 \uC774 \uB178\uB4DC\uB97C \uC911\uC2EC\uC73C\uB85C</div>
        </div>
      </div>
    </div>
    <div id="mmfoot">
      <div id="mmview">
        <u id="mm-hop" data-i18n="mm.hop" data-i18n-title="mm.hop.t">\u25CC 2\uD649</u>
        <i id="mmkeys" data-i18n="mm.keys"></i>
      </div>
      <div id="mmlegend">
        <b><u style="background:#5cd8ff"></u><i data-i18n="leg.wiki" style="font-style:normal">\uC704\uD0A4\uB9C1\uD06C</i></b>
        <b><u style="background:repeating-linear-gradient(90deg,#ff9d3c 0 4px,transparent 4px 7px)"></u><i data-i18n="leg.src" style="font-style:normal">\uCD9C\uCC98</i></b>
        <b id="mmleg2" style="display:none"><u style="background:rgba(150,210,255,.4)"></u><i data-i18n="mm.hop2" style="font-style:normal">2\uD649</i></b>
      </div>
      <div id="mmhint" data-i18n="mm.hint">\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9<br>\uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804 \xB7 \uD720 = \uD655\uB300</div>
    </div>
  </div>
</div>

<div id="hint">
  <u>EMPTY SPACE</u>
  <b data-i18n="hint.body">\uC544\uC9C1 \uBCFC\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD3F4\uB354\uB97C \uC774 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694.</b>
  <em id="hint-btn" data-i18n="btn.load">\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30</em>
</div>

<div id="intro">
  <div class="glass" id="introcard">
    <!-- The title stays English with every other pane's: it is what this card
         is identified by, and see the I18N block on why chrome does not move. -->
    <div class="ttl"><b>FIRST FLIGHT</b><span class="fx" id="introx">[ \u2715 ]</span></div>
    <div class="bd">
      <p id="introlede" data-i18n="intro.lede">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131\uC785\uB2C8\uB2E4. \uC544\uB798 \uB137\uC774\uBA74 \uCDA9\uBD84\uD788 \uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <div class="introrow"><u data-i18n="intro.k1">\uB04C\uAE30 \xB7 \uD720</u><b data-i18n="intro.d1">\uB458\uB7EC\uBCF4\uAE30 \u2014 \uADA4\uB3C4 \uD68C\uC804\uACFC \uD655\uB300</b></div>
      <!-- Click before M: the mind map is something you do to a note, so the
           card first has to say how a note is picked. G is on the card because
           it is the one thing here nothing else does, and a reader who never
           presses it has not seen the orrery. / is one [ ? ] away. -->
      <div class="introrow"><u data-i18n="intro.k5">\uD074\uB9AD</u><b data-i18n="intro.d5">\uB178\uD2B8 \uC77D\uAE30 \u2014 \uC18D\uC131\xB7\uB9C1\uD06C\xB7\uBC1C\uCDCC\uAC00 \uC624\uB978\uCABD\uC5D0 \uB739\uB2C8\uB2E4</b></div>
      <div class="introrow"><u data-i18n="intro.k3">M \xB7 \uB354\uBE14\uD074\uB9AD</u><b data-i18n="intro.d3">\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB9C8\uC778\uB4DC\uB9F5\uC73C\uB85C \uD3BC\uCE58\uAE30</b></div>
      <div class="introrow"><u>G</u><b data-i18n="intro.d6">\uBCFC\uD2B8\uAC00 \uC0DD\uACA8\uB09C \uC21C\uC11C\uB300\uB85C \uB2E4\uC2DC \uC7AC\uC0DD\uD558\uAE30</b></div>
      <div class="introrow" id="introopen" style="display:none"><u>O</u><b data-i18n="intro.d4">\uACE0\uB978 \uB178\uD2B8\uB97C \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30</b></div>
      <p id="introfoot" data-i18n="intro.foot">\uB098\uBA38\uC9C0\uB294 \uC67C\uCABD \uC544\uB798 SHORTCUTS \uBAA9\uB85D\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. [ ? ] \uB97C \uB204\uB974\uBA74 \uC774 \uC548\uB0B4\uAC00 \uB2E4\uC2DC \uC5F4\uB9BD\uB2C8\uB2E4.</p>
      <div id="introbtns">
        <div class="btn" id="introgen" data-i18n="intro.gen">\u25CC \uC81C\uB124\uC2DC\uC2A4 \uBCF4\uAE30</div>
        <div class="btn alt" id="introgo" data-i18n="intro.go">\u25B6 \uB458\uB7EC\uBCF4\uAE30</div>
      </div>
    </div>
  </div>
</div>

<div id="guide">
  <div class="glass" id="guidecard">
    <!-- Titles stay English with the rest of the HUD chrome; see the I18N
         block on why the panes do not move and the prose does. -->
    <div class="ttl"><b>GUIDE</b><span class="fx" id="guidex">[ \u2715 ]</span></div>
    <div class="bd">
      <p id="guidelede" data-i18n="guide.lede">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131, \uC778\uC6A9\uB41C \uCD9C\uCC98\uB294 \uC704\uC131\uC785\uB2C8\uB2E4. \uC544\uB798\uB294 \uD654\uBA74\uC774 \uD560 \uC218 \uC788\uB294 \uC77C \uC804\uBD80\uC785\uB2C8\uB2E4.</p>
      <div id="guidebody"></div>
      <p id="guidefoot"></p>
    </div>
  </div>
</div>

<div id="toast"></div>

<input type="file" id="fpick" webkitdirectory directory multiple
       accept=".md,.markdown,.txt" style="display:none">
<input type="file" id="fpick2" webkitdirectory directory multiple
       accept=".md,.markdown,.txt" style="display:none">

<div id="drop"><u>VAULT DROP<b data-i18n="drop.body">\uD3F4\uB354\uB098 \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uB193\uC73C\uBA74 \uADF8 \uBCFC\uD2B8\uB85C \uC6B0\uC8FC\uB97C \uB9CC\uB4ED\uB2C8\uB2E4</b></u></div>

<div id="load">
  <div id="loadmsg">READING VAULT</div>
  <div id="loadbar"><i></i></div>
  <div id="loadsub"></div>
</div>

<div id="boot">
  <h1>VAULT ORRERY</h1>
  <h2 data-i18n="boot.tag">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131 \u2014 \uBCFC\uD2B8\uAC00 \uC790\uB77C\uC628 \uACFC\uC815\uC744 \uB2E4\uC2DC \uBD05\uB2C8\uB2E4</h2>
  <div id="blog"></div>
  <div class="langsel" id="blangsel">
    <u data-l="ko">\uD55C\uAD6D\uC5B4</u><u data-l="en">English</u><u data-l="ja">\u65E5\u672C\u8A9E</u><u data-l="zh">\u4E2D\u6587</u>
  </div>
  <div id="bpick" data-i18n="boot.pick">\uBCFC\uD2B8 \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uBA74 \uADF8 \uADDC\uBAA8\uC5D0 \uB9DE\uB294 \uD589\uC131\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4.</div>
  <div id="bbtns">
    <div class="btn" id="b-folder" data-i18n="boot.upload">\u25A3 \uD30C\uC77C \uC5C5\uB85C\uB4DC \uD558\uAE30</div>
    <div class="btn alt" id="b-go" data-i18n="boot.start">\u25B6 \uC2DC\uC791\uD558\uAE30</div>
  </div>
  <div id="bnote" data-i18n="boot.note">
    \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 \uC2DC\uC791\uD558\uBA74 \uBE48 \uC6B0\uC8FC\uC5D0\uC11C \uCD9C\uBC1C\uD569\uB2C8\uB2E4 \u2014 \uC5B8\uC81C\uB4E0 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uC73C\uBA74 \uB429\uB2C8\uB2E4.
  </div>
</div>

<!-- Loaded from disk, never from a CDN: Obsidian's community plugin policy
     forbids fetching remote code at runtime. See THIRD-PARTY-NOTICES.md for
     what belongs in vendor/. -->`;function jb(s,e){let t=()=>s.clientWidth||1,n=()=>s.clientHeight||1;function i(o){let u=s.getBoundingClientRect();return(o.clientX-u.left)/(u.width||1)*2-1}function r(o){let u=s.getBoundingClientRect();return-((o.clientY-u.top)/(u.height||1))*2+1}let a=[];function l(o,u,p){window.addEventListener(o,u,p),a.push(()=>window.removeEventListener(o,u,p))}function h(o,u,p){document.addEventListener(o,u,p),a.push(()=>document.removeEventListener(o,u,p))}function c(o,u,p){window.removeEventListener(o,u,p)}let m=e&&typeof e.get=="function"?e:(()=>{let o=new Map;return{get:u=>o.has(u)?o.get(u):null,set:(u,p)=>{o.set(u,String(p))}}})(),d=o=>s.querySelector("#"+o),f=Math.PI*2,g=(o,u,p)=>o<u?u:o>p?p:o,y=(o,u,p)=>o+(u-o)*p,M=o=>String(o).replace(/[&<>]/g,u=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[u]),S=["ko","en","ja","zh"],_={"btn.load":["\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30","\u25A3 OPEN VAULT","\u25A3 \u30DC\u30EB\u30C8\u3092\u958B\u304F","\u25A3 \u6253\u5F00\u4ED3\u5E93"],"btn.clear":["\u2715 \uBCFC\uD2B8 \uBE44\uC6B0\uAE30","\u2715 CLEAR VAULT","\u2715 \u30DC\u30EB\u30C8\u3092\u7A7A\u306B","\u2715 \u6E05\u7A7A\u4ED3\u5E93"],"btn.gen":["\u25CC \uD56D\uC131\uACC4 \uC0DD\uC131","\u25CC GENESIS","\u25CC \u661F\u7CFB\u751F\u6210","\u25CC \u661F\u7CFB\u751F\u6210"],"btn.gen.t":["\uBB34\uC5D0\uC11C \uD56D\uC131\uACC4\uAE4C\uC9C0 \u2014 \uC9C0\uC2DD\uCCB4\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uB294 \uACFC\uC815 [G]","From void to star system \u2014 the knowledge base being made [G]","\u7121\u304B\u3089\u661F\u7CFB\u307E\u3067 \u2014 \u77E5\u8B58\u4F53\u7CFB\u304C\u5F62\u3065\u304F\u3089\u308C\u308B\u904E\u7A0B [G]","\u4ECE\u865A\u65E0\u5230\u661F\u7CFB \u2014 \u77E5\u8BC6\u4F53\u7CFB\u7684\u5F62\u6210\u8FC7\u7A0B [G]"],"btn.post":["\u2913 \uD3EC\uC2A4\uD130","\u2913 POSTER","\u2913 \u30DD\u30B9\u30BF\u30FC","\u2913 \u6D77\u62A5"],"btn.post.t":["HUD \uC5C6\uC774 \uACE0\uD574\uC0C1\uB3C4 PNG \uC800\uC7A5 [P]","Save a high-resolution PNG with no HUD [P]","HUD\u306A\u3057\u3067\u9AD8\u89E3\u50CF\u5EA6PNG\u3092\u4FDD\u5B58 [P]","\u4FDD\u5B58\u65E0HUD\u7684\u9AD8\u5206\u8FA8\u7387PNG [P]"],"btn.snd":["\u266A \uC0AC\uC6B4\uB4DC","\u266A SOUND","\u266A \u30B5\u30A6\u30F3\u30C9","\u266A \u58F0\u97F3"],"btn.snd.t":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC \uCF1C\uAE30 / \uB044\uAE30 [U]","Ambient sound on / off [U]","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 \u30AA\u30F3 / \u30AA\u30D5 [U]","\u73AF\u5883\u97F3\u6548 \u5F00 / \u5173 [U]"],"btn.rst":["\u21BA \uC124\uC815 \uCD08\uAE30\uD654","\u21BA RESET","\u21BA \u8A2D\u5B9A\u30EA\u30BB\u30C3\u30C8","\u21BA \u91CD\u7F6E\u8BBE\u7F6E"],"boot.l1":["\uB80C\uB354 \uD30C\uC774\uD504\uB77C\uC778 \uCD08\uAE30\uD654","render pipeline","\u30EC\u30F3\u30C0\u30FC\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u521D\u671F\u5316","\u6E32\u67D3\u7BA1\u7EBF\u521D\u59CB\u5316"],"boot.l2":["\uC2EC\uC6B0\uC8FC \uBC30\uACBD \uC0DD\uC131","deep-space backdrop","\u6DF1\u5B87\u5B99\u80CC\u666F\u306E\u751F\u6210","\u6DF1\u7A7A\u80CC\u666F\u751F\u6210"],"boot.l3":["\uD56D\uC131\uACC4 \uADA4\uB3C4 \uC5D4\uC9C4 \uB300\uAE30","orbital engine","\u661F\u7CFB\u8ECC\u9053\u30A8\u30F3\u30B8\u30F3\u5F85\u6A5F","\u661F\u7CFB\u8F68\u9053\u5F15\u64CE\u5F85\u673A"],"boot.l4":["\uC870\uBA85 \xB7 \uADF8\uB808\uC774\uB4DC","light and grade","\u7167\u660E \xB7 \u30B0\u30EC\u30FC\u30C9","\u5149\u7167 \xB7 \u8C03\u8272"],"boot.l5":["\uBCFC\uD2B8 \uC778\uB371\uC2A4","vault index","\u30DC\u30EB\u30C8\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9","\u4ED3\u5E93\u7D22\u5F15"],"boot.wait":["\uB300\uAE30 \uC911","WAITING","\u5F85\u6A5F\u4E2D","\u7B49\u5F85\u4E2D"],"boot.pick":["\uBCFC\uD2B8 \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uBA74 \uADF8 \uADDC\uBAA8\uC5D0 \uB9DE\uB294 \uD589\uC131\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4.","Point this at a vault folder and a star system is built to its scale.","\u30DC\u30EB\u30C8\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u898F\u6A21\u306B\u5408\u3063\u305F\u60D1\u661F\u7CFB\u304C\u4F5C\u3089\u308C\u307E\u3059\u3002","\u6307\u5B9A\u4ED3\u5E93\u6587\u4EF6\u5939\u540E\uFF0C\u4F1A\u751F\u6210\u4E0E\u5176\u89C4\u6A21\u76F8\u79F0\u7684\u884C\u661F\u7CFB\u3002"],"boot.upload":["\u25A3 \uB0B4 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30","\u25A3 OPEN MY VAULT FOLDER","\u25A3 \u81EA\u5206\u306E\u30DC\u30EB\u30C8\u3092\u958B\u304F","\u25A3 \u6253\u5F00\u6211\u7684\u4ED3\u5E93\u6587\u4EF6\u5939"],"boot.start":["\u25B6 \uC2DC\uC791\uD558\uAE30","\u25B6 START","\u25B6 \u30B9\u30BF\u30FC\u30C8","\u25B6 \u5F00\u59CB"],"boot.note":["\uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 \uC2DC\uC791\uD558\uBA74 \uBE48 \uC6B0\uC8FC\uC5D0\uC11C \uCD9C\uBC1C\uD569\uB2C8\uB2E4 \u2014 \uC5B8\uC81C\uB4E0 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uC73C\uBA74 \uB429\uB2C8\uB2E4.<br>\uC870\uC791\uC740 \uC804\uBD80 \uB9C8\uC6B0\uC2A4\uC640 \uD0A4\uBCF4\uB4DC\uB85C \uAC00\uB2A5\uD569\uB2C8\uB2E4.<br>\uD30C\uC77C\uC740 \uBE0C\uB77C\uC6B0\uC800 \uC548\uC5D0\uC11C\uB9CC \uCC98\uB9AC\uB418\uBA70 \uC5B4\uB514\uC5D0\uB3C4 \uC804\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Start without a folder and you begin in empty space \u2014 drop one on the window whenever you like.<br>Everything is reachable with the mouse and keyboard.<br>Files are processed inside the browser and are never sent anywhere.","\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u305B\u305A\u306B\u59CB\u3081\u308B\u3068\u3001\u7A7A\u306E\u5B87\u5B99\u304B\u3089\u51FA\u767A\u3057\u307E\u3059 \u2014 \u3044\u3064\u3067\u3082\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u30C9\u30ED\u30C3\u30D7\u3067\u304D\u307E\u3059\u3002<br>\u64CD\u4F5C\u306F\u3059\u3079\u3066\u30DE\u30A6\u30B9\u3068\u30AD\u30FC\u30DC\u30FC\u30C9\u3067\u53EF\u80FD\u3067\u3059\u3002<br>\u30D5\u30A1\u30A4\u30EB\u306F\u30D6\u30E9\u30A6\u30B6\u5185\u3067\u306E\u307F\u51E6\u7406\u3055\u308C\u3001\u3069\u3053\u306B\u3082\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093\u3002","\u4E0D\u6307\u5B9A\u6587\u4EF6\u5939\u76F4\u63A5\u5F00\u59CB\uFF0C\u5C06\u4ECE\u7A7A\u767D\u5B87\u5B99\u51FA\u53D1 \u2014 \u968F\u65F6\u53EF\u4EE5\u628A\u6587\u4EF6\u5939\u62D6\u5230\u7A97\u53E3\u4E0A\u3002<br>\u6240\u6709\u64CD\u4F5C\u90FD\u80FD\u7528\u9F20\u6807\u548C\u952E\u76D8\u5B8C\u6210\u3002<br>\u6587\u4EF6\u4EC5\u5728\u6D4F\u89C8\u5668\u5185\u5904\u7406\uFF0C\u4E0D\u4F1A\u53D1\u9001\u5230\u4EFB\u4F55\u5730\u65B9\u3002"],"boot.staged":["\u2713 {name} \xB7 \uB178\uD2B8 {n}\uAC1C \uC900\uBE44\uB428","\u2713 {name} \xB7 {n} notes ready","\u2713 {name} \xB7 \u30CE\u30FC\u30C8 {n} \u4EF6 \u6E96\u5099\u5B8C\u4E86","\u2713 {name} \xB7 \u5DF2\u51C6\u5907 {n} \u7BC7\u7B14\u8BB0"],"boot.nofold":["\uC120\uD0DD\uB41C \uD3F4\uB354","the selected folder","\u9078\u629E\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0","\u6240\u9009\u6587\u4EF6\u5939"],"boot.nomd":["\uADF8 \uD3F4\uB354\uC5D0\uC11C \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","No markdown files in that folder.","\u305D\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002","\u5728\u8BE5\u6587\u4EF6\u5939\u4E2D\u672A\u627E\u5230 Markdown \u6587\u4EF6\u3002"],"hud.sub":["\uD3F4\uB354\uB294 \uD56D\uC131 \xB7 \uB178\uD2B8\uB294 \uD589\uC131","FOLDERS ARE STARS \xB7 NOTES ORBIT","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F \xB7 \u30CE\u30FC\u30C8\u306F\u60D1\u661F","\u6587\u4EF6\u5939\u662F\u6052\u661F \xB7 \u7B14\u8BB0\u662F\u884C\u661F"],"hud.inst.t":["\uCE74\uBA54\uB77C \uACC4\uAE30 \u2014 \uAC70\uB9AC, \uCD95\uCC99, \uD504\uB808\uC784","Camera readings \u2014 range, scale, frame rate","\u30AB\u30E1\u30E9\u8A08\u5668 \u2014 \u8DDD\u96E2\u30FB\u7E2E\u5C3A\u30FB\u30D5\u30EC\u30FC\u30E0","\u76F8\u673A\u8BFB\u6570 \u2014 \u8DDD\u79BB\u3001\u6BD4\u4F8B\u3001\u5E27\u7387"],"boot.tag":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131 \u2014 \uBCFC\uD2B8\uAC00 \uC790\uB77C\uC628 \uACFC\uC815\uC744 \uB2E4\uC2DC \uBD05\uB2C8\uB2E4","Folders are stars, notes orbit them \u2014 and the vault replays how it grew","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F \u2014 \u30DC\u30EB\u30C8\u304C\u80B2\u3063\u305F\u9806\u306B\u518D\u751F\u3057\u307E\u3059","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u73AF\u7ED5\u5176\u8FD0\u884C \u2014 \u5E76\u91CD\u653E\u4ED3\u5E93\u7684\u6210\u957F\u8FC7\u7A0B"],"insp.empty":['\uD589\uC131\uC744 \uD074\uB9AD\uD558\uBA74 \uB178\uD2B8\uB97C \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4<br><span style="opacity:.6">\uB354\uBE14\uD074\uB9AD \u2014 \uB9C8\uC778\uB4DC\uB9F5 \xB7 / \u2014 \uAC80\uC0C9</span>','Click a planet to read its note<br><span style="opacity:.6">Double-click \u2014 mind map \xB7 / \u2014 search</span>','\u60D1\u661F\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30CE\u30FC\u30C8\u3092\u8AAD\u3081\u307E\u3059<br><span style="opacity:.6">\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF \u2014 \u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7 \xB7 / \u2014 \u691C\u7D22</span>','\u70B9\u51FB\u884C\u661F\u5373\u53EF\u9605\u8BFB\u7B14\u8BB0<br><span style="opacity:.6">\u53CC\u51FB \u2014 \u601D\u7EF4\u5BFC\u56FE \xB7 / \u2014 \u641C\u7D22</span>'],"cnt.links":["\uC5F0\uACB0 \uD589\uC131","LINKED","\u63A5\u7D9A\u60D1\u661F","\u8FDE\u63A5\u884C\u661F"],"cnt.moons":["\uC9C1\uC18D \uC704\uC131","MOONS","\u76F4\u5C5E\u885B\u661F","\u76F4\u5C5E\u536B\u661F"],"cnt.far":["\uC5F0\uACB0 \uC704\uC131","FAR MOONS","\u63A5\u7D9A\u885B\u661F","\u8FDE\u63A5\u536B\u661F"],"insp.go":["\u25CE \uC774\uB3D9\uD558\uAE30","\u25CE TRAVEL","\u25CE \u79FB\u52D5\u3059\u308B","\u25CE \u524D\u5F80"],"insp.mm":["\u25C8 \uB9C8\uC778\uB4DC\uB9F5 [M]","\u25C8 MIND MAP [M]","\u25C8 \u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7 [M]","\u25C8 \u601D\u7EF4\u5BFC\u56FE [M]"],"insp.core":["\u2605 \uC911\uC2EC \uD56D\uC131\uC73C\uB85C","\u2605 MAKE IT THE HUB","\u2605 \u4E2D\u5FC3\u6052\u661F\u306B\u3059\u308B","\u2605 \u8BBE\u4E3A\u4E2D\u5FC3\u6052\u661F"],"insp.core.on":["\u2606 \uC911\uC2EC \uD574\uC81C (\uC790\uB3D9)","\u2606 RELEASE HUB (AUTO)","\u2606 \u4E2D\u5FC3\u6052\u661F\u3092\u89E3\u9664 (\u81EA\u52D5)","\u2606 \u89E3\u9664\u4E2D\u5FC3\u6052\u661F (\u81EA\u52A8)"],"core.set":["{n} \xB7 \uC774\uC81C \uC774 \uD56D\uC131\uACC4\uC758 \uC911\uC2EC\uC785\uB2C8\uB2E4","{n} is the centre now","{n} \xB7 \u3053\u306E\u661F\u7CFB\u306E\u4E2D\u5FC3\u306B\u306A\u308A\u307E\u3057\u305F","{n} \xB7 \u73B0\u5728\u662F\u8FD9\u4E2A\u661F\u7CFB\u7684\u4E2D\u5FC3"],"core.auto":["\uC911\uC2EC \uD56D\uC131\uC744 \uC790\uB3D9\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4","The centre is chosen automatically again","\u4E2D\u5FC3\u6052\u661F\u3092\u81EA\u52D5\u9078\u629E\u306B\u623B\u3057\u307E\u3057\u305F","\u5DF2\u6062\u590D\u81EA\u52A8\u9009\u62E9\u4E2D\u5FC3\u6052\u661F"],"insp.ripple":["\u25C9 \uD30C\uBB38 [SPACE]","\u25C9 RIPPLE [SPACE]","\u25C9 \u6CE2\u7D0B [SPACE]","\u25C9 \u6D9F\u6F2A [SPACE]"],"insp.route":["\u25C7 \uACBD\uB85C \uCC3E\uAE30","\u25C7 ROUTE FROM HERE","\u25C7 \u3053\u3053\u304B\u3089\u7D4C\u8DEF","\u25C7 \u67E5\u627E\u8DEF\u5F84"],"insp.route.p":["\u25C7 \uB2E4\uB978 \uB05D \uACE0\uB974\uAE30","\u25C7 PICK THE OTHER END","\u25C7 \u3082\u3046\u4E00\u65B9\u306E\u7AEF\u3092\u9078\u629E","\u25C7 \u8BF7\u9009\u62E9\u53E6\u4E00\u7AEF"],"insp.route.c":["\u25C7 \uACBD\uB85C \uC9C0\uC6B0\uAE30","\u25C7 CLEAR THE ROUTE","\u25C7 \u7D4C\u8DEF\u3092\u6D88\u3059","\u25C7 \u6E05\u9664\u8DEF\u5F84"],"route.pick":["\uB2E4\uB978 \uCABD \uB05D\uC774 \uB420 \uB178\uD2B8\uB97C \uACE0\uB974\uC2ED\uC2DC\uC624","Pick the note at the other end","\u3082\u3046\u4E00\u65B9\u306E\u7AEF\u306E\u30CE\u30FC\u30C8\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044","\u8BF7\u9009\u62E9\u53E6\u4E00\u7AEF\u7684\u7B14\u8BB0"],"route.hops":["{n}\uD649","{n} hops","{n} \u30DB\u30C3\u30D7","{n} \u8DF3"],"route.none":["\uB450 \uB178\uD2B8\uB294 \uC774\uC5B4\uC838 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4","These two are not connected","\u3053\u306E2\u3064\u306F\u3064\u306A\u304C\u3063\u3066\u3044\u307E\u305B\u3093","\u8FD9\u4E24\u7BC7\u7B14\u8BB0\u6CA1\u6709\u8FDE\u63A5"],"route.clear":["\uACBD\uB85C\uB97C \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4","Route cleared","\u7D4C\u8DEF\u3092\u6D88\u3057\u307E\u3057\u305F","\u5DF2\u6E05\u9664\u8DEF\u5F84"],"insp.nobody":["(\uBCF8\uBB38 \uC5C6\uC74C)","(no body text)","\uFF08\u672C\u6587\u306A\u3057\uFF09","\uFF08\u65E0\u6B63\u6587\uFF09"],"insp.broken":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C","BROKEN","\u30EA\u30F3\u30AF\u5207\u308C","\u65AD\u5F00\u7684\u94FE\u63A5"],"hud.broken":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C","BROKEN","\u30EA\u30F3\u30AF\u5207\u308C","\u65AD\u5F00\u7684\u94FE\u63A5"],"hud.off":["HUD \uC228\uAE40 \xB7 H \uB85C \uB2E4\uC2DC \uD45C\uC2DC","HUD hidden \xB7 H brings it back","HUD \u975E\u8868\u793A \xB7 H \u3067\u623B\u308B","HUD \u5DF2\u9690\u85CF \xB7 \u6309 H \u6062\u590D"],"broken.on":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uAC00 \uC788\uB294 \uB178\uD2B8\uB9CC","Only notes with broken links","\u30EA\u30F3\u30AF\u5207\u308C\u306E\u3042\u308B\u30CE\u30FC\u30C8\u306E\u307F","\u4EC5\u663E\u793A\u6709\u65AD\u5F00\u94FE\u63A5\u7684\u7B14\u8BB0"],"broken.off":["\uD544\uD130 \uD574\uC81C","Filter cleared","\u30D5\u30A3\u30EB\u30BF\u30FC\u89E3\u9664","\u5DF2\u6E05\u9664\u7B5B\u9009"],"broken.none":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4","No broken links in this vault","\u30EA\u30F3\u30AF\u5207\u308C\u306F\u3042\u308A\u307E\u305B\u3093","\u6B64\u4ED3\u5E93\u6CA1\u6709\u65AD\u5F00\u7684\u94FE\u63A5"],"orb.a":["\uC7A5\uBC18\uACBD","SEMI-MAJOR","\u8ECC\u9053\u9577\u534A\u5F84","\u534A\u957F\u8F74"],"orb.e":["\uC774\uC2EC\uB960","ECCENTRICITY","\u96E2\u5FC3\u7387","\u504F\u5FC3\u7387"],"orb.p":["\uACF5\uC804 \uC8FC\uAE30","PERIOD","\u516C\u8EE2\u5468\u671F","\u516C\u8F6C\u5468\u671F"],"orb.i":["\uADA4\uB3C4 \uACBD\uC0AC","INCLINATION","\u8ECC\u9053\u50BE\u659C","\u8F68\u9053\u503E\u89D2"],"insp.touched":["\uC218\uC815 {t}","touched {t}","\u66F4\u65B0 {t}","\u4FEE\u6539 {t}"],"ago.today":["\uC624\uB298","today","\u4ECA\u65E5","\u4ECA\u5929"],"ago.d":["{n}\uC77C \uC804","{n}d ago","{n}\u65E5\u524D","{n}\u5929\u524D"],"ago.w":["{n}\uC8FC \uC804","{n}w ago","{n}\u9031\u524D","{n}\u5468\u524D"],"ago.mo":["{n}\uAC1C\uC6D4 \uC804","{n}mo ago","{n}\u304B\u6708\u524D","{n}\u4E2A\u6708\u524D"],"ago.y":["{n}\uB144 \uC804","{n}y ago","{n}\u5E74\u524D","{n}\u5E74\u524D"],"insp.open":["\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30 [O]","\u2197 OPEN IN OBSIDIAN [O]","\u2197 Obsidian\u3067\u958B\u304F [O]","\u2197 \u5728 Obsidian \u4E2D\u6253\u5F00 [O]"],"mm.open":["\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30","\u2197 OPEN IN OBSIDIAN","\u2197 Obsidian\u3067\u958B\u304F","\u2197 \u5728 Obsidian \u4E2D\u6253\u5F00"],"open.none":["\uBA3C\uC800 \uB178\uD2B8\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624","Select a note first","\u5148\u306B\u30CE\u30FC\u30C8\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","\u8BF7\u5148\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"],"open.fail":["\uADF8 \uB178\uD2B8\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4","Could not open that note","\u305D\u306E\u30CE\u30FC\u30C8\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F","\u65E0\u6CD5\u6253\u5F00\u8BE5\u7B14\u8BB0"],"sync.done":["\uBCFC\uD2B8 \uAC31\uC2E0 \xB7 \uB178\uD2B8 {n}\uAC1C","Vault updated \xB7 {n} notes","\u30DC\u30EB\u30C8\u66F4\u65B0 \xB7 \u30CE\u30FC\u30C8 {n} \u4EF6","\u4ED3\u5E93\u5DF2\u66F4\u65B0 \xB7 {n} \u7BC7\u7B14\u8BB0"],"ev.nova":["\u2726 {n} \u2014 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uB2E4","\u2726 {n} \u2014 gone","\u2726 {n} \u2014 \u6D88\u3048\u307E\u3057\u305F","\u2726 {n} \u2014 \u5DF2\u6D88\u5931"],"ev.comet":["\u2604 {n} \uC5D0 \uD61C\uC131\uC774 \uB2FF\uC558\uC2B5\uB2C8\uB2E4","\u2604 comet down on {n}","\u2604 \u5F57\u661F\u304C {n} \u306B\u5230\u9054","\u2604 \u5F57\u661F\u62B5\u8FBE {n}"],"cls.giant":["\uAC00\uC2A4 \uAC70\uC131","GAS GIANT","\u30AC\u30B9\u60D1\u661F","\u6C14\u6001\u5DE8\u884C\u661F"],"cls.terr":["\uC9C0\uAD6C\uD615 \uD589\uC131","TERRESTRIAL","\u5730\u7403\u578B\u60D1\u661F","\u7C7B\u5730\u884C\u661F"],"cls.rock":["\uC554\uC11D \uCC9C\uCCB4","ROCK","\u5CA9\u77F3\u5929\u4F53","\u5CA9\u8D28\u5929\u4F53"],"cls.ringed":["\uACE0\uB9AC","RINGED","\u74B0\u3042\u308A","\u6709\u73AF"],"cls.star":["{s}\uD615 \uBCC4 \xB7 {t} K","{s}-type star \xB7 {t} K","{s}\u578B\u661F \xB7 {t} K","{s}\u578B\u6052\u661F \xB7 {t} K"],"guide.sky":["\uD61C\uC131\uC740 \uBC29\uAE08 \uC190\uB304 \uB178\uD2B8\uC5D0 \uB0B4\uB824\uC549\uACE0, \uCD08\uC2E0\uC131\uC740 \uBCF4\uB294 \uB3D9\uC548 \uC0AD\uC81C\uB41C \uB178\uD2B8\uC785\uB2C8\uB2E4.","A comet lands on the note you just touched; a supernova is a note deleted while you were watching.","\u5F57\u661F\u306F\u4ECA\u89E6\u308C\u305F\u30CE\u30FC\u30C8\u306B\u964D\u308A\u7ACB\u3061\u3001\u8D85\u65B0\u661F\u306F\u898B\u3066\u3044\u308B\u9593\u306B\u524A\u9664\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3067\u3059\u3002","\u5F57\u661F\u964D\u843D\u5728\u4F60\u521A\u89E6\u78B0\u7684\u7B14\u8BB0\u4E0A\uFF0C\u8D85\u65B0\u661F\u662F\u4F60\u89C2\u770B\u65F6\u88AB\u5220\u9664\u7684\u7B14\u8BB0\u3002"],"go.travel":["","\u25CE GO TO {n}","\u25CE {n} \u3078\u79FB\u52D5","\u25CE \u524D\u5F80 {n}"],"gen.close.t":["\uC0DD\uC131 \uC885\uB8CC [G]","Leave Genesis [G]","\u751F\u6210\u3092\u7D42\u4E86 [G]","\u7ED3\u675F\u751F\u6210 [G]"],"gen.ttl":["GENESIS \xB7 \uD56D\uC131\uACC4 \uC0DD\uC131","GENESIS \xB7 STAR SYSTEM","GENESIS \xB7 \u661F\u7CFB\u751F\u6210","GENESIS \xB7 \u661F\u7CFB\u751F\u6210"],"gen.play.t":["\uC7AC\uC0DD / \uC815\uC9C0","Play / pause","\u518D\u751F / \u505C\u6B62","\u64AD\u653E / \u6682\u505C"],"gen.rst.t":["\uCC98\uC74C(\uBB34)\uC73C\uB85C","Back to the void","\u6700\u521D\uFF08\u7121\uFF09\u3078","\u56DE\u5230\u8D77\u70B9\uFF08\u865A\u65E0\uFF09"],"gen.spd.t":["\uC7AC\uC0DD \uC18D\uB3C4","Playback speed","\u518D\u751F\u901F\u5EA6","\u64AD\u653E\u901F\u5EA6"],"gen.p0":["\uBB34 \u2014 \uC544\uC9C1 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4","Void \u2014 nothing yet","\u7121 \u2014 \u307E\u3060\u4F55\u3082\u3042\u308A\u307E\u305B\u3093","\u865A\u65E0 \u2014 \u5C1A\u4E14\u7A7A\u65E0\u4E00\u7269"],"gen.p1":["\uC810\uD654 \u2014 \uC911\uC2EC \uAC1C\uB150\uC774 \uBD88\uC744 \uCF2D\uB2C8\uB2E4","Ignition \u2014 the central concept lights up","\u70B9\u706B \u2014 \u4E2D\u5FC3\u6982\u5FF5\u304C\u706F\u308A\u307E\u3059","\u70B9\u706B \u2014 \u4E2D\u5FC3\u6982\u5FF5\u4EAE\u8D77"],"gen.p2":["\uC751\uCD95 \u2014 \uD3F4\uB354\uAC00 \uD56D\uC131\uC73C\uB85C \uBB49\uCE69\uB2C8\uB2E4","Condensation \u2014 folders gather into stars","\u51DD\u7E2E \u2014 \u30D5\u30A9\u30EB\u30C0\u304C\u6052\u661F\u306B\u96C6\u307E\u308A\u307E\u3059","\u51DD\u805A \u2014 \u6587\u4EF6\u5939\u805A\u6210\u6052\u661F"],"gen.p3":["\uAC15\uCC29 \u2014 \uB178\uD2B8\uAC00 \uADA4\uB3C4\uB97C \uC7A1\uC2B5\uB2C8\uB2E4","Accretion \u2014 notes settle into orbit","\u964D\u7740 \u2014 \u30CE\u30FC\u30C8\u304C\u8ECC\u9053\u306B\u4E57\u308A\u307E\u3059","\u5438\u79EF \u2014 \u7B14\u8BB0\u8FDB\u5165\u8F68\u9053"],"gen.p4":["\uD3EC\uD68D \u2014 \uC6D0\uBB38\uC774 \uC704\uC131\uC774 \uB429\uB2C8\uB2E4","Capture \u2014 source material becomes moons","\u6355\u7372 \u2014 \u539F\u6587\u304C\u885B\u661F\u306B\u306A\u308A\u307E\u3059","\u6355\u83B7 \u2014 \u539F\u59CB\u6750\u6599\u5316\u4F5C\u536B\u661F"],"gen.p5":["\uC5F0\uACB0 \u2014 \uB9C1\uD06C\uAC00 \uC810\uD654\uD558\uBA70 \uC9C0\uC2DD\uCCB4\uACC4\uAC00 \uB429\uB2C8\uB2E4","Network \u2014 links ignite into a knowledge base","\u63A5\u7D9A \u2014 \u30EA\u30F3\u30AF\u304C\u70B9\u706B\u3057\u77E5\u8B58\u4F53\u7CFB\u306B\u306A\u308A\u307E\u3059","\u8FDE\u63A5 \u2014 \u94FE\u63A5\u70B9\u4EAE\uFF0C\u6210\u4E3A\u77E5\u8BC6\u4F53\u7CFB"],"gen.p6":["\uD604\uC7AC \u2014 \uC9C0\uAE08\uC758 \uD56D\uC131\uACC4","Present \u2014 the system as it stands","\u73FE\u5728 \u2014 \u4ECA\u306E\u661F\u7CFB","\u5F53\u4E0B \u2014 \u6B64\u523B\u7684\u661F\u7CFB"],"gen.play":["\uBB34\uC5D0\uC11C \uD56D\uC131\uACC4\uB85C \u2014 \uD615\uC131 \uC7AC\uC0DD","From void to star system \u2014 replaying the formation","\u7121\u304B\u3089\u661F\u7CFB\u3078 \u2014 \u5F62\u6210\u3092\u518D\u751F","\u4ECE\u865A\u65E0\u5230\u661F\u7CFB \u2014 \u91CD\u653E\u5F62\u6210\u8FC7\u7A0B"],"gen.done":["\uD56D\uC131\uACC4 \uC644\uC131","STAR SYSTEM COMPLETE","\u661F\u7CFB\u5B8C\u6210","\u661F\u7CFB\u5F62\u6210\u5B8C\u6BD5"],"gen.undated":["\uBB34\uC5F0\uB3C4","UNDATED","\u5E74\u4E0D\u660E","\u65E0\u65E5\u671F"],"gen.sys":["\uACC4 {n}","{n} SYS","\u7CFB {n}","\u7CFB {n}"],"mm.back":["\u2190 \uB4A4\uB85C","\u2190 BACK","\u2190 \u623B\u308B","\u2190 \u8FD4\u56DE"],"mm.close":["\uB2EB\uAE30 [ ESC ]","CLOSE [ ESC ]","\u9589\u3058\u308B [ ESC ]","\u5173\u95ED [ ESC ]"],"mm.hop":["\u25CC 2\uD649","\u25CC 2 HOPS","\u25CC 2\u30DB\u30C3\u30D7","\u25CC 2\u8DF3"],"mm.keys":["\u2190 \u2192 \uC774\uC6C3 \xB7 ENTER \uC911\uC2EC\uC73C\uB85C \xB7 \u232B \uB4A4\uB85C \xB7 2 \uB450 \uD649 \xB7 F \uD654\uBA74 \uB9DE\uCDA4 \xB7 G \uC774\uB3D9 \xB7 ESC \uB2EB\uAE30","\u2190 \u2192 STEP \xB7 ENTER CENTRE \xB7 \u232B BACK \xB7 2 HOPS \xB7 F FRAME \xB7 G GO TO \xB7 ESC CLOSE","\u2190 \u2192 \u96A3\u3078 \xB7 ENTER \u4E2D\u5FC3\u306B \xB7 \u232B \u623B\u308B \xB7 2 \u30DB\u30C3\u30D7 \xB7 F \u5168\u4F53 \xB7 G \u79FB\u52D5 \xB7 ESC \u9589\u3058\u308B","\u2190 \u2192 \u90BB\u5C45 \xB7 ENTER \u5C45\u4E2D \xB7 \u232B \u8FD4\u56DE \xB7 2 \u4E24\u8DF3 \xB7 F \u9002\u914D \xB7 G \u524D\u5F80 \xB7 ESC \u5173\u95ED"],"mm.hop2":["2\uD649","2 HOPS","2\u30DB\u30C3\u30D7","2\u8DF3"],"mm.hop.t":["\uC774\uC6C3\uC758 \uC774\uC6C3\uAE4C\uC9C0 \uD55C \uACB9 \uB354 [2]","One more ring \u2014 neighbours of neighbours [2]","\u96A3\u306E\u96A3\u307E\u3067\u3082\u3046\u4E00\u5C64 [2]","\u518D\u52A0\u4E00\u5C42 \u2014 \u90BB\u5C45\u7684\u90BB\u5C45 [2]"],"leg.wiki":["\uC704\uD0A4\uB9C1\uD06C","WIKILINK","\u30A6\u30A3\u30AD\u30EA\u30F3\u30AF","\u7EF4\u57FA\u94FE\u63A5"],"leg.src":["\uCD9C\uCC98","SOURCE","\u51FA\u5178","\u6765\u6E90"],"mm.hint":["\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9<br>\uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804 \xB7 \uD720 = \uD655\uB300","CLICK = SELECT \xB7 DOUBLE-CLICK = RECENTRE<br>DRAG = ORBIT THE VIEW \xB7 WHEEL = ZOOM","\u30AF\u30EA\u30C3\u30AF = \u9078\u629E \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF = \u4E2D\u5FC3\u79FB\u52D5<br>\u30C9\u30E9\u30C3\u30B0 = \u8996\u70B9\u56DE\u8EE2 \xB7 \u30DB\u30A4\u30FC\u30EB = \u62E1\u5927","\u5355\u51FB = \u9009\u62E9 \xB7 \u53CC\u51FB = \u79FB\u52A8\u4E2D\u5FC3<br>\u62D6\u52A8 = \u65CB\u8F6C\u89C6\u89D2 \xB7 \u6EDA\u8F6E = \u7F29\u653E"],"mm.trunc":["\uC5F0\uACB0 {t}\uAC1C \uC911 \uC0C1\uC704 {n}\uAC1C","TOP {n} OF {t} LINKS","\u63A5\u7D9A {t} \u4EF6\u4E2D \u4E0A\u4F4D {n} \u4EF6","{t} \u6761\u8FDE\u63A5\u4E2D\u7684\u524D {n} \u6761"],"mm.trunc2":["2\uD649 {t}\uAC1C \uC911 \uC0C1\uC704 {n}\uAC1C","TOP {n} OF {t} SECOND-HOP","2\u30DB\u30C3\u30D7 {t} \u4EF6\u4E2D \u4E0A\u4F4D {n} \u4EF6","{t} \u4E2A\u4E8C\u8DF3\u4E2D\u7684\u524D {n} \u4E2A"],"mm.hintfull":["\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9 \xB7 \uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804<br><b>\u2190 \u2192</b> \uC120\uD0DD \xB7 <b>ENTER</b> \uC911\uC2EC \xB7 <b>F</b> \uB9DE\uCDA4 \xB7 <b>2</b> 2\uD649","CLICK = SELECT \xB7 DOUBLE-CLICK = RECENTRE \xB7 DRAG = ORBIT<br><b>\u2190 \u2192</b> SELECT \xB7 <b>ENTER</b> CENTRE \xB7 <b>F</b> FIT \xB7 <b>2</b> 2 HOPS","\u30AF\u30EA\u30C3\u30AF = \u9078\u629E \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF = \u4E2D\u5FC3\u79FB\u52D5 \xB7 \u30C9\u30E9\u30C3\u30B0 = \u8996\u70B9\u56DE\u8EE2<br><b>\u2190 \u2192</b> \u9078\u629E \xB7 <b>ENTER</b> \u4E2D\u5FC3 \xB7 <b>F</b> \u30D5\u30A3\u30C3\u30C8 \xB7 <b>2</b> 2\u30DB\u30C3\u30D7","\u5355\u51FB = \u9009\u62E9 \xB7 \u53CC\u51FB = \u79FB\u52A8\u4E2D\u5FC3 \xB7 \u62D6\u52A8 = \u65CB\u8F6C\u89C6\u89D2<br><b>\u2190 \u2192</b> \u9009\u62E9 \xB7 <b>ENTER</b> \u5C45\u4E2D \xB7 <b>F</b> \u9002\u5E94 \xB7 <b>2</b> \u4E8C\u8DF3"],"mm.hintopen":["<b>CTRL+ENTER</b> \uB178\uD2B8 \uC5F4\uAE30","<b>CTRL+ENTER</b> OPEN NOTE","<b>CTRL+ENTER</b> \u30CE\u30FC\u30C8\u3092\u958B\u304F","<b>CTRL+ENTER</b> \u6253\u5F00\u7B14\u8BB0"],"mm.sec.conn":["\uC5F0\uACB0","CONNECTIONS","\u63A5\u7D9A","\u8FDE\u63A5"],"mm.sec.tags":["\uD0DC\uADF8","TAGS","\u30BF\u30B0","\u6807\u7B7E"],"mm.sec.excerpt":["\uBC1C\uCDCC","EXCERPT","\u629C\u7C8B","\u6458\u5F55"],"mm.sec.links":["\uB9C1\uD06C","LINKS","\u30EA\u30F3\u30AF","\u94FE\u63A5"],"mm.go":["\u25CE \uC774 \uB178\uB4DC\uB85C \uC774\uB3D9","\u25CE GO TO THIS NODE","\u25CE \u3053\u306E\u30CE\u30FC\u30C9\u3078\u79FB\u52D5","\u25CE \u524D\u5F80\u6B64\u8282\u70B9"],"mm.center":["\u25C8 \uC774 \uB178\uB4DC\uB97C \uC911\uC2EC\uC73C\uB85C","\u25C8 CENTRE ON THIS NODE","\u25C8 \u3053\u306E\u30CE\u30FC\u30C9\u3092\u4E2D\u5FC3\u306B","\u25C8 \u4EE5\u6B64\u8282\u70B9\u4E3A\u4E2D\u5FC3"],"mm.isroot":["\uC911\uC2EC","CENTRE","\u4E2D\u5FC3","\u4E2D\u5FC3"],"mm.nobody":["\uBCF8\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","No body text.","\u672C\u6587\u304C\u3042\u308A\u307E\u305B\u3093\u3002","\u6CA1\u6709\u6B63\u6587\u3002"],"hint.body":["\uC544\uC9C1 \uBCFC\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD3F4\uB354\uB97C \uC774 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694.","No vault yet. Drop a folder on this window, or use the button below.","\u307E\u3060\u30DC\u30EB\u30C8\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30D5\u30A9\u30EB\u30C0\u3092\u3053\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u30C9\u30ED\u30C3\u30D7\u3059\u308B\u304B\u3001\u4E0B\u306E\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u8FD8\u6CA1\u6709\u4ED3\u5E93\u3002\u628A\u6587\u4EF6\u5939\u62D6\u5230\u8FD9\u4E2A\u7A97\u53E3\uFF0C\u6216\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u3002"],"drop.body":["\uD3F4\uB354\uB098 \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uB193\uC73C\uBA74 \uADF8 \uBCFC\uD2B8\uB85C \uC6B0\uC8FC\uB97C \uB9CC\uB4ED\uB2C8\uB2E4","Drop a folder or markdown files and a cosmos is built from that vault","\u30D5\u30A9\u30EB\u30C0\u3084\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u7F6E\u304F\u3068\u3001\u305D\u306E\u30DC\u30EB\u30C8\u304B\u3089\u5B87\u5B99\u3092\u4F5C\u308A\u307E\u3059","\u653E\u4E0B\u6587\u4EF6\u5939\u6216 Markdown \u6587\u4EF6\uFF0C\u5C31\u7528\u90A3\u4E2A\u4ED3\u5E93\u9020\u4E00\u4E2A\u5B87\u5B99"],"search.ph":["\uB178\uD2B8 \xB7 \uC124\uC815 \xB7 \uAE30\uB2A5 \uAC80\uC0C9 \u2026","Search notes, settings, actions \u2026","\u30CE\u30FC\u30C8\u30FB\u8A2D\u5B9A\u30FB\u6A5F\u80FD\u3092\u691C\u7D22 \u2026","\u641C\u7D22\u7B14\u8BB0 \xB7 \u8BBE\u7F6E \xB7 \u529F\u80FD \u2026"],"insp.more":["+ {n}\uAC1C \uB354 \uBCF4\uAE30","+ {n} more","+ \u4ED6 {n} \u4EF6","+ \u8FD8\u6709 {n} \u9879"],"find.knob":["\uC124\uC815","SETTING","\u8A2D\u5B9A","\u8BBE\u7F6E"],"guide.quality":["\uCEE8\uD2B8\uB864 \uB9E8 \uC704\uC758 CINEMA \xB7 BALANCED \xB7 FAST. \uBE5B \uD6A8\uACFC \uC5EC\uB35F \uAC1C\uB97C \uD55C \uBC88\uC5D0 \uB9DE\uCDA5\uB2C8\uB2E4. \uD070 \uBCFC\uD2B8\uAC00 \uB290\uB9AC\uBA74 FAST\uBD80\uD130 \uB204\uB974\uC2ED\uC2DC\uC624.","CINEMA \xB7 BALANCED \xB7 FAST at the head of the controls. Sets the eight light effects at once; if a big vault is slow, FAST is the first thing to press.","\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u6700\u4E0A\u90E8\u306E CINEMA \xB7 BALANCED \xB7 FAST\u3002\u5149\u306E\u52B9\u679C8\u3064\u3092\u4E00\u5EA6\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u5927\u304D\u306A\u30DC\u30EB\u30C8\u304C\u91CD\u3044\u3068\u304D\u306F\u307E\u305A FAST \u3092\u3002","\u63A7\u5236\u9762\u677F\u9876\u90E8\u7684 CINEMA \xB7 BALANCED \xB7 FAST\u3002\u4E00\u6B21\u8BBE\u7F6E\u516B\u9879\u5149\u6548\uFF1B\u5927\u4ED3\u5E93\u5361\u987F\u65F6\u5148\u6309 FAST\u3002"],"q.t":["\uD654\uC9C8 \u2014 \uBE5B \uD6A8\uACFC \uC5EC\uB35F \uAC1C\uB97C \uD55C \uBC88\uC5D0 \uB9DE\uCDA5\uB2C8\uB2E4. \uC2AC\uB77C\uC774\uB354\uB97C \uC9C1\uC811 \uC6C0\uC9C1\uC774\uBA74 \uC120\uD0DD\uC774 \uD480\uB9BD\uB2C8\uB2E4.","Quality \u2014 sets the eight light effects at once. Moving one of them by hand leaves the preset.","\u753B\u8CEA \u2014 \u5149\u306E\u52B9\u679C8\u3064\u3092\u4E00\u5EA6\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u500B\u5225\u306B\u52D5\u304B\u3059\u3068\u30D7\u30EA\u30BB\u30C3\u30C8\u304B\u3089\u5916\u308C\u307E\u3059\u3002","\u753B\u8D28 \u2014 \u4E00\u6B21\u8BBE\u7F6E\u516B\u9879\u5149\u6548\u3002\u624B\u52A8\u8C03\u6574\u4EFB\u610F\u4E00\u9879\u5373\u8131\u79BB\u9884\u8BBE\u3002"],"q.cinematic":["\uD654\uC9C8: \uC2DC\uB124\uB9C8\uD2F1","QUALITY \xB7 CINEMATIC","\u753B\u8CEA: \u30B7\u30CD\u30DE\u30C6\u30A3\u30C3\u30AF","\u753B\u8D28\uFF1A\u7535\u5F71"],"q.balanced":["\uD654\uC9C8: \uADE0\uD615","QUALITY \xB7 BALANCED","\u753B\u8CEA: \u30D0\u30E9\u30F3\u30B9","\u753B\u8D28\uFF1A\u5747\u8861"],"q.fast":["\uD654\uC9C8: \uBE60\uB974\uAC8C","QUALITY \xB7 FAST","\u753B\u8CEA: \u9AD8\u901F","\u753B\u8D28\uFF1A\u6D41\u7545"],"q.auto":["\uD070 \uBCFC\uD2B8\uB77C \uBE5B \uD6A8\uACFC\uB97C \uC904\uC600\uC2B5\uB2C8\uB2E4 \u2014 \uCEE8\uD2B8\uB864\uC758 CINEMA\uB85C \uB418\uB3CC\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4","A big vault, so the light effects are turned down \u2014 CINEMA in the controls brings them back","\u5927\u304D\u306A\u30DC\u30EB\u30C8\u306A\u306E\u3067\u5149\u306E\u52B9\u679C\u3092\u4E0B\u3052\u307E\u3057\u305F \u2014 \u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306E CINEMA \u3067\u623B\u305B\u307E\u3059","\u4ED3\u5E93\u8F83\u5927\uFF0C\u5DF2\u964D\u4F4E\u5149\u6548 \u2014 \u53EF\u5728\u63A7\u5236\u9762\u677F\u70B9 CINEMA \u6062\u590D"],"find.act":["\uAE30\uB2A5","ACTION","\u6A5F\u80FD","\u529F\u80FD"],"load.notes":["{n}\uAC1C \uB178\uD2B8","{n} notes","\u30CE\u30FC\u30C8 {n} \u4EF6","{n} \u7BC7\u7B14\u8BB0"],"load.graph":["\uB9C1\uD06C \xB7 \uD0DC\uADF8 \uADF8\uB798\uD504 \uAD6C\uC131","Building the link and tag graph","\u30EA\u30F3\u30AF \xB7 \u30BF\u30B0\u306E\u30B0\u30E9\u30D5\u3092\u69CB\u6210","\u6784\u5EFA\u94FE\u63A5\u4E0E\u6807\u7B7E\u56FE\u8C31"],"load.orbit":["\uADA4\uB3C4 \uACC4\uC0B0","Computing orbits","\u8ECC\u9053\u3092\u8A08\u7B97","\u8BA1\u7B97\u8F68\u9053"],"load.nomd":["\uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4","No markdown files found","\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093","\u672A\u627E\u5230 Markdown \u6587\u4EF6"],"load.failed":["\uBCFC\uD2B8 \uD574\uC11D \uC2E4\uD328","Could not parse the vault","\u30DC\u30EB\u30C8\u306E\u89E3\u6790\u306B\u5931\u6557","\u4ED3\u5E93\u89E3\u6790\u5931\u8D25"],"load.empty":["\uC77D\uC744 \uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4","No notes to read","\u8AAD\u3081\u308B\u30CE\u30FC\u30C8\u304C\u3042\u308A\u307E\u305B\u3093","\u6CA1\u6709\u53EF\u8BFB\u7684\u7B14\u8BB0"],"load.render":["\uB80C\uB354 \uC2E4\uD328 \u2014 \uBE48 \uC6B0\uC8FC\uB85C \uBCF5\uADC0","Render failed \u2014 back to empty space","\u30EC\u30F3\u30C0\u30FC\u5931\u6557 \u2014 \u7A7A\u306E\u5B87\u5B99\u306B\u623B\u308A\u307E\u3059","\u6E32\u67D3\u5931\u8D25 \u2014 \u8FD4\u56DE\u7A7A\u767D\u5B87\u5B99"],"gl.lost":["\uADF8\uB798\uD53D \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC783\uC5C8\uC2B5\uB2C8\uB2E4 \u2014 \uBCF5\uAD6C\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911","Lost the graphics context \u2014 waiting for the browser to give it back","\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u5931\u3044\u307E\u3057\u305F \u2014 \u5FA9\u5E30\u3092\u5F85\u3063\u3066\u3044\u307E\u3059","\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931 \u2014 \u6B63\u5728\u7B49\u5F85\u6062\u590D"],"gl.restored":["\uADF8\uB798\uD53D \uCEE8\uD14D\uC2A4\uD2B8 \uBCF5\uAD6C\uB428","Graphics context restored","\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u5FA9\u5E30\u3057\u307E\u3057\u305F","\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u6062\u590D"],"vault.empty":["\uBE48 \uC6B0\uC8FC","EMPTY SPACE","\u7A7A\u306E\u5B87\u5B99","\u7A7A\u767D\u5B87\u5B99"],"cat.rawYear":["{y} \uC6D0\uBB38","{y} SOURCES","{y} \u539F\u6587","{y} \u539F\u59CB\u6750\u6599"],"cat.rawUndated":["\uBB34\uC5F0\uB3C4 \uC6D0\uBB38","UNDATED SOURCES","\u5E74\u4E0D\u660E\u306E\u539F\u6587","\u65E0\u65E5\u671F\u539F\u59CB\u6750\u6599"],"cat.hub":["\uD5C8\uBE0C","HUB","\u30CF\u30D6","\u67A2\u7EBD"],"need.vault":["\uBA3C\uC800 \uBCFC\uD2B8\uB97C \uBD88\uB7EC\uC624\uC138\uC694","Load a vault first","\u307E\u305A\u30DC\u30EB\u30C8\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044","\u8BF7\u5148\u8F7D\u5165\u4ED3\u5E93"],"need.node":["\uBA3C\uC800 \uB178\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694","Select a node first","\u307E\u305A\u30CE\u30FC\u30C9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","\u8BF7\u5148\u9009\u62E9\u8282\u70B9"],ripple:["\uD30C\uBB38 \xB7 {n}","RIPPLE \xB7 {n}","\u6CE2\u7D0B \xB7 {n}","\u6D9F\u6F2A \xB7 {n}"],"poster.fail":["\uD3EC\uC2A4\uD130 \uC800\uC7A5 \uC2E4\uD328","Poster export failed","\u30DD\u30B9\u30BF\u30FC\u306E\u4FDD\u5B58\u306B\u5931\u6557","\u6D77\u62A5\u4FDD\u5B58\u5931\u8D25"],"poster.ok":["\uD3EC\uC2A4\uD130 \uC800\uC7A5 \xB7 {w}\xD7{h}","POSTER SAVED \xB7 {w}\xD7{h}","\u30DD\u30B9\u30BF\u30FC\u4FDD\u5B58 \xB7 {w}\xD7{h}","\u6D77\u62A5\u5DF2\u4FDD\u5B58 \xB7 {w}\xD7{h}"],"audio.no":["\uC624\uB514\uC624\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4","Audio is unavailable","\u30AA\u30FC\u30C7\u30A3\u30AA\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093","\u97F3\u9891\u4E0D\u53EF\u7528"],"audio.on":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC ON","AMBIENT SOUND ON","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 ON","\u73AF\u5883\u97F3\u6548 \u5F00"],"audio.off":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC OFF","AMBIENT SOUND OFF","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 OFF","\u73AF\u5883\u97F3\u6548 \u5173"],"pin.hint":["\uC870\uC808\uAE30 \uC704\uC5D0 \uCEE4\uC11C\uB97C \uC62C\uB9AC\uBA74 \u25C7 \uAC00 \uB098\uD0C0\uB0A9\uB2C8\uB2E4 \u2014 \uB204\uB974\uBA74 \uC704 \uAE30\uBCF8 \uBC14\uC640 \uC774 \uC11C\uB78D \uC0AC\uC774\uB97C \uC624\uAC11\uB2C8\uB2E4.","Hover a control and a \u25C7 appears \u2014 click it to move that control between the bar above and this drawer.","\u3064\u307E\u307F\u306B\u30AB\u30FC\u30BD\u30EB\u3092\u5408\u308F\u305B\u308B\u3068 \u25C7 \u304C\u73FE\u308C\u307E\u3059 \u2014 \u62BC\u3059\u3068\u4E0A\u306E\u30D0\u30FC\u3068\u3053\u306E\u5F15\u304D\u51FA\u3057\u306E\u9593\u3092\u79FB\u52D5\u3057\u307E\u3059\u3002","\u5C06\u5149\u6807\u79FB\u5230\u63A7\u5236\u9879\u4E0A\u4F1A\u51FA\u73B0 \u25C7 \u2014 \u70B9\u51FB\u53EF\u5728\u4E0A\u65B9\u57FA\u672C\u680F\u4E0E\u6B64\u62BD\u5C49\u4E4B\u95F4\u79FB\u52A8\u3002"],"pin.on":["{n} \xB7 \uAE30\uBCF8 \uBC14\uC5D0 \uACE0\uC815","{n} \xB7 pinned to the bar","{n} \xB7 \u30D0\u30FC\u306B\u56FA\u5B9A","{n} \xB7 \u5DF2\u56FA\u5B9A\u5230\u57FA\u672C\u680F"],"pin.off":["{n} \xB7 \uC11C\uB78D\uC73C\uB85C \uB0B4\uB9BC","{n} \xB7 moved to the drawer","{n} \xB7 \u5F15\u304D\u51FA\u3057\u3078","{n} \xB7 \u5DF2\u79FB\u5165\u62BD\u5C49"],"grp.cosmos":["\uC6B4\uB3D9","MOTION","\u904B\u52D5","\u8FD0\u52A8"],"deck.reset":["\uC81C\uC5B4\uD310 \uC704\uCE58\uB97C \uC790\uB3D9\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4","Deck placement handed back to the layout","\u30D1\u30CD\u30EB\u4F4D\u7F6E\u3092\u81EA\u52D5\u306B\u623B\u3057\u307E\u3057\u305F","\u5DF2\u6062\u590D\u9762\u677F\u7684\u81EA\u52A8\u5E03\u5C40"],"ctl.find":["\uCEE8\uD2B8\uB864 \uCC3E\uAE30","FIND A CONTROL","\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u691C\u7D22","\u67E5\u627E\u63A7\u4EF6"],"ctl.none":["\uD574\uB2F9\uD558\uB294 \uCEE8\uD2B8\uB864\uC774 \uC5C6\uC2B5\uB2C8\uB2E4","Nothing by that name","\u8A72\u5F53\u3059\u308B\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u3042\u308A\u307E\u305B\u3093","\u6CA1\u6709\u627E\u5230\u76F8\u5E94\u7684\u63A7\u4EF6"],"grid.on":["\uAE30\uC900 \uD3C9\uBA74 \uCF1C\uC9D0","REFERENCE PLANE ON","\u57FA\u6E96\u5E73\u9762 \u30AA\u30F3","\u57FA\u51C6\u5E73\u9762 \u5F00"],"grid.off":["\uAE30\uC900 \uD3C9\uBA74 \uAEBC\uC9D0","REFERENCE PLANE OFF","\u57FA\u6E96\u5E73\u9762 \u30AA\u30D5","\u57FA\u51C6\u5E73\u9762 \u5173"],"grp.bodies":["\uCC9C\uCCB4","BODIES","\u5929\u4F53","\u5929\u4F53"],"grp.light":["\uBE5B","LIGHT","\u5149","\u5149"],"grp.sound":["\uC18C\uB9AC","SOUND","\u30B5\u30A6\u30F3\u30C9","\u58F0\u97F3"],"vendor.missing":["three.js\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774 \uC571\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC6D0\uACA9\uC5D0\uC11C \uBC1B\uC544\uC624\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4 \u2014 <b>vendor/three.min.js</b> \uC5D0 \uC9C1\uC811 \uB123\uC5B4 \uC8FC\uC138\uC694. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 THIRD-PARTY-NOTICES.md \uB97C \uBCF4\uC138\uC694.","three.js was not found. This app never fetches libraries remotely \u2014 place it at <b>vendor/three.min.js</b>. See THIRD-PARTY-NOTICES.md.","three.js \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30A2\u30D7\u30EA\u306F\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u9060\u9694\u304B\u3089\u53D6\u5F97\u3057\u307E\u305B\u3093 \u2014 <b>vendor/three.min.js</b> \u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A73\u7D30\u306F THIRD-PARTY-NOTICES.md \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002","\u672A\u627E\u5230 three.js\u3002\u672C\u5E94\u7528\u4E0D\u4F1A\u8FDC\u7A0B\u83B7\u53D6\u5E93\u6587\u4EF6 \u2014 \u8BF7\u5C06\u5176\u653E\u5728 <b>vendor/three.min.js</b>\u3002\u8BE6\u60C5\u8BF7\u89C1 THIRD-PARTY-NOTICES.md\u3002"],"cap.label":["\uCD5C\uB300 \uB178\uB4DC","MAX NODES","\u6700\u5927\u30CE\u30FC\u30C9\u6570","\u6700\u5927\u8282\u70B9\u6570"],"cap.off":["\uC81C\uD55C \uC5C6\uC74C","NO LIMIT","\u5236\u9650\u306A\u3057","\u65E0\u9650\u5236"],"cap.hit":["\uB178\uD2B8 {total}\uAC1C \uC911 {n}\uAC1C\uB9CC \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4 \xB7 \uCD5C\uB300 \uB178\uB4DC \uC124\uC815\uC5D0\uC11C \uC870\uC815\uD558\uC138\uC694","Loaded {n} of {total} notes \xB7 raise the MAX NODES limit to see more","{total} \u4EF6\u4E2D {n} \u4EF6\u306E\u307F\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F \xB7 \u6700\u5927\u30CE\u30FC\u30C9\u6570\u306E\u8A2D\u5B9A\u3067\u5909\u66F4\u3067\u304D\u307E\u3059","\u4EC5\u8F7D\u5165 {total} \u7BC7\u4E2D\u7684 {n} \u7BC7 \xB7 \u53EF\u5728\u6700\u5927\u8282\u70B9\u6570\u8BBE\u7F6E\u4E2D\u8C03\u6574"],"excl.some":["\uC81C\uC678 \uC124\uC815\uC73C\uB85C {n}\uAC1C \uC81C\uC678\uB428","{n} excluded by your filters","\u9664\u5916\u8A2D\u5B9A\u306B\u3088\u308A {n} \u4EF6\u3092\u9664\u5916","\u6839\u636E\u6392\u9664\u8BBE\u7F6E\u5DF2\u6392\u9664 {n} \u9879"],"excl.all":["\uC81C\uC678 \uC124\uC815\uC774 \uBAA8\uB4E0 \uB178\uD2B8\uB97C \uAC78\uB7EC\uB0C8\uC2B5\uB2C8\uB2E4","Your exclusion filters removed every note","\u9664\u5916\u8A2D\u5B9A\u306B\u3088\u308A\u3059\u3079\u3066\u306E\u30CE\u30FC\u30C8\u304C\u9664\u304B\u308C\u307E\u3057\u305F","\u6392\u9664\u8BBE\u7F6E\u8FC7\u6EE4\u6389\u4E86\u5168\u90E8\u7B14\u8BB0"],"intro.lede":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131\uC785\uB2C8\uB2E4. \uC774\uAC83\uB9CC \uC54C\uBA74 \uCDA9\uBD84\uD788 \uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","Folders are stars, notes are planets. This much is enough to fly.","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F\u3067\u3059\u3002\u3053\u308C\u3060\u3051\u3067\u5341\u5206\u306B\u98DB\u3079\u307E\u3059\u3002","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u662F\u884C\u661F\u3002\u638C\u63E1\u8FD9\u4E9B\u5373\u53EF\u8D77\u98DE\u3002"],"intro.k5":["\uD074\uB9AD","CLICK","\u30AF\u30EA\u30C3\u30AF","\u5355\u51FB"],"intro.d5":["\uB178\uD2B8 \uC77D\uAE30 \u2014 \uC18D\uC131\xB7\uB9C1\uD06C\xB7\uBC1C\uCDCC\uAC00 \uC624\uB978\uCABD\uC5D0 \uB739\uB2C8\uB2E4","Read a note \u2014 its properties, links and excerpt appear on the right","\u30CE\u30FC\u30C8\u3092\u8AAD\u3080 \u2014 \u30D7\u30ED\u30D1\u30C6\u30A3\u30FB\u30EA\u30F3\u30AF\u30FB\u629C\u7C8B\u304C\u53F3\u306B\u51FA\u307E\u3059","\u9605\u8BFB\u7B14\u8BB0 \u2014 \u5C5E\u6027\u3001\u94FE\u63A5\u548C\u6458\u5F55\u663E\u793A\u5728\u53F3\u4FA7"],"intro.k3":["M \xB7 \uB354\uBE14\uD074\uB9AD","M \xB7 DBL-CLICK","M \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF","M \xB7 \u53CC\u51FB"],"intro.d6":["\uBCFC\uD2B8\uAC00 \uC0DD\uACA8\uB09C \uC21C\uC11C\uB300\uB85C \uB2E4\uC2DC \uC7AC\uC0DD\uD558\uAE30","Replay the vault forming, in the order you wrote it","\u30DC\u30EB\u30C8\u304C\u3067\u304D\u305F\u9806\u306B\u518D\u751F\u3059\u308B","\u6309\u5199\u4F5C\u987A\u5E8F\u91CD\u653E\u4ED3\u5E93\u7684\u5F62\u6210"],"intro.gen":["\u25CC \uC81C\uB124\uC2DC\uC2A4 \uBCF4\uAE30","\u25CC WATCH GENESIS","\u25CC \u30B8\u30A7\u30CD\u30B7\u30B9\u3092\u898B\u308B","\u25CC \u89C2\u770B\u521B\u4E16"],"intro.k1":["\uB04C\uAE30 \xB7 \uD720","DRAG \xB7 WHEEL","\u30C9\u30E9\u30C3\u30B0 \xB7 \u30DB\u30A4\u30FC\u30EB","\u62D6\u52A8 \xB7 \u6EDA\u8F6E"],"intro.d1":["\uB458\uB7EC\uBCF4\uAE30 \u2014 \uADA4\uB3C4 \uD68C\uC804\uACFC \uD655\uB300","Look around \u2014 orbit and zoom","\u898B\u56DE\u3059 \u2014 \u8ECC\u9053\u56DE\u8EE2\u3068\u30BA\u30FC\u30E0","\u73AF\u89C6 \u2014 \u8F68\u9053\u65CB\u8F6C\u4E0E\u7F29\u653E"],"intro.d2":["\uB178\uD2B8 \uC774\uB984\uC73C\uB85C \uCC3E\uC544\uAC00\uAE30","Find a note by name","\u30CE\u30FC\u30C8\u540D\u3067\u63A2\u3057\u3066\u79FB\u52D5","\u6309\u7B14\u8BB0\u540D\u79F0\u67E5\u627E"],"intro.d3":["\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB9C8\uC778\uB4DC\uB9F5\uC73C\uB85C \uD3BC\uCE58\uAE30","Open one note's neighbourhood as a mind map","\u30CE\u30FC\u30C8\u4E00\u3064\u306E\u96A3\u4EBA\u3092\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7\u3067\u958B\u304F","\u628A\u4E00\u7BC7\u7B14\u8BB0\u7684\u90BB\u5C45\u5C55\u5F00\u4E3A\u601D\u7EF4\u5BFC\u56FE"],"intro.d4":["\uACE0\uB978 \uB178\uD2B8\uB97C \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30","Open the selected note in Obsidian","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u3092Obsidian\u3067\u958B\u304F","\u5728 Obsidian \u4E2D\u6253\u5F00\u6240\u9009\u7B14\u8BB0"],"intro.foot":["\uB098\uBA38\uC9C0\uB294 \uC67C\uCABD \uC544\uB798 SHORTCUTS \uBAA9\uB85D\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uC81C\uBAA9\uC904\uC758 [ ? ] \uB97C \uB204\uB974\uBA74 \uD558\uB098\uD558\uB098 \uC124\uBA85\uC774 \uBD99\uC740 \uC804\uCCB4 \uC548\uB0B4\uAC00 \uC5F4\uB9BD\uB2C8\uB2E4.","The rest are in the SHORTCUTS list, lower left. The [ ? ] in its title bar opens the full guide, with a line on each of them.","\u6B8B\u308A\u306F\u5DE6\u4E0B\u306E SHORTCUTS \u4E00\u89A7\u306B\u3042\u308A\u307E\u3059\u3002\u898B\u51FA\u3057\u306E [ ? ] \u3092\u62BC\u3059\u3068\u3001\u4E00\u3064\u305A\u3064\u8AAC\u660E\u306E\u3064\u3044\u305F\u5168\u4F53\u30AC\u30A4\u30C9\u304C\u958B\u304D\u307E\u3059\u3002","\u5176\u4F59\u5185\u5BB9\u89C1\u5DE6\u4E0B\u89D2 SHORTCUTS \u5217\u8868\u3002\u70B9\u51FB\u6807\u9898\u680F\u7684 [ ? ] \u4F1A\u6253\u5F00\u9010\u6761\u8BF4\u660E\u7684\u5B8C\u6574\u6307\u5357\u3002"],"intro.go":["\u25B6 \uB458\uB7EC\uBCF4\uAE30","\u25B6 START LOOKING","\u25B6 \u898B\u3066\u307E\u308F\u308B","\u25B6 \u5F00\u59CB\u6D4F\u89C8"],"intro.reopen":["\uCCAB \uBE44\uD589 \uC548\uB0B4 \uB2E4\uC2DC \uBCF4\uAE30","Show the first-flight guide again","\u306F\u3058\u3081\u3066\u306E\u98DB\u884C\u306E\u6848\u5185\u3092\u518D\u8868\u793A","\u91CD\u65B0\u663E\u793A\u9996\u6B21\u98DE\u884C\u6307\u5F15"],"guide.open":["\uC804\uCCB4 \uC548\uB0B4 \uC5F4\uAE30","Open the guide","\u30AC\u30A4\u30C9\u3092\u958B\u304F","\u6253\u5F00\u6307\u5357"],"guide.lede":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131, \uC778\uC6A9\uB41C \uCD9C\uCC98\uB294 \uC704\uC131\uC785\uB2C8\uB2E4. \uC544\uB798\uAC00 \uC774 \uD654\uBA74\uC774 \uD560 \uC218 \uC788\uB294 \uC77C \uC804\uBD80\uC785\uB2C8\uB2E4.","Folders are stars, notes are planets, cited sources are moons. Below is everything this screen can do.","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F\u3001\u5F15\u7528\u3055\u308C\u305F\u51FA\u5178\u306F\u885B\u661F\u3067\u3059\u3002\u4EE5\u4E0B\u304C\u3053\u306E\u753B\u9762\u306B\u3067\u304D\u308B\u3053\u3068\u306E\u3059\u3079\u3066\u3067\u3059\u3002","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u662F\u884C\u661F\uFF0C\u88AB\u5F15\u7528\u7684\u6765\u6E90\u662F\u536B\u661F\u3002\u4EE5\u4E0B\u662F\u8FD9\u4E2A\u753B\u9762\u80FD\u505A\u7684\u5168\u90E8\u4E8B\u60C5\u3002"],"guide.s.move":["\uC6C0\uC9C1\uC774\uAE30","MOVING","\u79FB\u52D5","\u79FB\u52A8"],"guide.s.find":["\uCC3E\uAE30","FINDING","\u63A2\u3059","\u67E5\u627E"],"guide.s.read":["\uADF8\uB9BC \uC77D\uAE30","READING THE PICTURE","\u56F3\u3092\u8AAD\u3080","\u8BFB\u56FE"],"guide.s.mode":["\uBAA8\uB4DC","MODES","\u30E2\u30FC\u30C9","\u6A21\u5F0F"],"guide.s.rest":["\uB098\uBA38\uC9C0","THE REST","\u305D\u306E\u4ED6","\u5176\u4ED6"],"guide.look":["\uBCFC\uD2B8 \uD55C\uAC00\uC6B4\uB370\uB97C \uCD95\uC73C\uB85C \uC2DC\uC810\uC774 \uB3CC\uACE0, \uD720\uC740 \uADF8 \uCD95\uC744 \uD5A5\uD574 \uB2E4\uAC00\uAC11\uB2C8\uB2E4.","The view turns about the middle of the vault, and the wheel moves in toward it.","\u8996\u70B9\u306F\u30DC\u30EB\u30C8\u306E\u4E2D\u5FC3\u3092\u8EF8\u306B\u56DE\u308A\u3001\u30DB\u30A4\u30FC\u30EB\u306F\u305D\u306E\u8EF8\u3078\u5BC4\u3063\u3066\u3044\u304D\u307E\u3059\u3002","\u89C6\u89D2\u7ED5\u4ED3\u5E93\u4E2D\u5FC3\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u671D\u90A3\u4E2A\u4E2D\u5FC3\u63A8\u8FD1\u3002"],"guide.pan":["\uADF8 \uCD95 \uC790\uCCB4\uB97C \uC62E\uAE41\uB2C8\uB2E4. \uD56D\uC131 \uD558\uB098\uB97C \uD654\uBA74 \uD55C\uAC00\uC6B4\uB370\uC5D0 \uB450\uACE0 \uC2F6\uC744 \uB54C.","Moves that centre. For putting one star in the middle of the frame.","\u305D\u306E\u4E2D\u5FC3\u305D\u306E\u3082\u306E\u3092\u52D5\u304B\u3057\u307E\u3059\u3002\u6052\u661F\u3072\u3068\u3064\u3092\u753B\u9762\u4E2D\u592E\u306B\u7F6E\u304D\u305F\u3044\u3068\u304D\u306B\u3002","\u79FB\u52A8\u90A3\u4E2A\u4E2D\u5FC3\u3002\u60F3\u628A\u67D0\u9897\u6052\u661F\u6446\u5728\u753B\u9762\u6B63\u4E2D\u65F6\u7528\u5B83\u3002"],"guide.drag":["\uCC9C\uCCB4 \uD558\uB098\uB97C \uB04C\uC5B4\uB0C5\uB2C8\uB2E4. \uB193\uC73C\uBA74 \uC81C\uC790\uB9AC\uB85C \uB3CC\uC544\uAC00\uACE0, \uB3CC\uC544\uAC00\uB294 \uD798\uC740 NODE GRAVITY\uAC00 \uC815\uD569\uB2C8\uB2E4.","Pulls one body out of place. It springs back when you let go, and NODE GRAVITY decides how hard.","\u5929\u4F53\u3092\u4E00\u3064\u5F15\u304D\u51FA\u3057\u307E\u3059\u3002\u96E2\u3059\u3068\u5143\u306B\u623B\u308A\u3001\u305D\u306E\u5F37\u3055\u306F NODE GRAVITY \u304C\u6C7A\u3081\u307E\u3059\u3002","\u628A\u67D0\u4E2A\u5929\u4F53\u62C9\u51FA\u539F\u4F4D\u3002\u677E\u624B\u540E\u4F1A\u5F39\u56DE\uFF0C\u56DE\u5F39\u7684\u529B\u5EA6\u7531 NODE GRAVITY \u51B3\u5B9A\u3002"],"guide.reset":["\uC2DC\uC810\uC744 \uCC98\uC74C \uC790\uB9AC\uB85C \uB418\uB3CC\uB9BD\uB2C8\uB2E4. \uC120\uD0DD\uACFC \uBAA8\uB4DC\uB294 \uAC74\uB4DC\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Puts the camera back where it started. Leaves the selection and the modes alone.","\u8996\u70B9\u3092\u6700\u521D\u306E\u4F4D\u7F6E\u306B\u623B\u3057\u307E\u3059\u3002\u9078\u629E\u3068\u30E2\u30FC\u30C9\u306B\u306F\u89E6\u308C\u307E\u305B\u3093\u3002","\u628A\u89C6\u89D2\u6062\u590D\u5230\u521D\u59CB\u4F4D\u7F6E\u3002\u4E0D\u6539\u52A8\u9009\u62E9\u4E0E\u6A21\u5F0F\u3002"],"guide.search":["\uB178\uD2B8\uC640 \uC870\uC808\uAE30\uC640 \uB3D9\uC791\uC774 \uD55C \uC0C1\uC790\uC5D0 \uB4E4\uC5B4\uC635\uB2C8\uB2E4. \uB178\uD2B8\uB294 \uC774\uB984\xB7\uACBD\uB85C\xB7\uD0DC\uADF8\xB7\uC18D\uC131 \uC5B4\uB290 \uCABD\uC73C\uB85C\uB3C4 \uAC78\uB9BD\uB2C8\uB2E4.","Notes, controls and actions in one box. A note matches on its name, its path, its tags or its properties.","\u30CE\u30FC\u30C8\u3082\u3064\u307E\u307F\u3082\u52D5\u4F5C\u3082\u4E00\u3064\u306E\u7BB1\u306B\u5165\u308A\u307E\u3059\u3002\u30CE\u30FC\u30C8\u306F\u540D\u524D\u30FB\u30D1\u30B9\u30FB\u30BF\u30B0\u30FB\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u3069\u308C\u3067\u3082\u5F15\u3063\u304B\u304B\u308A\u307E\u3059\u3002","\u7B14\u8BB0\u3001\u63A7\u4EF6\u4E0E\u52A8\u4F5C\u90FD\u5728\u540C\u4E00\u4E2A\u6846\u91CC\u3002\u7B14\u8BB0\u53EF\u6309\u540D\u79F0\u3001\u8DEF\u5F84\u3001\u6807\u7B7E\u6216\u5C5E\u6027\u547D\u4E2D\u3002"],"guide.note":["\uACE0\uB978 \uB178\uD2B8\uB97C \uC624\uB7EC\uB9AC \uC606\uC5D0 \uC5FD\uB2C8\uB2E4. \uC6B0\uC8FC\uB294 \uADF8 \uC790\uB9AC\uC5D0 \uADF8\uB300\uB85C \uB0A8\uC2B5\uB2C8\uB2E4.","Opens the selected note beside the orrery. The cosmos stays exactly where it was.","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u3092\u30AA\u30FC\u30E9\u30EA\u30FC\u306E\u96A3\u306B\u958B\u304D\u307E\u3059\u3002\u5B87\u5B99\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002","\u5728\u661F\u4EEA\u65C1\u8FB9\u6253\u5F00\u6240\u9009\u7B14\u8BB0\uFF0C\u661F\u56FE\u4ECD\u7559\u5728\u539F\u5904\u3002"],"guide.broken":["\uC67C\uCABD \uC704 BROKEN \uC22B\uC790\uB97C \uB204\uB974\uBA74 \uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uB97C \uAC00\uC9C4 \uB178\uD2B8\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4. \uBB34\uC5C7\uC744 \uD5A5\uD588\uB294\uC9C0\uB294 \uC778\uC2A4\uD399\uD130\uAC00 \uC774\uB984\uC73C\uB85C \uC54C\uB824\uC90D\uB2C8\uB2E4.","Click the BROKEN count, upper left, to keep only the notes carrying dead links. The inspector names what each one was reaching for.","\u5DE6\u4E0A\u306E BROKEN \u306E\u6570\u3092\u62BC\u3059\u3068\u3001\u5207\u308C\u305F\u30EA\u30F3\u30AF\u3092\u6301\u3064\u30CE\u30FC\u30C8\u3060\u3051\u304C\u6B8B\u308A\u307E\u3059\u3002\u4F55\u3092\u6307\u3057\u3066\u3044\u305F\u304B\u306F\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u304C\u540D\u524D\u3067\u793A\u3057\u307E\u3059\u3002","\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684 BROKEN \u6570\u5B57\uFF0C\u53EA\u4FDD\u7559\u5E26\u6709\u5931\u6548\u94FE\u63A5\u7684\u7B14\u8BB0\u3002\u6307\u5411\u7684\u76EE\u6807\u7531\u68C0\u67E5\u5668\u6309\u540D\u79F0\u5217\u51FA\u3002"],"guide.route":["\uC778\uC2A4\uD399\uD130\uC758 \uBC84\uD2BC\uC785\uB2C8\uB2E4. \uD55C\uCABD\uC5D0\uC11C \uB204\uB974\uACE0 \uB2E4\uB978 \uCABD\uC744 \uACE0\uB974\uBA74 \uB450 \uB178\uD2B8 \uC0AC\uC774 \uCD5C\uB2E8 \uACBD\uB85C\uAC00 \uCF1C\uC9C0\uACE0, \uB098\uBA38\uC9C0 \uBCFC\uD2B8\uB294 \uD754\uC801\uC73C\uB85C \uB0B4\uB824\uAC11\uB2C8\uB2E4.","The inspector button. Press it on one note, pick the other, and the shortest way between them lights up with the rest of the vault held down to a trace.","\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u306E\u30DC\u30BF\u30F3\u3067\u3059\u3002\u7247\u65B9\u3067\u62BC\u3057\u3066\u3082\u3046\u7247\u65B9\u3092\u9078\u3076\u3068\u3001\u4E8C\u3064\u306E\u30CE\u30FC\u30C8\u306E\u6700\u77ED\u7D4C\u8DEF\u304C\u706F\u308A\u3001\u6B8B\u308A\u306F\u75D5\u8DE1\u307E\u3067\u843D\u3061\u307E\u3059\u3002","\u68C0\u67E5\u5668\u4E0A\u7684\u6309\u94AE\u3002\u5728\u4E00\u7AEF\u6309\u4E0B\uFF0C\u518D\u9009\u53E6\u4E00\u7AEF\uFF0C\u4E24\u7BC7\u7B14\u8BB0\u4E4B\u95F4\u7684\u6700\u77ED\u8DEF\u5F84\u4F1A\u4EAE\u8D77\uFF0C\u5176\u4F59\u90E8\u5206\u5219\u538B\u6697\u6210\u75D5\u8FF9\u3002"],"guide.layer":["ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF \uB97C \uB3D5\uB2C8\uB2E4. BRIDGE\uB294 \uC790\uAE30 \uD3F4\uB354\uB97C \uBC97\uC5B4\uB098\uB294 \uB9C1\uD06C\uB9CC \uB0A8\uAE30\uB294 \uCE35\uC774\uACE0, \uB0A8\uB294 \uAC83\uC774 \uACE7 \uC2DC\uC2A4\uD15C \uC0AC\uC774\uC758 \uC655\uB798\uC785\uB2C8\uB2E4.","Cycles ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF. BRIDGE keeps only the links that leave their own folder, and what is left is the traffic between systems.","ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF \u3092\u9806\u306B\u5207\u308A\u66FF\u3048\u307E\u3059\u3002BRIDGE \u306F\u81EA\u5206\u306E\u30D5\u30A9\u30EB\u30C0\u3092\u51FA\u308B\u30EA\u30F3\u30AF\u3060\u3051\u3092\u6B8B\u3059\u5C64\u3067\u3001\u6B8B\u308B\u3082\u306E\u304C\u30B7\u30B9\u30C6\u30E0\u9593\u306E\u5F80\u6765\u3067\u3059\u3002","\u4F9D\u6B21\u5207\u6362 ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF\u3002BRIDGE \u53EA\u4FDD\u7559\u8DE8\u51FA\u81EA\u8EAB\u6587\u4EF6\u5939\u7684\u94FE\u63A5\uFF0C\u5269\u4E0B\u7684\u6B63\u662F\u5404\u661F\u7CFB\u4E4B\u95F4\u7684\u5F80\u6765\u3002"],"guide.grid":["\uCC9C\uCCB4\uB4E4\uC774 \uB193\uC778 \uBC14\uB85C \uADF8 \uD3C9\uBA74\uC5D0 \uAE30\uC900\uBA74\uC744 \uAE5D\uB2C8\uB2E4. \uBB34\uC5C7\uC774 \uC704\uC5D0 \uC788\uACE0 \uBB34\uC5C7\uC774 \uC544\uB798\uC778\uC9C0 \uC77D\uC73C\uB824\uBA74 \uBC14\uB2E5\uC774 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.","Lays a reference plane on the plane the bodies are arranged in. Reading what is above and what is below takes a floor.","\u5929\u4F53\u304C\u4E26\u3093\u3067\u3044\u308B\u305D\u306E\u5E73\u9762\u306B\u57FA\u6E96\u9762\u3092\u6577\u304D\u307E\u3059\u3002\u4F55\u304C\u4E0A\u3067\u4F55\u304C\u4E0B\u304B\u3092\u8AAD\u3080\u306B\u306F\u5E8A\u304C\u8981\u308A\u307E\u3059\u3002","\u5728\u5929\u4F53\u6240\u5728\u7684\u90A3\u4E2A\u5E73\u9762\u4E0A\u94FA\u4E00\u5C42\u57FA\u51C6\u9762\u3002\u8981\u8BFB\u51FA\u9AD8\u4F4E\uFF0C\u5148\u5F97\u6709\u4E2A\u5730\u9762\u3002"],"guide.ripple":["\uACE0\uB978 \uB178\uD2B8\uC5D0\uC11C \uB9C1\uD06C\uB97C \uB530\uB77C \uD30C\uBB38\uC774 \uBC88\uC9D1\uB2C8\uB2E4. \uBA87 \uD649 \uB9CC\uC5D0 \uC5B4\uB514\uAE4C\uC9C0 \uB2FF\uB294\uC9C0\uAC00 \uBCF4\uC785\uB2C8\uB2E4.","A wave runs out from the selected note along its links, so you can see how far it reaches and in how many hops.","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u304B\u3089\u30EA\u30F3\u30AF\u3092\u4F1D\u3063\u3066\u6CE2\u7D0B\u304C\u5E83\u304C\u308A\u307E\u3059\u3002\u4F55\u30DB\u30C3\u30D7\u3067\u3069\u3053\u307E\u3067\u5C4A\u304F\u304B\u304C\u898B\u3048\u307E\u3059\u3002","\u6D9F\u6F2A\u4ECE\u6240\u9009\u7B14\u8BB0\u6CBF\u7740\u94FE\u63A5\u6269\u6563\uFF0C\u80FD\u770B\u51FA\u5B83\u7ECF\u8FC7\u51E0\u8DF3\u3001\u80FD\u4F20\u5230\u591A\u8FDC\u3002"],"guide.mind":["\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB450 \uD649\uAE4C\uC9C0 \uC81C\uC790\uB9AC\uC5D0 \uD3BC\uCE69\uB2C8\uB2E4. \uC6B0\uC8FC\uAC00 \uADF8 \uB178\uD2B8\uB97C \uC911\uC2EC\uC73C\uB85C \uB2E4\uC2DC \uBC30\uC5F4\uB429\uB2C8\uB2E4.","One note and its neighbourhood, two hops out, laid out in place \u2014 the cosmos rearranges itself around it.","\u30CE\u30FC\u30C8\u4E00\u3064\u306E\u96A3\u4EBA\u3092\u4E8C\u30DB\u30C3\u30D7\u307E\u3067\u305D\u306E\u5834\u306B\u5E83\u3052\u307E\u3059\u3002\u5B87\u5B99\u304C\u305D\u306E\u30CE\u30FC\u30C8\u3092\u4E2D\u5FC3\u306B\u4E26\u3073\u76F4\u3057\u307E\u3059\u3002","\u628A\u4E00\u7BC7\u7B14\u8BB0\u7684\u90BB\u5C45\u5C55\u5F00\u4E24\u8DF3\uFF0C\u5C31\u5730\u94FA\u5F00\u2014\u2014\u661F\u56FE\u4F1A\u56F4\u7ED5\u5B83\u91CD\u65B0\u6392\u5217\u3002"],"guide.gen":["\uBCFC\uD2B8\uB97C \uBB34(\u7121)\uAE4C\uC9C0 \uB418\uAC10\uC558\uB2E4\uAC00 \uC624\uB298\uAE4C\uC9C0 \uB2E4\uC2DC \uB9CC\uB4ED\uB2C8\uB2E4. \uC644\uC131\uB41C \uADF8\uB798\uD504\uC758 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC544\uB2C8\uB77C \uB178\uD2B8\uAC00 \uC2E4\uC81C\uB85C \uC4F0\uC778 \uC21C\uC11C\uC774\uACE0, \uB208\uAE08\uC744 \uC9C1\uC811 \uB04C \uC218 \uC788\uC2B5\uB2C8\uB2E4.","Rewinds the vault to nothing and builds it forward to today. Not an animation of the finished graph \u2014 the order the notes were actually written, with a scrubber on it.","\u30DC\u30EB\u30C8\u3092\u7121\u307E\u3067\u5DFB\u304D\u623B\u3057\u3001\u4ECA\u65E5\u307E\u3067\u4F5C\u308A\u76F4\u3057\u307E\u3059\u3002\u5B8C\u6210\u3057\u305F\u30B0\u30E9\u30D5\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u306A\u304F\u3001\u30CE\u30FC\u30C8\u304C\u5B9F\u969B\u306B\u66F8\u304B\u308C\u305F\u9806\u5E8F\u3067\u3001\u76EE\u76DB\u308A\u3092\u81EA\u5206\u3067\u52D5\u304B\u305B\u307E\u3059\u3002","\u628A\u4ED3\u5E93\u5012\u56DE\u865A\u65E0\uFF0C\u518D\u4E00\u8DEF\u5EFA\u5230\u4ECA\u5929\u3002\u8FD9\u4E0D\u662F\u6210\u54C1\u56FE\u7684\u52A8\u753B\uFF0C\u800C\u662F\u7B14\u8BB0\u771F\u6B63\u88AB\u5199\u4E0B\u7684\u987A\u5E8F\uFF0C\u5E76\u4E14\u53EF\u4EE5\u624B\u52A8\u62D6\u52A8\u8FDB\u5EA6\u3002"],"guide.poster":["HUD \uC5C6\uB294 \uACE0\uD574\uC0C1\uB3C4 PNG \uD55C \uC7A5. \uD654\uBA74\uC758 \uBCF5\uC81C\uAC00 \uC544\uB2C8\uB77C \uD654\uBA74\uBCF4\uB2E4 \uD06C\uAC8C \uADF8\uB824\uC9D1\uB2C8\uB2E4.","One high-resolution PNG of the cosmos with no HUD on it \u2014 drawn larger than the screen, not copied from it.","HUD \u306E\u306A\u3044\u9AD8\u89E3\u50CF\u5EA6 PNG \u3092\u4E00\u679A\u3002\u753B\u9762\u306E\u8907\u88FD\u3067\u306F\u306A\u304F\u3001\u753B\u9762\u3088\u308A\u5927\u304D\u304F\u63CF\u304B\u308C\u307E\u3059\u3002","\u4E00\u5F20\u4E0D\u542B HUD \u7684\u9AD8\u5206\u8FA8\u7387 PNG\u2014\u2014\u6BD4\u5C4F\u5E55\u66F4\u5927\uFF0C\u800C\u4E0D\u662F\u5C4F\u5E55\u7684\u590D\u5236\u3002"],"guide.sound":["\uB178\uD2B8\uB9C8\uB2E4 \uC790\uAE30 \uC74C\uB192\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uBB3C\uC5B4\uBCF4\uAE30 \uC804\uC5D0\uB294 \uC6B8\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Every note has a pitch of its own. Silent until you ask for it.","\u30CE\u30FC\u30C8\u306B\u306F\u305D\u308C\u305E\u308C\u306E\u97F3\u9AD8\u304C\u3042\u308A\u307E\u3059\u3002\u6C42\u3081\u308B\u307E\u3067\u306F\u9CF4\u308A\u307E\u305B\u3093\u3002","\u6BCF\u7BC7\u7B14\u8BB0\u90FD\u6709\u81EA\u5DF1\u7684\u97F3\u9AD8\u3002\u4F60\u4E0D\u5F00\u53E3\uFF0C\u5B83\u5C31\u4E0D\u54CD\u3002"],"guide.hud":["\uD328\uB110\uC744 \uC804\uBD80 \uAC10\uCDA5\uB2C8\uB2E4. \uC6B0\uC8FC\uB294 \uB4A4\uC5D0\uC11C \uADF8\uB300\uB85C \uB3D5\uB2C8\uB2E4.","Hides every panel. The cosmos keeps turning behind it.","\u30D1\u30CD\u30EB\u3092\u3059\u3079\u3066\u96A0\u3057\u307E\u3059\u3002\u5B87\u5B99\u306F\u305D\u306E\u307E\u307E\u56DE\u308A\u7D9A\u3051\u307E\u3059\u3002","\u9690\u85CF\u5168\u90E8\u9762\u677F\u3002\u661F\u56FE\u7167\u65E7\u8FD0\u8F6C\u3002"],"guide.help":["\uC774 \uC548\uB0B4\uC785\uB2C8\uB2E4. \uC67C\uCABD \uC544\uB798 SHORTCUTS \uC81C\uBAA9\uC904\uC758 [ ? ] \uB3C4 \uAC19\uC740 \uAC83\uC744 \uC5FD\uB2C8\uB2E4.","This card. So does the [ ? ] in the SHORTCUTS title bar, lower left.","\u3053\u306E\u6848\u5185\u3067\u3059\u3002\u5DE6\u4E0B SHORTCUTS \u306E\u898B\u51FA\u3057\u306B\u3042\u308B [ ? ] \u3082\u540C\u3058\u3082\u306E\u3092\u958B\u304D\u307E\u3059\u3002","\u5C31\u662F\u8FD9\u5F20\u5361\u7247\u3002\u5DE6\u4E0B\u89D2 SHORTCUTS \u6807\u9898\u680F\u91CC\u7684 [ ? ] \u6253\u5F00\u7684\u4E5F\u662F\u5B83\u3002"],"guide.foot":["\uC870\uC808\uAE30\uB294 \uC624\uB978\uCABD \uC704 \uC11C\uB78D \uC548\uC5D0 \uC788\uACE0, \uAC80\uC0C9 \uC0C1\uC790\uC5D0\uC11C \uC774\uB984\uC73C\uB85C \uBC14\uB85C \uBD80\uB97C \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \xB7 ","Every control lives in the drawer, upper right, and the search box will call one up by name. \xB7 ","\u3064\u307E\u307F\u306F\u53F3\u4E0A\u306E\u5F15\u304D\u51FA\u3057\u306E\u4E2D\u306B\u3042\u308A\u3001\u691C\u7D22\u30DC\u30C3\u30AF\u30B9\u304B\u3089\u540D\u524D\u3067\u547C\u3073\u51FA\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \xB7 ","\u6240\u6709\u63A7\u4EF6\u90FD\u5728\u53F3\u4E0A\u89D2\u7684\u62BD\u5C49\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u641C\u7D22\u6846\u4E2D\u6309\u540D\u79F0\u76F4\u63A5\u8C03\u51FA\u3002 \xB7 "],"kd.spd":["\uADA4\uB3C4 \uC2DC\uACC4\uC758 \uC18D\uB3C4. 0\uC774\uBA74 \uD558\uB298 \uC804\uCCB4\uAC00 \uBA48\uCDA5\uB2C8\uB2E4 \u2014 \uD61C\uC131\uB3C4, \uBCC4\uC758 \uD45C\uBA74\uB3C4.","The orbital clock. At zero the whole sky stops, the comet and the star's own face with it.","\u8ECC\u9053\u6642\u8A08\u306E\u901F\u3055\u30020 \u3067\u7A7A\u5168\u4F53\u304C\u6B62\u307E\u308A\u307E\u3059 \u2014 \u5F57\u661F\u3082\u661F\u306E\u8868\u9762\u3082\u3002","\u8F68\u9053\u65F6\u949F\u7684\u5FEB\u6162\u3002\u5F52\u96F6\u65F6\u6574\u7247\u5929\u7A7A\u9759\u6B62\u2014\u2014\u5F57\u661F\u4E0E\u6052\u661F\u8868\u9762\u4E5F\u4E00\u6837\u3002"],"kd.bri":["\uBAA8\uB4E0 \uCC9C\uCCB4\uC758 \uD6C4\uAD11\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4. \uC885\uB958\uBCC4 \uBC30\uBD84\uC740 BODIES \uCABD\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.","Raises every body's halo at once. The balance between the kinds is under BODIES.","\u3059\u3079\u3066\u306E\u5929\u4F53\u306E\u5149\u8F2A\u3092\u4E00\u5EA6\u306B\u4E0A\u3052\u307E\u3059\u3002\u7A2E\u985E\u3054\u3068\u306E\u914D\u5206\u306F BODIES \u306B\u3042\u308A\u307E\u3059\u3002","\u4E00\u6B21\u62AC\u5347\u6240\u6709\u5929\u4F53\u7684\u5149\u6655\u3002\u5404\u7C7B\u4E4B\u95F4\u7684\u914D\u6BD4\u5728 BODIES \u91CC\u3002"],"kd.lnk":["\uB9C1\uD06C\uAC00 \uB0B4\uB294 \uBE5B\uC758 \uC591. \uAD75\uAE30\uB294 LINE WIDTH\uAC00 \uB530\uB85C \uB9E1\uC2B5\uB2C8\uB2E4.","How much light a link gives off. How thick it is drawn is LINE WIDTH's job.","\u30EA\u30F3\u30AF\u304C\u653E\u3064\u5149\u306E\u91CF\u3002\u592A\u3055\u306F LINE WIDTH \u304C\u5225\u306B\u53D7\u3051\u6301\u3061\u307E\u3059\u3002","\u94FE\u63A5\u53D1\u51FA\u7684\u5149\u91CF\u3002\u7C97\u7EC6\u7531 LINE WIDTH \u5355\u72EC\u8D1F\u8D23\u3002"],"kd.gap":["\uD56D\uC131\uACC4 \uC0AC\uC774\uC758 \uAC04\uACA9. \uBCFC\uD2B8\uAC00 \uB113\uC5B4\uC9C8 \uBFD0, \uBB34\uC5C7\uC774 \uC5B4\uB514\uC5D0 \uC788\uB294\uC9C0\uB294 \uADF8\uB300\uB85C\uC785\uB2C8\uB2E4.","The room between systems. The vault opens out; what sits where does not change.","\u6052\u661F\u7CFB\u306E\u3042\u3044\u3060\u306E\u9593\u9694\u3002\u30DC\u30EB\u30C8\u304C\u5E83\u304C\u308B\u3060\u3051\u3067\u3001\u4F55\u304C\u3069\u3053\u306B\u3042\u308B\u304B\u306F\u5909\u308F\u308A\u307E\u305B\u3093\u3002","\u5404\u661F\u7CFB\u4E4B\u95F4\u7684\u95F4\u8DDD\u3002\u4ED3\u5E93\u53EA\u662F\u53D8\u5BBD\uFF0C\u4EC0\u4E48\u5728\u54EA\u91CC\u5E76\u4E0D\u6539\u53D8\u3002"],"kd.maxNodes":["\uADF8\uB9B4 \uB178\uD2B8 \uC218\uC758 \uCC9C\uC7A5. \uAEBC\uC9C4 \uCC44\uB85C \uB098\uAC11\uB2C8\uB2E4 \u2014 \uBCFC\uD2B8 \uC808\uBC18\uC744 \uC870\uC6A9\uD788 \uBC84\uB9AC\uB290\uB2C8 \uCCAB 1\uBD84\uC774 \uB290\uB9B0 \uD3B8\uC774 \uB0AB\uC2B5\uB2C8\uB2E4.","A ceiling on how many notes are drawn. Ships off: a slow first minute beats silently dropping half a vault.","\u63CF\u304F\u30CE\u30FC\u30C8\u6570\u306E\u4E0A\u9650\u3002\u65E2\u5B9A\u306F\u30AA\u30D5 \u2014 \u30DC\u30EB\u30C8\u306E\u534A\u5206\u3092\u9ED9\u3063\u3066\u6368\u3066\u308B\u3088\u308A\u3001\u6700\u521D\u306E\u4E00\u5206\u304C\u9045\u3044\u307B\u3046\u304C\u307E\u3057\u3067\u3059\u3002","\u7ED8\u5236\u7B14\u8BB0\u6570\u91CF\u7684\u4E0A\u9650\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5B81\u53EF\u7B2C\u4E00\u5206\u949F\u6162\uFF0C\u4E5F\u4E0D\u8981\u6084\u6084\u4E22\u6389\u534A\u4E2A\u4ED3\u5E93\u3002"],"kd.arc":["\uB9C1\uD06C\uAC00 \uADA4\uB3C4\uBA74 \uC704\uB85C \uC5BC\uB9C8\uB098 \uC19F\uB294\uC9C0. 0\uC774\uBA74 \uD3C9\uBA74 \uC548\uC5D0 \uB215\uC2B5\uB2C8\uB2E4.","How high a link stands out of the plane the bodies orbit in. At zero it lies flat inside it.","\u30EA\u30F3\u30AF\u304C\u8ECC\u9053\u9762\u304B\u3089\u3069\u308C\u3060\u3051\u7ACB\u3061\u4E0A\u304C\u308B\u304B\u30020 \u3067\u305D\u306E\u9762\u306B\u5BDD\u307E\u3059\u3002","\u94FE\u63A5\u4ECE\u8F68\u9053\u5E73\u9762\u4E0A\u62F1\u8D77\u591A\u9AD8\u3002\u5F52\u96F6\u65F6\u5C31\u5E73\u8EBA\u5728\u9762\u5185\u3002"],"kd.ten":["\uB9C1\uD06C\uC5D0 \uACE1\uB960\uC774 \uC5BC\uB9C8\uB098 \uC788\uB294\uC9C0. 1\uC774\uBA74 \uD33D\uD33D\uD558\uACE0 0\uC774\uBA74 \uB298\uC5B4\uC9D1\uB2C8\uB2E4.","How much curve a link has at all. Taut at one, slack at zero.","\u30EA\u30F3\u30AF\u306B\u3069\u308C\u3060\u3051\u66F2\u7387\u304C\u3042\u308B\u304B\u30021 \u3067\u5F35\u308A\u30010 \u3067\u305F\u308B\u307F\u307E\u3059\u3002","\u94FE\u63A5\u7A76\u7ADF\u6709\u591A\u5C11\u5F27\u5EA6\u3002\u4E3A\u4E00\u5219\u7EF7\u7D27\uFF0C\u4E3A\u96F6\u5219\u677E\u5782\u3002"],"kd.bnd":["\uB9C1\uD06C\uC758 \uC591 \uB05D\uC744 \uAC01\uC790\uC758 \uD56D\uC131 \uCABD\uC73C\uB85C \uB2F9\uAE41\uB2C8\uB2E4. \uAC19\uC740 \uAE38\uC744 \uAC00\uB294 \uB9C1\uD06C\uB4E4\uC774 \uD55C \uAC00\uB2E5\uC73C\uB85C \uB54B\uC785\uB2C8\uB2E4.","Draws each end of a link toward its own star, so links going the same way braid into one strand.","\u30EA\u30F3\u30AF\u306E\u4E21\u7AEF\u3092\u305D\u308C\u305E\u308C\u306E\u6052\u661F\u3078\u5BC4\u305B\u307E\u3059\u3002\u540C\u3058\u9053\u3092\u884C\u304F\u30EA\u30F3\u30AF\u304C\u4E00\u672C\u306B\u7DE8\u307E\u308C\u307E\u3059\u3002","\u628A\u94FE\u63A5\u4E24\u7AEF\u5404\u81EA\u62C9\u5411\u81EA\u5DF1\u7684\u6052\u661F\uFF0C\u540C\u8DEF\u7684\u94FE\u63A5\u4FBF\u7F16\u6210\u4E00\u80A1\u3002"],"kd.lwd":["\uB9C1\uD06C\uC640 \uADA4\uB3C4 \uC790\uAD6D\uACFC \uD61C\uC131 \uAF2C\uB9AC\uC758 \uAD75\uAE30. \uD53D\uC140\uC774 \uB2E8\uC704\uC785\uB2C8\uB2E4.","How thick the links, the wakes and the comet's tails are drawn, counted in pixels.","\u30EA\u30F3\u30AF\u3068\u8ECC\u9053\u306E\u8DE1\u3068\u5F57\u661F\u306E\u5C3E\u306E\u592A\u3055\u3002\u5358\u4F4D\u306F\u30D4\u30AF\u30BB\u30EB\u3067\u3059\u3002","\u94FE\u63A5\u3001\u8F68\u8FF9\u4E0E\u5F57\u5C3E\u7684\u7C97\u7EC6\uFF0C\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\u3002"],"kd.spr":["\uD55C \uD56D\uC131\uACC4 \uC548\uC5D0\uC11C \uADA4\uB3C4\uAC00 \uC5BC\uB9C8\uB098 \uBC8C\uC5B4\uC9C0\uB294\uC9C0. \uACC4 \uC0AC\uC774\uC758 \uAC04\uACA9\uC740 ORBIT GAP\uC785\uB2C8\uB2E4.","How far apart the orbits inside one system sit. The room between systems is ORBIT GAP.","\u4E00\u3064\u306E\u6052\u661F\u7CFB\u306E\u4E2D\u3067\u8ECC\u9053\u304C\u3069\u308C\u3060\u3051\u958B\u304F\u304B\u3002\u7CFB\u306E\u3042\u3044\u3060\u306F ORBIT GAP \u3067\u3059\u3002","\u540C\u4E00\u661F\u7CFB\u5185\u5404\u6761\u8F68\u9053\u4E4B\u95F4\u7684\u758F\u5BC6\u3002\u661F\u7CFB\u4E4B\u95F4\u7684\u95F4\u8DDD\u662F ORBIT GAP\u3002"],"kd.sph":["\uB0A9\uC791\uD55C \uC6D0\uBC18\uC744 \uAD6C\uB85C \uC5FD\uB2C8\uB2E4. 1\uC774\uBA74 \uC6D0\uBC18, 0\uC774\uBA74 \uAECD\uC9C8.","Opens the flat disc into a sphere. A disc at one, a shell at zero.","\u5E73\u3089\u306A\u5186\u76E4\u3092\u7403\u3078\u958B\u304D\u307E\u3059\u30021 \u3067\u5186\u76E4\u30010 \u3067\u6BBB\u3002","\u628A\u6241\u5E73\u7684\u5706\u76D8\u5C55\u5F00\u6210\u7403\u3002\u4E3A\u4E00\u662F\u76D8\uFF0C\u4E3A\u96F6\u662F\u58F3\u3002"],"kd.str":["\uD558\uB298 \uC804\uCCB4: \uBC30\uACBD \uBCC4, \uC131\uC6B4, \uADF8 \uB4A4\uC758 \uC740\uD558\uC218, \uB80C\uC988 \uC55E\uC758 \uBA3C\uC9C0. OFF\uBA74 \uBCFC\uD2B8\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4.","The whole sky: the stars, the gas, the band behind them and the dust near the lens. OFF is the vault alone.","\u7A7A\u306E\u3059\u3079\u3066\uFF1A\u80CC\u666F\u306E\u661F\u3001\u661F\u96F2\u3001\u305D\u306E\u5965\u306E\u5929\u306E\u5DDD\u3001\u30EC\u30F3\u30BA\u524D\u306E\u5875\u3002OFF \u306A\u3089\u30DC\u30EB\u30C8\u3060\u3051\u304C\u6B8B\u308A\u307E\u3059\u3002","\u6574\u4E2A\u5929\u7A7A\uFF1A\u80CC\u666F\u661F\u8FB0\u3001\u661F\u4E91\u3001\u5176\u540E\u7684\u94F6\u6CB3\u5E26\u548C\u955C\u5934\u524D\u7684\u5C18\u57C3\u3002OFF \u65F6\u53EA\u5269\u4ED3\u5E93\u3002"],"kd.zod":["\uD56D\uC131\uACC4 \uD3C9\uBA74\uC5D0 \uAE54\uB9B0 \uBA3C\uC9C0\uAC00 \uC911\uC2EC \uBCC4\uBE5B\uC744 \uBC1B\uC544 \uB0B4\uB294 \uBE5B. \uBCFC\uD2B8\uAC00 \uC5B4\uB290 \uBA74\uC5D0 \uB193\uC600\uB294\uC9C0\uB97C \uB9D0\uD569\uB2C8\uB2E4.","The dust lying in the system's own plane, lit by the star in the middle of it \u2014 it says which plane the vault is laid out on.","\u6052\u661F\u7CFB\u306E\u9762\u306B\u6A2A\u305F\u308F\u308B\u5875\u304C\u3001\u4E2D\u5FC3\u306E\u661F\u306E\u5149\u3092\u53D7\u3051\u3066\u8FD4\u3059\u5149\u3002\u30DC\u30EB\u30C8\u304C\u3069\u306E\u9762\u306B\u7F6E\u304B\u308C\u3066\u3044\u308B\u304B\u3092\u793A\u3057\u307E\u3059\u3002","\u94FA\u5728\u661F\u7CFB\u5E73\u9762\u4E0A\u7684\u5C18\u57C3\uFF0C\u53D7\u4E2D\u5FC3\u661F\u5149\u7167\u4EAE\u2014\u2014\u5B83\u8BF4\u660E\u4ED3\u5E93\u94FA\u5728\u54EA\u4E00\u4E2A\u5E73\u9762\u4E0A\u3002"],"kd.szSun":["\uD5C8\uBE0C \uD56D\uC131\uC758 \uBC18\uC9C0\uB984. \uCF54\uB85C\uB098\uB3C4 \uC7A0\uAE08 \uC6D0\uBFD4\uB3C4 \uC774 \uAC12\uC744 \uB530\uB77C\uAC11\uB2C8\uB2E4.","The hub star's radius. The corona and the lock cone both follow it.","\u30CF\u30D6\u6052\u661F\u306E\u534A\u5F84\u3002\u30B3\u30ED\u30CA\u3082\u30ED\u30C3\u30AF\u5186\u9310\u3082\u3053\u308C\u306B\u5F93\u3044\u307E\u3059\u3002","\u67A2\u7EBD\u6052\u661F\u7684\u534A\u5F84\u3002\u65E5\u5195\u4E0E\u9501\u5B9A\u9525\u90FD\u968F\u5B83\u800C\u53D8\u3002"],"kd.szSys":["\uD3F4\uB354 \uD56D\uC131\uC774 \uC5BC\uB9C8\uB098 \uD06C\uAC8C \uADF8\uB824\uC9C0\uB294\uC9C0.","How large the folder stars are drawn.","\u30D5\u30A9\u30EB\u30C0\u6052\u661F\u3092\u3069\u308C\u3060\u3051\u5927\u304D\u304F\u63CF\u304F\u304B\u3002","\u6587\u4EF6\u5939\u6052\u661F\u753B\u5F97\u591A\u5927\u3002"],"kd.szPl":["\uB178\uD2B8\uC758 \uD06C\uAE30. \uD06C\uAE30 \uC790\uCCB4\uB294 \uC778\uC6A9\uB41C \uD69F\uC218\uB97C \uB73B\uD558\uBBC0\uB85C, \uC774 \uB178\uBE0C\uB294 \uB73B\uC774 \uC544\uB2C8\uB77C \uBC30\uC728\uC744 \uC6C0\uC9C1\uC785\uB2C8\uB2E4.","How large the notes are. Size itself means how often a note is cited, so this moves the scale and not the meaning.","\u30CE\u30FC\u30C8\u306E\u5927\u304D\u3055\u3002\u5927\u304D\u3055\u81EA\u4F53\u306F\u5F15\u7528\u3055\u308C\u305F\u56DE\u6570\u3092\u610F\u5473\u3059\u308B\u306E\u3067\u3001\u3053\u308C\u306F\u610F\u5473\u3067\u306F\u306A\u304F\u500D\u7387\u3092\u52D5\u304B\u3057\u307E\u3059\u3002","\u7B14\u8BB0\u7684\u5927\u5C0F\u3002\u5927\u5C0F\u672C\u8EAB\u8868\u793A\u88AB\u5F15\u7528\u7684\u6B21\u6570\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u65CB\u94AE\u6539\u53D8\u7684\u662F\u6BD4\u4F8B\u800C\u975E\u542B\u4E49\u3002"],"kd.szMn":["\uC778\uC6A9\uB41C \uCD9C\uCC98\uAC00 \uC5BC\uB9C8\uB098 \uD06C\uAC8C \uADF8\uB824\uC9C0\uB294\uC9C0.","How large the cited sources are drawn.","\u5F15\u7528\u3055\u308C\u305F\u51FA\u5178\u3092\u3069\u308C\u3060\u3051\u5927\u304D\u304F\u63CF\u304F\u304B\u3002","\u88AB\u5F15\u7528\u7684\u6765\u6E90\u753B\u5F97\u591A\u5927\u3002"],"kd.briSun":["\uD5C8\uBE0C\uC758 \uBC1D\uAE30 \u2014 \uADF8\uB9AC\uACE0 \uD5C8\uBE0C\uAC00 \uBE44\uCD94\uB294 \uBAA8\uB4E0 \uAC83\uC758 \uBC1D\uAE30. \uC774 \uBCC4\uC774 \uBCFC\uD2B8\uC758 \uAD11\uC6D0\uC774\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.","The hub's brightness, and therefore everything it lights: this star is the vault's light source.","\u30CF\u30D6\u306E\u660E\u308B\u3055 \u2014 \u305D\u3057\u3066\u30CF\u30D6\u304C\u7167\u3089\u3059\u3059\u3079\u3066\u306E\u660E\u308B\u3055\u3002\u3053\u306E\u661F\u304C\u30DC\u30EB\u30C8\u306E\u5149\u6E90\u3060\u304B\u3089\u3067\u3059\u3002","\u67A2\u7EBD\u7684\u4EAE\u5EA6\u2014\u2014\u4EE5\u53CA\u5B83\u6240\u7167\u4EAE\u7684\u4E00\u5207\u7684\u4EAE\u5EA6\uFF0C\u56E0\u4E3A\u8FD9\u9897\u661F\u5C31\u662F\u4ED3\u5E93\u7684\u5149\u6E90\u3002"],"kd.briSys":["\uD3F4\uB354 \uD56D\uC131\uC758 \uD6C4\uAD11.","The folder stars' halo.","\u30D5\u30A9\u30EB\u30C0\u6052\u661F\u306E\u5149\u8F2A\u3002","\u6587\u4EF6\u5939\u6052\u661F\u7684\u5149\u6655\u3002"],"kd.briPl":["\uB178\uD2B8\uC758 \uD6C4\uAD11.","The notes' halo.","\u30CE\u30FC\u30C8\u306E\u5149\u8F2A\u3002","\u7B14\u8BB0\u7684\u5149\u6655\u3002"],"kd.briMn":["\uC704\uC131\uC758 \uD6C4\uAD11.","The moons' halo.","\u885B\u661F\u306E\u5149\u8F2A\u3002","\u536B\u661F\u7684\u5149\u6655\u3002"],"kd.blm":["\uBC1D\uC740 \uAC83 \uC8FC\uC704\uB85C \uBC88\uC9C0\uB294 \uBE5B. \uBC88\uC9D0\uC774 \uC5C6\uB294 \uBC1D\uC740 \uC810\uC740 \uBC1D\uAC8C \uC77D\uD788\uC9C0 \uC54A\uACE0 \uADF8\uC800 \uD770 \uD53D\uC140\uC774 \uB429\uB2C8\uB2E4.","The spill around bright things. A bright point without spill does not read as bright \u2014 it reads as a pale pixel.","\u660E\u308B\u3044\u3082\u306E\u306E\u5468\u308A\u306B\u6EF2\u3080\u5149\u3002\u6EF2\u307F\u306E\u306A\u3044\u8F1D\u70B9\u306F\u660E\u308B\u304F\u306F\u8AAD\u3081\u305A\u3001\u305F\u3060\u306E\u767D\u3044\u753B\u7D20\u306B\u306A\u308A\u307E\u3059\u3002","\u660E\u4EAE\u4E4B\u7269\u5468\u56F4\u7684\u6EA2\u5149\u3002\u6CA1\u6709\u6EA2\u5149\u7684\u4EAE\u70B9\u8BFB\u4E0D\u51FA\u4EAE\u5EA6\uFF0C\u53EA\u662F\u4E00\u4E2A\u767D\u50CF\u7D20\u3002"],"kd.ray":["\uBCC4\uC5D0\uC11C \uBED7\uC5B4 \uB098\uC624\uB294 \uBE5B\uC904\uAE30. \uAC00\uAE4C\uC774 \uB2E4\uAC00\uAC00\uBA74 \uC2A4\uC2A4\uB85C \uBB3C\uB7EC\uB098\uACE0 \uC6D0\uBC18\uC774 \uB300\uC2E0 \uB9D0\uD569\uB2C8\uB2E4.","Shafts thrown out from the star. They stand back as you approach and let the disc speak for itself.","\u661F\u304B\u3089\u4F38\u3073\u308B\u5149\u6761\u3002\u8FD1\u3065\u304F\u3068\u81EA\u3089\u9000\u304D\u3001\u5186\u76E4\u81EA\u8EAB\u306B\u8A9E\u3089\u305B\u307E\u3059\u3002","\u4ECE\u6052\u661F\u5C04\u51FA\u7684\u5149\u67F1\u3002\u9760\u8FD1\u65F6\u5B83\u81EA\u884C\u9000\u573A\uFF0C\u8BA9\u661F\u76D8\u81EA\u5DF1\u8BF4\u8BDD\u3002"],"kd.glare":["\uBCC4\uC774 \uC810\uC774 \uB418\uC5C8\uC744 \uB54C \uB300\uC2E0 \uB098\uD0C0\uB098\uB294 \uC0B0\uB780 \uBB34\uB9AC. \uC808\uBC18\uC744 \uB118\uAE30\uBA74 \uACF5\uAE30\uAC00 \uC5BC\uC74C\uC774 \uB418\uACE0 \uBB34\uB9AC\uC5D0 \uAD6C\uC870\uAC00 \uC0DD\uAE41\uB2C8\uB2E4.","The scattering halo that takes over once the disc stops being a disc. Past halfway the air becomes ice and the halo gains structure.","\u661F\u304C\u70B9\u306B\u306A\u3063\u305F\u3068\u304D\u4EE3\u308F\u308A\u306B\u73FE\u308C\u308B\u6563\u4E71\u306E\u6688\u3002\u534A\u3070\u3092\u8D8A\u3048\u308B\u3068\u7A7A\u6C17\u306F\u6C37\u306B\u306A\u308A\u3001\u6688\u306B\u69CB\u9020\u304C\u751F\u307E\u308C\u307E\u3059\u3002","\u5F53\u661F\u76D8\u4E0D\u518D\u662F\u76D8\u65F6\u63A5\u7BA1\u753B\u9762\u7684\u6563\u5C04\u6655\u3002\u8FC7\u534A\u4E4B\u540E\u7A7A\u6C14\u5316\u4E3A\u51B0\uFF0C\u6655\u4FBF\u6709\u4E86\u7ED3\u6784\u3002"],"kd.flr":["\uB80C\uC988\uAC00 \uBE5B\uC5D0 \uD558\uB294 \uC77C: \uD654\uBA74 \uC911\uC2EC\uC744 \uC9C0\uB098\uB294 \uACE0\uC2A4\uD2B8, \uD5E4\uC77C\uB85C, \uAC00\uB85C \uC2A4\uD2B8\uB9AD, \uBC88\uC9D0\uC758 \uC0C9\uBD84\uC0B0, \uC55E \uC720\uB9AC\uC758 \uC5BC\uB8E9.","What the glass does with a source: ghosts through the centre of the frame, the halo, the horizontal streak, colour separating on the spill, and the smudges on the front element.","\u30EC\u30F3\u30BA\u304C\u5149\u306B\u3059\u308B\u3053\u3068\uFF1A\u753B\u9762\u4E2D\u5FC3\u3092\u901A\u308B\u30B4\u30FC\u30B9\u30C8\u3001\u30CF\u30ED\u30FC\u3001\u6A2A\u65B9\u5411\u306E\u30B9\u30C8\u30EA\u30FC\u30AF\u3001\u306B\u3058\u307F\u306E\u8272\u5206\u6563\u3001\u524D\u7389\u306E\u6C5A\u308C\u3002","\u955C\u5934\u5BF9\u5149\u505A\u7684\u4E8B\uFF1A\u7A7F\u8FC7\u753B\u9762\u4E2D\u5FC3\u7684\u9B3C\u5F71\u3001\u5149\u6655\u3001\u6A2A\u5411\u62C9\u4E1D\u3001\u6EA2\u5149\u7684\u8272\u6563\u3001\u524D\u955C\u7247\u7684\u6C61\u8FF9\u3002"],"kd.vei":["\uD654\uBA74 \uC804\uCCB4\uC5D0 \uC587\uAC8C \uAE54\uB9AC\uB294 \uB300\uAE30.","A thin air laid over the whole frame.","\u753B\u9762\u5168\u4F53\u306B\u8584\u304F\u6577\u304B\u308C\u308B\u5927\u6C17\u3002","\u94FA\u5728\u6574\u5E45\u753B\u9762\u4E0A\u7684\u4E00\u5C42\u8584\u8584\u5927\u6C14\u3002"],"kd.cur":["\uBC1D\uC740 \uCABD\uC744 \uB20C\uB7EC \uC8FC\uB294 \uC5B4\uAE68. \uC13C\uC11C\uC5D0\uB294 \uC788\uACE0 8\uBE44\uD2B8\uC5D0\uB294 \uC5C6\uB294 \uAC83\uC785\uB2C8\uB2E4.","The shoulder that holds the highlights back \u2014 the thing a sensor has and eight bits do not.","\u660E\u90E8\u3092\u6291\u3048\u308B\u80A9\u306E\u7279\u6027\u3002\u30BB\u30F3\u30B5\u30FC\u306B\u306F\u3042\u308A\u30018\u30D3\u30C3\u30C8\u306B\u306F\u306A\u3044\u3082\u306E\u3067\u3059\u3002","\u538B\u4F4F\u9AD8\u5149\u7684\u90A3\u9053\u80A9\u90E8\u2014\u2014\u4F20\u611F\u5668\u6709\u800C\u516B\u4F4D\u6CA1\u6709\u7684\u4E1C\u897F\u3002"],"kd.sVol":["\uC804\uCCB4 \uC74C\uB7C9.","The level of everything.","\u5168\u4F53\u306E\u97F3\u91CF\u3002","\u5168\u90E8\u58F0\u97F3\u7684\u97F3\u91CF\u3002"],"kd.sScale":["\uB178\uD2B8\uAC00 \uACE0\uB97C \uC218 \uC788\uB294 \uC5F4 \uAC1C\uC758 \uC74C. \uADF8\uC911 \uC5B4\uB290 \uC74C\uC774 \uB418\uB294\uC9C0\uB294 \uB178\uD2B8 \uC790\uC2E0\uC774 \uC815\uD569\uB2C8\uB2E4.","The ten notes a note may land on. Which one it lands on is the note's own business.","\u30CE\u30FC\u30C8\u304C\u9078\u3079\u308B\u5341\u306E\u97F3\u3002\u305D\u306E\u3069\u308C\u306B\u306A\u308B\u304B\u306F\u30CE\u30FC\u30C8\u81EA\u8EAB\u304C\u6C7A\u3081\u307E\u3059\u3002","\u4E00\u7BC7\u7B14\u8BB0\u53EF\u4EE5\u843D\u5728\u7684\u5341\u4E2A\u97F3\u3002\u843D\u5728\u54EA\u4E00\u4E2A\u7531\u7B14\u8BB0\u81EA\u5DF1\u51B3\u5B9A\u3002"],"kd.sDrone":["\uC544\uBB34 \uC77C\uB3C4 \uC77C\uC5B4\uB098\uC9C0 \uC54A\uC744 \uB54C \uAE54\uB824 \uC788\uB294 \uC800\uC74C. \uAEBC\uC9C4 \uCC44\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4.","The low hum under everything when nothing is happening. It starts off.","\u4F55\u3082\u8D77\u304D\u3066\u3044\u306A\u3044\u3068\u304D\u306B\u4E0B\u306B\u6D41\u308C\u308B\u4F4E\u3044\u97F3\u3002\u65E2\u5B9A\u3067\u306F\u30AA\u30D5\u3067\u3059\u3002","\u4EC0\u4E48\u90FD\u6CA1\u53D1\u751F\u65F6\u57AB\u5728\u5E95\u4E0B\u7684\u4F4E\u9E23\u3002\u9ED8\u8BA4\u5173\u95ED\u3002"],"kd.sRip":["\uD30C\uBB38\uC774 \uB178\uD2B8\uC5D0 \uB2FF\uB294 \uC21C\uAC04 \uADF8 \uB178\uD2B8\uAC00 \uB0B4\uB294 \uC18C\uB9AC\uC758 \uD06C\uAE30.","How loud a note sounds at the moment the wave reaches it.","\u6CE2\u7D0B\u304C\u30CE\u30FC\u30C8\u306B\u5C4A\u3044\u305F\u77AC\u9593\u3001\u305D\u306E\u30CE\u30FC\u30C8\u304C\u9CF4\u308B\u5927\u304D\u3055\u3002","\u6D9F\u6F2A\u62B5\u8FBE\u4E00\u7BC7\u7B14\u8BB0\u65F6\uFF0C\u5B83\u54CD\u8D77\u7684\u97F3\u91CF\u3002"]},x=null;try{let o=m.get("orrery2.lang");S.indexOf(o)>=0&&(x=o)}catch(o){}if(!x){let o=(navigator.language||"").toLowerCase();x=/^ko/.test(o)?"ko":/^ja/.test(o)?"ja":/^zh/.test(o)?"zh":"en"}function A(o,u){let p=_[o],v=p?p[S.indexOf(x)]||p[0]:o;return u&&(v=v.replace(/\{(\w+)\}/g,(b,E)=>E in u?u[E]:b)),v}function N(){document.documentElement.lang=x,s.querySelectorAll("[data-i18n]").forEach(o=>{o.innerHTML=A(o.dataset.i18n)}),s.querySelectorAll("[data-i18n-title]").forEach(o=>{o.title=A(o.dataset.i18nTitle)}),s.querySelectorAll("[data-i18n-ph]").forEach(o=>{o.placeholder=A(o.dataset.i18nPh)}),s.querySelectorAll(".langsel u").forEach(o=>o.classList.toggle("on",o.dataset.l===x))}function O(o){if(!(S.indexOf(o)<0||o===x)){x=o;try{m.set("orrery2.lang",o)}catch(u){}N(),KM()}}s.querySelectorAll(".langsel u").forEach(o=>{o.onclick=()=>O(o.dataset.l)}),N();function C(o){let u=String(o).trim().slice(-1).charCodeAt(0);if(!(u>=44032&&u<=55203))return"\uB85C";let p=(u-44032)%28;return p===0||p===8?"\uB85C":"\uC73C\uB85C"}function q(o){return x==="ko"?"\u25CE "+o+C(o)+" \uC774\uB3D9":A("go.travel",{n:o})}let X=!1;function te(o){if(X=!!o,!X)return;let u=d("boot");u.classList.add("gone"),u.style.display="none",["b-load","hint","b-clear"].forEach(p=>{d(p).style.display="none"})}let se={open:null,hover:null};function we(o){se.open=o&&typeof o.open=="function"?o.open:null,se.hover=o&&typeof o.hover=="function"?o.hover:null,Z()}function ce(){return!!se.open}function Z(){let o=ce();["i-open","mm-open","k-open","introopen"].forEach(u=>{let p=d(u);p&&(p.style.display=o?"":"none")})}function ne(o){let u=Fe&&Fe[o];return u?u.fp||u.p:""}function ie(o,u){if(!ce())return!1;if(o<0||o>=Q)return bt(A("open.none")),!1;let p=!!(u&&(u.ctrlKey||u.metaKey));try{se.open(ne(o),{newLeaf:p,newWindow:p&&!!(u&&u.shiftKey)})}catch(v){return console.error("vault-orrery: host could not open note",v),bt(A("open.fail")),!1}return!0}let j=null;function Le(){j={exact:new Map,lower:new Map};for(let o=0;o<Q;o++){let u=Fe[o];[u.fp,u.p].forEach(p=>{if(!p)return;j.exact.has(p)||j.exact.set(p,o);let v=p.toLowerCase();j.lower.has(v)||j.lower.set(v,o)})}}function Oe(o){if(!o||!Q)return-1;j||Le();let u=String(o).replace(/\\/g,"/").replace(/^\.?\//,"");if(j.exact.has(u))return j.exact.get(u);let p=u.toLowerCase();if(j.lower.has(p))return j.lower.get(p);let v=u.indexOf("/");if(v>0){let b=u.slice(v+1).toLowerCase();if(j.lower.has(b))return j.lower.get(b)}return-1}function ke(o,u){let p=Oe(o);return p<0?!1:(u&&u.select===!0?fi(p):At?$.has.has(p)?fi(p):ps(p):zu(p,!0),!0)}let et="",ze=-1;function ht(o){et=o?String(o).replace(/\\/g,"/"):"",ze=et?Oe(et):-1}if(typeof xg=="undefined")throw s.querySelector("#boot").innerHTML='<h1>VAULT ORRERY</h1><h2>MISSING DEPENDENCY</h2><div id="bpick" class="ok" style="max-width:560px;line-height:1.9">'+A("vendor.missing")+"</div>",new Error("three.js not found at vendor/three.min.js");let gt={meta:{vault:"",files:0,edges:0,wiki:0,raw:0,broken:0,years:[]},cats:[],nodes:[],edges:[]},xe=gt,Kt=d("blog");function Ct(o,u){let p=A(o),v="\u2026".repeat(Math.max(2,30-Array.from(p).length));return"<b>\u203A</b> "+p+" "+v+" <em>"+u+"</em>"}let xt=[Ct("boot.l1","OK"),Ct("boot.l2","OK"),Ct("boot.l3","OK"),Ct("boot.l4","READY"),Ct("boot.l5",A("boot.wait"))],ut=0,Gt=setInterval(()=>{if(ut>=xt.length){clearInterval(Gt);return}Kt.innerHTML+=xt[ut++]+"<br>"},190),Rt=3,St=1e4,Ie=2.5,Ge=1.5,qe=.95,at=1700,Je=320,V=1,B=2.4,be=[{n:"PENTATONIC",s:[0,2,4,7,9,12,14,16,19,21]},{n:"MINOR",s:[0,2,3,5,7,8,10,12,14,15]},{n:"LYDIAN",s:[0,2,4,6,7,9,11,12,14,16]},{n:"WHOLE TONE",s:[0,2,4,6,8,10,12,14,16,18]},{n:"OPEN FIFTHS",s:[0,7,12,19,24,26,31,36,38,43]}],ge=o=>o.toFixed(2)+"\xD7",De=(o,u)=>o<.02?"OFF":u,Qe=[{k:"spd",g:"cosmos",label:"ORBIT SPEED",min:0,max:400,sc:100,def:.1,pin:1,fmt:ge},{k:"bri",g:"cosmos",label:"NODE GLOW",min:10,max:260,sc:100,def:1.11,pin:1,fmt:ge},{k:"lnk",g:"cosmos",label:"LINK GLOW",min:0,max:Rt*100,sc:100,def:.3,pin:1,fmt:o=>De(o,ge(o))},{k:"gap",g:"cosmos",label:"ORBIT GAP",min:50,max:1200,sc:100,def:5,pin:1,fmt:ge},{k:"maxNodes",g:"cosmos",label:"MAX NODES",min:500,max:St+500,step:500,sc:1,def:0,pin:1,i18n:"cap.label",get:()=>W.maxNodes>0?W.maxNodes:St+500,set:o=>{W.maxNodes=o>St?0:o},fmt:()=>W.maxNodes>0?String(W.maxNodes):A("cap.off")},{k:"arc",g:"cosmos",label:"ARC HEIGHT",min:0,max:Ie*100,sc:100,def:.6,fmt:o=>o<.02?"FLAT":ge(o)},{k:"ten",g:"cosmos",label:"LINK TENSION",min:0,max:100,sc:100,def:.7,fmt:o=>o.toFixed(2)},{k:"bnd",g:"cosmos",label:"LINK ROUTING",min:0,max:100,sc:100,def:.62,fmt:o=>De(o,o.toFixed(2))},{k:"lwd",g:"cosmos",label:"LINE WIDTH",min:60,max:400,sc:100,def:.6,fmt:o=>o.toFixed(1)+" px"},{k:"spr",g:"cosmos",label:"ORBIT SPREAD",min:30,max:800,sc:100,def:3.2,fmt:ge},{k:"sph",g:"cosmos",label:"ORBIT SHELL",min:0,max:100,sc:100,def:1,fmt:o=>o<.005?"DISC":o>.995?"SPHERE":o.toFixed(2)},{k:"szSun",g:"bodies",label:"SUN SIZE",min:30,max:300,sc:100,def:1.72,fmt:ge,apply:Ga},{k:"szSys",g:"bodies",label:"SYSTEM SIZE",min:30,max:400,sc:100,def:.98,fmt:ge,apply:Ga},{k:"szPl",g:"bodies",label:"PLANET SIZE",min:30,max:300,sc:100,def:.96,fmt:ge,apply:Ga},{k:"szMn",g:"bodies",label:"MOON SIZE",min:30,max:300,sc:100,def:.57,fmt:ge,apply:Ga},{k:"briSun",g:"bodies",label:"SUN GLOW",min:15,max:300,sc:100,def:.15,fmt:ge},{k:"briSys",g:"bodies",label:"SYSTEM GLOW",min:0,max:300,sc:100,def:.3,fmt:o=>De(o,ge(o))},{k:"briPl",g:"bodies",label:"PLANET GLOW",min:0,max:800,sc:100,def:.4,fmt:o=>De(o,ge(o))},{k:"briMn",g:"bodies",label:"MOON GLOW",min:0,max:800,sc:100,def:5.08,fmt:o=>De(o,ge(o))},{k:"str",g:"cosmos",label:"STARFIELD",min:0,max:200,sc:100,def:0,fmt:o=>De(o,ge(o)),apply:vm},{k:"zod",g:"cosmos",label:"ZODIACAL LIGHT",min:0,max:300,sc:100,def:2,fmt:o=>De(o,ge(o))},{k:"blm",g:"light",label:"BLOOM",min:0,max:Ge*100,sc:100,def:.55,fmt:o=>De(o,ge(o))},{k:"ray",g:"light",label:"SUN RAYS",min:0,max:150,sc:100,def:.53,fmt:o=>De(o,ge(o))},{k:"glare",g:"light",label:"SUN HALO",min:0,max:300,sc:100,def:.5,fmt:o=>De(o,ge(o))},{k:"flr",g:"light",label:"LENS FLARE",min:0,max:200,sc:100,def:.55,fmt:o=>De(o,ge(o))},{k:"vei",g:"light",label:"SKY VEIL",min:0,max:120,sc:100,def:0,fmt:o=>De(o,ge(o)),apply:Ep},{k:"cur",g:"light",label:"FILM CURVE",min:0,max:100,sc:100,def:.38,fmt:o=>De(o,ge(o))},{k:"sVol",g:"sound",label:"MASTER",min:0,max:150,sc:100,def:.55,fmt:o=>De(o,Math.round(o*100)+"%"),apply:Xp},{k:"sScale",g:"sound",label:"SCALE",min:0,max:be.length-1,sc:1,def:0,fmt:o=>be[g(o|0,0,be.length-1)].n},{k:"sDrone",g:"sound",label:"AMBIENT",min:0,max:200,sc:100,def:.35,fmt:o=>De(o,ge(o)),apply:Xp},{k:"sRip",g:"sound",label:"RIPPLE",min:0,max:150,sc:100,def:.5,fmt:o=>De(o,ge(o))}],Nt=["blm","ray","flr","glare","cur","zod","str","vei"],yt={cinematic:null,balanced:{blm:.3,ray:.25,flr:.2,glare:.25,zod:1},fast:{blm:0,ray:0,flr:0,glare:0,cur:0,zod:0,str:0,vei:0}};function K(o,u){let p=yt[o];return p&&p[u]!==void 0?p[u]:ot[u].def}function Ne(){for(let o in yt)if(Nt.every(u=>Math.abs(W[u]-K(o,u))<.006))return o;return""}function We(o,u){let p=new Set;Nt.forEach(v=>{W[v]=K(o,v)}),Nt.forEach(v=>{let b=ot[v].apply;if(!(!b||p.has(b))){p.add(b);try{b()}catch(E){console.error("vault-orrery: quality "+v,E)}}}),Vr(),un(),u||bt(A("q."+o))}let ot={};Qe.forEach(o=>{ot[o.k]=o});let Me=[["cosmos","grp.cosmos"],["bodies","grp.bodies"],["light","grp.light"],["sound","grp.sound"]],dt=Qe.filter(o=>o.pin).map(o=>o.k),Ht={mmHop:!1,snd:!1,coreNote:"",grid:!1,tab:"cosmos",deckAt:null,litV1:1,adv:!1,legFold:!1,keysFold:!1,pin:dt};Qe.forEach(o=>{Ht[o.k]=o.def});let bn={spl:.26,len:.3,grn:.14,aex:.5,sTune:0,sRoom:7.5,sEcho:.36,sEchoT:.62,grv:1.5,trl:1,tlt:0,det:1,frs:14};Object.assign(Ht,bn);let Jn={};try{Jn=JSON.parse(m.get("orrery2.set")||"{}")||{}}catch(o){}let W=Object.assign({},Ht,{pin:dt.slice()},Jn,bn);Qe.forEach(o=>{if(o.get)return;let u=+W[o.k];W[o.k]=Number.isFinite(u)?g(u,o.min/o.sc,o.max/o.sc):o.def}),W.maxNodes=Number.isFinite(+W.maxNodes)?g(+W.maxNodes,0,St):Ht.maxNodes,!Jn.litV1&&!(+Jn.blm||+Jn.cur||+Jn.spl||+Jn.len||+Jn.grn)&&["blm","cur"].forEach(o=>{W[o]=ot[o].def}),W.litV1=1,[["lnk",.42],["str",1.2],["lnk",.2],["gap",2.81],["str",.4],["zod",1],["sDrone",0],["briSys",.59],["vei",.2]].forEach(([o,u])=>{o in Jn&&Math.abs(+Jn[o]-u)<.005&&(W[o]=ot[o].def)}),typeof W.coreNote!="string"&&(W.coreNote=""),W.deckAt&&!(Number.isFinite(+W.deckAt.x)&&Number.isFinite(+W.deckAt.y)&&+W.deckAt.w>0)&&(W.deckAt=null),W.pin=Array.isArray(W.pin)?Qe.filter(o=>W.pin.indexOf(o.k)>=0).map(o=>o.k):dt.slice();function un(){try{m.set("orrery2.set",JSON.stringify(W))}catch(o){}}let ci=0;function bt(o,u){let p=d("toast");p.textContent=o,p.classList.add("on"),ci=performance.now()+(u||1300)}let ac=Math.PI*(3-Math.sqrt(5));function xu(o){let u=0;for(let p=0;p<o.length;p++)o.charCodeAt(p)===47&&u++;return u}let Fe,Kn,Q,Tt,Ia,Ki,oc,Ws,es,k,pe,le,G,ye,Pt,Be,_t,tt,nt,ft,pt,Mt,Xt,zn,Dn,dn,yi,nn,No=0,Wn=!1,rn,Ho,lc,xi,hi,_n,ts,ap,qs,pr=[],Bi,cc,wu=!1,op,bg,Xs,Oi,Ri,mr,ka,ns,Fa,zt,Ys,Na,Ha,Ba,bu,_u,Mu,Eu,$i,Su,Sn,gr,hc,js,Zs,Oa,Tu,za,Js,Ks,Li,Au,ui,Un,_g,Mg,uc,Eg,Ru,Sg=0,lp,cp,$s,Bo,Tg,Lu,Jb=0,Ag=0,dc,Oo,hp,fc,up,pc,Cu,vr,mc,Fr,Pu,yr,Ci,gc,zo,Ua,$n,Pi=[],Du=[],Uo=null,vc=null,is,$t=null,Rg={pos:new L(0,0,0)},yc={r0:1010,dr:430,a0:1.2,da:.108},Go={gap:1,rg:1,step:34,cats:[]},zi=1,Qs=0,Qi=1;function Kb(o){let u=60;for(let p=0;p<Go.cats.length;p++){let v=Go.cats[p],b=v.a+v.b*o;b>u&&(u=b)}return Math.max((u*2.3+40)*.92,150)}function $b(o){let u=W.gap;if(zi===u&&Qs===0)return;let p=Math.min(.05,o);Qs+=(u-zi)*42*p-Qs*8.6*p,zi+=Qs*p,Math.abs(u-zi)<5e-4&&Math.abs(Qs)<.003&&(zi=u,Qs=0),Qi=Kb(zi)/(Go.rg||1),Cg()}let Qb=26e-5,e1=6e3,Lg=4e4,dp=Lg;function Cg(){let o=Math.max(600,(Mt||1600)*Qi);Dt.fog.density=Qb*Math.min(1,e1/o);let u=Math.max(Lg,o*3+2e4);Math.abs(u-dp)>dp*.02&&(dp=u,Ue.far=u,Ue.updateProjectionMatrix())}function Ga(){if(Tt&&Tt.forEach(o=>{if(o.R===void 0)return;let u=o.tier===0?W.szSys:1;if(o.sR=o.R*u,o.gz0!==void 0&&Oi){let p=Oi.geometry.attributes.aSize;p&&o.si!==void 0&&(p.array[o.si]=o.gz0*u,p.needsUpdate=!0)}}),!(!Q||!Pt||!ye)){for(let o=0;o<Q;o++){let u=tt[o]?tt[o].kind:"wiki";ye[o]=Pt[o]*(u==="core"?W.szSun:u==="moon"?W.szMn:W.szPl)}for(let o=0;o<Q;o++){let u=tt[o];if(u&&u.kind==="wiki"&&u.inner0){let p=u.inner0*W.szSys;u.r0=u.r00+(p-u.inner0),u.inner=p}}for(let o=0;o<Q;o++){let u=tt[o];u&&u.kind==="moon"&&u.pr&&(u.r=u.r0=u.pr*W.szPl*(3.4+u.mk*1.15))}if(Zs&&js)for(let o=0;o<Q;o++){let u=tt[o].kind;Zs[o]=ye[o]*(u==="core"?16:u==="wiki"?9:7.5),js[o]=Zs[o]}At&&B_()}}let xc=9;function t1(o,u){if(!(o>.8))return 2;let p=1+Math.ceil(1.5*Math.sqrt(o));return p<2?2:p>u?u:p}let Nr=320,Hr=4,Zt=new Float32Array(32*3),Iu=300,Va=9,n1=.16,Pg=[new Ce(5495039),new Ce(16751932)],wc=[{name:"ALL",mask:[1,1]},{name:"WIKI",mask:[1,0]},{name:"SOURCE",mask:[0,1]},{name:"BRIDGE",mask:[1,1],cross:1},{name:"OFF",mask:[0,0]}],bc=0,Re={on:!1,play:!1,u:0,rate:1,lo:0,hi:0,dated:0,playSec:42,grow:.022,flash:.05,stage:-1,marksFor:null},ea=[{u0:0,code:"VOID",k:"gen.p0"},{u0:.045,code:"IGNITION",k:"gen.p1"},{u0:.13,code:"CONDENSATION",k:"gen.p2"},{u0:.3,code:"ACCRETION",k:"gen.p3"},{u0:.6,code:"CAPTURE",k:"gen.p4"},{u0:.855,code:"NETWORK",k:"gen.p5"},{u0:.985,code:"PRESENT",k:"gen.p6"}],fp=.1,Dg=.93;function xr(o,u,p){return new Ce().setHSL(o/360,u,p)}let Ig=152,i1=300;function r1(o){let u=[];if(o<=0)return u;let p=(b,E)=>E?p(E,b%E):b,v=Math.max(1,Math.round(o*.382));for(;v>1&&p(v,o)!==1;)v--;for(let b=0;b<o;b++){let E=b*v%o,w=o===1?.29:E/(o-1);u.push(xr(Ig+(i1-Ig)*w,.88-E%3*.09,.62+(E%2?.07:-.05)))}return u}function pp(o){let u=(D,R,F,z)=>{let Y=(D-R)*(D<R?1/F:1/z);return Math.exp(-.5*Y*Y)},p=0,v=0,b=0;for(let D=360;D<=830;D+=5){let R=D*1e-9,F=374183e-21/(Math.pow(R,5)*(Math.exp(.014388/(R*o))-1));p+=F*(1.056*u(D,599.8,37.9,31)+.362*u(D,442,16,26.7)-.065*u(D,501.1,20.4,26.2)),v+=F*(.821*u(D,568.8,46.9,40.5)+.286*u(D,530.9,16.3,31.1)),b+=F*(1.217*u(D,437,11.8,36)+.681*u(D,459,26,13.8))}let E=Math.max(0,3.2406*p-1.5372*v-.4986*b),w=Math.max(0,-.9689*p+1.8758*v+.0415*b),T=Math.max(0,.0557*p-.204*v+1.057*b),P=Math.max(E,w,T)||1,I=D=>(D/=P)<=.0031308?12.92*D:1.055*Math.pow(D,1/2.4)-.055;return[I(E),I(w),I(T)]}function Wa(o){let[u,p,v]=pp(o),b=E=>E<=.04045?E/12.92:Math.pow((E+.055)/1.055,2.4);return[b(u),b(p),b(v)]}let ku=[15200,8200,6600,5772,4400,3550].map(pp);function s1(){if(Q){if(Sn&&Sn.instanceColor){for(let o=0;o<Q;o++)Sn.setColorAt(o,Fg.setRGB(Be[o*3],Be[o*3+1],Be[o*3+2]));Sn.instanceColor.needsUpdate=!0}if(za&&Oa){for(let o=0;o<Q*3;o++)Oa[o]=Be[o];za.geometry.attributes.aColor.needsUpdate=!0}$n&&$n.instanceColor&&(Pi.forEach((o,u)=>$n.setColorAt(u,Fg.setRGB(y(Be[o*3],1,.3),y(Be[o*3+1],1,.3),y(Be[o*3+2],1,.3)))),$n.instanceColor.needsUpdate=!0)}}function a1(o){let u=Math.floor((Date.now()-o)/864e5);return u<=0?A("ago.today"):u<7?A("ago.d",{n:u}):u<31?A("ago.w",{n:Math.floor(u/7)}):u<365?A("ago.mo",{n:Math.floor(u/30)}):A("ago.y",{n:Math.floor(u/365)})}let o1=3e4;function kg(){let o=Date.now();if(No=o,!Q||!nn)return;let u=W.frs||0;if(u<.5){nn.fill(0);return}let p=u*864e5;for(let v=0;v<Q;v++){let b=yi[v];if(!b){nn[v]=0;continue}let E=o-b;nn[v]=E<=0?1:E>=p?0:1-E/p}}function yL(){return Wn}let Fg=new Ce;function mp(o,u){let p=g(o,0,1)*(ku.length-1),v=Math.min(ku.length-2,Math.floor(p)),b=p-v,E=ku[v],w=ku[v+1];return(u||new Ce).setRGB(y(E[0],w[0],b),y(E[1],w[1],b),y(E[2],w[2],b))}function Ng(){let o=Math.random();return o<.62?o/.62*.52:.52+Math.pow((o-.62)/.38,1.6)*.48}let Hg={2022:xr(18,.85,.52),2023:xr(30,.88,.55),2024:xr(41,.92,.57),2025:xr(50,.9,.6),2026:xr(58,.85,.64),0:xr(258,.45,.58)},gp=xr(45,1,.72),Vo=new Set,Fu=-1;function l1(o){if(!Vo.size||W.grv<.02)return;let u=Math.min(o,1/40);Vo.forEach(p=>{if(p===Fu)return;let v=(6+ap[p]*3)*W.grv,b=.7*Math.sqrt(v),E=!0;for(let w=0;w<3;w++){let T=p*3+w;ts[T]+=(-v*_n[T]-b*ts[T])*u,_n[T]+=ts[T]*u,(Math.abs(_n[T])>.06||Math.abs(ts[T])>.06)&&(E=!1)}E&&(_n[p*3]=_n[p*3+1]=_n[p*3+2]=0,ts[p*3]=ts[p*3+1]=ts[p*3+2]=0,Vo.delete(p))})}function Bg(o){xe=o,Fe=o.nodes,Kn=o.edges,Q=Fe.length,zn=new Array(Q);for(let H=0;H<Q;H++){let J=Fe[H];zn[H]=(J.n+" "+J.p+" "+(J.t||[]).join(" ")+" "+(J.pr||[]).map(Ee=>Ee[0]+" "+Ee[1]).join(" ")).toLowerCase()}Tt=o.cats.filter(H=>H.dom!=="root"),Ia={},Tt.forEach((H,J)=>{Ia[H.key]=J});let u=r1(Tt.reduce((H,J)=>H+(J.dom==="wiki"?1:0),0)),p=0;Tt.forEach(H=>{if(H.dom==="wiki")H.color=u[p],H.tier=0,p++;else{let J=parseInt(H.key.split(":")[1],10)||0;H.color=Hg[J]||Hg[0],H.tier=1,H.year=J}H.on=!0}),Ki=Tt.filter(H=>H.tier===0),oc=Tt.filter(H=>H.tier===1).sort((H,J)=>(H.year||9999)-(J.year||9999)),Ws=new Array(Q).fill(-1),es=Array.from({length:Q},()=>[]),Kn.forEach(([H,J,Ee])=>{Ee===1&&Ws[H]<0&&(Ws[H]=J,es[J].push(H))}),Xt=Array.from({length:Q},()=>new Set),Kn.forEach(([H,J])=>{H!==J&&(Xt[H].add(J),Xt[J].add(H))});let v=/(^|\/)(index|readme|home|moc|인덱스|목차)\.md$/i,b=H=>(Fe[H].inb|0)*40+(Fe[H].w|0)-xu(Fe[H].p)*500;if(k=-1,W.coreNote&&(k=Fe.findIndex(H=>H.p===W.coreNote)),k<0&&Q){let H=-1;for(let J=0;J<Q;J++)v.test(Fe[J].p)&&(H<0||b(J)>b(H))&&(H=J);k=H}if(k<0&&Q){let H=0;for(let J=1;J<Q;J++)(Fe[J].inb|0)>(Fe[H].inb|0)&&(H=J);k=H}let E={};for(let H=0;H<Q;H++)H===k||Fe[H].k==="raw"||(E[Fe[H].c]=(E[Fe[H].c]||0)+1);let w=34;Ki.forEach(H=>{H.R=5.5+Math.sqrt(H.n)*1.7,H.planets=E[H.key]||0,H.orbRings=Math.max(1,Math.ceil(H.planets/6)),H.reach=H.R*3.2+H.orbRings*w*W.gap+16,H.reachA=H.R*3.2+16,H.reachB=H.orbRings*w});let P=(Ki.length?Math.max.apply(null,Ki.map(H=>H.reach)):60)*2.3+40,I=Math.max(P*.92,150);Go={gap:W.gap,rg:I,step:w,cats:Ki.map(H=>({a:H.R*3.2+16,b:H.orbRings*w}))},zi=W.gap,Qs=0,Qi=1;let D=0,R=0,F=I;for(;D<Ki.length;){let H=I*(R+1),J=Math.max(1,Math.floor(f*H/P)),Ee=Math.min(J,Ki.length-D);for(let Te=0;Te<Ee;Te++){let ve=Ki[D+Te],re=Te/Ee*f+R*.7+.3,Se=Math.sin(re*2+R*1.3)*Math.min(30,H*.022);ve.pos=new L(Math.cos(re)*H,Se,Math.sin(re)*H),ve.ringNo=R,ve.ringR=H}D+=Ee,F=H,R++}pr=[];for(let H=0;H<R;H++)pr.push(I*(H+1));let z=[];for(let H=0;H<Q;H++)Fe[H].k==="raw"&&Ws[H]<0&&z.push(H);let Y=z.filter(H=>Fe[H].y).sort((H,J)=>(Fe[H].d||"").localeCompare(Fe[J].d||"")),U=z.filter(H=>!Fe[H].y),ee=F+I*.85;yc={r0:ee,dr:ee*.4,a0:1.2,da:f*3.5/Math.max(24,Y.length)},Mt=ee+I*.9,pe={},le=Y,function(){let J=Math.max(1,Y.length),Ee=Math.max(3,I*.03);Y.forEach((Te,ve)=>{let re=ve/J;pe[Te]={kind:"spiral",anchor:Rg,r:yc.r0-re*yc.dr+(ve*17%11-5)*Ee,ph:yc.a0+ve*yc.da,sp:55e-6,inc:.04+(ve*13%9-4)*.009,y:(ve*29%17-8)*Ee*.55}}),U.forEach((Te,ve)=>{let re=(ve+.5)/Math.max(1,U.length);pe[Te]={kind:"shell",anchor:Rg,r:Mt+(ve*23%13-6)*Ee*2,ph:ve*ac,sp:24e-6,inc:Math.acos(1-2*re)*.58,y:0}}),oc.forEach(Te=>{let ve=(Te.year?Y:U).filter(He=>Fe[He].c===Te.key),re=ve.length?pe[ve[Math.floor(ve.length/2)]]:null,Se=re?re.r:Mt,Ae=re?re.ph:0;Te.pos=new L(Math.cos(Ae)*Se,(re?re.y:0)+34,Math.sin(Ae)*Se),Te.R=3.4+Math.sqrt(Te.n)*.5})}();let oe=I||400;Tt.forEach(H=>{let J=H.pos||new L;H.oR=Math.hypot(J.x,J.z),H.oA0=Math.atan2(J.z,J.x),H.oY=J.y,H.oSp=H.tier===1?H.year?55e-6:24e-6:48e-6*Math.pow(oe/Math.max(1,H.oR),1.5)}),G=new Float32Array(Q*3),ye=new Float32Array(Q),Bi=new Float64Array(Q),cc=new Float32Array(Q),wu=!1,Be=new Float32Array(Q*3),tt=new Array(Q),nt=new Array(Q),ft=new Float32Array(Q).fill(1);let ue={};for(let H=0;H<Q;H++){let J=Fe[H],Ee=Tt[Ia[J.c]]||Ki[0]||Tt[0]||{color:gp,R:6,on:!0,reach:60,orbRings:1};nt[H]=Ee;let Te=Ee.color,ve,re;if(H===k)ve=34+Math.min(16,Math.log(1+J.inb)*4.5),re={kind:"core",anchor:null,r:0,y:0,sp:0,ph:0,inc:0},gp.toArray(Be,H*3);else if(J.k!=="raw"){let Se=(ue[Ee.key]=(ue[Ee.key]||0)+1)-1,Ae=Math.floor(Se/6),He=Se%6,Ke=(Ee.R||6)*3.2,Ve=((Ee.reach||Ke+40)-Ke)/Math.max(1,Ee.orbRings||1);ve=2.6+Math.log(1+J.inb)*1.55+Math.log(1+J.w/120)*.7;let ae=Ke+.5*Ve,me=Ke+(Ae+.5)*Ve,Xe=Yo(Ee.key+"#ecc"+Ae),Ye=Ke+(Ae+.5)*Ve+He%2*Ve*.16;re={kind:"wiki",anchor:Ee,r:Ye,ph:He/6*f+Ae*.62,sp:22e-5*Math.pow(ae/me,1.5),ecc:Math.min(.03+(Xe&1023)/1024*.13,.38*Ve/Math.max(1,Ye)),aop:(Xe>>>10&1023)/1024*f,inc:Math.max(.012,.11-Ae*.016),y:(He%3-1)*4,inner:Ke,step0:Ve,gapA:Ve-w*W.gap,inner0:Ke,r00:Ke+(Ae+.5)*Ve+He%2*Ve*.16},Te.toArray(Be,H*3)}else if(Ws[H]>=0){let Se=Ws[H],Ae=es[Se],He=Ae.indexOf(H);ve=1.05+Math.log(1+J.w/90)*.42;let Ke=2.6+Math.log(1+Fe[Se].inb)*1.55+Math.log(1+Fe[Se].w/120)*.7,Ve=Yo(J.p+"#ecc"),ae=Ke*3.4+He%4*Ke*1.15;re={kind:"moon",anchorNode:Se,ecc:Math.min(.02+(Ve&1023)/1024*.12,.38*Ke*1.15/Math.max(1,ae)),aop:(Ve>>>10&1023)/1024*f,pr:Ke,mk:He%4,r:Ke*3.4+He%4*Ke*1.15,ph:He/Math.max(3,Ae.length)*f,sp:.0016*Math.pow(3.4/(3.4+He%4*1.15),1.5),inc:-(((Yo(Fe[Se].p+"#r")&255)/255-.5)*.62)+((Ve>>>20&63)/64-.5)*.055,y:0},Te.clone().lerp(new Ce(16773328),.18).toArray(Be,H*3)}else ve=1.5+Math.log(1+J.w/90)*.5,re=pe[H],Te.toArray(Be,H*3);ye[H]=ve,re.r0=re.r,Bi[H]=re.ph||0,tt[H]=re}{let H=new Map;for(let Ee=0;Ee<Q;Ee++){let Te=tt[Ee];if(!Te||Te.kind==="core")continue;let ve=Te.kind==="moon"?"m"+Te.anchorNode:Te.kind==="wiki"?"w"+(Te.anchor&&Te.anchor.key):"a",re=H.get(ve)||0;H.set(ve,re+1),Te.sK=re}let J=new Map;H.forEach((Ee,Te)=>J.set(Te,Ee));for(let Ee=0;Ee<Q;Ee++){let Te=tt[Ee];if(!Te||Te.kind==="core")continue;let ve=Te.kind==="moon"?"m"+Te.anchorNode:Te.kind==="wiki"?"w"+(Te.anchor&&Te.anchor.key):"a";Te.sN=J.get(ve)||1,dM(Te,Te.sK)}}Pt=ye.slice(),_n=new Float32Array(Q*3),ts=new Float32Array(Q*3),ap=new Float32Array(Q);for(let H=0;H<Q;H++){let J=tt[H];ap[H]=J.kind==="core"?26:J.kind==="moon"?2.4+ye[J.anchorNode]*1.9:J.kind==="wiki"?2+(nt[H].R||6)*.9:1}Dn=new Float64Array(Q),dn=new Uint8Array(Q);let de=H=>{let J=/(\d{4})-(\d{2})-(\d{2})/.exec(H||"");return J?Date.UTC(+J[1],+J[2]-1,+J[3]):0};for(let H=0;H<Q;H++)Dn[H]=de(Fe[H].d);for(let H=0;H<Q;H++){if(Dn[H])continue;let J=0,Ee=Te=>{let ve=Dn[Te];ve&&(!J||ve<J)&&(J=ve)};(es[H]||[]).forEach(Ee),!J&&Xt[H]&&Xt[H].forEach(Ee),Dn[H]=J}Re.lo=1/0,Re.hi=-1/0;for(let H=0;H<Q;H++)Dn[H]&&(Dn[H]<Re.lo&&(Re.lo=Dn[H]),Dn[H]>Re.hi&&(Re.hi=Dn[H]));isFinite(Re.lo)||(Re.lo=0,Re.hi=0),Re.dated=0;for(let H=0;H<Q;H++)Dn[H]&&Re.dated++;yi=new Float64Array(Q),nn=new Float32Array(Q),Wn=!1;for(let H=0;H<Q;H++)yi[H]=+Fe[H].mt||0,yi[H]&&(Wn=!0);kg(),_t=Be.slice(),Re.u=0,Re.play=!1,Re.stage=-1,Re.marksFor=null,rn=new Float32Array(Q),xi=new Float32Array(Q).fill(1),hi=new Float32Array(Q);{let H=Math.max(1,Re.hi-Re.lo),J=new Float64Array(Q);for(let re=0;re<Q;re++)J[re]=Dn[re]||Re.lo+(Q>1?re/(Q-1):0)*H;lc=[];for(let re=0;re<Q;re++)re!==k&&lc.push(re);lc.sort((re,Se)=>J[re]-J[Se]||re-Se);let Ee=lc.length,Te=Dg-fp;lc.forEach((re,Se)=>{let Ae=Ee>1?Se/(Ee-1):0,He=(J[re]-Re.lo)/H;rn[re]=fp+Te*(Ae*.66+He*.34)}),k>=0&&k<Q&&(rn[k]=.052),Tt.forEach(re=>{re.genT=1});for(let re=0;re<Q;re++){if(re===k)continue;let Se=nt[re];Se&&rn[re]<Se.genT&&(Se.genT=rn[re])}Tt.forEach(re=>{re.genT=re.genT>=1?fp:Math.max(.078,re.genT-.014)});for(let re=0;re<Q;re++){if(re===k)continue;tt[re].kind==="wiki"&&nt[re]&&(rn[re]=Math.max(rn[re],nt[re].genT+.006))}for(let re=0;re<Q;re++){let Se=tt[re];Se.kind==="moon"&&(rn[re]=Math.max(rn[re],rn[Se.anchorNode]+.009))}for(let re=0;re<Q;re++)rn[re]=Math.min(rn[re],Dg);let ve=Kn.length;Ho=new Float32Array(Math.max(1,ve));for(let re=0;re<ve;re++){let Se=Kn[re][0],Ae=Kn[re][1],He=Math.max(rn[Se]||0,rn[Ae]||0);Ho[re]=Math.min(.995,He+(.965-He)*.34+re%11*.0016)}}Vo.clear(),Fu=-1}function Og(o){let u=Xt[o]?Xt[o].size:0,p=es[o]?es[o].length:0,v=0;return Xt[o]&&Xt[o].forEach(b=>{v+=es[b].length}),{links:u,moons:p,far:v}}let Br=d("gl"),Vt=new Jt({canvas:Br,antialias:!0,alpha:!1,powerPreference:"high-performance"});Vt.setPixelRatio(Math.min(devicePixelRatio,2)),Vt.setClearColor(132106,1),Vt.outputEncoding=Pa,Vt.info.autoReset=!1;let fe={ok:!1,rt:null,a:null,a2:null,a3:null,b:null,c:null,bright:null,blur:null,comp:null,ray:null,quad:null,cam:null,scene:null,w:0,h:0},c1=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,h1=`
uniform sampler2D tSrc; uniform float uThresh; uniform float uKnee;
varying vec2 vUv;
void main(){
  vec3 c = min(texture2D(tSrc, vUv).rgb, vec3(3.0));
  float l = max(c.r, max(c.g, c.b));
  float k = smoothstep(uThresh, uThresh + uKnee, l);
  /* ---- only the part that is over, not the whole pixel ----
     The mask alone was the bug that kept this switched off by default, and
     it took turning it on over a real vault to see it. "c * k" passes the
     *entire* pixel once it crosses, so a mid-grey region that gets over the
     line contributes all of itself \u2014 and the sky is full of exactly that:
     the galaxy's band, a nebula complex, the dust disk, four thousand
     starfield points. None of them is bright, all of them are over, and
     three chained blurs spread their sum across the whole frame. What came
     out was empty space lifted to grey \u2014 the one thing this picture cannot
     have, and worse the further the effect was turned up.

     What a lens actually spills is the light in excess of what the sensor
     could hold, so subtract the threshold rather than gate on it. A pixel
     just over the line now contributes almost nothing and a star's core
     still contributes most of itself, which is the difference between
     veiling glare and a grey wash. The knee stays on top of it, doing the
     job it was always for: no visible edge where the two regimes meet. */
  float over = max(l - uThresh, 0.0);
  gl_FragColor = vec4(c * (k * over / max(l, 1e-4)), 1.0);
}`,u1=`
uniform sampler2D tSrc; uniform vec2 uDir;
varying vec2 vUv;
void main(){
  vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
  s += texture2D(tSrc, vUv + uDir * 1.3846153846).rgb * 0.3162162162;
  s += texture2D(tSrc, vUv - uDir * 1.3846153846).rgb * 0.3162162162;
  s += texture2D(tSrc, vUv + uDir * 3.2307692308).rgb * 0.0702702703;
  s += texture2D(tSrc, vUv - uDir * 3.2307692308).rgb * 0.0702702703;
  gl_FragColor = vec4(s, 1.0);
}`,d1=`
uniform sampler2D tSrc; uniform vec2 uSun; uniform float uDecay, uWeight;
varying vec2 vUv;
void main(){
  vec2 uv = vUv;
  /* not named "step": that is a built-in, and a variable shadowing one is
     legal GLSL that some drivers still refuse to compile */
  vec2 dlt = (uv - uSun) * 0.0355;
  float ill = 1.0;
  vec3 s = vec3(0.0);
  for (int i = 0; i < 24; i++) {
    uv -= dlt;
    s += texture2D(tSrc, clamp(uv, 0.0, 1.0)).rgb * ill;
    ill *= uDecay;
  }
  /* the far side of the frame is not lit by a source at the near side */
  float fall = clamp(1.0 - length(vUv - uSun) * 0.62, 0.0, 1.0);
  gl_FragColor = vec4(s * uWeight * fall * fall, 1.0);
}`,f1=`
uniform sampler2D tSrc; uniform vec2 uRes;
varying vec2 vUv;
float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
void main(){
  vec2 px = 1.0 / uRes;
  vec3 rgbM = texture2D(tSrc, vUv).rgb;
  float lM  = luma(rgbM);
  float lNW = luma(texture2D(tSrc, vUv + vec2(-1.0, -1.0) * px).rgb);
  float lNE = luma(texture2D(tSrc, vUv + vec2( 1.0, -1.0) * px).rgb);
  float lSW = luma(texture2D(tSrc, vUv + vec2(-1.0,  1.0) * px).rgb);
  float lSE = luma(texture2D(tSrc, vUv + vec2( 1.0,  1.0) * px).rgb);
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
  float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < max(0.0312, lMax * 0.125)) { gl_FragColor = vec4(rgbM, 1.0); return; }
  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
  float dirReduce = max((lNW + lNE + lSW + lSE) * 0.03125, 0.0078125);
  float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
  dir = clamp(dir * rcp, -8.0, 8.0) * px;
  vec3 rgbA = 0.5 * (texture2D(tSrc, vUv + dir * (1.0 / 3.0 - 0.5)).rgb
                   + texture2D(tSrc, vUv + dir * (2.0 / 3.0 - 0.5)).rgb);
  vec3 rgbB = rgbA * 0.5 + 0.25 * (texture2D(tSrc, vUv + dir * -0.5).rgb
                                 + texture2D(tSrc, vUv + dir *  0.5).rgb);
  float lB = luma(rgbB);
  gl_FragColor = vec4((lB < lMin || lB > lMax) ? rgbA : rgbB, 1.0);
}`,p1=`
uniform sampler2D tSrc; uniform vec2 uRes;
varying vec2 vUv;
vec3 chroma(vec2 uv, vec2 dir, float amt) {
  return vec3(texture2D(tSrc, uv + dir * amt).r,
              texture2D(tSrc, uv).g,
              texture2D(tSrc, uv - dir * amt).b);
}
void main(){
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  vec2 uv = 1.0 - vUv;
  vec2 toC = (0.5 - uv);
  vec2 dir = normalize(toC * asp + 1e-5);
  vec3 acc = vec3(0.0);
  vec2 g = uv;
  const float spacing = 0.30;
  /* Every ghost lies on the line through the middle of the frame, so a
     source *at* the middle has all four of them stacked on top of itself \u2014
     and what they sample is the widest bloom stage, which a bright disc has
     saturated into the shape of the blur's own square kernel. The sun framed
     dead centre, which is how the vault opens, wore a rounded white square.
     A real lens's ghosts of an on-axis source are lost in the source anyway,
     so they fade out over the middle of the frame and are untouched past
     it. */
  float centre = smoothstep(0.04, 0.30, length(toC * asp));
  vec3 tints[4];
  tints[0] = vec3(0.55, 0.85, 1.00);
  tints[1] = vec3(0.70, 1.00, 0.75);
  tints[2] = vec3(1.00, 0.75, 0.55);
  tints[3] = vec3(0.80, 0.65, 1.00);
  for (int i = 0; i < 4; i++) {
    g = uv + toC * spacing * float(i);
    float w = pow(max(0.0, 1.0 - length((0.5 - g) * asp) / 0.75), 5.0);
    acc += chroma(g, dir, 0.004 + 0.003 * float(i)) * w * centre * tints[i] * (0.9 - 0.15 * float(i));
  }
  /* the halo: the source seen at a fixed angle off the axis, brightest
     where the ring crosses the frame's own middle distance */
  vec2 hv = dir * 0.36 / asp;
  vec2 hp = uv + hv;
  float hw = pow(max(0.0, 1.0 - abs(length((0.5 - hp) * asp) - 0.36) / 0.09), 3.0);
  acc += chroma(hp, dir, 0.010) * hw * vec3(0.75, 0.85, 1.0) * 0.9;
  gl_FragColor = vec4(acc, 1.0);
}`,m1=`
uniform sampler2D tSrc; uniform vec2 uDir; uniform vec3 uTint;
varying vec2 vUv;
void main(){
  vec3 s = vec3(0.0);
  float wsum = 0.0;
  for (int i = -8; i <= 8; i++) {
    float w = 1.0 - abs(float(i)) / 9.0;
    s += texture2D(tSrc, vUv + uDir * float(i)).rgb * w;
    wsum += w;
  }
  gl_FragColor = vec4(s / wsum * uTint, 1.0);
}`,g1=`
uniform sampler2D tScene; uniform sampler2D tRay;
uniform sampler2D tB1; uniform sampler2D tB2; uniform sampler2D tB3;
uniform sampler2D tFlare; uniform sampler2D tAnam; uniform sampler2D tNoise;
uniform float uAmt, uRay, uFlare;
uniform float uCurve, uSplit, uLens, uGrain, uTime, uExpo;
uniform vec2 uRes;
varying vec2 vUv;
void main(){
  vec2 d = vUv - 0.5;
  /* ---- the lens, and why half of it is up here ----
     A real lens cannot bring three wavelengths to the same ring of glass, so
     the corners of every photograph have colour separating in them and the
     centre does not. The separation is cubic in radius rather than linear:
     it is nothing at all across the middle half of the frame and then
     arrives quickly, which is what keeps it reading as glass rather than as
     a broken decoder.

     It samples the *scene*, before the bloom is added, because that is where
     a lens sits \u2014 light goes through the glass and then into the sensor, and
     the glow is something the sensor does. Doing it at the end would put the
     fringe on the bloom's own edges, which are already soft and have no
     edges to fringe. The other half of the lens \u2014 the vignette \u2014 is at the
     bottom for the same reason in reverse: falloff is the aperture cutting
     light, so it takes everything with it. */
  vec3 c;
  if (uLens > 0.001) {
    vec2 off = d * dot(d, d) * uLens * 0.0035;
    c = vec3(texture2D(tScene, vUv + off).r,
             texture2D(tScene, vUv).g,
             texture2D(tScene, vUv - off).b);
  } else c = texture2D(tScene, vUv).rgb;
  /* ---- three widths, added ----
     The chain used to keep only its last and widest stage, and a chain of
     gaussians is a gaussian: a soft round mound with nothing outside it.
     That is not what a lens does. Veiling glare is a power law \u2014 the same
     one the star's own glare sprite is drawn from, because it is the same
     physics \u2014 and a power law has a bright centre *and* a tail that carries
     a long way, which is exactly what a single gaussian of any width cannot
     have at once. Widen it and the core goes soft; tighten it and the light
     stops at the object.

     A sum of gaussians of increasing width is the standard way to build one,
     and the chain was already computing them: it just threw the first two
     away. Keeping all three costs two render targets and nothing in passes.
     The weights sum to one, so the total light added is what it always was
     and only its distribution has moved \u2014 a hot centre, a soft middle, and a
     spill that reaches across the frame. */
  /* The widest stage separates by colour toward the corners: the spill
     that travelled furthest through the glass is the spill the glass has
     dispersed most, red outside and blue inside, which is what the rim of
     a real glare looks like. The tight stages stay put. */
  vec2 rd = d * 0.018 * uFlare;
  vec3 b3 = vec3(texture2D(tB3, vUv + rd).r, texture2D(tB3, vUv).g, texture2D(tB3, vUv - rd).b);
  vec3 spill = texture2D(tB1, vUv).rgb * 0.34
             + texture2D(tB2, vUv).rgb * 0.30
             + b3 * 0.36;
  /* the front element is not clean. Two octaves of the sky's own noise,
     multiplied, so the smudges are sparse and sharp-edged, and they catch
     the spill and nothing else: a dark frame stays dark. */
  float dirt = texture2D(tNoise, vUv * vec2(2.6, 1.5) + 0.13).r
             * texture2D(tNoise, vUv * vec2(0.9, 0.6) + 0.71).g;
  dirt = smoothstep(0.30, 0.62, dirt);
  c += spill * uAmt * (1.0 + dirt * uFlare * 2.6);
  c += texture2D(tRay,   vUv).rgb * uRay;
  c += (texture2D(tFlare, vUv).rgb + texture2D(tAnam, vUv).rgb) * uFlare;
  /* ---- the exposure ----
     Everything that reached the sensor, scaled by how long the shutter was
     open. Before the curve, because the curve is the sensor's shoulder and
     the shoulder is what a longer exposure runs into; after the glow and
     the shafts, because they are light too and a camera cannot open up on
     the scene without opening up on the glare. One for a frame with a
     source in it \u2014 see exposureStep. */
  c *= uExpo;
  /* ---- the curve ----
     Everything above is additive, and additive light in an eight-bit buffer
     ends at 1.0 whether it arrived there gently or at four times over. That
     hard stop is the single thing that made this read as rendered: a star
     core, a dense knot of links and the sun's own disc all clip to the same
     flat white, and a flat white patch is paint, not light. A sensor has a
     shoulder instead \u2014 the brighter it gets the less each further photon
     moves it, so highlights keep their shape all the way up.

     Below the knee nothing happens at all. That is the point of doing it
     this way rather than with one of the filmic curves that lift the blacks
     as well: the dark here is not a lack of exposure, it is empty space, and
     a curve that greys it out is describing a room with the lights off.
     The shoulder is exponential, which is the one shape that meets the
     straight part with the same slope \u2014 so there is no visible seam at the
     knee for something drifting across it to pop through.

     It cannot reach 1.0, only approach it, so the clip is gone rather than
     moved: no amount of light coming in produces a flat patch going out. */
  if (uCurve > 0.001) {
    /* ---- the film ----
       The shoulder used to be an exponential above a knee, which kept the
       dark untouched and folded the top. It is the ACES fitted curve now
       (Narkowicz 2015), the response the film industry standardised on
       because it is the closest short formula to how a print reacts:
       a toe that keeps black black, a straight middle, and a shoulder that
       takes four times over-exposure to a highlight with shape. It is
       applied to the half-float signal, which is what it was made for, and
       the knob is still how far toward it the picture goes. */
    const float A = 2.51, B = 0.03, C = 2.43, D = 0.59, E = 0.14;
    vec3 x = c * 0.92;
    vec3 film = clamp((x * (A * x + B)) / (x * (C * x + D) + E), 0.0, 1.0);
    c = mix(c, film, uCurve);
    vec3 k = vec3(0.72);
    vec3 over = max(c - k, 0.0);
    /* min(c, k) and not k. Below the knee "over" is zero, so the shoulder
       term is zero and the whole expression is whatever the straight part
       says \u2014 which has to be the pixel itself, and was the knee. Every value
       under 0.72 came out *at* 0.72 and was then mixed back toward itself by
       uCurve, so empty space at rgb(3,5,12) left this at rgb(72,73,77): the
       curve that was written to leave the blacks alone was lifting them, and
       the further it was turned up the greyer the sky got.

       It never showed because the knob shipped at zero. Turning the grade on
       by default is what found it, which is the argument for shipping the
       look you mean people to see rather than the one that cannot be wrong.

       Both halves have slope one where they meet \u2014 d/dc of min(c,k) is 1
       below and 0 above, and the shoulder's is 0 below and 1 at the knee \u2014
       so the join is still seamless, which is the property the exponential
       was chosen for. */
    vec3 rolled = min(c, k) + (1.0 - k) * (1.0 - exp(-over / (1.0 - k)));
    c = mix(c, rolled, uCurve);
  }
  /* ---- the ceiling ----
     The scene buffer is half float now, so light arrives here above 1.0,
     and the curve at less than full strength leaves some of that through.
     A second shoulder, high and always on: nothing under 0.86 is touched,
     and nothing coming in produces a flat patch going out \u2014 a core at four
     lands under a core at two, which is the point of having the bits. The
     same exponential as the curve, so the join has slope one. */
  {
    vec3 k2 = vec3(0.86);
    vec3 ov = max(c - k2, 0.0);
    c = min(c, k2) + (1.0 - k2) * (1.0 - exp(-ov / (1.0 - k2)));
  }
  /* ---- the split ----
     Shadows cold, highlights warm. Every emulsion ever made does this and
     every colourist since has kept doing it, because the eye reads warm-near
     and cool-far without being told \u2014 it is the same inference it makes
     about a fire in a blue dusk, and it separates two things at the same
     distance on the screen into two distances in the head.

     A multiply rather than a mix toward a colour, so it cannot add light to
     something that has none. Empty space has luminance zero, gets a tint of
     one times zero, and stays exactly as black as it was. */
  if (uSplit > 0.001) {
    float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    vec3 tint = mix(vec3(0.90, 0.97, 1.10), vec3(1.09, 1.01, 0.90),
                    smoothstep(0.05, 0.62, lum));
    c *= mix(vec3(1.0), tint, uSplit);
  }
  /* ---- the lens, part two: the falloff ----
     Quadratic and quartic together rather than either alone. The quadratic
     term is the gentle darkening across the whole frame that nobody notices
     and everybody feels; the quartic only arrives in the corners, which is
     where a real aperture actually runs out of glass. One term on its own is
     either a barely-there wash or a black ring. */
  if (uLens > 0.001) {
    float r2 = dot(d, d);
    c *= 1.0 - uLens * (r2 * 0.34 + r2 * r2 * 0.55);
  }
  /* ---- the grain ----
     A floor of noise, and it is here to stop banding rather than to be seen.
     A dark gradient across eight bits is a staircase of flat steps, and the
     steps are exactly what the eye is best at finding; a little noise makes
     the boundary between two levels a dithered edge instead of a line, and
     the picture reads as having more levels than it has.

     Strongest in the shadows and gone by the highlights \u2014 which is both
     where the banding is and, as it happens, where film's own grain shows.
     Signed and centred on zero, so it dithers rather than fogs: the average
     of the noise is nothing added, which keeps empty space empty.

     Scaled by the pixel grid rather than by the uv, so the grain is the same
     size on a small window and a large one instead of being stretched into
     blotches, and moved by the clock so it is film rather than a dirty
     sensor \u2014 a static pattern reads as something wrong with the screen. */
  if (uGrain > 0.001) {
    float n = fract(sin(dot(vUv * uRes + uTime, vec2(12.9898, 78.233))) * 43758.5453);
    float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c += (n - 0.5) * uGrain * 0.048 * (1.0 - smoothstep(0.0, 0.60, lum));
  }
  gl_FragColor = vec4(c, 1.0);
}`,v1=`
uniform sampler2D tSrc; uniform vec2 uCell;
varying vec2 vUv;
void main(){
  vec2 o = floor(vUv / uCell) * uCell;
  float s = 0.0, m = 0.0;
  for (int y = 0; y < 8; y++)
    for (int x = 0; x < 8; x++) {
      vec2 uv = o + uCell * (vec2(float(x), float(y)) + 0.5) / 8.0;
      vec3 c = texture2D(tSrc, uv).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      s += l; m = max(m, l);
    }
  gl_FragColor = vec4(m, s / 64.0, 0.0, 1.0);
}`,Ui={gain:1,target:1,buf:new Uint8Array(16*16*4),at:0,lastT:0};function y1(o){let u=W.aex;if(u<=.02||!fe.probe){Ui.gain=Ui.target=1;return}let p=Math.min(.1,(o-(Ui.lastT||o))*.001);if(Ui.lastT=o,!(Ui.at++&3)){fe.probe.uniforms.tSrc.value=fe.rt.texture,rs(fe.probe,fe.pr),Vt.readRenderTargetPixels(fe.pr,0,0,16,16,Ui.buf);let v=0;for(let E=0;E<256;E++)Ui.buf[E*4]>v&&(v=Ui.buf[E*4]);let b=v/255;Ui.target=g(.62/Math.max(b,.01),1,1+2.4*u)}Ui.gain=y(Ui.gain,Ui.target,1-Math.exp(-p/.9))}function x1(){if(fe.scene)return;let o=u=>new mn({vertexShader:c1,fragmentShader:u,depthTest:!1,depthWrite:!1,uniforms:{}});fe.bright=o(h1),fe.bright.uniforms={tSrc:{value:null},uThresh:{value:.48},uKnee:{value:.4}},fe.blur=o(u1),fe.blur.uniforms={tSrc:{value:null},uDir:{value:new _e}},fe.ray=o(d1),fe.ray.uniforms={tSrc:{value:null},uSun:{value:new _e(.5,.5)},uDecay:{value:.945},uWeight:{value:.052}},fe.comp=o(g1),fe.comp.uniforms={tScene:{value:null},tRay:{value:null},tB1:{value:null},tB2:{value:null},tB3:{value:null},tFlare:{value:null},tAnam:{value:null},tNoise:{value:null},uAmt:{value:.6},uRay:{value:0},uFlare:{value:0},uCurve:{value:0},uSplit:{value:0},uLens:{value:0},uGrain:{value:0},uTime:{value:0},uExpo:{value:1},uRes:{value:new _e(1,1)}},fe.flare=o(p1),fe.flare.uniforms={tSrc:{value:null},uRes:{value:new _e(1,1)}},fe.anam=o(m1),fe.anam.uniforms={tSrc:{value:null},uDir:{value:new _e},uTint:{value:new L(.45,.68,1).multiplyScalar(.5)}},fe.fxaa=o(f1),fe.fxaa.uniforms={tSrc:{value:null},uRes:{value:new _e(1,1)}},fe.probe=o(v1),fe.probe.uniforms={tSrc:{value:null},uCell:{value:new _e(1/16,1/16)}},fe.pr=new Cn(16,16,{minFilter:Ln,magFilter:Ln,format:oi,depthBuffer:!1,stencilBuffer:!1}),fe.quad=new wt(new $r(2,2),fe.bright),fe.quad.frustumCulled=!1,fe.scene=new Hs,fe.scene.add(fe.quad),fe.cam=new Fs}function zg(o,u){if(x1(),fe.w===o&&fe.h===u&&fe.rt)return;[fe.rt,fe.a,fe.a2,fe.a3,fe.b,fe.c,fe.f,fe.g,fe.out].forEach(E=>{E&&E.dispose()}),fe.hdr=!!(Vt.capabilities&&Vt.capabilities.isWebGL2);let p={minFilter:qt,magFilter:qt,format:oi,depthBuffer:!0,stencilBuffer:!1,type:fe.hdr?vo:Ca};fe.rt=new Cn(o,u,p),fe.rt.texture.encoding=Pa;let v=Math.max(1,o>>1),b=Math.max(1,u>>1);fe.a=new Cn(v,b,Object.assign({depthBuffer:!1},p)),fe.a2=new Cn(v,b,Object.assign({depthBuffer:!1},p)),fe.a3=new Cn(v,b,Object.assign({depthBuffer:!1},p)),fe.b=new Cn(v,b,Object.assign({depthBuffer:!1},p)),fe.c=new Cn(v,b,Object.assign({depthBuffer:!1},p)),fe.f=new Cn(v,b,Object.assign({depthBuffer:!1},p)),fe.g=new Cn(v,b,Object.assign({depthBuffer:!1},p)),fe.out=new Cn(o,u,{minFilter:qt,magFilter:qt,format:oi,depthBuffer:!1,stencilBuffer:!1}),fe.w=o,fe.h=u,fe.ok=!0,[fe.a,fe.a2,fe.a3,fe.b,fe.c,fe.f,fe.g].forEach(E=>{Vt.setRenderTarget(E),Vt.clear()}),Vt.setRenderTarget(null)}function rs(o,u){fe.quad.material=o,Vt.setRenderTarget(u),Vt.clear(),Vt.render(fe.scene,fe.cam)}let vp=new L;function w1(){return!Q||!zt||!zt.visible||(vp.copy(zt.position).project(Ue),vp.z>1)?null:vp}function yp(){Vt.info.reset();let o=W.blm,u=W.ray>.02?w1():null,p=0;if(u){let T=g(1.9-Math.max(Math.abs(u.x),Math.abs(u.y)),0,1),P=g(Ue.position.distanceTo(zt.position)/((ye[k]||17)*34)-.12,0,1);p=W.ray*T*P*P}let v=Math.max(W.cur,W.spl,W.len,W.grn,W.aex);if(o<=.02&&p<=.02&&v<=.02||!fe.ok)return Vt.setRenderTarget(null),Vt.render(Dt,Ue),!1;Vt.setRenderTarget(fe.rt),Vt.clear(),Vt.render(Dt,Ue),y1(performance.now());let b=o>.02||p>.02;if(b){fe.bright.uniforms.tSrc.value=fe.rt.texture,rs(fe.bright,fe.a);let T=fe.a.width,P=fe.a.height,I=[1,3,7],D=[fe.a,fe.a2,fe.a3],R=fe.a;for(let F=0;F<I.length;F++){let z=I[F];fe.blur.uniforms.tSrc.value=R.texture,fe.blur.uniforms.uDir.value.set(z/T,0),rs(fe.blur,fe.b),fe.blur.uniforms.tSrc.value=fe.b.texture,fe.blur.uniforms.uDir.value.set(0,z/P),rs(fe.blur,D[F]),R=D[F]}}let E=b&&W.flr>.02?W.flr:0;if(E>0){let T=fe.a.width,P=fe.a.height;fe.flare.uniforms.tSrc.value=fe.a3.texture,fe.flare.uniforms.uRes.value.set(T,P),rs(fe.flare,fe.f),fe.anam.uniforms.tSrc.value=fe.a.texture,fe.anam.uniforms.uDir.value.set(2.2/T,0),rs(fe.anam,fe.b),fe.anam.uniforms.tSrc.value=fe.b.texture,fe.anam.uniforms.uDir.value.set(7/T,0),rs(fe.anam,fe.g)}p>.02&&(fe.ray.uniforms.tSrc.value=fe.a3.texture,fe.ray.uniforms.uSun.value.set(u.x*.5+.5,u.y*.5+.5),rs(fe.ray,fe.c));let w=fe.comp.uniforms;return w.tScene.value=fe.rt.texture,w.tB1.value=fe.a.texture,w.tB2.value=fe.a2.texture,w.tB3.value=fe.a3.texture,w.tRay.value=fe.c.texture,w.uAmt.value=b?o:0,w.uRay.value=p>.02?p:0,w.tFlare.value=fe.f.texture,w.tAnam.value=fe.g.texture,w.tNoise.value=Mp(),w.uFlare.value=E,w.uCurve.value=W.cur,w.uSplit.value=W.spl,w.uLens.value=W.len,w.uGrain.value=W.grn,w.uExpo.value=Ui.gain,w.uTime.value=performance.now()*.001%100,w.uRes.value.set(fe.w||1,fe.h||1),rs(fe.comp,fe.out),fe.fxaa.uniforms.tSrc.value=fe.out.texture,fe.fxaa.uniforms.uRes.value.set(fe.w||1,fe.h||1),fe.quad.material=fe.fxaa,Vt.setRenderTarget(null),Vt.render(fe.scene,fe.cam),!0}let Dt=new Hs;Dt.fog=new yo(132106,26e-5);let Ue=new Rn(52,1,.6,4e4),b1=`
attribute float aSide;
attribute vec3 aColor;
varying vec3 vCol;
varying float vS;
varying float vZ;
void main(){
  vCol = aColor; vS = aSide;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vZ = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,Ug=2.2,_1=`
uniform float uOpacity, uFogD;
varying vec3 vCol;
varying float vS;
varying float vZ;
void main(){
  /* distance across the ribbon in units of the half-width that was asked
     for, so s = 1.0 is the edge of the line the knob describes and the strip
     itself runs out at s = RIB_PAD */
  float s = abs(vS) * ${Ug.toFixed(3)};
  /* flat-topped, and through half at s = 1: a sixth power is square enough
     to read as a line with an edge rather than as a smear with a middle */
  float core  = 1.0 / (1.0 + pow(s, 6.0));
  float glare = exp(-s * s * 0.55);
  float a = (core * ${.4181.toFixed(4)} + glare * ${.2832.toFixed(4)}) * uOpacity;
  /* the pad is there for the glare to fall off inside, not to be shaded to
     the last thousandth: past this the fragment costs more than it shows */
  if (a < 0.0015) discard;
  float f = clamp(1.0 - exp(-uFogD * uFogD * vZ * vZ), 0.0, 1.0);
  gl_FragColor = vec4(vCol * a * (1.0 - f), 1.0);
}`,_c=[];function xp(o){let u=new mn({uniforms:{uOpacity:{value:o},uFogD:{value:0}},vertexShader:b1,fragmentShader:_1,transparent:!0,depthWrite:!1,blending:Ut,side:ri});return _c.push(u),u}function M1(){let o=Dt.fog?Dt.fog.density:0;for(let u=0;u<_c.length;u++)_c[u].uniforms.uFogD.value=o}function wp(o,u){let p=o*u*2,v=new Float32Array(p*3),b=new Float32Array(p*3),E=new Float32Array(p);for(let D=0;D<p;D++)E[D]=D&1?1:-1;let w=p>65535?Uint32Array:Uint16Array,T=new w(o*(u-1)*6),P=0;for(let D=0;D<o;D++){let R=D*u*2;for(let F=0;F<u-1;F++){let z=R+F*2;T[P++]=z,T[P++]=z+1,T[P++]=z+2,T[P++]=z+1,T[P++]=z+3,T[P++]=z+2}}let I=new it;return I.setAttribute("position",new Ze(v,3)),I.setAttribute("aColor",new Ze(b,3)),I.setAttribute("aSide",new Ze(E,1)),I.setIndex(new Ze(T,1)),{geo:I,pos:v,col:b,verts:p,perStrip:u*2,idxPerStrip:(u-1)*6}}function Nu(o,u,p,v,b,E,w,T,P,I,D,R,F,z,Y,U){let ee=T*R-P*D,oe=P*I-w*R,ue=w*D-T*I,de=Math.sqrt(ee*ee+oe*oe+ue*ue),H=F*Ug;if(de>1e-9){let Ee=H/de;ee*=Ee,oe*=Ee,ue*=Ee}else ee=H,oe=0,ue=0;let J=p*3;o[J]=v-ee,o[J+1]=b-oe,o[J+2]=E-ue,u[J]=z,u[J+1]=Y,u[J+2]=U,o[J+3]=v+ee,o[J+4]=b+oe,o[J+5]=E+ue,u[J+3]=z,u[J+4]=Y,u[J+5]=U}let E1=()=>W.lwd/Ht.lwd,S1=new Do(4219007,.13);Dt.add(S1);let Hu=new Co(16767392,.55,0,1.6);Hu.position.set(0,0,0),Dt.add(Hu);let bp=new Aa(7851263,.12);bp.position.set(1,.6,.4),Dt.add(bp);let Gg=new Aa(2375775,.06);Gg.position.set(-.6,-.8,-.3),Dt.add(Gg);let T1=1.55;function Vg(o,u){o.vertexShader=(u?`attribute vec4 aStar; attribute vec4 aStarCol; attribute vec4 aOcc; attribute float aOccS; attribute vec4 aRingS;
`:`uniform vec4 uStar; uniform vec4 uStarCol; uniform vec4 uOcc; uniform float uOccS; uniform vec4 uRingS;
`)+`varying vec4 vStar; varying vec4 vStarCol; varying vec4 vOcc; varying float vOccS;
varying vec4 vRingS; varying vec3 vCen;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+(u?`  vStar = vec4((viewMatrix * modelMatrix * vec4(aStar.xyz, 1.0)).xyz, aStar.w);
  vStarCol = aStarCol;
  vOcc = vec4((viewMatrix * modelMatrix * vec4(aOcc.xyz, 1.0)).xyz, aOcc.w);
  vOccS = aOccS;
  vRingS = vec4(normalize(mat3(viewMatrix) * mat3(modelMatrix) * aRingS.xyz), aRingS.w);
  vCen = (modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;`:`  vStar = vec4((viewMatrix * vec4(uStar.xyz, 1.0)).xyz, uStar.w);
  vStarCol = uStarCol;
  vOcc = vec4((viewMatrix * vec4(uOcc.xyz, 1.0)).xyz, uOcc.w);
  vOccS = uOccS;
  vRingS = vec4(normalize(mat3(viewMatrix) * uRingS.xyz), uRingS.w);
  vCen = (modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;`)),o.fragmentShader=`varying vec4 vStar; varying vec4 vStarCol; varying vec4 vOcc; varying float vOccS;
varying vec4 vRingS; varying vec3 vCen;
vec3 sDir; float sInt; vec3 sTint;
float rBand(float x, float a, float b){
  return smoothstep(a - 0.010, a + 0.010, x) * (1.0 - smoothstep(b - 0.010, b + 0.010, x));
}
float ringTrans(float x){
  if (x < 0.99 || x > 1.84) return 1.0;
  float o = 0.10 * rBand(x, 1.000, 1.232)
          + 0.78 * rBand(x, 1.232, 1.574)
          + 0.08 * rBand(x, 1.574, 1.634)
          + 0.39 * rBand(x, 1.634, 1.830);
  return 1.0 - clamp(o, 0.0, 0.86);
}
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
  {
    vec3 lv = vStar.xyz - geometry.position;
    float ld2 = dot(lv, lv);
    sDir = lv * inversesqrt(max(ld2, 1e-6));
    float s2 = max(vStar.w * vStar.w, 1e-3);
    sInt = `+T1.toFixed(2)+` / (1.0 + ld2 / s2);
    sTint = vec3(1.0);
    if (vRingS.w > 0.0) {
      float dn = dot(sDir, vRingS.xyz);
      if (abs(dn) > 1e-4) {
        vec3 rel = geometry.position - vCen;
        float tt = -dot(rel, vRingS.xyz) / dn;
        if (tt > 0.0) sInt *= ringTrans(length(rel + sDir * tt) / vRingS.w);
      }
    }
    if (vOcc.w > 0.0) {
      vec3 oc = vOcc.xyz - geometry.position;
      float ot = dot(oc, sDir);
      if (ot > 0.0) {
        float od = length(oc - sDir * ot);
        float oD = max(length(vStar.xyz - vOcc.xyz), 1e-3);
        float ru = max(vOcc.w - ot * (vOccS - vOcc.w) / oD, 0.0);
        float rp = max(vOcc.w + ot * (vOccS + vOcc.w) / oD, ru + 1e-4);
        float ec = smoothstep(ru, rp, od);
        sInt *= mix(0.055, 1.0, ec);
        sTint = mix(vec3(1.0, 0.33, 0.11), vec3(1.0), ec);
      }
    }
    IncidentLight sl;
    sl.direction = sDir;
    sl.color = vStarCol.rgb * sTint * sInt;
    if (mRock > 0.5) {
      float mu0 = max(dot(geometry.normal, sDir), 0.0);
      float muv = max(dot(geometry.normal, geometry.viewDir), 0.0);
      sl.color *= clamp(2.0 / max(mu0 + muv, 0.30), 0.0, 2.4);
    }
    sl.visible = true;
    RE_Direct(sl, geometry, material, reflectedLight);
  }`),o.fragmentShader=o.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 nn = normalize(normal);
    vec3 vv = normalize(vViewPosition);
    float fr = pow(1.0 - max(dot(nn, vv), 0.0), 3.0);
    float mul = dot(nn, sDir);
    float day = smoothstep(-0.30, 0.45, mul);
    const vec3 BR = vec3(0.176, 0.410, 1.000);
    float mass = max(1.0, min(1.0 / max(mul + 0.14, 0.05), 10.0));
    vec3 tr = exp(-BR * (mass - 1.0) * 0.42);
    float cth = clamp(dot(-sDir, vv), -1.0, 1.0);
    float phR = 0.75 * (1.0 + cth * cth);
    float den = 1.5776 - 1.52 * cth;
    float phM = min(0.06 * 0.4224 / max(den * sqrt(max(den, 1e-4)), 0.01), 2.2);
    vec3 air = BR * phR * 0.62 + vec3(0.86, 0.90, 1.0) * phM;
    air = (air * tr + diffuseColor.rgb * 0.22) * sTint;
    outgoingLight += air * fr * day * sInt * vStarCol.a * 1.5;
  }
#include <output_fragment>`)}let _p,Mc,A1=new Ce(16767392);function Bu(o,u,p,v){if(At&&$.has.has(o)){v[0]=$.anchor.x,v[1]=$.anchor.y,v[2]=$.anchor.z,v[3]=Oc[0]*W.szPl;return}let b=_p[o];b?(v[0]=b.pos.x,v[1]=b.pos.y,v[2]=b.pos.z,v[3]=Mc[o]*u):k>=0?(v[0]=G[k*3],v[1]=G[k*3+1],v[2]=G[k*3+2],v[3]=Mc[o]*p):(v[0]=v[1]=v[2]=0,v[3]=Mc[o]*p)}let R1=`
attribute float aSize; attribute vec3 aColor; attribute float aAlpha;
attribute float aPhase;
varying vec3 vC; varying float vA; varying float vF;
uniform float uScale; uniform float uTime; uniform float uTwinkle;
uniform float uFlare; uniform float uBright; uniform float uMinPx;
void main(){
  float tw = 1.0 + uTwinkle * 0.42 * sin(uTime * 1.35 + aPhase * 63.0);
  vC = aColor;
  vA = aAlpha * tw * uBright;
  vF = uFlare;
  vec4 mv = modelViewMatrix * vec4(position,1.0);
  float sz = aSize * (1.0 + uTwinkle * 0.10 * sin(uTime * 0.95 + aPhase * 41.0));
  /* ---- the floor ----
     A sprite scales with range, and past a few thousand units every planet
     in the vault had scaled to under a pixel and gone. The opening frame was
     ten folder stars and nothing else \u2014 a vault of four hundred notes
     reading as a vault of ten. A star in a photograph is never smaller than
     the seeing lets it be, whatever its distance, and the same floor here
     keeps every note a point of light from as far as the camera goes. Zero
     for the sky, which is meant to fall away. */
  float px = sz * (uScale / max(1.0, -mv.z));
  gl_PointSize = max(px, uMinPx);
  gl_Position = projectionMatrix * mv;
}`,L1=`
varying vec3 vC; varying float vA; varying float vF;

float sinc2(float u){
  if (u < 1e-3) return 1.0;
  float s = sin(u);
  return (s * s) / (u * u);
}
/* The same pattern with its own decay divided back out: one at the centre,
   zero at every null, one at every secondary peak. Which is the fringes on
   their own, and the fringes on their own are what a spike needs \u2014 see the
   note in main(). */
float fringe(float u){ return sinc2(u) * max(1.0, u * u); }
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  float a = 0.0;
  if (r <= 1.0) a = pow(1.0 - r, 2.4) + pow(1.0 - r, 9.0) * 0.85;
  vec3 sp = vec3(0.0);
  if (vF > 0.001) {
    float ax = abs(d.x) * 2.0, ay = abs(d.y) * 2.0;
    /* A spike is not a wedge.

       It is the Fraunhofer pattern of a straight edge \u2014 one vane of the
       spider holding the secondary in place \u2014 and that pattern is sinc
       squared: a bright centre, then a run of secondary maxima falling off
       as the inverse square of their order. Which is why a real spike is
       *beaded* rather than ruled, and it is what every long exposure of a
       bright star shows that a linear taper cannot.

       Drawn as fringes on an envelope rather than as the raw law, and that
       split is the honest description of what a photograph is. Sinc
       squared falls off so fast that by a fifth of the way along the arm
       it is at a tenth \u2014 put it on screen literally and the spike is a
       stub. It does not look like a stub in any photograph because the arm
       is grossly overexposed for most of its length: the law is far above
       the sensor ceiling out to where it finally is not, so the 1/u\xB2 decay
       reads as a slow taper and what you actually see is the interference.
       So the taper carries the decay and fringe() carries the pattern,
       which is sinc squared with its own envelope divided back out.

       And the fringes are chromatic. Their spacing goes as the wavelength,
       so at any distance along an arm the red maxima sit further out than
       the blue, and the arm breaks into colour toward its tip. Three
       scales, one per channel, at 680 : 550 : 440 nm \u2014 the same three the
       atmospheres are scattered at, for the same reason: that is where the
       eye keeps its three answers. */
    float uh = ax * 15.0, uv = ay * 15.0;
    vec3 fh = vec3(fringe(uh * 0.809), fringe(uh), fringe(uh * 1.250));
    vec3 fv = vec3(fringe(uv * 0.809), fringe(uv), fringe(uv * 1.250));
    float eh = max(0.0, 1.0 - ax * 1.15) * max(0.0, 1.0 - ay * 11.0);
    float ev = max(0.0, 1.0 - ay * 1.15) * max(0.0, 1.0 - ax * 11.0);
    sp = ((0.52 + 0.48 * fh) * eh + (0.52 + 0.48 * fv) * ev) * vF * 0.44;
  }
  /* The spike carries its own colour now, so the fragment can no longer be
     one colour and one alpha. Summed per channel and then split back into
     the pair additive blending multiplies together again, which leaves the
     result identical for anything that has no spike on it. */
  vec3 sum = vC * ((1.0 + a * 1.1) * a + sp);
  float t = max(sum.r, max(sum.g, sum.b));
  if (t < 0.0025) discard;
  gl_FragColor = vec4(sum / t, t * vA);
}`,Or=[],Wo=[];function Gi(o,u,p,v){let b=new mn({uniforms:{uScale:{value:o},uTime:{value:0},uTwinkle:{value:u||0},uFlare:{value:p||0},uBright:{value:1},uMinPx:{value:0}},vertexShader:R1,fragmentShader:L1,transparent:!0,depthWrite:!1,blending:Ut});return b.userData.twinkle=u||0,Or.push(b),v&&Wo.push(b),b}function Ec(o){if(!o)return;Dt.remove(o),o.geometry&&o.geometry.dispose();let u=o.material;if(u){let p=Or.indexOf(u);p>=0&&Or.splice(p,1),p=Wo.indexOf(u),p>=0&&Wo.splice(p,1),u.dispose()}}function Sc(o,u){let p=new Float32Array(u);for(let v=0;v<u;v++)p[v]=Math.random();o.setAttribute("aPhase",new Ze(p,1))}function ss(o,u,p){let v=new Float32Array(o*3),b=new Float32Array(o),E=new Float32Array(o*3),w=new Float32Array(o);for(let I=0;I<o;I++)u(I,v,b,E,w);let T=new it;T.setAttribute("position",new Ze(v,3)),T.setAttribute("aSize",new Ze(b,1)),T.setAttribute("aColor",new Ze(E,3)),T.setAttribute("aAlpha",new Ze(w,1)),Sc(T,o);let P=new Ni(T,p);return P.frustumCulled=!1,Dt.add(P),P}let qo=14e3,as=null,qa=null,os=null,Tc=null,Ac=null,Vi=null,Rc=null,Xa=null,Qn=null,di=null,qn=null,ls=null;Tc=ss(13e3,(o,u,p,v,b)=>{let E=qo*(.62+Math.random()*.38),w=Math.random()*f,T=Math.acos(2*Math.random()-1);u[o*3]=E*Math.sin(T)*Math.cos(w),u[o*3+1]=E*Math.cos(T),u[o*3+2]=E*Math.sin(T)*Math.sin(w);let P=Math.pow(Math.random(),1.9);p[o]=(.8+P*3.6)*2.4,b[o]=.24+P*.72,mp(Ng()).toArray(v,o*3)},Gi(700,.02,0,!0)),Ac=ss(150,(o,u,p,v,b)=>{let E=qo*(.7+Math.random()*.3),w=Math.random()*f,T=Math.acos(2*Math.random()-1);u[o*3]=E*Math.sin(T)*Math.cos(w),u[o*3+1]=E*Math.cos(T),u[o*3+2]=E*Math.sin(T)*Math.sin(w),p[o]=(6+Math.random()*12)*2.4,b[o]=.4+Math.random()*.42,mp(Ng()).toArray(v,o*3)},Gi(700,.05,1,!0));let Ya=.42,Xo=1.1,zr=new L(-Math.cos(Ya)*Math.sin(Xo),Math.cos(Ya)*Math.cos(Xo),Math.sin(Ya)),C1=2.1,Wg=[[.1,-.02,.15,2.1],[.47,.04,.11,1.3],[-.52,-.03,.12,.85],[1.4,.02,.21,1.05],[-1.31,-.05,.16,.7]];Rc=ss(9e3,(o,u,p,v,b)=>{let E=Math.random()*f,w=E-C1;w>Math.PI&&(w-=f),w<-Math.PI&&(w+=f);let T=Math.abs(w),P=.3*(.44+.9*Math.exp(-(T*T)/(2*1.05*1.05))),I=(Math.random()+Math.random()+Math.random()-1.5)*P,D=qo*(.72+Math.random()*.26),R=Math.cos(E)*Math.cos(I)*D,F=Math.sin(I)*D,z=Math.sin(E)*Math.cos(I)*D,Y=F*Math.cos(Ya)-z*Math.sin(Ya),U=F*Math.sin(Ya)+z*Math.cos(Ya),ee=R*Math.cos(Xo)-Y*Math.sin(Xo),oe=R*Math.sin(Xo)+Y*Math.cos(Xo);u[o*3]=ee,u[o*3+1]=oe,u[o*3+2]=U,p[o]=(2+Math.random()*8)*2.4;let ue=1+2.2*Math.exp(-(T*T)/(2*.85*.85)),de=1;for(let Te=0;Te<Wg.length;Te++){let ve=Wg[Te],re=w-ve[0],Se=I-ve[1];de+=ve[3]*Math.exp(-(re*re)/(2*ve[2]*ve[2])-Se*Se/(2*.11*.11))}de*=.88+.24*Math.sin(E*23.7+2.3)*Math.cos(E*13.3-.9);let H=Math.sin(E*1.7+.6)*.048+Math.sin(E*3.9)*.018,J=Math.exp(-Math.pow(Math.max(0,Math.abs(w-.7)-.7)/.42,2)),Ee=Math.exp(-Math.pow((I-H)/(.062*(.7+1.3*P/.3)),2))*(.62+.3*Math.sin(E*2.6+1.1))*J;b[o]=(.022+Math.random()*.052)*ue*de*Math.max(.12,1-Ee),mp(.3+Math.random()*.45+.22*Math.exp(-(T*T)/(2*.9*.9))).toArray(v,o*3)},Gi(700,0,0,!0));function qg(o){Ec(Xa);let u=Math.max(900,o*1.25);Xa=ss(14e3,(p,v,b,E,w)=>{let T=Math.pow(Math.random(),.62),P=u*.05+T*u,I=Math.random(),D=(I<.33?0:I<.66?2:I<.83?1:3)*(f/4),R=u*.2,F=Math.random()*2-1,z=D+Math.log(Math.max(P,R)/R)/.2126+F*(.25+.8/(1+P*(11/u))),Y=F>.14&&F<.58,U=F<-.1&&Math.random()<.22;v[p*3]=Math.cos(z)*P+(Math.random()-.5)*u*.026,v[p*3+1]=(Math.random()-.5)*(u*.015+P*.045),v[p*3+2]=Math.sin(z)*P+(Math.random()-.5)*u*.026,b[p]=(U?1.4+Math.random()*2.4:.8+Math.random()*2.4)*2.2,w[p]=(.02+Math.random()*.07)*(Y?.22:1)*(U?1.5:1),U?xr(212+Math.random()*22,.46,.6).toArray(E,p*3):xr(26+Math.random()*18,.22+Math.random()*.18,.46+Math.random()*.18).toArray(E,p*3)},Gi(700,0,0,!0)),Xa.name="dust"}function Mp(){if(os)return os;let o=256,u=(D,R)=>{let F=new Float32Array(R*R),z=D>>>0;for(let Y=0;Y<R*R;Y++)z=Math.imul(z,1664525)+1013904223>>>0,F[Y]=z/4294967296;return F},p=D=>D*D*(3-2*D),v=(D,R)=>{let F=u(D,R),z=new Float32Array(o*o),Y=o/R;for(let U=0;U<o;U++)for(let ee=0;ee<o;ee++){let oe=ee/Y,ue=U/Y,de=Math.floor(oe),H=Math.floor(ue),J=p(oe-de),Ee=p(ue-H),Te=de%R,ve=(de+1)%R,re=H%R,Se=(H+1)%R,Ae=F[re*R+Te],He=F[re*R+ve],Ke=F[Se*R+Te],Ve=F[Se*R+ve];z[U*o+ee]=(Ae*(1-J)+He*J)*(1-Ee)+(Ke*(1-J)+Ve*J)*Ee}return z},b=(D,R)=>{let F=new Float32Array(o*o),z=.5,Y=0;for(let U=0;U<R;U++,z*=.5){let ee=v(D+U*7919,4<<U);for(let oe=0;oe<o*o;oe++)F[oe]+=ee[oe]*z;Y+=z}for(let U=0;U<o*o;U++)F[U]/=Y;return F},E=[b(11,5),b(23,5),v(37,8),b(41,3)],w=document.createElement("canvas");w.width=w.height=o;let T=w.getContext("2d"),P=T.createImageData(o,o),I=P.data;for(let D=0;D<o*o;D++)for(let R=0;R<4;R++)I[D*4+R]=Math.max(0,Math.min(255,Math.round(E[R][D]*255)));return T.putImageData(P,0,0),os=new hr(w),os.wrapS=os.wrapT=go,os.minFilter=qt,os.magFilter=qt,os.generateMipmaps=!1,os}let Xg=`
uniform sampler2D uNoise;
float n3(vec3 p) {
  float z = floor(p.z), f = fract(p.z);
  f = f * f * (3.0 - 2.0 * f);
  vec2 o1 = texture2D(uNoise, vec2(z * 0.0137, z * 0.0291)).bb * 7.31;
  vec2 o2 = texture2D(uNoise, vec2((z + 1.0) * 0.0137, (z + 1.0) * 0.0291)).bb * 7.31;
  float a = texture2D(uNoise, p.xy * 0.25 + o1).r;
  float b = texture2D(uNoise, p.xy * 0.25 + o2).r;
  return mix(a, b, f);
}
float n3b(vec3 p) {
  float z = floor(p.z), f = fract(p.z);
  f = f * f * (3.0 - 2.0 * f);
  vec2 o1 = texture2D(uNoise, vec2(z * 0.0171, z * 0.0113)).bb * 5.17;
  vec2 o2 = texture2D(uNoise, vec2((z + 1.0) * 0.0171, (z + 1.0) * 0.0113)).bb * 5.17;
  float a = texture2D(uNoise, p.xy * 0.25 + o1).g;
  float b = texture2D(uNoise, p.xy * 0.25 + o2).g;
  return mix(a, b, f);
}`,P1=`
attribute vec3 iCenter; attribute vec3 iE1; attribute vec3 iAxes; attribute vec4 iSeed;
varying vec3 vPos; varying vec3 vC; varying vec3 vA1; varying vec3 vA2; varying vec3 vA3;
varying vec3 vS; varying vec4 vSeed;
void main(){
  mat3 mv3 = mat3(modelViewMatrix);
  float sc = length(mv3[0]);
  vec3 c = (modelViewMatrix * vec4(iCenter, 1.0)).xyz;
  vec3 e1 = normalize(mv3 * iE1);
  vec3 e3 = normalize(mv3 * vec3(0.0, 1.0, 0.0));
  vec3 e2 = normalize(cross(e3, e1));
  vS = iAxes * sc;
  float R = max(vS.x, max(vS.y, vS.z)) * 1.06;
  /* A cloud the eye is inside is faded to nothing in the fragment, and its
     quad would cover the whole frame \u2014 sixteen full-screen marches for
     sixteen invisible clouds is what made the boot screen take seconds a
     frame. Collapse the quad here instead, at the same threshold the fade
     reaches zero. */
  vec3 b = vec3(dot(c, e1) / vS.x, dot(c, e2) / vS.y, dot(c, e3) / vS.z);
  if (length(b) < 0.92) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  /* a billboard big enough to hold the ellipsoid from any angle */
  vec3 p = c + vec3(position.xy * R, 0.0);
  vPos = p; vC = c; vA1 = e1; vA2 = e2; vA3 = e3; vSeed = iSeed;
  gl_Position = projectionMatrix * vec4(p, 1.0);
}`,D1=`
precision highp float;
uniform float uBright; uniform float uTime;
uniform vec3 uSunV; uniform vec3 uSunCol; uniform float uSunR;
varying vec3 vPos; varying vec3 vC; varying vec3 vA1; varying vec3 vA2; varying vec3 vA3;
varying vec3 vS; varying vec4 vSeed;
${Xg}
void main(){
  vec3 d = normalize(vPos);
  /* the ellipsoid, as a unit sphere in its own frame: q = M (p - C) */
  vec3 a = vec3(dot(d, vA1) / vS.x, dot(d, vA2) / vS.y, dot(d, vA3) / vS.z);
  vec3 b = vec3(dot(vC, vA1) / vS.x, dot(vC, vA2) / vS.y, dot(vC, vA3) / vS.z);
  float A = dot(a, a), B = dot(a, b), Cc = dot(b, b) - 1.0;
  float disc = B * B - A * Cc;
  if (disc <= 0.0) discard;
  float sq = sqrt(disc);
  float t0 = max((B - sq) / A, 0.0), t1 = (B + sq) / A;
  if (t1 <= t0) discard;
  const int STEPS = 8;
  float dl = (t1 - t0) / float(STEPS);
  float jit = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  float t = t0 + dl * jit;
  float sMax = max(vS.x, max(vS.y, vS.z));
  float drift = uTime * 0.004;
  /* The gas the eye is in is not seen: it is spread across the whole sky
     and thin in every direction, and drawing it is drawing a tint over the
     frame. A cloud fades as the camera comes within half a radius of its
     surface and is gone by the time the camera is inside, so what is seen
     is always the gas beyond \u2014 which is what a nebula looks like from a
     planet inside one. */
  float inside = smoothstep(0.9, 1.9, length(b));
  /* the warp field once per ray, at the middle: it is the slow term and
     does not need re-reading eight times */
  vec3 qm = a * (t0 + t1) * 0.5 - b;
  float wm = n3b(qm * vec3(1.9, 2.4, 2.4) + vec3(vSeed.w * 4.0, vSeed.x, vSeed.w * 1.3) + drift) - 0.5;
  float ph = vSeed.x, emis = vSeed.y, lit = vSeed.z, seed = vSeed.w;
  vec3 L = vec3(0.0);
  float T = 1.0;
  for (int i = 0; i < STEPS; i++) {
    vec3 q = a * t - b;
    float r2 = dot(q, q);
    if (r2 < 1.0) {
      /* the envelope, and the gas inside it: a base field warped by a
         second one, and a ridged term on top so the density runs in strands
         rather than lumps \u2014 the same three filaments per cloud the sprites
         carried, made out of the field instead of placed by hand */
      float env = 1.0 - r2;
      env *= env;
      vec3 sp = q * vec3(4.2, 5.4, 5.4) + vec3(seed * 9.0, ph, seed * 3.0);
      float n = n3(sp + wm * 1.3);
      float ridge = 1.0 - abs(n * 2.0 - 1.0);
      ridge *= ridge * ridge;
      float dens = env * max(0.0, 0.42 * n + 0.80 * ridge - 0.40) * 2.0;
      if (dens > 0.0) {
        float r = sqrt(r2);
        /* the ionisation front: teal inside it, red outside, the crossing
           a few tenths of the cloud; a reflection cloud is blue all through */
        float iz = smoothstep(0.12, 0.46, r);
        vec3 emCol = mix(vec3(0.20, 0.62, 0.58), vec3(0.66, 0.11, 0.15), iz);
        vec3 col = mix(vec3(0.28, 0.47, 0.64), emCol, emis);
        /* the gas near the star is lit by it \u2014 reflection, which is the
           star's own colour, falling off with the square of the distance
           and never quite reaching zero */
        float sd = distance(d * t, uSunV);
        float lit = uSunR * uSunR / (uSunR * uSunR + sd * sd);
        col += uSunCol * lit * 1.8;
        float step_ = dens * dl / sMax;
        L += T * col * step_ * 2.4;
        T *= exp(-step_ * 0.85);
      }
    }
    t += dl;
  }
  float gain = uBright * lit * inside * 1.0;
  vec3 rgb = L * gain;
  /* absorption held short of black, and scaled with the knob so turning
     the sky down takes the lanes with the light */
  float alpha = (1.0 - T) * 0.16 * inside * clamp(uBright * 1.4, 0.0, 1.0);
  gl_FragColor = vec4(rgb, alpha);
}`;function I1(){return new mn({uniforms:{uNoise:{value:Mp()},uBright:{value:1},uTime:{value:0},uSunV:{value:new L(0,0,-1e9)},uSunCol:{value:new Ce(1,.85,.6)},uSunR:{value:900}},vertexShader:P1,fragmentShader:D1,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:$f,blendSrc:du,blendDst:nc,blendSrcAlpha:du,blendDstAlpha:nc})}let k1=`
varying vec3 vDir;
void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,F1=`
precision highp float;
uniform float uBright; uniform vec3 uN; uniform vec3 uX; uniform vec3 uY;
uniform vec4 uGal[6]; uniform vec4 uGalU[6];
varying vec3 vDir;
${Xg}
void main(){
  vec3 d = normalize(vDir);
  float b = dot(d, uN);                       // sine of galactic latitude
  float x = dot(d, uX), y = dot(d, uY);
  float lon = atan(y, x);
  /* the band: a gaussian in latitude, narrower toward the anticentre, and
     lumpy along its length */
  float wid = 0.13 + 0.07 * (0.5 + 0.5 * x);
  float band = exp(-b * b / (2.0 * wid * wid)) + 0.25 * exp(-b * b / (2.0 * 0.32 * 0.32));
  float lump = n3(vec3(lon * 2.2, b * 9.0, 1.7));
  float lump2 = n3b(vec3(lon * 5.0, b * 18.0, 4.1));
  band *= 0.45 + 0.55 * lump + 0.25 * lump2;
  /* the bulge toward the centre */
  float bulge = pow(max(x, 0.0), 6.0) * exp(-b * b / (2.0 * 0.20 * 0.20)) * 0.55;
  /* the rift: one side only, wandering, and it takes the light away */
  float rw = 0.038 + 0.030 * n3(vec3(lon * 3.0, 2.3, 8.8));
  float rift = exp(-pow((b - 0.015 * (lump2 - 0.5) * 2.0) / rw, 2.0)) * smoothstep(-0.2, 0.6, y);
  float light = (band + bulge) * (1.0 - 0.55 * rift);
  vec3 col = vec3(0.58, 0.54, 0.50) * light * 0.34;
  /* a few galaxies: an elliptical gaussian on each one's tangent plane, a
     warm core in a cool disc */
  for (int i = 0; i < 6; i++) {
    vec3 g = uGal[i].xyz; float s = uGal[i].w;
    float dd = dot(d, g);
    if (dd > 0.9) {
      vec3 off = d - g * dd;
      vec3 u = uGalU[i].xyz; vec3 v = cross(g, u);
      float px = dot(off, u) / s, py = dot(off, v) / (s * uGalU[i].w);
      float r2 = px * px + py * py;
      float disc = exp(-r2 * 2.6);
      float core = exp(-r2 * 26.0);
      col += vec3(0.50, 0.58, 0.82) * disc * 0.22 + vec3(1.0, 0.86, 0.66) * core * 0.55;
    }
  }
  gl_FragColor = vec4(col * uBright * 1.4, 1.0);
}`;function N1(){Ec(as);let o=[],u=[];for(let E=0;E<6;E++){let w=new L(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();w.addScaledVector(zr,-w.dot(zr)*.6).normalize();let T=new L(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);T.addScaledVector(w,-T.dot(w)).normalize(),o.push(new Lt(w.x,w.y,w.z,.01+Math.random()*.016)),u.push(new Lt(T.x,T.y,T.z,.28+Math.random()*.55))}let p=new L(0,1,0);Math.abs(zr.y)>.9&&p.set(1,0,0),p.addScaledVector(zr,-p.dot(zr)).normalize();let v=new L().crossVectors(zr,p).normalize(),b=new mn({uniforms:{uNoise:{value:Mp()},uBright:{value:1},uN:{value:zr.clone()},uX:{value:p},uY:{value:v},uGal:{value:o},uGalU:{value:u}},vertexShader:k1,fragmentShader:F1,side:xn,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:Ut});as=new wt(new Us(qo*1.08,48,24),b),as.frustumCulled=!1,as.renderOrder=-20,Dt.add(as)}let H1=`
attribute float aSize; attribute float aPhase;
uniform vec3 uCam; uniform float uTime; uniform float uBox;
varying float vA;
void main(){
  vec3 drift = vec3(sin(aPhase * 6.28 + uTime * 0.11), cos(aPhase * 4.1 + uTime * 0.07), sin(aPhase * 2.7 - uTime * 0.09)) * 4.0;
  vec3 p = mod(position + drift - uCam + uBox * 0.5, uBox) - uBox * 0.5 + uCam;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  float z = -mv.z;
  float px = aSize * 220.0 / max(1.0, z);
  gl_PointSize = clamp(px, 0.7, 3.2);
  /* fade at the near plane and at the far wall of the box, so nothing pops */
  vA = smoothstep(1.5, 18.0, z) * smoothstep(uBox * 0.55, uBox * 0.22, length(p - uCam)) * clamp(px / 1.6, 0.35, 1.0);
  gl_Position = projectionMatrix * mv;
}`,B1=`
uniform float uBright;
varying float vA;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  if (r > 1.0) discard;
  float a = (1.0 - r * r) * vA * uBright;
  gl_FragColor = vec4(vec3(0.72, 0.80, 0.92) * a, a);
}`;function O1(){Ec(qa);let o=720,u=340,p=new Float32Array(o*3),v=new Float32Array(o),b=new Float32Array(o);for(let T=0;T<o;T++)p[T*3]=(Math.random()-.5)*u,p[T*3+1]=(Math.random()-.5)*u,p[T*3+2]=(Math.random()-.5)*u,v[T]=.6+Math.random()*1.6,b[T]=Math.random();let E=new it;E.setAttribute("position",new Ze(p,3)),E.setAttribute("aSize",new Ze(v,1)),E.setAttribute("aPhase",new Ze(b,1));let w=new mn({uniforms:{uCam:{value:new L},uTime:{value:0},uBox:{value:u},uBright:{value:.5}},vertexShader:H1,fragmentShader:B1,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:Ut});qa=new Ni(E,w),qa.frustumCulled=!1,qa.renderOrder=6,Dt.add(qa)}function Yg(o){Ec(Vi);let u=Math.max(900,o*1.15),p=16,v=90,b=[];for(let R=0;R<p;R++){let F=Math.random()*f,z=u*.2+Math.pow(Math.random(),.75)*u,Y=Math.random()*f;b.push({x:Math.cos(F)*z,y:(Math.random()-.5)*u*.34,z:Math.sin(F)*z,w:u*(.08+Math.random()*.16),h:u*(.08+Math.random()*.1),e1x:Math.cos(Y),e1z:Math.sin(Y),e2x:-Math.sin(Y),e2z:Math.cos(Y),el:1.35+Math.random()*1.15,ph:Math.random()*f,emission:Math.random()<.72,lit:.55+Math.random()*.75})}let E=new ko,w=new $r(2,2);E.setAttribute("position",w.getAttribute("position")),E.setAttribute("uv",w.getAttribute("uv")),E.setIndex(w.getIndex());let T=new Float32Array(p*3),P=new Float32Array(p*3),I=new Float32Array(p*3),D=new Float32Array(p*4);b.forEach((R,F)=>{T[F*3]=R.x,T[F*3+1]=R.y,T[F*3+2]=R.z,P[F*3]=R.e1x,P[F*3+1]=0,P[F*3+2]=R.e1z,I[F*3]=R.w*R.el*.85,I[F*3+1]=R.w*.95,I[F*3+2]=R.h*1.15,D[F*4]=R.ph,D[F*4+1]=R.emission?1:0,D[F*4+2]=R.lit,D[F*4+3]=Math.random()}),E.setAttribute("iCenter",new wn(T,3)),E.setAttribute("iE1",new wn(P,3)),E.setAttribute("iAxes",new wn(I,3)),E.setAttribute("iSeed",new wn(D,4)),E.instanceCount=p,Vi=new wt(E,I1()),Vi.frustumCulled=!1,Vi.renderOrder=-2,Dt.add(Vi)}let jg=186,z1=352;function U1(){Ec(ls);let o=9,u=300,p=[],v=.3+Math.random()*.45;for(let E=0;E<o;E++){let w;if(E<o-2){let F=.1+Math.random()*.45,z=new L(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);z.addScaledVector(zr,-z.dot(zr)).normalize(),w=zr.clone().multiplyScalar(Math.cos(F)).addScaledVector(z,Math.sin(F)).normalize()}else w=new L(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();let T=new L(0,1,0);Math.abs(w.y)>.9&&T.set(1,0,0);let P=new L().crossVectors(w,T).normalize(),I=new L().crossVectors(w,P).normalize(),D=[],R=Math.random()<.55?Math.random()<.35?2:1:0;for(let F=0;F<R;F++)D.push({at:.18+Math.random()*.64,w:.045+Math.random()*.075,d:.45+Math.random()*.42});p.push({e1:P,e2:I,e3:new L().crossVectors(P,I),a0:Math.random()*f,span:1.1+Math.random()*1.9,hue:jg+(z1-jg)*g(v+(Math.random()-.5)*.3,0,1),dh:(Math.random()-.5)*26,skew:.55+Math.random()*1.3,lanes:D,lit:.55+Math.random()*.9,thick:.055+Math.random()*.1})}let b=new L;ls=ss(o*u,(E,w,T,P,I)=>{let D=p[E/u|0],R=E%u/u,F=D.a0+(R-.5)*D.span,z=(Math.random()+Math.random()+Math.random()-1.5)*.8,Y=qo*(.86+Math.random()*.1);b.copy(D.e1).multiplyScalar(Math.cos(F)).addScaledVector(D.e2,Math.sin(F)).addScaledVector(D.e3,z*D.thick).normalize().multiplyScalar(Y),w[E*3]=b.x,w[E*3+1]=b.y,w[E*3+2]=b.z;let U=Math.sin(Math.pow(R,D.skew)*Math.PI),ee=Math.exp(-z*z*.9),oe=1;for(let de=0;de<D.lanes.length;de++){let H=D.lanes[de],J=(R-H.at)/H.w;oe*=1-H.d*Math.exp(-J*J)}T[E]=(900+Math.random()*1700)*(.45+ee*.75)*(qo/14e3),I[E]=(.07+Math.random()*.115)*D.lit*U*oe*(.25+ee);let ue=1+(1-oe)*.55;xr((D.hue+D.dh*(R-.5)+360)%360,(.15+Math.random()*.13)*ue,.38+Math.random()*.14).toArray(P,E*3)},Gi(700,0,0,!1)),ls.name="veil",ls.renderOrder=-1,Ep()}function Ep(){ls&&ls.material.uniforms&&(ls.material.uniforms.uBright.value=W.vei)}qg(1600),Yg(1600),U1(),N1(),O1();function Yo(o){let u=2166136261;for(let p=0;p<o.length;p++)u^=o.charCodeAt(p),u=Math.imul(u,16777619)>>>0;return u>>>0}let G1=o=>o*o*(3-2*o),Zg=o=>o&&o.lkey?A(o.lkey,o.larg):o?o.label:"\u2014",V1=`
/* A hash with no transcendental in it. The crater field below evaluates this
   up to thirty times per fragment, and a sin() there is the difference
   between a moon that costs nothing and a moon that costs the frame. */
float wH(vec3 p){
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
/* One hash, three uses. Three separate ones read better and cost three times
   as much inside a loop that is already the most expensive thing here; the
   components are correlated and nothing in the picture can tell. */
vec3 wH3(vec3 p){ float h = wH(p); return fract(vec3(h, h * 13.71, h * 57.29)); }
float wNoise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(wH(i),              wH(i + vec3(1,0,0)), f.x),
                 mix(wH(i + vec3(0,1,0)), wH(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(wH(i + vec3(0,0,1)), wH(i + vec3(1,0,1)), f.x),
                 mix(wH(i + vec3(0,1,1)), wH(i + vec3(1,1,1)), f.x), f.y), f.z);
}
/* Three octaves and two, rather than one function with a count. Every one of
   these is eight hashes, and every one of them is paid on every fragment of
   every body in the vault \u2014 the first draft asked for four octaves four
   times over on one branch and took a laptop's integrated GPU from fifty
   frames a second to one. Fractal detail is worth exactly as many octaves as
   are visible and not one more. */
float wFbm3(vec3 p){
  float s = 0.0, a = 0.5;
  for (int k = 0; k < 3; k++){ s += a * wNoise(p); p *= 2.07; a *= 0.5; }
  return s * 1.143;
}
float wFbm2(vec3 p){
  float s = wNoise(p) * 0.5 + wNoise(p * 2.07) * 0.25;
  return s * 1.333;
}
float mGlow;       // what this world emits on its own \u2014 see the aurora
float mH;          // the surface's own height, for the relief below
float mWater;      // how much of this fragment is open sea \u2014 see the glint
float mRock;       // 1 on an airless surface \u2014 see the opposition surge
uniform float uDetail;   // SURFACE DETAIL: how far below a pixel to bother
vec3  mTint;       // the folder colour, kept for the light to find
`,Jg={value:1};function Kg(o,u){o.uniforms.uDetail=Jg;let p=u?"attribute vec4 aSurf;":"uniform vec4 aSurf;";o.vertexShader=p+`
varying vec4 vSurf;
varying vec3 vObj;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vSurf = aSurf;
  vObj = normalize(position);`),o.fragmentShader=`varying vec4 vSurf;
varying vec3 vObj;
`+V1+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  {
    vec3 dpx = dFdx(-vViewPosition), dpy = dFdy(-vViewPosition);
    float dhx = dFdx(mH), dhy = dFdy(mH);
    if (abs(dhx) + abs(dhy) > 1e-7) {
      vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
      float det = dot(dpx, r1);
      vec3 grad = sign(det) * (dhx * r1 + dhy * r2);
      normal = normalize(abs(det) * normal - grad * 0.55);
    }
  }`),o.fragmentShader=o.fragmentShader.replace("#include <map_fragment>",`
  {
    vec3 nd = normalize(vObj);
    float sd = vSurf.x;
    vec3 alb;
    mGlow = 0.0; mWater = 0.0; mRock = 0.0;
    /* ---- how much of this world one pixel covers ----
       Taken before anything branches, because a derivative asked for inside
       divergent control flow is undefined \u2014 the rasteriser answers it by
       differencing neighbouring fragments, and neighbours that took the
       other branch have no answer to give.

       On a body filling the screen this is a few thousandths; on one four
       pixels across it is a half. It is the honest measure of how much of
       what is computed below could possibly be seen, and the two expensive
       things here \u2014 the crater field and the third octave of every fractal \u2014
       are skipped once it says they would land inside a pixel. SURFACE
       DETAIL scales the threshold, for a machine that would rather have the
       frame than the grain. */
    float pxo = length(fwidth(nd)) / max(uDetail, 0.05);
    bool fine = pxo < 0.035;
    if (vSurf.w < 0.5) {
      /* ---------------------------------------------------- a giant -------
         Zonal bands, which are not stripes painted on a ball: a giant's
         atmosphere is organised by its own rotation. Coriolis turns
         convection into east-west jets, and what the eye reads is the
         alternation between them \u2014 zones, where gas is rising and the
         ammonia deck sits high and bright, and belts, where it is sinking
         and you are seeing deeper, warmer and darker. Jupiter carries about
         eight of each per hemisphere and Saturn's are the same structure
         under a haze that softens them.

         The jets meander rather than ruling straight lines, so the latitude
         the band pattern is read at is displaced by a turbulence field
         first. That one displacement is also what puts the curls and
         festoons on the boundary between a belt and the zone beside it \u2014
         which is exactly where the shear between two opposed jets is, and
         exactly where every photograph shows them. */
      float turb = wFbm3(nd * 2.6 + sd * 31.0);
      /* Gas has no relief: a cloud deck is not a landscape, and there is
         nothing on a giant for a shadow to fall across. Flat, so the
         derivative below is zero and the normal is left alone. */
      mH = 0.0;
      float lat2 = nd.y + (turb - 0.5) * 0.17;
      /* the bands are not evenly spaced in latitude: they are widest at the
         equator and crowd together toward the poles, because the jets are
         set by the depth of the convecting shell against the local spin and
         both of those change with latitude. The cubic term is that crowding
         and nothing more principled than the right shape for it. */
      float bz = (lat2 + 0.42 * lat2 * lat2 * lat2) * (7.0 + vSurf.y * 5.0);
      float band = sin(bz * 3.0 + vSurf.y * 6.28) * 0.46
                 + sin(bz * 5.1 + 1.7) * 0.33
                 + sin(bz * 9.7 + 3.9) * 0.21;
      float belt = smoothstep(-0.24, 0.24, band);
      alb = mix(vec3(0.44, 0.29, 0.20), vec3(0.90, 0.83, 0.67), belt);
      /* the poles are colder, hazier and bluer \u2014 a hood, not a cap: there is
         no surface up there for ice to sit on */
      alb = mix(alb, vec3(0.38, 0.42, 0.50), smoothstep(0.70, 0.99, abs(nd.y)));
      /* fine shear drawn out along the jets rather than across them */
      if (fine) alb *= 0.88 + 0.24 * wNoise(nd * vec3(9.0, 34.0, 9.0) + sd * 13.0);
      /* One long-lived oval on the bodies whose seed asks for one. A vortex
         caught between two opposed jets is stable for the same reason it is
         there at all: the shear that would tear it apart is what spins it.
         Jupiter's has been turning since somebody first drew it. */
      if (vSurf.y > 0.52) {
        float lonf = atan(nd.z, nd.x) - sd * 6.2831853;
        lonf = atan(sin(lonf), cos(lonf));
        float sq = length(vec2(lonf * 0.40, (nd.y + 0.30 - vSurf.y * 0.34) * 1.9));
        alb = mix(alb, vec3(0.70, 0.33, 0.21), (1.0 - smoothstep(0.05, 0.14, sq)) * 0.85);
      }
      /* Aurorae, and only here. A giant has a magnetic field big enough to
         put a permanent oval of them round each pole, and they are the one
         thing on a world that is visible on the night side because it is not
         reflected light at all \u2014 it is the atmosphere itself emitting where
         the field lines come down. Which is the job the machined shell's lit
         strips were doing, done by something that is actually there. */
      /* On the magnetic axis, which is not the spin axis. Jupiter's is
         about ten degrees off and displaced from the centre besides, so its
         auroral ovals are visibly off-centre \u2014 one of them reaches further
         from the pole than the other. Saturn is the odd one out at under a
         degree, and being the exception is what makes it worth saying that
         the rule is a tilt. Seeded, so a body's ovals are where they are
         every time the vault is opened. */
      float mt = 0.10 + vSurf.y * 0.16;
      float ma = sd * 6.2831853;
      vec3 mag = vec3(sin(mt) * cos(ma), cos(mt), sin(mt) * sin(ma));
      float md = abs(dot(nd, mag));
      float pole = smoothstep(0.86, 0.94, md) * (1.0 - smoothstep(0.94, 0.985, md));
      mGlow = pole * (0.40 + 0.90 * turb);
    } else if (vSurf.w < 1.5) {
      /* ---------------------------------------------------- a world -------
         Land, sea and ice. The split is one threshold on a fractal height
         field, which is the standard way of saying "this surface has been
         eroded" \u2014 and it is why the coastlines come out crenulated at every
         scale rather than smooth at one of them. A coast is a fractal, and
         that is not a figure of speech about it. */
      float hgt = wFbm3(nd * 1.7 + sd * 47.0);
      vec3 sea = mix(vec3(0.018, 0.050, 0.125), vec3(0.045, 0.135, 0.255),
                     smoothstep(0.28, 0.47, hgt));
      float det = wNoise(nd * 6.0 + sd * 3.0);
      vec3 land = mix(vec3(0.19, 0.25, 0.13), vec3(0.42, 0.35, 0.22), det);
      land = mix(land, vec3(0.54, 0.49, 0.36), smoothstep(0.60, 0.76, hgt));
      float shore = smoothstep(0.465, 0.515, hgt);
      alb = mix(sea, land, shore);
      /* Ice where it is cold, which is the poles *and* the high ground, and
         the line between them wanders \u2014 because what it follows is a
         temperature contour over terrain and not a parallel. */
      /* Land has relief and water does not, which is the whole of why a
         coastline reads: the sea is a level surface by definition and the
         ground behind it is not. Squared above the shoreline so the
         mountains are where the land is highest rather than everywhere. */
      float above = max(hgt - 0.49, 0.0);
      mH = above * above * 2.6 + det * 0.05;
      float cold = abs(nd.y) + (hgt - 0.5) * 0.34 + (det - 0.5) * 0.20;
      float ice = smoothstep(0.66, 0.83, cold);
      alb = mix(alb, vec3(0.82, 0.86, 0.90), ice);
      /* and weather over the lot of it. A world with air has cloud on
         somewhere near two thirds of it at any moment, and cloud is most of
         what makes its albedo the 0.31 it is. */
      float cld = smoothstep(0.48, 0.67, wFbm2(nd * 2.9 + sd * 71.0)) * 0.78;
      alb = mix(alb, vec3(0.90, 0.92, 0.95), cld);
      /* Where there is open sea to catch the star: not under cloud, not
         under ice, and not on land. A specular highlight off water is the
         one thing on a world that is genuinely mirror-like, and it is the
         reason every photograph of an ocean from orbit has a blazing patch
         in it exactly opposite the sun. */
      mWater = (1.0 - shore) * (1.0 - ice) * (1.0 - cld);
    } else {
      /* ----------------------------------------------------- a rock -------
         Craters, and the sizes of them come out of a power law. The
         size-frequency distribution of impact craters is the most-measured
         thing about any airless surface \u2014 many small, few large, a straight
         line on a log-log plot \u2014 so the radius drawn for each cell of the
         field is a power of a uniform rather than a uniform. What that
         produces is a handful of basins with fine pitting between them,
         which is what an airless surface looks like; an even field of
         equal circles is what it never looks like.

         Nearest in units of its *own* radius rather than in distance, so a
         large crater further off still wins over a small one nearby. That is
         what "the big one is on top of the small ones" means, and getting it
         the other way round gives a surface where nothing ever overlaps. */
      vec3 cp = nd * (2.4 + vSurf.z * 0.34);
      vec3 ci = floor(cp), cf = fract(cp);
      vec3 half8 = step(vec3(0.5), cf);
      /* Two above the largest crater radius means every distance test comes
         out as no crater, which is the right answer once a crater is smaller
         than the pixel that would have to show it. The maria below are not
         skipped: those are the size of the body and are the last thing to
         go. What is dropped is never the shape of the world, only detail
         finer than the picture can hold \u2014 a rule the generated worlds this
         replaced could not keep, which is why they were taken out. */
      float q = 2.0;
      if (fine) {
        for (int x = 0; x < 2; x++)
        for (int y = 0; y < 2; y++)
        for (int z = 0; z < 2; z++) {
          vec3 g = vec3(float(x), float(y), float(z)) - 1.0 + half8;
          vec3 o = wH3(ci + g + sd * 27.0);
          float u = o.x * o.y;
          float R = 0.13 + 0.37 * u * u;
          q = min(q, length(g + o - cf) / R);
        }
      }
      /* the bowl is shadowed and the rim is fresh material thrown up out of
         it, so one is darker than the ground and the other brighter */
      float bowl = 1.0 - smoothstep(0.0, 0.92, q);
      float rim  = smoothstep(0.78, 0.97, q) * (1.0 - smoothstep(0.97, 1.14, q));
      /* ---- and the shape of it ----
         A crater drawn as a change of colour is a stain. What the eye
         actually recognises is the shading on a bowl and the shadow under a
         rim, so the profile below is a height and the normal is bent by it:
         a floor well under the plain, a wall climbing to a rim raised above
         it, and the ejecta blanket falling away outside. That is the
         measured profile of a simple crater, and it is why a terminator
         crossing a cratered surface is the most legible thing in astronomy.
         The fine term is regolith \u2014 the metre of broken rock every airless
         surface is buried under, because nothing has ever swept it away. */
      float grain = fine ? wNoise(nd * 11.0 + sd * 5.0) : 0.5;
      mH = fine ? (1.0 - bowl) * 0.72 + rim * 0.55 + grain * 0.06 : 0.0;
      alb = vec3(0.128) * (0.80 + 0.40 * grain);
      alb *= 1.0 - bowl * 0.42;
      /* a fresh rim is excavated rock that has not been darkened by four
         billion years of space weathering yet, and it is genuinely brighter
         than the plain \u2014 Copernicus and its rays against the mare */
      alb += vec3(0.085) * rim;
      /* and the maria: low ground flooded long ago and darker than the
         highlands around it, which is the other half of every bare surface
         anyone has ever looked at */
      alb *= 1.0 - smoothstep(0.54, 0.63, wFbm3(nd * 1.6 + sd * 61.0)) * 0.45;
      mRock = 1.0;
    }
    /* The folder colour is what the legend promises, and a world still has
       to say which system it belongs to. It rides as a tint over the world's
       own albedo rather than as the paint \u2014 a third of the way, which is
       enough to tell two systems apart at a glance and not enough to turn a
       giant's belts into a monochrome. The rest of the folder's identity is
       carried where it always was: in the halo, and in the lit gradient
       below. */
    /* ---- and the folder's colour is not applied here ----
       Which looks like an omission and is the opposite of one. A body's
       folder colour already arrives as the colour of the *light*: the star
       that lights it is its own folder's star and carries that folder's hue
       \u2014 see starLit, and the note there about a planet's day side matching
       the thing lighting it. Tinting the albedo as well would count one fact
       twice, and multiplying an albedo by a saturated cyan does not tint it
       anyway: it deletes the red channel, which takes a giant's cream and
       brown to grey-green and a rock's grey to navy.

       So the division is the one every photograph makes. What a surface owns
       is its albedo. What a system owns is its light. */
    mTint = diffuseColor.rgb;
    diffuseColor.rgb = alb;
  }`),o.fragmentShader=o.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 nn2 = normalize(normal);
    float dp = dot(nn2, sDir);
    float day = smoothstep(-0.45, 0.85, dp);
    float lit = day * day * sInt * vStarCol.a;
    outgoingLight += mix(mTint, vStarCol.rgb, 0.34) * sTint * lit * 0.17;
    float edge = pow(1.0 - max(dot(nn2, normalize(vViewPosition)), 0.0), 4.0);
    outgoingLight += mix(mTint, vec3(1.0), 0.45) * edge * smoothstep(-0.15, 0.6, dp)
                     * sInt * vStarCol.a * 0.85;
    if (mWater > 0.01) {
      vec3 hv = normalize(sDir + normalize(vViewPosition));
      float sp = pow(max(dot(nn2, hv), 0.0), 120.0);
      outgoingLight += vStarCol.rgb * sTint * sp * mWater * sInt * vStarCol.a * 1.35;
    }
    if (mRock > 0.5) {
      float ph = dot(sDir, normalize(vViewPosition));
      outgoingLight *= 1.0 + 0.95 * exp(-(1.0 - ph) * 55.0);
    }
  }
  outgoingLight += mix(vec3(0.42, 0.52, 1.0), vec3(1.0, 0.42, 0.62), 0.22)
                   * mGlow * 0.85;
#include <output_fragment>`)}let $g=[.068,.006,0],jo=null,Zo=null,Di=null,Ou=null;function W1(){Di=new Float32Array(Math.max(1,Q)*4),Ou=new Uint8Array(Math.max(1,Q));for(let o=0;o<Q;o++){let u=Yo((Fe[o]?Fe[o].p:"")+"#r"),p=tt&&tt[o]&&tt[o].kind==="moon"?1:0;Ou[o]=p;let v=p?.2:1;Di[o*4]=((u&255)/255-.5)*.62*v,Di[o*4+1]=((u>>>8&255)/255-.5)*.42*v,Di[o*4+2]=(u>>>16&1023)/1024*6.2831853,Di[o*4+3]=48e-6*Math.pow(Math.max(.5,ye[o]||3)/4,.38)}}let Qg=new Ir;function ev(o,u){if(!Di||o<0||o>=Q)return u.set(0,0,0,1),u;let p=Ou&&Ou[o]?Di[o*4+2]+(Bi?Bi[o]:0):Di[o*4+2]+an*Di[o*4+3];return Qg.set(Di[o*4],p,Di[o*4+1]),u.setFromEuler(Qg)}function tv(o,u,p){let v=Fe[o]||{},b=Yo((v.p||"")+"#m");u[p]=(b&4095)/4096,u[p+1]=(b>>>12&1023)/1024;let E=Math.log(1+(v.inb|0))*1.55+Math.log(1+(v.w||0)/120)*.7;u[p+2]=5+Math.min(9,Math.round(E*1.4))+(b>>>22&3);let w=tt&&tt[o]?tt[o].kind:"wiki";u[p+3]=w==="moon"||w==="spiral"||w==="shell"?2:E>=3.6?0:1}let Jo=`
#ifdef USE_INSTANCING
attribute float aSeed;
attribute vec3 aCore;
attribute vec3 aEdge;
attribute float aAlpha;
#endif
uniform vec3 uCore; uniform vec3 uEdge;
varying vec3 vN; varying vec3 vE; varying vec3 vQ;
/* the raw object position, which the chromosphere and the prominences read:
   they compile against this same vertex shader and want the sphere's own
   coordinate rather than the seeded one the photosphere samples at */
varying vec3 vP;
varying vec3 vCore; varying vec3 vEdge;
varying float vSeed; varying float vA;
void main(){
  vP = position;
  vec3 p = normalize(position);
#ifdef USE_INSTANCING
  vSeed = aSeed; vCore = aCore; vEdge = aEdge; vA = aAlpha;
#else
  vSeed = 0.0; vCore = uCore; vEdge = uEdge; vA = 1.0;
#endif
  /* about the spin axis, so what changes between two stars is which side of
     itself each is showing and not where its equator is */
  float ca = cos(vSeed * 6.2831853), sa = sin(vSeed * 6.2831853);
  vQ = vec3(p.x * ca - p.z * sa, p.y, p.x * sa + p.z * ca);
#ifdef USE_INSTANCING
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  /* the instance carries the rotation, so the outward direction has to go
     through it before the normal matrix \u2014 and the scale is uniform on every
     one of these, which is what lets the same mat3 serve for both */
  vN = normalize(normalMatrix * mat3(instanceMatrix) * p);
#else
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  /* the geometry is a sphere about its own origin, so the outward direction
     is the position \u2014 no dependence on whatever normals the subdivision left */
  vN = normalize(normalMatrix * p);
#endif
  vE = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,Sp=`
float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float noise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i),                 hash(i + vec3(1,0,0)), f.x),
                 mix(hash(i + vec3(0,1,0)),    hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)),    hash(i + vec3(1,0,1)), f.x),
                 mix(hash(i + vec3(0,1,1)),    hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ s += a * noise(p); p *= 2.03; a *= 0.5; }
  return s;
}
/* the star turns, and the things that belong to the star turn with it: the
   spots, the streamers, the loops. Granulation does not \u2014 it boils in place.

   And it does not turn as one piece. A star is a gas, so there is nothing to
   make one latitude keep step with another, and the Sun's equator goes round
   in 24.5 days while its poles take 34. The law is measured and fitted:

     Omega(phi) = A + B sin\xB2phi + C sin\u2074phi

   with A = 14.713, B = -2.396, C = -1.787 degrees a day (Snodgrass and
   Ulrich, 1990). Divided through by A that is the factor below, one at the
   equator and 0.716 at the pole.

   This is not a detail. Differential rotation is *why* a star has spots at
   all: it drags the frozen-in magnetic field round faster at the equator
   than at the poles, winding a poloidal field into a toroidal one turn by
   turn until the tubes are strong enough to become buoyant and break the
   surface, which is what a sunspot is. Drawing spots on a rigidly rotating
   ball is drawing the effect without the cause \u2014 and it also looks wrong,
   because the one thing a long timelapse of the Sun shows is the high
   latitudes falling behind. */
float omega(float y){
  float s2 = y * y;
  return 1.0 - 0.1629 * s2 - 0.1215 * s2 * s2;
}
vec3 spin(vec3 q, float a){
  float c = cos(a), s = sin(a);
  return vec3(q.x * c - q.z * s, q.y, q.x * s + q.z * c);
}
vec3 spinDiff(vec3 q, float a){ return spin(q, a * omega(q.y)); }`,Tp=`
uniform float uTime;
/* ---- how brightly this star burns, which is not the same as how opaque ----
   SYSTEM GLOW used to arrive as the disc's alpha, and a star turned down that
   way does not get dimmer: it gets see-through, and the nebula behind it
   comes up through the photosphere. What alpha is for here is the legend \u2014
   a system switched off has to be able to take its star with it \u2014 and what
   brightness is for is brightness. */
uniform float uBright;
/* fed by the vertex shader from a uniform on the hub and from an instanced
   attribute on every folder star \u2014 see SUN_V */
varying vec3 vCore; varying vec3 vEdge;
varying float vSeed; varying float vA;
varying vec3 vN; varying vec3 vE; varying vec3 vQ;
float sT;
${Sp}
void main(){
  /* 137 is only a number with no factors in common with anything below:
     what it has to do is put two stars at different points of their own
     cycles rather than at the same one. */
  sT = uTime + vSeed * 137.0;
  vec3 uCore = vCore, uEdge = vEdge;
  /* mu, the cosine between the surface and the line of sight: 1 in the middle
     of the disc, 0 at the limb */
  float mu = clamp(dot(normalize(vN), normalize(vE)), 0.0, 1.0);
  /* The linear law, I(mu) = 1 - u(1 - mu), which is what limb darkening is
     actually measured and tabulated as; u is near 0.6 for our own sun in
     visible light and is pushed to 0.80 here because this disc is a few
     hundred pixels across rather than half a degree of sky.

     A power law was tried first \u2014 pow(mu, 0.55) \u2014 and it is the wrong shape.
     mu is not the radius: it is sqrt(1 - r\xB2), so it stays above 0.85 across
     the whole inner half of the disc and then falls off a cliff. Any function
     of mu that is gentle near 1 therefore puts the entire visible gradient
     into the last few per cent of the radius, and the disc reads flat with a
     thin dark ring \u2014 which is exactly what it did. Linear in mu spends the
     gradient across the face, where it can be seen. */
  float ld = 1.0 - 0.80 * (1.0 - mu);

  /* Granulation, drawn as the *lanes* and not as the cells.

     Convection on a star is a honeycomb: rising gas fills almost the whole
     surface and it is bright, and the thin network of cooler gas sinking back
     down between the cells is dark. So the face is mostly light with a dark
     web on it \u2014 and taking the noise field directly gives the opposite
     impression, broad bright blobs next to broad dark blobs of the same size,
     which reads as a bruised moon. That is what the first attempt looked like.

     A level set of a noise field \u2014 the places where it passes through its own
     middle \u2014 is a set of thin closed curves, and a field of them is exactly
     that honeycomb, for one noise call. Granulation also turns over in place
     rather than being carried round, so the sample point drifts through the
     field instead of the sphere spinning under it.

     The width of the level set and how dark it goes are the two numbers that
     decide whether this is granulation or brain coral: a wide, high-contrast
     lane is a vein, and the first pass at these had both. Thin and shallow. */
  /* already unit, already turned to this star's own longitude */
  vec3 q = vQ;
  /* Domain warp, which is the difference between a honeycomb and granulation.
     A level set of an unwarped noise field gives cells that are all the same
     size and all the same roundness, and a regular tiling on a star is as
     much of a tell as the wireframes were. Displacing the sample point by a
     slower copy of the same field stretches the cells along the flow, so they
     come out uneven, elongated near the lanes they are draining into, and
     never twice alike.

     The amplitude is small and the warp field is nearly as fine as the thing
     it is warping, and both numbers had to come down to get there. A warp
     that is broad and strong does not distort cells, it *transports* them:
     the level set stops closing into a honeycomb and turns into long
     meandering veins across the whole face \u2014 marble, which is the same
     failure as the brain coral by another route. Warping by a shade under a
     cell's own width is the most that still reads as a cell. */
  vec3 w = vec3(noise(q * 9.0 + vec3(0.0, sT * 0.031, 0.0)),
                noise(q * 9.0 + vec3(19.3, 0.0, sT * 0.026)),
                noise(q * 9.0 + vec3(0.0, 7.7, sT * 0.023))) - 0.5;
  vec3 qg = q + w * 0.075;
  /* Frequency is the difference between granulation and a net. Seventeen
     cells across the sphere is about ten across the disc, and ten cells the
     width of a fingernail apiece are not granules \u2014 they are a pattern, and
     the eye reads a pattern as decoration on a ball rather than as the ball's
     own material. The real ratio is nearer a thousand granules across the
     disc; the two scales here go as fine as the noise can be sampled per
     fragment without sparkling, which lands the primary web at a size the eye
     reads as texture and not as motif. */
  float g1 = noise(qg * 34.0 + vec3(0.0, sT * 0.055, 0.0));
  float g2 = noise(qg * 74.0 - vec3(sT * 0.080, 0.0, sT * 0.050));
  /* Supergranulation: the same honeycomb three times the size and a fifth of
     the contrast. The photosphere has both, on scales an order apart, and one
     scale alone is what makes a procedural surface read as a texture \u2014 the
     eye finds the repeat because there is only one thing to find. */
  float g0 = noise(qg * 6.2 + vec3(sT * 0.013, 0.0, 0.0));
  float lane  = 1.0 - smoothstep(0.0, 0.11, abs(g1 - 0.5));
  /* The finest scale is dropped along the limb rather than drawn there. At a
     grazing angle a whole cell falls inside one fragment, and sampling a
     high-frequency field per pixel across that is not detail, it is a band of
     sparkle that crawls as the camera moves \u2014 the classic shimmer, and the
     more so under bloom. Fading it out with mu costs nothing that can be
     seen: the limb is where the darkening owns the picture anyway. */
  float fine  = (1.0 - smoothstep(0.0, 0.15, abs(g2 - 0.5)))
              * smoothstep(0.0, 0.28, mu);
  float super = 1.0 - smoothstep(0.0, 0.27, abs(g0 - 0.5));
  /* a slow unevenness across the whole face, so the web is not a uniform
     texture laid over a uniform ball */
  float broad = noise(q * 3.4 + vec3(sT * 0.020, 0.0, sT * 0.030));
  float cell = 1.03 - 0.19 * lane - 0.06 * fine - 0.045 * super
                    + 0.10 * (broad - 0.5);

  /* ---- sunspots ----
     The one feature of the sun a person can name without being an astronomer,
     and the disc had none. They are not scattered at random: they belong to
     two bands either side of the equator \u2014 the poles never have them and the
     equator itself rarely does \u2014 and each is a dark umbra inside a lighter,
     visibly *fibrous* penumbra. The penumbra is what makes a spot read as a
     hole in a boiling surface rather than as a smudge on a ball, so it gets
     its own high-frequency break-up. A slow rotation carries them, which is
     also the only cue on screen that the star is turning at all. */
  vec3 qr = spinDiff(q, sT * 0.021);
  float lat  = abs(qr.y);
  /* ---- the butterfly ----
     The two bands are not fixed. A cycle opens with spots appearing around
     thirty degrees either side of the equator and closes with the last of
     them at eight, and there are most of them halfway through \u2014 plot
     latitude against time for a century and the result is a row of wings,
     which is what the diagram has been called since Maunder drew it in
     1904. Both halves of that are here: the band walks down toward the
     equator over the cycle, and the number of spots rises and falls with
     it, to almost nothing at minimum.

     The clock is compressed, and it has to be said plainly. This star
     already turns in about half an hour rather than in twenty-seven days,
     so every period on it is a compression; the cycle is compressed harder
     still, to some fourteen rotations rather than a hundred and forty
     eight, because a butterfly that took three days of real time to open
     would be a constant nobody could ever catch moving. */
  float cyc  = fract(sT * 0.00024);
  float c0   = mix(0.52, 0.14, cyc);
  float amp  = 0.06 + 0.94 * pow(sin(cyc * 3.14159265), 1.4);
  float bl   = (lat - c0) / 0.155;
  float band = exp(-bl * bl) * amp;
  float grp  = fbm(qr * 2.7 + vec3(0.0, sT * 0.004, 0.0));
  float pen  = smoothstep(0.545, 0.640, grp) * band;
  float umb  = smoothstep(0.605, 0.665, grp) * band;
  pen *= 0.72 + 0.42 * noise(qr * 44.0);

  /* ---- faculae ----
     Bright patches that show only near the limb \u2014 they lie in the magnetic
     network, in the lanes, and they are visible there and not in the middle
     of the disc because at a shallow angle you are seeing down the side of a
     hot wall. Which means the same term that darkens the edge has something
     brightening it, and that quarrel across the limb is a good part of why a
     photograph of the sun does not look like an airbrushed ball. */
  float fac = lane * (1.0 - smoothstep(0.05, 0.62, mu)) * (1.0 - clamp(pen, 0.0, 1.0));

  /* The colour follows the *angle*, not the brightness. Mixing by the lit
     value instead made every dark lane in the middle of the disc go amber, as
     though the cool gas were somewhere other than where it is: the limb is
     cooler because you are seeing a shallower layer there, and a lane is
     dimmer because the gas in it is sinking. Two different facts, and only one
     of them is about temperature. */
  vec3 tint = mix(uEdge, uCore, pow(mu, 0.85));
  /* a spot is cooler gas, so it goes the way the limb goes and then further:
     down the same amber into rust. Tinting rather than only darkening is what
     stops it looking like a grey sticker. */
  tint = mix(tint, tint * vec3(0.94, 0.60, 0.34), clamp(pen, 0.0, 1.0));

  /* The middle of the disc is meant to clip and the rest of it is not. A star
     should saturate somewhere \u2014 that is what makes it read as a source rather
     than as a lit ball \u2014 but at 1.16, with the old flat falloff, it saturated
     everywhere and every term above was computed and thrown away by the
     clamp.

     1.14 rather than 1.22, now that there is something to lose. The extra
     stop bought nothing but a wider white hole in the middle, and it took the
     granulation, the faculae and the near edge of every spot with it \u2014 the
     terms are all multiplicative, so anything past the clamp is not "bright",
     it is simply not drawn. The disc still saturates; it just does it over
     the inner quarter instead of the inner half. */
  float v = ld * cell * 1.14;
  /* An umbra is about a fifth of the photosphere's brightness, and the floor
     here says so rather than letting the two terms drive it to black: a spot
     that reaches zero is a hole punched in the star, and the thing that makes
     one look real is that you can still see it is made of the same gas. */
  v *= clamp(1.0 - 0.55 * pen - 0.30 * umb, 0.15, 1.0);
  v += fac * 0.30;
  /* a system switched off in the legend has to be able to take its star
     with it, and an opaque disc cannot be dimmed */
  if (vA < 0.003) discard;
  gl_FragColor = vec4(pow(clamp(tint * v * uBright, 0.0, 1.0), vec3(0.4545)), vA);
}`,nv=`
uniform vec3 uCol; uniform float uAmt; uniform float uTime;
varying vec3 vN; varying vec3 vE; varying vec3 vP;
${Sp}
void main(){
  vec3 q = normalize(vP);
  float f = 1.0 - abs(dot(normalize(vN), normalize(vE)));
  /* Spicules. The chromosphere is not a layer, it is a forest \u2014 hundreds of
     thousands of jets standing off the limb, each a few hundred kilometres
     across and each lasting minutes. Drawn as an even ring it comes out as a
     pencil line round the disc, which is the one shape it never has. Breaking
     the alpha with a fast, fine field turns that line into a fringe, and the
     motion is quick because a spicule's whole life is quick. */
  float sp = 0.70 + 0.54 * noise(q * 42.0 + vec3(0.0, uTime * 0.34, 0.0));
  float a = pow(f, 3.4) * uAmt * sp;
  if (a < 0.002) discard;
  gl_FragColor = vec4(pow(uCol * (0.55 + f * 0.75), vec3(0.4545)), a);
}`,q1=`
uniform vec3 uCol; uniform float uAmt; uniform float uTime;
varying vec3 vN; varying vec3 vE; varying vec3 vP;
${Sp}
void main(){
  float f = 1.0 - abs(dot(normalize(vN), normalize(vE)));
  float ring = smoothstep(0.66, 0.99, f);
  if (ring < 0.003) discard;
  /* the same shear the spots ride, because a prominence is held out along
     the same field the shear is winding up \u2014 the two would drift apart
     within one rotation if only one of them knew about it */
  vec3 qr = spinDiff(normalize(vP), uTime * 0.021);
  float m = fbm(qr * 3.3 + vec3(0.0, uTime * 0.010, 0.0));
  float loop = smoothstep(0.600, 0.760, m);
  /* fibrous along its length, the way a loop is a bundle of threads */
  loop *= 0.50 + 0.80 * noise(qr * 26.0 + vec3(uTime * 0.09, 0.0, 0.0));
  float a = ring * loop * uAmt;
  if (a < 0.003) discard;
  gl_FragColor = vec4(pow(uCol * (0.90 + ring * 0.90), vec3(0.4545)), a);
}`;(function(){let p=document.createElement("canvas");p.width=p.height=256;let v=p.getContext("2d"),b=.255,E=Ae=>.0532*Math.pow(Ae,-2.5)+1.425*Math.pow(Ae,-7)+2.565*Math.pow(Ae,-17),w=.32,T=Math.pow(E(1),w),P=Math.pow(E(1/b),w),I=[[9,.7,.42],[13,2.3,.3],[17,4.1,.2],[23,1.2,.13]],D=v.createImageData(256,256),R=D.data;for(let Ae=0;Ae<256;Ae++){let He=(Ae+.5)/256*2-1;for(let Ke=0;Ke<256;Ke++){let Ve=(Ke+.5)/256*2-1,ae=Math.sqrt(Ve*Ve+He*He),me=(Ae*256+Ke)*4;if(ae>=1){R[me+3]=0;continue}let Xe=Math.max(1,ae/b),Ye=(Math.pow(E(Xe),w)-P)/(T-P);if(!(Ye>0)){R[me+3]=0;continue}let $e=Math.atan2(He,Ve),vt=0;for(let vn=0;vn<I.length;vn++){let yn=Math.cos($e*I[vn][0]+I[vn][1]);vt+=I[vn][2]*(yn>0?yn*yn*yn*yn*yn*yn:0)}let ct=Math.min(1,Math.max(0,(Xe-1.04)/.85));Ye*=1+ct*(vt*1.9-.42);let Ot=Math.min(1,Math.max(0,(ae-.84)/.16));Ye*=1-Ot*Ot*(3-2*Ot);let mt=Math.round(Math.min(1,Math.max(0,Ye))*242);if(!mt){R[me+3]=0;continue}let en=Math.min(1,(Xe-1)/1.6);R[me]=255,R[me+1]=Math.round(246+en*6),R[me+2]=Math.round(228+en*26),R[me+3]=mt}}v.putImageData(D,0,0);let F=new hr(p);F.minFilter=qt,Qn=new lr(new or({map:F,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:Ut,opacity:.85})),Qn.scale.setScalar(260),Qn.renderOrder=2,Qn.visible=!1,Dt.add(Qn);let z=512,Y=document.createElement("canvas");Y.width=Y.height=z;let U=Y.getContext("2d"),ee=U.createImageData(z,z),oe=ee.data,ue=z/2,de=10/(14*14*14)+5/(14*14)+.0025,H=10/(.9*.9*.9)+5/(.9*.9)+.0025-de;for(let Ae=0;Ae<z;Ae++)for(let He=0;He<z;He++){let Ke=(He-ue)/ue,Ve=(Ae-ue)/ue,ae=Math.sqrt(Ke*Ke+Ve*Ve),me=0;if(ae<1){let Ye=Math.max(.315,ae*14);me=((ct=>10/(ct*ct*ct)+5/(ct*ct)+.0025)(Ye)-de)/H,me=me>0?Math.pow(me,.42):0,me+=.03*Math.exp(-Math.pow((ae-.46)*7,2));let vt=Math.min(1,Math.max(0,(ae-.8)/.2));me*=1-vt*vt*(3-2*vt)}let Xe=(Ae*z+He)*4;oe[Xe]=255,oe[Xe+1]=240-Math.min(88,ae*92),oe[Xe+2]=214-Math.min(150,ae*168),oe[Xe+3]=Math.max(0,Math.min(255,me*255))|0}U.putImageData(ee,0,0);let J=new hr(Y);J.minFilter=qt,qn=new lr(new or({map:J,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:Ut,opacity:0})),qn.scale.setScalar(600),qn.renderOrder=4,qn.visible=!1,Dt.add(qn);let Ee=256,Te=document.createElement("canvas");Te.width=Te.height=Ee*2;let ve=Te.getContext("2d");ve.translate(Ee,Ee);let re=46;for(let Ae=0;Ae<re;Ae++){let He=Ae/re*f,Ke=(Math.sin(Ae*2.31)+Math.sin(Ae*.73)+Math.sin(Ae*5.7)*.4)/2.4,Ve=Ee*(.34+.62*Math.pow(Math.abs(Ke),.85)),ae=.01+.02*Math.abs(Math.sin(Ae*1.7)),me=ve.createLinearGradient(0,0,Math.cos(He)*Ve,Math.sin(He)*Ve);me.addColorStop(0,"rgba(255,240,205,0.42)"),me.addColorStop(.22,"rgba(255,206,138,0.16)"),me.addColorStop(.6,"rgba(255,164,86,0.045)"),me.addColorStop(1,"rgba(255,140,60,0)"),ve.fillStyle=me,ve.beginPath(),ve.moveTo(0,0),ve.lineTo(Math.cos(He-ae)*Ve,Math.sin(He-ae)*Ve),ve.lineTo(Math.cos(He)*Ve*1.04,Math.sin(He)*Ve*1.04),ve.lineTo(Math.cos(He+ae)*Ve,Math.sin(He+ae)*Ve),ve.closePath(),ve.fill()}let Se=new hr(Te);Se.minFilter=qt,di=new lr(new or({map:Se,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:Ut,opacity:.6})),di.scale.setScalar(420),di.renderOrder=2,di.visible=!1,Dt.add(di)})();let Ko=null;function X1(){if(Ko)return Ko;let o=256,u=document.createElement("canvas");u.width=u.height=o;let p=u.getContext("2d"),v=p.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);return[[0,0],[.543,0],[.547,.16],[.6,.2],[.67,.24],[.676,.72],[.72,.95],[.775,.86],[.82,.97],[.856,.88],[.862,.1],[.886,.08],[.894,.66],[.94,.61],[.973,.56],[.9765,.06],[.98,.58],[.997,.44],[1,0]].forEach(([E,w])=>v.addColorStop(E,`rgba(255,255,255,${w})`)),p.fillStyle=v,p.fillRect(0,0,o,o),Ko=new hr(u),Ko.minFilter=qt,Ko}function Ap(o,u){let p=new Pn(Object.assign({color:16777215,transparent:!0,opacity:1},o));return p.onBeforeCompile=v=>{v.vertexShader=`attribute float aAlpha;
varying float vStarA;
`+(u?`varying float vFres;
`:"")+v.vertexShader.replace("void main() {",`void main() {
	vStarA = aAlpha;`),u&&(v.vertexShader=v.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
	vec3 sNrm = normal;
#ifdef USE_INSTANCING
	sNrm = mat3( instanceMatrix ) * sNrm;
#endif
	vFres = 1.0 - abs( dot( normalize( normalMatrix * sNrm ),
	                       normalize( -mvPosition.xyz ) ) );`)),v.fragmentShader=`varying float vStarA;
`+(u?`varying float vFres;
`:"")+v.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`vec4 diffuseColor = vec4( diffuse, opacity * vStarA );
	if ( diffuseColor.a < 0.002 ) discard;`+(u?`
	float sHot = pow( 1.0 - vFres, 0.55 );
	diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0 ), sHot );
	diffuseColor.rgb *= 1.0 + sHot * sHot * 1.9;`:""))},p.customProgramCacheKey=()=>u?"starHot":"starAlpha",p}let In=null;function Y1(){if(In)return In;let o=768,u=o/2,p=.4,v=p*(46/22),b=document.createElement("canvas");b.width=b.height=o;let E=b.getContext("2d"),w=E.createImageData(o,o),T=w.data,P=new Float32Array(o*o*3),I=1e-6,D=(ue,de)=>Math.exp(-(ue*ue)/(2*de*de)),R=ue=>ue<0?0:ue>1?1:ue,F=(ue,de)=>Math.max(.34,.78+.46*(.54*Math.sin(ue*1+de)+.29*Math.sin(ue*2.3+de*1.7+1.1)+.17*Math.sin(ue*4.1-de*.9+2.7))),z=(ue,de)=>.7+.3*F(ue,de),Y=(ue,de)=>.84+.22*Math.sin(ue*17+de*41)+.13*Math.sin(ue*31-de*23+2),U=[0,0,0],ee=(ue,de)=>{if(ue=R(ue),U[0]=1,U[1]=.4+.6*R((ue-.02)/.38),U[2]=.14+.86*R((ue-.1)/.48),de){let H=R((ue-.66)/.34);U[0]-=.74*H,U[1]-=.24*H}return U};for(let ue=0;ue<o;ue++){let de=(ue-u)/u;for(let H=0;H<o;H++){let J=(H-u)/u,Ee=Math.sqrt(J*J+de*de);if(Ee>=1)continue;let Te=(ue*o+H)*3,ve=0,re=0,Se=0,Ae=(Ye,$e)=>{ve+=Ye*$e[0],re+=Ye*$e[1],Se+=Ye*$e[2]},He=Math.atan2(de,J),Ke=Ee>1e-4?-de/Ee:0,Ve=F(He,0),ae=Y(He,Ee),me=Ee-p;{let Ye=.0155*(.8+.38*F(He,2.2)),$e=D(me,Ye)*(me<0?.34:1);me>0&&($e+=.17*Math.exp(-me/.14)),$e*=.46*Ve*ae,$e>.002&&Ae($e,ee((me+.016)/.052,!1))}{let Ye=D(me,.019)*Math.pow(R(Ke),5)*.6*Ve;Ye>.002&&Ae(Ye,ee((me+.02)/.062,!1));let $e=D(me,.025)*Math.pow(R(-Ke),6)*.28*Ve;$e>.002&&Ae($e,ee((me+.024)/.07,!1))}{let Ye=Math.min(Math.abs(He),Math.abs(Math.abs(He)-Math.PI)),$e=Math.abs(He)<Math.PI*.5,vt=F($e?.6:3.4,1.3),ct=D(Ye,.145)*D(me,.028)*.84*vt;if(ct>.002&&Ae(ct,ee((me+.02)/.075,!1)),me>0){let Ot=.4*D(Ye,.082)*Math.exp(-me/.115)*vt;Ot>.002&&Ae(Ot,ee(.72+.28*R(me/.2),!0))}}{let Ye=.024+.032*Math.abs(de),$e=D(J,Ye)*Math.max(0,1-Math.abs(de)/.94);$e=$e*$e*.92*z(de*3,4.1),$e>.002&&Ae($e,[1,.93,.77])}{let Ye=D(de,.012)*Math.max(0,1-Math.abs(J)/.99)*.3*z(J*2.6,5.7);Ye>.002&&Ae(Ye,[.93,.97,1])}{let Ye=Ee-v,$e=D(Ye,.024)*(Ye<0?.4:1)*.2*F(He,3.9)*ae;$e>.002&&Ae($e,ee((Ye+.022)/.068,!1))}{let Ye=Math.hypot(J,de+v+.55)-.55,$e=D(Ye,.016)*Math.pow(R(Ke),2.4)*D(J,.22)*.66*F(1.9,6.3);$e>.002&&Ae($e,ee(R(.5-Ye/.042),!0))}if(ve+re+Se<1e-4)continue;P[Te]=ve,P[Te+1]=re,P[Te+2]=Se;let Xe=Math.max(ve,Math.max(re,Se));Xe>I&&(I=Xe)}}for(let ue=0;ue<o;ue++){let de=(ue-u)/u;for(let H=0;H<o;H++){let J=(H-u)/u,Ee=Math.sqrt(J*J+de*de),Te=(ue*o+H)*3,ve=(ue*o+H)*4,re=P[Te],Se=P[Te+1],Ae=P[Te+2],He=Math.max(re,Math.max(Se,Ae));if(He<1e-4)continue;let Ke=He/I,Ve=R((Ee-.86)/.14);if(Ke*=1-Ve*Ve*(3-2*Ve),Ke<.0016)continue;let ae=1/He;T[ve]=Math.min(255,re*ae*255)|0,T[ve+1]=Math.min(255,Se*ae*255)|0,T[ve+2]=Math.min(255,Ae*ae*255)|0,T[ve+3]=Math.max(0,Math.min(255,Ke*255))|0}}E.putImageData(w,0,0);let oe=new hr(b);return oe.minFilter=qt,In=new lr(new or({map:oe,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ut,opacity:0})),In.scale.setScalar(600),In.renderOrder=5,In.visible=!1,Dt.add(In),In}function iv(){if($t=new On,Dt.add($t),op=new On,$t.add(op),bg=[],Tt.length){let w=Tt.length,T=new vi(1,4),P=new vi(1.42,2),I=new Hi(2.2,2.235,128),D=new Hi(2.86,2.882,128),R=new Float32Array(w),F=new Float32Array(w*3),z=new Float32Array(w*3);bu=new Float32Array(w).fill(1),_u=new Float32Array(w).fill(1),Mu=new Float32Array(w).fill(1),Eu=new Float32Array(w).fill(1),T.setAttribute("aAlpha",new wn(bu,1)),T.setAttribute("aSeed",new wn(R,1)),T.setAttribute("aCore",new wn(F,3)),T.setAttribute("aEdge",new wn(z,3)),P.setAttribute("aAlpha",new wn(_u,1)),I.setAttribute("aAlpha",new wn(Mu,1)),D.setAttribute("aAlpha",new wn(Eu,1)),Zo=new mn({vertexShader:Jo,fragmentShader:Tp,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new Ce(1,1,1)},uEdge:{value:new Ce(1,1,1)}},transparent:!0,depthWrite:!0}),Ys=new cr(T,Zo,w),Na=new cr(P,Ap({side:xn,blending:Ut,depthWrite:!1}),w),Ha=new cr(I,Ap({side:ri,blending:Ut,depthWrite:!1}),w),Ba=new cr(D,Ap({side:ri,blending:Ut,depthWrite:!1}),w),[Ys,Na,Ha,Ba].forEach(U=>{U.instanceMatrix.setUsage(Fi),U.frustumCulled=!1,op.add(U)});let Y=1;Tt.forEach(U=>{(U.n|0)>Y&&(Y=U.n|0)}),Tt.forEach((U,ee)=>{U.si=ee,U.sR=U.R||(U.tier===0?8:5),U.sx=0,U.sy=0,U.rz=Math.random()*f,U.rx=Math.PI/2-(U.tier?.1:.36);let oe=Math.log(1+(U.n|0))/Math.log(1+Y),ue=3400+oe*oe*3600;U.temp=ue,R[ee]=(Yo(U.key||String(ee))&4095)/4096;let de=Wa(ue),H=Wa(ue*.762);F[ee*3]=de[0],F[ee*3+1]=de[1],F[ee*3+2]=de[2],z[ee*3]=H[0],z[ee*3+1]=H[1],z[ee*3+2]=H[2];let J=pp(ue);U.starCol=new Ce(J[0],J[1],J[2]),Na.setColorAt(ee,U.color),Ha.setColorAt(ee,U.color),Ba.setColorAt(ee,U.color),U.op0={core:1,shell:.055,ring:.115,ring2:.055,glow:U.tier===0?1.05:.58},U.vis=1,bg.push(U)}),[Ys,Na,Ha,Ba].forEach(U=>{U.instanceColor&&(U.instanceColor.needsUpdate=!0)})}Xs=null,mr=new wt(new vi((Mt||1200)+120,3),new Pn({color:4216427,wireframe:!0,transparent:!0,opacity:.016,blending:Ut,depthWrite:!1,side:ri})),mr.scale.y=.68,mr.visible=Q>0,$t.add(mr),ns=function(){if(!Q||!pr.length)return null;let T=pr[pr.length-1]*1.35,P=128,I=12,D=[],R=[],F=[.3,.62,.85],z=(oe,ue,de,H,J,Ee)=>{D.push(oe,0,ue,de,0,H),R.push(F[0]*J,F[1]*J,F[2]*J,F[0]*Ee,F[1]*Ee,F[2]*Ee)},Y=pr.slice();Y.push(T),Y.forEach((oe,ue)=>{let de=ue===Y.length-1?.11:.2;for(let H=0;H<P;H++){let J=H/P*f,Ee=(H+1)/P*f;z(Math.cos(J)*oe,Math.sin(J)*oe,Math.cos(Ee)*oe,Math.sin(Ee)*oe,de,de)}});for(let oe=0;oe<I;oe++){let ue=oe/I*f,de=Math.cos(ue),H=Math.sin(ue),J=pr[0]*.28;z(de*J,H*J,de*T,H*T,.2,.02)}for(let oe=0;oe<36;oe++){let ue=oe/36*f,de=Math.cos(ue),H=Math.sin(ue),J=oe%9===0?T*.045:T*.018;z(de*T,H*T,de*(T+J),H*(T+J),.24,.05)}let U=new it;U.setAttribute("position",new Ze(new Float32Array(D),3)),U.setAttribute("color",new Ze(new Float32Array(R),3));let ee=new Zn(U,new hn({vertexColors:!0,transparent:!0,opacity:.85,blending:Ut,depthWrite:!1}));return ee.frustumCulled=!1,ee.visible=!!W.grid,$t.add(ee),ee}();let o=`
varying vec3 vW;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,u=`
uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uCol;
uniform float uR0, uR1, uAmt;
varying vec3 vW;
void main(){
  vec3 rel = vW - uSun;
  float r = length(rel);
  float x = r / uR0;
  /* the radial law, held off the star: inside 0.9 r0 the corona and the
     glare sprite are what a reader sees, and a sheet running to r^-2.3
     under them is a white hole */
  float rad = pow(max(x, 0.35), -2.3);
  float hole = smoothstep(0.30, 1.0, x);
  float edge = 1.0 - smoothstep(uR1 * 0.55, uR1, r);
  vec3 toCam = normalize(uCam - vW);
  vec3 toSun = normalize(uSun - vW);
  /* c = 1: the star is behind the camera, the dust is seen full and lit
     from the front. c = -1: the star is beyond the dust, seen through it. */
  float c = clamp(dot(toCam, toSun), -1.0, 1.0);
  /* Henyey\u2013Greenstein with the scattering angle's cosine, which is -c: the
     light came *from* the star and leaves *toward* the camera */
  float g = 0.55;
  float fwd = (1.0 - g * g) / pow(1.0 + g * g + 2.0 * g * c, 1.5);
  /* the gegenschein: a backscatter peak a few degrees across */
  float back = 0.55 * exp(-(1.0 - c) * 28.0);
  float ph = 0.28 + 0.12 * fwd + back;
  float I = rad * hole * edge * ph * uAmt;
  gl_FragColor = vec4(uCol * I, 1.0);
}`;if(Fa=function(){if(!Q||!pr.length||k<0)return null;let T=pr[0]*.34,P=pr[pr.length-1]*1.15,I=new $r(P*2,P*2,1,1);I.rotateX(-Math.PI/2);let D=new mn({uniforms:{uSun:{value:new L},uCam:{value:new L},uCol:{value:new Ce(1,.9,.76)},uR0:{value:T},uR1:{value:P},uAmt:{value:0}},vertexShader:o,fragmentShader:u,transparent:!0,depthWrite:!1,depthTest:!0,side:ri,blending:Ut}),R=new wt(I,D);return R.frustumCulled=!1,R.renderOrder=-2,$t.add(R),R}(),function(){let T=Tt.length;if(!T){Oi=Ri=null;return}let P=new Float32Array(T*3),I=new Float32Array(T),D=new Float32Array(T*3),R=new Float32Array(T);Tt.forEach((de,H)=>{de.pos.toArray(P,H*3),de.gz0=de.R*(de.tier===0?17:10),I[H]=de.gz0,R[H]=de.tier===0?.85:.5,de.color.clone().lerp(new Ce(16777215),.44).toArray(D,H*3)});let F=new it;F.setAttribute("position",new Ze(P,3)),F.setAttribute("aSize",new Ze(I,1)),F.setAttribute("aColor",new Ze(D,3)),F.setAttribute("aAlpha",new Ze(R,1)),Sc(F,T),Oi=new Ni(F,Gi(600,.07,.62)),Oi.material.uniforms.uMinPx.value=3.2,Oi.frustumCulled=!1,$t.add(Oi);let z=3,Y=new Float32Array(T*z*3),U=new Float32Array(T*z),ee=new Float32Array(T*z*3),oe=new Float32Array(T*z);Tt.forEach((de,H)=>{de.hzA=de.oA0*2.7+H*1.9;let J=de.reachA!==void 0?de.reachA+de.reachB*W.gap:de.reach||120,Ee=de.color.clone().lerp(new Ce(4880584),.22);for(let Te=0;Te<z;Te++){let ve=H*z+Te;de.pos.toArray(Y,ve*3),U[ve]=de.tier===0?J*(Te?3.4:5):0,oe[ve]=0,Ee.toArray(ee,ve*3)}});let ue=new it;ue.setAttribute("position",new Ze(Y,3)),ue.setAttribute("aSize",new Ze(U,1)),ue.setAttribute("aColor",new Ze(ee,3)),ue.setAttribute("aAlpha",new Ze(oe,1)),Sc(ue,T*z),Ri=new Ni(ue,Gi(600,0,0)),Ri.frustumCulled=!1,Ri.renderOrder=-1,$t.add(Ri)}(),zt=null,Q&&k>=0){let w=ye[k];zt=new On;let T=new mn({vertexShader:Jo,fragmentShader:Tp,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new Ce().fromArray(Wa(6300))},uEdge:{value:new Ce().fromArray(Wa(4800))}}}),P=new wt(new vi(w,5),T);zt.add(P);let I=new mn({vertexShader:Jo,fragmentShader:nv,transparent:!0,depthWrite:!1,blending:Ut,uniforms:{uCol:{value:new Ce(16742986)},uAmt:{value:.95},uTime:{value:0}}}),D=new wt(new vi(w*1.04,4),I);zt.add(D);let R=new mn({vertexShader:Jo,fragmentShader:q1,transparent:!0,depthWrite:!1,blending:Ut,uniforms:{uCol:{value:new Ce(16738874)},uAmt:{value:2},uTime:{value:0}}}),F=new wt(new vi(w*1.18,4),R);zt.add(F);let z=new wt(new vi(w*1.55,3),new Pn({color:16764810,transparent:!0,opacity:.085,blending:Ut,depthWrite:!1,side:xn}));zt.add(z);let Y=3.6+Math.min(2.2,w*.03);zt.userData={surface:P,rim:D,pro:F,halo:z,R:w,lit:Y,surfMat:T,rimMat:I,proMat:R},$t.add(zt),Hu.intensity=Y}$i=new vi(1,Q>900?2:3),Su=new Sa({emissive:132620,emissiveIntensity:1,shininess:18,specular:725014,flatShading:!1}),Su.extensions={derivatives:!0},Su.onBeforeCompile=w=>{Kg(w,!0),Vg(w,!0)},Sn=new cr($i,Su,Math.max(1,Q)),Sn.count=Q,Sn.instanceMatrix.setUsage(Fi),Sn.frustumCulled=!1,$t.add(Sn);for(let w=0;w<Q;w++)Sn.setColorAt(w,new Ce(Be[w*3],Be[w*3+1],Be[w*3+2]));Sn.instanceColor&&(Sn.instanceColor.setUsage(Fi),Sn.instanceColor.needsUpdate=!0);{let w=new Float32Array(Math.max(1,Q)*4);jo=new Uint8Array(Math.max(1,Q));for(let T=0;T<Q;T++)tv(T,w,T*4),jo[T]=w[T*4+3];$i.setAttribute("aSurf",new wn(w,4)),W1()}{_p=new Array(Q),Mc=new Float32Array(Math.max(1,Q)),Js=new Float32Array(Math.max(1,Q)*4),Ks=new Float32Array(Math.max(1,Q)*4),Li=new Float32Array(Math.max(1,Q)*4),Au=new Float32Array(Math.max(1,Q)),ui=new Float32Array(Math.max(1,Q)*4);let w=new Ce(16777215),T=new Ce;for(let I=0;I<Q;I++){let D=tt[I],R=null;if(D.kind==="wiki")R=D.anchor;else if(D.kind==="moon"){let F=tt[D.anchorNode];R=F&&F.kind==="wiki"?F.anchor:null}_p[I]=R,Mc[I]=R?Math.max(20,(R.reach||60)*.55):Math.max(300,(Mt||1600)*.9),R?T.copy(R.starCol||R.color):T.copy(A1),T.toArray(Ks,I*4),Ks[I*4+3]=D.kind==="wiki"?1:D.kind==="moon"?.18:D.kind==="core"?0:.4,D.kind==="moon"&&(Li[I*4+3]=ye[D.anchorNode]||0,Au[I]=R?R.R||6:k>=0?ye[k]:34),Bu(I,W.spr,1,Js.subarray(I*4,I*4+4))}let P=new wn(Js,4);P.setUsage(Fi),$i.setAttribute("aStar",P),$i.setAttribute("aStarCol",new wn(Ks,4));{let I=new wn(Li,4);I.setUsage(Fi),$i.setAttribute("aOcc",I),$i.setAttribute("aOccS",new wn(Au,1)),$i.setAttribute("aRingS",new wn(ui,4))}}gr=new it,hc=new Float32Array(Math.max(1,Q)*3),js=new Float32Array(Math.max(1,Q)),Oa=new Float32Array(Math.max(1,Q)*3),Tu=new Float32Array(Math.max(1,Q)),Zs=new Float32Array(Math.max(1,Q));for(let w=0;w<Q;w++)Zs[w]=js[w]=ye[w]*(tt[w].kind==="core"?16:tt[w].kind==="wiki"?9:7.5),Tu[w]=tt[w].kind==="wiki"?.8:tt[w].kind==="core"?1:.58,Oa[w*3]=Be[w*3],Oa[w*3+1]=Be[w*3+1],Oa[w*3+2]=Be[w*3+2];gr.setAttribute("position",new Ze(hc,3)),gr.setAttribute("aSize",new Ze(js,1)),gr.setAttribute("aColor",new Ze(Oa,3)),gr.setAttribute("aAlpha",new Ze(Tu,1)),Sc(gr,Math.max(1,Q)),gr.setDrawRange(0,Q),za=new Ni(gr,Gi(600,.06,0)),za.material.uniforms.uMinPx.value=1.8,za.frustumCulled=!1,$t.add(za);let p=40;Pi=[];{let w=D=>D!==k&&Fe[D].k!=="raw"&&(Fe[D].inb|0)>=3,T=new Map,P=[];for(let D=0;D<Q;D++){if(!w(D))continue;P.push(D);let R=Fe[D].c,F=T.get(R);(F===void 0||(Fe[D].inb|0)>(Fe[F].inb|0))&&T.set(R,D)}P.sort((D,R)=>(Fe[R].inb|0)-(Fe[D].inb|0));let I=new Set(T.values());P.slice(0,Math.max(1,Math.ceil(P.length*.01))).forEach(D=>I.add(D)),Pi=P.filter(D=>I.has(D)).slice(0,p)}if(Pi.length){let w=Math.max.apply(null,Pi.map(I=>Fe[I].inb|0)),T=new Hi(1,1.8297,128,1),P=new Pn({map:X1(),transparent:!0,opacity:.72,side:ri,blending:Ut,depthWrite:!1});P.customProgramCacheKey=()=>"vo-ring-shadow",P.onBeforeCompile=I=>{I.vertexShader=`attribute vec4 aRing;
varying vec3 vRP; varying vec3 vRC; varying vec3 vRS; varying float vRR;
`+I.vertexShader,I.vertexShader=I.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vRP = mvPosition.xyz;
  vRC = (modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  vRS = (viewMatrix * modelMatrix * vec4(aRing.xyz, 1.0)).xyz;
  vRR = aRing.w;`),I.fragmentShader=`varying vec3 vRP; varying vec3 vRC; varying vec3 vRS; varying float vRR;
`+I.fragmentShader,I.fragmentShader=I.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 L = normalize(vRS - vRC);
    vec3 rel = vRP - vRC;
    float tt = dot(rel, L);
    float sh = 1.0;
    if (tt < 0.0 && vRR > 0.0) {
      float d = length(rel - L * tt);
      sh = 0.07 + 0.93 * smoothstep(vRR * 0.80, vRR * 1.30, d);
    }
    vec3 vw = normalize(-vRP);
    float cth = clamp(dot(-L, vw), -1.0, 1.0);
    float den = 1.3844 - 1.24 * cth;
    float fw = min(0.6156 / max(den * sqrt(max(den, 1e-4)), 0.02), 4.0);
    outgoingLight *= sh * (0.70 + 0.32 * fw);
    diffuseColor.a *= sh;
  }
#include <output_fragment>`)},$n=new cr(T,P,Pi.length),$n.instanceMatrix.setUsage(Fi),$n.frustumCulled=!1,$t.add($n),Du=[],Uo=new Float32Array(Pi.length),vc=new Float32Array(Pi.length*4);{let I=new wn(vc,4);I.setUsage(Fi),T.setAttribute("aRing",I)}Pi.forEach((I,D)=>{Du.push(new pn().setFromEuler(new Ir(Di[I*4]+Math.PI*.5,0,0))),Uo[D]=1.185+(Fe[I].inb|0)/w*.135,ui[I*4]=0,ui[I*4+1]=Math.cos(Di[I*4]),ui[I*4+2]=Math.sin(Di[I*4]),ui[I*4+3]=ye[I]*Uo[D],$n.setColorAt(D,new Ce(y(Be[I*3],1,.3),y(Be[I*3+1],1,.3),y(Be[I*3+2],1,.3)))}),$n.instanceColor&&($n.instanceColor.needsUpdate=!0)}Un=Kn.length,xc=Un>4e3?10:Un>1500?14:24,pt=new Array(Un),qs=new Float32Array(Math.max(1,Un)).fill(1);{let w=wp(Math.max(1,Un),xc);uc=w.geo,_g=w.pos,Mg=w.col,Sg=w.perStrip,uc.setDrawRange(0,Un*w.idxPerStrip),Eg=xp(1),Ru=new wt(uc,Eg),Ru.frustumCulled=!1,$t.add(Ru)}Tg=new Int32Array(Iu),Lu=new Int32Array(Q);for(let w=0;w<Q;w++)Lu[w]=w;Lu.sort((w,T)=>ye[T]-ye[w]);{let w=wp(Iu,Va);$s=w.geo,lp=w.pos,cp=w.col,Jb=w.perStrip,Ag=w.idxPerStrip,$s.setDrawRange(0,0),Bo=new wt($s,xp(1.45)),Bo.frustumCulled=!1,$t.add(Bo)}dc=new Int32Array(Nr),Oo=new Float32Array(Nr),hp=new Float32Array(Nr);for(let w=0;w<Nr;w++)dc[w]=Math.floor(Math.random()*Math.max(1,Un)),Oo[w]=Math.random(),hp[w]=.0024+Math.random()*.005;fc=new Float32Array(Nr*Hr*3),up=new Float32Array(Nr*Hr),pc=new Float32Array(Nr*Hr*3),Cu=new Float32Array(Nr*Hr),vr=new it,vr.setAttribute("position",new Ze(fc,3)),vr.setAttribute("aSize",new Ze(up,1)),vr.setAttribute("aColor",new Ze(pc,3)),vr.setAttribute("aAlpha",new Ze(Cu,1)),Sc(vr,Nr*Hr),mc=new Ni(vr,Gi(600)),mc.frustumCulled=!1,mc.visible=Un>0,$t.add(mc),Fr=new On,Fr.visible=!1,$t.add(Fr),Pu=new wt(new Hi(1,1.02,96),new Pn({color:16758344,transparent:!0,opacity:.85,side:ri,blending:Ut,depthWrite:!1})),Fr.add(Pu),yr=new wt(new Hi(1,1.05,48),new Pn({color:6087167,transparent:!0,opacity:.75,side:ri,blending:Ut,depthWrite:!1})),yr.visible=!1,$t.add(yr),Ci=new On,Ci.visible=!1,$t.add(Ci);let v=10980346;gc=new wt(new Hi(1,1.045,84),new Pn({color:v,transparent:!0,opacity:.85,side:ri,blending:Ut,depthWrite:!1})),Ci.add(gc),zo=new wt(new Hi(1,1.1,64,1,0,f*.34),new Pn({color:v,transparent:!0,opacity:.6,side:ri,blending:Ut,depthWrite:!1})),Ci.add(zo),Ua=new wt(new _o(1,0),new Pn({color:v,transparent:!0,opacity:.75,blending:Ut,depthWrite:!1})),Ci.add(Ua),is=[],Tt.forEach(w=>{let T=sv(w.code,"#5ce1ff",w.tier===0?22:17,!0);$t.add(T),is.push({sprite:T,get:()=>w.pos,far:(w.tier===0?1.6:2.8)*Math.max(600,(Mt||1200)*.8),cat:w})});let b=220,E=[];for(let w=0;w<Q;w++)Fe[w].k!=="raw"&&E.push(w);E.sort((w,T)=>(Fe[T].inb|0)-(Fe[w].inb|0)),E.slice(0,b).forEach(w=>{let T=sv(Fe[w].n,"#9beaff",12+Math.min(7,Fe[w].inb*.12));T.material.opacity=0,$t.add(T),is.push({sprite:T,idx:w,far:Math.max(420,(Mt||1200)*.42),node:!0})}),qg(Mt||1600),Yg(Mt||1600),vm(),Qn&&(Qn.visible=Q>0,Qn.scale.setScalar(Math.max(120,(ye[k]||17)*15))),di&&(di.visible=Q>0,di.scale.setScalar(Math.max(120,(ye[k]||17)*15)*1.62)),qn&&(qn.visible=!1,qn.material.opacity=0),In&&(In.visible=!1,In.material.opacity=0),Cg(),Ga(),cs.at=performance.now(),cs.n=0,cs.sum=0}let cs={at:0,n:0,sum:0};function j1(o){if(W.qAuto||!cs.at||Q<600||Re.on)return;let u=o-cs.at;u<3e3||(cs.sum+=qc,cs.n++,!(u<7e3)&&(W.qAuto=1,cs.sum/cs.n<26&&Ne()!=="fast"?(We("fast",!0),bt(A("q.auto"),6e3)):un()))}let Z1='"Malgun Gothic","Apple SD Gothic Neo","Yu Gothic UI","Microsoft YaHei UI","Segoe UI",sans-serif',rv=26;function sv(o,u,p,v){let b=String(o),E=b.length>rv?b.slice(0,rv-1)+"\u2026":b,w=46,T=15,P=Math.round(w*.15),I=document.createElement("canvas"),D=I.getContext("2d"),R=(v?"700 ":"600 ")+w+"px "+Z1,F=v&&"letterSpacing"in D?Math.round(w*.13)+"px":"";F&&(D.letterSpacing=F),D.font=R,I.width=Math.ceil(D.measureText(E).width)+T*2+(F?w*.13:0),I.height=w+T*2,D.font=R,F&&(D.letterSpacing=F),D.textBaseline="middle",D.lineJoin="round",D.miterLimit=2;let z=I.height/2;D.shadowColor=u,D.shadowBlur=24,D.strokeStyle=u,D.lineWidth=P*.55,D.strokeText(E,T,z),D.shadowBlur=0,D.strokeStyle="rgba(2,7,14,.93)",D.lineWidth=P,D.strokeText(E,T,z),D.fillStyle="#eaf9ff",D.fillText(E,T,z);let Y=new hr(I),U=Vt.capabilities.isWebGL2;Y.generateMipmaps=U,Y.minFilter=U?La:qt,Y.magFilter=qt,Y.anisotropy=Math.max(1,Math.min(8,Vt.capabilities.getMaxAnisotropy()));let ee=new lr(new or({map:Y,transparent:!0,depthWrite:!1,depthTest:!0,opacity:.9}));return ee.scale.set(p*I.width/I.height,p,1),ee.renderOrder=5,ee}function J1(){$t&&($t.traverse(o=>{o.geometry&&o.geometry.dispose(),(Array.isArray(o.material)?o.material:o.material?[o.material]:[]).forEach(p=>{p.map&&p.map.dispose();let v=Or.indexOf(p);v>=0&&Or.splice(v,1),v=Wo.indexOf(p),v>=0&&Wo.splice(v,1),v=_c.indexOf(p),v>=0&&_c.splice(v,1),p.dispose()})}),Dt.remove($t),$t=null,Xs=Oi=Ri=mr=Sn=za=Ru=mc=null,ns=Fa=null,Bo=$s=lp=cp=null,Fr=yr=Ci=ka=zt=null,Ys=Na=Ha=Ba=null,Zo=null,bu=_u=Mu=Eu=null,$n=null,Pi=[],Du=[],Uo=null,vc=null,Ko=null,is=[])}let he={tgt:new L(0,0,0),tgtD:new L(0,0,0),dist:2400,distD:1250,th:.7,thD:.7,ph:1.06,phD:1.06,roll:0,rollD:0,thV:0,phV:0,aX:0,aY:0,idle:0,follow:-1};function hs(){he.idle=0}let $o={th:.62,ph:.95,dist:1250};function K1(){he.follow=-1,he.tgtD.set(0,0,0),he.thD=$o.th,he.phD=$o.ph,he.distD=$o.dist,he.rollD=0,he.thV=0,he.phV=0,hs()}function $1(o){if(he.follow>=0&&(he.follow<Q?he.tgtD.set(G[he.follow*3],G[he.follow*3+1],G[he.follow*3+2]):he.follow=-1),Mr===1&&ms<0){let P=g(o>1e-4?.016666666666666666/o:1,.25,4);he.thV=he.thV*.45+he.aX*P*.14,he.phV=he.phV*.45+he.aY*P*.14}else if(he.thV||he.phV){he.thD-=he.thV*o*60,he.phD=g(he.phD-he.phV*o*60,.12,Math.PI-.12);let P=Math.pow(.045,o);he.thV*=P,he.phV*=P,Math.abs(he.thV)<2e-5&&(he.thV=0),Math.abs(he.phV)<2e-5&&(he.phV=0)}he.aX=0,he.aY=0,he.idle+=o,he.idle>7&&(he.thD-=o*.019*g((he.idle-7)/4,0,1));let u=1-Math.pow(.0012,o);he.dist=y(he.dist,he.distD,u),he.th=y(he.th,he.thD,u),he.ph=y(he.ph,he.phD,u),he.roll=y(he.roll,he.rollD,u*.7),he.tgt.lerp(he.tgtD,u);let p=he.th,v=he.ph,b=he.dist,E=he.roll,w=Math.sin(v),T=Math.cos(v);if(Ue.position.set(he.tgt.x+b*w*Math.sin(p),he.tgt.y+b*T,he.tgt.z+b*w*Math.cos(p)),Ue.up.set(Math.sin(E),Math.cos(E),0),Ue.lookAt(he.tgt),At){let P=d("mindbox").offsetWidth;if(P>1){let I=2*b*Math.tan(Ue.fov*Math.PI/360)*Ue.aspect;av.set(1,0,0).applyQuaternion(Ue.quaternion).multiplyScalar(I*(P*.5/Math.max(1,t()))),Ue.position.add(av)}}}let av=new L;function Q1(o,u,p){he.thD-=o,he.phD=g(he.phD-u,.12,Math.PI-.12),p&&(he.aX+=o,he.aY+=u),hs()}function e_(o){he.distD=g(he.distD*o,12,24e3),hs()}function t_(o,u){let p=new L().setFromMatrixColumn(Ue.matrix,0),v=new L().setFromMatrixColumn(Ue.matrix,1),b=he.distD*.0016;he.follow=-1,he.tgtD.addScaledVector(p,-o*b).addScaledVector(v,u*b),hs()}function Rp(){K1(),bt("VIEW RESET")}function zu(o,u){o<0||o>=Q||(fi(o),he.follow=o,he.tgtD.set(G[o*3],G[o*3+1],G[o*3+2]),he.distD=g(ye[o]*(u?9:20)+34,34,900),he.thV=0,he.phV=0,hs())}function ov(){if(!Q)return 0;let o=new Float64Array(Q);for(let u=0;u<Q;u++)o[u]=Math.hypot(G[u*3],G[u*3+1],G[u*3+2]);return o.sort(),Q<12?o[Q-1]:o[Math.min(Q-1,Math.floor(Q*.93))]}function Lp(){if(!$t)return;fm(0);let o=ov();he.follow=-1,he.tgtD.set(0,0,0),he.rollD=0,he.thD=.62,he.phD=.95,he.thV=0,he.phV=0,he.distD=Q?g(o*1.25+120,200,22e3):1250,he.dist=he.distD*1.35,he.tgt.set(0,0,0),$o.th=he.thD,$o.ph=he.phD,$o.dist=he.distD,hs()}let Uu=new L,lv=new L,cv=12,n_=2.2,i_=1.18,ja=[];function Cp(o,u,p){if(!Q)return-1;Ue.updateMatrixWorld();let v=t(),b=n(),E=(o*.5+.5)*v,w=(-u*.5+.5)*b,T=b*.5/Math.tan(Ue.fov*Math.PI/360);ja.length=0;let P=9;for(let z=0;z<Q;z++){if(ft[z]<.12)continue;lv.set(G[z*3]-Ue.position.x,G[z*3+1]-Ue.position.y,G[z*3+2]-Ue.position.z);let Y=lv.length();if(Y<.001||(Uu.set(G[z*3],G[z*3+1],G[z*3+2]).project(Ue),Uu.z>1))continue;let U=(Uu.x*.5+.5)*v,ee=(-Uu.y*.5+.5)*b,oe=Math.hypot(U-E,ee-w),ue=Math.max(.6,ye[z]*T/Y),de=Math.max(ue,ye[z]*n_*T/Y);if(oe>Math.max(de,cv))continue;let H=oe<=ue?0:oe<=de?1:2,J=H===0?Y:H===1?oe/de:oe/cv;H<P&&(P=H),ja.push(z,H,J)}if(!ja.length)return-1;let I=-1,D=1e30,R=-1,F=0;for(let z=0;z<ja.length;z+=3){if(ja[z+1]!==P)continue;let Y=ja[z],U=ja[z+2];U<D&&(D=U,I=Y),Y===p&&(R=Y,F=U)}return R>=0&&R!==I&&F<=D*i_?R:I}let lt=-1,Mn=-1,ta="",us=!1,wr=-1,Za=new Set,Qo=new Set;function el(){return Za.size>1}function hv(o){wr=-1,(Za.size||Qo.size)&&(Za=new Set,Qo=new Set,o||bt(A("route.clear"))),Cc()}function r_(o,u){if(Za=new Set,Qo=new Set,o<0||u<0||o>=Q||u>=Q||o===u||!Xt)return 0;let p=new Int32Array(Q).fill(-1),v=new Uint8Array(Q);v[o]=1;let b=[o],E=!1;for(let P=0;P<b.length&&!E;P++){let I=b[P],D=Xt[I];D&&D.forEach(R=>{v[R]||(v[R]=1,p[R]=I,b.push(R),R===u&&(E=!0))})}if(!E)return 0;let w=[];for(let P=u;P>=0&&(w.push(P),P!==o);P=p[P]);w.forEach(P=>Za.add(P));let T=new Set;for(let P=0;P+1<w.length;P++){let I=w[P],D=w[P+1];T.add(I<D?I+":"+D:D+":"+I)}for(let P=0;P<Un;P++){let I=Kn[P],D=I[0],R=I[1];T.has(D<R?D+":"+R:R+":"+D)&&Qo.add(P)}return w.length-1}let Lc=new Set,uv=new Set;function fi(o,u){let p=lt;if(lt=o,Lc.clear(),o>=0&&(uv.add(o),o!==p&&!u&&(I_(o),Re.on||Ic(o,1))),he.follow=At?-1:o,wr>=0&&o>=0&&o!==wr){let v=r_(wr,o);wr=-1,bt(v?A("route.hops",{n:v}):A("route.none"))}o>=0&&Xt[o]&&Xt[o].forEach(v=>Lc.add(v)),Cc(),At&&o>=0&&Qp(o)}function dv(){let o=(xe.meta.years||[]).filter(Boolean);d("s-nodes").textContent=xe.meta.files||0,d("s-edges").textContent=xe.meta.edges||0,d("s-sys").textContent=Tt.length;{let p=xe.meta.broken|0;d("s-broken").textContent=p;let v=d("r-broken");v.classList.toggle("live",p>0),v.classList.toggle("on",us),v.title=p>0?A("broken.on"):A("broken.none")}d("s-span").textContent=o.length?o[0]+"\u2013"+o[o.length-1]:"\u2014",d("l-cnt").textContent=Tt.length,d("vault-name").textContent=xe.meta.vault||"EMPTY SPACE",d("hint").classList.toggle("on",Q===0&&!X),d("b-clear").style.display=Q&&!X?"":"none";let u=d("legbody");if(u.innerHTML="",!Tt.length){u.innerHTML='<div style="opacity:.3;font-size:11px;letter-spacing:.14em;padding:8px 0;text-align:center">NO VAULT LOADED</div>';return}Tt.forEach(p=>{let v=document.createElement("div");v.className="lrow",v.innerHTML='<span class="dot" style="color:#'+p.color.getHexString()+'"></span><em>'+M(Zg(p))+"</em><i>"+(p.temp?qp(p.temp)+" \xB7 ":"")+p.n+"</i>",p.temp&&(v.title=A("cls.star",{s:qp(p.temp),t:Math.round(p.temp/100)*100})),v.onclick=()=>{p.on=!p.on,v.classList.toggle("off",!p.on)},u.appendChild(v),p.el=v})}let Pp=14;function fv(o){let u=[],p=[],v=[];Kn.forEach(([P,I,D])=>{P===o?u.push([I,D]):I===o&&(D===1?v:p).push([P,D])});let b=(P,I)=>{if(!I.length)return"";let D=new Set,R=I.filter(([Y])=>!D.has(Y)&&D.add(Y)),F=([Y,U])=>'<a data-i="'+Y+'">'+(U===2?"\u2248 ":U===1?"\u2934 ":"\u2192 ")+M(Fe[Y].n)+"</a>",z=R.slice(Pp);return"<b>"+P+" ("+R.length+")</b>"+R.slice(0,Pp).map(F).join("")+(z.length?'<span class="rest">'+z.map(F).join("")+'</span><u class="more">'+A("insp.more",{n:z.length})+"</u>":"")},E=Fe[o],w="",T=E.bk|0;if(T>0){let P=E.bn||[],I=P.slice(0,Pp);w='<b class="warn">'+A("insp.broken")+" ("+T+")</b>"+I.map(D=>'<i class="dead">\u2715 '+M(D)+"</i>").join("")+(P.length>I.length||T>P.length?'<u class="more">'+A("insp.more",{n:T-I.length})+"</u>":"")}return b("OUTBOUND",u)+b("BACKLINKS",p)+b("SOURCE MATERIAL",v)+w}function pv(o,u){o.querySelectorAll("a").forEach(p=>{p.onclick=()=>u(+p.dataset.i)}),o.querySelectorAll("u.more").forEach(p=>{p.onclick=()=>{let v=p.previousElementSibling;v&&v.classList.contains("rest")&&v.classList.add("on"),p.remove()}})}function Cc(){if(lt<0||lt>=Q){d("i-empty").style.display="",d("i-real").style.display="none",d("i-kind").textContent="\u2014";return}let o=Fe[lt];d("i-empty").style.display="none",d("i-real").style.display="",d("i-kind").textContent=(o.k==="raw"?"RAW":"WIKI")+(o.d?" \xB7 "+o.d:""),d("i-name").textContent=o.n,d("i-path").textContent=o.p+"   \xB7   "+o.w+" words   \xB7   \u2190"+o.inb+(o.mt?"   \xB7   "+A("insp.touched",{t:a1(o.mt)}):"");{let T=R_(lt);T&&(d("i-path").textContent+="   \xB7   "+T)}let u=Og(lt);d("c-pl").textContent=u.links,d("c-mo").textContent=u.moons,d("c-mo2").textContent=u.far,mv(),d("i-props").innerHTML=(o.pr||[]).slice(0,12).map(T=>"<b>"+M(T[0])+"</b><s>"+M(T[1])+"</s>").join(""),d("i-tags").innerHTML=(o.t||[]).slice(0,10).map(T=>'<span class="tag">'+M(T)+"</span>").join(""),d("i-x").textContent=o.x||A("insp.nobody");let p=d("i-links");p.innerHTML=fv(lt),pv(p,T=>fi(T));let v=d("i-go"),b=o.n.length>12?o.n.slice(0,12)+"\u2026":o.n;v.textContent=q(b),d("i-route").textContent=A(el()?"insp.route.c":wr>=0?"insp.route.p":"insp.route"),d("i-route").classList.toggle("am",el()||wr>=0);let E=d("i-core"),w=lt===k;E.textContent=A(w&&W.coreNote?"insp.core.on":"insp.core"),E.style.display=w&&!W.coreNote?"none":"",d("i-route").style.gridColumn=E.style.display==="none"?"1 / -1":""}function mv(){let o=d("o-a"),u=d("o-e"),p=d("o-p"),v=d("o-i");if(!o)return;if(lt<0||lt>=Q||!tt[lt]||tt[lt].kind==="core"){o.textContent=u.textContent=p.textContent=v.textContent="\u2014",d("i-orb").classList.add("none");return}d("i-orb").classList.remove("none");let b=tt[lt],E=b.aNow||b.r0||0;o.textContent=E>=1e3?(E/1e3).toFixed(2)+"k":E.toFixed(0),u.textContent=(b.ecc||0).toFixed(3);let T=(cc&&wu?cc[lt]:E)/(E>1e-4?E:1e-4),P=T<.06?.06:T>6?6:T,I=(b.sp||0)*P*Math.sqrt(P)*W.spd;if(I<=1e-12)p.textContent="\u221E";else{let R=f/I/1e3;p.textContent=R<100?R.toFixed(1)+"s":R<6e3?(R/60).toFixed(1)+"m":(R/3600).toFixed(1)+"h"}$u(b);let D=Xn[2]*Yn[0]-Xn[0]*Yn[2];v.textContent=(Math.acos(g(Math.abs(D),0,1))*180/Math.PI).toFixed(1)+"\xB0"}d("i-go").onclick=()=>{lt<0||zu(lt,!0)},d("i-core").onclick=()=>{if(!Sm)return;let o=lt>=0&&lt!==k?Fe[lt].p:"",u=lt>=0?Fe[lt].n:"";W.coreNote=o,un();let p=my();try{sd(Sm,p)}catch(v){console.error(v),bt(A("load.render"))}bt(o?A("core.set",{n:u}):A("core.auto"))},d("i-open").onclick=o=>ie(lt,o),d("i-name").addEventListener("mouseover",o=>{if(!(!se.hover||lt<0))try{se.hover(ne(lt),o,d("i-name"))}catch(u){console.error("vault-orrery: host preview",u)}});let Gu=!1,Pc=0,Ja=[],gv=0,Vu=()=>{gv=performance.now()};l("pointermove",Vu,{passive:!0}),l("pointerdown",Vu,{passive:!0}),l("keydown",Vu,{passive:!0}),l("wheel",Vu,{passive:!0});let s_=[{label:"MIND MAP",key:"M",run:()=>tm()},{label:"GENESIS",key:"G",run:()=>Dc()},{label:"RIPPLE",key:"SPACE",run:()=>qu()},{label:"POSTER",key:"P",run:()=>ju()},{label:"LINK LAYER",key:"L",run:()=>kp()},{label:"REFERENCE PLANE",key:"X",run:()=>Fp()},{label:"RESET VIEW",key:"R",run:()=>Rp()},{label:"SOUND",key:"U",run:()=>Hc(!Pe.on)},{label:"GUIDE",key:"?",run:()=>ld()},{label:"OPEN NOTE",key:"O",run:o=>ie(lt,o),live:()=>ce()&&lt>=0}];function Dp(){Gu=!0,d("srch").style.display="block",d("sin").value="",d("sin").focus(),vv("")}function Ip(){Gu=!1,d("srch").style.display="none"}function a_(o){let u=ot[o];if(!u)return;W.adv=!0,d("ctl").classList.add("adv"),d("advtog").textContent="\u25BE ADVANCED",bi&&(bi.value=u.label),Er=u.label.toLowerCase(),cl(),Vr(),un(),ki();let p=$a.get(o);if(p){try{p.wrap.scrollIntoView({block:"nearest"})}catch(v){}p.wrap.classList.remove("found"),requestAnimationFrame(()=>p.wrap.classList.add("found")),setTimeout(()=>p.wrap.classList.remove("found"),1600)}}function vv(o){ta=o.trim().toLowerCase();let p=ta;if(Ja=[],p){let v=[];for(let b=0;b<Q;b++){let E=Fe[b];(zn[b]||(E.n+" "+E.p).toLowerCase()).includes(p)&&v.push(b)}v.sort((b,E)=>Fe[E].inb-Fe[b].inb),v.forEach(b=>Ja.push({kind:"note",i:b})),Qe.forEach(b=>{(b.label.toLowerCase().includes(p)||b.k.toLowerCase()===p)&&Ja.push({kind:"knob",kn:b})}),s_.forEach(b=>{b.live&&!b.live()||b.label.toLowerCase().includes(p)&&Ja.push({kind:"act",a:b})})}Pc=0,d("sres").innerHTML=Ja.slice(0,40).map((v,b)=>{let E=b===0?' class="sel"':"";if(v.kind==="note"){let w=Fe[v.i];return'<div data-k="'+b+'"'+E+">"+M(w.n)+"<i>"+(w.k==="raw"?"RAW":"WIKI")+(w.d?" "+w.d:"")+"</i></div>"}return v.kind==="knob"?'<div data-k="'+b+'"'+E+">"+M(v.kn.label)+"<i>"+A("find.knob")+" \xB7 "+v.kn.g.toUpperCase()+"</i></div>":'<div data-k="'+b+'"'+E+">"+M(v.a.label)+"<i>"+A("find.act")+" \xB7 "+v.a.key+"</i></div>"}).join(""),d("sres").querySelectorAll("div").forEach(v=>{v.onclick=b=>yv(+v.dataset.k,b)})}function yv(o,u){let p=Ja[o];if(p){if(Ip(),p.kind==="note"){ce()&&(u.ctrlKey||u.metaKey)?(fi(p.i),ie(p.i,u)):zu(p.i,!0);return}ta="",p.kind==="knob"?a_(p.kn.k):p.a.run(u)}}d("sin").addEventListener("input",o=>vv(o.target.value)),d("sin").addEventListener("keydown",o=>{if(o.key==="Escape")ta="",Ip();else if(o.key==="Enter")o.preventDefault(),yv(Pc,o);else if(o.key==="ArrowDown"||o.key==="ArrowUp"){o.preventDefault(),Pc=g(Pc+(o.key==="ArrowDown"?1:-1),0,Math.min(39,Ja.length-1)),d("sres").querySelectorAll("div").forEach((p,v)=>p.classList.toggle("sel",v===Pc));let u=d("sres").querySelector("div.sel");if(u)try{u.scrollIntoView({block:"nearest"})}catch(p){}}});function kp(){bc=(bc+1)%wc.length,d("g-layer").textContent=wc[bc].name,bt("LINK LAYER \xB7 "+wc[bc].name)}let o_=o=>{let u=new Date(o);return u.getUTCFullYear()+"-"+String(u.getUTCMonth()+1).padStart(2,"0")+"-"+String(u.getUTCDate()).padStart(2,"0")};function l_(o){let u=0;for(let p=0;p<ea.length;p++)o>=ea[p].u0&&(u=p);return u}function Wu(o){Re.on=!!o&&Q>0,Re.on||(Re.play=!1,Re.u=1),d("gen").classList.toggle("on",Re.on),d("b-gen").classList.toggle("am",Re.on),Re.on&&(Re.u=0,Re.play=!0,Re.stage=-1,Pe.on&&zt&&Sv(zt.position.x,zt.position.y,zt.position.z),c_(),fi(-1),Lp()),ds(!0),ki()}function Fp(){W.grid=!W.grid,un(),ns&&(ns.visible=W.grid),bt(A(W.grid?"grid.on":"grid.off"))}function Dc(){if(!Q){bt(A("need.vault"));return}if(Re.on&&Re.u>=1){Re.u=0,Re.play=!0,ds(!0);return}Wu(!Re.on),Re.on&&bt(A("gen.play"))}function c_(){let o=d("genmarks");Re.marksFor!==ea&&(o.innerHTML="",ea.forEach((u,p)=>{if(p===0||p===ea.length-1)return;let v=document.createElement("i");v.textContent=u.code,v.style.left=g(u.u0*100,2,96).toFixed(2)+"%",v.dataset.k=p,o.appendChild(v)}),Re.marksFor=ea,xv())}function xv(){let o=d("genmarks");if(!o||!o.offsetWidth)return;let u=[...o.querySelectorAll("i")].reverse(),p=1/0;u.forEach(v=>{v.style.visibility="";let b=v.offsetLeft-v.offsetWidth/2;if(b+v.offsetWidth+8>p){v.style.visibility="hidden";return}p=b})}function ds(o){if(!Re.on)return;d("gen-r").value=Math.round(Re.u*1e3),d("gen-play").textContent=Re.play?"\u275A\u275A":"\u25B6",d("gen-spd").textContent=(Re.rate<1?"\xBD":Re.rate)+"\xD7";let u=0,p=0,v=0;for(let E=0;E<Q;E++)if(rn[E]<=Re.u){u++;let w=Dn[E];w&&w>p&&(p=w)}Tt.forEach(E=>{E.genT<=Re.u&&v++}),d("gen-cnt").textContent=u+" / "+Q,d("gen-date").textContent=u===0?"\u2014":(p?o_(p):A("gen.undated"))+"  \xB7  "+A("gen.sys",{n:v});let b=l_(Re.u);if(b!==Re.stage||o){let E=b!==Re.stage&&Re.stage>=0;if(Re.stage=b,d("gen-ph").textContent=ea[b].code,d("gen-desc").textContent=A(ea[b].k),d("genmarks").querySelectorAll("i").forEach(w=>w.classList.toggle("now",+w.dataset.k===b)),E){let w=d("genstage");w.classList.remove("step"),requestAnimationFrame(()=>w.classList.add("step"))}}}function h_(o){if(!Re.on||!Re.play)return;let u=Re.u;if(Re.u+=o*Re.rate/Re.playSec,Re.u>=1){Re.u=1,Re.play=!1,ds(!0),bt(A("gen.done"));return}Tt.forEach(p=>{if(p.genT>u&&p.genT<=Re.u){let v=-1,b=1e9;for(let E=0;E<Q;E++)nt[E]===p&&rn[E]<b&&(b=rn[E],v=E);v>=0&&Ic(v,.55)}}),gs%4===0&&ds(!1)}d("gen-r").addEventListener("input",o=>{Re.play=!1,Re.u=g(+o.target.value/1e3,0,1),ds(!0)}),d("gen-play").onclick=()=>{!Re.play&&Re.u>=.999&&(Re.u=0),Re.play=!Re.play,ds(!0)},d("gen-rst").onclick=()=>{Re.u=0,Re.play=!0,ds(!0)},d("gen-spd").onclick=()=>{let o=[.5,1,2,4];Re.rate=o[(o.indexOf(Re.rate)+1)%o.length],ds(!0)},d("b-gen").onclick=Dc;let Np=!1,Hp=!1,wv=-1;function u_(){let o=Re.on?g((Re.u-.06)/.26,0,1):1;if(o===wv)return;wv=o;let u=p=>{let v=p&&p.material;v&&(v.userData.op0===void 0&&(v.userData.op0=v.opacity),v.opacity=v.userData.op0*o)};ka&&ka.children.forEach(u),u(Xs),u(mr)}function d_(){if(!Re.on){Np&&xi&&(xi.fill(1),dn.fill(0),Np=!1);return}Np=!0;let o=Re.u,u=Re.grow,p=Re.flash;for(let v=0;v<Q;v++){let b=rn[v];if(o<b){xi[v]=0,dn[v]=0;continue}let E=(o-b)/u;if(E>=1){xi[v]=1;let w=(o-b-u)/p;dn[v]=w<1?1:0}else{xi[v]===0&&Re.play&&jp(v,.6);let w=1-Math.pow(1-E,3);xi[v]=.06+.94*w+Math.sin(E*Math.PI)*.26*(1-E*.3),dn[v]=1}}}let f_=3,br=[],Bp=!1;function Ic(o,u){if(o<0||o>=Q||!Xt)return;let p=new Int16Array(Q).fill(-1);p[o]=0;let v=[o],b=0;for(let w=0;w<v.length;w++){let T=v[w],P=Xt[T];if(!P)continue;let I=p[T]+1;I>9||P.forEach(D=>{p[D]<0&&(p[D]=I,v.push(D),I>b&&(b=I))})}let E=3.1;br.length>=f_&&br.shift(),br.push({dist:p,src:o,reach:b,age:0,speed:E,life:b/E+.62,gain:u===void 0?1:u})}function bv(){br.length=0,hi&&hi.fill(0)}function p_(o){if(!(!Q||!hi)){if(!br.length){(hi[0]||Bp)&&(hi.fill(0),Bp=!1);return}hi.fill(0),Bp=!0;for(let u=br.length-1;u>=0;u--){let p=br[u];if(p.age+=o,p.age>p.life){br.splice(u,1);continue}let v=p.age*p.speed,b=1-p.age/p.life,E=p.gain*(.32+.68*b),w=p.dist,T=Pe.on&&W.sRip>=.02;T&&!p.hit&&(p.hit=new Uint8Array(Q));for(let P=0;P<Q;P++){let I=w[P];if(I<0)continue;let D=(I-v)/.62;if(D>2.4||D<-2.4)continue;let R=Math.exp(-D*D)*E/(1+I*.3);R>hi[P]&&(hi[P]=R),T&&D<=0&&!p.hit[P]&&I>0&&(p.hit[P]=1,ft[P]>.12&&jp(P,E/(1+I*.45)))}}}}function qu(){if(lt<0){bt(A("need.node"));return}Ic(lt,1),bt(A("ripple",{n:Fe[lt].n}))}d("i-ripple").onclick=qu,d("i-route").onclick=()=>{if(el()||wr>=0){hv();return}lt<0||(wr=lt,bt(A("route.pick")),Cc())};let Op=9+Math.random()*8;function m_(o){if(!Q||Re.on||(Op-=o,Op>0))return;Op=16+Math.random()*16;let u=-1,p=-1;for(let v=0;v<7;v++){let b=Math.floor(Math.random()*Q),E=(Xt[b]?Xt[b].size:0)*(ft[b]>.4?1:.1);E>p&&(p=E,u=b)}u>=0&&p>0&&Ic(u,.42)}let tl=52,zp=42,Up=tl+1,g_=Up*2,Bt=new Float32Array(Up*3),Yt=null,_r=null,fs=null,Gp=null,Vp=null,Wp=14,na=[],kc=0,Xu=new L;function v_(){if(!_r){_r=ss(3,(o,u,p,v,b)=>{p[o]=[26,60,130][o],b[o]=[1,.34,.11][o],v[o*3]=.8,v[o*3+1]=.95,v[o*3+2]=1},Gi(700,.25,1,!1)),_r.visible=!1,_r.renderOrder=3;{let o=wp(2,Up);Gp=o.pos,Vp=o.col,fs=new wt(o.geo,xp(1)),fs.frustumCulled=!1,fs.visible=!1,Dt.add(fs)}}}function _v(o){v_();let u=Math.max(900,(Mt||1200)*1.55),p=o>=0&&o<Q?o:-1,v,b;if(p>=0){let E=G[p*3],w=G[p*3+1],T=G[p*3+2],P=Math.atan2(T,E)+(Math.random()-.5)*1.4,I=g(ov()*.85,400,u);v=new L(Math.cos(P)*I,w*.4+(Math.random()-.5)*I*.3,Math.sin(P)*I),b=new L(E,w,T).sub(v).multiplyScalar(1/6)}else{let E=Math.random()*f,w=(Math.random()-.5)*.8;v=new L(Math.cos(E)*u,Math.sin(w)*u*.55,Math.sin(E)*u),b=new L(Math.random()-.5,(Math.random()-.5)*.5,Math.random()-.5).multiplyScalar(u*(.1+Math.random()*.2)).clone().sub(v).normalize().multiplyScalar(u*.052)}Yt={pos:v,vel:b,life:0,R:u,target:p,dusty:.35+Math.random()*.9,trail:[]},_r.visible=!0,fs.visible=!0}function nl(){Yt=null,_r&&(_r.visible=!1),fs&&(fs.visible=!1),Wp=45+Math.random()*70}function y_(o){if(!Q)return;if(!Yt){if(kc>0)kc-=o;else if(na.length){let oe=Oe(na.shift());if(oe>=0){_v(oe);return}}Wp-=o*Math.max(.15,W.spd),Wp<=0&&_v(-1);return}let u=Yt.target;if(u>=Q){nl();return}let p=u>=0?Math.min(.05,o):Math.min(.05,o)*Math.max(0,W.spd);if(Yt.life+=o,p>0){let oe=Yt.pos,ue=Math.max(Yt.R*.05,oe.length()),de=Yt.R*Yt.R*.3;if(Yt.vel.addScaledVector(oe,-de/(ue*ue*ue)*p*(u>=0?.08:1)),u>=0){Xu.set(G[u*3],G[u*3+1],G[u*3+2]);let H=Xu.distanceTo(oe),J=Yt.vel.length();if(H<Math.max((ye[u]||2)*3.5,10)+J*p*1.5){M_(u);return}Xu.sub(oe).normalize().multiplyScalar(J),Yt.vel.lerp(Xu,1-Math.pow(.3,p))}oe.addScaledVector(Yt.vel,p),Yt.trail.unshift(oe.clone()),Yt.trail.length>tl+1&&(Yt.trail.length=tl+1)}if(u<0&&Yt.life>6&&Yt.pos.length()>Yt.R*2.1){nl();return}if(Yt.life>(u>=0?30:150)){nl();return}let v=_r.geometry.attributes.position.array;for(let oe=0;oe<3;oe++)v[oe*3]=Yt.pos.x,v[oe*3+1]=Yt.pos.y,v[oe*3+2]=Yt.pos.z;_r.geometry.attributes.position.needsUpdate=!0;let b=g(Yt.R*.55/Math.max(1,Yt.pos.length()),.25,2.2),E=_r.geometry.attributes.aAlpha.array;E[0]=1*b,E[1]=.34*b,E[2]=.11*b,_r.geometry.attributes.aAlpha.needsUpdate=!0;let w=Yt.trail,T=w.length,P=Yt.dusty,I=Ue.position,D=I.x,R=I.y,F=I.z,z=n()*.5/Math.tan(Ue.fov*Math.PI/360),U=Math.max(1,I.distanceTo(Yt.pos))/z,ee=E1();{let oe=Yt.R*.34*b,ue=tl+1,de=0;for(let ve=0;ve<ue;ve++){let re=ve*3;if(ve<T){let Se=w[ve],Ae=Se.length()||1,He=ve/tl,Ke=oe*He*He;Bt[re]=Se.x+Se.x/Ae*Ke,Bt[re+1]=Se.y+Se.y/Ae*Ke,Bt[re+2]=Se.z+Se.z/Ae*Ke,de=ve}else Bt[re]=Bt[de*3],Bt[re+1]=Bt[de*3+1],Bt[re+2]=Bt[de*3+2]}let H=1,J=.87,Ee=.66,Te=0;for(let ve=0;ve<ue;ve++){let re=ve*3,Se=ve/tl,Ae=(ve>0?ve-1:0)*3,He=(ve<ue-1?ve+1:ue-1)*3,Ke=ve<T?(1-Se)*(1-Se*.72)*b*1.15*P:0;Nu(Gp,Vp,Te,Bt[re],Bt[re+1],Bt[re+2],Bt[He]-Bt[Ae],Bt[He+1]-Bt[Ae+1],Bt[He+2]-Bt[Ae+2],Bt[re]-D,Bt[re+1]-R,Bt[re+2]-F,Ke>0?(1.6+13*Se)*ee*.5*U:0,H*Ke,J*Ke,Ee*Ke),Te+=2}}{let oe=Yt.pos,ue=oe.length()||1,de=oe.x/ue,H=oe.y/ue,J=oe.z/ue,Ee=Math.abs(de)<.9?1:0,Te=Math.abs(de)<.9?0:1,ve=Te*J,re=-Ee*J,Se=Ee*H-Te*de,Ae=Math.hypot(ve,re,Se)||1;ve/=Ae,re/=Ae,Se/=Ae;let He=H*Se-J*re,Ke=J*ve-de*Se,Ve=de*re-H*ve,ae=Yt.R*.62*b,me=b*1.25*(1.35-P*.55),Xe=Yt.life,Ye=(mt,en)=>{let vn=Math.sin(mt*7.4+Xe*1.9)*.055*mt+Math.sin(mt*3.1-Xe*1.1)*.03*mt,yn=Math.sin(mt*5.3-Xe*1.5)*.048*mt,Sr=ae*mt;en[0]=oe.x+de*Sr+(ve*vn+He*yn)*ae,en[1]=oe.y+H*Sr+(re*vn+Ke*yn)*ae,en[2]=oe.z+J*Sr+(Se*vn+Ve*yn)*ae},$e=x_,vt=mt=>.72+.55*Math.abs(Math.sin(mt*9.1+Xe*2.3)),ct=zp+1;for(let mt=0;mt<ct;mt++)Ye(mt/zp,$e),Bt[mt*3]=$e[0],Bt[mt*3+1]=$e[1],Bt[mt*3+2]=$e[2];let Ot=g_;for(let mt=0;mt<ct;mt++){let en=mt*3,vn=mt/zp,yn=(mt>0?mt-1:0)*3,Sr=(mt<ct-1?mt+1:ct-1)*3,rr=(1-vn)*(1-vn*.55)*me*vt(vn);Nu(Gp,Vp,Ot,Bt[en],Bt[en+1],Bt[en+2],Bt[Sr]-Bt[yn],Bt[Sr+1]-Bt[yn+1],Bt[Sr+2]-Bt[yn+2],Bt[en]-D,Bt[en+1]-R,Bt[en+2]-F,(1.1+2.4*vn)*ee*.5*U,.42*rr,.72*rr,1*rr),Ot+=2}}fs.geometry.attributes.position.needsUpdate=!0,fs.geometry.attributes.aColor.needsUpdate=!0}let x_=[0,0,0];function w_(){let o=new Map;if(!Q||!G)return o;for(let u=0;u<Q;u++){let p=Fe[u];o.set(p.fp||p.p,{x:G[u*3],y:G[u*3+1],z:G[u*3+2],r:ye[u]||2,cr:Be[u*3],cg:Be[u*3+1],cb:Be[u*3+2],mt:+p.mt||0,ct:+p.ct||0,n:p.n})}return o}let Fc=6;function b_(o){if(!o||!Q)return;let u=new Set,p=new Map;for(let b=0;b<Q;b++){let E=Fe[b],w=E.fp||E.p;u.add(w);let T=o.get(w),P=+E.mt||0;T?P&&T.mt&&P>T.mt+500&&na.push(w):(E.ct&&p.set(+E.ct,w),P&&na.push(w))}let v=0;return o.forEach((b,E)=>{u.has(E)||b.ct&&p.has(b.ct)||v++<Fc&&Ev(b,"nova")}),na.length>6&&(na.length=6),v}function __(){if(!Q||!Wn||!yi)return;let o=-1,u=0;for(let p=0;p<Q;p++)yi[p]>u&&(u=yi[p],o=p);o<0||Date.now()-u>14*864e5||(na.push(ne(o)),kc=2.5)}function M_(o){let u=Fe[o];Ev({x:G[o*3],y:G[o*3+1],z:G[o*3+2],r:ye[o]||2,cr:.8,cg:.95,cb:1,n:u?u.n:""},"strike"),Re.on||Ic(o,.9),jp(o,1.3),u&&bt(A("ev.comet",{n:u.n})),nl(),kc=1.4}let Nc=[],er=null,Mv=[];function E_(){if(er)return;er=ss(Fc,(u,p,v,b,E)=>{v[u]=0,E[u]=0,b[u*3]=b[u*3+1]=b[u*3+2]=1},Gi(900,0,1,!1)),er.renderOrder=4;let o=new Hi(.8,1,72,1);for(let u=0;u<Fc;u++){let p=new wt(o,new Pn({color:16777215,transparent:!0,opacity:0,fog:!1,blending:Ut,depthWrite:!1,side:ri}));p.visible=!1,p.frustumCulled=!1,p.renderOrder=4,Dt.add(p),Mv.push(p)}}function Ev(o,u){E_(),Nc.length>=Fc&&Nc.shift();let p=u==="nova";Nc.push({x:o.x,y:o.y,z:o.z,r:Math.max(1.5,o.r),t:0,life:p?4.6:1.5,size:p?g(o.r*34,110,460):g(o.r*16,50,200),reach:p?34:9,cr:o.cr,cg:o.cg,cb:o.cb}),p&&(o.n&&bt(A("ev.nova",{n:o.n})),Sv(o.x,o.y,o.z))}let Yu=new L;function S_(o){if(!er)return;let u=er.geometry.attributes.position.array,p=er.geometry.attributes.aSize.array,v=er.geometry.attributes.aColor.array,b=er.geometry.attributes.aAlpha.array;for(let E=0;E<Fc;E++){let w=Nc[E],T=Mv[E];if(!w){b[E]=0,p[E]=0,T.visible=!1;continue}if(w.t+=o,w.t>=w.life){Nc.splice(E,1),E--;continue}let P=w.t/w.life,I=Math.min(1,w.t/.16),D=I*Math.exp(-Math.max(0,w.t-.16)*(5.1/w.life)),R=1-I*.55;u[E*3]=w.x,u[E*3+1]=w.y,u[E*3+2]=w.z,p[E]=w.size*(.55+.45*I),b[E]=D*1.4,v[E*3]=y(w.cr,1,R),v[E*3+1]=y(w.cg,1,R),v[E*3+2]=y(w.cb,1,R);let F=1-Math.pow(1-P,2.2),z=w.r*(2+w.reach*F);T.visible=!0,T.position.set(w.x,w.y,w.z),T.scale.set(z,z,z),T.lookAt(Ue.position),T.material.opacity=Math.pow(1-P,1.7)*.85,T.material.color.setRGB(y(w.cr,1,.45),y(w.cg,1,.45),y(w.cb,1,.45))}er.geometry.attributes.position.needsUpdate=!0,er.geometry.attributes.aSize.needsUpdate=!0,er.geometry.attributes.aColor.needsUpdate=!0,er.geometry.attributes.aAlpha.needsUpdate=!0}function Sv(o,u,p){if(!Pe.on||!Pe.ctx||W.sRip<.02)return;let v=Pe.ctx,b=v.currentTime,E=g(.32*W.sRip,.001,.5),w=v.createGain();w.gain.setValueAtTime(1e-4,b),w.gain.exponentialRampToValueAtTime(E,b+.04),w.gain.exponentialRampToValueAtTime(3e-4,b+2.4);let T=w;try{if(v.createStereoPanner){let U=v.createStereoPanner();Yu.set(o,u,p).project(Ue),U.pan.value=Yu.z<1&&Number.isFinite(Yu.x)?g(Yu.x,-1,1)*.72:0,w.connect(U),T=U}}catch(U){T=w}T.connect(Pe.bus||Pe.master),Pe.echo&&T.connect(Pe.echo);let P=v.createOscillator();P.type="sine",P.frequency.setValueAtTime(96,b),P.frequency.exponentialRampToValueAtTime(34,b+1.8),P.connect(w),P.start(b),P.stop(b+2.5);let I=v.createBufferSource(),D=Math.floor(v.sampleRate*1.6),R=v.createBuffer(1,D,v.sampleRate),F=R.getChannelData(0);for(let U=0;U<D;U++)F[U]=(Math.random()*2-1)*(1-U/D);I.buffer=R;let z=v.createBiquadFilter();z.type="lowpass",z.frequency.setValueAtTime(900,b),z.frequency.exponentialRampToValueAtTime(70,b+1.6);let Y=v.createGain();Y.gain.value=.55,I.connect(z),z.connect(Y),Y.connect(w),I.start(b),I.stop(b+1.7)}function T_(o){S_(o)}function A_(o){let u=Fe[o],p=tt&&tt[o]?tt[o].kind:"wiki";return p==="core"?null:p==="moon"||p==="spiral"||p==="shell"?"cls.rock":Math.log(1+(u.inb|0))*1.55+Math.log(1+(u.w||0)/120)*.7>=3.6?"cls.giant":"cls.terr"}function qp(o){return o>=6e3?"F":o>=5200?"G":o>=3700?"K":"M"}function R_(o){let u=[],p=A_(o);p&&u.push(A(p)),Pi&&Pi.indexOf(o)>=0&&u.push(A("cls.ringed"));let v=nt&&nt[o];return v&&v.temp&&u.push(A("cls.star",{s:qp(v.temp),t:Math.round(v.temp/100)*100})),u.join("   \xB7   ")}function ju(){if(!Q){bt(A("need.vault"));return}let o=d("hud"),u=o.style.display,p=Vt.getPixelRatio(),v=g(Math.round(3840/Math.max(1,t())),1,4);try{o.style.display="none",Vt.setPixelRatio(v),Vt.setSize(t(),n(),!1),Ue.aspect=t()/n(),Ue.updateProjectionMatrix();let b=n()/(2*Math.tan(Ue.fov*Math.PI/360))*v;Or.forEach(I=>{I.uniforms&&(I.uniforms.uScale.value=b)}),zg(Math.max(1,t()*v),Math.max(1,n()*v)),yp();let E=Vt.domElement,w=document.createElement("canvas");w.width=E.width,w.height=E.height;let T=w.getContext("2d");T.drawImage(E,0,0);let P=Math.max(11,Math.round(w.height*.014));T.font="500 "+P+"px ui-monospace,Consolas,monospace",T.textBaseline="alphabetic",T.fillStyle="rgba(150,225,255,.62)",T.fillText((xe.meta.vault||"VAULT").toUpperCase(),P*1.6,w.height-P*2.6),T.fillStyle="rgba(200,235,255,.30)",T.fillText(Q+" NOTES \xB7 "+(xe.meta.edges|0)+" LINKS \xB7 "+Tt.length+" SYSTEMS",P*1.6,w.height-P*1.1),w.toBlob(I=>{if(!I){bt(A("poster.fail"));return}let D=URL.createObjectURL(I),R=document.createElement("a");R.href=D,R.download=(xe.meta.vault||"vault").replace(/[^\w가-힣ぁ-んァ-ヶー一-龥.-]+/g,"_")+"-orrery-"+w.width+"x"+w.height+".png",R.click(),setTimeout(()=>URL.revokeObjectURL(D),3e4),bt(A("poster.ok",{w:w.width,h:w.height}))},"image/png")}catch(b){console.error(b),bt(A("poster.fail"))}finally{Vt.setPixelRatio(p),o.style.display=u[0],xh.style.display=u[1],Ka()}}d("b-post").onclick=ju;let Pe={on:!1,ctx:null,master:null,wind:null,move:null,holo:null,bus:null,echo:null,wetIn:null,dry:null,wet:null,wetLP:null,conv:null,dl:null,dlLP:null,fb:null,droneFilt:null,drone:[],irSecs:0},L_=[{f:41.2,w:"sine",lvl:.42,swing:.1,lf:.021},{f:55,w:"triangle",lvl:.3,swing:.12,lf:.031},{f:82.4,w:"sawtooth",lvl:.1,swing:.05,lf:.043,det:-6},{f:82.4,w:"sawtooth",lvl:.1,swing:.05,lf:.037,det:7},{f:164.8,w:"triangle",lvl:.09,swing:.05,lf:.027,det:4},{f:659.3,w:"sine",lvl:.03,swing:.028,lf:.019}];function Tv(o,u){let p=Math.floor(o.sampleRate*u),v=o.createBuffer(1,p,o.sampleRate),b=v.getChannelData(0),E=0;for(let w=0;w<p;w++)E=E*.985+(Math.random()*2-1)*.12,b[w]=E;return v}function Av(o,u,p){let v=Math.max(1,Math.floor(o.sampleRate*u)),b=o.createBuffer(2,v,o.sampleRate),E=Math.floor(o.sampleRate*.028);for(let w=0;w<2;w++){let T=b.getChannelData(w),P=0;for(let I=0;I<v;I++){let D=I/v;P+=(Math.random()*2-1-P)*(.3-D*.24);let R=Math.pow(1-D,p);T[I]=P*R*(I<E?I/E*(I/E):1)}for(let I=0;I<7;I++){let D=Math.floor(o.sampleRate*(.03+Math.random()*.11));D<v&&(T[D]+=(Math.random()*2-1)*.3*(1-I/7))}}return b}function C_(){if(Pe.ctx)return!0;let o=window.AudioContext||window.webkitAudioContext;if(!o)return!1;try{let u=new o,p=u.createGain();p.gain.value=0,p.connect(u.destination);let v=u.createGain(),b=u.createGain();b.gain.value=.52,v.connect(b),b.connect(p);let E=u.createDelay(.5);E.delayTime.value=.045;let w=u.createConvolver();w.buffer=Av(u,W.sRoom,2.7),Pe.irSecs=W.sRoom;let T=u.createBiquadFilter();T.type="lowpass",T.frequency.value=at,T.Q.value=.4;let P=u.createGain();P.gain.value=qe,v.connect(E),E.connect(w),w.connect(T),T.connect(P),P.connect(p);let I=u.createGain(),D=u.createDelay(4);D.delayTime.value=W.sEchoT;let R=u.createBiquadFilter();R.type="lowpass",R.frequency.value=1150;let F=u.createGain();F.gain.value=W.sEcho,I.connect(D),D.connect(R),R.connect(F),F.connect(D),R.connect(v);let z=u.createBiquadFilter();z.type="lowpass",z.frequency.value=Je,z.Q.value=.7;let Y=u.createBiquadFilter();Y.type="highpass",Y.frequency.value=34,Y.Q.value=.5,z.connect(Y),Y.connect(v);let U=u.createOscillator();U.frequency.value=.023;let ee=u.createGain();ee.gain.value=90,U.connect(ee),ee.connect(z.frequency),U.start(),Pe.drone.length=0,L_.forEach((me,Xe)=>{let Ye=me.f,$e=u.createOscillator();$e.type=me.w,$e.frequency.value=Ye,me.det&&($e.detune.value=me.det);let vt=u.createGain();vt.gain.value=me.lvl;let ct=u.createOscillator();ct.frequency.value=me.lf;let Ot=u.createGain();Ot.gain.value=me.swing,ct.connect(Ot),Ot.connect(vt.gain),ct.start(),$e.connect(vt),vt.connect(z),$e.start(),Pe.drone.push({o:$e,g:vt,lg:Ot,base:Ye,lvl:me.lvl,swing:me.swing})});let oe=Tv(u,4),ue=u.createBufferSource();ue.buffer=oe,ue.loop=!0;let de=u.createBiquadFilter();de.type="bandpass",de.frequency.value=420,de.Q.value=.9;let H=u.createOscillator();H.frequency.value=.017;let J=u.createGain();J.gain.value=260,H.connect(J),J.connect(de.frequency),H.start();let Ee=u.createGain();Ee.gain.value=0;let Te=u.createOscillator();Te.frequency.value=.045;let ve=u.createGain();ve.gain.value=0,Te.connect(ve),ve.connect(Ee.gain),Te.start(),ue.connect(de),de.connect(Ee),Ee.connect(v),ue.start(),Pe.wind={g:Ee,lg:ve,lvl:.1};let re=u.createBufferSource();re.buffer=oe,re.loop=!0;let Se=u.createBiquadFilter();Se.type="lowpass",Se.frequency.value=260,Se.Q.value=.6;let Ae=u.createGain();Ae.gain.value=0,re.connect(Se),Se.connect(Ae),Ae.connect(v),re.start(),Pe.move={g:Ae,lp:Se};let He=u.createOscillator();He.type="sine",He.frequency.value=1318.5;let Ke=u.createGain();Ke.gain.value=0;let Ve=u.createOscillator();Ve.frequency.value=5.3;let ae=u.createGain();return ae.gain.value=.004,Ve.connect(ae),ae.connect(Ke.gain),Ve.start(),He.connect(Ke),Ke.connect(v),He.start(),Pe.holo={o:He,g:Ke},Pe.ctx=u,Pe.master=p,Pe.bus=v,Pe.echo=I,Pe.wetIn=E,Pe.dry=b,Pe.wet=P,Pe.wetLP=T,Pe.conv=w,Pe.dl=D,Pe.dlLP=R,Pe.fb=F,Pe.droneFilt=z,!0}catch(u){return console.error(u),!1}}function Xp(){let o=Pe;if(!o.ctx)return;let u=o.ctx.currentTime,p=(b,E,w)=>b.setTargetAtTime(E,u,w||.06);o.master.gain.cancelScheduledValues(u),p(o.master.gain,o.on?.28*W.sVol:0,.35),p(o.wet.gain,qe,.12),o.wetLP.frequency.setTargetAtTime(at,u,.1),o.dlLP.frequency.setTargetAtTime(g(at*.68,200,6e3),u,.1),p(o.fb.gain,W.sEcho,.1),o.dl.delayTime.setTargetAtTime(W.sEchoT,u,.2),o.droneFilt.frequency.setTargetAtTime(Je,u,.12);let v=Math.pow(2,W.sTune/12);o.drone.forEach(b=>{b.o.frequency.setTargetAtTime(b.base*v,u,.3),p(b.g.gain,b.lvl*W.sDrone,1.4),p(b.lg.gain,b.swing*W.sDrone,1.4)}),o.wind&&(p(o.wind.g.gain,o.wind.lvl*W.sDrone,1.4),p(o.wind.lg.gain,o.wind.lvl*.45*W.sDrone,1.4)),P_()}let Rv=0;function P_(){!Pe.ctx||!Pe.conv||Math.abs(W.sRoom-Pe.irSecs)<.05||(clearTimeout(Rv),Rv=setTimeout(()=>{!Pe.ctx||!Pe.conv||(Pe.irSecs=W.sRoom,Pe.conv.buffer=Av(Pe.ctx,W.sRoom,2.7))},260))}function Hc(o){if(o&&!C_()){bt(A("audio.no"));return}Pe.on=!!o,W.snd=Pe.on,un(),d("b-snd").classList.toggle("am",Pe.on),Pe.ctx&&(Pe.on&&Pe.ctx.state==="suspended"&&Pe.ctx.resume(),Xp()),bt(A(Pe.on?"audio.on":"audio.off"))}function Yp(o){let u=be[g(W.sScale|0,0,be.length-1)].s,p=u[Math.abs(o*7+Fe[o].n.length)%u.length];return 220*Math.pow(2,(p+(Fe[o].k==="raw"?0:12)+W.sTune)/12)}let Zu=new L;function Lv(o){return o<0||o>=Q||!G||(Zu.set(G[o*3],G[o*3+1],G[o*3+2]).project(Ue),!(Zu.z<1)||!Number.isFinite(Zu.x))?0:g(Zu.x,-1,1)*.72}function Cv(o,u,p,v){let b=Pe.ctx,E=Yp(o),w=b.createGain();w.gain.setValueAtTime(1e-4,u),w.gain.exponentialRampToValueAtTime(p,u+.04),w.gain.exponentialRampToValueAtTime(4e-4,u+v);let T=w;try{if(b.createStereoPanner){let P=b.createStereoPanner();P.pan.value=Lv(o),w.connect(P),T=P}}catch(P){T=w}T.connect(Pe.bus||Pe.master),Pe.echo&&T.connect(Pe.echo),[[E,1,1],[E*1.0035,.45,1],[E*2,.26,.8],[E*2.76,.12,.55],[E*3.98,.07,.4],[E*5.4,.04,.3]].forEach(([P,I,D])=>{let R=b.createOscillator();R.type="sine",R.frequency.value=P;let F=b.createGain();F.gain.setValueAtTime(I,u),F.gain.exponentialRampToValueAtTime(I*.02+1e-5,u+Math.max(.15,v*D)),R.connect(F),F.connect(w),R.start(u),R.stop(u+v+.2)})}function D_(o,u,p){let v=Pe.ctx,b=Yp(o)*2,E=v.createGain();E.gain.setValueAtTime(1e-4,u),E.gain.exponentialRampToValueAtTime(p,u+.004),E.gain.exponentialRampToValueAtTime(p*.35,u+.09),E.gain.exponentialRampToValueAtTime(3e-4,u+.95);let w=E;try{if(v.createStereoPanner){let P=v.createStereoPanner();P.pan.value=Lv(o),E.connect(P),w=P}}catch(P){w=E}w.connect(Pe.bus||Pe.master),Pe.echo&&w.connect(Pe.echo);let T=v.createOscillator();T.type="sine",T.frequency.setValueAtTime(b*.75,u),T.frequency.exponentialRampToValueAtTime(b,u+.05),T.connect(E),T.start(u),T.stop(u+1.15),[[2.756,.24,.42],[5.404,.1,.2]].forEach(([P,I,D])=>{let R=v.createOscillator();R.type="sine",R.frequency.setValueAtTime(b*P*.97,u),R.frequency.exponentialRampToValueAtTime(b*P,u+.035);let F=v.createGain();F.gain.setValueAtTime(1e-4,u),F.gain.exponentialRampToValueAtTime(I,u+.003),F.gain.exponentialRampToValueAtTime(1e-4,u+D),R.connect(F),F.connect(E),R.start(u),R.stop(u+D+.1)})}function I_(o){!Pe.on||!Pe.ctx||o<0||o>=Q||V<.02||Cv(o,Pe.ctx.currentTime,.15*V,B)}let Bc=0;function jp(o,u){if(!Pe.on||!Pe.ctx||o<0||o>=Q||W.sRip<.02)return;let p=Pe.ctx.currentTime;if(Bc<p&&(Bc=p),Bc-p>.6)return;let v=Bc;Bc+=.056+Math.random()*.042,D_(o,v,g(.11*u*W.sRip,5e-4,.26))}function k_(){if(!Pe.on||!Pe.ctx||!Pe.droneFilt)return;let o=Pe.ctx.currentTime,u=Math.max(600,(Mt||1200)*2.2),p=g((he.dist-160)/u,0,1),v=p*p*(3-2*p);if(Pe.droneFilt.frequency.setTargetAtTime(Je*(1.25-.6*v),o,.35),Pe.wet.gain.setTargetAtTime(qe*(.82+.34*v),o,.35),Pe.dry.gain.setTargetAtTime(.52*(1.12-.3*v),o,.35),Pe.move){let b=Ue.position.distanceTo(Pv);Pv.copy(Ue.position);let E=g(b/Math.max(30,he.dist*.02),0,1);Pe.move.g.gain.setTargetAtTime(E*.14*(.45+.55*W.sDrone),o,.18),Pe.move.lp.frequency.setTargetAtTime(200+E*520,o,.25)}Pe.holo&&Pe.holo.g.gain.setTargetAtTime(At?.011:0,o,.7)}let Pv=new L;function Dv(o,u){if(!Pe.on||!Pe.ctx)return;let p=Pe.ctx,v=p.currentTime,b=p.createBufferSource();b.buffer=Tv(p,1.2);let E=p.createBiquadFilter();E.type="bandpass",E.Q.value=1.4,E.frequency.setValueAtTime(o?260:2400,v),E.frequency.exponentialRampToValueAtTime(o?2400:260,v+.7);let w=p.createGain();w.gain.setValueAtTime(1e-4,v),w.gain.exponentialRampToValueAtTime(.13,v+.12),w.gain.exponentialRampToValueAtTime(3e-4,v+.85),b.connect(E),E.connect(w),w.connect(Pe.bus),Pe.echo&&w.connect(Pe.echo),b.start(v),b.stop(v+1),o&&u>=0&&u<Q&&(Cv(u,v+.1,.07,3.2),Pe.holo.o.frequency.setTargetAtTime(Yp(u)*4,v,.3))}if(d("b-snd").onclick=()=>Hc(!Pe.on),W.snd){let o=()=>{c("pointerdown",o),c("keydown",o),Hc(!0)};l("pointerdown",o),l("keydown",o)}let $={root:-1,sel:-1,trail:[],hint:null,hop2:!1,list:[],has:new Set,cnt:[0,0,0],rr:[0,0,0],anchor:new L,guide:null,sect:null,star:null,holo:null,retic:null,pRoot:[],pCross:[]},Zp=26,F_=34,Oc=[19,10.5,6.6],Jp=[0,250,460],N_=[0,36,24],Iv=[0,.062,-.094],kv=[0,0,1.95],H_=7e-5,At=!1;$.hop2=!!W.mmHop;let il=[],rl=[];for(let o=0;o<3;o++){let u=Math.cos(Iv[o]),p=Math.sin(Iv[o]),v=Math.cos(kv[o]),b=Math.sin(kv[o]);il.push([v,0,-b]),rl.push([b*u,-p,v*u])}function Kp(){let o=W.spr/3.2,u=W.szPl;for(let p=1;p<3;p++){let v=$.cnt[p]*(Oc[p]*u*2+N_[p])/f;$.rr[p]=Math.max(Jp[p],v)*o}$.rr[2]<$.rr[1]*1.85&&($.rr[2]=$.rr[1]*1.85)}function B_(){if(!$.list.length||!ye)return;let o=W.szPl;for(let u=0;u<$.list.length;u++){let p=$.list[u],v=p.i;ye[v]=Oc[p.hop]*o,Zs&&js&&(Zs[v]=js[v]=ye[v]*9)}}function O_(o){Kp();let u=$.anchor;for(let p=0;p<$.list.length;p++){let v=$.list[p],b=v.i;if(!v.hop){G[b*3]=u.x,G[b*3+1]=u.y,G[b*3+2]=u.z;continue}v.ma+=o*v.sp;let E=$.rr[v.hop],w=il[v.hop],T=rl[v.hop],P=v.ang+v.ma,I=Math.cos(P),D=Math.sin(P);G[b*3]=u.x+(I*w[0]+D*T[0])*E,G[b*3+1]=u.y+(I*w[1]+D*T[1])*E,G[b*3+2]=u.z+(I*w[2]+D*T[2])*E}}function z_(){if($.guide)return $.guide;let o=$.guide=new On;o.renderOrder=1;for(let u=1;u<3;u++){let v=new Float32Array(720),b=il[u],E=rl[u];for(let T=0;T<240;T++){let P=T/240*f,I=Math.cos(P),D=Math.sin(P);v[T*3]=I*b[0]+D*E[0],v[T*3+1]=I*b[1]+D*E[1],v[T*3+2]=I*b[2]+D*E[2]}let w=new it;w.setAttribute("position",new Ze(v,3)),o.add(new xo(w,new hn({color:6084863,transparent:!0,opacity:u===1?.15:.09,depthWrite:!1,blending:Ut})))}return Dt.add(o),o}function U_(){if(J_(1/60),!!$.guide&&($.guide.visible=!1,!!At&&($.guide.position.copy($.anchor),$.guide.children[0].scale.setScalar($.rr[1]),$.guide.children[1].scale.setScalar($.rr[2]),$.guide.children[1].visible=$.cnt[2]>0,$.sect&&($.sect.visible=!0,$.sect.position.copy($.anchor),$.sect.scale.setScalar($.rr[1]*1.13)),$.star))){$.star.visible=!0,$.star.position.copy($.anchor);let o=performance.now()*.001;$.star.userData.surfMat.uniforms.uTime.value=o,$.star.userData.rimMat.uniforms.uTime.value=o}}let zc=null;function Fv(o){if(mr&&(mr.visible=o?!1:Q>0),Xs&&(Xs.visible=!o),ka&&(ka.visible=!o),ns&&(ns.visible=o?!1:W.grid),$n&&($n.visible=!o),o&&(Qn&&(Qn.visible=!1),di&&(di.visible=!1),qn&&(qn.visible=!1),In&&(In.visible=!1)),ui&&$i&&$i.attributes.aRingS){if(o){zc||(zc=ui.slice());for(let u=3;u<ui.length;u+=4)ui[u]=0}else if(zc)ui.set(zc),zc=null;else return;$i.attributes.aRingS.needsUpdate=!0}}function $p(o){Kp();let u=Math.max($.rr[1],$.cnt[2]?$.rr[2]:0)+Oc[1]*W.szPl*6;he.follow=-1,he.tgtD.copy($.anchor),he.distD=g(u*1.85+90,120,9e3),he.thV=0,he.phV=0,o&&(he.phD=.46,he.rollD=0),hs()}function G_(o){$.sect&&(Dt.remove($.sect),$.sect.traverse(b=>{b.geometry&&b.geometry.dispose(),b.material&&b.material.dispose()}));let u=$.sect=new On;u.renderOrder=1;let p=il[1],v=rl[1];o.forEach(b=>{let E=b.a1-b.a0,w=Math.max(6,Math.ceil(E/f*160)),T=new Float32Array((w+1)*3),P=Math.min(.06,E*.18);for(let D=0;D<=w;D++){let R=b.a0+P+(E-P*2)*(D/w),F=Math.cos(R),z=Math.sin(R);T[D*3]=F*p[0]+z*v[0],T[D*3+1]=F*p[1]+z*v[1],T[D*3+2]=F*p[2]+z*v[2]}let I=new it;I.setAttribute("position",new Ze(T,3)),u.add(new Ti(I,new hn({color:b.c.color,transparent:!0,opacity:.42,depthWrite:!1,blending:Ut})))}),Dt.add(u)}function V_(o){$.star&&(Dt.remove($.star),$.star.traverse(T=>{T.geometry&&T.geometry.dispose(),T.material&&T.material.dispose()}),$.star=null);let u=nt&&nt[o],p=u&&u.temp||6300,v=Oc[0]*W.szPl*1.03,b=$.star=new On,E=new mn({vertexShader:Jo,fragmentShader:Tp,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new Ce().fromArray(Wa(p))},uEdge:{value:new Ce().fromArray(Wa(p*.762))}}});b.add(new wt(new vi(v,4),E));let w=new mn({vertexShader:Jo,fragmentShader:nv,transparent:!0,depthWrite:!1,blending:Ut,uniforms:{uCol:{value:new Ce().fromArray(Wa(p*.7))},uAmt:{value:.8},uTime:{value:0}}});b.add(new wt(new vi(v*1.04,3),w)),b.userData={surfMat:E,rimMat:w},b.renderOrder=2,Dt.add(b)}function W_(o){if($.pRoot=[],$.pCross=[],!!Kn)for(let u=0;u<Un;u++){let p=Kn[u][0],v=Kn[u][1];!$.has.has(p)||!$.has.has(v)||(p===o||v===o?$.pRoot:$.pCross).push(u)}}let q_=`
varying vec2 vP;
void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,X_=`
precision highp float;
uniform float uSweep; uniform float uBright; uniform float uLane1; uniform float uLane2;
varying vec2 vP;
void main(){
  float r = length(vP);
  if (r > 1.0) discard;
  float ang = atan(vP.y, vP.x);
  /* the graduations: rings at a tenth of the plate, radials every fifteen
     degrees, both hairlines that fade with the plate toward its rim */
  /* Hairlines, and few of them. Rings at a fifth of the plate, radials
     every thirty degrees, both thin and both dim: the graduations of an
     instrument are read, not looked at, and a plate that glows is a toy.
     The two lanes are the only firm lines on it. */
  float rg = abs(fract(r * 5.0 + 0.5) - 0.5);
  float ring = smoothstep(0.018, 0.0, rg) * 0.22;
  float ag = abs(fract(ang / 6.2831853 * 12.0 + 0.5) - 0.5);
  float radial = smoothstep(0.03, 0.0, ag / max(r * 6.0, 0.35)) * 0.16;
  float lane = smoothstep(0.008, 0.0, abs(r - uLane1)) * 0.7
             + smoothstep(0.007, 0.0, abs(r - uLane2)) * 0.45;
  /* the sweep is a slow, faint brightening of the graduations as it passes
     \u2014 not a radar's beam, a scan the eye notices only when it is looking */
  float d = mod(uSweep - ang, 6.2831853);
  float sweep = exp(-d * 1.6) * 0.30;
  /* the plate itself, barely, gone at the rim and gone at the star */
  float plate = 0.045 * (1.0 - r) * smoothstep(0.03, 0.12, r);
  float a = (plate + ring + radial + lane + sweep * (0.6 * ring + 0.5 * radial))
          * pow(1.0 - r, 0.6) * uBright;
  gl_FragColor = vec4(vec3(0.62, 0.82, 0.94) * a, a);
}`;function Y_(){if($.holo)return $.holo;let o=$.holo=new On,u=new L().fromArray(il[1]),p=new L().fromArray(rl[1]),v=new L().crossVectors(u,p).normalize();o.quaternion.setFromRotationMatrix(new st().makeBasis(u,p,v)),$.holoN=v,$.holoQ=o.quaternion.clone();let b=new wt(new wo(1,96),new mn({vertexShader:q_,fragmentShader:X_,uniforms:{uSweep:{value:0},uBright:{value:1},uLane1:{value:.4},uLane2:{value:.8}},transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:Ut,side:ri}));b.renderOrder=0,o.add(b);let E=new hn({color:10470616,transparent:!0,opacity:.22,depthWrite:!1,blending:Ut}),w=[];for(let R=0;R<2;R++){let z=new Float32Array(216);for(let ee=0;ee<36;ee++){let oe=ee/36*f,ue=Math.cos(oe),de=Math.sin(oe),H=ee%3===0?.028:.012;z[ee*6]=ue*(1-H),z[ee*6+1]=de*(1-H),z[ee*6+2]=0,z[ee*6+3]=ue*(1+H),z[ee*6+4]=de*(1+H),z[ee*6+5]=0}let Y=new it;Y.setAttribute("position",new Ze(z,3));let U=new Zn(Y,E);U.renderOrder=1,o.add(U),w.push(U)}let T=new On;for(let R=0;R<3;R++){let z=new Float32Array(123);for(let U=0;U<=40;U++){let ee=R*f/3+U/40*(f/9);z[U*3]=Math.cos(ee)*.92,z[U*3+1]=Math.sin(ee)*.92,z[U*3+2]=0}let Y=new it;Y.setAttribute("position",new Ze(z,3)),T.add(new Ti(Y,new hn({color:10479871,transparent:!0,opacity:.8,depthWrite:!1,blending:Ut})))}T.renderOrder=1,T.visible=!1,o.add(T);let I=ss(300,(R,F,z,Y,U)=>{let ee=Math.sqrt(Math.random())*1.05,oe=Math.random()*f;F[R*3]=Math.cos(oe)*ee,F[R*3+1]=Math.sin(oe)*ee,F[R*3+2]=(Math.random()-.5)*.02,z[R]=.8+Math.random()*1.4,U[R]=.05+Math.random()*.12,Y[R*3]=.7,Y[R*3+1]=.82,Y[R*3+2]=.92},Gi(600,.3,0,!1));Dt.remove(I),I.renderOrder=1,o.add(I);let D=ss(2,(R,F,z,Y,U)=>{F[R*3]=F[R*3+1]=F[R*3+2]=0,z[R]=R===0?110:300,U[R]=R===0?.38:.06,Y[R*3]=1,Y[R*3+1]=.93,Y[R*3+2]=.8},Gi(900,.15,1,!1));return Dt.remove(D),D.renderOrder=3,o.userData={plate:b,ticks:w,seg:T,dust:I,flare:D},Dt.add(o),Dt.add(D),o}function j_(o){$.retic&&(Dt.remove($.retic),$.retic.traverse(P=>{P.geometry&&P.geometry.dispose(),P.material&&P.material.dispose()}));let u=$.retic=new On,p=new L().fromArray(il[1]),v=new L().fromArray(rl[1]),b=new pn().setFromRotationMatrix(new st().makeBasis(p,v,new L().crossVectors(p,v).normalize())),E=64,w=new Float32Array((E+1)*3);for(let P=0;P<=E;P++){let I=P/E*f;w[P*3]=Math.cos(I),w[P*3+1]=Math.sin(I),w[P*3+2]=0}let T=new it;T.setAttribute("position",new Ze(w,3)),o.forEach(P=>{if(P.hop!==1)return;let I=nt&&nt[P.i],D=new Ti(T,new hn({color:I?I.color:6084863,transparent:!0,opacity:.34,depthWrite:!1,blending:Ut}));D.quaternion.copy(b),D.userData={i:P.i,spin:Math.random()*f,dir:Math.random()<.5?1:-1},D.renderOrder=2,u.add(D)}),Dt.add(u)}let Nv=new pn,Z_=new L(0,0,1);function J_(o){let u=$.holo;if(!u)return;let p=At&&$.list.length>0;if(u.visible=p,u.userData.flare.visible=p,$.retic&&($.retic.visible=p),!p)return;let v=performance.now()*.001,b=($.cnt[2]>0?$.rr[2]:$.rr[1]*1.6)*1.12;u.position.copy($.anchor),u.scale.setScalar(b);let E=u.userData;if(E.plate.material.uniforms.uLane1.value=$.rr[1]/b,E.plate.material.uniforms.uLane2.value=$.cnt[2]>0?$.rr[2]/b:-1,E.plate.material.uniforms.uSweep.value=v*.18,E.ticks[0].scale.setScalar($.rr[1]/b),E.ticks[1].scale.setScalar($.rr[2]/b),E.ticks[1].visible=$.cnt[2]>0,E.seg.scale.setScalar($.rr[1]/b),E.seg.rotation.z=-v*.12,E.dust.rotation.z=v*.02,E.flare.position.copy($.anchor),$.star){let w=$.star.userData.surfMat.uniforms.uCore.value,T=E.flare.geometry.attributes.aColor.array;for(let P=0;P<2;P++)T[P*3]=w.r,T[P*3+1]=w.g,T[P*3+2]=w.b;E.flare.geometry.attributes.aColor.needsUpdate=!0}$.retic&&$.retic.children.forEach(w=>{let T=w.userData.i;w.position.set(G[T*3],G[T*3+1],G[T*3+2]),w.scale.setScalar((ye[T]||8)*1.7),w.userData.spin+=0,Nv.setFromAxisAngle(Z_,w.userData.spin),w.quaternion.copy($.holoQ).multiply(Nv)})}function ps(o,u){if(o<0||o>=Q)return;if(!u||u.push!==!1){let Y=$.trail.indexOf(o);Y>=0?$.trail.length=Y+1:$.trail.push(o)}$.root=o,$.sel=o;let v=Xt[o]?Array.from(Xt[o]):[];v.sort((Y,U)=>(Fe[U].inb|0)-(Fe[Y].inb|0));let b=v.length>Zp;v=v.slice(0,Zp);let E=new Map;v.forEach(Y=>{let U=nt&&nt[Y],ee=U?U.key:"";E.has(ee)||E.set(ee,{c:U,list:[]}),E.get(ee).list.push(Y)});let w=[...E.values()].sort((Y,U)=>U.list.length-Y.list.length),T=new Map,P=[],I=[],D=0;w.forEach(Y=>{let U=D/Math.max(1,v.length)*f;Y.list.forEach(oe=>{let ue=D/Math.max(1,v.length)*f;T.set(oe,ue),P.push({j:oe,a:ue}),D++});let ee=D/Math.max(1,v.length)*f;Y.c&&Y.list.length&&I.push({c:Y.c,a0:U,a1:ee})});let R=[],F=0;if($.hop2&&v.length){let Y=new Set(v);Y.add(o);let U=new Map;v.forEach(ee=>{let oe=T.get(ee),ue=Xt[ee];ue&&ue.forEach(de=>{if(Y.has(de))return;let H=U.get(de);H||(H={i:de,s:0,vx:0,vy:0},U.set(de,H)),H.s++,H.vx+=Math.cos(oe),H.vy+=Math.sin(oe)})}),R=[...U.values()],F=R.length,R.sort((ee,oe)=>oe.s-ee.s||(Fe[oe.i].inb|0)-(Fe[ee.i].inb|0)),R=R.slice(0,F_),R.forEach(ee=>{ee.a=Math.atan2(ee.vy,ee.vx)}),R.sort((ee,oe)=>ee.a-oe.a)}$.list=[],$.has=new Set,$.cnt[0]=1,$.cnt[1]=v.length,$.cnt[2]=R.length;let z=(Y,U,ee)=>{$.list.push({i:Y,hop:U,ang:ee,ma:0,sp:U?H_*Math.pow(Jp[1]/Jp[U],1.5):0}),$.has.add(Y)};z(o,0,0),P.forEach(Y=>z(Y.j,1,Y.a));{let Y=-1/0,U=R.map(oe=>{let ue=oe.a;for(;ue<Y;)ue+=f;return Y=ue,ue}),ee=U.length?U[0]:0;R.forEach((oe,ue)=>{let de=ee+(ue+.5)/R.length*f;z(oe.i,2,.55*U[ue]+.45*de)})}$.hint={trunc:b?Xt[o].size:0,hop2total:F,hop2n:R.length},Hv(),d("mmleg2").style.display=R.length?"":"none",Kp(),Ga(),G_(I),V_(o),W_(o),Y_(),j_($.list),$p(!1),K_(),fi(o,!0),Qp(o)}function Hv(){let o=$.hint||{};d("mmhint").innerHTML=(o.trunc?A("mm.trunc",{t:o.trunc,n:Zp})+"<br>":"")+(o.hop2total>o.hop2n?A("mm.trunc2",{t:o.hop2total,n:o.hop2n})+"<br>":"")+A("mm.hintfull")+(ce()?" \xB7 "+A("mm.hintopen"):"")}function K_(){let o=d("mmcrumbs");o.innerHTML="",$.trail.slice(-8).forEach((u,p,v)=>{if(p){let E=document.createElement("i");E.textContent="\u203A",o.appendChild(E)}let b=document.createElement("span");b.textContent=Fe[u].n,p===v.length-1?b.className="here":b.onclick=()=>ps(u),o.appendChild(b)}),d("mmback").classList.toggle("live",$.trail.length>1)}d("mmback").onclick=()=>{$.trail.length<2||($.trail.pop(),ps($.trail[$.trail.length-1],{push:!1}))};function Qp(o){let u=$.sel;$.sel=o;let p=Fe[o],v=nt[o]&&nt[o].color||gp;d("mmside").style.setProperty("--nodec","#"+v.getHexString()),d("mm-kind").textContent=(p.k==="raw"?"RAW ARCHIVE":"WIKI CONCEPT")+(p.d?" \xB7 "+p.d:"")+(o===$.root?" \xB7 "+A("mm.isroot"):""),d("mm-name").textContent=p.n,d("mm-path").textContent=p.p+"  \xB7  "+p.w+" words  \xB7  \u2190"+p.inb;let b=Og(o);d("m-pl").textContent=b.links,d("m-mo").textContent=b.moons,d("m-mo2").textContent=b.far;let E=(p.t||[]).slice(0,12);d("mm-tagsec").style.display=E.length?"":"none",d("mm-tags").innerHTML=E.map(I=>'<span class="tag">'+M(I)+"</span>").join("");let w=d("mm-x");w.textContent=p.x||A("mm.nobody"),w.classList.toggle("none",!p.x);let T=d("mm-links");T.innerHTML=fv(o),pv(T,I=>ps(I));let P=p.n.length>10?p.n.slice(0,10)+"\u2026":p.n;d("mm-go").textContent=q(P),d("mm-center").style.display=o===$.root?"none":"",u!==o&&(d("mmside").scrollTop=0)}function Bv(o){$.hop2=!!o,W.mmHop=$.hop2,un(),d("mm-hop").classList.toggle("on",$.hop2),At&&$.root>=0&&ps($.root,{push:!1})}d("mm-hop").onclick=()=>Bv(!$.hop2),d("mm-hop").classList.toggle("on",$.hop2);function Ov(o){if($.list.length<2)return;let u=$.list.findIndex(v=>v.i===$.sel);u<0&&(u=0);let p=(u+o+$.list.length)%$.list.length;fi($.list[p].i,!0)}function em(o){let u=o!==void 0&&o>=0?o:lt;if(u<0||u>=Q){bt(A("need.node"));return}At=!0,$.anchor.set(G[u*3],G[u*3+1],G[u*3+2]),Fv(!0),z_(),nl(),Mn=-1,Mr=0,d("mind").classList.add("on"),d("hud").classList.add("mindon"),$.trail=[],ps(u),$p(!0),Dv(!0,u)}function Uc(){At&&(At=!1,Dv(!1,-1),d("mind").classList.remove("on"),d("hud").classList.remove("mindon"),Fv(!1),$.guide&&($.guide.visible=!1),$.sect&&($.sect.visible=!1),$.star&&($.star.visible=!1),$.holo&&($.holo.visible=!1,$.holo.userData.flare.visible=!1),$.retic&&($.retic.visible=!1),$.pRoot=[],$.pCross=[],$.list.length=0,$.has.clear(),$.cnt[0]=$.cnt[1]=$.cnt[2]=0,Ga(),$t&&$.root>=0&&$.root<Q&&(fm(0),he.follow=$.root,he.tgtD.set(G[$.root*3],G[$.root*3+1],G[$.root*3+2]),he.distD=g(ye[$.root]*34+240,240,3e3),hs()))}function tm(){At?Uc():em()}d("mm-close").onclick=Uc,d("mm-go").onclick=()=>{let o=$.sel;Uc(),fi(o),zu(o,!0)},d("mm-center").onclick=()=>{$.sel!==$.root&&ps($.sel)},d("mm-open").onclick=o=>ie($.sel,o),d("i-mm").onclick=()=>em(lt);let Mr=0,nm=0,im=0,rm=0,ms=-1,Gc=!1,Ur=new _e(0,0),sm=0,am=-1,om=-1e4,lm=-1e4,zv=0,Uv=0,$_=7,Q_=30,eM=420,tM=20;Br.addEventListener("pointerdown",o=>{if(Mr=o.button===2?2:1,nm=o.clientX,im=o.clientY,rm=0,ms=-1,zv=o.clientX,Uv=o.clientY,Gc=!0,Ur.x=i(o),Ur.y=r(o),Mr===1&&o.shiftKey){let u=Cp(Ur.x,Ur.y,Mn);u>=0&&(ms=u,Fu=u,Vo.add(u))}try{Br.setPointerCapture(o.pointerId)}catch(u){}}),Br.addEventListener("pointermove",o=>{let u=o.clientX-nm,p=o.clientY-im;nm=o.clientX,im=o.clientY,Ur.x=i(o),Ur.y=r(o),Gc=!0,Mr&&(rm+=Math.abs(u)+Math.abs(p),ms>=0?nM(ms,Ur.x,Ur.y,1/60):Mr===2?t_(u,p):Q1(u*.0104,p*.0104,!0))}),Br.addEventListener("pointerenter",()=>{Gc=!0}),Br.addEventListener("pointerleave",()=>{Mr||(Gc=!1,Mn=-1)}),l("pointerup",o=>{if(!Mr)return;let u=Math.hypot(o.clientX-zv,o.clientY-Uv)<=$_&&rm<Q_;if(ms>=0)Vo.add(ms),Fu=-1,u&&Gv(ms,o),ms=-1;else if(Mr===1&&u){let p=Cp(i(o),r(o),Mn);p>=0?(Mn=p,Gv(p,o)):fi(-1)}Mr=0});function Gv(o,u){if(ce()&&(u.ctrlKey||u.metaKey)){fi(o),ie(o,u);return}let p=performance.now(),v=Math.hypot(u.clientX-om,u.clientY-lm)<tM;if(p-sm<eM&&(am===o||v)){if(sm=0,am=-1,om=lm=-1e4,At){ps(o);return}fi(o),em(o);return}sm=p,am=o,om=u.clientX,lm=u.clientY,fi(o)}Br.addEventListener("contextmenu",o=>o.preventDefault());let cm=new L,Vv=new L,Wv=new L;Br.addEventListener("wheel",o=>{o.preventDefault();let u=Math.exp(o.deltaY*.0011);if(u<1&&he.follow<0&&!At){let p=i(o),v=r(o);cm.set(p,v,.5).unproject(Ue).sub(Ue.position).normalize(),Vv.set(0,0,-1).applyQuaternion(Ue.quaternion);let b=cm.dot(Vv);if(b>.2){let E=Ue.position.distanceTo(he.tgtD);Wv.copy(Ue.position).addScaledVector(cm,E/b),he.tgtD.lerp(Wv,1-u)}}e_(u)},{passive:!1});let Ju=new L,qv=new L;function nM(o,u,p,v){qv.set(G[o*3],G[o*3+1],G[o*3+2]);let b=Ue.position.distanceTo(qv);Ju.set(u,p,.5).unproject(Ue).sub(Ue.position).normalize().multiplyScalar(b).add(Ue.position);let E=g(he.dist*.3,30,420),w=1-Math.pow(6e-4,Math.min(v,.05)),T=1/Math.max(.001,v);for(let P=0;P<3;P++){let I=o*3+P,D=G[I]-_n[I],R=(P===0?Ju.x:P===1?Ju.y:Ju.z)-D,F=_n[I];_n[I]=y(F,g(R,-E,E),w),ts[I]=(_n[I]-F)*T*.35}}function iM(o){return!o||o.nodeType!==1?!1:/^(INPUT|TEXTAREA|SELECT)$/.test(o.tagName)||o.isContentEditable?!0:!!(o.closest&&o.closest('input,textarea,select,[contenteditable="true"],[contenteditable=""],.cm-editor'))}l("keydown",o=>{if(Gu||iM(o.target))return;let u=o.key.toLowerCase();if(tE()){o.preventDefault(),$c();return}if(eE()){o.preventDefault(),(u==="escape"||o.key==="?")&&cd();return}if(o.key==="?"){o.preventDefault(),ld();return}if(At){if(u==="enter"&&(o.ctrlKey||o.metaKey)){o.preventDefault(),ie($.sel,o);return}if(u==="escape"||u==="m")o.preventDefault(),Uc();else if(u==="arrowright"||u==="arrowdown"||u==="tab")o.preventDefault(),Ov(o.shiftKey&&u==="tab"?-1:1);else if(u==="arrowleft"||u==="arrowup")o.preventDefault(),Ov(-1);else if(u==="enter")o.preventDefault(),$.sel!==$.root&&ps($.sel);else if(u==="backspace")o.preventDefault(),d("mmback").onclick();else if(u==="f")o.preventDefault(),$p(!0);else if(u==="g")o.preventDefault(),d("mm-go").onclick();else if(u==="2")o.preventDefault(),Bv(!$.hop2);else return;return}if(u==="o"&&ce()&&!o.ctrlKey&&!o.metaKey&&!o.altKey){o.preventDefault(),ie(lt,o);return}if((o.ctrlKey||o.metaKey)&&u==="k"){o.preventDefault(),Dp();return}if(u==="/")o.preventDefault(),Dp();else if(u==="m")o.preventDefault(),tm();else if(u==="r")Rp();else if(u==="l")kp();else if(u==="x")Fp();else if(u==="g")o.preventDefault(),Dc();else if(u===" ")o.preventDefault(),o.repeat||qu();else if(u==="p")o.preventDefault(),ju();else if(u==="u")o.preventDefault(),Hc(!Pe.on);else if(u==="h"){let p=d("hud").style.display!=="none";d("hud").style.display=p?"none":"",p&&bt(A("hud.off"),2600)}else u==="escape"&&(Re.on?Wu(!1):br.length?bv():el()||wr>=0?hv():us?(us=!1,d("r-broken").classList.remove("on")):(fi(-1),ta=""))});let wi=null,Qt=-1,sl=!1,tr={uStar:{value:new Lt(0,0,0,100)},uStarCol:{value:new Lt(1,1,1,1)},uOcc:{value:new Lt(0,0,0,0)},uOccS:{value:6},uRingS:{value:new Lt(0,1,0,0)},aSurf:{value:new Lt(0,0,8,1)}},Vc=new Float32Array(4),Wc=new Float32Array(4);function rM(){if(wi)return;let o=new Sa({shininess:18,specular:725014,emissive:132620});o.extensions={derivatives:!0},o.onBeforeCompile=u=>{u.uniforms.uStar=tr.uStar,u.uniforms.uStarCol=tr.uStarCol,u.uniforms.uOcc=tr.uOcc,u.uniforms.uOccS=tr.uOccS,u.uniforms.uRingS=tr.uRingS,u.uniforms.aSurf=tr.aSurf,Kg(u,!1),Vg(u,!1)},wi=new wt(new Us(1,96,64),o),wi.visible=!1,Dt.add(wi)}function sM(){return!Q||Re.on?-1:(u=>{if(u<0||u>=Q||u===k)return!1;let p=G[u*3]-Ue.position.x,v=G[u*3+1]-Ue.position.y,b=G[u*3+2]-Ue.position.z;return Math.sqrt(p*p+v*v+b*b)<ye[u]*70})(lt)?lt:-1}function aM(o){return rM(),tv(o,Wc,0),tr.aSurf.value.set(Wc[0],Wc[1],Wc[2],Wc[3]),!0}function oM(o){let u=sM();if(u!==Qt&&(Qt=u,sl=!1),Qt>=0&&!sl&&(sl=aM(Qt)),!!wi){if(Qt<0||!sl){wi.visible=!1;return}wi.visible=!0,wi.position.set(G[Qt*3],G[Qt*3+1],G[Qt*3+2]);{let p=jo?$g[jo[Qt]]:0;wi.scale.set(ye[Qt],ye[Qt]*(1-p),ye[Qt])}Js&&(Bu(Qt,W.spr,Qi,Vc),tr.uStar.value.set(Vc[0],Vc[1],Vc[2],Vc[3]),tr.uStarCol.value.set(Ks[Qt*4],Ks[Qt*4+1],Ks[Qt*4+2],Ks[Qt*4+3]),tr.uOcc.value.set(Li[Qt*4],Li[Qt*4+1],Li[Qt*4+2],Li[Qt*4+3]),tr.uOccS.value=Au[Qt]||6,ui&&tr.uRingS.value.set(ui[Qt*4],ui[Qt*4+1],ui[Qt*4+2],ui[Qt*4+3])),ev(Qt,wi.quaternion)}}function lM(){wi&&(Dt.remove(wi),wi.geometry.dispose(),wi.material.dispose(),wi=null,Qt=-1,sl=!1)}let hm=performance.now(),qc=60,an=0,gs=0,nr=new st,Xv=new pn,vs=new L,ir=new L,Yv=new L,kt={base:Math.min(devicePixelRatio||1,2),now:1,want:1,still:0,hold:0,ceil:2,px:0,py:0,pz:0,fx:0,fy:0,fz:0,had:!1},jv=13e6,cM=1.6,Ku=0;function um(){return kt.still<.45?1:kt.still<1.1?Math.min(1.45,kt.ceil):kt.ceil}function hM(o){let u=Ue.matrixWorld.elements,p=u[12],v=u[13],b=u[14],E=-u[8],w=-u[9],T=-u[10],P=!kt.had;if(!P){let Y=n()*.5/Math.tan(Ue.fov*Math.PI/360),U=Math.max(1,he.dist),ee=Math.hypot(p-kt.px,v-kt.py,b-kt.pz),oe=Math.hypot(E-kt.fx,w-kt.fy,T-kt.fz);P=(ee/U+oe)*Y>.0625}kt.px=p,kt.py=v,kt.pz=b,kt.fx=E,kt.fy=w,kt.fz=T,kt.had=!0,Ku=$t?Ku+o:0;let I=Ku<cM||Qs!==0||zi!==W.gap;P||I||!$t||At?kt.still=0:kt.still+=o;let D=um();if(kt.hold+=o,kt.now>1&&kt.hold>1&&qc<42){kt.ceil=Math.max(1,kt.now-.55),kt.now=1,kt.hold=0,Zv();return}if(Math.abs(D-kt.now)<.01)return;let R=t(),F=n(),z=kt.base;D>kt.now&&R*F*z*z*D*D>jv&&(kt.ceil=Math.max(1,Math.sqrt(jv/(R*F*z*z))),Math.abs(um()-kt.now)<.01)||(kt.now=um(),kt.hold=0,Zv())}function Zv(){Vt.setPixelRatio(kt.base*kt.now),Ka()}function Ka(){let o=t(),u=n();Vt.setSize(o,u,!1),Ue.aspect=o/u,Ue.updateProjectionMatrix();let p=u/(2*Math.tan(Ue.fov*Math.PI/360))*(Vt.getPixelRatio()/kt.base);Or.forEach(b=>{b.uniforms&&(b.uniforms.uScale.value=p)});let v=Vt.getPixelRatio();zg(Math.max(1,Math.round(o*v)),Math.max(1,Math.round(u*v))),ki()}l("resize",Ka);let uM=o=>o.kind==="shell"?o.inc:o.inc*W.tlt,Xn=new Float32Array(3),Yn=new Float32Array(3);function dM(o,u){let p=1-2*(u+.5)/Math.max(1,o.sN||1),v=Math.sqrt(Math.max(0,1-p*p)),b=u*ac,E=Math.cos(b)*v,w=p,T=Math.sin(b)*v,P=Math.abs(E)<.9?1:0,I=Math.abs(E)<.9?0:1,D=I*T-0*w,R=0*E-P*T,F=P*w-I*E,z=Math.hypot(D,R,F)||1;D/=z,R/=z,F/=z,o.su=[D,R,F],o.sv=[w*F-T*R,T*D-E*F,E*R-w*D]}let Gr=new Float32Array(2);function dm(o,u){if(!(o>1e-4)){Gr[0]=Math.cos(u),Gr[1]=Math.sin(u);return}let p=Math.sin(u),v=u+o*p*(1+o*Math.cos(u));for(let b=0;b<2;b++){let E=Math.cos(v);v-=(v-o*Math.sin(v)-u)/(1-o*E||1e-6)}Gr[0]=Math.cos(v)-o,Gr[1]=Math.sqrt(1-o*o)*Math.sin(v)}function $u(o){let u=uM(o),p=Math.cos(u),v=Math.sin(u),b=W.sph;if(b<.001||!o.su)return Xn[0]=1,Xn[1]=0,Xn[2]=0,Yn[0]=0,Yn[1]=v,Yn[2]=p,Jv(o);let E=o.su,w=o.sv,T=E[0]<0?-1:1,P=1+(E[0]*T-1)*b,I=E[1]*T*b,D=E[2]*T*b,R=w[0]*T*b,F=v+(w[1]*T-v)*b,z=p+(w[2]*T-p)*b,Y=Math.hypot(P,I,D)||1,U=Math.hypot(R,F,z)||1;Xn[0]=P/Y,Xn[1]=I/Y,Xn[2]=D/Y,Yn[0]=R/U,Yn[1]=F/U,Yn[2]=z/U,Jv(o)}function Jv(o){let u=o.aop;if(!u)return;let p=Math.cos(u),v=Math.sin(u);for(let b=0;b<3;b++){let E=Xn[b],w=Yn[b];Xn[b]=E*p+w*v,Yn[b]=w*p-E*v}}function Kv(o,u,p,v){wu||(cc[o]=p);let b=Bi[o];if(v){let E=cc[o]/(p>1e-4?p:1e-4),w=E<.06?.06:E>6?6:E;b+=v*u.sp*w*Math.sqrt(w),Bi[o]=b}return b}function fm(o){let u=o*W.spd;an+=u;let p=!1,v=Qi,b=v>.001?Math.pow(v,-1.5):1;if(Tt.forEach((w,T)=>{if(w.oR===void 0)return;w.oMA===void 0&&(w.oMA=w.oA0),w.oMA+=u*w.oSp*b;let P=w.oMA,I=w.oR*v;if(w.pos.set(Math.cos(P)*I,w.oY*v,Math.sin(P)*I),Oi){let D=Oi.geometry.attributes.position.array;if(D[T*3]=w.pos.x,D[T*3+1]=w.pos.y,D[T*3+2]=w.pos.z,Ri){let R=Ri.geometry.attributes.position.array,z=(w.reachA!==void 0?w.reachA+w.reachB*zi:w.reach||120)*.42*W.spr,Y=Math.cos(w.hzA||0)*z,U=Math.sin(w.hzA||0)*z,ee=T*9;R[ee]=w.pos.x,R[ee+1]=w.pos.y,R[ee+2]=w.pos.z,R[ee+3]=w.pos.x+Y,R[ee+4]=w.pos.y+z*.18,R[ee+5]=w.pos.z+U,R[ee+6]=w.pos.x-Y,R[ee+7]=w.pos.y-z*.18,R[ee+8]=w.pos.z-U}p=!0}}),p&&(Oi.geometry.attributes.position.needsUpdate=!0,Ri&&(Ri.geometry.attributes.position.needsUpdate=!0)),Tt.forEach(w=>{w.si!==void 0&&(w.sy+=.0016,w.sx+=7e-4,w.rz+=.0021)}),mr&&(mr.rotation.y=an*85e-7,mr.scale.set(v,.68*v,v)),Xs&&(Xs.rotation.y=-an*55e-6,Xs.scale.setScalar(v)),ka&&ka.scale.setScalar(v),ns&&ns.visible&&ns.scale.setScalar(v),zt){let w=zt.userData;zt.position.set(G[k*3],G[k*3+1],G[k*3+2]),w.surfMat.uniforms.uTime.value=an*.001,w.rimMat.uniforms.uTime.value=an*.001,w.proMat.uniforms.uTime.value=an*.001,w.rimMat.uniforms.uAmt.value=.8+.28*Math.sin(an*.0017+.4)+.1*Math.sin(an*.0043);let T=1+Math.sin(an*85e-5)*.022,P=Re.on?xi[k]:1;zt.visible=P>.001&&!At;let I=W.briSun;w.halo.material.opacity=.085*I,w.rimMat.uniforms.uAmt.value*=g(I,.15,2.4),zt.scale.setScalar(P*(ye[k]/(w.R||1))),w.surface.scale.setScalar(T),w.halo.scale.setScalar(1+Math.sin(an*61e-5+1.4)*.05),Hu.intensity=w.lit*g(P,0,1)*W.briSun}let E=W.spr;for(let w=0;w<Q;w++){let T=tt[w];if(T.kind==="moon")continue;if(T.kind==="core"){G[w*3]=_n[w*3],G[w*3+1]=_n[w*3+1],G[w*3+2]=_n[w*3+2];continue}$u(T);let P,I=T.y;if(T.kind==="wiki"){let F=Math.max(.05,(Go.step*zi+T.gapA)/(T.step0||1));P=(T.inner+(T.r0-T.inner)*F)*E}else P=T.r0*v,I*=v;T.aNow=P,I*=1-W.sph,dm(T.ecc,Kv(w,T,P,u));let D=Gr[0],R=Gr[1];G[w*3]=T.anchor.pos.x+(D*Xn[0]+R*Yn[0])*P+_n[w*3],G[w*3+1]=T.anchor.pos.y+(D*Xn[1]+R*Yn[1])*P+I+_n[w*3+1],G[w*3+2]=T.anchor.pos.z+(D*Xn[2]+R*Yn[2])*P+_n[w*3+2]}for(let w=0;w<Q;w++){let T=tt[w];if(T.kind!=="moon")continue;let P=T.anchorNode;$u(T);let I=T.r0*E;T.aNow=I,dm(T.ecc,Kv(w,T,I,u));let D=Gr[0],R=Gr[1];G[w*3]=G[P*3]+(D*Xn[0]+R*Yn[0])*I+_n[w*3],G[w*3+1]=G[P*3+1]+(D*Xn[1]+R*Yn[1])*I+_n[w*3+1],G[w*3+2]=G[P*3+2]+(D*Xn[2]+R*Yn[2])*I+_n[w*3+2]}At&&(O_(u),U_()),wu=!0}function fM(o){let u=1-Math.pow(.004,o);if(At){for(let p=0;p<Q;p++)ft[p]=y(ft[p],$.has.has(p)?1:0,u);$v(o);return}for(let p=0;p<Q;p++){let v=nt[p],b=v.on?1:.02;if(ta&&(b*=zn[p].includes(ta)?1:.07),us&&(b*=(Fe[p].bk|0)>0?1:.05),el()?b*=Za.has(p)?1:.05:lt>=0&&(p===lt?b*=1:Lc.has(p)?b*=.92:b*=.24),Re.on){b=xi[p]>0?v.on?1:.02:0,ft[p]=b?Math.min(b,ft[p]+o*9):0;continue}ft[p]=y(ft[p],b,u)}$v(o)}let ia=new pn,pm=new Ir;function $v(o){if(Zo&&(Zo.uniforms.uTime.value=an*.001,Zo.uniforms.uBright.value=g(W.briSys*1.6,0,2.2)),!Tt||!Tt.length)return;let u=1-Math.pow(.004,o),p=Oi?Oi.geometry.attributes.aAlpha:null,v=Ri?Ri.geometry.attributes.aAlpha:null,b=Ri?Ri.geometry.attributes.aSize:null,E=!1;Tt.forEach((w,T)=>{if(!w.op0)return;if(v&&w.tier===0){let Y=Math.max(60,(w.reachA!==void 0?w.reachA+w.reachB*zi:w.reach||120)*W.spr),U=Ue.position.distanceTo(w.pos),ee=g((U/Y-1.5)/2.5,0,1),oe=(At?0:w.on?1:0)*ee*ee*W.briSys,ue=1+.04*Math.sin(an*19e-5+w.oA0*1.7);for(let de=0;de<3;de++){let H=T*3+de;v.array[H]=y(v.array[H],oe*(de?.045:.075),u),b.array[H]=Y*(de?3.4:5)*ue}v.needsUpdate=!0,b.needsUpdate=!0}let P=At?0:w.on?1:0;Re.on&&(P*=Re.u>=w.genT?g((Re.u-w.genT)/Re.grow,0,1):0);let I=w.vis=y(w.vis===void 0?P:w.vis,P,u),D=w.tier===0?W.briSys:1;p&&(p.array[T]=w.op0.glow*I*D,E=!0);let R=w.si;if(R===void 0||!Ys)return;let F=I>.006?w.sR:0,z=1+Math.sin(an*.0011+w.oA0*3.1)*.035;ia.identity(),vs.set(F*z,F*z,F*z),nr.compose(w.pos,ia,vs),Ys.setMatrixAt(R,nr),bu[R]=w.op0.core*I*g(D*2.2,0,1),ia.setFromEuler(pm.set(w.sx,w.sy,0)),vs.set(F,F,F),nr.compose(w.pos,ia,vs),Na.setMatrixAt(R,nr),_u[R]=w.op0.shell*I*D,ia.setFromEuler(pm.set(w.rx,0,w.rz)),nr.compose(w.pos,ia,vs),Ha.setMatrixAt(R,nr),Mu[R]=w.op0.ring*I*D,ia.setFromEuler(pm.set(w.rx*.72,w.rz*.3,-w.rz*.86)),nr.compose(w.pos,ia,vs),Ba.setMatrixAt(R,nr),Eu[R]=w.op0.ring2*I*D*(.72+.38*Math.sin(an*52e-5+w.oA0*2.3))}),E&&(p.needsUpdate=!0),Ys&&[Ys,Na,Ha,Ba].forEach(w=>{w.instanceMatrix.needsUpdate=!0,w.geometry.attributes.aAlpha.needsUpdate=!0})}let Xc={ref:1,k:1.15,floor:.3},Qv=new Ns,pM=new st,mm=new ar;function mM(){if(!Fa)return;let o=Fa.material.uniforms,u=zt?zt.position:ir.set(0,0,0),p=Ue.position.distanceTo(u),v=g((p/o.uR0.value-1.6)/2.4,0,1),b=W.zod*v*v*.16;(At||!zt||!zt.visible)&&(b=0),Re.on&&k>=0&&(b*=g(xi[k],0,1)),o.uAmt.value=b,Fa.visible=b>5e-4,Fa.visible&&(Fa.position.copy(u),o.uSun.value.copy(u),o.uCam.value.copy(Ue.position))}function gm(o){let u=1-(o/Xc.ref-1)*Xc.k;return u>1?1:u<Xc.floor?Xc.floor:u}function gM(){Xc.ref=Math.max(60,he.dist),M1(),Ue.updateMatrixWorld(),Qv.setFromProjectionMatrix(pM.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse))}let al={core:1,wiki:1,moon:1,spiral:1,shell:1};function vM(){al.core=W.briSun,al.wiki=W.briPl,al.moon=W.briMn,al.spiral=al.shell=W.briPl}function yM(){if(!Q||!Sn||!Sn.instanceColor)return;let o=Sn.instanceColor.array,u=W.bri;vM();let p=Re.on,v=br.length>0,b=Ue.position,E=b.x,w=b.y,T=b.z,P=W.spr,I=Qi,D=n()*.5/Math.tan(Ue.fov*Math.PI/360),R=$i.attributes.aStar;for(let F=0;F<Q;F++){let z=At&&!$.has.has(F),Y=z?tt[F].kind:At?"wiki":tt[F].kind,U=Y!==tt[F].kind&&F===k;if(ir.set(G[F*3],G[F*3+1],G[F*3+2]),Bu(F,P,I,Js.subarray(F*4,F*4+4)),Li[F*4+3]>0)if(At)Li[F*4]=0,Li[F*4+1]=1e7,Li[F*4+2]=0;else{let Se=tt[F].anchorNode;Li[F*4]=G[Se*3],Li[F*4+1]=G[Se*3+1],Li[F*4+2]=G[Se*3+2]}let ee=F===k&&zt&&!At?0:ye[F];z&&(ee=0),F===Qt&&sl&&(ee=0),p&&(ee*=xi[F]),v&&hi[F]>.004&&(ee*=1+hi[F]*.16),ev(F,Xv);let oe=jo?$g[jo[F]]:0;vs.set(ee,ee*(1-oe),ee),nr.compose(ir,Xv,vs),Sn.setMatrixAt(F,nr);let ue=.1+ft[F]*.9;F===lt?ue=1:F===Mn&&(ue=Math.min(1,ue*1.35)),v&&hi[F]>.004&&(ue+=hi[F]*.9);let de=al[Y]||1,H=Math.min(1.8,ue*(.55+u*de*.45));o[F*3]=Be[F*3]*H,o[F*3+1]=Be[F*3+1]*H,o[F*3+2]=Be[F*3+2]*H,hc[F*3]=G[F*3],hc[F*3+1]=G[F*3+1],hc[F*3+2]=G[F*3+2];let J=ft[F]*(Y==="wiki"?.62:Y==="core"?1:.38);U&&(J*=.5);let Ee=G[F*3]-E,Te=G[F*3+1]-w,ve=G[F*3+2]-T,re=Math.sqrt(Ee*Ee+Te*Te+ve*ve);if(Y!=="core"){let Se=Js[F*4]-G[F*3],Ae=Js[F*4+1]-G[F*3+1],He=Js[F*4+2]-G[F*3+2],Ke=Math.sqrt(Se*Se+Ae*Ae+He*He),Ve=.5*(1+(Se*Ee+Ae*Te+He*ve)/(Ke*re+1e-6));J*=.12+.88*Ve;let ae=tt[F].aNow;if(ae>1&&!At){let Xe=ae/(Ke+1e-6);J*=Xe*Xe<.45?.45:Xe*Xe>2.2?2.2:Xe*Xe}let me=ye[F]*D/Math.max(1,re);me>5&&(J*=Math.max(.15,1-(me-5)/12))}F===lt?J=Math.min(1.6,J*2.1):Lc.has(F)&&(J*=1.5),p&&dn[F]&&(J*=2.6),!p&&!At&&nn[F]>.002&&(J+=nn[F]*1.9),v&&hi[F]>.004&&(J+=hi[F]*2.2),J*=gm(re),z&&(J=0),Tu[F]=Math.min(2.6,J*u*de),(p||Hp)&&(js[F]=Zs[F]*(p?xi[F]:1))}if($n){for(let F=0;F<Pi.length;F++){let z=Pi[F];ir.set(G[z*3],G[z*3+1],G[z*3+2]);let Y=ye[z]*Uo[F],U=Y/Math.max(1,Ue.position.distanceTo(ir));Y*=G1(g((U-.0052)/.0123,0,1)),p&&(Y*=xi[z]),nr.compose(ir,Du[F],vs.set(Y,Y,Y)),$n.setMatrixAt(F,nr),Bu(z,P,I,vc.subarray(F*4,F*4+4)),vc[F*4+3]=Y/(Uo[F]||1)}$n.instanceMatrix.needsUpdate=!0,$n.geometry.attributes.aRing.needsUpdate=!0}(p||Hp)&&(gr.attributes.aSize.needsUpdate=!0,Hp=p),Sn.instanceMatrix.needsUpdate=!0,Sn.instanceColor.needsUpdate=!0,R&&(R.needsUpdate=!0),Sn.geometry.attributes.aOcc&&(Sn.geometry.attributes.aOcc.needsUpdate=!0),gr.attributes.position.needsUpdate=!0,gr.attributes.aAlpha.needsUpdate=!0}function xM(o){let u=wc[bc],p=u.mask,v=!!u.cross;if(Re.on){let E=Re.u,w=.016;for(let T=0;T<Un;T++){let P=Kn[T];if(!p[P[2]]||v&&nt[P[0]]===nt[P[1]]){qs[T]=0;continue}qs[T]=E<=Ho[T]?0:g((E-Ho[T])/w,0,1)}return}let b=Math.min(1,o*5.2);for(let E=0;E<Un;E++){let w=Kn[E],T=p[w[2]]&&!(v&&nt[w[0]]===nt[w[1]])?1:0,P=1-E%17*.028;qs[E]+=(T-qs[E])*b*P,Math.abs(T-qs[E])<.004&&(qs[E]=T)}}let ys=new Float32Array(3);function ey(o){let u,p,v;if(o===k)u=G[o*3],p=G[o*3+1],v=G[o*3+2];else{let T=nt[o];if(!T||!T.pos)return-1;u=T.pos.x,p=T.pos.y,v=T.pos.z}ys[0]=u,ys[1]=p,ys[2]=v;let b=u-G[o*3],E=p-G[o*3+1],w=v-G[o*3+2];return Math.sqrt(b*b+E*E+w*w)}function wM(){if(!Un)return;let o=(.2+.34*(1-W.ten))*W.arc,u=.05+.09*(1-W.ten),p=At?0:W.bnd,v=W.lnk,b=lt,E=el(),w=br.length>0?hi:null,T=G,P=_g,I=Mg,D=ft,R=Sg,F=W.lwd,z=0,Y=!1,U=0,ee=Ue.position,oe=ee.x,ue=ee.y,de=ee.z,H=n()*.5/Math.tan(Ue.fov*Math.PI/360),J=0;for(let Ee=0;Ee<Un;Ee++){let Te=Kn[Ee],ve=Te[0],re=Te[1],Se=Te[2],Ae=qs[Ee],He=D[ve],Ke=D[re],Ve=(He<Ke?He:Ke)*(Se===0?.55:.4)*v;if(At&&(Ve*=ve===$.root||re===$.root?1.7:.3),E?Ve*=Qo.has(Ee)?4.2:.05:b>=0&&(Ve*=ve===b||re===b?3.4:.22),w){let Et=w[ve]>w[re]?w[ve]:w[re];Et>.004&&(Ve+=Et*1.5*v)}Ae<1&&(Ve*=Ae>0?Ae:0);let ae=pt[Ee];ae||(ae=pt[Ee]={});let me=T[ve*3],Xe=T[ve*3+1],Ye=T[ve*3+2],$e=T[re*3],vt=T[re*3+1],ct=T[re*3+2],Ot=(me+$e)*.5,mt=(Xe+vt)*.5,en=(Ye+ct)*.5,vn=Ot-oe,yn=mt-ue,Sr=en-de,rr=Math.sqrt(vn*vn+yn*yn+Sr*Sr);Ve*=gm(rr);let ln=me-$e,sr=Xe-vt,xs=Ye-ct,cn=Math.sqrt(ln*ln+sr*sr+xs*xs),ul=0,Qa=0,by=0,hd=Math.sqrt(Ot*Ot+mt*mt+en*en);if(hd>1e-4&&cn>1e-4){let Et=Ot/hd,sn=mt/hd,jt=en/hd,kn=(Et*ln+sn*sr+jt*xs)/(cn*cn),Fn=Et-kn*ln,Tn=sn-kn*sr,Gn=jt-kn*xs,ei=Math.sqrt(Fn*Fn+Tn*Tn+Gn*Gn);if(ei>.08){let Wi=cn*u/ei;ul+=Fn*Wi,Qa+=Tn*Wi,by+=Gn*Wi}}Qa+=cn*o;let _y=Ot+ul,My=mt+Qa,Ey=en+by,ws=me+(_y-me)*(2/3),bs=Xe+(My-Xe)*(2/3),_s=Ye+(Ey-Ye)*(2/3),Ms=$e+(_y-$e)*(2/3),Es=vt+(My-vt)*(2/3),Ss=ct+(Ey-ct)*(2/3);if(p>.002){let Et=ey(ve);if(Et>=0){let jt=p*(cn<Et?cn/(Et>.001?Et:.001):1);ws+=(ys[0]-ws)*jt,bs+=(ys[1]-bs)*jt,_s+=(ys[2]-_s)*jt}let sn=ey(re);if(sn>=0){let jt=p*(cn<sn?cn/(sn>.001?sn:.001):1);Ms+=(ys[0]-Ms)*jt,Es+=(ys[1]-Es)*jt,Ss+=(ys[2]-Ss)*jt}if(cn>1e-4){let jt=-ln/cn,kn=-sr/cn,Fn=-xs/cn,Tn=(ws-me)*jt+(bs-Xe)*kn+(_s-Ye)*Fn,Gn=Tn<cn*.08?cn*.08:Tn>cn*.45?cn*.45:Tn;if(Gn!==Tn){let Ar=Gn-Tn;ws+=jt*Ar,bs+=kn*Ar,_s+=Fn*Ar}let ei=(Ms-me)*jt+(Es-Xe)*kn+(Ss-Ye)*Fn,Wi=ei<cn*.55?cn*.55:ei>cn*.92?cn*.92:ei;if(Wi!==ei){let Ar=Wi-ei;Ms+=jt*Ar,Es+=kn*Ar,Ss+=Fn*Ar}}}let Sy=0;{let Et=me-2*ws+Ms,sn=Xe-2*bs+Es,jt=Ye-2*_s+Ss,kn=ws-2*Ms+$e,Fn=bs-2*Es+vt,Tn=_s-2*Ss+ct,Gn=Et*Et+sn*sn+jt*jt,ei=kn*kn+Fn*Fn+Tn*Tn;Sy=Math.sqrt(Gn>ei?Gn:ei)}let Ty=!1;if(Ae>.002&&Ve>.002){mm.center.set(Ot,mt,en);let Et=cn*.5,sn=ws-Ot,jt=bs-mt,kn=_s-en,Fn=Math.sqrt(sn*sn+jt*jt+kn*kn);Fn>Et&&(Et=Fn);let Tn=Ms-Ot,Gn=Es-mt,ei=Ss-en,Wi=Math.sqrt(Tn*Tn+Gn*Gn+ei*ei);Wi>Et&&(Et=Wi),mm.radius=Et,Qv.intersectsSphere(mm)||(Ty=!0,J++)}if(Ae<=.002||Ve<=.002||Ty){if(ae.zero){z+=R,ae.str=0,ae.ty=Se;continue}for(let Et=0;Et<R;Et++)P[z*3]=me,P[z*3+1]=Xe,P[z*3+2]=Ye,I[z*3]=0,I[z*3+1]=0,I[z*3+2]=0,z++;ae.str=0,ae.ty=Se,ae.zero=!0,Y=!0;continue}ae.zero=!1,Y=!0;let Tr=t1(Sy*H/(rr>1?rr:1),xc),eo=0;if(Tr>=6&&Se!==0){let Et=cn*H/(rr>1?rr:1)/(Tr-1);eo=Math.round(26/(Et>.01?Et:.01)),eo=eo<2?2:eo>7?7:eo}let Ay=F*(Se===0?1:.86);b>=0&&(ve===b||re===b)&&(Ay*=1.5);let Ts=Pg[Se],dl=.5,rE=Ts.r*Ve,sE=Ts.g*Ve,aE=Ts.b*Ve,oE=(Be[ve*3]-Ts.r)*dl*Ve,lE=(Be[ve*3+1]-Ts.g)*dl*Ve,cE=(Be[ve*3+2]-Ts.b)*dl*Ve,hE=(Be[re*3]-Ts.r)*dl*Ve,uE=(Be[re*3+1]-Ts.g)*dl*Ve,dE=(Be[re*3+2]-Ts.b)*dl*Ve,Ry=1/(Tr-1);Zt[0]=me,Zt[1]=Xe,Zt[2]=Ye;for(let Et=1;Et<Tr;Et++){let sn=Et*Ry*Ae,jt=1-sn,kn=jt*jt*jt,Fn=3*jt*jt*sn,Tn=3*jt*sn*sn,Gn=sn*sn*sn;Zt[Et*3]=kn*me+Fn*ws+Tn*Ms+Gn*$e,Zt[Et*3+1]=kn*Xe+Fn*bs+Tn*Es+Gn*vt,Zt[Et*3+2]=kn*Ye+Fn*_s+Tn*Ss+Gn*ct}let fE=Ay*.5*rr/H;for(let Et=0;Et<xc;Et++){let sn=Et<Tr?Et:Tr-1,jt=sn*3,kn=Zt[jt],Fn=Zt[jt+1],Tn=Zt[jt+2],Gn=(sn>0?sn-1:0)*3,ei=(sn<Tr-1?sn+1:Tr-1)*3,Wi=Et>=Tr||eo&&Et>0&&Et<Tr-1&&Et%eo===0,Ar=Wi?0:Ae<1&&Et>=Tr-2?2.6:1,ud=2*sn*Ry-1,Tm=ud<0?-ud:0,Am=ud>0?ud:0;Nu(P,I,z,kn,Fn,Tn,Zt[ei]-Zt[Gn],Zt[ei+1]-Zt[Gn+1],Zt[ei+2]-Zt[Gn+2],kn-oe,Fn-ue,Tn-de,Wi?0:fE,(rE+oE*Tm+hE*Am)*Ar,(sE+lE*Tm+uE*Am)*Ar,(aE+cE*Tm+dE*Am)*Ar),z+=2,Wi||U++}ae.ax=me,ae.ay=Xe,ae.az=Ye,ae.bx=$e,ae.by=vt,ae.bz=ct,ae.c1x=ws,ae.c1y=bs,ae.c1z=_s,ae.c2x=Ms,ae.c2y=Es,ae.c2z=Ss,ae.str=Ve,ae.ty=Se,ae.prog=Ae}on.linkLive=U,on.linkCap=Un*xc,on.linkCull=J,Y&&(uc.attributes.position.needsUpdate=!0,uc.attributes.aColor.needsUpdate=!0)}function bM(){if(!Bo)return;let o=W.trl>.02&&Q>0&&!At;if(Bo.visible=o,!o){$s.setDrawRange(0,0);return}let u=Ue.position,p=u.x,v=u.y,b=u.z,E=n()*.5/Math.tan(Ue.fov*Math.PI/360),w=lp,T=cp,P=G,I=Qi,D=W.spr,R=W.trl,F=0,z=0;for(let Y=0;Y<Q&&F<Iu;Y++){let U=Lu[Y],ee=tt[U];if(!ee||ee.kind==="core"||!ee.sp)continue;let oe=ft[U];if(oe<.06)continue;let ue=P[U*3]-p,de=P[U*3+1]-v,H=P[U*3+2]-b,J=ue*ue+de*de+H*H;if(J<1)continue;let Ee=Math.sqrt(J),Te=ye[U]*E/Ee;if(Te<.9)continue;let ve=Te>4?1:(Te-.9)/3.1,re,Se,Ae=ee.y;if(ee.kind==="moon"){let ln=ee.anchorNode;re=ee.r0*D,ty.set(P[ln*3],P[ln*3+1],P[ln*3+2]),Se=ty,Ae=0}else if(ee.kind==="wiki"){let ln=Math.max(.05,(Go.step*zi+ee.gapA)/(ee.step0||1));re=(ee.inner+(ee.r0-ee.inner)*ln)*D,Se=ee.anchor.pos}else re=ee.r0*I,Ae*=I,Se=ee.anchor.pos;if(!Se||!(re>.01))continue;let He=Bi[U];$u(ee);let Ke=Xn[0],Ve=Xn[1],ae=Xn[2],me=Yn[0],Xe=Yn[1],Ye=Yn[2];Ae*=1-W.sph;let $e=-n1/(Va-1)*(ee.sp<0?-1:1),vt=ee.ecc||0,ct=0,Ot=0,mt=Be[U*3],en=Be[U*3+1],vn=Be[U*3+2],yn=R*ve*g(oe,0,1)*(U===lt?1.7:1)*gm(Ee)*.55;for(let ln=0;ln<Va;ln++)dm(vt,He+ln*$e),ct=Gr[0],Ot=Gr[1],Zt[ln*3]=Se.x+(ct*Ke+Ot*me)*re+_n[U*3],Zt[ln*3+1]=Se.y+(ct*Ve+Ot*Xe)*re+Ae+_n[U*3+1],Zt[ln*3+2]=Se.z+(ct*ae+Ot*Ye)*re+_n[U*3+2];let rr=g(Te*.2*W.lwd,.8,5)*.5*Ee/E;for(let ln=0;ln<Va;ln++){let sr=ln*3,xs=(ln>0?ln-1:0)*3,cn=(ln<Va-1?ln+1:Va-1)*3,ul=1-ln/(Va-1),Qa=yn*ul*ul;Nu(w,T,z,Zt[sr],Zt[sr+1],Zt[sr+2],Zt[cn]-Zt[xs],Zt[cn+1]-Zt[xs+1],Zt[cn+2]-Zt[xs+2],Zt[sr]-p,Zt[sr+1]-v,Zt[sr+2]-b,rr*ul,mt*Qa,en*Qa,vn*Qa),z+=2}Tg[F++]=U}$s.setDrawRange(0,F*Ag),$s.attributes.position.needsUpdate=!0,$s.attributes.aColor.needsUpdate=!0,on.trails=F}let ty=new L;function _M(o){if(Un){for(let u=0;u<Nr;u++){if(Oo[u]+=hp[u]*o*60*Math.max(.15,W.spd),Oo[u]>1)if(Oo[u]=0,At&&($.pRoot.length||$.pCross.length)){let w=Math.random()<.8&&$.pRoot.length||!$.pCross.length?$.pRoot:$.pCross;dc[u]=w[Math.floor(Math.random()*w.length)]}else dc[u]=Math.floor(Math.random()*Un);let p=pt[dc[u]];if(!p||p.str<.03||p.c1x===void 0){for(let w=0;w<Hr;w++)Cu[u*Hr+w]=0;continue}let v=p.prog===void 0?1:p.prog,b=Pg[p.ty],E=Math.min(1,p.str*2.4);for(let w=0;w<Hr;w++){let T=u*Hr+w,P=Math.max(0,Oo[u]-w*.022)*v,I=1-P,D=I*I*I,R=3*I*I*P,F=3*I*P*P,z=P*P*P;fc[T*3]=D*p.ax+R*p.c1x+F*p.c2x+z*p.bx,fc[T*3+1]=D*p.ay+R*p.c1y+F*p.c2y+z*p.by,fc[T*3+2]=D*p.az+R*p.c1z+F*p.c2z+z*p.bz;let Y=1-w/Hr;up[T]=(2.4+p.str*5)*(.55+.45*Y),pc[T*3]=b.r,pc[T*3+1]=b.g,pc[T*3+2]=b.b,Cu[T]=E*Math.sin(P*Math.PI)*Y*Y}}vr.attributes.position.needsUpdate=!0,vr.attributes.aSize.needsUpdate=!0,vr.attributes.aColor.needsUpdate=!0,vr.attributes.aAlpha.needsUpdate=!0}}let Wt={i:[],x:[],y:[],w:[],h:[],p:[],o:[],ok:[],ord:[],keep:[]},Qu=new L,MM=["idp","leg","keys","ctl","insp","gen"],Ii={n:0,x0:new Float32Array(8),y0:new Float32Array(8),x1:new Float32Array(8),y1:new Float32Array(8),at:-99};function EM(){Ii.n=0;let o=d("hud");if(!o||o.style.display==="none")return;let u=o.classList.contains("mindon");for(let p of MM){let v=d(p);if(!v||!v.offsetWidth||v.style.display==="none"||u&&p!=="gen")continue;let b=Ii.n++;Ii.x0[b]=v.offsetLeft-6,Ii.y0[b]=v.offsetTop-6,Ii.x1[b]=v.offsetLeft+v.offsetWidth+6,Ii.y1[b]=v.offsetTop+v.offsetHeight+6}}function SM(o,u,p,v){for(let b=0;b<Ii.n;b++)if(o+p>Ii.x0[b]&&o-p<Ii.x1[b]&&u+v>Ii.y0[b]&&u-v<Ii.y1[b])return!0;return!1}function TM(){if(!is||!is.length)return;(gs-Ii.at>12||gs<Ii.at)&&(EM(),Ii.at=gs);let o=Ue.position,u=t(),p=n(),v=p*.5/Math.tan(Ue.fov*Math.PI/360),b=Ue.matrixWorld.elements,E=b[4],w=b[5],T=b[6],P=0;for(let D=0;D<is.length;D++){let R=is[D];R.vis===void 0&&(R.vis=1);let F=R.node?ir.set(G[R.idx*3],G[R.idx*3+1],G[R.idx*3+2]):ir.copy(R.get()),z=o.distanceTo(F),Y,U;if(R.node){let ae=Fe[R.idx];Y=g((R.far-z)/R.far,0,1)*(ft[R.idx]<.05?0:ft[R.idx]>.5?1:.12),Y*=R.idx===lt?1.4:ae.inb>12?1:.72,At&&ft[R.idx]>.5&&(Y=Math.max(Y,.96)),U=ae.inb|0,R.idx===lt?U+=4e5:R.idx===ze?U+=2e5:R.idx===Mn&&(U+=1e5)}else{let ae=R.cat.vis===void 0?R.cat.on?1:0:R.cat.vis;Y=g((R.far-z)/(R.far*.55),0,1)*(.12+ae*.83)*(ae<.05?0:1),z<130&&(Y*=g(z/130,0,1)),U=5e5+(R.cat.tier===0?4e5:0)+(R.cat.n|0)}if(Y=g(Y,0,1),Y<=.012){R.sprite.visible=!1;continue}let ee=g(z*.0016,.55,5.2),ue=(R.node?12+Math.min(7,Fe[R.idx].inb*.12):R.cat.tier===0?22:17)*ee,de=R.sprite.material.map.image,H=de.width/de.height,J=ue*v/z,Te=((R.node?ye[R.idx]:R.cat.sR||R.cat.R||6)*v/z*1.3+J*.62+5)*z/v,ve=F.x+E*Te,re=F.y+w*Te,Se=F.z+T*Te;if(Qu.set(ve,re,Se).project(Ue),Qu.z>1){R.sprite.visible=!1;continue}let Ae=(Qu.x*.5+.5)*u,He=(-Qu.y*.5+.5)*p,Ke=J*H*.5,Ve=J*.5;if(Ae+Ke<0||Ae-Ke>u||He+Ve<0||He-Ve>p){R.sprite.visible=!1;continue}R.sprite.position.set(ve,re,Se),R.sprite.scale.set(ue*H,ue,1),Wt.i[P]=D,Wt.x[P]=Ae,Wt.y[P]=He,Wt.w[P]=Ke,Wt.h[P]=Ve,Wt.p[P]=U,Wt.o[P]=Y,Wt.ord[P]=P,P++}Wt.ord.length=P,Wt.ord.sort((D,R)=>Wt.p[R]-Wt.p[D]);let I=0;for(let D=0;D<P;D++){let R=Wt.ord[D],F=Wt.p[R]>=4e5&&Wt.p[R]<5e5||!SM(Wt.x[R],Wt.y[R],Wt.w[R],Wt.h[R]);for(let z=0;z<I;z++){let Y=Wt.keep[z];if(Math.abs(Wt.x[R]-Wt.x[Y])<(Wt.w[R]+Wt.w[Y])*.96&&Math.abs(Wt.y[R]-Wt.y[Y])<(Wt.h[R]+Wt.h[Y])*1.15){F=!1;break}}F&&(Wt.keep[I++]=R),Wt.ok[R]=F}for(let D=0;D<P;D++){let R=is[Wt.i[D]];R.vis+=((Wt.ok[D]?1:0)-R.vis)*.16;let F=Wt.o[D]*R.vis;R.sprite.material.opacity=F,R.sprite.visible=F>.012}}let AM=16.7;function ra(o,u,p){let v=d(o);v.textContent=u<.1?"<0.1":u.toFixed(u<10?1:0),v.parentElement.classList.toggle("hot",u>AM*p)}function RM(o){if(gs%6)return;d("s-fps").textContent=qc.toFixed(0),on.on&&(ra("p-sim",on.sim,.35),ra("p-pick",on.pick,.12),ra("p-inst",on.inst,.2),ra("p-link",on.link,.25),ra("p-trlms",on.trl,.15),ra("p-spr",on.spr,.15),ra("p-draw",on.draw,.3),ra("p-tot",on.tot,.9),d("p-lv").textContent=on.linkCap?on.linkLive+" / "+on.linkCap:"\u2014",d("p-cull").textContent=Un?on.linkCull+" / "+Un:"\u2014",d("p-trl").textContent=on.trails+" / "+Iu,d("p-dc").textContent=Vt.info.render.calls),d("s-dist").textContent=he.dist.toFixed(0)+" U";{let p=n()*.5/Math.tan(Ue.fov*Math.PI/360),v=he.dist/p;d("s-scale").textContent=Q?(v>=10?v.toFixed(0):v>=1?v.toFixed(1):v.toFixed(2))+" U/PX":"\u2014";let b=d("sbar");if(b)if(!Q||v<=0)b.style.display="none";else{let E=v*130,w=Math.pow(10,Math.floor(Math.log10(E))),T=E/w,P=(T<1.5?1:T<3.5?2:T<7.5?5:10)*w;b.style.display="block",b.firstElementChild.style.width=(P/v).toFixed(1)+"px",d("sbar-t").textContent=(P>=1e3?P/1e3+"k":P)+" U"}}lt>=0&&!(gs&7)&&mv(),d("hud").classList.toggle("idle",performance.now()-gv>9e3&&!Gu&&!Re.on&&!At&&!oa);let u=d("tgt");Mn>=0&&Mn<Q?(ir.set(G[Mn*3],G[Mn*3+1],G[Mn*3+2]).project(Ue),ir.z<1?(u.style.display="block",u.style.left=(ir.x*.5+.5)*t()+"px",u.style.top=(-ir.y*.5+.5)*n()+"px",u.textContent=Fe[Mn].n):u.style.display="none"):u.style.display="none",ci&&performance.now()>ci&&(d("toast").classList.remove("on"),ci=0)}let jn={host:!0,running:!1,raf:0,lost:!1},on={on:!1,sim:0,pick:0,inst:0,link:0,trl:0,spr:0,draw:0,tot:0,linkLive:0,linkCap:0,linkCull:0,trails:0,t0:0};function sa(o,u){on[o]=on[o]*.9+u*.1}function aa(){return on.on?performance.now():0}function LM(){return jn.host&&!document.hidden&&!jn.lost}function ed(){LM()?iy():ny()}function ny(){jn.running=!1,jn.raf&&(cancelAnimationFrame(jn.raf),jn.raf=0),Pe.ctx&&Pe.ctx.state==="running"&&Pe.ctx.suspend().catch(()=>{})}function iy(){jn.running=!0,hm=performance.now(),jn.raf&&cancelAnimationFrame(jn.raf),jn.raf=requestAnimationFrame(ry),Pe.on&&Pe.ctx&&Pe.ctx.state==="suspended"&&Pe.ctx.resume().catch(()=>{})}h("visibilitychange",ed),Br.addEventListener("webglcontextlost",()=>{jn.lost=!0,ed(),bt(A("gl.lost"),8e3)},!1),Br.addEventListener("webglcontextrestored",()=>{jn.lost=!1,Ka(),ed(),bt(A("gl.restored"))},!1);function ry(o){jn.raf=requestAnimationFrame(ry);let u=Math.min(64,o-hm);hm=o;let p=u/1e3;if(qc=qc*.92+1e3/Math.max(1,u)*.08,j1(o),gs++,!$t){yp();return}W.frs>=.5&&Date.now()-No>o1&&kg();let v=aa();h_(p),d_(),u_(),m_(p),p_(p),$1(p),l1(p),$b(p),fm(u),At||y_(p),T_(p),fM(p),oM(p);let b=aa();Gc&&!Mr&&(Mn=Cp(Ur.x,Ur.y,Mn));let E=aa();xM(p),gM(),mM(),yM();let w=aa();wM();let T=aa();bM();let P=aa();_M(p),TM();let I=aa();k_();let D=o*.001;for(let U=0;U<Or.length;U++)Or[U].uniforms&&(Or[U].uniforms.uTime.value=D);if(Jg.value=W.det,lt>=0&&lt<Q&&Fr?(Fr.visible=!0,Fr.position.set(G[lt*3],G[lt*3+1],G[lt*3+2]),Pu.scale.setScalar(ye[lt]*2.9),Pu.quaternion.copy(Ue.quaternion)):Fr&&(Fr.visible=!1),ze>=0&&ze<Q&&Ci){let U=Re.on?g(xi[ze],0,1):1;if(Ci.visible=U>.03,Ci.visible){Ci.position.set(G[ze*3],G[ze*3+1],G[ze*3+2]);let ee=.5+.5*Math.sin(an*.0031),oe=ye[ze]*(3.6+ee*.5);gc.scale.setScalar(oe),gc.quaternion.copy(Ue.quaternion),gc.material.opacity=(.45+ee*.42)*U,zo.scale.setScalar(oe*1.3),zo.quaternion.copy(Ue.quaternion),zo.rotateZ(an*.0012),zo.material.opacity=(.28+(1-ee)*.36)*U;let ue=Ue.position.distanceTo(Ci.position),de=g(ue*.011,ye[ze]*.5,ye[ze]*2.6);Yv.set(0,1,0).applyQuaternion(Ue.quaternion),Ua.position.copy(Yv).multiplyScalar(oe*1.9+de*1.6),Ua.scale.setScalar(de),Ua.quaternion.copy(Ue.quaternion),Ua.rotateZ(Math.PI*.25),Ua.material.opacity=(.45+ee*.4)*U}}else Ci&&(Ci.visible=!1);Mn>=0&&Mn<Q&&Mn!==lt&&yr?(yr.visible=!0,yr.position.set(G[Mn*3],G[Mn*3+1],G[Mn*3+2]),yr.scale.setScalar(ye[Mn]*2.2),yr.quaternion.copy(Ue.quaternion)):yr&&(yr.visible=!1),bp.position.copy(Ue.position).normalize();let R=n()*.5/Math.tan(Ue.fov*Math.PI/360);if(Qn&&Q&&!At){let U=Ue.position.length(),ee=(Re.on?g(xi[k],0,1):1)*(At?0:1),oe=g((ye[k]||17)*9+U*.05,90,900)*ee;zt&&Qn.position.copy(zt.position),Qn.visible=ee>.02;let ue=g(U/((ye[k]||17)*40),0,1),de=zt?Ue.position.distanceTo(zt.position):U,H=Dt.fog?Dt.fog.density*de:0,J=Math.exp(-H*H),Ee=J>.3?J:.3,Te=J>.2?J:.2,ve=J>.08?J:.08;if(Qn.material.opacity=.85*ee*(.38+.62*ue)*Ee,Qn.scale.setScalar(oe),di){di.visible=ee>.02,di.position.copy(Qn.position),di.material.rotation=an*21e-6;let re=1+Math.sin(an*43e-5+.8)*.075;di.scale.setScalar(oe*1.62*re),di.material.opacity=(.34+.16*Math.sin(an*67e-5))*ee*Te}if(qn){let re=(ye[k]||17)*R/Math.max(1,U),Se=g((90-re)/80,0,1),Ae=W.glare*Se*ee;if(qn.visible=Ae>.004,qn.visible){qn.position.copy(Qn.position);let He=g(U*.52,oe*2.2,U*.88);qn.scale.setScalar(He),qn.material.opacity=Math.min(.95,Ae*.78)*ve;let Ke=g((W.glare-.5)/1.9,0,1)*Se*ee;if(Ke>.008){let Ve=Y1();Ve.visible=!0,Ve.position.copy(Qn.position),Ve.scale.setScalar(He*1.45),Ve.material.opacity=Math.min(.95,Ke*1.24)}else In&&(In.visible=!1)}else In&&(In.visible=!1)}}let F=g(Qi*Qi,.02,3);if(Xa&&(Xa.rotation.y=an*75e-7,Xa.scale.setScalar(Qi),Xa.material.uniforms.uBright.value=W.str*F),Vi){Vi.rotation.y=-an*42e-7,Vi.scale.setScalar(Qi),Vi.material.uniforms.uBright.value=W.str*F,Vi.material.uniforms.uTime.value=an*.001;let U=Vi.material.uniforms;zt&&Q?(U.uSunV.value.copy(zt.position).applyMatrix4(Ue.matrixWorldInverse),U.uSunR.value=Math.max(400,(ye[k]||17)*40),zt.userData.surfMat&&U.uSunCol.value.copy(zt.userData.surfMat.uniforms.uCore.value)):U.uSunV.value.set(0,0,-1e9)}if(as&&(as.material.uniforms.uBright.value=W.str),qa){let U=qa.material.uniforms;U.uCam.value.copy(Ue.position),U.uTime.value=an*.001,U.uBright.value=W.str*.55}Tc&&(Tc.rotation.y=an*11e-7),Ac&&(Ac.rotation.y=an*11e-7),Rc&&(Rc.rotation.y=an*8e-7);{let U=Ue.position;Tc&&Tc.position.copy(U),Ac&&Ac.position.copy(U),Rc&&Rc.position.copy(U),Vi&&Vi.position.copy(U),ls&&ls.position.copy(U),as&&as.position.copy(U)}RM(o),hM(p);let z=aa(),Y=yp();if(on.on){let U=performance.now();sa("sim",b-v),sa("pick",E-b),sa("inst",w-E),sa("link",T-w),sa("trl",P-T),sa("spr",I-P),sa("draw",U-z),sa("tot",U-v)}}function vm(){let o=W.str;Wo.forEach(u=>{u.uniforms.uBright.value=o,u.uniforms.uTwinkle.value=(u.userData.twinkle||0)*g(o,0,1.2)})}function sy(){d("ctl").classList.toggle("adv",!!W.adv),d("advtog").textContent=(W.adv?"\u25BE ":"\u25B8 ")+"ADVANCED"}let ay=[["leg","legFold","legfold"],["keys","keysFold","keysfold"]];function oy(){ay.forEach(([o,u,p])=>{let v=!!W[u];d(o).classList.toggle("fold",v),d(p).textContent=v?"[ + ]":"[ \u2212 ]"})}ay.forEach(([o,u])=>{d(o).firstElementChild.onclick=()=>{W[u]=!W[u],oy(),un(),ki()}});let $a=new Map;function CM(o){return o.get?o.get():Math.round(W[o.k]*o.sc)}function PM(o,u){if(o.set){o.set(u);return}W[o.k]=g(u,o.min,o.max)/o.sc}function DM(o){return o.get?o.get():W[o.k]}function Yc(o){return W.pin.indexOf(o)>=0}function IM(){let o=document.createElement("div");return o.id="ctltabs",Me.forEach(([u])=>{let p=document.createElement("u");p.dataset.g=u,p.onclick=()=>{W.tab=u,bi&&(bi.value=""),Er="",cl(),Vr(),un(),ki()},o.appendChild(p),ym.set(u,p)}),bi=document.createElement("input"),bi.id="ctlfind",bi.type="text",bi.spellcheck=!1,bi.oninput=()=>{Er=bi.value.trim().toLowerCase(),cl(),Vr(),ki()},o.appendChild(bi),o}let ol=null;function ly(o){ol=o||null,cy()}function cy(){if(!ll)return;let o=ol?"kd."+ol.k:"",u=!!(o&&_[o]);ll.classList.toggle("desc",u),ll.textContent=u?A(o):Er&&!Qe.some(hy)?A("ctl.none"):A("pin.hint")}function kM(){Qe.forEach(o=>{let u=document.createElement("div");u.className="sl";let p=document.createElement("b"),v=document.createElement("span");v.className="nm";let b=document.createElement("u");b.className="pin";let E=document.createElement("span"),w=document.createElement("i");v.append(b,E),p.append(v,w);let T=document.createElement("input");T.type="range",T.min=o.min,T.max=o.max,T.step=o.step||1,u.append(p,T),b.onclick=()=>FM(o.k),u.addEventListener("pointerenter",()=>ly(o)),u.addEventListener("pointerleave",()=>{ol===o&&ly(null)}),T.addEventListener("input",P=>{PM(o,+P.target.value),o.apply&&o.apply(),Vr(),un()}),$a.set(o.k,{wrap:u,lab:E,val:w,inp:T,pin:b})}),ll=document.createElement("div"),ll.id="ctlhint",d("ctladv").parentNode.insertBefore(IM(),d("ctladv")),cl()}let ym=new Map,ll=null,bi=null,Er="";function hy(o){if(!Er)return!1;let u=o.label.toLowerCase(),p=(o.i18n?A(o.i18n):"").toLowerCase();return u.indexOf(Er)>=0||!!p&&p.indexOf(Er)>=0}function cl(){let o=d("ctlgrid"),u=d("ctladv");Qe.forEach(b=>{let E=$a.get(b.k),w=Yc(b.k);E.wrap.classList.toggle("pinned",w),w&&o.appendChild(E.wrap)});let p=Me.some(([b])=>b===W.tab)?W.tab:Me[0][0],v=Qe.filter(b=>!Yc(b.k)&&(Er?hy(b):b.g===p));v.forEach(b=>u.appendChild($a.get(b.k).wrap)),Qe.forEach(b=>{let E=$a.get(b.k);!Yc(b.k)&&v.indexOf(b)<0&&E.wrap.parentNode===u&&(u.removeChild(E.wrap),ol===b&&(ol=null))}),Me.forEach(([b])=>{let E=ym.get(b);E&&(E.classList.toggle("on",!Er&&b===p),E.classList.toggle("empty",!Qe.some(w=>w.g===b&&!Yc(w.k))))}),u.classList.toggle("found",!!Er),u.appendChild(ll)}function FM(o){let u=W.pin.indexOf(o);u>=0?W.pin.splice(u,1):W.pin.push(o),u>=0&&(W.adv=!0),cl(),Vr(),un(),ki(),bt(A(u>=0?"pin.off":"pin.on",{n:(ot[o]||{}).label||o}))}let xm=0;function uy(){xm||(xm=requestAnimationFrame(()=>{xm=0;let o=0,u=(v,b)=>{v.classList.remove("scan");let E=v.scrollWidth-v.clientWidth;b&&E>2?(v.style.setProperty("--nmx",-E-3+"px"),v.style.setProperty("--nmd",(o%7*1.8).toFixed(1)+"s"),v.classList.add("scan")):v.style.removeProperty("--nmx"),o++};$a.forEach(v=>{v.lab&&v.lab.parentNode&&u(v.lab.parentNode,!0)});let p=d("ctl");p&&p.querySelectorAll(".mini").forEach(v=>{if(!v.firstElementChild&&v.firstChild){let E=document.createElement("span");for(;v.firstChild;)E.appendChild(v.firstChild);v.appendChild(E)}let b=v.firstElementChild;u(v,!!b&&b.tagName==="SPAN"&&v.children.length===1)})}))}function Vr(){sy(),oy(),Qe.forEach(u=>{let p=$a.get(u.k);if(!p)return;let v=Yc(u.k);p.inp.value=CM(u),p.lab.textContent=u.i18n?A(u.i18n):u.label,p.val.textContent=u.fmt(DM(u)),p.pin.textContent=v?"\u25C6":"\u25C7",p.pin.title=A(v?"pin.off":"pin.on",{n:u.label})}),Me.forEach(([u,p])=>{let v=ym.get(u);v&&(v.textContent=A(p))}),bi&&(bi.placeholder=A("ctl.find")),cy(),vm(),Ep();let o=Ne();s.querySelectorAll("#qsel u").forEach(u=>u.classList.toggle("on",u.dataset.q===o))}s.querySelectorAll("#qsel u").forEach(o=>{o.onclick=()=>We(o.dataset.q)}),d("r-broken").onclick=()=>{!Q||!(xe.meta.broken|0)||(us=!us,d("r-broken").classList.toggle("on",us),bt(A(us?"broken.on":"broken.off")))},d("s-fps").onclick=()=>{on.on=!on.on,d("perf").classList.toggle("on",on.on),on.on&&(gs=0),ki()},d("instog").onclick=()=>{!d("idp").classList.toggle("inst")&&on.on&&d("s-fps").onclick(),ki()},d("advtog").onclick=()=>{W.adv=d("ctl").classList.toggle("adv"),sy(),un(),ki()},d("b-rst").onclick=()=>{Object.assign(W,Ht),W.pin=dt.slice();let o=new Set;Qe.forEach(u=>{if(!(!u.apply||o.has(u.apply))){o.add(u.apply);try{u.apply()}catch(p){console.error("vault-orrery: reset "+u.k,p)}}}),Er="",bi&&(bi.value=""),W.deckAt=null,cl(),Vr(),s1(),un(),bt("CONTROLS RESET"),ki()};let wm=!1;d("ctltl").onclick=()=>{wm=!0;let o=d("ctl").classList.toggle("fold");d("ctlfold").textContent=o?"[ + ]":"[ \u2212 ]",uy()};let hl=240,NM=316,bm=null,jc=null;function dy(o,u,p){W.deckAt={x:Math.round(o),y:Math.round(u),w:Math.round(g(p,hl,Math.max(hl,t()-24)))},ki()}let HM=[["nw",-1,-1],["ne",1,-1],["sw",-1,1],["se",1,1]];{let o=d("ctl"),u=d("ctltl"),p=()=>({x:o.offsetLeft-(W.deckAt?0:o.offsetWidth/2),y:o.offsetTop,w:o.offsetWidth}),v=0,b=0,E=0,w=null,T=0,P=1,I=1;HM.forEach(([R,F,z])=>{let Y=document.createElement("div");Y.className="ctlgrip "+R,Y.title="DRAG TO RESIZE",Y.addEventListener("pointerdown",U=>{P=F,I=z,D(U,2)}),o.appendChild(Y)}),bm=R=>{if(!v)return;let F=R.clientX-b,z=R.clientY-E;if(v===1){T=Math.max(T,Math.abs(F)+Math.abs(z)),dy(w.x+F,w.y+z,w.w);return}let Y=w.w+F*P,U=g(Y,hl,Math.max(hl,t()-24)),ee=P<0?w.x+(w.w-U):w.x,oe=I<0?w.y+z:w.y;dy(ee,oe,U)},jc=()=>{v&&(v=0,s.classList.remove("dragdeck"),un())};let D=(R,F)=>{R.button===0&&(v=F,F===1&&(T=0),w=p(),b=R.clientX,E=R.clientY,s.classList.add("dragdeck"),R.preventDefault())};u.addEventListener("pointerdown",R=>{R.target!==d("ctlfold")&&D(R,1)}),u.onclick=()=>{if(T>4){T=0;return}wm=!0;let R=o.classList.toggle("fold");d("ctlfold").textContent=R?"[ + ]":"[ \u2212 ]"},u.addEventListener("dblclick",()=>{W.deckAt=null,un(),ki(),bt(A("deck.reset"))})}l("pointermove",o=>{bm&&bm(o)}),l("pointerup",()=>{jc&&jc()}),l("pointercancel",()=>{jc&&jc()});function ki(){let o=d("idp"),u=d("leg"),p=d("keys"),v=d("insp"),b=t(),E=n(),w=o.offsetTop+o.offsetHeight+12;u.style.top=w+"px",p.style.display="";let T=E-w-34-(p.offsetHeight||130),P=u.classList.contains("fold")?30:74;T<P&&(p.style.display="none",T=E-w-34),u.style.display=T<P?"none":"",u.style.maxHeight=Math.max(P,T)+"px";let I=o.offsetLeft+o.offsetWidth+14,D=d("ctl"),R=Math.max(180,b-32-I),F;W.deckAt?(F=g(W.deckAt.w,hl,Math.max(hl,b-24)),D.style.width=F+"px",D.style.left=Math.round(g(W.deckAt.x,8,Math.max(8,b-F-8)))+"px",D.style.top=Math.round(g(W.deckAt.y,8,Math.max(8,E-46)))+"px",D.style.transform="none"):(F=g(NM,180,Math.max(180,b-I-32)),D.style.width=F+"px",D.style.left=Math.round(Math.max(8,b-F-16))+"px",D.style.top="16px",D.style.transform="none"),D.classList.toggle("tight",F<430);let z=D.querySelector(".bd");if(z){let ee=W.deckAt?g(W.deckAt.y,8,Math.max(8,E-46)):16;z.style.maxHeight=Math.max(90,Math.min(E*.62,E-ee-46))+"px"}wm||(D.classList.toggle("fold",E<240),d("ctlfold").textContent=D.classList.contains("fold")?"[ + ]":"[ \u2212 ]"),uy(),v.style.display=b<620?"none":"",v.style.maxHeight=Math.max(96,Math.min(E*.64,E-(16+D.offsetHeight)-26))+"px";let Y=Math.max(120,b-16-(v.offsetWidth||312)-14-I),U=d("gen");U.style.width=Math.min(660,Y)+"px",U.style.left=Math.round(I+Y/2)+"px",d("genmarks").style.display=Y<380?"none":"",xv()}let Zc=/\.(md|markdown|txt)$/i,BM=/(^|\/)(\.obsidian|\.smart-env|\.claude|\.git|\.trash|node_modules|assets)(\/|$)/i,fy=/(\d{4})-(\d{2})-(\d{2})/,td=[],nd=[];try{let o=JSON.parse(m.get("orrery2.ignore")||"[]");Array.isArray(o)&&(td=o.filter(u=>typeof u=="string"))}catch(o){}function py(){nd=[],td.forEach(o=>{let u=String(o).trim();if(u)if(u.length>1&&u[0]==="/"&&u[u.length-1]==="/")try{nd.push(new RegExp(u.slice(1,-1),"i"))}catch(p){console.warn("vault-orrery: bad ignore pattern",u,p)}else{let p=u.replace(/^\/+/,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");p&&nd.push(new RegExp("^"+p,"i"))}})}py();function OM(o){td=Array.isArray(o)?o.filter(u=>typeof u=="string"):[],py();try{m.set("orrery2.ignore",JSON.stringify(td))}catch(u){}}let _m=o=>BM.test("/"+o),Mm=o=>nd.some(u=>u.test(String(o).replace(/^\/+/,"")));function Em(o){return String(o).trim().replace(/^[\["']+|[\]"']+$/g,"").trim()}function zM(o){o.charCodeAt(0)===65279&&(o=o.slice(1));let u=/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/.exec(o);if(!u)return{fm:{},body:o};let p={},v=null;return u[1].split(/\r?\n/).forEach(b=>{let E=/^[ \t]*-[ \t]+(.*)$/.exec(b);if(E){v&&(Array.isArray(p[v])||(p[v]=[]),p[v].push(Em(E[1])));return}let w=/^([^:#][^:]*):[ \t]*(.*)$/.exec(b);if(!w)return;v=w[1].trim().toLowerCase();let T=w[2].trim();if(!T){p[v]=[];return}p[v]=T[0]==="["?T.slice(1).replace(/\]\s*$/,"").split(",").map(Em).filter(Boolean):Em(T)}),{fm:p,body:o.slice(u[0].length)}}let UM=new Set(["tags","\uD0DC\uADF8","tag","keywords","date","created","\uB0A0\uC9DC","datetime","sources","\uCD9C\uCC98","source","aliases","alias","cssclasses","cssclass","position"]);function GM(o){if(!o||typeof o!="object")return null;let u=[];for(let p in o){if(u.length>=16)break;let v=String(p).trim();if(!v||UM.has(v.toLowerCase()))continue;let b=o[p];if(b==null||b==="")continue;let E;if(Array.isArray(b)){let w=b.map(T=>String(T).trim()).filter(Boolean).slice(0,8);if(!w.length)continue;E=w.join(", ")}else{if(typeof b=="object")continue;E=String(b).trim()}E&&u.push([v,E.length>90?E.slice(0,89)+"\u2026":E])}return u.length?u:null}function VM(o){let u=o.tags||o.\uD0DC\uADF8||o.tag||o.keywords||[];return typeof u=="string"&&(u=u.split(/[,\s]+/)),(Array.isArray(u)?u:[]).map(p=>String(p).replace(/^#/,"").trim()).filter(Boolean).slice(0,24)}function WM(o,u){let p=[],v=new Set;return[].concat(o||[],Array.isArray(u)?u:[]).forEach(b=>{let E=String(b).replace(/^#/,"").trim();if(!E)return;let w=E.toLowerCase();v.has(w)||(v.add(w),p.push(E))}),p.slice(0,24)}function qM(o,u){let p=o.date||o.created||o.\uB0A0\uC9DC||o.datetime||"";Array.isArray(p)&&(p=p[0]||"");let v=fy.exec(String(p))||fy.exec(u.split("/").pop());return v?v[0]:""}function XM(o){return o.replace(/```[\s\S]*?```/g," ").replace(/^\s*>\s?/gm,"").replace(/^#{1,6}\s*/gm,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[\[([^\]|#^]+)(?:[#^][^\]|]*)?(?:\|([^\]]*))?\]\]/g,(u,p,v)=>(v||p).trim()).replace(/\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").replace(/^\s*[-*+]\s+/gm,"").replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim().slice(0,620)}function YM(o,u){let p=o.map(ae=>ae.path.replace(/\\/g,"/").split("/")),v="";if(p.length&&p[0].length>1){let ae=p[0][0];p.every(me=>me.length>1&&me[0]===ae)&&(v=ae)}let b=o.map((ae,me)=>{let Xe=p[me].slice(v?1:0),Ye=Xe.join("/"),{fm:$e,body:vt}=zM(ae.text),ct=ae.meta&&typeof ae.meta=="object"?ae.meta:null;return{rel:Ye,fp:ae.path.replace(/\\/g,"/"),dir:Xe.slice(0,-1).join("/"),name:Xe[Xe.length-1].replace(Zc,""),fm:$e,body:vt,hm:ct,t:WM(VM($e),ct&&ct.tags),pr:GM(ct&&ct.props||$e),d:qM($e,Ye),mt:ct&&+ct.mtime>0?+ct.mtime:0,ct:ct&&+ct.ctime>0?+ct.ctime:0,w:(vt.match(/\S+/g)||[]).length,sz:ae.text.length,x:XM(vt)}}),E=b.length,w=new Map,T=new Map;b.forEach((ae,me)=>{let Xe=ae.name.toLowerCase();w.has(Xe)||w.set(Xe,me),T.set(ae.rel.toLowerCase().replace(Zc,""),me)});let P=ae=>{let me=String(ae).split("#")[0].split("|")[0].trim().replace(/^\[+|\]+$/g,"").replace(/^[.\/]+/,"").replace(Zc,"").toLowerCase();if(!me)return-1;if(T.has(me))return T.get(me);let Xe=me.split("/").pop();return w.has(Xe)?w.get(Xe):-1},I=/\[\[([^\]\[|#^]+)(?:[#^][^\]|]*)?(?:\|[^\]]*)?\]\]/g,D=/\]\(([^)\s]+\.(?:md|markdown))\)/gi,R=0,F=new Int32Array(E),z=new Array(E).fill(null),Y=new Int32Array(E),U=new Map;b.forEach((ae,me)=>{U.set(ae.fp.toLowerCase(),me),U.set(ae.rel.toLowerCase(),me)});let ee=ae=>{let me=String(ae).replace(/\\/g,"/").replace(/^\.?\//,"").toLowerCase();return U.has(me)?U.get(me):P(me)},oe=b.map((ae,me)=>{if(ae.hm&&ae.hm.links){let $e=new Set;Object.keys(ae.hm.links).forEach(ct=>{let Ot=ee(ct);Ot>=0&&($e.add(Ot),Y[Ot]+=Math.max(1,ae.hm.links[ct]|0))});let vt=Math.max(0,ae.hm.broken|0);return R+=vt,F[me]=vt,Array.isArray(ae.hm.brokenNames)&&ae.hm.brokenNames.length&&(z[me]=ae.hm.brokenNames.map(String)),$e}let Xe=new Set,Ye;for(I.lastIndex=0;Ye=I.exec(ae.body);){let $e=P(Ye[1]);if($e>=0)Xe.add($e),Y[$e]++;else{R++,F[me]++;let vt=Ye[1].trim();z[me]||(z[me]=[]),z[me].length<24&&z[me].indexOf(vt)<0&&z[me].push(vt)}}for(D.lastIndex=0;Ye=D.exec(ae.body);){let $e=Ye[1];try{$e=decodeURIComponent($e)}catch(ct){}let vt=P($e);vt>=0&&(Xe.add(vt),Y[vt]++)}return Xe}),ue=b.map(ae=>{let me=ae.fm.sources||ae.fm.\uCD9C\uCC98||ae.fm.source||[],Xe=Array.isArray(me)?me:me?[me]:[],Ye=new Set;return Xe.forEach($e=>{let vt=P($e);vt>=0&&Ye.add(vt)}),Ye}),de=b.some(ae=>/^(wiki|raw)\//i.test(ae.rel)),H=new Uint8Array(E);oe.forEach((ae,me)=>{ae.size&&(H[me]=1),ae.forEach(Xe=>H[Xe]=1)});let J=b.map((ae,me)=>de?/^raw\//i.test(ae.rel)?"raw":/^wiki\//i.test(ae.rel)||ae.dir?"wiki":"root":H[me]?"wiki":"raw"),Ee=new Map,Te=ae=>ae.replace(/^[\s_~.\-+=!#@]+/,"").replace(/^(?:0\d{0,2}|\d{1,2}\s*[-_.)])[\s_\-.]*(?=\S)/,"")||ae,ve=b.map((ae,me)=>{let Xe,Ye,$e,vt,ct=null,Ot=null;if(J[me]==="raw"){let mt=ae.d?+ae.d.slice(0,4):0;Xe="raw:"+mt,Ye="raw",ct=mt?"cat.rawYear":"cat.rawUndated",Ot=mt?{y:mt}:null,$e=A(ct,Ot),vt=mt?"ARCHIVE-"+mt:"ARCHIVE-UNDATED"}else{let mt=ae.dir.replace(/^wiki(\/|$)/i,"");Xe="wiki:"+mt,Ye="wiki";let en=mt.split("/").filter(Boolean).pop(),vn=en?Te(en):"";en?$e=vn:(ct="cat.hub",$e=A(ct));let yn=en?/^[\x20-\x7E]+$/.test(vn)?vn.toUpperCase():vn:"HELM";vt=yn.length>20?yn.slice(0,19)+"\u2026":yn}return Ee.has(Xe)||Ee.set(Xe,{key:Xe,dom:Ye,code:vt,label:$e,lkey:ct,larg:Ot,n:0}),Ee.get(Xe).n++,Xe}),re=[...Ee.values()];re.sort((ae,me)=>ae.dom===me.dom?me.n-ae.n:ae.dom==="wiki"?-1:1);let Se=[],Ae=new Set,He=(ae,me,Xe)=>{if(ae===me||ae<0||me<0)return!1;let Ye=ae+":"+me+":"+Xe;return Ae.has(Ye)?!1:(Ae.add(Ye),Se.push([ae,me,Xe]),!0)};b.forEach((ae,me)=>{if(J[me]==="raw")return;let Xe=new Set(ue[me]);oe[me].forEach(Ye=>{J[Ye]==="raw"&&Xe.add(Ye)}),Xe.forEach(Ye=>{J[Ye]==="raw"&&He(Ye,me,1)})}),oe.forEach((ae,me)=>ae.forEach(Xe=>{Ae.has(Xe+":"+me+":1")||He(me,Xe,0)}));let Ke=b.map((ae,me)=>({p:ae.rel,fp:ae.fp,n:ae.name,k:J[me],f:ae.rel.split("/")[0]||"",d:ae.d,y:ae.d?+ae.d.slice(0,4):0,t:ae.t,mt:ae.mt,ct:ae.ct,w:ae.w,sz:ae.sz,x:ae.x,inb:Y[me],c:ve[me],pr:ae.pr,bk:F[me],bn:z[me]||null})),Ve=[...new Set(Ke.map(ae=>ae.y).filter(Boolean))].sort();return{meta:{vault:u||v||"DROPPED VAULT",files:Ke.length,edges:Se.length,wiki:Ke.filter(ae=>ae.k!=="raw").length,raw:Ke.filter(ae=>ae.k==="raw").length,broken:R,years:Ve},cats:re,nodes:Ke,edges:Se}}let id=()=>new Promise(o=>setTimeout(o,0));function rd(o,u){d("load").classList.toggle("on",!!o),u&&(d("loadmsg").textContent=u),o||(d("loadbar").firstElementChild.style.width="0%",d("loadsub").textContent="")}function Jc(o,u){d("loadbar").firstElementChild.style.width=Math.round(o*100)+"%",u!==void 0&&(d("loadsub").textContent=u)}function my(){return{sel:lt>=0?ne(lt):"",follow:he.follow>=0?ne(he.follow):"",tgt:he.tgtD.clone(),dist:he.distD,th:he.thD,ph:he.phD,roll:he.rollD}}function jM(o){if(!o)return;he.tgtD.copy(o.tgt),he.distD=o.dist,he.thD=o.th,he.phD=o.ph,he.rollD=o.roll,he.tgt.copy(o.tgt),he.dist=o.dist,he.th=o.th,he.ph=o.ph,he.roll=o.roll,he.thV=0,he.phV=0;let u=o.sel?Oe(o.sel):-1;u>=0&&fi(u,!0);let p=o.follow?Oe(o.follow):-1;he.follow=p,hs()}function ZM(){let o=new Map,u=new Map;try{if(Bi&&Fe){let p=Math.min(Q,Bi.length,Fe.length);for(let v=0;v<p;v++){let b=Fe[v];if(!b)continue;let E=b.fp||b.p;E&&o.set(E,Bi[v])}}Tt&&Tt.forEach(p=>{!p||p.key===void 0||(p.oMA!==void 0||p.rz!==void 0)&&u.set(p.key,{oMA:p.oMA,sx:p.sx,sy:p.sy,rz:p.rz})})}catch(p){return console.warn("vault-orrery: orbital phases not carried",p),null}return o.size||u.size?{ph:o,sys:u}:null}function JM(o){if(!o||!Bi||!Fe)return;let u=Math.min(Q,Bi.length,Fe.length);for(let p=0;p<u;p++){let v=Fe[p];if(!v)continue;let b=o.ph.get(v.fp||v.p);b!==void 0&&Number.isFinite(b)&&(Bi[p]=b)}Tt&&Tt.forEach(p=>{if(!p||p.key===void 0)return;let v=o.sys.get(p.key);v&&(Number.isFinite(v.oMA)&&(p.oMA=v.oMA),Number.isFinite(v.sx)&&(p.sx=v.sx),Number.isFinite(v.sy)&&(p.sy=v.sy),Number.isFinite(v.rz)&&(p.rz=v.rz))})}let Sm=null;function sd(o,u){Sm=o;let p=ZM();Ip(),Uc(),lM(),bv(),uv.clear(),nl(),na.length=0,kc=0,Wu(!1),lt=-1,Mn=-1,ta="",us=!1,Lc.clear(),wr=-1,Za=new Set,Qo=new Set,J1(),Bg(o),j=null,iv(),JM(p),dv(),Cc(),Ka(),Ku=0,u?jM(u):Lp(),ht(et)}let oa=!1;async function ad(o,u,p){if(oa)return;let v=!!(p&&p.quiet),b=Q,E=o.filter(oe=>Zc.test(oe.path)&&!_m(oe.path)),w=E.filter(oe=>!Mm(oe.path)),T=E.length-w.length;if(!w.length){v||bt(A(T?"excl.all":"load.nomd"));return}let P=W.maxNodes|0,I=w.length,D=P>0&&I>P?w.slice(0,P):w,R=I-D.length;oa=!0,v||(rd(!0,"READING VAULT"),Jc(0,R?A("cap.hit",{n:D.length,total:I}):A("load.notes",{n:D.length})));let F=[];for(let oe=0;oe<D.length;oe++){try{F.push({path:D[oe].path,text:await D[oe].file.text(),meta:D[oe].meta||null})}catch(ue){}oe%16===0&&(v||Jc(oe/D.length*.7,D[oe].path),await id())}v||Jc(.78,A("load.graph")),await id();let z=null;try{z=YM(F,u)}catch(oe){console.error(oe),bt(A("load.failed")),rd(!1),oa=!1;return}if(!z.nodes.length){bt(A("load.empty")),rd(!1),oa=!1;return}v||Jc(.9,A("load.orbit")),await id();let Y=v?my():null,U=v&&b?w_():null;try{sd(z,Y)}catch(oe){console.error(oe),bt(A("load.render")),sd(gt)}let ee=U?b_(U):0;if(!U&&!b&&__(),v||(Jc(1),await id(),rd(!1)),oa=!1,v){Q!==b&&!ee&&bt(A("sync.done",{n:Q}));return}bt(z.meta.vault+" \xB7 "+z.meta.files+" NOTES \xB7 "+z.meta.edges+" LINKS"),T&&setTimeout(()=>bt(A("excl.some",{n:T})),2600),R&&setTimeout(()=>bt(A("cap.hit",{n:D.length,total:I})),5200),nE()}d("b-load").onclick=()=>d("fpick").click(),d("hint-btn").onclick=()=>d("fpick").click(),d("fpick").addEventListener("change",o=>{let u=Array.from(o.target.files||[]);u.length&&ad(u.map(p=>({path:p.webkitRelativePath||p.name,file:p}))),o.target.value=""}),d("b-clear").onclick=()=>{sd(gt),bt(A("vault.empty"))};function gy(o,u,p){return new Promise(v=>{if(!o)return v();if(o.isFile){o.file(P=>{u.push({path:p+o.name,file:P}),v()},()=>v());return}if(!o.isDirectory)return v();let b=p+o.name+"/";if(_m(b)||Mm(b))return v();let E=o.createReader(),w=[],T=()=>E.readEntries(P=>{if(!P.length){Promise.all(w.map(I=>gy(I,u,b))).then(()=>v());return}w.push(...P),T()},()=>v());T()})}let Kc=0,vy=o=>{let u=o.dataTransfer&&o.dataTransfer.types;return u?u.indexOf?u.indexOf("Files")>=0:Array.prototype.indexOf.call(u,"Files")>=0:!1};l("dragenter",o=>{X||!vy(o)||(o.preventDefault(),++Kc===1&&!oa&&d("drop").classList.add("on"))}),l("dragover",o=>{X||!vy(o)||(o.preventDefault(),o.dataTransfer.dropEffect="copy")}),l("dragleave",o=>{X||!Kc||--Kc<=0&&(Kc=0,d("drop").classList.remove("on"))}),l("drop",async o=>{if(X)return;o.preventDefault(),Kc=0,d("drop").classList.remove("on");let u=Array.from(o.dataTransfer.items||[]).map(b=>b.webkitGetAsEntry&&b.webkitGetAsEntry()).filter(Boolean),p=[],v="";if(u.length){u.length===1&&u[0].isDirectory&&(v=u[0].name);for(let b of u)await gy(b,p,"")}else Array.from(o.dataTransfer.files||[]).forEach(b=>p.push({path:b.name,file:b}));ad(p,v)});function KM(){Vr(),Tt.forEach(o=>{o.el&&(o.el.querySelector("em").textContent=Zg(o))}),Cc(),Re.on&&ds(!0),At&&$.sel>=0&&(Hv(),Qp($.sel)),typeof Wr!="undefined"&&Wr&&yy()}function yy(){Wr&&(delete d("bpick").dataset.i18n,d("bpick").textContent=A("boot.staged",{name:Wr.name||A("boot.nofold"),n:Wr.list.length}))}let od=!1;try{od=m.get("orrery2.intro")==="1"}catch(o){}function xy(){Q&&d("intro").classList.add("on")}let $M=[["guide.s.move",[["DRAG \xB7 WHEEL","guide.look"],["RIGHT-DRAG","guide.pan"],["SHIFT-DRAG","guide.drag"],["R","guide.reset"]]],["guide.s.find",[["/ \xB7 CTRL-K","guide.search"],["O \xB7 CTRL-CLICK","guide.note",()=>ce()],["BROKEN","guide.broken"],["ROUTE FROM HERE","guide.route"]]],["guide.s.read",[["L","guide.layer"],["X","guide.grid"],["SPACE","guide.ripple"],["SKY","guide.sky"]]],["guide.s.mode",[["M \xB7 DBL-CLICK","guide.mind"],["G","guide.gen"],["P","guide.poster"]]],["guide.s.rest",[["QUALITY","guide.quality"],["U","guide.sound"],["H","guide.hud"],["?","guide.help"]]]];function QM(){d("guidebody").innerHTML=$M.map(([u,p])=>{let v=p.filter(b=>!b[2]||b[2]());return v.length?'<div class="gsec">'+M(A(u))+"</div>"+v.map(b=>'<div class="grow"><u>'+M(b[0])+"</u><b>"+M(A(b[1]))+"</b></div>").join(""):""}).join(""),d("guidefoot").innerHTML=M(A("guide.foot"))+"<u>"+M(A("intro.reopen"))+"</u>";let o=d("guidefoot").querySelector("u");o&&(o.onclick=()=>{cd(),xy()})}function ld(){QM(),d("guide").classList.add("on"),d("guidebody").scrollTop=0}function cd(){d("guide").classList.remove("on")}function eE(){return d("guide").classList.contains("on")}function $c(){if(d("intro").classList.contains("on")&&(d("intro").classList.remove("on"),!od)){od=!0;try{m.set("orrery2.intro","1")}catch(o){}}}function tE(){return d("intro").classList.contains("on")}function nE(){od||setTimeout(xy,900)}d("introgo").onclick=$c,d("introgen").onclick=()=>{$c(),Re.on||Dc()},d("gen-x").onclick=()=>Wu(!1),d("introx").onclick=$c,d("intro").onclick=o=>{o.target===d("intro")&&$c()},d("guidex").onclick=cd,d("guide").onclick=o=>{o.target===d("guide")&&cd()},d("keyshelp").onclick=o=>{o.stopPropagation(),ld()},Bg(gt),iv(),dv(),kM(),Vr(),Ka(),d("g-layer").textContent=wc[0].name,fi(-1),Lp();let Wr=null;d("b-folder").onclick=()=>d("fpick2").click(),d("fpick2").addEventListener("change",o=>{let p=Array.from(o.target.files||[]).filter(b=>{let E=b.webkitRelativePath||b.name;return Zc.test(E)&&!_m(E)&&!Mm(E)});if(!p.length){d("bpick").dataset.i18n="boot.nomd",d("bpick").textContent=A("boot.nomd"),d("bpick").classList.remove("ok"),Wr=null;return}let v=(p[0].webkitRelativePath||"").split("/")[0]||"";Wr={list:p.map(b=>({path:b.webkitRelativePath||b.name,file:b})),name:v},yy(),d("bpick").classList.add("ok"),d("b-go").classList.remove("alt"),o.target.value=""}),d("b-go").onclick=()=>{if(d("boot").classList.add("gone"),setTimeout(()=>d("boot").style.display="none",950),Wr){let o=Wr;Wr=null,setTimeout(()=>ad(o.list,o.name),320)}},iy();let wy={search:Dp,mindmap:tm,genesis:Dc,ripple:qu,poster:ju,layer:kp,grid:Fp,sound:()=>Hc(!Pe.on),reset:Rp,hud:()=>{let o=d("hud");o.style.display=o.style.display==="none"?"":"none"},open:()=>ie(lt,null),help:ld},Qc={debug:()=>({running:jn.running,host:jn.host,raf:jn.raf,glLost:jn.lost,hidden:document.hidden,frames:gs,nodes:Q,gap:{knob:W.gap,now:zi,sys:Qi},cam:{th:he.thD,ph:he.phD,dist:he.distD,thV:he.thV,phV:he.phV,idle:he.idle},selected:lt,active:ze,halo:{glare:qn&&qn.visible?+qn.material.opacity.toFixed(3):0,ice:In&&In.visible?+In.material.opacity.toFixed(3):0,built:!!In},mind:At?{root:$.root,lit:$.has.size,lanes:$.rr.map(o=>+o.toFixed(1)),hopRadii:[0,1,2].map(o=>{let u=$.list.filter(v=>v.hop===o);if(!u.length)return 0;let p=ye[u[0].i];return u.every(v=>ye[v.i]===p)?+p.toFixed(3):null})}:null,radiiRestored:!!(Q&&Pt&&ye.every((o,u)=>Math.abs(o-Pt[u]*(tt[u].kind==="core"?W.szSun:tt[u].kind==="moon"?W.szMn:W.szPl))<.001))}),setHosted:te,setVisible(o){jn.host=!!o,ed()},setIgnoreFilters:OM,setLang:O,setMaxNodes(o){W.maxNodes=Math.max(0,o|0),Vr(),un()},load:ad,setHostHooks:we,revealPath:ke,setActivePath:ht,busy:()=>oa,commands:()=>Object.keys(wy),command(o){let u=wy[o];return u?(u(),!0):!1},destroy(){if(jn.host=!1,ny(),[fe.rt,fe.a,fe.b].forEach(o=>{if(o)try{o.dispose()}catch(u){}}),fe.rt=fe.a=fe.b=null,fe.ok=!1,Pe.ctx){try{Pe.ctx.close()}catch(o){}Pe.ctx=null}try{Vt.dispose()}catch(o){}}};Qc.resize=()=>{Ka(),ki()},Qc.root=s;let iE=Qc.destroy;return Qc.destroy=()=>{try{iE()}catch(o){console.error("vault-orrery: teardown",o)}a.splice(0).forEach(o=>{try{o()}catch(u){}}),s.replaceChildren()},Qc}var sc="vault-orrery-view",Zb=2500,uL=24,dL=24,vu=class extends dr.ItemView{constructor(t,n){super(t);this.plugin=n;this.api=null;this.io=null;this.ro=null;this.syncPending=!1;this.scheduleSync=(0,dr.debounce)(()=>{this.syncVault()},Zb,!1)}getViewType(){return sc}getDisplayText(){return"Vault Orrery"}getIcon(){return"orbit"}async onOpen(){let t=this.contentEl;t.empty(),t.addClass("vault-orrery-host");let n=t.createDiv({cls:"vo-root"}),i=new DOMParser().parseFromString(Yb,"text/html");for(;i.body.firstChild;)n.appendChild(i.body.firstChild);try{this.api=jb(n,this.plugin.engineStore())}catch(a){console.error("Vault Orrery: engine failed to start",a),t.empty(),t.createEl("p",{text:"Vault Orrery could not start. See the developer console for details."});return}this.api.setHosted(!0),this.api.setHostHooks({open:(a,l)=>{this.openNote(a,l)},hover:(a,l,h)=>this.hoverNote(a,l,h)}),this.plugin.applySettingsTo(this.api),this.io=new IntersectionObserver(a=>{var l;for(let h of a){let c=h.boundingClientRect;!c.width||!c.height||(l=this.api)==null||l.setVisible(h.isIntersecting)}},{threshold:0}),this.io.observe(n),this.ro=new ResizeObserver(()=>{var a,l;(a=this.api)==null||a.resize(),(l=this.api)==null||l.setVisible(n.offsetWidth>0&&n.offsetHeight>0)}),this.ro.observe(n);let r=()=>this.scheduleSync();this.registerEvent(this.app.vault.on("create",r)),this.registerEvent(this.app.vault.on("delete",r)),this.registerEvent(this.app.vault.on("rename",r)),this.registerEvent(this.app.vault.on("modify",r)),this.registerEvent(this.app.metadataCache.on("resolved",r)),this.registerEvent(this.app.workspace.on("file-open",a=>this.syncActive(a))),this.syncActive(this.app.workspace.getActiveFile()),await this.loadVault()}async openNote(t,n){let i=this.app.vault.getAbstractFileByPath(t);if(!(i instanceof dr.TFile)){new dr.Notice(`Vault Orrery: ${t} is no longer in the vault.`);return}let r=this.app.workspace,a;if(n.newWindow)a=r.getLeaf("window");else if(n.newLeaf)a=r.getLeaf("tab");else{let l=r.getMostRecentLeaf(r.rootSplit);a=l&&l!==this.leaf?l:r.getLeaf("tab")}await a.openFile(i,{active:!0})}hoverNote(t,n,i){this.app.workspace.trigger("hover-link",{event:n,source:wg,hoverParent:this,targetEl:i,linktext:t})}syncActive(t){if(!this.api)return;let n=t&&t.extension==="md"?t.path:"";this.api.setActivePath(n),n&&this.plugin.settings.followActiveNote&&this.api.revealPath(n)}reveal(t,n=!1){if(!this.api)return!1;let i=this.api.revealPath(t.path);return!i&&!n&&new dr.Notice(`Vault Orrery: ${t.basename} is not in the cosmos on screen \u2014 it may be excluded, or past the maximum-notes ceiling.`),i}async syncVault(){if(!(!this.api||!this.plugin.settings.liveSync)){if(this.api.busy()){if(this.syncPending)return;this.syncPending=!0,window.setTimeout(()=>{this.syncPending=!1,this.syncVault()},Zb);return}await this.loadVault(!0)}}async onClose(){var t,n,i;this.scheduleSync.cancel(),(t=this.io)==null||t.disconnect(),this.io=null,(n=this.ro)==null||n.disconnect(),this.ro=null,(i=this.api)==null||i.destroy(),this.api=null,this.contentEl.empty()}onResize(){var t;(t=this.api)==null||t.resize()}getApi(){return this.api}diagnostics(){var m,d,f,g,y,M,S,_;let t=(d=(m=this.api)==null?void 0:m.root)!=null?d:this.contentEl.querySelector(".vo-root");if(!t)return"no engine mounted in this leaf";let n=x=>t.querySelector("#"+x),i=t.querySelector("#gl"),r=t.getBoundingClientRect(),a=i?getComputedStyle(i):null,l=i?i.getContext("webgl2")||i.getContext("webgl"):null,h="n/a";if(r.width&&r.height){let x=document.elementFromPoint(r.left+r.width/2,r.top+r.height/2);h=x?`${x.tagName.toLowerCase()}#${x.id||"-"}.${x.className||"-"}`:"nothing"}let c=(g=(f=n("s-fps"))==null?void 0:f.textContent)!=null?g:"?";return[`leaf box      ${Math.round(r.width)} x ${Math.round(r.height)}`,`root client   ${t.clientWidth} x ${t.clientHeight}`,`canvas buffer ${i?i.width+" x "+i.height:"NO CANVAS"}`,`canvas css    ${a?`${a.width} x ${a.height} display:${a.display} vis:${a.visibility} op:${a.opacity} z:${a.zIndex}`:"-"}`,`webgl         ${l?l.isContextLost()?"CONTEXT LOST":"ok":"no context"}`,`at leaf centre ${h}`,`nodes ${(M=(y=n("s-nodes"))==null?void 0:y.textContent)!=null?M:"?"}   fps ${c}   range ${(_=(S=n("s-dist"))==null?void 0:S.textContent)!=null?_:"?"}`,`run gate      ${this.api?JSON.stringify(this.api.debug()):"-"}`,`root classes  ${t.className}`].join(`
`)}async loadVault(t=!1){if(!this.api)return;let n=this.app.vault.getMarkdownFiles();if(!n.length){t||new dr.Notice("Vault Orrery: no markdown files in this vault.");return}let i=n.map(r=>({path:r.path,file:{text:()=>this.app.vault.cachedRead(r)},meta:this.metaFor(r)}));await this.api.load(i,this.app.vault.getName(),{quiet:t})}metaFor(t){let n=this.app.metadataCache,i=n.resolvedLinks[t.path],r=n.unresolvedLinks[t.path],a=0,l=[];if(r)for(let f in r)a+=r[f],l.length<uL&&l.push(f);let h=n.getFileCache(t),c=h?(0,dr.getAllTags)(h):null,m={},d=h==null?void 0:h.frontmatter;if(d){let f=0;for(let g in d){if(g==="position"||f>=dL)continue;let y=d[g];y==null||!(typeof y!="object"||Array.isArray(y)&&y.every(S=>S===null||typeof S!="object"))||(m[g]=y,f++)}}return{links:i?{...i}:{},broken:a,brokenNames:l,tags:c?c.map(f=>f.replace(/^#/,"")):[],props:m,mtime:t.stat.mtime,ctime:t.stat.ctime}}},wg="vault-orrery";var yu=require("obsidian"),fL=["auto","ko","en","ja","zh"],pL=s=>typeof s=="string"&&fL.includes(s),Da={language:"auto",maxNodes:0,liveSync:!0,followActiveNote:!1,followExcludedFiles:!0,extraIgnoreFilters:[],engineStore:{}},rp=class extends yu.PluginSettingTab{constructor(t,n){super(t,n);this.plugin=n}getSettingDefinitions(){return[{name:"Language",desc:"Interface language. Your note and folder names are never translated.",aliases:["\uD55C\uAD6D\uC5B4","\u65E5\u672C\u8A9E","\u4E2D\u6587","locale","translation"],control:{type:"dropdown",key:"language",options:{auto:"Match Obsidian",ko:"\uD55C\uAD6D\uC5B4",en:"English",ja:"\u65E5\u672C\u8A9E",zh:"\u4E2D\u6587"},defaultValue:Da.language}},{name:"Maximum notes",desc:"A ceiling on how many notes are drawn at once. Large vaults run a spring simulation over every body, so this is where performance is traded for completeness. Set to 0 for no limit. When the ceiling truncates a vault, the view says so rather than showing a partial cosmos as if it were the whole one.",aliases:["performance","limit","large vault"],control:{type:"slider",key:"maxNodes",min:0,max:1e4,step:500,defaultValue:Da.maxNodes}},{type:"group",heading:"The editor",items:[{name:"Keep up with the vault",desc:"Re-derive the cosmos when notes are written, created, renamed or deleted while the view is open. The camera and the selection stay where they are. Turn this off on a very large vault, where each rebuild reads every note again; the Reload vault command then does it on request.",aliases:["live","refresh","update","watch"],control:{type:"toggle",key:"liveSync",defaultValue:Da.liveSync}},{name:"Follow the active note",desc:'Move the camera to whichever note you open in the editor. Left off, the note being edited is still marked in the sky \u2014 the camera simply stays where you put it, and "Reveal the active note in the orrery" flies to it on request.',aliases:["sync","active file","follow"],control:{type:"toggle",key:"followActiveNote",defaultValue:Da.followActiveNote}}]},{type:"group",heading:"Exclusions",cls:"vault-orrery-exclusions",items:[{name:"Respect excluded files",desc:"Hide the notes listed under Settings \u2192 Files & Links \u2192 Excluded files, exactly as Obsidian's own graph does. Turning this off will show notes you have hidden elsewhere.",aliases:["hidden","ignore","userIgnoreFilters"],control:{type:"toggle",key:"followExcludedFiles",defaultValue:Da.followExcludedFiles}},{name:"Additional exclusions",desc:"One pattern per line, on top of Obsidian's. A plain path is treated as a prefix (archive hides archive/ and archive.md); a pattern wrapped in slashes is a regular expression (/^\\d{4}-/).",aliases:["ignore","filter","regex"],control:{type:"textarea",key:"extraIgnoreFilters",placeholder:`archive
/^\\d{4}-/`,rows:4,defaultValue:""}}]},{type:"group",heading:"Privacy",items:[{name:"Network access",desc:"This plugin makes no network requests of any kind \u2014 no telemetry, no update check, no remote fonts or scripts. Your notes are read, laid out and drawn entirely on this machine, and nothing about them is stored outside the vault.",aliases:["telemetry","offline","analytics"]}]}]}getControlValue(t){let n=this.plugin.settings;switch(t){case"language":return n.language;case"maxNodes":return n.maxNodes;case"liveSync":return n.liveSync;case"followActiveNote":return n.followActiveNote;case"followExcludedFiles":return n.followExcludedFiles;case"extraIgnoreFilters":return n.extraIgnoreFilters.join(`
`);default:return}}async setControlValue(t,n){let i=this.plugin.settings;switch(t){case"language":if(!pL(n))return;i.language=n;break;case"maxNodes":{let r=Number(n);if(!Number.isFinite(r))return;i.maxNodes=r;break}case"liveSync":i.liveSync=!!n;break;case"followActiveNote":i.followActiveNote=!!n;break;case"followExcludedFiles":i.followExcludedFiles=!!n;break;case"extraIgnoreFilters":i.extraIgnoreFilters=String(n).split(`
`).map(r=>r.trim()).filter(Boolean);break;default:return}await this.plugin.saveSettings(),this.plugin.pushSettingsToViews()}display(){var n;let{containerEl:t}=this;t.empty();for(let i of this.getSettingDefinitions())if("type"in i&&i.type==="group"){i.heading&&new yu.Setting(t).setName(i.heading).setHeading();let r=i.cls?t.createDiv({cls:i.cls}):t;for(let a of(n=i.items)!=null?n:[])this.renderFallback(r,a)}else"type"in i||this.renderFallback(t,i)}renderFallback(t,n){if("type"in n)return;let i=new yu.Setting(t).setName(n.name);typeof n.desc=="string"&&i.setDesc(n.desc);let r=n.control;if(!r)return;let a=this.getControlValue(r.key),l=h=>{this.setControlValue(r.key,h)};switch(r.type){case"dropdown":i.addDropdown(h=>h.addOptions(r.options).setValue(String(a)).onChange(l));break;case"slider":i.addSlider(h=>h.setLimits(r.min,r.max,r.step).setValue(Number(a)).onChange(l));break;case"toggle":i.addToggle(h=>h.setValue(!!a).onChange(l));break;case"textarea":i.addTextArea(h=>{r.placeholder&&h.setPlaceholder(r.placeholder),h.setValue(String(a)).onChange(l),r.rows&&(h.inputEl.rows=r.rows)});break}}};var mL='<circle cx="50" cy="50" r="12" fill="currentColor"/><ellipse cx="50" cy="50" rx="44" ry="18" fill="none" stroke="currentColor" stroke-width="6"/><circle cx="94" cy="50" r="8" fill="currentColor"/>',gL=[["open","Open the selected note"],["search","Search the cosmos"],["mindmap","Mind map of the selected note"],["genesis","Genesis \u2014 play the vault's formation"],["ripple","Ripple from the selected note"],["poster","Save a poster"],["layer","Cycle the link layer"],["grid","Show or hide the reference plane"],["sound","Ambient sound"],["reset","Reset the view"],["hud","Show or hide the HUD"],["help","Show the first-flight guide"]],sp=class extends fr.Plugin{constructor(){super(...arguments);this.settings=Da;this.flushStore=(0,fr.debounce)(()=>{this.saveSettings()},800,!1);this.pushed=new WeakMap}async onload(){await this.loadSettings(),(0,fr.addIcon)("orbit",mL),this.registerView(sc,t=>new vu(t,this)),this.addRibbonIcon("orbit","Open Vault Orrery",()=>this.activateView()),this.addCommand({id:"open",name:"Open",callback:()=>this.activateView()}),this.addCommand({id:"reload-vault",name:"Reload vault",checkCallback:t=>{let n=this.views();return n.length?(t||n.forEach(i=>void i.loadVault()),!0):!1}}),this.addCommand({id:"diagnostics",name:"Show render diagnostics",checkCallback:t=>{let n=this.views();return n.length?(t||new fr.Notice(n[0].diagnostics(),6e4),!0):!1}}),this.addCommand({id:"reveal-active",name:"Reveal the active note in the orrery",checkCallback:t=>{let n=this.app.workspace.getActiveFile();return!n||n.extension!=="md"?!1:(t||this.revealFile(n),!0)}});for(let[t,n]of gL)this.addCommand({id:"mode-"+t,name:n,checkCallback:i=>{var a;let r=this.views();return r.length?(i||(a=r[0].getApi())==null||a.command(t),!0):!1}});this.registerEvent(this.app.workspace.on("file-menu",(t,n)=>{!(n instanceof fr.TFile)||n.extension!=="md"||t.addItem(i=>i.setTitle("Show in Vault Orrery").setIcon("orbit").onClick(()=>{this.revealFile(n)}))})),this.registerHoverLinkSource(wg,{display:"Vault Orrery",defaultMod:!0}),this.addSettingTab(new rp(this.app,this)),this.registerEvent(this.app.workspace.on("layout-change",()=>this.pushSettingsToViews()))}onunload(){this.flushStore.cancel(),this.saveSettings()}views(){return this.app.workspace.getLeavesOfType(sc).map(t=>t.view).filter(t=>t instanceof vu)}async revealFile(t){var r;await this.activateView();let n=this.views()[0];if(!n)return;let i=a=>{n.reveal(t,a>0)||a>0&&window.setTimeout(()=>i(a-1),400)};i((r=n.getApi())!=null&&r.busy()?25:0)}async activateView(){let t=this.app.workspace.getLeavesOfType(sc);if(t.length){await this.app.workspace.revealLeaf(t[0]);return}let n=this.app.workspace.getLeaf("tab");await n.setViewState({type:sc,active:!0}),await this.app.workspace.revealLeaf(n)}async loadSettings(){let t=await this.loadData();this.settings=Object.assign({},Da,t!=null?t:{}),this.settings.engineStore=Object.assign({},this.settings.engineStore)}async saveSettings(){await this.saveData(this.settings)}engineStore(){return{get:t=>{var n;return(n=this.settings.engineStore[t])!=null?n:null},set:(t,n)=>{this.settings.engineStore[t]=String(n),this.flushStore()}}}pushSettingsToViews(){this.views().forEach(t=>{let n=t.getApi();n&&this.applySettingsTo(n)})}applySettingsTo(t){let n=this.pushed.get(t),i=this.resolveLang(),r=this.ignoreFilters(),a=JSON.stringify(r);(!n||n.lang!==i)&&(this.settings.language!=="auto"||!this.engineHasLang())&&t.setLang(i),(!n||n.maxNodes!==this.settings.maxNodes)&&t.setMaxNodes(this.settings.maxNodes),(!n||n.filters!==a)&&t.setIgnoreFilters(r),this.pushed.set(t,{lang:i,maxNodes:this.settings.maxNodes,filters:a})}engineHasLang(){let t=this.settings.engineStore["orrery2.lang"];return t==="ko"||t==="en"||t==="ja"||t==="zh"}resolveLang(){let n=(r=>r==="auto"?null:r)(this.settings.language);if(n)return n;let i=(fr.moment.locale()||"en").toLowerCase();return i.startsWith("ko")?"ko":i.startsWith("ja")?"ja":i.startsWith("zh")?"zh":"en"}ignoreFilters(){var i;let t=this.settings.extraIgnoreFilters.slice();if(!this.settings.followExcludedFiles)return t;let n=null;try{let r=this.app.vault;n=(i=r.getConfig)==null?void 0:i.call(r,"userIgnoreFilters")}catch(r){console.warn("Vault Orrery: could not read userIgnoreFilters",r)}return Array.isArray(n)?[...n.filter(r=>typeof r=="string"),...t]:(n!=null&&console.warn("Vault Orrery: unexpected userIgnoreFilters shape",n),t)}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2021 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

/* nosourcemap */