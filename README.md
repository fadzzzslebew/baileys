# <div align='center'>WhatsApp Web API</div>

<div align="center">

  <img src="https://fadzzzproject.my.id/shigure_ui.jpg" />

  <a href="https://www.npmjs.com/package/@fadzzzslebew/baileys">
    <img src="https://img.shields.io/npm/v/@fadzzzslebew/baileys?color=red&label=Version&logo=npm" alt="npm version" />
  </a>

  <a href="https://www.npmjs.com/package/@fadzzzslebew/baileys">
    <img src="https://img.shields.io/npm/dt/@fadzzzslebew/baileys?color=red&label=Downloads&logo=npm" alt="npm downloads" />
  </a>

  <a href="https://whatsapp.com/channel/0029VbBiCstKLaHkqyvdXc1o">
    <img src="https://img.shields.io/badge/WhatsApp-Channel-25D366?logo=whatsapp&logoColor=white" alt="WhatsApp Channel" />
  </a>

</div>

## 📖 Table of Contents

- [Important Note](#important-note)
- [Install](#install)
- [Added Features and Improvements](#-added-features-and-improvements)
- [Feature Examples](#feature-examples)
  - [Newsletter Management](#newsletter-management)
  - [Button and Interactive Message Management](#button-and-interactive-message-management)
  - [Send Album Message](#send-album-message)
  - [AI Message Icon Customization](#ai-message-icon-customization)
  - [Custom Pairing Code Generation](#custom-pairing-code-generation)
- [Reporting Issues](#reporting-issues)
- [Notes](#notes)
---

## Important Note

The original repository was initially removed by its creator and subsequently taken over by [WhiskeySockets](https://github.com/WhiskeySockets). Building upon this foundation, I have implemented several enhancements and introduced new features that were not present in the original repository. These improvements aim to elevate functionality and provide a more robust and versatile experience.
Join the Channel WhatsApp [here](https://whatsapp.com/channel/0029VbBiCstKLaHkqyvdXc1o)

## Install

Install in package.json:
```json
"dependencies": {
    "@fadzzzslebew/baileys": "latest"
}
```

or install in terminal:

Use the stable version:
```
npm install @fadzzzslebew/baileys
```
Use the edge version (no guarantee of stability, but latest fixes + features)
```
yarn add github:fadzzzslebew/baileys
```

Then import the default function in your code:
```ts 
// type esm
import makeWASocket from '@fadzzzslebew/baileys'
```

```js
// type cjs
const { default: makeWASocket } = require("@fadzzzslebew/baileys")
```

## Added Features and Improvements

| Feature                               | Description                                                                                                                               |
| :------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| 💬 **Send Messages to Channels**     | Supports sending text and media messages to channels.                                                                                     |
| 🔘 **Button & Interactive Messages** | Supports sending button messages and interactive messages on WhatsApp Messenger and WhatsApp Business.                                   |
| 🖼️ **Send Album Messages**           | Supports sending multiple images as an album (grouped media message), enabling richer and more organized media sharing.                  |
| 👥 **Group with LID Support**       | Full support for group using `@lid`, ensuring compatibility with the latest WhatsApp group addressing format.                         |
| 🤖 **AI Message Icon**               | Customize message appearances with an optional AI icon, adding a modern touch.                                                            |
| 🖼️ **Full-Size Profile Pictures**    | Allows users to upload profile pictures in their original size without cropping, ensuring better quality and visual presentation.         |
| 🔑 **Custom Pairing Codes**          | Users can now create and customize pairing codes as they wish, enhancing convenience and security when connecting devices.                |
| 🛠️ **Libsignal Fixes**               | Enjoy a cleaner development experience with refined logs, providing more informative and less cluttered output from the libsignal library.|

More features and improvements will be added in the future.

## Feature Examples

Here are some examples of features that have been added:

### Newsletter Management

<details>
<summary style="font-weight: bold; cursor: pointer; padding: 8px; border-bottom: 1px solid #eee; margin-bottom: 5px;">Show Examples</summary>
<div style="padding: 10px 15px; background: #f9f9f9; border: 1px solid #eee; border-top: none; border-radius: 0 0 5px 5px;">

- **To get info newsletter**
```ts
const metadata = await sock.newsletterMetadata("invite", "xxxxx")
// or
const metadata = await sock.newsletterMetadata("jid", "abcd@newsletter")
console.log(metadata)
```
- **To update the description of a newsletter**
```ts
await sock.newsletterUpdateDescription("abcd@newsletter", "New Description")
```
- **To update the name of a newsletter**
```ts
await sock.newsletterUpdateName("abcd@newsletter", "New Name")
```  
- **To update the profile picture of a newsletter**
```ts
await sock.newsletterUpdatePicture("abcd@newsletter", buffer)
```
- **To remove the profile picture of a newsletter**
```ts
await sock.newsletterRemovePicture("abcd@newsletter")
```
- **To mute notifications for a newsletter**
```ts
await sock.newsletterUnmute("abcd@newsletter")
```
- **To mute notifications for a newsletter**
```ts
await sock.newsletterMute("abcd@newsletter")
```
- **To create a newsletter**
```ts
const metadata = await sock.newsletterCreate("Newsletter Name")
console.log(metadata)
```
- **To delete a newsletter**
```ts
await sock.newsletterDelete("abcd@newsletter")
```
- **To follow a newsletter**
```ts
await sock.newsletterFollow("abcd@newsletter")
```
- **To unfollow a newsletter**
```ts
await sock.newsletterUnfollow("abcd@newsletter")
```
- **To send reaction**
```ts
// jid, id message & emoticon
// way to get the ID is to copy the message url from channel
// Example: [ https://whatsapp.com/channel/xxxxx/175 ]
// The last number of the URL is the ID
const id = "175"
await sock.newsletterReactMessage("abcd@newsletter", id, "🥳")
```
</div>
</details>

### Button and Interactive Message Management

<details>
<summary style="font-weight: bold; cursor: pointer; padding: 8px; border-bottom: 1px solid #eee; margin-bottom: 5px;">Show Examples</summary>
<div style="padding: 10px 15px; background: #f9f9f9; border: 1px solid #eee; border-top: none; border-radius: 0 0 5px 5px;">

- **To send button with text**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Hello World',
    buttons,
    headerType: 1
}

await sock.sendMessage(id, buttonMessage, { quoted: null })
```
- **To send button with image**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    image: { url: "https://example.com/abcd.jpg" }, // image: buffer or path
    caption: "Hi it's button message with image",
    footer: 'Hello World',
    buttons,
    headerType: 1
}

await sock.sendMessage(id, buttonMessage, { quoted: null })

```
- **To send button with video**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    video: { url: "https://example.com/abcd.mp4" }, // video: buffer or path
    caption: "Hi it's button message with video",
    footer: 'Hello World',
    buttons,
    headerType: 1
}

await sock.sendMessage(id, buttonMessage, { quoted: null })
```

- **To send button list message**
```ts
// Just working in a private chat
await sock.sendMessage(
    jid,
    {
        text: 'This is a list!', 
        footer: 'Hello World!', 
        title: 'Amazing boldfaced list title', 
        buttonText: 'Required, text on the button to view the list', 
        sections: [
           {
         	title: 'Section 1',
         	rows: [{
                title: 'Option 1', 
                rowId: 'option1'
             },
 	        {
                title: 'Option 2', 
                rowId: 'option2', 
                description: 'This is a description'
           }]
       },
       {
       	title: 'Section 2',
       	rows: [{
               title: 'Option 3', 
               rowId: 'option3'
           },
	       {
               title: 'Option 4', 
               rowId: 'option4', 
               description: 'This is a description V2'
           }]
       }]
    }
)
```

- **To send interactive message**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Tap Here!",
             url: "https://www.example.com/"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy Code",
             id: "12345",
             copy_code: "12345"
        })
     }
]

const interactiveMessage = {
    text: "Hello World!",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
}

await sock.sendMessage(id, interactiveMessage, { quoted: null })
```
- **To send interactive message with image**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Tap Here!",
             url: "https://www.example.com/"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy Code",
             id: "12345",
             copy_code: "12345"
        })
     }
]

const interactiveMessage = {
    image: { url: "https://example.com/abcd.jpg" }, // image: buffer or path
    caption: "this is the caption",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
}

await sock.sendMessage(id, interactiveMessage, { quoted: null })
```
- **To send interactive message with video**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Tap Here!",
             url: "https://www.example.com/"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy Code",
             id: "12345",
             copy_code: "12345"
        })
     }
]

const interactiveMessage = {
    video: { url: "https://example.com/abcd.mp4" }, // video: buffer or path
    caption: "this is the caption",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
}

await sock.sendMessage(id, interactiveMessage, { quoted: null })
```
- **To send list interactive**
```ts
const interactiveButtons = [
  {
    name: "single_select",
    buttonParamsJson: JSON.stringify({
      title: "message",
      sections: [
        {
          title: "title",
          highlight_label: "label",
          rows: [
            {
              header: "HEADER",
              title: "TITLE",
              description: "DESCRIPTION",
              id: "YOUR ID"
            },
            {
              header: "HEADER",
              title: "TITLE",
              description: "DESCRIPTION",
              id: "YOUR ID"
            }
          ]
        }
      ]
    })
  }
];

const interactiveMessage = {
    text: "Hello World!",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
};

await sock.sendMessage(id, interactiveMessage, { quoted: null });
```

</div>
</details>

### Send Album Message

<details>
<summary style="font-weight: bold; cursor: pointer; padding: 8px; border-bottom: 1px solid #eee; margin-bottom: 5px;">Show Example</summary>
<div style="padding: 10px 15px; background: #f9f9f9; border: 1px solid #eee; border-top: none; border-radius: 0 0 5px 5px;">

```ts
// Media can be a URL, buffer, or path.
const media = [
  {
    image: { url: "https://example.com/image.jpg" }
  },
  {
    image: await getBuffer("https://example.com/image.jpg")
  },
  {
    video: { url: "https://example.com/video.mp4" }
  }
]

await sock.sendMessage(id, { album: media, caption: "testing send album" }, { quoted: null })
```

</div>
</details>

### AI Message Icon Customization

<details>
<summary style="font-weight: bold; cursor: pointer; padding: 8px; border-bottom: 1px solid #eee; margin-bottom: 5px;">Show Example</summary>
<div style="padding: 10px 15px; background: #f9f9f9; border: 1px solid #eee; border-top: none; border-radius: 0 0 5px 5px;">

```ts
await sock.sendMessage(
    jid,
    {
        text: 'Hi'
    }, {
    ai: true // Add ai usage and change it to true
    }
)

// If using relay
await sock.relayMessage(
    jid,
    {
        extendedTextMessage: {
            text: 'Hi'
        }
    }, {
    AI: true // Use capital letters
    }
)
```
</div>
</details>

### Custom Pairing Code Generation

<details>
<summary style="font-weight: bold; cursor: pointer; padding: 8px; border-bottom: 1px solid #eee; margin-bottom: 5px;">Show Example</summary>
<div style="padding: 10px 15px; background: #f9f9f9; border: 1px solid #eee; border-top: none; border-radius: 0 0 5px 5px;">

```ts
if (usePairingCode && !sock.authState.creds.registered) {
    const phoneNumber = await question('Please enter your mobile phone number:\n');
    // Define your custom 8-digit code (alphanumeric)
    const customPairingCode = "FADZZDEV";
    const code = await sock.requestPairingCode(phoneNumber, customPairingCode);
    console.log(`Your Pairing Code: ${code?.match(/.{1,4}/g)?.join('-') || code}`);
}
```
*Note: The `question` function is a placeholder for your method of obtaining user input.*
</div>
</details>

## Reporting Issues
If you encounter any issues while using this repository or any part of it, please feel free to open a [new issue](https://github.com/fadzzzslebew/baileys/issues) here.

## Notes
Everything other than the modifications mentioned above remains the same as the original repository. You can check out the original repository at [WhiskeySockets](https://github.com/WhiskeySockets/Baileys)
