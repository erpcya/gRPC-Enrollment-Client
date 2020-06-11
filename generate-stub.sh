# Generate Stub to enrollment.proto file
protoc proto/enrollment.proto \
--js_out=import_style=commonjs:src/grpc \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc
