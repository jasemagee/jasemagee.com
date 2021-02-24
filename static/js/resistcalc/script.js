$(function () {
  $(document).ready(function () {
    $(".band").each(function () {
      this.className = this.options[this.selectedIndex].className;
    });
    printResistorData();
  });

  $(".band").change(function () {
    this.className = this.options[this.selectedIndex].className;
    printResistorData();
  });

  function printResistorData() {
    // Put the first and second band numbers together
    var total = $("#first").val().toString() +
      $("#second").val().toString();

    // Add a zero to the string for for the multiplier value
    for (var i = 0; i < $("#third").val(); i++) {
      total += 0;
    }

    // JS does not have a way to format numbers with commas
    total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    $('#resistor_value').text(total);
    $('#resistor_tolerance').text($("#forth").val());
  };
});