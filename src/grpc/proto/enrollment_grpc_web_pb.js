/**
 * @fileoverview gRPC-Web generated client stub for enrollment
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.enrollment = require('./enrollment_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.enrollment.RegisterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.enrollment.RegisterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.enrollment.EnrollUserRequest,
 *   !proto.enrollment.User>}
 */
const methodDescriptor_Register_EnrollUser = new grpc.web.MethodDescriptor(
  '/enrollment.Register/EnrollUser',
  grpc.web.MethodType.UNARY,
  proto.enrollment.EnrollUserRequest,
  proto.enrollment.User,
  /**
   * @param {!proto.enrollment.EnrollUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.enrollment.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.enrollment.EnrollUserRequest,
 *   !proto.enrollment.User>}
 */
const methodInfo_Register_EnrollUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.enrollment.User,
  /**
   * @param {!proto.enrollment.EnrollUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.enrollment.User.deserializeBinary
);


/**
 * @param {!proto.enrollment.EnrollUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.enrollment.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.enrollment.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.enrollment.RegisterClient.prototype.enrollUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/enrollment.Register/EnrollUser',
      request,
      metadata || {},
      methodDescriptor_Register_EnrollUser,
      callback);
};


/**
 * @param {!proto.enrollment.EnrollUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.enrollment.User>}
 *     A native promise that resolves to the response
 */
proto.enrollment.RegisterPromiseClient.prototype.enrollUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/enrollment.Register/EnrollUser',
      request,
      metadata || {},
      methodDescriptor_Register_EnrollUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.enrollment.ResetPasswordRequest,
 *   !proto.enrollment.ResetPasswordResponse>}
 */
const methodDescriptor_Register_ResetPassword = new grpc.web.MethodDescriptor(
  '/enrollment.Register/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.enrollment.ResetPasswordRequest,
  proto.enrollment.ResetPasswordResponse,
  /**
   * @param {!proto.enrollment.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.enrollment.ResetPasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.enrollment.ResetPasswordRequest,
 *   !proto.enrollment.ResetPasswordResponse>}
 */
const methodInfo_Register_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.enrollment.ResetPasswordResponse,
  /**
   * @param {!proto.enrollment.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.enrollment.ResetPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.enrollment.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.enrollment.ResetPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.enrollment.ResetPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.enrollment.RegisterClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/enrollment.Register/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_Register_ResetPassword,
      callback);
};


/**
 * @param {!proto.enrollment.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.enrollment.ResetPasswordResponse>}
 *     A native promise that resolves to the response
 */
proto.enrollment.RegisterPromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/enrollment.Register/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_Register_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.enrollment.ResetPasswordTokenRequest,
 *   !proto.enrollment.ResetPasswordResponse>}
 */
const methodDescriptor_Register_ResetPasswordFromToken = new grpc.web.MethodDescriptor(
  '/enrollment.Register/ResetPasswordFromToken',
  grpc.web.MethodType.UNARY,
  proto.enrollment.ResetPasswordTokenRequest,
  proto.enrollment.ResetPasswordResponse,
  /**
   * @param {!proto.enrollment.ResetPasswordTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.enrollment.ResetPasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.enrollment.ResetPasswordTokenRequest,
 *   !proto.enrollment.ResetPasswordResponse>}
 */
const methodInfo_Register_ResetPasswordFromToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.enrollment.ResetPasswordResponse,
  /**
   * @param {!proto.enrollment.ResetPasswordTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.enrollment.ResetPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.enrollment.ResetPasswordTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.enrollment.ResetPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.enrollment.ResetPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.enrollment.RegisterClient.prototype.resetPasswordFromToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/enrollment.Register/ResetPasswordFromToken',
      request,
      metadata || {},
      methodDescriptor_Register_ResetPasswordFromToken,
      callback);
};


/**
 * @param {!proto.enrollment.ResetPasswordTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.enrollment.ResetPasswordResponse>}
 *     A native promise that resolves to the response
 */
proto.enrollment.RegisterPromiseClient.prototype.resetPasswordFromToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/enrollment.Register/ResetPasswordFromToken',
      request,
      metadata || {},
      methodDescriptor_Register_ResetPasswordFromToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.enrollment.ActivateUserRequest,
 *   !proto.enrollment.ActivateUserResponse>}
 */
const methodDescriptor_Register_ActivateUser = new grpc.web.MethodDescriptor(
  '/enrollment.Register/ActivateUser',
  grpc.web.MethodType.UNARY,
  proto.enrollment.ActivateUserRequest,
  proto.enrollment.ActivateUserResponse,
  /**
   * @param {!proto.enrollment.ActivateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.enrollment.ActivateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.enrollment.ActivateUserRequest,
 *   !proto.enrollment.ActivateUserResponse>}
 */
const methodInfo_Register_ActivateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.enrollment.ActivateUserResponse,
  /**
   * @param {!proto.enrollment.ActivateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.enrollment.ActivateUserResponse.deserializeBinary
);


/**
 * @param {!proto.enrollment.ActivateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.enrollment.ActivateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.enrollment.ActivateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.enrollment.RegisterClient.prototype.activateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/enrollment.Register/ActivateUser',
      request,
      metadata || {},
      methodDescriptor_Register_ActivateUser,
      callback);
};


/**
 * @param {!proto.enrollment.ActivateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.enrollment.ActivateUserResponse>}
 *     A native promise that resolves to the response
 */
proto.enrollment.RegisterPromiseClient.prototype.activateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/enrollment.Register/ActivateUser',
      request,
      metadata || {},
      methodDescriptor_Register_ActivateUser);
};


module.exports = proto.enrollment;

