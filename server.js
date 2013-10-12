var c_options = require("./collector-config"),
    e_options = require("./evaluator-config"),
    cube = require("cube"),
    c_server = cube.server(c_options),
    e_server = cube.server(e_options);

c_server.register = function(db, endpoints) {
  cube.collector.register(db, endpoints);
};

e_server.register = function(db, endpoints) {
  cube.evaluator.register(db, endpoints);
};

c_server.start();
e_server.start();
