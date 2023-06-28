const c1=document.getElementById("c1")
const c2=document.getElementById("c2")
const c3=document.getElementById("c3")
const c4=document.getElementById("c4")
const c5=document.getElementById("c5")
const c6=document.getElementById("c6")
const c7=document.getElementById("c7")
const c8=document.getElementById("c8")
const c9=document.getElementById("c9")
const c10=document.getElementById("c10")
const c11=document.getElementById("c11")
const c12=document.getElementById("c12")


c1.style.display="none"
c2.style.display="none"
c3.style.display="none"
c4.style.display="none"
c5.style.display="none"
c6.style.display="none"
c7.style.display="none"
c8.style.display="none"
c9.style.display="none"
c10.style.display="none"
c11.style.display="none"
c12.style.display="none"

const btnReset=document.getElementById("btnReset")
const btnSubmit=document.getElementById("btnSubmit")

btnSubmit.style.display="none"
btnReset.style.display="none"

let cont
let sum
let random
let tries


let option=Number(prompt("1.Suma de N numeros.\n2.Promedio de N notas.\n3.Cantidad de numeros ingresados.\n4.Tabla de multiplicacion hasta 30.\n5.Tabla de multiplicacion de cualquier numero.\n6.Cuenta del 1 al 30 con un incremento dado.\n7.Cuenta del 1 al 30 con un incremento dado de manera regresiva.\n10.Ventas del dia.\n11.Promedio de 3 estudiantes.\n12.Cuadro\n13.Estudiantes mayores o menores.\n14.Numero random.\n\nDigite el numero de la actividad que desea realizar:"))
    
