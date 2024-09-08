## Task 1
You have to write a JavaScript code that prints the longest common substring of passed arguments (with trailing newline — just use console.log for output).

The code will be running under Node.js and arguments will be passed via command line (it means you should not read standard input stream).

If the longest common superstring is empty (no arguments are passed or arguments have no common substrings) it’s necessary to print single newline. If there are several solution print any single one of them.

Limits are the following (do not use them in your solutions, these are only test restrictions): single string length is less or equal to 256, number of strings is less or equal to 64, strings contain only English letter and digits, time limit per test is 5 seconds.

The output should not contain any excess characters (error or debug messages, additional newlines, etc.).

The solution is accepted if all tests are passed. 

The result is calculated based on JavaScript file size (the smaller the better). So, no comments, no long names, no indents, etc.

You cannot use any external packages or use imports (there is only clean Node.js installation on the server). You cannot access "external world", e.g. read files, open network connections, etc.

You solution should be put in the lcs.js file (LCS in the lower case and .js extension).

You have to use only command-line arguments (no readline, no process.stdin, etc.; ONLY process.argv).

When called without arguments, your script should not fail.

If any test is failed your grade for this task is zero.

```
Some examples (output can be different if there are several solutions; there will be much more tests):

node lcs.js

node lcs.js ABCDEFZ WBCDXYZ
BCD
node lcs.js 132 12332 12312
1
node lcs.js ABCDEFGH ABCDEFG ABCEDF ABCED
ABC
node lcs.js ABCDEFGH ABCDEFG ABCDEF ABCDE
ABCDE
node lcs.js ABCDEFGH ABCDEFG ABCDEF ABCDE EDCBA
A
node lcs.js ABCDEFGH ABCDEFG ABCDEF ABCDE EDCBCA
BC
node lcs.js ABCDEFGH ABCDEFG AxBCDEF ABCDxE EDCBCAABCD
BCD
node lcs.js ABCDEFGH 1234

node lcs.js ABCDEFGH
ABCDEFGH
```

Notes
If you think that test is wrong, check whitespaces in your output — for example, test cannot differentiate spaces and junk output. Problems may arise in the new bot, it's expected. But the tests themselves are very well "tested".

For example, check the following arguments before submitting your solution: ABCQEFDEFGHIJ BCXEFGYZBCDEWEFGHU (e.g. there is the common EFGH substring).

Also, check that your script does not fail without arguments.

And one more time: the size of your code should be as small as possible.

And don’t use process.exit to quit your script. Or at least don’t use non-zero error code at least!

Why this task?
First of all, you will use JavaScript in 2024. It’s a fact.

The code golf is a great tool to study the language syntax. That's the second.

And you have to adapt to the given requirements. Code quality is not a set of some magic rules. 

We’ll talk about it later via Zoom.

DEADLINE: next Wednesday (it's possible to submit several solutions, the best working will be recorded).