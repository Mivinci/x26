# x26

You can use x26 as your personal homepage or to present your projects.  Here's the demo site: https://26.xjj.pub 👀

[中文文档](./docs/README-ZH.md)

## Usage

Follow the 6 steps below and you'll get yourself an x26 site.

### Step 1 -  Install

Clone this repo and install all the dependencies.

```bash
git clone https://github.com:mivinci/x26.git
cd x26
pnpm i
```

x26 uses [pnpm](https://pnpm.io) for module management, so make sure you've got both [Node](https://nodejs.org) and and pnpm installed on your device.

You can use whatever tools you like to install pnpm.  (e.g.  npm)

```bash
npm i -g pnpm
```

### Step 2 - Preview

Preview x26 by running:

```bash
pnpm dev
```

You'll see x26 is serving at `localhost:3000`, then open this address in your browser.

### Step 3 - Configuration

You tell x26 what to render by editing a configuration file named `x26.json` under the root of this repo.  Here's an [example](https://www.fastmock.site/mock/3fd821284f288a4b2d1659ced3207b47/x26/mock) used by x26 itself to generate the [demo site](https://26.xjj.pub).

If you've done step 2, x26 will refresh instantly when you update what's in the configuration file.

#### **Two Modes**

Before you go further, you have to know that x26 has two sources to fetch data from, `local` and `network`.

- **Local mode**

If you want x26 to generate the content at compile-time, just put everything in file `x26.json` as follows.

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

Try to edit `x26.json` to see which field decides which part of the page.

Here're some tips you may need to have your eyes on.

| Key    | Supported Values                 |
| ------ | -------------------------------- |
| status | green, yellow, red               |
| shape  | normal, horizon, vertical, large |

- **network mode**

x26 is able to fetch data from remote sources, just switch it to `network mode` as follows and do not forget to provide the remote address to the source.

```json
{
  "mode": "network",
  "url": "https://exmaple.com/x26.json"
}
```

The remote source must response data of the same format as what we've discussed on `local mode`.

### Step 4 - Build

When you're satisfied with what your x26 page looks like, use pnpm to build for deployment.

```bash
pnpm build
```

You'll see a new directory named `dist` being generated.

Optionally, you can use pnpm to preview the bundled version at  `localhost:5000`  by running

```bash
pnpm preview
```

### Step 5 - Deploy

In this part, we're gonna use the GitHub Action to automatically build our x26 site once we push a new commit.  (Of course, you can use whatever you like to deploy x26.  There's no other workarounds except hosting the `dist` directory.)

> Note: You need to fork this repo if you wanna keep following this documentation.

I've written a workflow [configurations](./.github.workflows/deploy.yml), all you need to do is update the `cname` at line 29.  If you don't have a domain name, just remove it.

You might notice that we used a Action Plugin called `actions-gh-pages`, this plugin will make a branch called `gh-pages` for our repo, thus you need to switch the GitHub Pages to this branch.  

Now we're done.


## Feedbacks

Feedbacks are welcome [here](https://github.com/Mivinci/x26/issues).

