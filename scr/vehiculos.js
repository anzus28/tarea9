function mostrarTodo(){
    var autoSeleccionado = document.getElementById('tipoVehiculo');
    
    
    if(autoSeleccionado.value == '10.45'){
        document.getElementById('img1').src = "images/Compacto1.png";
        document.getElementById('img2').src = 'images/Compacto2.png';
        document.getElementById('img3').src = 'images/Compacto3.png';
    }else if(autoSeleccionado.value == '15.50'){
    
        document.getElementById('img1').src = "images/Mediano1.png";
        document.getElementById('img2').src = 'images/Mediano2.png';
        document.getElementById('img3').src = 'images/Mediano3.png';
    }else if(autoSeleccionado.value == '25.25'){
    
        document.getElementById('img1').src = "images/TodoTerreno1.png";
        document.getElementById('img2').src = 'images/TodoTerreno2.png';
        document.getElementById('img3').src = 'images/TodoTerreno3.png';
    }else if(autoSeleccionado.value == '20.30'){
    
        document.getElementById('img1').src = "images/Familiar1.png";
        document.getElementById('img2').src = 'images/Familiar2.png';
        document.getElementById('img3').src = 'images/Familiar3.png';
    }
    
    
    
    
    
    }