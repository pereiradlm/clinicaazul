//se define el lugar de origen de los datos
const sheetID = '1Vpgzg3fC-9sbZDV_2KyXyBVgU43JlOkxUxcyT9E8pXg';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'especialidades';
const query = encodeURIComponent('select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];

const output = document.getElementById('principal');
const div = document.createElement('div');

//se solicitan los datos y se pasan a json para incorporar al sitio
function especialidades(){
    console.log('ready');
    fetch(url)
    .then(res => res.text())
    .then(rep =>{
        //console.log(rep);
        const jsData = JSON.parse(rep.substring(47).slice(0,-2));
        //console.log(jsData);
        const colz = [];
        jsData.table.cols.forEach((heading)=>{
            if(heading.id) {
                colz.push(heading.id.toLowerCase().replace(/\s/g,''));
            }
        })
        jsData.table.rows.forEach((main)=>{
            const row = {};
            colz.forEach((ele,ind)=>{
                //console.log(ele);
                row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
            })
            data.push(row);
        })
        output.innerHTML = '';
        maker(data);
        //console.log(data);
        })
}

//se generan las tarjetas por especialidad al recorrer los datos
function maker(json){
    const div = document.createElement('div');
    div.className = "especialidades";
    
    let titulo = document.createElement('p');
    titulo.innerHTML = '<b class="destacado">Especialidades</b>';
    output.append(titulo);
    output.append(div);

    json.forEach((row)=>{
        //console.log(row);
        const tarjeta = document.createElement('div');
        tarjeta.className = "item-esp";

        const frente = document.createElement('div');
        const esp = document.createElement('p');
        esp.textContent = row['a'];
        
        const fondo = document.createElement('img');
        fondo.src = "img/medicina.svg";
        frente.className = "tarjeta frente";
        frente.append(esp);
        frente.append(fondo);
        tarjeta.append(frente); 
        
        const medicos = document.createElement('div');
        medicos.className = "tarjeta fondo";
        medicos.innerHTML = '<p><b>' + row['a'] + '</b></p><p>' + row['b'] + '</p><p>' + row['c'] + '</p><p>' + row['d'] + '</p><p>' + row['e'] + '</p><p>' + row['f'] + '</p>';
        tarjeta.append(medicos);
        
        div.append(tarjeta);
    })
}
