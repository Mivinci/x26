# x26

x26 是个用 Svelte 开发的小网页，可以用作个人项目聚合站或个人主页。x26 支持本地和远程两种数据来源。预览地址：[26.xjj.pub](https://26.xjj.pub)

## 使用

只需要 6 步，就能拥有一个 x26 小站。

### 第 1 步 - 安装

首先克隆这个仓库，然后进入其根目录

```bash
git clone git@github.com:mivinci/x26.git
cd x26
```

x26 使用  [pnpm](https://pnpm.io) 管理 node 模块，所以需要先安装 pnpm，以 npm 为例

```bash
npm i -g pnpm
```

然后安装 x26 依赖

```bash
pnpm i
```

### 第 2 步 - 预览

成功安装依赖后，运行下面命令，然后打开浏览器输入 `localhost:3000` 预览当前的网页效果

```bash
pnpm dev
```

### 第 3 步 - 配置

这一步是 x26 的核心步骤。x26 通过识别配置来决定渲染的内容和样式，支持本地和远程两种配置方式。

- **本地配置**

本地配置让 x26 在打包期就知道要渲染的数据，编辑根目录的 `x26.json` 配置文件，如

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

如果完成了第 2 步，网页会实时自动与该配置文件同步，所以接下来试着更改 `x26.json` 中的字段值来观察哪个字段被渲染到网页的哪个部分，从而了解到 x26 的工作原理。注意下面几个字段值有特别限制

| 字段   | 支持的值                         |
| ------ | -------------------------------- |
| status | green, yellow, red               |
| shape  | normal, horizon, vertical, large |

尝试切换不同的值来观察不同的渲染效果。

- **远程配置**

x26 能从远程服务器获取配置内容，只需要将 `x26.json` 中的 `mode` 字段的值设为 `"network"`，然后提供远程配置的地址即可，像下面这样

```json
{
  "mode": "network",
  "url": "https://exmaple.com/x26.json"
}
```

若使用远程配置，x26会忽略 `x26.json` 中除 `mode` 和 `url` 以外的其他配置内容。

远程配置的地址可以是一个文件路径，也可以是个后端接口，只要满足下面两个条件即可

1. 使用 HTTP/HTTPS 协议
2. 响应内容格式与本地配置的一致

### 第 4 步 - 打包

编写好配置后，运行下面命令来打包 x26

```bash
pnpm build
```

打包好的静态文件会自动放到 `dist` 目录下，若果你愿意，可以运行下面命令来预览打包好的效果

```bash
pnpm preview
```

### 第 5 步 - 部署

我们尝试使用 GitHub Action 来部署 x26，这样当我们每次更新配置文件，通过 `git push ` ，GitHub 就能自动为我们打包并部署。所以这需要你最好 fork 该仓库到你的账号下。（当然你也可以使用任意你喜欢的方式来部署，反正误无非就是把 `dist` 目录托管起来）

我写好了一个 [workflow 配置](./.github.workflows/deploy.yml)，你只需要将该配置文件中第 29 行的 `cname` 字段值改为你自己的域名即可。如果你没有域名，那么就将这行删掉。

现在，GitHub Action 在收到我们一个 push 操作后，会自动执行第 4 步，并将打包好的内容放到 `gh-pages` 分支中，所以最后你需要做的就是在仓库的设置中，将 Pages 服务指向该分支。

好了，我们完事儿了。

## 反馈

提议或Bug 报告发到[这儿](https://github.com/Mivinci/x26/issues)。