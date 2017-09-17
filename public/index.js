function itinerary() {
  document.getElementById("area1").style.display = "none";
  document.getElementById("button1").val();

  var name = $(".nameInput").val();
  var numDay = $("select[name=Month]").val();
  var length = document.getElementById("dayInput").val();

  for(i=0;i<length;i++) {
    $(".itinerary").append(numDay);
  }
}