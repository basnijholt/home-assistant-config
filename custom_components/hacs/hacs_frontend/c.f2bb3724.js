const t=(t,e)=>{const n={};return e&&(e.type&&(n.type_filter=e.type),e.domain&&(n.domain=e.domain)),t.callWS({type:"config_entries/get",...n})};export{t as g};
