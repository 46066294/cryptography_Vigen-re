/**
 * Created by Marc Cano on 14/06/2016.
 */


//create a vigenere table
function vigenere(){
    console.log("***Created by Marc Cano on 14/06/2016***\n")
    console.log("# -------vigenere table--------");
    var alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var tableroVigenere = "";
    var desdoble = 0;
    var row = [];

    for(var cont = 0; cont < alf.length; cont++) {
        desdoble = cont;
        for (var i = 0; i < alf.length; i++) {
            tableroVigenere = tableroVigenere.concat(alf[desdoble]);
            desdoble++;
            if(desdoble == 26){
                desdoble = 0;
            }
        }

        //create rows with different alphabets
        row[cont] = tableroVigenere;
        tableroVigenere = "";
    }

    //show a vigenere table in console
    for(var x = 0; x < row.length; x++){
        console.log(x + "\t" + row[x]);
    }

    //link with HTML5
    var d = document.getElementById("inputData");
    var p = document.getElementById("inputPass");
    var data = d.value.toUpperCase();
    var pass = p.value.toUpperCase();

    //key modification
    pass = pass.concat(pass).concat(pass).concat(pass).concat(pass).concat(pass);
    var arrayEncrypt = data.split("");
    var utilPass = pass.substring(0, arrayEncrypt.length);
    var clave = utilPass.split("");

    console.log("\n--Data:");
    console.log(arrayEncrypt);
    console.log("\n--Pass:");
    console.log(clave);
    console.log("\n...start decrypt\n");

    //data link
    var rowIndice;
    var decrypt = "";
    for(var i = 0; i < arrayEncrypt.length; i++){
        var letra = clave[i];
        var letraIndxOf = utilPass.indexOf(letra);
        console.log("\n====================================================================================lap:" + i);
        console.log("--index: " + letraIndxOf + "\n--character: " + letra);
        var indexUtil = utilPass.indexOf(letra);
        utilPass = utilPass.replace(utilPass.charAt(indexUtil), "_");
        console.log("--check pass replace:\n\t" + utilPass);
        //console.log(letra);
        for(var j = 0; j < row.length; j++){
            if (row[j].startsWith(letra)){
                rowIndice = j;
                console.log("--searching in row: " + row[rowIndice]);
                break;
            }
        }

        //decrypt text
        var numDescifrado;
        var letraCifrada = arrayEncrypt.join("").charAt(letraIndxOf);//relacion directa entre clave y mensaje encriptado
        console.log("--encrypted character: " + letraCifrada + "\n\t-type: " + typeof(letraCifrada) + "\n\t-row index: " + rowIndice);
        for(var y = 0; y < row[rowIndice].length; y++){
            if(letraCifrada == row[rowIndice][y]){
                numDescifrado = y;
                //console.log("letraCif: " + letraCifrada + " row[y]: " + row[rowIndice][y]);
                decrypt = decrypt.concat(alf[numDescifrado]);
            }
        }
    }

    console.log(row);
    console.log("\n\nDECRYPT TEXT:\n\t" + decrypt);

    document.getElementById("showdecr").innerHTML = decrypt;


}//end method