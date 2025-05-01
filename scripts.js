function copyLink() {
    var copyText = document.querySelector("input");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Referral link copied: " + copyText.value);
}

document.getElementById("investButton").addEventListener("click", function() {
    alert("You clicked Invest Now! Direct them to payment page.");
});
