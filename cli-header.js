const chalk = require('chalk');
const log = console.log;

module.exports = () => log(chalk`
{green #=============================================================================#}
{green |} {blue   ______     ______     __  __        __         __     ______     ______   }{green |}
{green |} {blue  /\\  ___\\   /\\  ___\\   /\\ \\_\\ \\      /\\ \\       /\\ \\   /\\  ___\\   /\\__  _\\  }{green |}
{green |} {blue  \\ \\___  \\  \\ \\___  \\  \\ \\  __ \\     \\ \\ \\____  \\ \\ \\  \\ \\___  \\  \\/_/\\ \\/  }{green |}
{green |} {blue   \\/\\_____\\  \\/\\_____\\  \\ \\_\\ \\_\\     \\ \\_____\\  \\ \\_\\  \\/\\_____\\    \\ \\_\\  }{green |}
{green |} {blue    \\/_____/   \\/_____/   \\/_/\\/_/      \\/_____/   \\/_/   \\/_____/     \\/_/  }{green |}
{green |}                                                                             {green |}
{green #=============================================================================#}
`);