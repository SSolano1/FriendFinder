var example1 = [1,2,3,2,1,4,2,5,2,3]
var friends = [
    [1,1,1,1,1,1,1,2,2,2], [3,2,4,5,1,2,1,3,5,5], [3,2,4,5,1,2,1,3,5,5]
]

var ex3 = [1,5,1]
var ex4 = [[1,2,3],[1,2,2], [5,2,4]]
// [0,3,2][0,3,1][4,3,3]
// [5,4,10]
// [0,1,2,1,0,3,3,0,1], [2,0,1,3,0,2,1,2,3,2], [2,0,1,3,0,2,1,2,3,2]
// [11,16,15]

var findMatch = function(userData, friends) {
var finalResult = [];
friends.forEach(userDataElement => {
    var temp = []
    for(i in userDataElement) {
        for(j in userData){
            if (i == j) {
                temp.push(Math.abs(userData[j]-userDataElement[i]) ) 
            }
        }
    }
    finalResult.push(temp.reduce((a,b)=> a+b, 0) )
});
return finalResult


}
console.log (findMatch (ex3, ex4))