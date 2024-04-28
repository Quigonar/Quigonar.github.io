document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const fox = document.getElementById('fox');

    envelope.addEventListener('click', function() {
        fox.classList.add('hover');
        if (envelope.classList.contains("close")) {
            openEnvelope();
        } else {
            closeEnvelope();
        }
    });

    function openEnvelope() {
        envelope.classList.add("open");
        envelope.classList.remove("close");
        setTimeout(function() {
            window.location.href = "bdayCard.html";
        }, 7000);
    }

    function closeEnvelope() {
        envelope.classList.add("close");
        envelope.classList.remove("open");
    }
});