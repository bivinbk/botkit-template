module.exports = function (controller) {

    controller.botCommons = {

        healthCheck: process.env.PUBLIC_ADDRESS,
        upSince: new Date( Date.now() ).toGMTString(),
        botName: controller.adapter.identity.displayName,
        botVersion: 'v' + require( '../package.json' ).version,
        owner: process.env.OWNER,
        support: process.env.SUPPORT,
        botkitVersion: controller.version,
        platform: process.env.PLATFORM,
        code: process.env.CODE
    }

    controller.hears( 'hook', 'message,direct_message', async ( bot, message ) => {

        let markDown = '```json\n';
        markDown += JSON.stringify( controller.botCommons, null, 1 );
        markDown += '\n```'
        await bot.reply( message, { markdown: markDown } );
    });

    controller.commandHelp.push( { command: 'hook', text: 'test hook creation' } );

}
