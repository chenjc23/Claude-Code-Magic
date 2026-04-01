## 0. 全局安装 bun

````
npm install -g bun
````

## 1. 进入项目目录并安装依赖

```
bun install
```

## 2.先用帮助命令确认入口正常

```
bun run src/entrypoints/cli.tsx --help
```

### 3.配置 API 地址和 API Key
项目运行依赖 ANTHROPIC_BASE_URL 和 ANTHROPIC_API_KEY，如果不提前配置，请求阶段通常会卡住或无法正常返回。

这类配置通常来自 ~/.claude/settings.json 里的 env 字段。

### 4.最后再启动交互模式

```
bun run src/entrypoints/cli.tsx
```

注意：先装依赖、用对入口、确认构建通过，再把 API 配置补齐，这样才能真正进入可对话状态。