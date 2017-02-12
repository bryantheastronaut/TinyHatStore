### User Authentication with the MERN Stack -- An E-Shop Story
---
Hello! I'm back to teach you a bit more about that sexy sexy MERN stack! Today we will be talking about User Authentication! We will set up a simple log in and credential check with an awesome npm module called Passport for our e-Shop. You can find the [starting branch here.](https://github.com/bryantheastronaut/tinyhatstore)

You can poke around the main branh for the finished product, or pull down the _tutorial-start_ branch for the skeleton of the shop with a few items and basic connections. Nothing too crazy has been done yet as far as auth stuff, so we should be in a good place to learn some stuff!

Note: If you are lost with what you are seeing in the tutorial-start branch, I wont be going really any of it, so please check out [my other MERN Stack Tutorial](INSERT LINK HERE) to get up to speed before jumping in here.

Okay, lets get down to it!

---
## Setting up

[Go here and clone the starter project or write one yourself!](https://github.com/bryantheastronaut/TinyHatStore/tree/tutorial-start)

run `cd TinyHatStore && npm i` to change into the cloned directory and install all the dependencies we need up to this point -- we will be adding the user auth ones later.

I already have a mongo instance running (through mLab - [sign up here if you need to](https://www.mlab.com)) - the free version is fine.

Head into the _server.js_ file in the main directory and put in your mongodb uri with your username/password in it to get started!


__BRYAN TODO: PUT A SEED SCRIPT IN SO THEY CAN FILL THEIR DB WITH HAT && [?USER] DATA__

Sweet! Now if we `npm run start` we will load up our node server and our react client and see a pretty dope web store. I would love to shop here! the only problem is i cant make an account, therefore I cant buy anything....

lets fix that!

### Step 1: The Magic Module
Like I said, we will be using [Passport](https://github.com/jaredhanson/passport-local) for this tutorial, so:

`npm i --save passport passport-local passport-facebook` to get the modules ready. 
