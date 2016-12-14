var GitHubApi = require("github");
 
var github = new GitHubApi({
    // optional 
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub 
    pathPrefix: "", // for some GHEs; none for GitHub 
    headers: {
        "user-agent": "258CallTheBot" // GitHub is happy with a unique user agent 
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects 
    timeout: 5000
});
 
github.authenticate({
    type: "oauth",
    token: "9beecceecb51f959b167ac6562429215ad46d70d"
});

/*var getInformation = github.issues.getLabel({
	owner: "258callthebot",
	repo: "258callthebot-dashboard",
	name: "getInformation"
});*/
 
github.issues.create({
	owner: "258callthebot",
	repo: "258callthebot-dashboard",
	title: "test 3",
	assignee: "258callthebot",
	labels: [
		"getInformation"
	],
	body: "this is a test"
});