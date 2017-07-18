module.exports = (function(){
  return function(host = 'converse.ai') {
    const grpc = require('grpc');
    const path = require('path');
    const proto = grpc.load({
      root: path.join(__dirname, 'protos'),
      file: 'github.com/converseai/service/plugindata/datamanagement.proto'
    });

    var deadline =  new Date().setTime(new Date().getTime() + (3600 * 1000)).toString();
    return new proto.plugindata.DataManagement(`plugindata.${host}:443`, grpc.credentials.createSsl(), {deadline: deadline});
  }
})();
