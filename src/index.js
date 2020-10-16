
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
    return matrix.reduce((total,item,index)=> { if (index%2) {
    	return total.concat(item.sort((a,b)=>b-a));
    } return total.concat (item.sort ((a,b) => a-b))
    }, []);
}
