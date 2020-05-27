//Atrybuty
const delay = 8000;
var credits = 999;
var required = 1;
var currentCase;
var CurrentCaseName;

//Po załadowaniu dokumentu wrzucenie historii wylosowanych itemów oraz ilość kredytów
$( document ).ready(function() {
  var itemHistory = getCookie("itemHistory");
  $('.myItems')[0].innerHTML = itemHistory;
  document.getElementById("credits").innerHTML = credits;
});

//Wyświetlanie wszystkich możliwych przedmiotów do zdobycia dla podanej w argumencie
//skrzynki (caseName)
function showAllPrizes(caseName){
    var arr = caseName.slice();
    var arrlen = arr.length;
    for(var i = arrlen-1; i >= 0; i--){
        var card_wrapper = document.createElement("div");
        card_wrapper.className += "card_wrapper ";
        $(card_wrapper).attr("style", "display: none");
        $('.bottom_field')[0].appendChild(card_wrapper);

        var card = document.createElement("div");
        card.className += "card";
        card.setAttribute("style", "background-image: url('"+arr[i][2]+"')");
        $(card).attr('value', arr[i][0]);
        card_wrapper.appendChild(card);

        var info = document.createElement("div");
        info.className += "info ";
        info.className += arr[i][1];
        info.innerHTML = arr[i][0];
        card.appendChild(info);
    }

    $('.card_wrapper').each(function(){
        $(this).fadeIn("slow");
    })
}

