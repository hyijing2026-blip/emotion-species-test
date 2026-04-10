# 情绪物种测试

一个基于 `Next.js 16 + React 19 + TypeScript + Tailwind CSS + Recharts` 的娱乐人格测试 Web App。

产品定位：
- 纯娱乐测试，不作为任何专业判断依据
- 31 题单题流答题体验
- 12 维度真实算分
- 16 种人格匹配结果
- 结果页支持复制文案、分享链接、海报预览与 PNG 下载

## 本地运行

安装依赖：

```bash
npm install
```

开发模式：

```bash
npm run dev
```

生产构建：

```bash
npm run build
npm start
```

测试：

```bash
npm test
```

## 部署前确认

当前项目已经通过这些检查：

- `npm test`
- `npm run build`
- 首页 `/`
- 测试页 `/test`
- 结果页 `/result`

当前没有发现会阻止线上部署的本地残留：

- 没有 `.env`
- 没有 `.vercel`
- 没有 `coverage`
- 没有额外运行时依赖数据库或外部服务

## 推到 GitHub

如果你还没初始化仓库：

```bash
git init
git add .
git commit -m "feat: launch emotion species test"
```

创建 GitHub 仓库后，把本地项目推上去：

```bash
git branch -M main
git remote add origin <你的 GitHub 仓库地址>
git push -u origin main
```

## 部署到 Vercel

1. 打开 [Vercel Import Project](https://vercel.com/new)
2. 用 GitHub 账号登录 Vercel
3. 选择刚刚推上去的仓库
4. Framework Preset 选 `Next.js`
5. Build Command 保持默认：`next build`
6. Output Directory 保持留空
7. Environment Variables 首版不用填
8. 点击 `Deploy`

这个项目是纯前端 MVP，首版不依赖数据库，所以导入后一般可以直接发版。

## 部署后怎么验证

部署完成后，按这条顺序检查：

1. 打开首页，确认首屏正常显示
2. 点击“开始测试”，确认能进入 `/test`
3. 连续完成 31 题，确认自动进入 `/result`
4. 刷新结果页，确认结果能恢复
5. 点击复制结果文案，确认可复制
6. 点击生成分享海报，确认可预览并下载 PNG
7. 把结果页链接发到另一台设备，确认能正常打开

## 脚本说明

- `npm run dev`: 本地开发，当前使用 `next dev . --webpack`
- `npm run build`: 生产构建
- `npm start`: 本地运行生产构建产物
- `npm test`: 运行 Vitest

## 备注

- 当前 `dev` 脚本保留了 `--webpack`，这是为了绕开你之前遇到的 Turbopack 路径解析异常
- 如果后续要接正式域名，直接在 Vercel 项目里绑定自定义域名即可
