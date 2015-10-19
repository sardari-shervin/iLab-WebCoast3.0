$(document).ready(function(){

	$('a').click(function(event){
	    event.preventDefault();
	});

    $('.btn--sup').click(function(){
    	$('.container--supp').css({
    		'-webkit-animation':'moveFromRightToPay .6s ease both',
    		'animation':'moveFromRightToPay .6s ease both',
    	})
    });

    


    // MORGANE ANIMATIONS ENTRE LES PAGES
    var trajet = false;
        options = false;
        recap = false;
        abo = false;
        aboOptions=false;
        aboRecap=false;
        pass=false;
        pass=false;
        pass_jump=false;
        pass_recap=false;
        pass_jump_recap=false;
        return_jump=false,
        excu=false;
        excu_options=false;
        excu_recap=false;



        // BTN HOME
        $('.home').click(function(){
            $('.container--accueil').css({
                '-webkit-animation':'moveFromLeft .6s ease both',
                'animation':'moveFromLeft .6s ease both'
            });
            $('.title').text('Bienvenue');
            trajet = false;
            options = false;
            recap = false;
            abo = false;
            aboOptions=false;
            aboRecap=false;
            pass=false;
            pass=false;
            pass_jump=false;
            pass_recap=false;
            pass_jump_recap=false;
            excu=false;
            excu_options=false;
            excu_recap=false;

            setTimeout(
                function(){
                    $('.containerNotHome, .footer').css({
                    '-webkit-animation':'moveToRight .6s ease both',
                    'animation':'moveToRight .6s ease both'
                    });
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToRightToPay .6s ease both',
                        'animation':'moveToRightToPay .6s ease both'
                    });
                    reloadpage();
            }, 400);
        });
        $('.homeBis').click(function(){
            $('.container--accueil').css({
                '-webkit-animation':'moveFromLeft .6s ease both',
                'animation':'moveFromLeft .6s ease both'
            });
            $('.title').text('Bienvenue');
            trajet = false;
            options = false;
            recap = false;
            abo = false;
            aboOptions=false;
            aboRecap=false;
            pass=false;
            pass=false;
            pass_jump=false;
            pass_recap=false;
            pass_jump_recap=false;
            excu=false;
            excu_options=false;
            excu_recap=false;

            setTimeout(
                function(){
                    $('.containerNotHome, .footer').css({
                    '-webkit-animation':'moveToRight .6s ease both',
                    'animation':'moveToRight .6s ease both'
                    });
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToRightToPay .6s ease both',
                        'animation':'moveToRightToPay .6s ease both'
                    });
                    $('#retourAccueil').css({
                        'display':'none'
                    });
                    reloadpage();
            }, 400);
        });

       //Accueil vers billet standard
        $('#btnBilletStandart').click(function(){
            storage();
                $('.title').text('Billet');
                $('.container--accueil').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both'
                });
                $('.container--billet--trajet').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                $('.footer').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                trajet=true;
        });
        //Accueil vers ABONEMENT
        $('#btnAbo').click(function(){
            storage();
                $('.title').text('Abonnement');
                $('.container--accueil').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both'
                });

                $('.container--abo--accueil').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                $('.footer').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                $('.footer--btn__suiv').css({
                    '-webkit-animation':'apparitionSuiv .6s ease both',
                    'animation':'apparitionSuiv .6s ease both'
                });
                abo = true;
        });

        //Accueil vers PASS
        $('#btnPass').click(function(){
            storage();
                $('.title').text('Pass');
                $('.container--accueil').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both'
                });

                $('.container--pass--accueil').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                $('.footer').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                pass = true;
        });

        //Accueil vers EXCU
        $('#btnExcu').click(function(){
            storage();
                $('.title').text('B-excursions');
                $('.container--accueil').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both'
                });

                $('.container--excu--trajet').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                $('.footer').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                excu = true;
        });

        

        //BILLET
        //bouton des gares vers options
        $('.listeGareBtn').click(function(){
            

            $('.container--billet--trajet').css({
                '-webkit-animation':'moveToLeft .6s ease both',
                'animation':'moveToLeft .6s ease both'
            });
            $('.container--billet--options').css({
                '-webkit-animation':'moveFromRight .6s ease both',
                'animation':'moveFromRight .6s ease both'
            });
            $('.footer--btn__suiv').css({
                '-webkit-animation':'apparitionSuiv .6s ease both',
                'animation':'apparitionSuiv .6s ease both'
            });storage();
            options = true;
            trajet = false;
        });
        // apparition REDUC
        $('.btnReduc').click(function(){
            storage();
            $('.container--reduc').css({
                    '-webkit-animation':'moveFromRightToPay .6s ease both',
                    'animation':'moveFromRightToPay .6s ease both'
                });
            $('input[name=tarifStandart]').prop('checked',false)
        });

        //disparition de REDUC quand on clique sur un type de réduction
        $('.btn_reduc').click(function(){
            storage();
            $('.container--reduc').css({
                    '-webkit-animation':'moveToRightToPay .6s ease both',
                    'animation':'moveToRightToPay .6s ease both'
                });

        });
        
        //disparition REDUC
        $('.btnStandard').click(function(){
            storage();
            $('.container--reduc').css({
                    '-webkit-animation':'moveToRightToPay .6s ease both',
                    'animation':'moveToRightToPay .6s ease both'
            });
            $('.btnReduc').attr('checked', false)
            $('input[name=tarifStandart]').prop('checked',true)
        });
        //apparition supplement
        $('.btn--sup').click(function(){
            storage();
            $('.liste--supp').css({
                    '-webkit-animation':'moveFromBottomSupp .6s ease both',
                    'animation':'moveFromBottomSupp .6s ease both'
                });

        });
        // apparition bouton suivant si input remplie
         $('.searchArriveeBillet, .searchArriveeExcu').focusout(function(){
            storage();
            $('.footer--btn__suiv').css({
                '-webkit-animation':'apparitionSuiv .6s ease both',
                'animation':'apparitionSuiv .6s ease both'
            });
        });


        //ABO
        // abo option vers recap
        $('.liste--abo--options--btn').click(function(){
            $('.container--abo--options').css({
                '-webkit-animation':'moveToLeft .6s ease both',
                'animation':'moveToLeft .6s ease both'
            });storage();
            $('.container--abo--recap').css({
                '-webkit-animation':'moveFromRight .6s ease both',
                'animation':'moveFromRight .6s ease both'
            });
            storage();
            aboOptions=false;
            aboRecap=true;
            recap=false;
        });


        // PASS
        //Pass vers recap pass
        $('.btnPassToRecap').click(function(){
                $('.container--pass--accueil').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both'
                });
                $('.container--pass--recap').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });storage();
                pass=false;
                pass_recap=true;
        });
        //Pass vers jump
        $('#btnPassToJump').click(function(){
                $('.container--pass--accueil').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both'
                });
                $('.container--pass--jump').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });storage();
                pass=false;
                pass_jump=true;
                pass_recap=false;
        });
         //Pass Jump vers recap pass
        $('.btnJumpPassToRecap').click(function(){
                $('.container--pass--jump').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both'
                });
                $('.container--jump--recap').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });storage();
                pass=false;
                pass_jump_recap=true;
                return_jump=true;
        });

        // EXCU
        $('.liste--excu--btn').click(function(){
            $('.container--excu--trajet').css({
                '-webkit-animation':'moveToLeft .6s ease both',
                'animation':'moveToLeft .6s ease both'
            });
            $('.container--excu--options').css({
                '-webkit-animation':'moveFromRight .6s ease both',
                'animation':'moveFromRight .6s ease both'
            });
            $('.footer--btn__suiv').css({
                '-webkit-animation':'apparitionSuiv .6s ease both',
                'animation':'apparitionSuiv .6s ease both'
            });storage();
            excu=false;
            excu_options=true;
        });
        

        


        
        

        

        //BTN SUIVANT
        $('#btnSuivant').click(function(){
            storage();
            //btn suivant billet standard
                if (trajet == true) {
                    $('.container--billet--trajet').css({
                        '-webkit-animation':'moveToLeft .6s ease both',
                        'animation':'moveToLeft .6s ease both'
                    });
                    $('.container--billet--options').css({
                        '-webkit-animation':'moveFromRight .6s ease both',
                        'animation':'moveFromRight .6s ease both'
                    });storage();
                    options = true;
                    trajet = false;
                }else if (options == true){
                    $('.container--billet--options').css({
                        '-webkit-animation':'moveToLeft .6s ease both',
                        'animation':'moveToLeft .6s ease both'
                    });
                    $('.container--billet--recap').css({
                        '-webkit-animation':'moveFromRight .6s ease both',
                        'animation':'moveFromRight .6s ease both'
                    });
                    $('.footer--btn__suiv').css({
                        '-webkit-animation':'disparitionSuiv .6s ease both',
                        'animation':'disparitionSuiv .6s ease both'
                    });storage();
                    recap = true; 
                    options = false;
                }


                if (abo == true){
                    $('.container--abo--accueil').css({
                        '-webkit-animation':'moveToLeft .6s ease both',
                        'animation':'moveToLeft .6s ease both'
                    });
                    $('.container--abo--options').css({
                        '-webkit-animation':'moveFromRight .6s ease both',
                        'animation':'moveFromRight .6s ease both'
                    });
                    $('.footer--btn__suiv').css({
                        '-webkit-animation':'disparitionSuiv .6s ease both',
                        'animation':'disparitionSuiv .6s ease both'
                    });storage();
                    abo=false;
                    aboOptions=true;
                    recap=false;
                }else if (aboOptions==true){
                    $('.container--abo--options').css({
                        '-webkit-animation':'moveToLeft .6s ease both',
                        'animation':'moveToLeft .6s ease both'
                    });
                    $('.container--abo--recap').css({
                        '-webkit-animation':'moveFromRight .6s ease both',
                        'animation':'moveFromRight .6s ease both'
                    });storage();
                    aboOptions=false;
                    aboRecap=true;
                    recap=false;
                }
                if (excu==true){
                    $('.container--excu--trajet').css({
                        '-webkit-animation':'moveToLeft .6s ease both',
                        'animation':'moveToLeft .6s ease both'
                    });
                    $('.container--excu--options').css({
                        '-webkit-animation':'moveFromRight .6s ease both',
                        'animation':'moveFromRight .6s ease both'
                    });storage();
                    excu=false;
                    excu_options=true;
                }else if(excu_options==true){
                    $('.container--excu--options').css({
                        '-webkit-animation':'moveToLeft .6s ease both',
                        'animation':'moveToLeft .6s ease both'
                    });
                    $('.container--excu--recap').css({
                        '-webkit-animation':'moveFromRight .6s ease both',
                        'animation':'moveFromRight .6s ease both'
                    });
                    $('.footer--btn__suiv').css({
                        '-webkit-animation':'disparitionSuiv .6s ease both',
                        'animation':'disparitionSuiv .6s ease both'
                    });storage();
                    excu_options=false;
                    excu_recap=true;
                }

                
        });

        //BTN PRECEDENT
        $('#btnPrecedent').click(function(){
            $('#retourAccueil').css({
                        'display':'none'
                    });
            storage();
            //btn precedent billet standard
                if (trajet == true) {
                    $('.title').text('Bienvenue');
                    $('.container--billet--trajet').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--accueil').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    });
                    $('.footer').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    storage();
                    reloadpage();
                    trajet = false;
                    accueil = true; 
                }else if (options == true){
                    $('.container--billet--options').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--billet--trajet').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    });storage();
                    trajet=true;
                    options=false;
                }else if (recap == true){
                    $('.container--billet--recap').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--billet--options').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    });
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToRightToPay .6s ease both',
                        'animation':'moveToRightToPay .6s ease both'
                    });
                    $('.footer--btn__suiv').css({
                        '-webkit-animation':'apparitionSuiv .6s ease both',
                        'animation':'apparitionSuiv .6s ease both'
                    });storage();
                    recap=false;
                    options=true;
                }




                if (abo == true){
                    $('.title').text('Bienvenue');
                    $('.container--abo--accueil').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.footer').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--accueil').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    });
                    $('.footer--btn__suiv').css({
                        '-webkit-animation':'disparitionSuiv .6s ease both',
                        'animation':'disparitionSuiv .6s ease both'
                    });storage();
                    reloadpage();
                    accueil=true;
                    abo=false;
                }else if (aboOptions == true){
                    $('.container--abo--options').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--abo--accueil').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    });
                    $('.footer--btn__suiv').css({
                        '-webkit-animation':'apparitionSuiv .6s ease both',
                        'animation':'apparitionSuiv .6s ease both'
                    });storage();
                    aboOptions=false;
                    abo=true;
                }else if (aboRecap == true){
                    $('.container--abo--recap').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--abo--options').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    });
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToRightToPay .6s ease both',
                        'animation':'moveToRightToPay .6s ease both'
                    });storage();
                    aboOptions=true;
                    aboRecap=false;
                }



                if(pass == true){
                    $('.title').text('Bienvenue');
                    $('.container--pass--accueil').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--accueil').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    });
                    $('.footer').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.footer--btn__suiv').css({
                        '-webkit-animation':'disparitionSuiv .6s ease both',
                        'animation':'disparitionSuiv .6s ease both'
                    });storage();
                    reloadpage();
                    accueil=true;
                    pass=false;
                }else if(pass_recap == true){
                    $('.container--pass--recap').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--pass--accueil').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    });
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToRightToPay .6s ease both',
                        'animation':'moveToRightToPay .6s ease both'
                    });storage();
                    pass=true;
                    pass_recap=false;
                }else if(pass_jump_recap == true){
                    $('.container--pass--jump').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    }); 
                    $('.container--jump--recap').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToRightToPay .6s ease both',
                        'animation':'moveToRightToPay .6s ease both'
                    });storage();
                    pass_jump=true;
                    pass_jump_recap=false;
                }
                else if (pass_jump == true){
                    $('.container--pass--jump').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--pass--accueil').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    });storage();
                    pass=true;
                    pass_jump=false;
                }


                if (excu == true){
                    $('.title').text('Bienvenue');
                    $('.container--excu--trajet').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--accueil').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    });
                    $('.footer').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.footer--btn__suiv').css({
                        '-webkit-animation':'disparitionSuiv .6s ease both',
                        'animation':'disparitionSuiv .6s ease both'
                    });storage();reloadpage();
                    excu=false;
                    accueil=true;
                }else if (excu_options == true){
                    $('.container--excu--options').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--excu--trajet').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    }); 
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToRightToPay .6s ease both',
                        'animation':'moveToRightToPay .6s ease both'
                    });storage();
                    excu=true;
                    excu_options=false;
                }else if(excu_recap==true){
                    $('.container--excu--recap').css({
                        '-webkit-animation':'moveToRight .6s ease both',
                        'animation':'moveToRight .6s ease both'
                    });
                    $('.container--excu--options').css({
                        '-webkit-animation':'moveFromLeft .6s ease both',
                        'animation':'moveFromLeft .6s ease both'
                    }); 
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToRightToPay .6s ease both',
                        'animation':'moveToRightToPay .6s ease both'
                    });
                    $('.footer--btn__suiv').css({
                        '-webkit-animation':'apparitionSuiv .6s ease both',
                        'animation':'apparitionSuiv .6s ease both'
                    });storage();
                    excu_options=true;
                    excu_recap=false;

                }

        });


        
        // btn de choix du mode de paiement
        $('.cardToPay').click(function(){

            $('.container--paiement .soustitre').text('Par carte');
            $('.paragraphe--paiement').text('Veuilez insérer votre carte bancaire, visa ou mastercard maintenant.');
            // $('.img--paiement').attr('src','_img/carte.png');

            $('.container--paiement').css({
                '-webkit-animation':'moveFromRightToPay .6s ease both',
                'animation':'moveFromRightToPay .6s ease both'
            });
            $('.carte').css({
                        'display':'block'
            });
            $('.especes').css({
                        'display':'none'
            });
            $('.mobile').css({
                        'display':'none'
            });
                setTimeout(
                function(){
                    $('.container--paye').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                    });
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToLeftToPay .6s ease both',
                        'animation':'moveToLeftToPay .6s ease both'
                    });
                    $('.title').text('Merci !');
                    $('#retourAccueil').css({
                        'display':'block'
                    });
            }, 10000);
            setTimeout(
                        function(){
                        $('.container--accueil').css({
                            '-webkit-animation':'moveFromLeft .6s ease both',
                            'animation':'moveFromLeft .6s ease both'
                        });
                        $('.title').text('Bienvenue');
                        trajet = false;
                        options = false;
                        recap = false;
                        abo = false;
                        aboOptions=false;
                        aboRecap=false;
                        pass=false;
                        pass=false;
                        pass_jump=false;
                        pass_recap=false;
                        pass_jump_recap=false;
                        excu=false;
                        excu_options=false;
                        excu_recap=false;

                        setTimeout(
                            function(){
                                $('.containerNotHome, .footer').css({
                                '-webkit-animation':'moveToRight .6s ease both',
                                'animation':'moveToRight .6s ease both'
                                });
                                $('.container--paiement').css({
                                    '-webkit-animation':'moveToRightToPay .6s ease both',
                                    'animation':'moveToRightToPay .6s ease both'
                                });
                                reloadpage();
                        }, 400);
            }, 14000);  
        });

        $('.liquidToPay').click(function(){

            $('.container--paiement .soustitre').text('En espèce');
            $('.paragraphe--paiement').text('Veuilez introduire le montant (ou plus) en billet et pièce dans les endroits prévus à cet effet');
            // $('.img--paiement').attr('src','_img/espece.png');

            $('.container--paiement').css({
                '-webkit-animation':'moveFromRightToPay .6s ease both',
                'animation':'moveFromRightToPay .6s ease both'
            });

            $('.especes').css({
                        'display':'block'
            });
            $('.carte').css({
                        'display':'none'
            });
            $('.mobile').css({
                        'display':'none'
            });
            setTimeout(
                function(){
                    $('.container--paye').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                    });
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToLeftToPay .6s ease both',
                        'animation':'moveToLeftToPay .6s ease both'
                    });
                    $('.title').text('Merci !');
                    $('#retourAccueil').css({
                        'display':'block'
                    });
            }, 10000);
            setTimeout(
                        function(){
                        $('.container--accueil').css({
                            '-webkit-animation':'moveFromLeft .6s ease both',
                            'animation':'moveFromLeft .6s ease both'
                        });
                        $('.title').text('Bienvenue');
                        trajet = false;
                        options = false;
                        recap = false;
                        abo = false;
                        aboOptions=false;
                        aboRecap=false;
                        pass=false;
                        pass=false;
                        pass_jump=false;
                        pass_recap=false;
                        pass_jump_recap=false;
                        excu=false;
                        excu_options=false;
                        excu_recap=false;

                        setTimeout(
                            function(){
                                $('.containerNotHome, .footer').css({
                                '-webkit-animation':'moveToRight .6s ease both',
                                'animation':'moveToRight .6s ease both'
                                });
                                $('.container--paiement').css({
                                    '-webkit-animation':'moveToRightToPay .6s ease both',
                                    'animation':'moveToRightToPay .6s ease both'
                                });
                                reloadpage();
                        }, 400);
            }, 14000);
        });

        $('.phoneToPay').click(function(){

            $('.container--paiement .soustitre').text('Via smartphone');
            $('.paragraphe--paiement').text('Veuilez procéder au paiement via votre smartphone');
            // $('.img--paiement').attr('src','_img/smartphone.png');
            $('.mobile').css({
                'display':'block'
            });
            $('.carte').css({
                'display':'none'
            });
            $('.especes').css({
                'display':'none'
            });
            

            $('.container--paiement').css({
                '-webkit-animation':'moveFromRightToPay .6s ease both',
                'animation':'moveFromRightToPay .6s ease both'
            });
            setTimeout(
                function(){
                    $('.container--paye').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                    });
                    $('.container--paiement').css({
                        '-webkit-animation':'moveToLeftToPay .6s ease both',
                        'animation':'moveToLeftToPay .6s ease both'
                    });
                    $('.title').text('Merci !');
                    $('#retourAccueil').css({
                        'display':'block'
                    });
            }, 10000);
            setTimeout(
                        function(){
                        $('.container--accueil').css({
                            '-webkit-animation':'moveFromLeft .6s ease both',
                            'animation':'moveFromLeft .6s ease both'
                        });
                        $('.title').text('Bienvenue');
                        trajet = false;
                        options = false;
                        recap = false;
                        abo = false;
                        aboOptions=false;
                        aboRecap=false;
                        pass=false;
                        pass=false;
                        pass_jump=false;
                        pass_recap=false;
                        pass_jump_recap=false;
                        excu=false;
                        excu_options=false;
                        excu_recap=false;

                        setTimeout(
                            function(){
                                $('.containerNotHome, .footer').css({
                                '-webkit-animation':'moveToRight .6s ease both',
                                'animation':'moveToRight .6s ease both'
                                });
                                $('.container--paiement').css({
                                    '-webkit-animation':'moveToRightToPay .6s ease both',
                                    'animation':'moveToRightToPay .6s ease both'
                                });
                                reloadpage();
                        }, 400);
            }, 14000);

            
        });



       
        $('#btnPayToOtherPay').click(function(){
            $('.container--paiement').css({
                '-webkit-animation':'moveToRightToPay .6s ease both',
                'animation':'moveToRightToPay .6s ease both'
            });
        });
               



});