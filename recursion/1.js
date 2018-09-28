function rec(n){
	if(n == 1) return 1;
	return rec(n - 1) + ' ' + n;
}
console.log(rec(20));