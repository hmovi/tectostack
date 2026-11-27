const M=`<svg role="img" aria-label="Tectostack" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#fbfaf8"/><g fill="#1d2732"><circle cx="17" cy="20" r="6"/><circle cx="32" cy="20" r="6"/><circle cx="47" cy="20" r="6"/><circle cx="32" cy="35" r="6"/></g><circle cx="32" cy="50" r="6.5" fill="#30577b"/></svg>`;
const P=[['index','Home'],['services','Services'],['ai-integration','AI Integration'],['prices','Prices'],['vancouver','Why Vancouver'],['about','About'],['contact','Contact']];
// Service pages (slug, short name, menu blurb)
const SP=[['custom-web-applications','Web applications','SaaS, portals, internal tools'],['mobile-app-development','iOS and Android apps','One codebase, both stores'],['api-backend-development','APIs and backends','FastAPI, Django, integrations'],['ai-development','AI development','Assistants, automation, private models'],['data-engineering','Data and real-time systems','Pipelines, streaming, dashboards'],['video-streaming-platforms','Video and media platforms','Streaming, uploads, transcoding'],['cloud-devops','Cloud, DevOps and observability','GCP, CI/CD, monitoring'],['qa-test-automation','QA and test automation','Playwright, pytest, CI']];
// Tectostack LinkedIn page: change this one line to update every page
const LI='https://www.linkedin.com/company/soliton-power';
const U=h=>h=='index'?'/':'/'+h;
const cur=(location.pathname.split('/').pop()||'index').replace('.html','')||'index';
const svcCur=SP.some(x=>x[0]==cur);
const LISVG='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>';
const DD=`<div class="ndd"><a class="l ${cur=='services'||svcCur?'on':''}" href="/services">Services</a><button class="ddb" type="button" aria-expanded="false" aria-controls="ddm" aria-label="Show all services"><svg viewBox="0 0 12 8" width="11" height="8" aria-hidden="true"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="ddm" id="ddm">${SP.map(([h,t,d])=>`<a href="/${h}"${h==cur?' aria-current="page"':''}><b>${t}</b><small>${d}</small></a>`).join('')}<a class="dda" href="/services">All services →</a></div></div>`;
document.body.insertAdjacentHTML('afterbegin',`<header><div class="w"><nav id="nv"><a class="logo" href="/" aria-label="Tectostack home">${M}<b>Tecto</b><span>stack</span></a><span class="sp"></span><div class="nl" id="nl">${DD}${P.slice(2,6).map(([h,t])=>`<a class="l ${h==cur?'on':''}" href="${U(h)}">${t}</a>`).join('')}<a class="btn s mob" href="/contact">Free consultation</a></div><a class="btn s hd" href="/contact">Free consultation</a><button class="burger" id="bg" aria-label="Menu" aria-expanded="false" aria-controls="nl">☰</button></nav></div></header>`);
{const nv=document.getElementById('nv'),bg=document.getElementById('bg'),set=o=>{nv.classList.toggle('open',o);bg.setAttribute('aria-expanded',o);bg.textContent=o?'✕':'☰'};bg.onclick=()=>set(!nv.classList.contains('open'));nv.querySelectorAll('.nl a').forEach(a=>a.addEventListener('click',()=>set(false)));addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});addEventListener('resize',()=>{if(innerWidth>900)set(false)})
const dd=nv.querySelector('.ndd'),db=dd.querySelector('.ddb'),tg=o=>{dd.classList.toggle('open',o);db.setAttribute('aria-expanded',o)};db.onclick=e=>{e.stopPropagation();tg(!dd.classList.contains('open'))};document.addEventListener('click',e=>{if(!dd.contains(e.target))tg(false)});dd.addEventListener('keydown',e=>{if(e.key==='Escape'){tg(false);db.focus()}})}
document.body.insertAdjacentHTML('beforeend',`<footer><div class="w"><div class="fg"><div><a class="logo" href="/">${M}<b>Tecto</b><span>stack</span></a><p style="margin-top:12px;max-width:320px">Senior-led, AI-forward custom software from Vancouver, Canada, for companies in Canada, the Middle East and around the world.</p><div class="fsoc"><a class="fli" href="${LI}" target="_blank" rel="noopener noreferrer me" aria-label="Tectostack on LinkedIn (opens in a new tab)" title="Follow us on LinkedIn">${LISVG}</a><a class="flt" href="${LI}" target="_blank" rel="noopener noreferrer me">Follow us on LinkedIn</a></div></div><div><h4>Services</h4>${SP.map(([h,t])=>`<a href="/${h}">${t}</a>`).join('')}</div><div><h4>Company</h4><a href="/about">About</a><a href="/middle-east">Middle East</a><a href="/vancouver">Why Vancouver</a><a href="/contact">Contact</a></div><div><h4>Build</h4><a href="/services">All services</a><a href="/ai-integration">AI Integration</a><a href="/prices">Prices</a><a href="https://www.solitonpower.com">Soliton Power</a></div></div><div class="fb"><span>© 2026 Tectostack · Vancouver, Canada</span></div></div></footer>`);
const X=[
['Web apps','SaaS customer portal','Accounts, billing, roles and a live dashboard for a subscription product.','Next.js · FastAPI · Postgres','$18k+','10 wks',0],
['Web apps','Booking and scheduling platform','Online booking, reminders, payments and a staff calendar for service businesses.','React · Django · Stripe','$14k+','8 wks',0],
['Web apps','Internal operations tool','Replaces spreadsheets with approvals, reporting and audit trails.','Next.js · Postgres · SSO','$12k+','6 wks',0],
['Mobile','iOS and Android app','One codebase in both app stores with push notifications and offline mode.','React · Capacitor','$25k+','12 wks','#ff6b3d'],
['Mobile','Field service app','Work orders, photos and signatures captured on site, synced later.','Capacitor · FastAPI','$28k+','12 wks','#e4572e'],
['AI','Document Q&A assistant','Staff ask questions and get answers with sources from your own files.','Anthropic · pgvector','$10k+','5 wks','#6a4c93'],
['AI','Call and meeting transcription','Audio to searchable text, summaries and action items.','Whisper · Celery','$9k+','4 wks','#8a5fbf'],
['AI','Private on-site model','A self-hosted model so sensitive data never leaves your servers.','Ollama · Docker','$15k+','6 wks','#4b3a7a'],
['Data','Real-time dashboards','Live metrics from sensors or apps with alerts.','TimescaleDB · Grafana','$12k+','6 wks','#0f7c6e'],
['Data','Event streaming pipeline','Reliable ingestion and processing of high-volume events.','Kafka · RabbitMQ · Celery','$20k+','8 wks','#0a5c52'],
['Media','Video platform','Adaptive streaming, resumable uploads and a viewer library.','HLS · FFmpeg · TUS','$30k+','14 wks','#c2410c'],
['Cloud','Cloud migration and CI/CD','Containerise, deploy to Cloud Run and add monitoring.','GCP · Docker · GitLab CI','$8k+','4 wks','#2d6a4f']];
const T={'Web apps':['#dcf3f4',''],'Mobile':['#e8ddd0',''],'AI':['#1f1f1f','dk'],'Data':['#b79b82',''],'Media':['#856b54','dk'],'Cloud':['#cfe6e8','']};
function ex(el){if(!el)return;const base=+el.dataset.pager||0;const per=()=>base?(innerWidth<=600?1:innerWidth<=900?2:base):0;
const cs=['All',...new Set(X.map(x=>x[0]))];const wrap=document.createElement('div');wrap.className='chips';el.before(wrap);
let cat='All',pg=0,nav;if(base){nav=document.createElement('div');nav.className='pager';nav.innerHTML='<span></span><div><button class="pb" aria-label="Previous examples">←</button><button class="pb" aria-label="Next examples">→</button></div>';el.after(nav)}
function draw(){[...wrap.children].forEach(b=>b.setAttribute('aria-pressed',b.textContent==cat));const L=X.filter(x=>cat=='All'||x[0]==cat),p=per(),pages=p?Math.ceil(L.length/p):1;pg=Math.max(0,Math.min(pg,pages-1));const S=p?L.slice(pg*p,pg*p+p):L;
el.innerHTML=S.map((x,i)=>`<div class="ex" style="animation-delay:${i*60}ms"><div class="v ${T[x[0]][1]}" style="background:${T[x[0]][0]}"><em>${x[0]}</em><i></i><i></i><i></i></div><div class="b"><h3>${x[1]}</h3><p>${x[2]}</p><div class="tags"><span>${x[3].replace(/ · /g,'</span><span>')}</span></div><div class="m"><span>${x[5]}</span><span>${x[4]}</span></div></div></div>`).join('');
if(nav){const[bp,bn]=nav.querySelectorAll('button');nav.querySelector('span').textContent=`${pg+1} of ${pages}`;bp.disabled=pg==0;bn.disabled=pg>=pages-1;bp.onclick=()=>{pg--;draw()};bn.onclick=()=>{pg++;draw()}}}
cs.forEach(c=>{const b=document.createElement('button');b.textContent=c;b.onclick=()=>{cat=c;pg=0;draw()};wrap.append(b)});
if(base){let x0=null;el.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});el.addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50){pg+=d<0?1:-1;draw()}x0=null});let w=innerWidth;addEventListener('resize',()=>{if(innerWidth!==w){w=innerWidth;draw()}})}
draw()}
ex(document.getElementById('examples'));

