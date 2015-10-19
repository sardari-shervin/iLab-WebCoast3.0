$(document).ready(function(){

	$('a').click(function(event){
                event.preventDefault();
            });

        //NAVIGATION

            var create = false,
            connect = false,
            createAjout = false,
            ajoutCard = false,
            achat = false,
            recap = false,
            merci = false,
            billets = false,
            placesFromBillets = false,
            placesFromMerci = false,
            compte = false,
            cardFlagFromCompte = false,
            cardFlagFromCreate = false,
            favoris = false;


            $('.navAchat').click(function(){

                if (billets == true) {
                    $('.container__billets').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                }else if(placesFromBillets == true){
                	$('.container__train').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                };

                if (compte == true) {
                    $('.container__compte').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                };

                if (favoris == true) {
                    $('.container__favoris').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                };

                $('.containerContenu').css({'z-index': '0'});
                $('.container__achat').css({
                    'z-index': '1000',
                    '-webkit-animation':'moveFromBottom .6s ease both',
                    'animation':'moveFromBottom .6s ease both'
                });

                $('.btn--prec').css({
                    '-webkit-animation':'disparitionPrec .6s ease both',
                    'animation':'disparitionPrec .6s ease both',
                });

                $('.navigation--lien').removeClass('navigation--lien__active');
                $('.navAchat').addClass('navigation--lien__active');

                $('.icon--nav').removeClass('actif');
                $('.icon--achat').addClass('actif');

                $('.title').text('Acheter un billet');

                create = false,
	            recap = false,
	            merci = false,
            	cardFlagFromCompte = false,
            	cardFlagFromCreate = false,

                billets = false;
                compte = false;
                favoris = false;

                achat = true;
            });

            $('.navBillets').click(function(){

                if(achat == true){
                    $('.container__achat').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if (recap == true){
                	$('.container__recap').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if(merci == true){
                	$('.container__merci').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if(placesFromMerci == true){
                	$('.container__train').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                };

                if (compte == true) {
                    $('.container__compte').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                };
                if (favoris == true) {
                    $('.container__favoris').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                };

                $('.btn--prec').css({
                    '-webkit-animation':'disparitionPrec .6s ease both',
                    'animation':'disparitionPrec .6s ease both',
                });

                $('.containerContenu').css({'z-index': '0'});
                $('.container__billets').css({
                    'z-index': '1000',
                    '-webkit-animation':'moveFromBottom .6s ease both',
                    'animation':'moveFromBottom .6s ease both'
                });

                $('.navigation--lien').removeClass('navigation--lien__active');
                $('.navBillets').addClass('navigation--lien__active');

                $('.icon--nav').removeClass('actif');
                $('.icon--billets').addClass('actif');

                $('.title').text('Mes billets');

                create = false,
	            recap = false,
	            merci = false,
            	cardFlagFromCompte = false,
            	cardFlagFromCreate = false,
	            placesFromBillets = false,
	            placesFromMerci = false,

                achat = false;
                compte = false;
                favoris = false;

                billets = true;
            });

            $('.navCompte').click(function(){

                if(achat == true){
                    $('.container__achat').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if (recap == true){
                	$('.container__recap').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if(merci == true){
                	$('.container__merci').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if(placesFromMerci == true){
                	$('.container__train').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                };

                if (billets == true) {
                    $('.container__billets').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if(placesFromBillets == true){
                	$('.container__train').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                };
                if (favoris == true) {
                    $('.container__favoris').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                };
                $('.btn--prec').css({
                    '-webkit-animation':'disparitionPrec .6s ease both',
                    'animation':'disparitionPrec .6s ease both',
                });

                $('.containerContenu').css({'z-index': '0'});
                $('.container__compte').css({
                    'z-index': '1000',
                    '-webkit-animation':'moveFromBottom .6s ease both',
                    'animation':'moveFromBottom .6s ease both'
                });

                $('.navigation--lien').removeClass('navigation--lien__active');
                $('.navCompte').addClass('navigation--lien__active');

                $('.icon--nav').removeClass('actif');
                $('.icon--compte').addClass('actif');

                $('.title').text('Mon compte');

                create = false,
	            recap = false,
	            merci = false,
            	cardFlagFromCompte = false,
            	cardFlagFromCreate = false,

                achat = false;
                billets = false;
                favoris = false;

                compte = true;
            });
            
            $('.navFavoris').click(function(){

                if(achat == true){
                    $('.container__achat').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if (recap == true){
                	$('.container__recap').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if(merci == true){
                	$('.container__merci').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if(placesFromMerci == true){
                	$('.container__train').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                };

                if (billets == true) {
                    $('.container__billets').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    });
                }else if(placesFromBillets == true){
                	$('.container__train').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                };

                if (compte == true) {
                    $('.container__compte').css({
                        '-webkit-animation':'moveToBottom .6s ease both',
                        'animation':'moveToBottom .6s ease both'
                    }); 
                };

                $('.btn--prec').css({
                    '-webkit-animation':'disparitionPrec .6s ease both',
                    'animation':'disparitionPrec .6s ease both',
                });

                $('.containerContenu').css({'z-index': '0'});
                $('.container__favoris').css({
                    'z-index': '1000',
                    '-webkit-animation':'moveFromBottom .6s ease both',
                    'animation':'moveFromBottom .6s ease both'
                });

                $('.navigation--lien').removeClass('navigation--lien__active');
                $('.navFavoris').addClass('navigation--lien__active');

                $('.icon--nav').removeClass('actif');
                $('.icon--favoris').addClass('actif');

                $('.title').text('Favoris');

                create = false,
	            recap = false,
	            merci = false,
	            
            	cardFlagFromCompte = false,
            	cardFlagFromCreate = false,

                achat = false;
                billets = false;
                compte = false;

                favoris = true;
            });

		//NAV interne
            $('.btnCreate').click(function(){
                $('.container__accueil').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both',
                });
                $('.container__creer, .header').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both',
                });
                create = true,
                achat = false,
	            recap = false,
	            merci = false,
            	cardFlagFromCompte = false,
            	cardFlagFromCreate = false,
	            billets = false,
	            compte = false,
	            favoris = false;
            });
	
			$('.btnConnect').click(function(){
				$('.title').text('Connexion');
                $('.container__accueil').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both',
                });
                $('.container__connexion, .header').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both',
                });
                connect = true;
            });

            $('.btnConnexion').click(function(){
            	$('.title').text('Acheter un billet');
	            $('.container__connexion').css({
	                '-webkit-animation':'moveToLeft .6s ease both',
	                'animation':'moveToLeft .6s ease both',
	            });
	            $('.container__achat, .container__navigation').css({
	                '-webkit-animation':'moveFromRight .6s ease both',
	                'animation':'moveFromRight .6s ease both',
	            });
	            $('.btn--prec').css({
	                '-webkit-animation':'disparitionPrec .6s ease both',
	                'animation':'disparitionPrec .6s ease both',
	            });
                connect = false;
            });


            $('.btnCreerAjoutCarte').click(function(){
            	$('.title').text('Ajouter une carte de crédit');
                $('.container__creer').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both',
                });
                $('.container__ajoutcarte').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both',
                });
                createAjout = true,
                create = false,
                achat = false,
	            recap = false,
            	cardFlagFromCompte = false,
            	cardFlagFromCreate = false,
	            merci = false,
	            billets = false,
	            compte = false,
	            favoris = false;
            });

            $('.btnAjoutCarte').click(function(){

            	if( ajoutCard == true){
            		$('.title').text('Mon compte');
        			$('.container__ajoutcarte').css({
	                    '-webkit-animation':'moveToRight .6s ease both',
	                    'animation':'moveToRight .6s ease both',
		            });
        			ajoutCard = false;
	                $('.container__compte').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
	                compte = true;

            	}else{
            		$('.title').text('Creer une compte');
	            	$('.container__ajoutcarte').css({
	            	   '-webkit-animation':'moveToRight .6s ease both',
	            	   'animation':'moveToRight .6s ease both',
		            });
	        		createAjout = false;
		            $('.container__creer').css({
		                '-webkit-animation':'moveFromLeft .6s ease both',
		                'animation':'moveFromLeft .6s ease both',
		            });
		            create = true;
            	}
            	

            });

            $('.btnActivate').click(function(){

            	if( compteModif == true){
            		$('.title').text('Mon compte');
	                $('.container__creer').css({
	                    '-webkit-animation':'moveToRight .6s ease both',
	                    'animation':'moveToRight .6s ease both',
	                });
	                compteModif = false;
            	}else{
            		$('.title').text('Acheter un billet');
	                $('.container__creer').css({
	                    '-webkit-animation':'moveToLeft .6s ease both',
	                    'animation':'moveToLeft .6s ease both',
	                });
	                $('.container__achat, .container__navigation').css({
	                    '-webkit-animation':'moveFromRight .6s ease both',
	                    'animation':'moveFromRight .6s ease both',
	                });
	                $('.btn--prec').css({
	                    '-webkit-animation':'disparitionPrec .6s ease both',
	                    'animation':'disparitionPrec .6s ease both',
	                });
            	}
                

                create = false,
                achat = true,
	            recap = false,
            	cardFlagFromCompte = false,
            	cardFlagFromCreate = false,
	            merci = false,
	            billets = false,
	            compte = false,
	            favoris = false;
            });

            $('.btnConfirm').click(function(){

                $('.title').text('Recapitulatif');
                $('.container__achat').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both',
                });
                achat = false;
                $('.container__recap').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both',
                });
                recap = true;
                $('.btn--prec').css({
                    '-webkit-animation':'apparitionPrec .6s ease both',
                    'animation':'apparitionPrec .6s ease both',
                });
            });

            $('.btnPay').click(function(){

                $('.title').text('Merci');
                $('.container__recap').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both',
                });
                recap = false;
                $('.container__merci').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both',
                });
                merci = true;
            });

            $('.btnPlacesFromBillets').click(function(){

                $('.title').text('Places assises');
                $('.container__billets').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both'
                });
                billets = false;
                $('.container__train').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                placesFromBillets = true;

                $('.btn--prec').css({
                    '-webkit-animation':'apparitionPrec .6s ease both',
                    'animation':'apparitionPrec .6s ease both',
                });
            });

            $('.btnPlacesFromMerci').click(function(){

                $('.title').text('Places assises');
                $('.container__merci').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both'
                });
                merci = false;
                $('.container__train').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                placesFromMerci = true;

                $('.btn--prec').css({
                    '-webkit-animation':'apparitionPrec .6s ease both',
                    'animation':'apparitionPrec .6s ease both',
                });
            });

            $('.btnVoirBillet').click(function(){
            	$('.container__merci').css({
                    '-webkit-animation':'moveToBottom .6s ease both',
                    'animation':'moveToBottom .6s ease both'
                });
                $('.btn--prec').css({
                    '-webkit-animation':'disparitionPrec .6s ease both',
                    'animation':'disparitionPrec .6s ease both',
                });

                $('.containerContenu').css({'z-index': '0'});
                $('.container__billets').css({
                    'z-index': '1000',
                    '-webkit-animation':'moveFromBottom .6s ease both',
                    'animation':'moveFromBottom .6s ease both'
                });

                $('.navigation--lien').removeClass('navigation--lien__active');
                $('.navBillets').addClass('navigation--lien__active');

                $('.title').text('Mes billets');

                merci = false,
                billets = true;
            });

            $('.ajoutCartFromCompte').click(function(){

            	clearFormCard();

            	$('.title').text('Ajouter une carte de crédit');
                $('.container__compte').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both',
                });
                $('.container__ajoutcarte').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both',
                });
                $('.btn--prec').css({
                    '-webkit-animation':'apparitionPrec .6s ease both',
                    'animation':'apparitionPrec .6s ease both',
                });

                ajoutCard = true,
                compte = false;

            });

            var compteModif = false;

            $('.modifCompte').click(function(){

            	var prenom = $('#comptePrenom').text();
            	var nom = $('#compteNom').text();
            	var mail = $('#compteMail').text();
            	var mdp = $('#compteMdp').text();
            	var naissance = $('#compteNaissance').text();
            	var reduc = $('#compteReduc').text();

            	$('#creerPrenom').val(prenom);
            	$('#creerNom').val(nom);
            	$('#creerMail').val(mail);
            	$('#creerMdp').val(mdp);
            	$('#creerNaissance').val(naissance);
            	$('#creerReduc').val(reduc);


            	$('.title').text('Modifier mon compte');
            	$('#btnActivate').text('Enregistrer');
            	$('#btnActivate').css({'bottom':'62px'});
            	$('.btnCreerAjoutCarte').css({'display':'none'});
            	$('.container__creer').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both',
                });
                $('.btn--prec').css({
                    '-webkit-animation':'apparitionPrec .6s ease both',
                    'animation':'apparitionPrec .6s ease both',
                });
                compteModif = true;
                // createCompte();

            });

        // NAV INTERNE TRAIN
            $('.wagon1').click(function(){
            	$this = $(this);
            	$('.nav__wagon--btn').removeClass('nav__wagon--btn__active');
            	$this.addClass('nav__wagon--btn__active');
            	$('.liste__wagon').css({
            		'-webkit-transform':'translateY(0)',
            		'transform':'translateY(0)'
            	});
            });

            $('.wagon2').click(function(){
            	$this = $(this);
            	$('.nav__wagon--btn').removeClass('nav__wagon--btn__active');
            	$this.addClass('nav__wagon--btn__active');
            	$('.liste__wagon').css({
            		'-webkit-transform':'translateY(-20%)',
            		'transform':'translateY(-20%)'
            	});
            });

            $('.wagon3').click(function(){
            	$this = $(this);
            	$('.nav__wagon--btn').removeClass('nav__wagon--btn__active');
            	$this.addClass('nav__wagon--btn__active');
            	$('.liste__wagon').css({
            		'-webkit-transform':'translateY(-40%)',
            		'transform':'translateY(-40%)'
            	});
            });

            $('.wagon4').click(function(){
            	$this = $(this);
            	$('.nav__wagon--btn').removeClass('nav__wagon--btn__active');
            	$this.addClass('nav__wagon--btn__active');
            	$('.liste__wagon').css({
            		'-webkit-transform':'translateY(-60%)',
            		'transform':'translateY(-60%)'
            	});
            });

            $('.wagon5').click(function(){
            	$this = $(this);
            	$('.nav__wagon--btn').removeClass('nav__wagon--btn__active');
            	$this.addClass('nav__wagon--btn__active');
            	$('.liste__wagon').css({
            		'-webkit-transform':'translateY(-80%)',
            		'transform':'translateY(-80%)'
            	});
            });

        // BTN PREC
        	$('.btn--prec').click(function(){
        		if(create == true){
        			$('.container__creer, .header').css({
                    '-webkit-animation':'moveToRight .6s ease both',
                    'animation':'moveToRight .6s ease both',
	                });
        			create = false;
	                $('.container__accueil').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
        		}

        		if(connect == true){
        			$('.container__connexion, .header').css({
                    '-webkit-animation':'moveToRight .6s ease both',
                    'animation':'moveToRight .6s ease both',
	                });
        			connect = false;
	                $('.container__accueil').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
        		}

        		if(createAjout == true){
        			$('.title').text('Créer une compte');
        			$('.container__ajoutcarte').css({
                    '-webkit-animation':'moveToRight .6s ease both',
                    'animation':'moveToRight .6s ease both',
	                });
        			createAjout = false;
	                $('.container__creer').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
	                create = true;
        		}

        		if(recap == true){
        			$('.title').text('Acheter un billet');
	                $('.container__recap').css({
	                    '-webkit-animation':'moveToRight .6s ease both',
	                    'animation':'moveToRight .6s ease both',
	                });
        			recap == false;
	                $('.container__achat').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
        			achat = false;
        			$('.btn--prec').css({
                    '-webkit-animation':'disparitionPrec .6s ease both',
                    'animation':'disparitionPrec .6s ease both',
                });
        		}

        		if(merci == true){
        			$('.title').text('Récapitulatif');
	                $('.container__merci').css({
	                    '-webkit-animation':'moveToRight .6s ease both',
	                    'animation':'moveToRight .6s ease both',
	                });
        			merci = false;
	                $('.container__recap').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
	                recap = true;
        		}

        		if(cardFlagFromCompte == true){
        			$('.title').text('Mon compte');

	                $('.container__carte').css({
	                    '-webkit-animation':'moveToRight .6s ease both',
	                    'animation':'moveToRight .6s ease both',
	                });

        			cardFlagFromCompte = false;
	                $('.container__compte').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
	                compte = true;
	                $('.btn--prec').css({
                    '-webkit-animation':'disparitionPrec .6s ease both',
                    'animation':'disparitionPrec .6s ease both',
                });
        		}

        		if(cardFlagFromCreate == true){
        			$('.title').text('Créer un compte');

	                $('.container__carte').css({
	                    '-webkit-animation':'moveToRight .6s ease both',
	                    'animation':'moveToRight .6s ease both',
	                });

        			cardFlagFromCreate = false;
	                $('.container__creer').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
	                create = true;
	                $('.btn--prec').css({
                    '-webkit-animation':'disparitionPrec .6s ease both',
                    'animation':'disparitionPrec .6s ease both',
                });
        		}

        		if(placesFromBillets == true){
        			$('.title').text('Mes billets');

	                $('.container__train').css({
	                    '-webkit-animation':'moveToRight .6s ease both',
	                    'animation':'moveToRight .6s ease both',
	                });
        			placesFromBillets = false;
	                $('.container__billets').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
	                billets = true;
	                $('.btn--prec').css({
                    '-webkit-animation':'disparitionPrec .6s ease both',
                    'animation':'disparitionPrec .6s ease both',
                });
        		}

        		if(placesFromMerci == true){
        			$('.title').text('Merci');

	                $('.container__train').css({
	                    '-webkit-animation':'moveToRight .6s ease both',
	                    'animation':'moveToRight .6s ease both',
	                });
        			placesFromMerci = false;
	                $('.container__merci').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
	                merci = true;
        		}

        		if(ajoutCard == true){
        			$('.title').text('Mon compte');
        			$('.container__ajoutcarte').css({
	                    '-webkit-animation':'moveToRight .6s ease both',
	                    'animation':'moveToRight .6s ease both',
		               });
        			ajoutCard = false;
	                $('.container__compte').css({
	                    '-webkit-animation':'moveFromLeft .6s ease both',
	                    'animation':'moveFromLeft .6s ease both',
	                });
	                compte = true;
        		}

        		if (compteModif == true) {

        			$('.title').text('Mon compte');
	                $('.container__creer').css({
	                    '-webkit-animation':'moveToRight .6s ease both',
	                    'animation':'moveToRight .6s ease both',
	                });
	                $('.btn--prec').css({
	                    '-webkit-animation':'disparitionPrec .6s ease both',
	                    'animation':'disparitionPrec .6s ease both',
	                });
	                compteModif = false;

        		};


        	});



        $('.liste__billet--element').click(function(){
            $this = $(this);
            $('.liste__billet--element').removeClass('liste__billet--element__active');
            $this.addClass('liste__billet--element__active');
        });

        var supp = false;
        $('.btn__supp').click(function(){
            if(supp == false){
                $('.btn__supp').text('- Suppléments')
                $('.fieldset__supp').css({'height':'auto'})
                supp=true;
            }else{
                $('.btn__supp').text('+ Suppléments')
                $('.fieldset__supp').css({'height':'0'})
                supp=false;
            }
        });


        

        var nbrVelo = 0,
        nbrAnimaux = 0;

        $('.input__trajet__velo').click(function(){
        	nbrVelo++;
        	$('#inputVelo').text(nbrVelo);
        	$('#inputVelo').css({'margin-right':'12px'});
        });

        $('.input__trajet__animaux').click(function(){
        	nbrAnimaux++;
        	$('#inputAnimaux').text(nbrAnimaux);
        	$('#inputAnimaux').css({'margin-right':'12px'});
        });

        $('.annulVelo').click(function(){
        	if(nbrVelo > 0){
        		$('#inputVelo').text('');
        		nbrVelo = 0;
        	};
        });

        $('.annulAnimaux').click(function(){
        	if(nbrAnimaux > 0){
        		$('#inputAnimaux').text('');
        		nbrAnimaux = 0;
        	};
        });

        


        // LOCALSTORAGE

		var compte = new Object();	


		$('#btnActivate').click(function(){
			createCompte();
		});

		$('#btnConnexion').click(function(){
			connectCompte();
		});

		$('.btnAjoutCarte').click(function(){
			createCart();
		});

		$('#confirmBillet').click(function(){
			newBillet();
		});

		$('#payBillet').click(function(){
			var putInFav = $('#favoris').is(':checked');

			if(putInFav == true){
				putBilletInFav();
			}
			putBilletInBillets();
			clearForm();
		});



		function createCompte(){
			compte = new Object();

			compte.prenom = document.forms['formCreer'].elements['creerPrenom'].value;
			compte.nom = document.forms['formCreer'].elements['creerNom'].value;
			compte.mail = document.forms['formCreer'].elements['creerMail'].value;
			compte.mdp = document.forms['formCreer'].elements['creerMdp'].value;
			compte.naissance = document.forms['formCreer'].elements['creerNaissance'].value;
			compte.reduc = document.forms['formCreer'].elements['creerReduc'].value;

			setDataCompte(compte);
		}

		function connectCompte(){
			compte = new Object();

			compte.mail = document.forms['formConnexion'].elements['connexionMail'].value;
			compte.mdp = document.forms['formConnexion'].elements['connexionMdp'].value;

			setDataConnect(compte);
		}

		function setDataConnect(compte){
			$('#comptePrenom').text('Mr.');
			$('#compteNom').text('Smith');
			$('#compteMail').text(compte.mail);
			$('#compteMdp').text(compte.mdp);
			$('#compteNaissance').text('01/10/1990');
			$('#compteReduc').text('123/4567/890');
		}

		function setDataCompte(compte){
			$('#comptePrenom').text(compte.prenom);
			$('#compteNom').text(compte.nom);
			$('#compteMail').text(compte.mail);
			$('#compteMdp').text(compte.mdp);
			$('#compteNaissance').text(compte.naissance);
			$('#compteReduc').text(compte.reduc);
		}

		function newBillet(){
			var billet = new Object();

			billet.depart = document.forms['formBillet'].elements['inputDepart'].value;
			billet.arrivee = document.forms['formBillet'].elements['inputArrivee'].value;

			var aller = $('#aller').is(':checked');

			if( aller == true){
				billet.allerretour = 'Aller simple';
			}else{
				billet.allerretour = 'Aller Retour'
			}

			billet.velo = $('#inputVelo').text();
			billet.animaux = $('#inputAnimaux').text();

			setDataBillet(billet);
		}
		
		function setDataBillet(billet){
			$('#recapDepart').text(billet.depart);
			$('#merciDepart').text(billet.depart);
			$('#recapArrivee').text(billet.arrivee);
			$('#merciArrivee').text(billet.arrivee);
			$('#recapType').text(billet.allerretour);

			if (billet.velo.length == 0 && billet.animaux.length == 0) {
				$('.container__supp').append('<p class="info info__supp">Aucun</p>');
			}else{
				if(billet.velo.length > 0){
					if(billet.velo == 1){
						$('.container__supp').append('<p class="info info__supp">'+billet.velo+' vélo</p>');
					}else{
						$('.container__supp').append('<p class="info info__supp">'+billet.velo+' vélos</p>');
					}
					
				}
				if(billet.animaux.length > 0){
					if(billet.animaux == 1){
						$('.container__supp').append('<p class="info info__supp">'+billet.animaux+' animal</p>');
					}else{
						$('.container__supp').append('<p class="info info__supp">'+billet.animaux+' animaux</p>');
					}		
				}
			}
		}

		function putBilletInBillets(){

			var recapDepart = $('#recapDepart').text();
			var recapArrivee = $('#recapArrivee').text();
			var recapType = $('#recapType').text();

			var voie = getRandomArbitrary(2, 11);
			var time = getRandomArbitrary(1, 24);

			$('#listeBillets .liste__billet--element').removeClass('liste__billet--element__active');

			$('#listeBillets').append('<li class="liste__billet--element liste__billet--element__active"><h2 class="title__billet">'+recapDepart+' > '+recapArrivee+'</h2><div class="container__typetarif container__typetarif__billet"><h2 class="intitules__billet">Voie</h2><p class="info__billet">'+voie+'</p></div><div class="container__typetarif container__typetarif__billet"><h2 class="intitules__billet">Dans</h2><p class="info__billet">'+time+'min</p></div><a class="btn btn__white btnPlacesFromBillets">Voir les places libres</a></li>');

			$('.liste__billet--element').click(function(){
                $this = $(this);

                $('.liste__billet--element').removeClass('liste__billet--element__active');
                $this.addClass('liste__billet--element__active');
            });

            $('.btnPlacesFromBillets').click(function(){

                $('.title').text('Places assises');
                $('.container__billets').css({
                    '-webkit-animation':'moveToLeft .6s ease both',
                    'animation':'moveToLeft .6s ease both'
                });
                billets = false;
                $('.container__train').css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });
                placesFromBillets = true;

                $('.btn--prec').css({
                    '-webkit-animation':'apparitionPrec .6s ease both',
                    'animation':'apparitionPrec .6s ease both',
                });
            });
		}

		function putBilletInFav(){

			var recapDepart = $('#recapDepart').text();
			var recapArrivee = $('#recapArrivee').text();
			var recapType = $('#recapType').text();

			$('#listeFav').prepend('<li class="liste__billet--element"><h2 class="title__billet">'+recapDepart+' > '+recapArrivee+'</h2><div class="container__typetarif container__typetarif__billet"><h2 class="intitules__billet">Type</h2><p class="info__billet">'+recapType+'</p></div><div class="container__typetarif container__typetarif__billet"><h2 class="intitules__billet">Tarif</h2><p class="info__billet">Standard</p></div><a class="btn btn__white">Payer</a></li>')
			
			$('.liste__billet--element').click(function(){
                $this = $(this);

                $('.liste__billet--element').removeClass('liste__billet--element__active');
                $this.addClass('liste__billet--element__active');
            });

		}

		function clearForm(){
			$('#inputDepart,#inputArrivee').val('');
			$('#inputAnimaux,#inputVelo').text('');
			// $('#aller').attr('checked',true);
			// $('#favoris,#allerretour').removeAttr('checked');
			$('#favoris').removeAttr('checked');
		}

		function clearFormCard(){
			$('#inputNumero,#inputCrypto,#inputExpi,#inputNameCard').val('');
		}

		function createCart(){

			carte = new Object();

			carte.nom = document.forms['formAjoutCard'].elements['inputNameCard'].value;
			carte.numero = document.forms['formAjoutCard'].elements['inputNumero'].value;
			carte.cryptogramme = document.forms['formAjoutCard'].elements['inputCrypto'].value;
			carte.expi = document.forms['formAjoutCard'].elements['inputExpi'].value;
			carte.lien = replacePonctu(carte.nom);

			setDataCard(carte);
		}
		function setDataCard(card){
			$('.body').append('<div class="container container__carte container__'+ card.lien +' containerContenu"><div class="fieldset fieldset__first"><h2 class="fieldset--title fieldset--title__compte">N°</h2><p class="input input__compte">'+card.numero+'</p></div><div class="fieldset"><h2 class="fieldset--title fieldset--title__compte">Cryptogramme</h2><p class="input input__compte">'+card.cryptogramme+'</p></div><div class="fieldset"><h2 class="fieldset--title fieldset--title__compte">Date</h2><p class="input input__compte">'+card.expi+'</p></div><div class="fieldset"><h2 class="fieldset--title fieldset--title__compte fieldset--title__margin">Un alias est le nom que vous donnez à votre carte pour mieux les différencier</h2><p class="input input__compte">'+card.nom+'</p></div><a href="#" class="btn btn__modif">Modifier</a></div>');
			$('.form__creer').append('<a href="#" class="input input__carte input__last '+ card.lien +'">'+card.nom+'</a>');
			$('.container__compte').append('<a href="#" class="input input__carte input__last '+ card.lien +'">'+card.nom+'</a>');

			lienToCard(card.lien);
		};

		function lienToCard(lien){
			$('.'+lien).click(function(){
                $('.title').text(lien);

                if( create == true){
                	$('.container__creer').css({
	                    '-webkit-animation':'moveToLeft .6s ease both',
	                    'animation':'moveToLeft .6s ease both'
	                });
	                create = false;
                	cardFlagFromCreate = true;
                }else{
                	$('.container__compte').css({
	                    '-webkit-animation':'moveToLeft .6s ease both',
	                    'animation':'moveToLeft .6s ease both'
	                });
	                compte = false;
                	cardFlagFromCompte = true;
                }

                $('.container__'+lien).css({
                    '-webkit-animation':'moveFromRight .6s ease both',
                    'animation':'moveFromRight .6s ease both'
                });

                $('.btn--prec').css({
                    '-webkit-animation':'apparitionPrec .6s ease both',
                    'animation':'apparitionPrec .6s ease both',
                });
            });
		};


		function replacePonctu(string){
			var caractereToReplace = ['à','á','â','ä','ã','ç','è','é','ê','ë','ì','í','î','ï','ñ','ò','ó','ô','õ','ö','ù','ú','û','ü','ý','ÿ','?','+','=',':',';','.',',','(',')','{','}','¨','*','$','€','%','£','`','/',' ','\'','!',];
		    var newString = string;
		    for (var i = 0; i < caractereToReplace.length; i++) {
		    	newString = newString.replace(caractereToReplace[i],'');
		    };
		    return newString;
		}

		function getRandomArbitrary(min, max){
			return Math.floor(Math.random() * (max - min) + min);
		}

});











