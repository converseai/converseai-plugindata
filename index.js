module.exports = (function(){
  return function(host = 'converse.ai') {
    const grpc = require('grpc');
    const path = require('path');
    const proto = grpc.load({
      root: path.join(__dirname, 'protos'),
      file: 'github.com/converseai/service/plugindata/datamanagement.proto'
    });

    return new proto.plugindata.DataManagement(`plugindata.${host}:443`, grpc.credentials.createSsl());
  }
})();
