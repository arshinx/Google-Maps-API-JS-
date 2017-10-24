var searchWiki = function(search) {
  $.ajax({
          url: "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=wikiCallback&limit=10&search=" + search,
          dataType: "jsonp",
      })
      .done(function(response) {
        if (response[0] !== 'undefined') {
          wikiTitle = response[0];
          wikiDesc  = response[2][0];
          wikiLink  = response[3][0];
          console.log(response[0]);
          return response[2][0];
        }
      })
      .fail(function(response) {
          return ("<h2>" +
              '</h2><div id="pano"></div>' +
              '<div><br>Learn more about: <a target="_blank" href="' +
              '"><strong>' +
              "</strong>(Error Loading)</a></div>");
      });
};
searchWiki("Niagara Falls");
