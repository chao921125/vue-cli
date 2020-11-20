const package = require('./package.json');
const version = package.version.split(".");
module.exports = {
  types: [
    // 新功能
    { value: `feat: v${version}`, name: 'feat:     A new feature' },
    // bug修复
    { value: `fix: v${version}`, name: 'fix:      A bug fix' },
    // 文档变更
    {
      value: `docs: v${version}`, name: 'docs:     Documentation only changes'
    },
    // 不影响代码含义的更改(空格、格式、缺少分号等)代码格式
    {
      value: `style: v${version}`,
      name:
        'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
    },
    // 既不修复bug也不添加特性的代码更改 代码重构
    {
      value: `refactor: v${version}`,
      name: 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    // 性能的代码更改 改善性能
    {
      value: `perf: v${version}`,
      name: 'perf:     A code change that improves performance',
    },
    // 添加缺失的测试或修改现有的测试
    {
      value: `test: v${version}`, name: 'test:     Adding missing tests'
    },
    // 添加影响构建系统或外部依赖项的更改(例如作用域:gulp、broccoli、npm)
    {
      value: `build: v${version}`, name: 'build:        Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)'
    },
    // 对CI配置文件和脚本的更改(示例范围:Travis、Circle、BrowserStack、SauceLabs)
    {
      value: `ci: v${version}`, name: 'ci:           Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)'
    },
    // 不修改src或测试文件的其他更改
    {
      value: `chore: v${version}`,
      name:
        'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
    },
    // 返回先前的提交
    {
      value: `revert: v${version}`, name: 'revert:   Revert to a commit'
    }
  ],

  // scopes: [{ name: `accounts` }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],
  scopes: [],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'

  // scopeOverrides: {
  //   fix: [
  //     { name: 'merge' },
  //     { name: 'style' },
  //     { name: 'e2eTest' },
  //     { name: 'unitTest' }
  //   ]
  // },

  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nWhat is the scope of this change (e.g. component or file name): (press enter to skip)',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a short, imperative tense description of the change (max 65 chars):\n',
    body: 'Provide a longer description of the change: (press enter to skip)\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['breaking', 'footer'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix: 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};