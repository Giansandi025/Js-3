import fetch from `cross-fetch`; 
fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(json => console.log(json))




/* 	import fetch from `cross-fetch`
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(function (response) {
		response.json().then(function (users) {
			users.forEach(function (user) {
				console.log(user, name)
			});
		});
	}).catch(err => console.error(err));
     */
