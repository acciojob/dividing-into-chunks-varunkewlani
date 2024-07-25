const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let arr2=[]
	
for(let i=0; i<arr.length;i++)
	{
		if(arr[i]>n)
			arr2.push(arr[i])
		else
		{
			let abc=arr[i]+arr[i+1];
			let arr3=[arr[i]]
			while(abc<=n)
				{
					arr3.push(arr[i+1])
					i++;
					abc+=arr[i+1];
				}
			arr2.push(arr3)
		}
	}
	return arr2;
	
  // Write your code here
};

const n = prompt("Enter n: ")
alert(JSON.stringify(divide(arr, n)));