//Wygenerowanie tablicy arr, w której znajdują się przedmioty, które zostaną umieszczone
//na "taśmie", funkcja bierze pod uwagę kategorie przedmiotu, dlatego też rzadzsze przedmioty
//pojawią się na taśmie mniej razy, co znaczy, że ciężej je będzie wylosować
function generateCase(caseName){
    var arr = caseName.slice();
    var arrlen = arr.length;

    var cardList = document.createElement("div");
    cardList.className += "cardList ";
    $(cardList).attr('id', 'main');
    $(cardList).attr("style", "display: none");
    $('.center')[0].appendChild(cardList);


    for(var i = 0; i < arrlen; i++){
        var category = arr[i][1]
        if(category == "common"){
            for(var j = 0; j < 1000; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(category == "rare"){
            for(var j = 0; j < 180; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(category == "unreal"){
            for(var j = 0; j < 30; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(category == "mythical"){
            for(var j = 0; j < 15; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(category == "legendary"){
            for(var j = 0; j < 3; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
    }

    //Generowanie taśmy (80 losowych przedmiotów z tablicy arr)
    for(var i = 0; i < 80; i++){
        var rand = (Math.floor((Math.random()*100000))) % arr.length;

        var card = document.createElement("div");
        card.className += "card";
        $(card).attr('id', 'card_'+i);
        $(card).attr('value', arr[rand][0]);
        $(card).attr("style", "background-image: url('"+arr[rand][2]+"')");
        $('.cardList')[0].appendChild(card);

        var info = document.createElement("div");
        info.className += "info ";
        info.className += arr[rand][1];
        info.innerHTML = arr[rand][0];
        card.appendChild(info);
   }

    $('.cardList').fadeIn("slow");
    $('#spin').prop('disabled', false);
}


//Wyświetlanie w okienku wygranego przedmiotu
function showPrize(caseName, item){
    var mySound = new sound("sounds/sound2.wav");
    var arr = caseName.slice();
    var prizePicture;

    for(var i = 0; i < arr.length; i++){
        if(arr[i][0] == item){
            $('.modal-header')[0].innerHTML = "Wygrany przedmiot: " + item;
            $('.modal-img')[0].setAttribute("style", "background-image: url('"+arr[i][3]+"')");
            break;
        }
    }

    setTimeout(function(){
            $('#myModal').fadeIn("fast");
            mySound.play();
        }, delay+1000);
}

//Rozpoczęcie losowania (z opóźnieniem) oraz wywołanie funkcji odpowiedzialnej za
//wyświetlenie nagrody 2 sekundy po zatrzymaniu się ruletki
function startSpinning(){
    $('.card').first().css('margin-left', 0);
    $('#spin').prop('disabled',true);
    setTimeout(spin,100);
    if(credits>=required){
        setTimeout(function(){
            $('#open').prop('disabled',false);
        }, delay + 2000);
    }
}

//Funkcja odpowiedzialna za przesuwanie "taśmy" z pojazdami i zatrzymanie się na wylosowanym pojeździe
function spin() {
    var newMargin = 0, newDistance = 0;
    var mySound = new sound("sounds/sound.wav");

    newDistance = Math.floor((Math.random()*2000)+10000);
	  newMargin = -(newDistance);
    mySound.play();
    $('.card').first().animate({
        marginLeft: newMargin
    }, delay);

    var card_id = parseInt((-((newMargin-100) / 200))) + 1;
    var itemWon = $('#card_'+card_id).attr('value');

    showPrize(currentCase, itemWon);
    addToItemList(currentCase, itemWon);
}

//Dopisanie wygranego przedmiotu do listy wygranych (tej wyświetlającej się w ekranie poczatkowym)
function addToItemList(currentCase, itemWon){
    var arr = currentCase.slice();
    var currentDate = new Date();
    var day = currentDate.getDate(); if(day < 10) day = "0" + day;
    var month = (parseInt(currentDate.getMonth())+1); if(month < 10) month = "0" + month;
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours(); if(hour < 10) hour = "0" + hour;
    var minutes = currentDate.getMinutes(); if(minutes < 10) minutes = "0" + minutes;
    var seconds = currentDate.getSeconds(); if(seconds < 10) seconds = "0" + seconds;
    var now = "[" + day + "." + month + "." + year + " " + hour + ":" + minutes + ":" + seconds + "] ";
    var className;

    for(var i = 0; arr.length; i++){
      if(arr[i][0]==itemWon){
        className = arr[i][1];
        break;
      }
    }

    var oldItemHistory = $('.myItems')[0].innerHTML;
    var newItemHistory = now + " " + currentCaseName +" <span class='" + className + "'>" + itemWon + "</span><br>" + oldItemHistory;
    $('.myItems')[0].innerHTML = newItemHistory;
    setCookie("itemHistory",newItemHistory,30);
}

//Obsługa kliknięcia w skrzynkę w menu głównym. Włączenie przycisku odpowiedzialnego
//za cofanie, odpalenie dźwięku, pobranie nazwy case'a (z value w htmlu),
//uruuchomienie odpowiednich funkcji
$('a').click(function(){
    $('.back').attr('value', '1');
    var mySound = new sound("sounds/sound3.wav");
    mySound.play();
    var caseOption = $(this).attr('value');
    $('.bottom_field > .card_wrapper').each(function(){
        $(this).remove();
    });
    $('.menu').attr("style", "display: none");
    switch(caseOption){
        case "LombardCase":
            currentCaseName = "Skrzynia operacji lombard";
            currentCase = LombardCase.slice();
            break;
        case "MoneyCase":
            currentCaseName = "Skrzynia z pieniędzmi";
            currentCase = MoneyCase.slice();
            break;
        case "JunkyardCase":
            currentCaseName = "Skrzynia złomiarza";
            currentCase = JunkyardCase.slice();
            break;
        case "WorkshopCase":
            currentCaseName = "Skrzynia op. warsztat";
            currentCase = WorkshopCase.slice();
            break;
        case "JubilerCase":
            currentCaseName = "Skrzynia Jubilera";
            currentCase = JubilerCase.slice();
            break;
        case "PremiumCase":
            currentCaseName = "Skrzynia Premium";
            currentCase = PremiumCase.slice();
            break;
        default:
            break;
    }

    for(var i = 0; i < allCases.length; i++){
        if(allCases[i][0] == caseOption){
            $('.case > .card_wrapper > .card').attr('style', "background-image: url('"+allCases[i][2]+"')");
            document.getElementById('cName').innerHTML = allCases[i][1];
            break;
        }
    }

    $('.top_field').fadeIn('fast');
    showAllPrizes(currentCase);
    $('.case-opening').fadeIn('fast');
})


//Obsługa kliknięcia przycisku odpowiedzialnego za losowanie, wywołanie odpowiednich
//funkcji potrzebnych do losowania przedmiotów
$('#open').click(function() {
    $('.back').attr('value', '0');
    var mySound = new sound("sounds/sound3.wav");
    if(credits >= required){
        mySound.play();
        credits -= required;
        $('.case_field').fadeIn("fast");
        $('#open').prop('disabled',true);
        document.getElementById("credits").innerHTML = credits;

        try{
            $('.cardList')[0].remove();
        }catch(err){}

        $('.top_field').fadeOut("fast");
        setTimeout(function(){
            generateCase(currentCase);
        },700);
        setTimeout(function(){
            startSpinning();
        }, 1300)
    }
});

//Obsługa zamknięcia okienka z nagrodą
$(".close")[0].onclick = function() {
    var mySound = new sound("sounds/sound3.wav");
    mySound.play();
    closeModalWindow();
    $('.case_field').fadeOut('fast');
    $('.case-opening').attr("style","display: none");
    $('.menu').attr("style", "display: block");
}

//Obsługa przycisku do cofania
$('.back')[0].onclick = function(){
    if($(this).attr('value')==1){
      var mySound = new sound("sounds/sound3.wav");
      mySound.play();
      $('.case_field').fadeOut('fast');
      $('.case-opening').attr("style","display: none");
      $('.menu').attr("style", "display: block");
    }
}

function closeModalWindow(){
    $('#myModal').fadeOut("fast");
}
