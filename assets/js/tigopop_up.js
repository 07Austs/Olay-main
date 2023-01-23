var button = getElementbyId("pay_tigopesa");
var popup_tigo = getElementbyId("tigo_popup");

button.onClick = function(){
    popup_tigo.classList.toggle("show");
}