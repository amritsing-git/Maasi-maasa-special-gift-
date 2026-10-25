// @ts-nocheck
"use strict";
const scenes=document.querySelectorAll(".scene"),petals=document.getElementById("petals"),sparkles=document.getElementById("sparkles");
function showScene(n){scenes.forEach(s=>s.classList.remove("active"));const t=document.getElementById("scene"+n);if(!t)return;t.classList.add("active");window.scrollTo({top:0,behavior:"smooth"});burst(innerWidth/2,innerHeight/2,10)}
function makePetal(){if(!petals)return;const e=document.createElement("span");e.className="petal";e.textContent=["🌹","🌸","🌹","🌺","❤️","🌹"][Math.floor(Math.random()*6)];e.style.left=Math.random()*100+"%";e.style.fontSize=12+Math.random()*16+"px";e.style.animationDuration=7+Math.random()*6+"s";petals.appendChild(e);setTimeout(()=>e.remove(),14000)}
setInterval(makePetal,420);
function spark(x,y){if(!sparkles)return;const e=document.createElement("span");e.className="spark";e.textContent=["✨","❤️","🌹","✦","💗"][Math.floor(Math.random()*5)];e.style.left=x+"px";e.style.top=y+"px";sparkles.appendChild(e);setTimeout(()=>e.remove(),1000)}
function burst(x,y,count=16){for(let i=0;i<count;i++)setTimeout(()=>{const a=Math.random()*Math.PI*2,d=45+Math.random()*180;spark(x+Math.cos(a)*d,y+Math.sin(a)*d)},i*35)}
function buttonBurst(b){const r=b.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,16)}
const start=document.getElementById("start");start.addEventListener("click",()=>{buttonBurst(start);setTimeout(()=>showScene(2),450)});
document.querySelectorAll(".next").forEach(b=>b.addEventListener("click",()=>{buttonBurst(b);setTimeout(()=>showScene(Number(b.dataset.next)),350)}));
document.addEventListener("click",e=>{if(!e.target.closest("button"))spark(e.clientX,e.clientY)});
document.addEventListener("touchstart",e=>{const t=e.touches[0];if(t)spark(t.clientX,t.clientY)},{passive:true});
document.addEventListener("keydown",e=>{if(e.key==="Enter"){const b=document.querySelector(".scene.active button");if(b)b.click()}});
showScene(1);