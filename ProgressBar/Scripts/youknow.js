﻿//$(document).ready(function() {    
//        $('input').on('click', function () {
//            var valeur = 0;

//            // checked boxes
//            $('input:checked').each(function () {
//                if ($(this).attr('value') > valeur) {
//                    valeur = $(this).attr('value');
//                }
//            });
//            $('.progress-bar').css('width', valeur + '%').attr('aria-valuenow', valeur);
//        });

//    }); 


$(document).ready(function () {
    $('input').on('click', function () {
        var valeur = 0;
        $('input:checked').each(function() {
                valeur += parseInt($(this).val());
        });
        $('.progress-bar').css('width', valeur + '%').attr('aria-valuenow', valeur);
    });

});


