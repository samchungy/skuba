---
'skuba': patch
---

template: Change some lambda worker info logs to debug

The "Function succeeded" log message was changed from `info` to `debug`
to reduce the amount of unnecessary logs in production.  
The message will still be logged in dev environments but at a `debug`
level.

The "Function succeeded" log message was retained as it is part of unit-testing
the handler.