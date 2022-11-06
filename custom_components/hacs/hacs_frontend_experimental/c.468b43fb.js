const o=o=>o<10?`0${o}`:o;function t(t){const n=Math.floor(t/3600),r=Math.floor(t%3600/60),$=Math.floor(t%3600%60);return n>0?`${n}:${o(r)}:${o($)}`:r>0?`${r}:${o($)}`:$>0?""+$:null}export{t as s};
