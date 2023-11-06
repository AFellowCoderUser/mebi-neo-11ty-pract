//wait for page to fully load so it doesnt execute so fast that it doesnt catch the selector
window.onload = setTimeout(waitLoad, 1000);
//enable style selector if javascript is enabled (if it isnt, well this wouldnt work)
function waitLoad(){
  var selector = document.getElementById("selector");
  selector.disabled = false;
}

//credits to https://kalechips.net/stuff/snippets.php?p=styleswitcher.
function changeStyle(style, js) {
    if (style == null)
        style = localStorage.getItem("style");
        if (style == null) 
            style = "mebi";
    document.querySelector("link[type='text/css']").setAttribute("href", "/assets/css/styles/" + style + ".css");
    localStorage.setItem("style", style);

    if (js == null)
      js = localStorage.getItem("js");
      if (js == null) 
          js = "mebi";

    //handle image changing
    if (js == "mebi") {
      document.getElementById("cssbanner").src = "/assets/img/page_deco/banner.png"
      document.getElementById("cssnix_kate").src = "/assets/img/page_deco/nix_kate.png";
    } else if (js == "halloween") {
      document.getElementById("cssbanner").src = "/assets/img/page_deco/halloween/banner.png"
      document.getElementById("cssnix_kate").src = "/assets/img/page_deco/halloween/nix_kate.png";
    } else if (js == "sunset") {
      document.getElementById("cssbanner").src = "/assets/img/page_deco/sunset/banner.png"
      document.getElementById("cssnix_kate").src = "/assets/img/page_deco/sunset/nix_kate.png";
    } else if (js == "lakemist") {
      document.getElementById("cssbanner").src = "/assets/img/page_deco/lakemist/banner.png"
      document.getElementById("cssnix_kate").src = "/assets/img/page_deco/lakemist/nix_kate.png";
    }
    localStorage.setItem("js", js);
}
window.onload = changeStyle();