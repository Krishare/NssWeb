console.log("updated");

function changeME(element) {
  if(element[0]==='.') {
    element=element.substr(1);
    document.querySelector(".changing_component").innerHTML = '<iframe src="../components/'+element+'.html" width="100%" height="400px" type="text/html" />';
    }
  else {
    document.querySelector(".changing_component").innerHTML = '<iframe src="./components/'+element+'.html" width="100%" height="400px" type="text/html" />';
    }
}
