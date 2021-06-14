# strict mode
## The modern mode, "use strict"
For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn’t change.

That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.

This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: <code>"use strict".</code>

## "use strict"
The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

For example: 
```
"use strict";

// this code works the modern way
...
```

### Note: 
<code>"use strict"</code> can be put at the beginning of a function. Doing that enables strict mode in that function only. But usually people use it for the whole script.

## Browser Console
When you use a developer console to run code, please note that it doesn’t <code>use strict</code> by default.

Sometimes, when <code>use strict</code> makes a difference, you’ll get incorrect results.

So, how to actually <code>use strict</code> in the console?

First, you can try to press <kbd>Shift+Enter</kbd> to input multiple lines, and put <code>use strict</code> on top, like this:
```
'use strict'; <Shift+Enter for a newline>
//  ...your code
<Enter to run>
```
It works in most browsers, namely Firefox and Chrome.

If it doesn’t, e.g. in an old browser, there’s an ugly, but reliable way to ensure use strict. Put it inside this kind of wrapper:
```
(function() {
  'use strict';

  // ...your code here...
})()
```

## Should we "use strict"?
The question may sound obvious, but it’s not so.

One could recommend to start scripts with <code>"use strict"</code>… But you know what’s cool?

Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable <code>use strict</code> automatically. So we don’t need to add the <code>"use strict"</code> directive, if we use them.

<strong>
So, for now <code>"use strict";</code> is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.
</strong>

### Some links for details about <code>"use strict";</code>:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

https://www.geeksforgeeks.org/strict-mode-javascript/