$(document).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var loveText = $(".love-text");
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        loveText.css("opacity", 1); // Muestra el texto "Te amo"
    }
    function close() {
        envelope.addClass("close").removeClass("open");
        loveText.css("opacity", 0); // Oculta el texto "Te amo"
    }
   
});