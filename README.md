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

# Task 2

*Task #2 (ALL GROUPS)*

It's necessary skills for every programmer — process files, calculate checksums, follow the instruction, etc.

Use language of your group (C# or JavaScript/TypeScript). In principle, you can use anything else, like Java or Python or Ruby or anything you like (*you don't submit the code in this task, only the result*).

1. Calculate *SHA3-256* for every file from archive (https://www.dropbox.com/s/oy2668zp1lsuseh/task2.zip?dl=1). Note, **files are binary, you don’t need encodings **— if you read file to string with some encoding, you have to use the same encoding to decode string into bytes back for hashing (there is a technical term for such conversions — “stupid activity”).

2. Write hashes as *64 hex digits in lower case.*

3. Sort (ascending) hashes as strings (not chars in hashes, but hashes as whole).

4. Join sorted hashes *without any separator*.

5. Concatenate resulted string with your e-mail in lowercase.

6. Find the SHA3-256 of the result string.

Send obtained 64 hex digits in the lower case to the https://discord.com/channels/950701840901746708/1258451022800617492 channel using the following command

!task2 email 64hexdigitshere

Note: SHA3-256 is not the same algorithm as SHA-256. 

Some additional hints (based on the experience of previous groups): 
* check if you use SHA3-256, 
* check if you process exactly 256 required files (not everything in the some directory),
* check if you concatenate your strings without separator — beware of JavaScript's join!
* check if you write e-mail in lower case and e-mail goes to the end of the resulted string, 
* and, of course, you have to calculate separate hash for every file, not to update the same hash with every file.

> *Never work with *binary files in text editors** — if your IDE, e.g., changes automagically even a single byte, your won't get a proper result (redownload the files if necessary).


# Task 3

@everyone

*TASK #3* (FOR ALL GROUPS)

For those who have already sent #1 and #2.

Using the language of your choice—from the Java/C#/PHP/JavaScript/TypeScript/Ruby/Python set, please—to write a script that implements a *generalized* rock-paper-scissors game (with the supports of arbitrary odd number of arbitrary combinations). Of course, it's recommended to use the language of your "specialization", but it's not required.

When launched with **command line parameters** (arguments to the main or Main method in the case of Java or C#, sys.argv in Python, process.argv in Node.js, etc.) it accepts an odd number ≥ 3 non-repeating strings (if the arguments are incorrect, you must display a neat error message—what exactly is wrong and an example of how to do it right). All messages should be in English. These passed strings are moves (for example, Rock Paper Scissors or Rock Paper Scissors Lizard Spock or 1 2 3 4 5 6 7 8 9).

Important: **moves are passed as command line arguments, you don't parse them from the input stream (for example, a move may contain a space, but it shouldn't matter to your code).

The victory is defined as follows—half of the next moves in the circle wins, half of the previous moves in the circle lose (the semantics of the strings-moves is not important, he plays by the rules build upon the moves order the user used, even if the stone loses to scissors in its order—the contents of the strings-moves are not important for you).

The script generates a **cryptographically strong random key** (SecureRandom, RandomNumberGenerator, etc. - *mandatory) with a length of ***at least 256 bits, makes own (computer's) move, calculates HMAC (based on SHA2 or SHA3) from the own move as a message with the generated key, displays the HMAC to the user. After that the user gets "menu" 1 - Stone, 2 - Scissors, ...., 0 - Exit. The user makes his choice (in case of incorrect input, the "menu" is displayed again). The script shows who won, the move of the computer and the original key.

Re-read the paragraph above, the sequence is critical (it simply doesn't make sense to do it differently, for example, showing the key before the user's turn or HMAC instead of the key).

Thus the user can check that the computer plays fair (did not change its move after the user's move).

When you select the "help" option in the terminal, you need to display a table (ASCII-graphic) that determines which move wins.

The table generation should be in a separate class, the definition of the "rules" who won should be in a separate class, the key generation and HMAC functions should be in a separate class (at least 4 classes in total). You should use the core class libraries and third-party libraries to the maximum, and not reinvent the wheel. Help should be formatted as an N + 1 by N + 1 table, where N is the number of moves (determined by the number of arguments passed to the script). +1 to add a title for the rows and a title for the columns (contain the title of the move). Cells can contain Win/Lose/Draw.

THE NUMBER OF MOVES CAN BE ARBITRARY (odd and > 1, depending on the passed parameters), it is not hardwired into the code.


Example:

>java -jar game.jar rock Spock paper lizard scissors
HMAC: 9ED68097B2D5D9A968E85BD7094C75D00F96680DC43CDD6918168A8F50DE8507
Available moves:
1 - rock
2 - Spock
3 - paper
4 - lizard
5 - scissors
0 - exit
? - help
Enter your move: 3
Your move: paper
Computer move: rock
You win!
HMAC key: BD9BE48334BB9C5EC263953DA54727F707E95544739FCE7359C267E734E380A2
