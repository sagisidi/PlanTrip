	let num_array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
	num_array.sort((a, b)=>{return a - b});
	let new_arr = [];
	let final_arr = [];
	num_array.forEach((ref_num,index) => {
		//debugger;
		cond = (index < num_array.length-1 && ref_num != num_array[index+1] ) ||
			(index === num_array.length-1);
		if( cond) {
			new_arr = [];
			num_array.forEach((num) => {
				if (ref_num == num)
					new_arr.push(num);

			});
			final_arr.push(new_arr);
		}



	});


let uniqueArr = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
}

function answer(arrArg, trg)  {


	 uni = (uniqueArr(arrArg));
	// uni.forEach((ref) => {

	// 	ans = uni.filter((num) => {
	// 			return (ref != num && ref+num ==trg) ;
			
	// 	})
	// 	if (ans.length > 0)
	// 		ans.e
		
	// })
	aa = [];

	aa = uni.reduce((acc,current) => {
		debugger;
		ans = uni.filter((num) => {
				return (current != num && current+num ==trg) ;
			
		})
		if (ans.length > 0)
			return acc.concat(current);
		else
			return acc;
	},[]);
}

answer([1,2,3], 4)

