     var g = graphlibDot.read("digraph { A -> B;}");

        console.log(g.nodes);
        console.log(g.edges);

        var graph = new Object();
        var map = new Object();
        var index = 0;

        var linkIndex = 0;



//Constants for the SVG
var width = 1500,
    height = 500;
    
    

//Set up the colour scale
var color = d3.scale.category20();

//color scale

 var rScale = d3.scale.linear()
                .domain([0,500]).range([1,40]);
        console.log("V=" +rScale(10))


//Set up the force layout
var force = d3.layout.force()
    .charge(-120)
    .linkDistance(30)
    .size([width, height]);
    
    

//Append a SVG to the body of the html page. Assign this SVG as an object to svg
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);
    
    

//Read the data from the mis element 
var mis = document.getElementById('mis').innerHTML;
graph = JSON.parse(mis);



        d3.csv("data/v.csv", function(data) {
            data.forEach(function(d) {
                map[d.name] = index;
                d.degree = parseInt(d.degree)
                index++;
            });
            
             graph.nodes = data;
             
             d3.csv("data/e.csv", function(data) {
                tlinks = new Object();
                data.forEach(function(d) {
                    //var s = map[d.source];
                    //var t = map[d.target];

                    //if(s){
                    //    if(t){
                    //        tlinks[linkIndex] = new Object();
                    //        tlinks[linkIndex].target = t;
                    //        tlinks[linkIndex].source = t;
                    //        tlinks[linkIndex].value = parseInt(d.value);
                    //        console.log("link found " + tlinks[linkIndex].source + " ->" + tlinks[linkIndex].target);
                     //       linkIndex++;
                     //   }else{
                     //       console.log("unknown vertex "+ d.target);
                     //   }
                    //}else{
                        //console.log("unknown vertex "+ d.source);
                    //}

                    /*
                        Data Format Edge
                        ================
                        source
                        target
                        value

                        Data Format Vertex
                        ================
                        name
                        group
                        degree - decide size of the vertex

                     */

                    var s = map[d.source];
                    var t = map[d.target];

                    if(typeof  s === "undefined" || typeof  t === "undefined"){
                        console.log("unknown vertex "+ d.source + "->" + d.target);
                        d.source = 1
                        d.target = 2;
                    }else{
                        d.source = map[d.source];
                        d.target = map[d.target];
                        d.value = parseInt(d.value)
                    }
                });

                //data[236] = {"source":1, "target":2, "value":3}
                graph.links = data;
                console.log(data[0]);
                console.log("both loaded 2");
                drapGraph(graph);
            });
        });




//arrow head
svg.append("defs").selectAll("marker")
    .data(["suit", "licensing", "resolved"])
  .enter().append("marker")
    .attr("id", function(d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 25)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("path")
    .attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
    .style("stroke", "#4679BD")
    .style("opacity", "0.6");
    
    
 // tip label display
 //Set up tooltip
 
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
    return  d.name + "";
})
svg.call(tip);
 
 
 
 
   function  drapGraph(graph) {
            force.nodes(graph.nodes)
                    .links(graph.links)
                    .start();
 
 
 
 
//*    
    
//Creates the graph data structure out of the json data
force.nodes(graph.nodes)
 /*   .links(graph.links)
    .start();
    
    
 */   
    
       //modify the link    

//Create all the line svgs but without locations yet
var link = svg.selectAll(".link")
    .data(graph.links)
    .enter().append("line")
    .attr("class", "link")
    .style("marker-end",  "url(#suit)")         // Modified line  - arrow head
  
    .style("stroke-width", function (d) {
    			return Math.sqrt(d.value);});

      // modify the node

//Do the same with the circles for the nodes - no 
var node = svg.selectAll(".gnode")
    .data(graph.nodes)
    .enter().append("g")
    .attr("class", "gnode")
    .call(force.drag);
    .on('mouseover', tip.show) //Added  to display label
    .on('mouseout', tip.hide); //Added 
    
var circle = node.append("circle")
    .attr("r", function (d) {
    		return d.group;
		})
    .style("fill", function (d) {
    		return color(d.group);
		})
  







//Now we are giving the SVGs co-ordinates - the force layout is generating the co-ordinates which this code is using to update the attributes of the SVG elements
force.on("tick", function () {
    link.attr("x1", function (d) {
        return d.source.x;
    })
        .attr("y1", function (d) {
        return d.source.y;
    })
        .attr("x2", function (d) {
        return d.target.x;
    })
        .attr("y2", function (d) {
        return d.target.y;
    });

    node.attr("cx", function (d) {
        return d.x;
    })
        .attr("cy", function (d) {
        return d.y;
    });
});