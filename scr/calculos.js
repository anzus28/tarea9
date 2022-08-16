function MensajeTipoSeguro() {
  const element = document.getElementById('seguro').selectedIndex;
  var costo;
  if (element == 0) {
    alert(
      'Protección Básica Obligatoria (PBO)\n Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito. \nCosto de alquiler diario: $ 5.45 por día.'
    ); costo= 5.45;
  } else if (element == 1) {
    alert(
      'Protección Extendida de Daños(PED) \nCubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros,incendio e inundaciones. \nCosto de alquiler diario: $ 9.50 por día.'
    );costo=9.50
  } else if (element == 2) {
    alert(
      'Protección Gasto Médicos(PGM)  \n Cubre la Protección Extendida de Daños(PED) más gastos médicos para los ocupantes   del vehículo. \nCosto de alquiler diario: $ 11.25 por día.'
    );costo=11.25;
  }
  return costo;
}

function regMemoriaLocal(segu, vehi,nac,tot,totd) {
  if (typeof Storage !== 'undefined') {
    var valor = segu;
    var memRegistro = JSON.parse(localStorage.getItem('seguro'));
    var arreglo = new Array();

    if (memRegistro == null) arreglo[0] = valor;
    else {
      arreglo = memRegistro;
      arreglo[arreglo.length] = valor;
    }

    localStorage.setItem('seguro', JSON.stringify(arreglo));
    var combo = document.getElementById('seguro');
    combo.innerHTML = combo.innerHTML + '<option>' + valor + '</option>';
  }

  if (typeof Storage !== 'undefined') {
    var valor = vehi;
    var memRegistro = JSON.parse(localStorage.getItem('tipoVehiculo'));
    var arreglo = new Array();

    if (memRegistro == null) arreglo[0] = valor;
    else {
      arreglo = memRegistro;
      arreglo[arreglo.length] = valor;
    }

    localStorage.setItem('tipoVehiculo', JSON.stringify(arreglo));
    var combo = document.getElementById('tipoVehiculo');
    combo.innerHTML = combo.innerHTML + '<option>' + valor + '</option>';
  }

  if (typeof Storage !== 'undefined') {
    var valor = nac;
    var memRegistro = JSON.parse(localStorage.getItem('nacionalidad'));
    var arreglo = new Array();

    if (memRegistro == null) arreglo[0] = valor;
    else {
      arreglo = memRegistro;
      arreglo[arreglo.length] = valor;
    }

    localStorage.setItem('nacionalidad', JSON.stringify(arreglo));
    var combo = document.getElementById('nacionalidad');
    combo.innerHTML = combo.innerHTML + '<option>' + valor + '</option>';
  }

  if (typeof Storage !== 'undefined') {
    var valor = tot;
    var memRegistro = JSON.parse(localStorage.getItem('totalPagar'));
    var arreglo = new Array();

    if (memRegistro == null) arreglo[0] = valor;
    else {
      arreglo = memRegistro;
      arreglo[arreglo.length] = valor;
    }

    localStorage.setItem('totalPagar', JSON.stringify(arreglo));
    var combo = document.getElementById('totalPagar');
    combo.innerHTML = combo.innerHTML + '<option>' + valor + '</option>';
  }
  if (typeof Storage !== 'undefined') {
    var valor = totd;
    var memRegistro = JSON.parse(localStorage.getItem('td'));
    var arreglo = new Array();

    if (memRegistro == null) arreglo[0] = valor;
    else {
      arreglo = memRegistro;
      arreglo[arreglo.length] = valor;
    }

    localStorage.setItem('td', JSON.stringify(arreglo));
    var combo = document.getElementById('td');
    combo.innerHTML = combo.innerHTML + '<option>' + valor + '</option>';
  }
  
}

function calculardias()
 {
 var f1= new Date( document.getElementById("fechaRetiro").value);
  var  f2= new Date(document.getElementById("fechadevolucion").value);

  var dias ;


/*
 f1=new Date('2016-07-01');
f2=new Date('2016-08s-01');
*/
let day = f2.getDay();


            dias = f2- f1;  
          dias=  Math.round(dias / (1000 * 60 * 60 * 24));

            document.getElementById("totdias").value= dias;
     
       
 return dias;}


 function calculartarifa()
 {
var tarifa;
var tdv= document.getElementById("tipoVehiculo").value;
var tdvs=document.getElementById("seguro").value;
var totdias=calculardias();
var desc=0;

if (totdias>30 &&totdias< 120) {
  desc=0.15;
  tarifa=(parseFloat(tdv) + parseFloat( tdvs));
  document.getElementById("td").value= tarifa*desc;
  return tarifa*desc;
} else if(totdias>=120 &&totdias<=365) {
  desc=0.25;
  tarifa=(parseFloat(tdv) + parseFloat( tdvs));
  document.getElementById("td").value= tarifa*desc ;
  return tarifa*desc;
 
}else{
  alert("La cantidad de dias esta fuera del rango de 30 a 365 dias");
  return;
}

 }
 function calculartotal()
 {
 
var tp;
var tad=parseFloat(document.getElementById("td").value) ;
var cd=parseFloat(document.getElementById("totdias").value) ;
var desc=0.1; 
tp= tad*cd - ((tad* cd) *desc);
document.getElementById("totalPagar").value=tp;
return tp;
 }