const content = JSON.stringify({
    "data": {
        "setting": {
            "siteTitle": "Grace Baptist Church of Blue Bell",
            "brandLogo": null
        }
    }
});

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(content);
}