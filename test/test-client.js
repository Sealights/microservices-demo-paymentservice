var PROTO_PATH = "../proto/grpc/health/v1/health.proto";

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).grpc.health.v1;

var client = new hello_proto.Health('localhost:50051', grpc.credentials.createInsecure());

client.Check({ service: "SERVING"}, function (err, response) {
    if(err) console.error(err);
  console.log("Checking... ", response.status);
});
