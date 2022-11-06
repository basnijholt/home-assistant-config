const s=(s,n)=>`https://${s.config.version.includes("b")?"rc":s.config.version.includes("dev")?"next":"www"}.home-assistant.io${n}`;export{s as d};
