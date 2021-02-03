var datos = [
    ["Aayla Secura", "aayla-secura", "databank_aaylasecura_01_169_39a65af2.jpeg"],
    ["Ahsoka Tano", "ahsoka-tano", "Ahsoka-Tano_aa51fe5c.jpeg"],
    ["Anakin Skywalker", "anakin-skywalker", "Anakin-Skywalker_d3330724.jpeg"],
    ["Asajj Ventress", "asajj-ventress", "Asajj-Ventress_d5ca9413.jpeg"],
    ["Baze Malbus", "baze-malbus", "baze-malbus_467fe1ea.jpeg"],
    ["BB-8", "bb-8", "ep7_ia_162323_j_077412a0.jpeg"],
    ["BB-9E", "bb-9e", "bb-9e_029443ae.jpeg"],
    ["Boba Fett", "boba-fett", "Boba-Fett_61fdadfd.jpeg"],
    ["Bodhi Rook", "bodhi-rook", "bodhi-rook_1d3c1b58.jpeg"],
    ["C-3PO", "c-3po", "C-3PO-See-Threepio_68fe125c.jpeg"],
    ["Capitán Cassian Andor", "capitan-cassian-andor", "cassian-andor-main_216e7233.jpeg"],
    ["Capitán Clon Rex", "capitan-clon-rex", "databank_clonecaptainrex_01_169_139f394c.jpeg"],
    ["Capitán Phasma", "capitan-phasma", "ep7_ia_38369_0bbb2aae.jpeg"],
    ["Chewbacca", "chewbacca", "chewie-db_2c0efea2.jpeg"],
    ["Chirrut Îmwe", "chirrut-imwe", "chirrut-imwe_5ed7457a.jpeg"],
    ["Chopper", "chopper", "chopper-databank_916fc2ff.jpeg"],
    ["Conde Dooku", "conde-dooku", "Count-Dooku_4f552149.jpeg"],
    ["Darth Maul", "darth-maul", "Darth-Maul_632eb5af.jpeg"],
    ["Darth Vader", "darth-vader", "Darth-Vader_6bda9114.jpeg"],
    ["Director Orson Krennic", "director-orson-krennic", "orson-krennic_4c6477e2.jpeg"],
    ["El Inquisidor", "el-inquisidor", "The-Inquisitor_38078668.jpeg"],
    ["Embo", "embo", "databank_embo_01_169_60b97902.jpeg"],
    ["Emperador Palpatine/Darth Sidious", "emperador-palpatine-darth-sidious", "Emperor-Palpatine_7ac4a10e.jpeg"],
    ["Ezra Bridger", "ezra-bridger", "Ezra-Bridger_acfb45f6.jpeg"],
    ["Finn", "finn", "x551_tea0010_denoised3_16int_8a29e084.jpeg"],
    ["Galen Erso", "galen-erso", "galen-erso-main_d1489952.jpeg"],
    ["Garazeb Zeb Orrelios", "zeb-orrelios", "Zeb-Retina_7e82e1c0.jpeg"],
    ["General Grievous", "general-grievous", "General-Grievous_c9df9cb5.jpeg"],
    ["General Hux", "general-hux", "ep7_ia_22591_r_8396f2d2.jpeg"],
    ["Han Solo", "han-solo", "Han-Solo_1d08eb2e.jpeg"],
    ["Hera Syndulla", "hera-syndulla", "Hera-Retina_ea2cb12d.jpeg"],
    ["Jabba el Hutt", "jabba-el-hutt", "Jabba-The-Hutt_b5a08a70.jpeg"],
    ["Jango Fett", "jango-fett", "databank_jangofett_01_169_884cefab.jpeg"],
    ["Jar Jar Binks", "jar-jar-binks", "databank_jarjarbinks_01_169_c70767ab.jpeg"],
    ["Jyn Erso", "jyn-erso", "jyn-erso_ccf70c46.jpeg"],
    ["K-2SO", "k-2so-kay-tuesso", "k-2s0-main-b_73a8fed8.jpeg"],
    ["Kanan Jarrus", "kanan-jarrus", "Kanan-Jarrus_30dc50dd.jpeg"],
    ["Kylo Ren", "kylo-ren", "des0190_462d9660.jpeg"],
    ["Lando Calrissian", "lando-calrissian", "Lando-Calrissian_a679fe1e.jpeg"],
    ["Luke Skywalker", "luke-skywalker", "Luke-Skywalker_dd9c9f9b.jpeg"],
    ["Mace Windu", "mace-windu", "Mace-Windu_b35242e5.jpeg"],
    ["Obi-Wan Kenobi", "obi-wan-kenobi", "Obi-Wan-Kenobi_6d775533.jpeg"],
    ["Padmé Amidala", "padme-amidala", "Padme-Amidala_05d50c8a.jpeg"],
    ["Plo Koon", "plo-koon", "databank_plokoon_01_169_92e6679c.jpeg"],
    ["Poe Dameron", "poe-dameron", "ep7_ia_162336_f9e4b6c0.jpeg"],
    ["Princesa Leia Organa", "princesa-leia-organa", "Princess-Leia-Organa_d7761ff5.jpeg"],
    ["Qui-Gon Jinn", "qui-gon-jinn", "Qui-Gon-Jinn_d89416e8.jpeg"],
    ["R2-D2", "r2-d2", "R2-D2_41dacaa9.jpeg"],
    ["Rey", "rey", "des1070_jpeg_4k_pub_1dc59ce6.jpeg"],
    ["Rose", "rose", "rose_1a4e2232.jpeg"],
    ["Sabine Wren", "sabine-wren", "Sabine-Retina_3322c32b.jpeg"],
    ["Saesee Tiin", "saesee-tiin", "databank_saeseetiin_01_169_c9a8a41c.jpeg"],
    ["Savage Opress", "savage-opress", "databank_savageopress_01_169_02e79834.jpeg"],
    ["Saw Gererra", "saw-gererra", "saw-gerrera_02a2f516.jpeg"],
    ["Shaak Ti ", "shaak-ti", "shaak_ti_9523e7c7.jpeg"],
    ["Teedo", "teedo", "ep7_ia_30985_r_fc565022.jpeg"],
    ["Yoda", "yoda", "Yoda-Retina_2a7ecc26.jpeg"]
];


