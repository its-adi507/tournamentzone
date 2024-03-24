
let matchData = []; // Define matchData globally

let newHtm;
let newHtml1 = '';
let newHtml2 = '';
let newHtml3 = '';
let newHtml4 = '';
let newHtml5 = '';
let newHtml6 = '';
let newHtml7 = '';
let newHtml8 = '';
let newHtml9 = '';

  function create(newMatch) {
    let matchCompleted = localStorage.getItem('matchD');
    matchCompleted = parseInt(matchCompleted);
    let mtchCode = newMatch.id.slice(0, 4);;
    console.log(mtchCode);
    newHtml = `<div class="match-container">
        <div class="banner-img-container"><img class="banner-img" id="${newMatch.id}-img" src="${newMatch.banner_img}" alt=""></div>
        <div class="match-detail-container">
            <div class="match-title-logo-container">
                <img onclick="localStorage.setItem('crntmatch', '${newMatch.id}')" class="match-logo" src="${newMatch.logo_img}" alt="">
                <div class="match-title-container">
                    <p class="match-title">${newMatch.title}</p>
                    <p class="match-date">${newMatch.date} ${newMatch.Time}</p>
                </div>
            </div>
            <div class="lbl-holder">
                <span>Booyah</span> 
                <span>Per Kill</span>
                <span>Entry Fee</span>
            </div>
            <div class="value-holder">
                <span>₹${newMatch.reward}</span>
                <span>₹${newMatch.perkill}</span>
                <span>₹${newMatch.entryfee}</span>
            </div>
            <div class="lbl-holder2">
                <span>Map</span>
                <span>Type</span>
                <span>Mode</span>
            </div>
            <div class="value-holder2">
                <span>${newMatch.map}</span>
                <span>${newMatch.type}</span>
                <span>${newMatch.mode}</span>
            </div>
            <div class="bottom-container">
                <div class="players-detail-container">
                    <div class="progress-container">
                        <div class="progress-bar" id="${newMatch.id}-pb"></div>
                    </div>
                    <div class="player-count">
                        <span id="${newMatch.id}-uj">${newMatch.userJoined}</span>
                        <span>/</span>
                        <span id="${newMatch.id}-ua">${newMatch.userAllowed}</span>
                    </div>
                </div>
                <button onclick="btnclick('${newMatch.id}-btn','${newMatch.type}','${newMatch.entryfee}','${newMatch.id}')" class="join-btn" id="${newMatch.id}-btn">Join</button>
            </div>
        </div>
    </div>`;

    if(mtchCode == 'ffso'){
        newHtml1 += newHtml;
    }else if (mtchCode == 'ffdu'){
        newHtml2 += newHtml;
    }else if(mtchCode == 'ffsq'){
        newHtml3 += newHtml;
    }else if (mtchCode == 'bgso'){
        newHtml4 += newHtml;
    }else if(mtchCode == 'bgdu'){
        newHtml5 += newHtml;
    }else if (mtchCode == 'bgsq'){
        newHtml6 += newHtml;
    }else if(mtchCode == 'flso'){
        newHtml7 += newHtml;
    }else if (mtchCode == 'fldu'){
        newHtml8 += newHtml;
    }else if(mtchCode == 'flsq'){
        newHtml9 += newHtml;
    }
  
    document.getElementById("mainDiv").innerHTML = newHtml1;
    document.getElementById("mainDiv2").innerHTML = newHtml2;
    document.getElementById("mainDiv3").innerHTML = newHtml3;

    document.getElementById("mainDiv4").innerHTML = newHtml4;
    document.getElementById("mainDiv5").innerHTML = newHtml5;
    document.getElementById("mainDiv6").innerHTML = newHtml6;

    document.getElementById("mainDiv7").innerHTML = newHtml7;
    document.getElementById("mainDiv8").innerHTML = newHtml8;
    document.getElementById("mainDiv9").innerHTML = newHtml9;

    document.getElementById('lbl1').innerHTML = `"${navigator.userAgent}"`;
    matchCompleted += 1;
    localStorage.setItem('matchD', matchCompleted);
    // localStorage.setItem('mdc', 'true'); 
}


 function btnclick(btnId,type,entryfee,matchid){
    clearUidinput();
    localStorage.setItem('crntmatch', matchid);
    let btn = document.getElementById(btnId);
    let btnTxt = btn.textContent;
    console.log(`${btnId},${btnTxt},${type},${entryfee}`)
    if(btnTxt == 'Join'){
        if(type == 'Squad'){
            localStorage.setItem('jt', 'Squad');
            document.getElementById('uid-dialog-error').innerText = '';

            document.getElementById('uid-input2').style.display = 'block';
            document.getElementById('uid-input3').style.display = 'block';
            document.getElementById('uid-input4').style.display = 'block';
        }else if(type == 'Duo'){
            localStorage.setItem('jt', 'Duo');
            document.getElementById('uid-dialog-error').innerText = '';

            document.getElementById('uid-input2').style.display = 'block';
            document.getElementById('uid-input3').style.display = 'none';
            document.getElementById('uid-input4').style.display = 'none';
        }else{
            localStorage.setItem('jt', 'Solo');
            document.getElementById('uid-dialog-error').innerText = '';
            
      document.getElementById('uid-input2').style.display = 'none';
      document.getElementById('uid-input3').style.display = 'none';
      document.getElementById('uid-input4').style.display = 'none';
             }


        document.getElementById('customDialog2').style.display = 'block';
    }else if(btnTxt == 'View Details'){

        let crntmatch = localStorage.getItem('crntmatch');
        localStorage.setItem('getIdPass','true');
        console.log(crntmatch);
    }
    
}


window.addEventListener('click', function(event) {
    var dialog = document.getElementById('customDialog');
    var dialog2 = document.getElementById('customDialog2');
    if (event.target == dialog) {
        dialog.style.display = 'none';
    }else if(event.target == dialog2) {
        dialog2.style.display = 'none';
    }
});

 function dismissDialog(){
    var dialog = document.getElementById('customDialog');
    var dialog2 = document.getElementById('customDialog2');
    dialog.style.display = 'none';
    dialog2.style.display = 'none';
};

 function clearUidinput(){
    document.getElementById('uid-input1').value = '';
    document.getElementById('uid-input2').value = '';
    document.getElementById('uid-input3').value = '';
    document.getElementById('uid-input4').value = '';
};
