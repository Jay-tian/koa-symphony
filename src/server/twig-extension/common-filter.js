Twig.extendFilter("backwords", function(value) {
    return value.split(" ").reverse().join(" ");
});