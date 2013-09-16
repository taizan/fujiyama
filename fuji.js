$(window).load(function () {
    moves = function (obj, speed) {
        //for (; ;) {
        $(obj)
            .show().css({ left: "0", bottom: "80px" })
            .animate({ left: "240", bottom: "147px" }, speed)
            .animate({ left: "404", bottom: "254px" }, speed)
            .animate({ left: "560", bottom: "388px" }, speed)
            .animate({ left: "647", bottom: "496px" }, speed)
            .animate({ left: "685", bottom: "496px" }, speed)
            .hide("bounce", {}, speed, function () { moves(obj, speed); });
        // }
    };

    game = new Game();

    $("#mt_fuji").click(game.set_visiter);

    $(".visiter").click(game.set_visiter);

    
});