const content = JSON.stringify({
    "data": {
        "frontPage": {
            "header": "Welcome To Grace Baptist Church of Blue Bell",
            "sub_header": null,
            "sections": [
                {
                    "header": "Celebrating 45 Years in Blue Bell",
                    "sub_header": "Trying out a sub-header",
                    "body": "Because of the uptick in COVID cases in Montgomery County and the state, we are returning to virtual worship services only (no in-person). Contact us for information about how to join via Zoom. Just because we can’t meet at our church building regularly like we did before, doesn’t mean our church, and our faith, and our God isn’t alive and thriving. We are meeting regularly via Zoom for worship, praise, small groups, bible study, and fellowship. Please join us in praying for all affected by COVID-19 and racial discrimination, and those who are suffering economically during this time. If you would like to participate in any of our worship and praise activities please contact us at [staff@gbcbb.org](mailto:staff@gbcbb.org) or [gbcprayerwarriors@gmail.com](mailto:gbcprayerwarriors@gmail.com).",
                    "events": []
                },
                {
                    "header": "Join Us",
                    "sub_header": null,
                    "body": "**9:30 AM** Sunday School. (At this time only Wired Word, Youth and Young Adult classes are meeting. Contact Brady Rennix or Joan Frizzell for Zoom info or staff@gbcbb.org)\n\n**10:45 AM** Worship Service Graceland 2nd Hour for children (K-3rd grade) during the worship service. Pre-school childcare provided.",
                    "events": []
                },
                {
                    "header": "Find Us",
                    "sub_header": null,
                    "body": "437 Skippack Pike\n\nP.O. Box 122\n\nBlue Bell, PA 19422\n\n215-628-2077\n\n![gbcbb_logo.png](https://res.cloudinary.com/jesska/image/upload/v1609700873/gbcbb_logo_4152f3e94b.png)",
                    "events": []
                },
                {
                    "header": "Upcoming Events",
                    "sub_header": null,
                    "body": null,
                    "events": [
                        {
                            "type": "event",
                            "count": 3,
                            "asc": true,
                            "current": true,
                            "posts": [
                                {
                                    "title": "Youth Group",
                                    "cover": null,
                                    "excerpt": "January 1st 7:30 PM",
                                    "author": {
                                        "name": "Pastor David"
                                    },
                                    "event_date": "2021-01-01T17:00:00.000Z",
                                    "posted_at": "2021-01-01T17:00:00.000Z"
                                }                            
                            ]
                        },        
                    ]
                },
                {
                    "header": "Latest Sermons",
                    "sub_header": null,
                    "body": null,
                    "events": [
                        {
                            "type": "sermon",
                            "count": 3,
                            "asc": false,
                            "current": false,
                            "posts": [
                                {
                                    "title": "Grandmother's of Christmas",
                                    "cover": null,
                                    "excerpt": "Sermon about Grandmother's of Christmas",
                                    "author": {
                                        "name": "Pastor David"
                                    },
                                    "event_date": null,
                                    "posted_at": "2020-11-09T17:00:00.000Z"
                                }    
                            ]
                        },        
                    ]
                }
            ],
            "Newsletter": [],
            "hero": {
                "url": "https://res.cloudinary.com/jesska/image/upload/v1610051570/gbcbb_7ddb607202.jpg",
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_gbcbb.jpg",
                        "hash": "thumbnail_gbcbb_7ddb607202",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "width": 234,
                        "height": 156,
                        "size": 7.36,
                        "path": null,
                        "url": "https://res.cloudinary.com/jesska/image/upload/v1610051571/thumbnail_gbcbb_7ddb607202.jpg",
                        "provider_metadata": {
                            "public_id": "thumbnail_gbcbb_7ddb607202",
                            "resource_type": "image"
                        }
                    },
                    "large": {
                        "name": "large_gbcbb.jpg",
                        "hash": "large_gbcbb_7ddb607202",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "width": 1000,
                        "height": 667,
                        "size": 113.85,
                        "path": null,
                        "url": "https://res.cloudinary.com/jesska/image/upload/v1610051572/large_gbcbb_7ddb607202.jpg",
                        "provider_metadata": {
                            "public_id": "large_gbcbb_7ddb607202",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "name": "medium_gbcbb.jpg",
                        "hash": "medium_gbcbb_7ddb607202",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "width": 750,
                        "height": 500,
                        "size": 64.19,
                        "path": null,
                        "url": "https://res.cloudinary.com/jesska/image/upload/v1610051573/medium_gbcbb_7ddb607202.jpg",
                        "provider_metadata": {
                            "public_id": "medium_gbcbb_7ddb607202",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "name": "small_gbcbb.jpg",
                        "hash": "small_gbcbb_7ddb607202",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "width": 500,
                        "height": 333,
                        "size": 28.69,
                        "path": null,
                        "url": "https://res.cloudinary.com/jesska/image/upload/v1610051573/small_gbcbb_7ddb607202.jpg",
                        "provider_metadata": {
                            "public_id": "small_gbcbb_7ddb607202",
                            "resource_type": "image"
                        }
                    }
                }
            },
            "style_hero": true
        }
    }
});

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(content);
}