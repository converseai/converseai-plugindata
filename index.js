module.exports = (function(){
  return function(host = 'plugindata.converse.ai:443') {
    const grpc = require('grpc');
    const path = require('path');
    const proto = grpc.load({
      root: path.join(__dirname, 'protos'),
      file: 'github.com/converseai/service/plugindata/datamanagement.proto'
    });

    var deadline =  new Date().setTime(new Date().getTime() + (3600 * 1000)).toString();
    return new proto.plugindata.DataManagement(host, grpc.credentials.createSsl(), {deadline: deadline});
  }
})();