const SV=[
['Custom web applications','SaaS products, customer portals, marketplaces and internal tools, designed for speed, accessibility and growth.',['Product scoping and architecture','Next.js or React front end with a typed API','Accounts, roles, payments and billing','Automated tests and CI/CD from day one'],'Next.js,React,Vite,Tailwind,MUI,FastAPI,Django','$12,000','6 to 10 weeks'],
['iOS and Android apps','One codebase shipped to both app stores, with the polish and device features users expect.',['Shared React codebase for iOS and Android','Push notifications, camera and offline mode','App Store and Google Play submission','Analytics and crash reporting'],'React,Capacitor,TypeScript,PostHog,Sentry','$25,000','10 to 16 weeks'],
['APIs and backend engineering','Fast, well-documented services that connect your apps, partners and data.',['Async Python APIs with versioned migrations','Sign-in with JWT, OAuth2 and SSO','Background jobs and queues','Payment and SMS integrations'],'FastAPI,Django/DRF,SQLAlchemy,Alembic,Celery,Stripe','$15,000','6 to 10 weeks'],
['AI development and integration','Practical AI added to the tools your team already uses, hosted or fully private.',['Document Q&A and search over your own files','Transcription and summaries with Whisper','Vision and classification with OpenCV and PyTorch','Hosted or private models, with guardrails'],'Anthropic,OpenAI,Gemini,Ollama,Whisper,PyTorch','$9,000','2 to 4 week pilot'],
['Data engineering and real-time systems','Pipelines and databases that stay fast as your volume grows.',['Schema design and migrations','Event streaming and message queues','Time-series storage and live dashboards','Alerts and reporting'],'PostgreSQL,TimescaleDB,MongoDB,Redis,Kafka,RabbitMQ','$12,000','6 to 8 weeks'],
['Video and media platforms','Adaptive streaming and large-file uploads built for real audiences.',['HLS and MPEG-DASH streaming','Resumable uploads for large files','Transcoding pipelines with FFmpeg','Secure, token-protected playback'],'HLS,MPEG-DASH,FFmpeg,TUS,VOD-Nginx','$30,000','12 to 14 weeks'],
['Cloud, DevOps and observability','Reliable deployments and clear visibility into how your software behaves.',['Docker and Cloud Run deployments','CI/CD with GitLab CI, Jenkins or Cloud Build','Logs, metrics and traces in Grafana','Error tracking and uptime alerts'],'GCP,Docker,Nginx,Grafana,Prometheus,OpenTelemetry,Sentry','$8,000','About 4 weeks'],
['QA and test automation','Automated tests that catch regressions before your customers do.',['Unit and API tests with pytest','Browser tests with Playwright and Vitest','Static analysis with Ruff and mypy','Coverage reporting in your pipeline'],'pytest,Playwright,Vitest,Ruff,mypy,Coverage','$5,000','2 to 3 weeks']];
const svl=document.getElementById('svl'),svp=document.getElementById('svp');
if(svl){const sh=i=>{[...svl.children].forEach((b,j)=>b.setAttribute('aria-selected',j==i));const v=SV[i];svp.innerHTML=`<h3>${v[0]}</h3><p class="svs">${v[1]}</p><div class="svc"><div><h4>What is included</h4><ul>${v[2].map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="svm"><div><small>Starting at</small><b>${v[4]}</b></div><div><small>Typical timeline</small><b>${v[5]}</b></div></div></div><div class="tags">${v[3].split(',').map(x=>`<span>${x}</span>`).join('')}</div><div class="svact"><a class="btn" href="/${SP[i][0]}">Explore ${v[0].toLowerCase()}</a><a class="btn g" href="/contact">Get a quote</a></div>`;svp.classList.remove('in');void svp.offsetWidth;svp.classList.add('in')};
SV.forEach((v,i)=>{const b=document.createElement('button');b.setAttribute('role','tab');b.innerHTML=`<span>${String(i+1).padStart(2,'0')}</span>${v[0]}`;b.onclick=()=>sh(i);svl.append(b)});sh(0)}
const tt=document.getElementById('tt');if(tt){const L=['<span class="c"># new project</span>','$ tectostack scope --type webapp','<span class="ok">✓</span> architecture drafted','$ git push origin main','<span class="ok">✓</span> CI passed: pytest, playwright, mypy','$ deploy --env production','<span class="ok">✓</span> live on Cloud Run','<span class="ok">✓</span> traces flowing to Grafana'];let n=0;(function t(){if(n<L.length){tt.innerHTML+=L[n++]+'<br>';setTimeout(t,n%2?450:850)}})()}
const ty=document.getElementById('ty');if(ty){const sz=document.getElementById('sz'),ops=document.getElementById('ops'),N=['Small','Medium','Large'],M=[.7,1,1.7],c=x=>'$'+(Math.round(x/500)*500).toLocaleString('en-CA');function e(){const b=ty.value*1000*M[sz.value-1]+(ops.checked?3000:0);rg.textContent=c(b*.9)+' to '+c(b*1.25);szl.textContent=N[sz.value-1];wk.textContent='About '+Math.round(4+sz.value*3+ty.value/5)+' weeks. Your written quote sets the exact price.'}[ty,sz,ops].forEach(x=>x.oninput=e);e()}
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.12});document.querySelectorAll('.rv').forEach(x=>io.observe(x));
const f=document.getElementById('cf');if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);location.href='mailto:hello@tectostack.com?subject='+encodeURIComponent('Project inquiry: '+d.get('type'))+'&body='+encodeURIComponent(d.get('msg')+'\n\n'+d.get('name')+' ('+d.get('email')+')'+(d.get('company')?'\n'+d.get('company'):''))};

