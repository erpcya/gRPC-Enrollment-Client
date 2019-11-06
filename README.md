# ADempiere Enrollment Client for gRPC
ADempiere Enrollment Client write in Javascript for gRPC service, use it for connect with
[ADempiere-gRPC-Server](https://github.com/erpcya/adempiere-gRPC-Server).

## Requirements
- [Envoy Proxy](https://www.envoyproxy.io/)
- [Envoy Pre-configured Proxy](https://github.com/erpcya/gRPC-Envoy-Proxy)

## Using it

``` bash
# installing via NPM
npm install @adempiere/grpc-enrollment-client
```
``` bash
# installing via Yarn
yarn add @adempiere/grpc-enrollment-client
```

## A Example
### Declare Enrollment
```javascript
const Enrollment = require('@adempiere/grpc-enrollment-client');
// URL, Version
let enrollment = new Enrollment(GRPC_HOST, 'Version Epale');
```
### Declare Data with specific language
```javascript
const Enrollment = require('@adempiere/grpc-enrollment-client');
let enrollment = new Enrollment(GRPC_HOST, 'Version Epale');
```

### Request Enroll a user
```javascript
//  Request Enroll a User
//  Name, UserName, EMail
enrollment.enrollUser('Hola Hola', 'hola', 'hola@hola.com')
.then(user => {
  console.log('User Enrolled' + user);
})
.catch(err => console.log("Error: " + err.message));
```

Output
```
Hola Hola
```

### Request Reset Password
```javascript
//  Request Reset Password
//  UserName, EMail
enrollment.requestResetPassword('hola', 'hola@hola.com')
.then(resetPasswordResponse => {
  console.log('Response for request' + resetPasswordResponse);
})
.catch(err => console.log("Error: " + err.message));
```

Output
```
Ok
```

### Request Reset Password
```javascript
//  Request Reset Password
//  Token, Password
enrollment.resetPasswordFromToken('53c1c836-6e47-11e9-8160-3709b250e4e1', 'holaPass')
.then(resetPasswordResponse => {
  console.log('Response for reset' + resetPasswordResponse);
})
.catch(err => console.log("Error: " + err.message));
```

Output
```
Ok
```

## Recreate proto stub class (only for contribute to project)
For recreate stub class you must have follow:
- [protobuf](https://github.com/protocolbuffers/protobuf/releases)
- [protoc](https://github.com/grpc/grpc-web/releases)
- Also you can see it: [gRPC-web](https://github.com/grpc/grpc-web)
- [gRPC](https://grpc.io/docs/tutorials/basic/web.html)
After installed it just go to source code folder an run it:
```
protoc proto/enrollment.proto \
--js_out=import_style=commonjs:src/grpc \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc
```
The result is generated on: src/grpc folder
