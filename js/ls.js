/* 
Project     : Local Storage VRT
By          : VRT
Date        : 31/03/2019
Time        : 11:09
*/
function set(){
  sessionStorage.setItem("preset", "1");
  document.getElementById("root").classList.add("preset-1");
}
// TS#1554010709
function get(){
  var vrt = sessionStorage.getItem("preset");
  if (vrt == "1"){
    sessionStorage.setItem("preset", "2");
    document.getElementById("root").classList.add("preset-2");
  }else if(vrt == "2"){
    sessionStorage.setItem("preset", "3");
    document.getElementById("root").classList.add("preset-3");
  }else if(vrt == "3"){
    sessionStorage.setItem("preset", "4");
    document.getElementById("root").classList.add("preset-4");
  }else if(vrt == "4"){
    sessionStorage.setItem("preset", "5");
    document.getElementById("root").classList.add("preset-5");
  }else if(vrt == "5"){
    sessionStorage.setItem("preset", "6");
    document.getElementById("root").classList.add("preset-6"); 
  }else if(vrt == "6"){
    sessionStorage.setItem("preset", "7");
    document.getElementById("root").classList.add("preset-7");
  }else {
      set();
  }
}
