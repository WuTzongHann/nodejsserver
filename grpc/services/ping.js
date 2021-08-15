import { status } from '@grpc/grpc-js'
const statusesByCodes = new Map([
  [status.OK, 'OK'],
  [status.CANCELLED, 'Canceled'],
  [status.UNKNOWN, 'Unknown'],
  [status.INVALID_ARGUMENT, 'InvalidArgument'],
  [status.DEADLINE_EXCEEDED, 'DeadlineExceeded'],
  [status.NOT_FOUND, 'NotFound'],
  [status.ALREADY_EXISTS, 'AlreadyExists'],
  [status.PERMISSION_DENIED, 'PermissionDenied'],
  [status.RESOURCE_EXHAUSTED, 'ResourceExhausted'],
  [status.FAILED_PRECONDITION, 'FailedPrecondition'],
  [status.ABORTED, 'Aborted'],
  [status.OUT_OF_RANGE, 'OutOfRange'],
  [status.UNIMPLEMENTED, 'Unimplemented'],
  [status.INTERNAL, 'Internal'],
  [status.UNAVAILABLE, 'Unavailable'],
  [status.DATA_LOSS, 'DataLoss'],
  [status.UNAUTHENTICATED, 'Unauthenticated']
])

const echo = ctx => {
  const receivedTime = new Date()
  const response = {
    echoRequest: {
      messageId: ctx.req.messageId,
      messageBody: ctx.req.messageBody
    },
    timestr: receivedTime,
    timestamp: receivedTime.getTime()
  }
  ctx.setStatus({ statusCode: status.OK, statusDescription: statusesByCodes.get(status.OK) })
  ctx.res = response
}
const waitMilliSeconds = (ms) => {
  const start = new Date().getTime()
  let end = start
  while (end < start + ms) {
    end = new Date().getTime()
  }
}
const testing = async (ctx) => {
  await waitMilliSeconds(1000)
  const receivedTime = new Date()
  const response = {
    echoRequest: {
      messageId: ctx.req.messageId,
      messageBody: ctx.req.messageBody
    },
    timestr: receivedTime,
    timestamp: receivedTime.getTime()
  }
  ctx.setStatus({ statusCode: status.OUT_OF_RANGE, statusDescription: statusesByCodes.get(status.OUT_OF_RANGE) })
  ctx.res = response
}

export default { echo, testing }
export { echo, testing }
