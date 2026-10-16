async function fetchGithubStats() {
	const reponse = await fetch('https://api.github.com/user/gushy3/repos')
	const repos = await reponse.json();
	//tier  par projet le plus recents
	const recentRepos =repos.slice(0,4);
	//injecter dans HTML
	console.log(recentRepos);
}
fetchGithubStats();
