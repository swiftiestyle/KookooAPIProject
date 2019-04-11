var xml = require('xml');
function getXMLResponse(response) {
	return xml(response);
}
function getXMLResponse(response) {
	return xml(response);
}

module.exports = {
	getXMLBody : function createResponse(req) {
		var event = req.query.event;
		var data = req.query.data || '';
		var sid = req.query.sid;
		var res;
		if(event){
            if(event){
                if (event == 'NewCall') {
                    res = {
                        response:
                        [{
                            _attr: { sid: 123}
                        },{
                            playtext: 'Welcome.'
                        },
                        {
                            collectdtmf: [ {
                                _attr: { o: "8000"}
                            },
                            {
                                playtext: 'Please enter 1 if you are male and 2 if you are female'
                            }
                        ]}]
                    };
                }
                else if(event == 'GotDTMF'){
                    var digit = parseInt(data);
                    if(sid == 123 && digit==1){
                        res = {
                            response:
                            [{
                                _attr: { sid: 1234}
                            },{
                                collectdtmf: [ {
                                    _attr: { o: "8000"}
                                },
                                {
                                    playtext: 'Please enter 1 if you are above 21 years of age and 2 if you are below 21 years of age'
                                }]
                            }]
                        };

                    }
                   else if(sid ==123 && digit==2){
                        res = {
                            response:
                            [{
                                _attr: { sid: 1234}
                            },
                              {
                                collectdtmf: [ {
                                    _attr: { o: "8000"}
                                },
                                {
                                    playtext: 'Please enter 1 if you are above 18 years of age and 2 if you are below 18 years of age'
                                }]
                            }]
                        };
                    }
                    else if(sid ==1234 && digit==1){
                        res = {
                           response: [{
                                playtext: 'You are an adult'
                            }]
                        };
                    }
                    else if(sid ==1234 && digit==2){
                        res = {
                            response: [{
                                playtext: 'Minors are not allowed.'
                            }]
                        };
                    }
                }
                else {
                    res = {
                        response:
                        [{
                            hangup: ''
                        }
                    ]
                };
            }

        }
    
    }
    return getXMLResponse(res);
}};