# 2. Conceal the Password
So the form is submitting as expected, however the previous developer was clearly not too familiar with the web and how forms should be submitted.
As you probably noticed the form is submitting the values in the URL.
                                               
When you alert the company about this, they do realize that sending the password in clear text is a bad idea. 
Their ~~suggestion~~ order to you is to make sure that the password string is reversed and sent backwards instead. Can you do that?

---

The security is obviously not the main priority (either...) for this login page. 
It seems like the previous developer didn't have any experience in backend coding. 
In other words they are currently relying on the authentication being done in the front end. 🙀

The way a user is authenticated is by checking if the password is an anagram of the username. 
However the current code is always returning true, can you "fix" authentication logic?


