const { Kayn, REGIONS } = require('kayn');
const kaynconfig = require('../config/kaynConfig.json');
const kayn = Kayn(process.env.RIOT_TOKEN)(kaynconfig);

module.exports = {
  //FUTURA INTEGRAÇÃO COM A API DA RIOT
  command: {
    name: 'lolpf',
    category: 'League API',
    description: 'Mostra seus dados no LOL',
    usage: 'Geral',
  },
};
