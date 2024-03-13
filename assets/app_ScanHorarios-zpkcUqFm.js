
(async()=>{try{if(!window.location.href.startsWith("https://sum.unmsm.edu.pe/alumnoWebSum/v2")){window.alert("No se encuentra en la página del sum")
return}const e=[{cod:"",groups:[{}],ciclo:0}]
let c=await fetch("/alumnoWebSum/v2/matricula/programacion?accion=obtenerProgramacionAsignaturas")
if(!c.ok)throw new Error("WARN"+c.status)
let u=await c.text()
const m=JSON.parse(u).data
if(c=await fetch("/alumnoWebSum/v2/matricula/programacion?accion=obtenerProgramacionAsignaturasLab"),!c.ok)throw new Error("WARN"+c.status)
u=await c.text()
const p=JSON.parse(u).data
m.programacion.forEach(o=>{const s={cred:o.creditos,secc:o.codSeccion,docente:o.apePatDocente+" "+o.apeMatDocente+" "+o.nomDocente,codDocente:o.codDocente,tope:o.topeAlumnos,matriculados:o.matriculados,horarios:o.horarios.map(r=>({...r,day:r.dia,init:r.horaInicio,end:r.horaFin}))},a=e.findIndex(r=>r.cod===o.codAsignatura),t=a>=0?e[a]:null,n=t?t.groups:[]
n.push(s)
const i={cod:o.codAsignatura,asig:o.desAsignatura,ciclo:o.ciclo,cred:o.creditos,groups:n}
a>=0?e[a]=Object.assign({},i):e.push(i)}),p.programacion.forEach(o=>{const s={cred:o.creditos,secc:o.horario,docente:o.apePatDocente+" "+o.apeMatDocente+" "+o.nomDocente,codDocente:o.codDocente,tope:o.topeAlumnos,matriculados:o.matriculados,horarios:o.horarios.map(r=>({...r,day:r.dia,init:r.horaInicio,end:r.horaFin}))},a=e.findIndex(r=>r.cod===o.codAsignatura),t=a>=0?e[a]:null,n=t?t.groups:[]
n.push(s)
const i={cod:o.codAsignatura,asig:o.desAsignatura,ciclo:o.ciclo,cred:o.creditos,groups:n}
a>=0?e[a]=Object.assign({},i):e.push(i)}),e.shift()
const l=e.reduce((o,s)=>{const{ciclo:a}=s
return o[a]||(o[a]=[]),o[a].push(s),o},[[{}]])
l.shift()
const d=await chrome.runtime.sendMessage(chrome.runtime.id,{msg:"newHorarios",data:l},{includeTlsChannelId:!0})
if(d!=null&&d.ok){window.alert("Horarios obtenidos satisfactoriamente")
return}window.alert("No se actualizaron los horarios :C")}catch(e){console.log(e),window.alert("Sucedió un error :c")}})()