/* 
1. Posa tots els personatges en un array. Cada element de l'array és a la seva vegada un array de tres elements.
Recorre (programàticament) tot l'array, i mostra tota la informació per pantalla. 
*/
function mostraElements() {
    datos.forEach(element => {
        var s = "";
        element.forEach(subelement => {
            s += "\"" + subelement + "\"" + ";";
        });
        console.log(s);
    });
}

/* 
2. Disposem de 57 elements. Construeix (createElement()) una taula HTML amb tota la informació (en principi 3 columnes i 19 files, 3x19=57). En la cel.la visualitzes la foto.
 */

function crea_taula() {
    var taula = document.createElement("table");
    var fila = document.createElement("tr");
    var i = 1;
    for (let index = 0; index < datos.length; index++) {
        var cela = document.createElement("td");
        var img = document.createElement("img");
        img.src = "./img/" + datos[index][2];
        img.alt = datos[index][0];
        cela.appendChild(img);
        cela.addEventListener("mouseover", function() {
            document.getElementById("info-nom").value = datos[index][0];
        });
        cela.addEventListener("click", function() {
            var x = transforma_personatge(datos[index][1]);
            document.getElementById("frame").src = "https://starwars.fandom.com/wiki/" + x;
        });
        fila.appendChild(cela);
        taula.appendChild(fila);
        if (i == 3) {
            fila = document.createElement("tr");
            i = 1;
        } else {
            i++;
        }
    }
    document.getElementById("contenidor-fotos").appendChild(taula);
}

/* 
3. Quan passem per damunt de la foto mostra en una casella informativa el nom del personatge. L'event l'has d'assignar amb addEventListener (els has d'assignar tots amb un bucle for).
*/

/* 
4. De la mateixa manera, assignaràs un altre event: quan facis click sobre una imatge carregaràs en un frame el contingut de la url corresponent al personatge.
*/

function transforma_personatge(personatge) {
    var nou_personatge = "";
    var arr = personatge.split("-");
    arr.forEach(element => {
        nou_personatge += element[0].toUpperCase() + element.slice(1);
        if (arr.indexOf(element) != arr.length - 1) {
            nou_personatge += "_";
        }
    });
    return nou_personatge;
}

/* 
5. En una caixa de text pots escriure lliurement. A mida que vagis escrivint es busca els personatges que compleixen amb el criteri de cerca (sense tenir en compte majúscules/minúscules). S'encerclen amb un contorn i amb un color de fons les imatges (cel.les) que compleixen el criteri. Per exemple, si escrius darth hi ha dues imatges que han de quedar seleccionades.
*/

function cerca() {
    var cerca = document.getElementById("cercador").value;
    var patt = new RegExp("^" + cerca, "i");
    var img = document.getElementsByTagName("img");

    for (let index = 0; index < img.length; index++) {
        if (patt.test(img[index].alt)) {
            //img[index].style.border = "6px solid red";
            img[index].classList.add("blinker");
        } else {
            //img[index].style.border = "6px solid white";
            img[index].classList.remove("blinker");
        }
        if (cerca == "") {
            //img[index].style.border = "6px solid white";
            img[index].classList.remove("blinker");
        }
    }
}