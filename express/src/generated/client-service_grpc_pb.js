// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var client$service_pb = require('./client-service_pb.js');
var result_pb = require('./result_pb.js');

function serialize_client_service_AuthRequest(arg) {
  if (!(arg instanceof client$service_pb.AuthRequest)) {
    throw new Error('Expected argument of type client_service.AuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_client_service_AuthRequest(buffer_arg) {
  return client$service_pb.AuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_client_service_AuthResponse(arg) {
  if (!(arg instanceof client$service_pb.AuthResponse)) {
    throw new Error('Expected argument of type client_service.AuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_client_service_AuthResponse(buffer_arg) {
  return client$service_pb.AuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_client_service_UpdateProfileRequest(arg) {
  if (!(arg instanceof client$service_pb.UpdateProfileRequest)) {
    throw new Error('Expected argument of type client_service.UpdateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_client_service_UpdateProfileRequest(buffer_arg) {
  return client$service_pb.UpdateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_result_Response(arg) {
  if (!(arg instanceof result_pb.Response)) {
    throw new Error('Expected argument of type result.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_result_Response(buffer_arg) {
  return result_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var CoreClientServiceService = exports.CoreClientServiceService = {
  // регистрация пользователя, в ответ придет JWT токен
registration: {
    path: '/client_service.CoreClientService/Registration',
    requestStream: false,
    responseStream: false,
    requestType: client$service_pb.AuthRequest,
    responseType: client$service_pb.AuthResponse,
    requestSerialize: serialize_client_service_AuthRequest,
    requestDeserialize: deserialize_client_service_AuthRequest,
    responseSerialize: serialize_client_service_AuthResponse,
    responseDeserialize: deserialize_client_service_AuthResponse,
  },
  // авторизация пользователя, в ответ придет JWT Токен
login: {
    path: '/client_service.CoreClientService/Login',
    requestStream: false,
    responseStream: false,
    requestType: client$service_pb.AuthRequest,
    responseType: client$service_pb.AuthResponse,
    requestSerialize: serialize_client_service_AuthRequest,
    requestDeserialize: deserialize_client_service_AuthRequest,
    responseSerialize: serialize_client_service_AuthResponse,
    responseDeserialize: deserialize_client_service_AuthResponse,
  },
  // смена фио телефона и пароля
updateProfile: {
    path: '/client_service.CoreClientService/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: client$service_pb.UpdateProfileRequest,
    responseType: result_pb.Response,
    requestSerialize: serialize_client_service_UpdateProfileRequest,
    requestDeserialize: deserialize_client_service_UpdateProfileRequest,
    responseSerialize: serialize_result_Response,
    responseDeserialize: deserialize_result_Response,
  },
};

exports.CoreClientServiceClient = grpc.makeGenericClientConstructor(CoreClientServiceService);
