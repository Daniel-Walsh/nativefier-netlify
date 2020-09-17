# ⚡️ Nativefied Netlify

Netlify, bundled as an Electron desktop app with Nativefier.

Handy when you use a shared account for accessing Netlify, but also have to manage your own personal credentials for the same system. This way, the credentials and session with the Electron application are completely separate from your web browser.

## 🛠 Installation

1. Clone the repository locally
1. Execute `npm i` to complete the install and compile the Nativefier build.
1. Copy the compiled Electron application from `./build/Netlify-darwin-x64` to your Applications directory, and run it!

## 🎨 Injected CSS

Some basic CSS has been injected in order to allow the header to be draggable:

```css
/* header is draggable... */
header {
    -webkit-app-region: drag;
}
  
/* but any buttons inside the header shouldn't be draggable */
header a,
header button {
    -webkit-app-region: no-drag;
}
```