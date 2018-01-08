![RNG](https://github.com/richTheCreator/RN_GUARD/blob/master/src/assets/images/banner.png?raw=true)
### Motivation :bulb:

RNG is intended to be a source of inspiration for building your own react-native application. It has enough that you can move past the "what should I use" phase and right into building!

> Defend your app, take your shield!🛡

### ⚔️ Tools 
Built for the modern RN developer. 

:white_check_mark: ES6 <br/>
:white_check_mark: Eslint <br/>
:white_check_mark: Axios <br/>
:white_check_mark: MobX <br/>
:white_check_mark: MobX-Persist <br/>
:white_check_mark: React-Native-FBsdk <br/>
:white_check_mark: React-Native-Router-Flux <br/>
:white_check_mark: React-Native-Easy-Grid <br/>
:white_check_mark: React-Native-Vector-Icons <br/>

###  :art: Simple Theming
> "Update once, update everywhere."
Start a consistent design system from the start. 

#### How To
Create or copy a folder that includes: <br/>

1. Index.js <br/>
2. Styles.js <br/>
3. Component.js <br/>

In `Styles.js` place `import { Colors, Fonts } from '@theme/'`

In `Component.js` place `import Styles from './Styles'`

### 🛡 Secure Routing 
The router is protected with a combination of the `fb-sdk`, `mobx`, `mobx-persist`, and `react-native-router-flux`. 

#### RP_Server: <br/>
In order for this to work, you need to also download and install the [RP_Server](https://github.com/richTheCreator/RNG-SERVER). 

#### Custom Server: <br/>
Change these few files and functions: 

1. Open `userStore.js` 
2. Replace `signIn`, `signUp`, `createUser`, and `fetchUser`
3. Update `api.js` with your server address

### :beginner: Getting Started

#### Step 1: Install React-Native

Make sure you're set up for [React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)

#### Step 2: Check Node Version
Make sure you have Node 6.5+ <br/>

You can check your version of node by running

```
node -v
```

#### Step 3: Run 

```
yarn
```
If you don't have it, install [Yarn](https://yarnpkg.com/lang/en/docs/install/) for your system.

#### Step 4: Link

```
rnpm link
```

#### Step 4: Server Setup

Head over to the [repo ](https://facebook.github.io/react-native/docs/getting-started.html#content) and follow the install instructions.

or provide your own server :smile:

#### Step 5: Install the FBsdk
Make sure you have followed all the steps in the [React-Native-Fbsdk](https://github.com/facebook/react-native-fbsdk)
 
 A couple of tips!
 1. Make sure you have the `FacebookSDK` folder in `~/Documents`
 2. Check xCode `Build Settings` --> `Framework Search Paths` for a path to step 1.
 3. If no path, drag your `FacebookSDK` folder from `~/Documents` in
 4. Check your `info.plist` for proper credentials
 5. Open an issue if all else fails

### 📱 Demo:

![RN_GUARD](https://github.com/richTheCreator/RN_GUARD/blob/master/src/assets/images/rn_guard_compressed.gif?raw=truee)

## :star: Let me know if this helped :star:
I know I forget to star repos from time to time, but please do if this helped!
