'use strict';

var GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN;

function docWriteIssue(docTitle, docBody, docLabels, docAssignee) {

	const GitHubApi = require("github");
 
	const github = new GitHubApi({
		// optional 
		debug: true,
		protocol: "https",
		host: "api.github.com",
		pathPrefix: "",
		headers: {
			"user-agent": "258CallTheBot"
		},
		Promise: require("bluebird"),
		followRedirects: false,
		timeout: 5000
	});
	
	github.authenticate({
		type: "oauth",
		token: GITHUB_AUTH_TOKEN
	});
	
	github.issues.create({
		owner: "258callthebot",
		repo: "258callthebot-dashboard",
		title: docTitle,
		labels: docLabels,
		body: docBody,
		assignee: docAssignee
	});
}

module.exports = {
  GITHUB_AUTH_TOKEN,
  docWriteIssue,
};