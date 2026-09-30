# FAN DA WAN LIFE OS

饭大碗的游戏人生 · Life OS

这是一个基于 Notion API 的个人生活操作系统，旨在将日常、成长、财富、身体、生活、关系、精神和记录等系统统一到一个可自动创建、可同步更新、可扩展的 Notion 工作台中。

## 目标

- 通过 TypeScript + Node.js 自动创建 Notion 数据库
- 通过 JSON/代码配置驱动数据库字段和视图
- 支持重复执行，不重复创建数据库
- 支持 dry-run、sync、update、init
- 支持日志与异常处理
- 通过环境变量读取敏感信息
- 通过 `.notion-cache.json` 避免重复创建
- 可扩展到 AI Daily / Weekly / Monthly Agent

## 项目结构

```bash
notion-life-os/
├── .env.example
├── .gitignore
├── .notion-cache.json
├── jest.config.js
├── package.json
├── README.md
├── tsconfig.json
├── src/
│   ├── app.ts
│   ├── config.ts
│   ├── env.ts
│   ├── logger.ts
│   ├── types.ts
│   ├── agents/
│   │   ├── aiSummary.ts
│   │   ├── dailyAgent.ts
│   │   ├── weeklyAgent.ts
│   │   └── monthlyAgent.ts
│   ├── data/
│   │   ├── dashboards.ts
│   │   ├── databases.ts
│   │   └── systems.ts
│   ├── notion/
│   │   ├── createDatabase.ts
│   │   ├── init.ts
│   │   ├── schema.ts
│   │   └── view.ts
│   ├── scripts/
│   │   ├── dryRun.ts
│   │   ├── init.ts
│   │   ├── sync.ts
│   │   └── update.ts
│   ├── utils/
│   │   ├── idCache.ts
│   │   ├── notion.ts
│   │   ├── retry.ts
│   │   └── sync.ts
│   └── __tests__/
│       ├── config.test.ts
│       ├── idCache.test.ts
│       └── schema.test.ts
└──
```

## 安装

```bash
npm install
```

## 配置环境变量

复制 `.env.example` 到 `.env`：

```bash
cp .env.example .env
```

编辑 `.env`：

```env
NOTION_TOKEN=your_notion_integration_secret_here
PARENT_PAGE_ID=your_parent_page_id_here
APP_NAME="FAN DA WAN LIFE OS"
DEFAULT_LOCALE=zh-CN
DRY_RUN=false
LOG_LEVEL=info
```

## 获取 Notion Token

1. 登录 Notion
2. 打开 https://www.notion.so/my-integrations
3. 点击 `New integration`
4. 复制 `Integration Secret`
5. 该值写入 `NOTION_TOKEN`

注意：
- 不要将 Token 写进代码
- 只从环境变量中读取

## 获取 Parent Page ID

打开目标 Notion 页面，URL 中出现类似：

```text
https://www.notion.so/xxx/1234567890abcdef1234567890abcdef?v=...
```

其中 `1234567890abcdef1234567890abcdef` 就是 Parent Page ID。将它填入 `.env` 中的 `PARENT_PAGE_ID`。

另外需要给对应 Notion Integration 对该页面的访问权限。

## 初始化

```bash
npm run init
```

初始化时会：
- 创建 Notion 数据库
- 生成数据库结构
- 缓存数据库 ID
- 避免重复创建

## 同步

```bash
npm run sync
```

同步脚本用于更新组织结构和数据状态。

## 更新

```bash
npm run update
```

## dry run

```bash
npm run dry-run
```

dry-run 模式不会执行实际写入操作。

## 构建

```bash
npm run build
```

## 测试

```bash
npm run test
```

## 备份

建议定期备份：
- `.env`
- `.notion-cache.json`
- 关键配置文件
- Notion 导出的页面/数据库备份

## 重建

若要重建数据库：

1. 删除 `.notion-cache.json`
2. 检查 `.env` 是否有效
3. 重新执行：

```bash
npm run init
```

## 说明

这个项目是一个完整的 Life OS 基础模板，具备：
- 代码创建数据库
- 配置驱动字段设计
- 尽量模块化
- 日志与重试机制
- dry-run / sync / update / init
- 缓存去重
- TypeScript 类型安全

后续可以继续扩展：
- 自动计算 7 日 / 30 日趋势
- Dashboard 卡片生成
- Relation 和 Rollup 关系建模
- 财务、销售、健康、习惯等公式系统
- 真正的 AI Daily / Weekly / Monthly Agent 分析

## 许可

MIT
