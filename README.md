# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
- I would fit my automated tests within a Github action that runs whenever code is pushed. It would ensure that each time a person pushed code into a repo, the code is valid and doesn't break anything already existing. It's a smart way of ensuring that there's always a working version of the website available.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
- No. We use an end-to-end test to mimic user actions from start to finish. If we want to check if a function returns the correct output, we should do a unit test. 
  
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- No. An E2E test would be more useful for this since it actually tests the functionality of a user being able to type out a message and send it to another user. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- Yes. Max message length is an isolated feature, and it would be useful to verify different scenarios (text values) typed in and checking if the max message length would work. 

