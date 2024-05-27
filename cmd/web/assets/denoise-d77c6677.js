import{d as j,b8 as C,aE as L,i as S,r as s,x as g,c as $,U as B,k as d,Z as _,j as e,m as l,_ as o,$ as F,W as p,F as q,b9 as D}from"./utils-380ae8e1.js";import{_ as N}from"./NavBack.vue_vue_type_script_setup_true_lang-9cf71b3c.js";import{_ as x}from"./UiParentCard.vue_vue_type_script_setup_true_lang-aa11bf62.js";import{_ as h}from"./AiAudio.vue_vue_type_style_index_0_lang-3eaea588.js";import{_ as P}from"./Explain.vue_vue_type_style_index_0_lang-ed4ae5bc.js";import{V as r}from"./VCol-ac87f973.js";import{V as n}from"./VRow-fc36e79d.js";import{V as A}from"./VForm-bacf8b83.js";import{a3 as R,V as E}from"./index-e3ddd1e6.js";import{V as K}from"./VFileInput-858a0d07.js";const I={class:"d-flex flex-column flex-sm-row gap-3 justify-center"},O=p("br",null,null,-1),T={class:"d-flex flex-column"},W={key:0,class:"d-flex flex-column flex-sm-row gap-3 justify-center"},Z={key:1,class:"flex-fill text-center"},te=j({__name:"denoise",setup(z){C(),L();const b=S("provideAspectPage"),y=s({title:"创建降噪"});s(!1);const v=s(),w=s(),c=s(!1),a=g({file:[],sampleRate:16}),V=g({file:[t=>t&&t.length!==0||"请上传音频文件"],sampleRate:[t=>!!(t||t===0)||"请选择采样率"]}),k=$(()=>a.file&&a.file.length>0?URL.createObjectURL(a.file[0]):""),f=s(),U=async()=>{const{valid:t}=await v.value.validate();if(t){c.value=!0;const[i,u]=await D.upload({url:"/voice/denoise",showSuccess:"处理成功",data:a});c.value=!1,u&&(f.value=u.s3Url,b.methods.refreshListPage())}};return(t,i)=>{const u=B("Select");return d(),_(q,null,[e(N,{backUrl:"/voice-print/denoise-list/list"},{default:l(()=>[o(F(y.value.title),1)]),_:1}),e(n,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(x,{title:"降噪"},{default:l(()=>[e(n,{justify:"center"},{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(A,{ref_key:"formRef",ref:v,class:"my-form"},{default:l(()=>[e(n,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[p("div",I,[e(h,{src:k.value},null,8,["src"])]),e(R,{class:"mb-2 font-weight-medium required"},{default:l(()=>[o("音频文件")]),_:1}),e(K,{modelValue:a.file,"onUpdate:modelValue":i[0]||(i[0]=m=>a.file=m),accept:"audio/*, .mp3, .wma, .amr, .wav, .m4a","prepend-icon":"mdi-volume-high",rules:V.file,"hide-details":"auto",variant:"outlined",required:"",multiple:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(R,{class:"mb-2 font-weight-medium required"},{default:l(()=>[o("采样率 "),e(P,{class:"ml-1"},{default:l(()=>[o("16K 推荐使用，降噪模型默认使用16K采样率"),O,o(" 原始采样率 降噪时，保持跟原始音频同样的采样率")]),_:1})]),_:1}),e(u,{modelValue:a.sampleRate,"onUpdate:modelValue":i[1]||(i[1]=m=>a.sampleRate=m),mapDictionary:{code:"denoise_sample_rate"},placeholder:"请选择采样率",rules:V.sampleRate,clearable:!1},null,8,["modelValue","rules"])]),_:1})]),_:1}),p("div",T,[e(E,{loading:c.value,color:"primary",class:"mt-4",block:"",onClick:U},{default:l(()=>[o(" 提交 ")]),_:1},8,["loading"])])]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(x,{title:"处理结果"},{default:l(()=>[e(n,{class:"text-body-1 pa-5",ref:w.value},{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[f.value?(d(),_("div",W,[e(h,{src:f.value},null,8,["src"])])):(d(),_("p",Z,"暂无结果"))]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})],64)}}});export{te as default};
