var padding = 50;

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 800 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangePoints([100,1000],1);

var y = d3.scale.linear()
    .range([height-padding, padding]);

function make_x_axis() {
    return d3.svg.axis()
        .scale(x)
         .orient("bottom")
         .ticks(5)
}

function make_y_axis() {
    return d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
}
var z = ["orangered", "slategrey", "limegreen"];

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var series = [
        [{x:"10/2014", y:51630}],
        [{x:"10/2014", y:96253}],
        [{x:"10/2014", y:11141}]
    ];
var xValues = ["10/2014"];

  // Compute the scales’ domains.
  x.domain(xValues);
  y.domain([10000,100000]);

  // Add the x-axis.
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height - padding) + ")")
      .call(d3.svg.axis().scale(x).orient("bottom"));

  // Add the y-axis.
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + padding*2 + ",0)")
      .call(d3.svg.axis().scale(y).orient("left"));

  // Add the points
  svg.selectAll(".series")
      .data(series)
    .enter().append("g")
      .attr("class", "series")
      .style("fill", function(d, i) { return z[i]; })
    .selectAll(".point")
      .data(function(d) { return d; })
    .enter().append("circle")
      .attr("class", "point")
      .attr("r", 4.5)
      .attr("cx", function(d) { return x(d.x); })
      .attr("cy", function(d) { return y(d.y); });

    svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(" + padding*2 + ",0)")
        .call(make_y_axis()
            .tickSize(-(width+150), 0, 0)
            .tickFormat("")
        )

svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - 165)
    .attr("y", height - 6)
    .text("Month");

svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("x", -height/2 + 100)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Total Number of Instances To Date");
