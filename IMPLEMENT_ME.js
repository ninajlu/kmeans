/* Class definitions */

/* A Point has a position defined by x, y and a centroid that it can be assigned to.
  When no centroid is assigned, the following is true: this.centroid === undefined
  Points are created when data is loaded. You shouldn't need to call new Point(...).
*/
function Point(x, y, centroid) {
  this.x = x;
  this.y = y;
  this.centroid = centroid;
}

/* A Centroid has a position defined by x,y.
  Centroids are created and removed by clicking on the Add Centroid and Remove Centroid buttons.
  You shouldn't need to call new Centroid(...).
  The id field is needed so that the same color is always used when displaying the centroid. Ignore this field.
*/ 
function Centroid(x, y, id) {
  this.x = x;
  this.y = y;
  this.id = id;
}

/* App variables */

//centroids is a list of the current centroids. It starts empty until you click on add centroid.
var centroids = [];

//points is a list of currently displayed points.
var points = [];


/* IMPLEMENT THE FUNCTIONS BELOW
--------------------------------
*/

/* For each point, assign it to the cluster represented by the closest centroid */
function assignCentroids() {
  for(var i=0; i<points.length; i++){
    var point=points[i];
    var minCen=null;
    var minVal=Number.MAX_VALUE;
    for(var j=0; j<centroids.length; j++){
      var distance=Math.sqrt(Math.pow(centroids[j].x-points[i].x,2) +Math.pow(centroids[j].y-points[i].y,2) )
      if(distance<minVal){
        minVal=distance;
        minCen=centroids[j];
      }
    }
    points[i].centroid=minCen;
  }
  
}

/* Update the position of each centroid based on the points assigned to it. 
  The new position should be the mean of the positions of the points assigned to it.
*/
function updateCentroids() {
  for(var i=0; i<centroids.length; i++){
    var center=centroids[i];
    var minCen=centroids[i];
    var minVal=Number.MAX_VALUE;
    var sumX=0;
    var sumY=0;
    var count=0;
    for(var j=0; j<points.length; j++){
      if(points[j].centroid.x==center.x && points[j].centroid.y==center.y){
        sumX+=points[j].x;
        sumY+=points[j].y;
        count++;
      }
    }
    centroids[i].x=sumX/count;
    centroids[i].y=sumY/count;
  }
}
