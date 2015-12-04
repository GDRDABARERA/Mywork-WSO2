$(function() {

 Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Hillary Clinton",
            value: 12
        }, {
            label: "Donald Trump",
            value: 30
        }, {
            label: "Bernie Sanders",
            value: 20
        }],
        resize: true
    });


   
});
