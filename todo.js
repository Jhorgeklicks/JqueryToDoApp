$(document).ready(function () {

    $("ul").on("click", "li", function () {

        $(this).toggleClass("completed");

    });

    $("ul").on("click", "span", function (event) {
        $(this).parent().fadeOut("500000", function () {
            $(this).remove();
        });
        event.stopPropagation();
    });

    $("input[type='text']").keypress(function (event) {

        if (event.which === 13) {
            var inputText = $(this).val();
            $(this).val("");

            $("ul").append("<li><span><i class='fa fa-trash-alt'></i> </span> " + inputText + "</li>");
            console.log(inputText)
        }
    });

    $("header").on("click", "i", function () {
        $("input[type='text']").fadeToggle(500);
    });


});