switch (option) {
    case 1:
        //1.Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado.
        c1.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberType=document.getElementById("numberType")
            let resultC1=document.getElementById("resultC1")

            
            if (!numberType.value) {
                alert("Escriba un numero")
            }
            else{
                let sum=0
                for (let i = 0; i <= numberType.value; i++) {
                    sum=sum+i
                }
                resultC1.innerHTML="La suma total es: "+sum
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;
    case 2:
        //2.Hacer un programa que pida el nombre de un estudiante y N notas, calcular el promedio de las notas y determinar si el estudiante aprueba o reprueba; (Aprueba con un promedio de 3).  
        c2.style.display="flex"
        sum=0
        cont=1
        let note=-1
        let name=prompt("Digite el nombre del estudiante")
        while (true) {
            note=Number(prompt("Digite la nota"))
            if(note==99){
                break
            }
            else if (note<0 || note>5) {
                alert("Escriba un numero positivo menor que 5 o 99 para salir")
            }
            else{
                cont++
                sum=sum+note
            }
        }
        let resultC2=document.getElementById("resultC2")
        if (cont>1) {
            resultC2.innerHTML=`El promedio final de ${name} es: ${sum/(cont-1)}`
            
        } else {
            resultC2.innerHTML=`El promedio final de ${name} es: ${sum/cont}`
        }
        btnReset.style.display="block"
        
        break;
    case 3:
        //3.Ingrese varios números enteros y muestre la cantidad de números ingresados y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN.
        c3.style.display="flex"

            let resultC3=document.getElementById("resultC3")
            cont=0
            sum=0
            let validate
            
            while (true) {
                validate=prompt("Digite un numero entero: ")
                if (validate=='fin' || validate=='Fin') {
                    break
                }
                else if (isNaN(Number(validate))) {
                    alert("Escriba un numero o Fin para salir")
                }
                else{
                    cont++
                    sum=sum+Number(validate)
                }
            }
            resultC3.innerHTML="La suma es: "+sum+"\nSe ingresaron en total: "+cont+" numeros"
            btnReset.style.display="block"
            
        break;
    case 4:
        //4.realice una tabla de multiplicar con cualquier número ingresado hasta el 30.
        c4.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberMult=document.getElementById("numberMult")
            let resultC4=document.getElementById("resultC4")

            
            if (!numberMult.value || numberMult.value<0) {
                alert("Escriba un numero mayor de 0")
            }
            else{
                for (let i = 1; i <= 30; i++) {
                    resultC4.innerHTML+=`${numberMult.value} * ${i} = ${numberMult.value*i} <br>`
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;
    case 5:
        // 5.Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.
        c5.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberMultDesc=document.getElementById("numberMultDesc")
            let resultC5=document.getElementById("resultC5")

            
            if (!numberMultDesc.value || numberMultDesc.value<0) {
                alert("Escriba un numero mayor de 0")
            }
            else{
                for (let i = 30; i >= 1; i--) {
                    resultC5.innerHTML+=`${numberMultDesc.value} * ${i} = ${numberMultDesc.value*i} <br>`
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;
    case 6:
        // 6.Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado.
        c6.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberInterval=document.getElementById("numberInterval")
            let resultC6=document.getElementById("resultC6")

            
            if (!numberInterval.value || numberInterval.value<0 || numberInterval.value>30) {
                alert("Escriba un numero mayor de 0 pero menor a 30")
            }
            else{
                for (let i = 0; i <= 30; i=i+Number(numberInterval.value)) {
                    if (i==0) {
                        resultC6.innerHTML+=`1<br>`
                    } else {
                        resultC6.innerHTML+=`${i}<br>`
                    }
                    
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;
    case 7:
        // 7.Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.
        c7.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberIntervalDesc=document.getElementById("numberIntervalDesc")
            let resultC7=document.getElementById("resultC7")

            
            if (!numberIntervalDesc.value || numberIntervalDesc.value<0 || numberIntervalDesc.value>30) {
                alert("Escriba un numero mayor de 0 pero menor a 30")
            }
            else{
                for (let i = 30; i >= 0; i=i-Number(numberIntervalDesc.value)) {
                    if(i==0){
                        resultC7.innerHTML+=`1<br>`
                    }
                    else{
                        resultC7.innerHTML+=`${i}<br>`
                    }
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;   
    case 8:
        // 7.Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.
        c7.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberIntervalDesc=document.getElementById("numberIntervalDesc")
            let resultC7=document.getElementById("resultC7")

            
            if (!numberIntervalDesc.value || numberIntervalDesc.value<0 || numberIntervalDesc.value>30) {
                alert("Escriba un numero mayor de 0 pero menor a 30")
            }
            else{
                for (let i = 30; i >= 0; i=i-Number(numberIntervalDesc.value)) {
                    if(i==0){
                        resultC7.innerHTML+=`1<br>`
                    }
                    else{
                        resultC7.innerHTML+=`${i}<br>`
                    }
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;   
    case 9:
        // 7.Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.
        c7.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberIntervalDesc=document.getElementById("numberIntervalDesc")
            let resultC7=document.getElementById("resultC7")

            
            if (!numberIntervalDesc.value || numberIntervalDesc.value<0 || numberIntervalDesc.value>30) {
                alert("Escriba un numero mayor de 0 pero menor a 30")
            }
            else{
                for (let i = 30; i >= 0; i=i-Number(numberIntervalDesc.value)) {
                    if(i==0){
                        resultC7.innerHTML+=`1<br>`
                    }
                    else{
                        resultC7.innerHTML+=`${i}<br>`
                    }
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;   
    case 10:
        // 10.Cree un programa que permite registrar el número de compras que se venden cada día. pedir al usuario cuantos productos va a comprar y registrar el precio unitario, calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general.
        
        c10.style.display="flex"
        let resultC10=document.getElementById("resultC10")
        let compra
        let value
        let total
        let totalDia=0
        cont=1

        while (true) {
            compra=-1
            total=0
            while (!compra || compra<=0 || compra>10) {
                compra=prompt("Digite el numero de productos - mayor a 0 pero menor a 10") 
                if(compra=="x" || compra=="X"){
                    band=true
                    break
                }
                else if(isNaN(compra)){
                    compra=-1
                } 
            }
            if (compra=="X" || compra=="x") {
                break
            } 
            else{
                resultC10.innerHTML+="Cliente #"+cont+"<br>Numero de producto: "+compra+"<br>"
                for (let i = 1; i <= compra; i++) {
                    value=Number(prompt("Digite el valor del producto #"+i+": "))
                    resultC10.innerHTML+="Producto #"+i+": "+value+"<br>"
                    total=total+value
                }
                resultC10.innerHTML+="Total de la compra: "+total+"<br>"
                totalDia=totalDia+total
                cont++
            }
        }
        resultC10.innerHTML+="Total de vental diarias: "+totalDia
        btnReset.style.display="block"
        
        break;   
    case 11:
        // 11.Cree un programa que calcule el promedio de 3 notas para 3 alumnos, el programa debe mostrar lo siguiente:
        // Nombre Alumno #1 Jossy tello
        // Materia: Matemáticas
        // Nota 1 : 4,5
        // Nota 2: 4
        // Nota 3: 3,5
        // Promedio: 4
        // Nombre Alumno #2 Angela Robledo
        // Materia: Física
        // Nota 1 : 4,5
        // Nota 2: 2,5
        // Nota 3: 5
        // Promedio: 4,2

        c11.style.display="flex"
        let resultC11=document.getElementById("resultC11")
        let nombre
        let materia
        let notas
        let totalNotas
        let prom
        cont=1
        for (let i = 1; i <= 3; i++) {
            totalNotas=0
            nombre=""
            while (!nombre) {
                nombre=prompt("Digite el nombre del estudiante: ")
            }
            materia=""
            while (!materia) {
                materia=prompt("Digite el nombre de la materia: ")
            }
            resultC11.innerHTML+="Estudiante: "+nombre+" <br>Materia: "+materia+"<br>"
            for (let j = 1; j <= 3; j++) {
                notas=-1
                while (!notas || notas<0 || notas>5) {
                    notas=parseFloat(prompt("Digite la nota #"+j+": "))
                }
                resultC11.innerHTML+="Nota #"+j+": "+notas+"<br>"
                totalNotas=totalNotas+notas
            }
            prom=totalNotas/3
            resultC11.innerHTML+="Promedio: "+prom+"<br>"
            
            
            
        }
        

        
        btnReset.style.display="block"
        break;   
    case 12:
        // 12.Cree tabla de números del 1 al 15 mínimo en HTML. la salida se debe ver así:
        c12.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberRows=document.getElementById("numberRows")
            let resultC12=document.getElementById("resultC12")
            let text
            
            
            if (!numberRows.value || numberRows.value<15) {
                alert("Escriba un numero mayor de 15")
            }
            else{
                // for (let i = 1; i <= numberRows.value; i++) {
                //     text=String(i)
                    
                //     if(i%5==0 ){
                //         resultC12.innerHTML+='<div class="cuadro">'+text+'</div> <br>'
                //     }
                //     else {
                //         resultC12.innerHTML+='<div class="cuadro">'+text+'</div>'
                //     }
                    
                // }

                cont=1
                while (cont<=numberRows.value) {
                    text=String(cont)
                    if(cont%5==0 ){
                        resultC12.innerHTML+='<div class="cuadro">'+text+'</div> <br>'
                    }
                    else {
                        resultC12.innerHTML+='<div class="cuadro">'+text+'</div>'
                    }
                    
                    cont++
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;   
    case 13:
        // 13.Cree un programa que pida la edad a 10 estudiantes y determine cuántos son menores de edad y cuales son mayores de edad.
        let estudiante
        let mayores=0
        let menores=0
        cont=1
        // for (let i = 1; i <= 10; i++) {
        //     estudiante=prompt("Digite la edad del estduainte #"+i)
        //     while (!estudiante || estudiante<0 || estudiante>100) {
        //         estudiante=prompt("Escriba un numero mayor de 0 pero menor a 100")
        //     }
        //     if(estudiante>=18){
        //         mayores++
        //     }
        //     else{
        //         menores++
        //     }
        // }
        


        
        while (cont<=10) {
            estudiante=prompt("Digite la edad del estduainte #"+cont)
            while (!estudiante || estudiante<0 || estudiante>100) {
                estudiante=prompt("Escriba un numero mayor de 0 pero menor a 100")
            }
            if(estudiante>=18){
                mayores++
            }
            else{
                menores++
            }
            cont++
        }
        alert("Mayores: "+mayores+"----"+"Menores: "+menores)
        location.reload()
        break; 
    case 14:
        // 14.Utiliza la función Math.ramdon() para generar un número aleatorio y compararlo con el que el usuario digite. tienes 3 intentos para acertar. 

        random=Math.round(Math.random()*9)+1
        console.log(random)
        tries=3
        let numberRandom
        alert("Debe hallar el numero random")
        // for (let i = 0; i < 3; i++) {
        //     numberRandom=prompt("Digite un numero")
        //     while (!numberRandom || numberRandom<0 || numberRandom>10) {
        //         numberRandom=prompt("Escriba un numero mayor de 0 pero menor a 10")
        //     }
        //     if(numberRandom==random){
        //         alert("Le atino!")
        //         break
        //     }
        //     else{
        //         tries--
        //         if (tries==0) {
        //             alert("Perdiste el numero era "+random)
        //             break
        //         }
        //         else{
        //             alert("No atinaste tiene "+tries+" intentos mas")
        //         }
                
        //     }
        // }


        
        while (tries>0) {
            numberRandom=prompt("Digite un numero")
            while (!numberRandom || numberRandom<0 || numberRandom>10) {
                numberRandom=prompt("Escriba un numero mayor de 0 pero menor a 10")
            }
            if(numberRandom==random){
                alert("Le atino!")
                break
            }
            else{
                tries--
                if (tries==0) {
                    alert("Perdiste el numero era "+random)
                    break
                }
                else{
                    alert("No atinaste tiene "+tries+" intentos mas")
                }
            }
        }
        location.reload()
        break;     
    default:
        alert("No seleccionaste una opcion correcta!!")
        break;
}
btnReset.addEventListener('click',()=>{
    location.reload()
})