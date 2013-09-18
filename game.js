Game= function(){
    game = this;
    loop = this.loop;
    setInterval(loop, 1000);
    this.build = [];
    this.build[0] = new building($(".menu li")[0], 1, 10);
    this.build[1] = new building($(".menu li")[1], 5, 100);
    this.build[2] = new building($(".menu li")[2], 15, 500);
    this.build[3] = new building($(".menu li")[3], 50, 1000);
    this.build[4] = new building($(".menu li")[4], 200, 3000);
    this.build[5] = new building($(".menu li")[5], 500, 10000);
    this.build[6] = new building($(".menu li")[6], 10000, 200000);
    
}

Game.prototype = {
    visit_ps: 0,


    visiting: 0,

    visited: 0,

    voltage: 20,

    vol_time:10,


    update: function () {
        game.add_visiter(game.visit_ps);
    },

    set_visiter: function () {
        var man = $('<img class="visiter" src="images/visiter.gif">')
            .appendTo("#display")
            .show().css({ left: "0", bottom: "80px" })
            .animate({ left: "240", bottom: "147px" }, "slow")
            .animate({ left: "404", bottom: "254px" }, "slow")
            .animate({ left: "560", bottom: "388px" }, "slow")
            .animate({ left: "647", bottom: "496px" }, "slow")
            .animate({ left: "685", bottom: "496px" }, "fast")
            .hide("bounce", {}, "fast", function () {
                game.add_visiter(1);
                $(man).remove();
            });
    },

    add_visiter : function (n) {
        game.visited += n;
        game.visiting += n;
        $("#num").html(game.visiting + "人、ご来訪");
        $("#ps").html(game.visit_ps + "人/日(s)");
        
        if (this.visiting > this.voltage) {
            game.hunka();
            game.visiting = 0;
            game.voltage *= 2;
        }
        $("#red_gage").css({ height: 100 * game.visiting / game.voltage + "%" });

        //買い物
        for (var i = 0 ; i < game.build.length; i++) {
            if (game.visiting < game.build[i].price) {
                $(game.build[i].el).css({ opacity: 0.5 });
            } else {
                $(game.build[i].el).css({ opacity: 1 });
            }
        }
    },

    hunka : function(){
        $("#hunka").show("bounce", {}, "slow");
        $("#red_gage img").hide("explode", {}, "nomale", function () { $("#red_gage img").show(); });
        game.volting = game.vol_time;
    },

    loop: function () {
        game.update();

        //噴火消える
        if (game.volting > 0) {
            game.volting -= 1;
        } else if(game.volting == 0){
            $("#hunka").hide("slow");
            game.volting -= 1;
        }
        //console.log(game.volting);
       
    }

    
};


building = function($el,pt,price){
    this.el = $el;
    this.pt = pt;
    this.price = price;
    this.n = 0;
    var self = this;

    $(".price" , self.el).html(self.price+"人力");
    $(".num" , self.el).html(self.n);

    $(this.el).click(function(){
        if(game.visiting >= self.price ){
            game.visiting -= self.price;
            self.price = Math.floor(self.price *1.2);
            self.n += 1;
            game.visit_ps += self.pt;

            $(".price" , self.el).html(self.price+"人力");
            $(".num" , self.el).html(self.n);
        }
    });

};


