//Run jQuery after the document is fully loaded.
$(document).ready(
    //The function that does the stuff.
    function () {
        //Make the AJAX call

        $("#submitBTN").click(function(event){
            event.preventDefault();

            /* search episodes: 'http://api.tvmaze.com/singlesearch/shows?q='+search+'&embed=episodes'*/

            var search = $('#search').val();
            $.ajax('http://api.tvmaze.com/search/shows?q='+search, {
                method: "GET",
                dataType: "json"
            })
            //After the data comes back, use this function
                .done(
                    function (data) {
                        //Add the name
                        $('#name').html(data.name);
                        //Add the episodes

                        $('#episodeList').text('');


                        data.forEach(function (result) {   //data._embedded.episodes.forEach(function (episode) {

                            $('#episodeList').append('<tr>'+
                                '<td><a href="http://api.tvmaze.com/singlesearch/shows?q='+result.show.name+'&embed=episodes">' + result.show.name + '</a></td>' +
                                '<td>' + result.show.status + '</td>' +
                                '<td>' + result.show.name + '</td>' +
                                '<td>' + result.show.summary + '</td>' +
                                +' </tr>')
                        })

                    })





        });





    }
)
