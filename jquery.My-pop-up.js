;(function ($) {
    $.fn.myPop_up = function (options) {
/*
        return this.each(function () {
           var _this = $(this);
            _this
                .css({
                    "width" : "100px",
                    "height" : "100px",
                    "border" : "1px solid red"
                });

        });

*/



        var defaults = {
            menuItems: {
                Main: AddItem("Home", "index.html"),
                Products: AddItem("Products", "products.php", {
                    MSI: AddItem("MSI", "products.php?msi"),
                    Asus: AddItem("Asus", "products.php?asus"),
                    Dell: AddItem("Dell", "products.php?dell"),
                    Mac: AddItem("Mac", "products.php?mac"),
                }),
                Contacts: AddItem("Contacts", "contacts.php", {
                    Addr: AddItem("Address", "contacts.php?address"),
                    Mail: AddItem("E-mail", "contacts.php?email"),
                    Phone: AddItem("Phone", "contacts.php?phone"),
                })
            },
            ColorBackground: "cadetblue",
            ColorHover: "blueviolet",
            ColorText: "black"
        };

        var config = $.extend({},defaults,options);

        var _this = $(this);
        var clearfix = "visibility: hidden; display: block; font-size: 0; content: ' '; clear: both;height: 0;";
        $('head').append('<link rel="stylesheet" href="cssreset.css" type="text/css" />');
        $('head').append('<link rel="stylesheet" href="jquery.My-pop-up.css" type="text/css" />');

        $(_this).css({
            background: config.ColorBackground,
            display: "block"
        });

        $(_this).after($('<div/>',{
            style: clearfix
        }));


        $('<ul/>', {
            class:"ul-pop-up"
        }).appendTo(_this);

        /////////////////TEST/////////////////////////////////
        console.log();
        function testasd(url)
        {
            $.ajax({
                url: url,
                cache: false,
                success: function(html){
                    document.getElementById("main").innerHTML = html;
                }
            });
        }
        for(var prop in config.menuItems){

            if(console.log(config.menuItems[prop]));

            var item = $('<li/>', {
                class: "list-item"
            });

            var anchor = $('<a/>', {
                text: config.menuItems[prop]["Name"],
                href: config.menuItems[prop]["Url"],
                style: "color: " + config.ColorText + ";",
                class: "link"
            });
            item.append(anchor);

            if(config.menuItems[prop].hasOwnProperty("Children")){
                item.addClass("has-children");

                var children = $('<ul/>', {
                    class:"dropdown",
                    style: "background-color: " + config.ColorBackground + ";"
                });

                for(var child in config.menuItems[prop]["Children"]){
                    if(config.menuItems[prop]["Children"][child].hasOwnProperty("Name")){
                        var childItem = $('<li/>', { class : "item" });
                        var childItemLink = $('<a/>', {
                            href : "#",
                            text: config.menuItems[prop]["Children"][child]["Name"],
                            style: "color: " + config.ColorText + ";",
                            class: "link"
                        });
                        childItemLink.attr("data-url", config.menuItems[prop]["Children"][child]["Url"]);
                        childItemLink.click(function(){
                            testasd($(this).data("url"));
                        });
                        childItem.append(childItemLink);
                        children.append(childItem);
                    }
                }
                item.append(children);
            }
            $('.ul-pop-up').append(item);
        }

        $('.ul-pop-up').after($('<div/>',{
            style: clearfix
        }));


        //hover
        $('.has-children').hover(function () {
                $(this).find('.dropdown').css({
                    maxHeight: "300px"
                });
            },
            function () {
                $(this).find('.dropdown').css({
                    maxHeight: "0px"
                });
            });

        $('.ul-pop-up li').hover(function () {
                $(this).css({
                    background: config.ColorHover,
                    webkitBoxShadow: "inset 0px -.2rem 0px 0px rgba(0,0,0,0.35)",
                    mozBoxShadow: "inset 0px -.2rem 0px 0px rgba(0,0,0,0.35)",
                    oBoxShadow: "inset 0px -.2rem 0px 0px rgba(0,0,0,0.35)",
                    transaction: "all .7s"
                });
            },
            function () {
                $(this).css({
                    background: config.ColorBackground,
                    webkitBoxShadow: "none",
                    mozBoxShadow: "none",
                    oBoxShadow: "none",
                    transaction: " all .7s"
                });
            });

////////footer////////////////////////
    };
})(jQuery);

function AddItem(name, url, children){
    children = children || null;

    var item = {
        "Name" : name,
        "Url" : url
    };
    if(children){
        item["Children"] = children;
    }

    return item;
}



/*

 .append($('<li/>'))

 function () {
 for(var i = 0; i < 3; i++){
 return $('<li/>').append($('<a/>',{href:"#", text:"popItem " + i}));
 }
 }

*/

