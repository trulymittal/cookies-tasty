# Cookies in NodeJS using cookie-parser package

This is a demo application for: How to use cookies in an Express NodeJS application.
**cookie-parser** module is used for handling cookies.

---

## Cookie Helper

- **`httponly`**

  > When this attribute is set, client-side scripts are not allowed to access the cookie. Now, the question that arises is, 'Why do I need to safeguard my cookies from client-side scripts?'
  > <br><br> > _The short answer_: **XSS** > <br> > _The long answer_: Cross Site Scripting attacks can be used to steal cookies with the help of client-side scripts.
  > <br><br>
  > Restricting access to cookies by client-side scripts does not completely mitigate the risk of stealing cookies via XSS. However, it does raise the bar considerably and ensures that the most common XSS attack is mitigated, though not completely.

- **`secure`**

  > The _Secure_ attribute makes sure that the cookie will only be sent with requests made over an encrypted connection and an attacker won't be able to steal cookies by sniffing.

- **`maxAge`**

  > This attribute is used to set persistent cookies. It signifies how long the browser should use the persistent cookie and when the cookie should be deleted.
  > <br><br>
  > If this attribute is not specified, then the lifetime of the cookie is the same as that of browser session, i.e. it will be a non-persistent cookie.

- **`expires`**

  > Same as `maxAge`, but expiration date is provided instead of time to expire.

- **`domain`**

  > The _domain_ attribute signifies the domain for which the cookie is valid and can be submitted with every request for this domain or its subdomains. If this attribute is not specified, then the hostname of the originating server is used as the default value.

- **`path`**
  > The _path_ attribute signifies the URL or path for which the cookie is valid. The default path attribute is set as '/'.

---

## To start setting up the project

Step 1: Clone the repo

```zsh
git clone https://github.com/trulymittal/cookies-tasty.git
```

Step 2: cd into the cloned repo and run:

```zsh
npm install
```

Step 3 (optional): For installing nodemon globally.

```zsh
npm install -g nodemon
```

Step 4: Start the script by

```zsh
npm start
```

## Author

- [**Truly Mittal**](https://trulymittal.com)

## Contribute

You can fork this repo and send me a PR.

## License

This project is licensed under the MIT License.
