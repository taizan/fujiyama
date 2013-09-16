Game= function(){
    game = this;
}

Game.prototype = {
    visit_ps: 0,


    visiting: 0,

    visited: 0,

    voltage: 200,

    update: function () {
        this.visiting += this.visit_ps;
        this.visited += this.visit_ps;
    },

    set_visiter: function () {
        $('<img class="visiter" src="images/visiter.gif">')
            .appendTo("#display")
            .show().css({ left: "0", bottom: "80px" })
            .animate({ left: "240", bottom: "147px" }, "slow")
            .animate({ left: "404", bottom: "254px" }, "slow")
            .animate({ left: "560", bottom: "388px" }, "slow")
            .animate({ left: "647", bottom: "496px" }, "slow")
            .animate({ left: "685", bottom: "496px" }, "fast")
            .hide("bounce", {}, "fast", function () { game.add_visiter(1); });
    },

    add_visiter : function (n) {
        this.visited += n;
        this.visiting += n;
        $("#num").html(this.visiting + "êlÅAÇ≤óàñK");
        $("#red_gage").css({height: 100*this.visiting/this.voltage +"%"})
    }
}