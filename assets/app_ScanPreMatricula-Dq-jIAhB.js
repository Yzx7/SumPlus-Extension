
(async()=>{try{if(!window.location.href.startsWith("https://sum.unmsm.edu.pe/alumnoWebSum/v2")){window.alert("No se encuentra en la página del sum")
return}const e=await fetch("/alumnoWebSum/v2/reportes/prematricula?accion=obtenerAlumnoPrematricula")
if(!e.ok)throw new Error("WARN"+e.status)
const r=await e.text(),o=JSON.parse(r).data.map(t=>({...t,cod:t.codAsignatura.trim(),asig:t.desAsignatura.trim(),ciclo:t.num_ciclo_ano_asig,cred:t.num_creditaje})),a=await chrome.runtime.sendMessage(chrome.runtime.id,{msg:"newPreMatricula",data:o},{includeTlsChannelId:!0})
if(a!=null&&a.ok){window.alert("Reporte Prematrícula obtenido satisfactoriamente")
return}window.alert("No se obtubo el Reporte Prematrícula :C")}catch(e){console.log(e),window.alert("Sucedió un error al obtener el Reporte Prematrícula :c")}})()

