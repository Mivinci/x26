# x26

x26 is a single web page, you can use it for aggregating projects or as your personal homepage. [View 👀](https://26.xjj.pub)

## Usage

### **Step 1 -  Installation**

Clone this repo and install all the dependencies.

```bash
git clone git@github.com:mivinci/x26.git
cd x26
pnpm i
```

x26 uses [pnpm](https://pnpm.io) for module management, so make sure you have both [Node](https://nodejs.org) and and pnpm installed on your device.

You can use whatever method you like to install pnpm. (e.g npm)

```bash
npm i -g pnpm
```

### Step 2 - Preview

Once you have all dependencies installed correctly, preview it by running:

```bash
pnpm dev
```

You'll see x26 is served at `localhost:3000`, open your browser to give it a try!

### **Step 3 - Configuration**

You tell x26 what to render on the web page by editing a configuration file named `x26.json` under the root of this repo. Here's an [example](https://www.fastmock.site/mock/3fd821284f288a4b2d1659ced3207b47/x26/mock) that's used by x26 itself to generate the [previewing site](https://26.xjj.pub).

If you've done step 2, x26 will refresh instantly as you edit the configuration file.

#### **Two Modes**

Before you go further, you have to know that x26 has two sources to fetch data from, `local` and `network`.

- **Local mode**

If you want x26 to know what to generate at compile-time, just put all the values in `x26.json` as below.

```json
{
  "mode": "local",
  "settings": {
    "title": "x26",
    "slogon": "A man and his 26 projects.",
    "mask": ["A", "B", "C", "D", "...", "Z"],
    "column": 5,
    "legend": {
      "green": "完成",
      "yellow": "进行",
      "red": "出错"
    }
  },
	"projects": {
    "X": {
      "name": "x26",
      "description": "x26 is a single web page, you can use it for aggregating projects or as your personal homepage.",
      "repository": "https://github.com/mivinci/x26",
      "homepage": "https://26.xjj.pub",
      "tags": ["svelte", "homepage"],
      "status": "green",
      "shape": "normal"
    },
    "O": {
    }
  }
}
```

Try to edit `x26.json` to see which field of value effects which part of the page.

Here're some tips you may need to have eyes on.

| Key    | Supported Values                 |
| ------ | -------------------------------- |
| status | green, yellow, red               |
| shape  | normal, horizon, vertical, large |

- **network mode**

x26 is able to fetch data from remote sources, just assign `"network"` to `mode` in `x26.json` and then provide the address to the source.

```json
{
  "mode": "network",
  "url": "https://exmaple.com/x26.json"
}
```

The remote source must response data of the same format correspond to what we've discussed about `local mode`.

### Step 4 - Build

When you're satisfied with what've done, use pnpm to build x26 for deployment

```bash
pnpm build
```

You'll see a new directory named `dist` being generated there.

Optionally, you can use pnpm to preview the bundled version at  `localhost:5000`  by running

```bash
pnpm preview
```

### Step - 5 Deploy

In this part, we're gonna use the GitHub Action to automatically build our x26 site once we make a commit and push. (Of course, you can use whatever you like to deploy x26, that there's no other workarounds except hosting the `dist` directory.)

> Note: You need to fork this repo if you wanna keep reading.

I've written a workflow [configurations](./.github.workflows/deploy.yml), all you need to do is update the `cname` at line 29. If you don't have a domain name, just remove it.

You might notice that we used a Action Plugin called `actions-gh-pages`, this plugin will make a branch called `gh-pages` for our repo, thus you need to switch the GitHub Pages to this branch. 

And we've done.



## Feedbacks

Feedbacks are welcome [here](https://github.com/Mivinci/x26/issues).

