const DEFAULT_CLAIMS=[
{id:'CLM-260901',provider:'Metro Heart Institute',patient:'P-8842',amount:128000,score:91,risk:'high',reason:'Duplicate claim pattern',signals:['Duplicate claim','Provider risk','Amount anomaly'],date:'2026-08-30'},
{id:'CLM-260902',provider:'NovaCare Hospital',patient:'P-2194',amount:86000,score:78,risk:'high',reason:'Documentation mismatch',signals:['Missing documents','Billing anomaly','High frequency'],date:'2026-08-30'},
{id:'CLM-260903',provider:'Aarogya Diagnostics',patient:'P-7401',amount:42000,score:62,risk:'medium',reason:'Peer-cost anomaly',signals:['Amount anomaly','Late billing'],date:'2026-08-30'},
{id:'CLM-260904',provider:'GreenLife Clinic',patient:'P-1145',amount:18500,score:19,risk:'low',reason:'No major risk factors',signals:['Minor variance'],date:'2026-08-30'},
{id:'CLM-260905',provider:'Sunrise Orthopedic Centre',patient:'P-5642',amount:97000,score:71,risk:'high',reason:'Diagnosis-procedure mismatch',signals:['Coding mismatch','Provider risk'],date:'2026-08-30'},
{id:'CLM-260906',provider:'CityMed Imaging',patient:'P-3921',amount:26500,score:38,risk:'medium',reason:'Recent repeat service',signals:['Repeat claim'],date:'2026-08-30'},
{id:'CLM-260907',provider:'WellSpring Hospital',patient:'P-7805',amount:54000,score:24,risk:'low',reason:'Low anomaly profile',signals:['Minor variance'],date:'2026-08-29'},
{id:'CLM-260908',provider:'Metro Heart Institute',patient:'P-3318',amount:164000,score:87,risk:'high',reason:'Provider + identity anomaly',signals:['Provider risk','Amount anomaly','Identity issue'],date:'2026-08-29'},
{id:'CLM-260909',provider:'Lotus Specialty Care',patient:'P-9055',amount:73500,score:55,risk:'medium',reason:'Missing claim documents',signals:['Missing documents','High frequency'],date:'2026-08-29'},
{id:'CLM-260910',provider:'GreenLife Clinic',patient:'P-4810',amount:12200,score:11,risk:'low',reason:'Consistent claim pattern',signals:[],date:'2026-08-29'},
{id:'CLM-260911',provider:'Aarogya Diagnostics',patient:'P-6620',amount:35500,score:44,risk:'medium',reason:'Unusual submission time',signals:['Late billing'],date:'2026-08-29'},
{id:'CLM-260912',provider:'WellSpring Hospital',patient:'P-1278',amount:64000,score:27,risk:'low',reason:'Low anomaly profile',signals:['Minor variance'],date:'2026-08-28'}
];
function getClaims(){return JSON.parse(localStorage.getItem('cs_v4_claims')||'null')||DEFAULT_CLAIMS}
function setClaims(v){localStorage.setItem('cs_v4_claims',JSON.stringify(v))}
function getFeedback(){return JSON.parse(localStorage.getItem('cs_v4_feedback')||'[]')}
function setFeedback(v){localStorage.setItem('cs_v4_feedback',JSON.stringify(v))}
function money(n){n=Number(n)||0;if(n>=10000000)return `₹${(n/10000000).toFixed(2)}Cr`;if(n>=100000)return `₹${(n/100000).toFixed(1)}L`;return `₹${n.toLocaleString('en-IN')}`}
function riskFromScore(s){return s>=70?'high':s>=35?'medium':'low'}
function riskColor(r){return r==='high'?'var(--red)':r==='medium'?'var(--amber)':'var(--green)'}
function riskLabel(r){return r[0].toUpperCase()+r.slice(1)+' risk'}
