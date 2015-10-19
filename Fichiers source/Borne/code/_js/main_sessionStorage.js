 //Session Storage
        


        function reloadpage(){
            sessionStorage.clear();
            sessionStorage.gareDepart="Namur";
            sessionStorage.typeTrajet="Aller Simple";
            sessionStorage.typeTarif="Tarif Standard";
            sessionStorage.nbrSeniorExcu="0";
            sessionStorage.nbrAdultesExcu="0";
            sessionStorage.nbrJeunesExcu="0";
            sessionStorage.nbrEnfants="0";
            sessionStorage.nbrSenior="0";
            sessionStorage.nbrAdultes="0";
            sessionStorage.nbrJeunes="0";
            sessionStorage.nbrEnfants="0";
            sessionStorage.nbrAnimaux="0";
            sessionStorage.nbrVelo="0";
            sessionStorage.gareArrivee=" ";
            sessionStorage.gareArriveeRecap=" ";
            // sessionStorage.gareDepart="Namur";
            // sessionStorage.gareDepartRecap="Namur";
            // sessionStorage.gareDepartExcu="Namur";
            // sessionStorage.gareDepartRecapExcu="Namur";



            document.getElementById('depart').value= "Namur";
            document.getElementById('search-bar').value= "";
            document.getElementById('arrivee').value= "";
            document.getElementById('search-bar-2').value= "";


            document.getElementById('departExcu').value= "Namur";
            document.getElementById('search-bar-Excu').value= "";
            document.getElementById('arriveeExcu').value= "";
            document.getElementById('search-barExcu-2').value= "";



            document.getElementById('nbrEquipageJeune').innerHTML="0";
            document.getElementById('nbrEquipageEnfant').innerHTML="0";
            document.getElementById('nbrEquipageAdulte').innerHTML="0";
            document.getElementById('nbrEquipageSenior').innerHTML="0";
            document.getElementById('supprEquipageJeune').style.display = "none";
            document.getElementById('supprEquipageEnfant').style.display = "none";
            document.getElementById('supprEquipageAdulte').style.display = "none";
            document.getElementById('supprEquipageSenior').style.display = "none";

            document.getElementById('nbrEquipageJeuneExcu').innerHTML="0";
            document.getElementById('nbrEquipageEnfantExcu').innerHTML="0";
            document.getElementById('nbrEquipageAdulteExcu').innerHTML="0";
            document.getElementById('nbrEquipageSeniorExcu').innerHTML="0";
            document.getElementById('supprEquipageJeuneExcu').style.display = "none";
            document.getElementById('supprEquipageEnfantExcu').style.display = "none";
            document.getElementById('supprEquipageAdulteExcu').style.display = "none";
            document.getElementById('supprEquipageSeniorExcu').style.display = "none";
        }
        //Gares
        
        function sessionStorage_gare2(elmnt){    
            sessionStorage.gareArrivee=document.getElementById(elmnt).innerHTML;
            sessionStorage.gareArriveeRecap=document.getElementById(elmnt).innerHTML;
            if(sessionStorage.gareDepart=document.getElementById('search-bar').value==""){
                sessionStorage.gareDepart="Namur";
            }else{
                sessionStorage.gareDepart=document.getElementById('search-bar').value;
            }

            if(sessionStorage.gareDepartRecap=document.getElementById('search-bar').value==""){
                sessionStorage.gareDepartRecap="Namur";
            }else{
                sessionStorage.gareDepartRecap=document.getElementById('search-bar').value;
            }
            storage();
        }
        function sessionStorage_excu(elmnt){    
            sessionStorage.gareArriveeExcu=document.getElementById(elmnt).innerHTML;
            sessionStorage.gareArriveeExcu2=document.getElementById(elmnt).innerHTML;
            if(sessionStorage.gareDepartExcu=document.getElementById('search-bar').value==""){
                sessionStorage.gareDepartExcu="Namur";
            }else{
                sessionStorage.gareDepartExcu=document.getElementById('search-bar').value;
            }

            if(sessionStorage.gareDepartRecapExcu=document.getElementById('search-bar').value==""){
                sessionStorage.gareDepartRecapExcu="Namur";
            }else{
                sessionStorage.gareDepartRecapExcu=document.getElementById('search-bar').value;
            }
            storage();
        }

        //Equipage
        function sessionStorage_equipage(){
            sessionStorage.nbrEnfants=document.getElementById('nbrEquipageEnfant').innerHTML + " Enfant(s)";
            sessionStorage.nbrJeunes=document.getElementById('nbrEquipageJeune').innerHTML + " Jeune(s)";
            sessionStorage.nbrAdultes=document.getElementById('nbrEquipageAdulte').innerHTML + " Adulte(s)";
            sessionStorage.nbrSenior=document.getElementById('nbrEquipageSenior').innerHTML + " Sénior(s)";
            sessionStorage.nbrAnimaux=document.getElementById('nbrAnimaux').innerHTML + " Animal(aux)";
            sessionStorage.nbrVelo=document.getElementById('nbrVelo').innerHTML + " Vélo(s)";
        }
        function sessionStorage_equipage_excu(){
            sessionStorage.nbrEnfantsExcu=document.getElementById('nbrEquipageEnfantExcu').innerHTML + " Enfant(s)";
            sessionStorage.nbrJeunesExcu=document.getElementById('nbrEquipageJeuneExcu').innerHTML + " Jeune(s)";
            sessionStorage.nbrAdultesExcu=document.getElementById('nbrEquipageAdulteExcu').innerHTML + " Adulte(s)";
            sessionStorage.nbrSeniorExcu=document.getElementById('nbrEquipageSeniorExcu').innerHTML + " Sénior(s)";
        }

        //Réduction de 50%
        function sessionstorageReduc1(){
            sessionStorage.typeTarif="Réduction 50%";
            document.getElementById('ReducValid').innerHTML = "Réduction 50%";
        }

        //Réduction de 75%
        function sessionstorageReduc2(){
            sessionStorage.typeTarif="Réduction 75%";
            document.getElementById('ReducValid').innerHTML = "Réduction 75%";
        }

        //Réduction de 50%
        function sessionstorageReduc3(){
            sessionStorage.typeTarifExcu="Réduction 50%";
            document.getElementById('ReducValidExcu').innerHTML = "Réduction 50%";
        }

        //Réduction de 75%
        function sessionstorageReduc4(){
            sessionStorage.typeTarifExcu="Réduction 75%";
            document.getElementById('ReducValidExcu').innerHTML = "Réduction 75%";
        }


        function sessionStorageAbo(elemnt){
            sessionStorage.dureeRenewAbo=document.getElementById(elemnt).innerHTML;
            storage();
        }

        function sessionStoragePass(elemnt){
            sessionStorage.typePass=document.getElementById(elemnt).innerHTML;
            storage();
        }
        function sessionStoragePassJump(elemnt){
            sessionStorage.typePassJump=document.getElementById(elemnt).innerHTML;
            storage();
        }

        function sessionstorage_gares(){  
            if(sessionStorage.gareDepart=document.getElementById('search-bar').value==""){
                sessionStorage.gareDepart="Namur";
            }else{
                sessionStorage.gareDepart=document.getElementById('search-bar').value;
            }

            if(sessionStorage.gareDepartRecap=document.getElementById('search-bar').value==""){
                sessionStorage.gareDepartRecap="Namur";
            }else{
                sessionStorage.gareDepartRecap=document.getElementById('search-bar').value;
            }
            

            if(sessionStorage.gareDepartExcu=document.getElementById('search-bar').value==""){
                sessionStorage.gareDepartExcu="Namur";
            }else{
                sessionStorage.gareDepartExcu=document.getElementById('search-bar').value;
            }

            if(sessionStorage.gareDepartRecapExcu=document.getElementById('search-bar').value==""){
                sessionStorage.gareDepartRecapExcu="Namur";
            }else{
                sessionStorage.gareDepartRecapExcu=document.getElementById('search-bar').value;
            }

            sessionStorage.gareArrivee=document.getElementById('search-bar-2').value;
            sessionStorage.gareArriveeRecap=document.getElementById('search-bar-2').value;

            sessionStorage.gareArriveeExcu=document.getElementById('search-bar-Excu').value;
            sessionStorage.gareArriveeExcu2=document.getElementById('search-bar-Excu').value;

            storage();
        }

        function storage(){
            if(typeof sessionStorage!='undefined') {
                if('dureeRenewAbo' in sessionStorage){
                     document.getElementById('dureeRenewAbo').innerHTML = sessionStorage.getItem('dureeRenewAbo');
                }
                if('gareDepart' in sessionStorage){
                     document.getElementById('gareDepart').innerHTML = sessionStorage.getItem('gareDepart');
                }
                if('gareDepartRecap' in sessionStorage){
                     document.getElementById('gareDepartRecap').innerHTML = sessionStorage.getItem('gareDepartRecap');
                }
                if('gareDepartExcu' in sessionStorage){
                     document.getElementById('gareDepartExcu').innerHTML = sessionStorage.getItem('gareDepartExcu');
                }
                if('gareDepartRecapExcu' in sessionStorage){
                     document.getElementById('gareDepartRecapExcu').innerHTML = sessionStorage.getItem('gareDepartRecapExcu');
                }
                if('typeTarifExcu' in sessionStorage){
                     document.getElementById('typeTarifExcu').innerHTML = sessionStorage.getItem('typeTarifExcu');
                }
                if('typeTarif' in sessionStorage){
                     document.getElementById('typeTarif').innerHTML = sessionStorage.getItem('typeTarif');
                }
                if('typeTrajet' in sessionStorage){
                     document.getElementById('typeTrajet').innerHTML = sessionStorage.getItem('typeTrajet');
                }
                if('gareArrivee' in sessionStorage){
                     document.getElementById('gareArrivee').innerHTML = sessionStorage.getItem('gareArrivee');
                }
                // if('gareArrivee' in sessionStorage){
                //      document.getElementById('gareArrivee').innerHTML = sessionStorage.getItem('gareArrivee');
                // }
                if('gareArriveeRecap' in sessionStorage){
                     document.getElementById('gareArriveeRecap').innerHTML = sessionStorage.getItem('gareArriveeRecap');
                }
                if('gareArriveeExcu' in sessionStorage){
                     document.getElementById('gareArriveeExcu').innerHTML = sessionStorage.getItem('gareArriveeExcu');
                }
                if('gareArriveeExcu2' in sessionStorage){
                     document.getElementById('gareArriveeExcuRecap').innerHTML = sessionStorage.getItem('gareArriveeExcu2');
                }
                if('typePass' in sessionStorage){
                     document.getElementById('typePass').innerHTML = sessionStorage.getItem('typePass');
                }
                if('typePassJump' in sessionStorage){
                     document.getElementById('typePassJump').innerHTML = sessionStorage.getItem('typePassJump');
                }
                // if('gareArriveeExcu' in sessionStorage){
                //     document.getElementById('gareArriveeExcu').innerHTML = sessionStorage.getItem('gareArriveeExcu');
                // }
                if(parseInt(sessionStorage.getItem('nbrEnfants')) != 0){
                    document.getElementById('nbrEnfants').innerHTML = sessionStorage.getItem('nbrEnfants');
                }
                if(parseInt(sessionStorage.getItem('nbrJeunes')) != 0){
                    document.getElementById('nbrJeunes').innerHTML = sessionStorage.getItem('nbrJeunes');
                }
                if(parseInt(sessionStorage.getItem('nbrAdultes')) != 0){
                    document.getElementById('nbrAdultes').innerHTML = sessionStorage.getItem('nbrAdultes');
                }
                if(parseInt(sessionStorage.getItem('nbrSenior')) != 0){
                    document.getElementById('nbrSenior').innerHTML = sessionStorage.getItem('nbrSenior');
                }
                if(parseInt(sessionStorage.getItem('nbrVelo')) != 0){
                    document.getElementById('nbrVeloRecap').innerHTML = sessionStorage.getItem('nbrVelo');
                }
                if(parseInt(sessionStorage.getItem('nbrAnimaux')) != 0){
                    document.getElementById('nbrAnimauxRecap').innerHTML = sessionStorage.getItem('nbrAnimaux');
                }





                if(parseInt(sessionStorage.getItem('nbrEnfantsExcu')) != 0){
                    document.getElementById('nbrEnfantsExcu').innerHTML = sessionStorage.getItem('nbrEnfantsExcu');
                }
                if(parseInt(sessionStorage.getItem('nbrJeunesExcu')) != 0){
                    document.getElementById('nbrJeunesExcu').innerHTML = sessionStorage.getItem('nbrJeunesExcu');
                }
                if(parseInt(sessionStorage.getItem('nbrAdultesExcu')) != 0){
                    document.getElementById('nbrAdultesExcu').innerHTML = sessionStorage.getItem('nbrAdultesExcu');
                }
                if(parseInt(sessionStorage.getItem('nbrSeniorExcu')) != 0){
                    document.getElementById('nbrSeniorExcu').innerHTML = sessionStorage.getItem('nbrSeniorExcu');
                }
            } 
        }












