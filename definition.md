# Javascript
I am a single-threaded  non-blocking asynchronous concurrent language. I have a call-stack, an event loop, a callback queue and some APIs.

V8 has 
- A call stack
- A heap

- Browser gets blocked if we use sync calls.
So we can solve by async calls ( non-blocking )
- In Node, web APIs are C++ APIs, so multi-threading is possible