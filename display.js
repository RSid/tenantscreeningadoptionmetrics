screeningData = [{date:"10/2014", applicants: 51630, moveins: 96253, screenings: 11141}];

var datatable = function() {

  for (i = 0; i < screeningData.length; i++) {
      $("#data").append("<tr><td>"+ screeningData[i]['date'] +
                    "</td><td>"+ screeningData[i]['applicants'] +
                    "</td><td>"+ screeningData[i]['moveins'] +
                    "</td><td>"+ screeningData[i]['screenings'] +"</td></tr>");
              }
};

$(document).ready(datatable);
