const {createMockServer} = require("grpc-mock");
const mockServer = createMockServer({
  protoPath: "./proto/grpc/health/v1/health.proto",
  packageName: "grpc.health.v1",
  serviceName: "Health",
  rules: [
    { method: "Check", input: { service: "SERVING" }, output: { status: "SERVING" } }
  ]
});
mockServer.listen("0.0.0.0:50051");