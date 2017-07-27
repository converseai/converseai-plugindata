const assert = require('assert');

describe('Client', function () {
  var client;
  before(function(){
    client = require('../')('');
    console.log(client);
  })

  it('Client exists', function() {
    assert(client !== undefined && client !== null);
    assert(client.getPluginOAuth2Info !== undefined && client.getPluginOAuth2Info !== null);
    assert(client.getPluginPrivateKeys !== undefined && client.getPluginPrivateKeys !== null);
    assert(client.storePluginLocalData !== undefined && client.storePluginLocalData !== null);
    assert(client.getPluginLocalData !== undefined && client.getPluginLocalData !== null);
    assert(client.addLog !== undefined && client.addLog !== null);
    assert(client.uploadPluginCode !== undefined && client.uploadPluginCode !== null);
    assert(client.streamLogs !== undefined && client.streamLogs !== null);
  });

  it('Client AddLog', function(done) {
    client.addLog({
      caller: null,
      logRecord: null
    }, function() {
      done();
    });
  });

});