/* ===== Home: We build your world ===== */
(()=>{const view=document.getElementById('wbview');if(!view)return;
const scenes=[...view.querySelectorAll('.wb-scene')],tabs=[...document.querySelectorAll('.wb-tabs button')],url=document.getElementById('wburl');
const URLS=['db.yourcompany.com/schema','app.yourcompany.com','shop.yourcompany.com','github.com/yourcompany/app'];
const MS=6500,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,wait=ms=>new Promise(r=>setTimeout(r,ms));
document.querySelector('.wb-tabs').style.setProperty('--wbms',MS+'ms');
// code scene: ⟦k:…⟧ keyword, ⟦s:…⟧ string, ⟦f:…⟧ function, ⟦c:…⟧ comment, ⟦t:…⟧ type
const src=`⟦c:# Orders API for your store⟧
⟦k:from⟧ fastapi ⟦k:import⟧ FastAPI, Depends
⟦k:from⟧ .db ⟦k:import⟧ session, Order

app = ⟦f:FastAPI⟧(title=⟦s:"Your Store API"⟧)

⟦t:@app.post⟧(⟦s:"/orders"⟧)
⟦k:async def⟧ ⟦f:create_order⟧(order: Order, db=⟦f:Depends⟧(session)):
    db.⟦f:add⟧(order)
    ⟦k:await⟧ db.⟦f:commit⟧()
    ⟦k:await⟧ ⟦f:notify⟧(order.user_id, ⟦s:"Order confirmed"⟧)
    ⟦k:return⟧ {⟦s:"id"⟧: order.id, ⟦s:"status"⟧: ⟦s:"paid"⟧}`;
const toks=[];src.replace(/⟦(\w):([^⟧]*)⟧|([^⟦]+)/g,(m,c,t,p)=>{toks.push(p!==undefined?['',p]:[c,t]);return m});
const total=toks.reduce((a,t)=>a+t[1].length,0),esc=t=>t.replace(/&/g,'&amp;').replace(/</g,'&lt;'),code=document.getElementById('wbcode'),term=document.getElementById('wbterm');
const render=n=>{let h='',l=n;for(const[c,t]of toks){if(l<=0)break;const p=t.slice(0,l);l-=p.length;h+=c?`<span class="${c}">${esc(p)}</span>`:esc(p)}code.innerHTML=h+'<span class="cur"></span>'};
const TL=[['','$ pytest -q'],['ok','✓ 42 passed in 3.1s'],['','$ deploy --production'],['ok','✓ Live on Cloud Run']];
let token=0,cur=-1,running=false;
function show(i){cur=i;view.classList.remove('boot');scenes.forEach((s,k)=>{s.classList.toggle('on',k===i);if(k===i){s.style.animation='none';void s.offsetWidth;s.style.animation=''}});
 // restart CSS animations inside the scene
 const s=scenes[i];s.classList.remove('on');void s.offsetWidth;s.classList.add('on');
 tabs.forEach((t,k)=>{t.setAttribute('aria-selected',k===i);t.classList.remove('run')});void tabs[i].offsetWidth;if(!reduce)tabs[i].classList.add('run');url.textContent=URLS[i]}
async function sceneFx(i,my){
 if(i===2){const cart=document.getElementById('wbcart'),ps=[...view.querySelectorAll('.sh-p')],toast=view.querySelector('.sh-toast');cart.textContent='0';toast.classList.remove('show');ps.forEach(p=>p.classList.remove('pick'));
  await wait(1600);for(const k of [0,1]){if(my!==token)return;ps[k].classList.add('pick');cart.textContent=String(k+1);cart.parentElement.classList.remove('bump');void cart.offsetWidth;cart.parentElement.classList.add('bump');await wait(900)}
  if(my!==token)return;toast.classList.add('show')}
 if(i===3){term.innerHTML='';for(let n=0;n<=total;n+=4){if(my!==token)return;render(n);await wait(18)}render(total);for(const[c,l]of TL){if(my!==token)return;term.innerHTML+=`<span class="${c}">${l}</span>\n`;await wait(450)}}}
async function play(start,boot){const my=++token;let i=start;
 while(my===token){if(boot){view.classList.add('boot');scenes.forEach(s=>s.classList.remove('on'));tabs.forEach(t=>t.classList.remove('run'));url.textContent='tectostack.com/build';await wait(2400);if(my!==token)return}
  show(i);sceneFx(i,my);await wait(MS);if(my!==token)return;i=(i+1)%scenes.length;boot=i===0}}
tabs.forEach((t,i)=>t.addEventListener('click',()=>{if(reduce){token++;show(i);sceneFx(i,token);return}running=true;play(i,false)}));
if(reduce){show(0);render(total);return}
let vis=false;const upd=()=>{const v=vis&&!document.hidden;if(v&&!running){running=true;play(cur<0?0:cur,cur<0)}else if(!v&&running){running=false;token++}};
new IntersectionObserver(es=>{vis=es[0].isIntersecting;upd()},{threshold:.25}).observe(view);document.addEventListener('visibilitychange',upd);})();
