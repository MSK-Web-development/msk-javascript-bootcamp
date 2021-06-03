Remember
> Whenever a promise is rejected, one of two events is sent to the global scope

Generally: "window" 
if being used in a web worker: "Worker"

## The two events

#### rejectionhandled
Sent when a promise is rejected, after that rejection has been handled by the executor's reject function.

#### unhandledrejection
Sent when a promise is rejected but there is no rejection handler available.
