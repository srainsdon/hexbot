if (typeof LANG_CONTENT === 'undefined') LANG_CONTENT = []

LANG_CONTENT[LANG_BR] = {
	NOT_REGULAR_PAGE: "HExBot: nada está sendo executado. Esta não é uma página normal de jogo",
	CONTROL_PANEL_TITLE: "Bot Hacker Experience",
	PERFORM_MEDIUM_MISSIONS: "Missões médias",
	PERFORM_HARD_MISSIONS: "Missões difíceis",
	PERFORM_DELETE_SOFTWARE: "Missões muito fáceis",
	NOTIFY_MISSIONS: "Notifique-me quando houver novas missões disponíveis",
	INTERCEPT_TRANSACTIONS: "Interceptar transações bancárias em",
	TRANSFER_TO_BTC: "Transferir automaticamente o dinheiro ganho para a carteira BTC conectada",
	CLEAN_OWN_LOGS: "Limpar meus logs",
	CLEAN_VICTIM_LOGS: "Limpar logs da vítima",
	ACCESS_CLEAR: "Invadir e limpar logs",
	NOTIFY_LOGS: "Notifique-me sobre atividades suspeitas em meus logs",
	RUN_WEBCRAWLER: "Executar webcrawler",
	PASTE_IPS: "Texto com ips",
	SECONDS: "segundos",
	WEBCRAWLER_INITIAL_HOSTS: "começando por estes IPs:",
	WEBCRAWLER_IGNORE_HOSTS: "Ignore os seguintes IPs:",
	WEBCRAWLER_UPLOAD_SOFTWARES: "Suba estes softwares:",
	WEBCRAWLER_UPLOAD_WAIT: "Espere até",
	WEBCRAWLER_SKIP_AFTER_UPLOAD: "Instalar logo após o upload e limpar logs somente após instalação",
	WEBCRAWLER_HIDE_UPLOAD: "Esconder software após a instalação",
	WEBCRAWLER_LEAVE_SIGNATURE: "Deixe minha assinatura",
	WEBCRAWLER_FIND_SIGNATURE: "(encontre outras assinaturas)",
	WEBCRAWLER_FILTER_WITH: "Filtre o conteúdo utilizando expressões regulares (ex:  .*qualquercoisa.*)",
	CREDITS_TITLE: "Créditos",
	CREDITS_cmathiswausau: "Reparos de domínio no arquivo manifest.json",
	CREDITS_dominicusdev: "Reorganização de código massiva e reparo de bugs",
	CREDITS_gresendesa: "Implementação do framework, resolvedor de enigmas, webcrawler, notificadores e tradução para o português",
	CREDITS_Klorker: "Revisão do código, novos recursos visuais e limpadores de log",
	CREDITS_perfilrobo: "Executador de missões, upload de arquivos e interceptador de bancos (primeiro e principal desenvolvedor)",
	CREDITS_Quartz101: "Revisão de desempenho",
	CREDITS_sjs1985: "Melhorias no upload de softwares, dois novos checkboxes adicionados",
	CREDITS_OTHERS: "e dezenas de pessoas que contribuiram com sugestões e relatórios de bugs.",
	CREDITS_BACK_BUTTON: "Voltar",
	REPOSITORY_LINK: 'Versão atual <b>v0.1.27</b>, acompanhe as novas versões no <a href="https://github.com/JustSomeGuy0214/hexbot" target="_blank">repositório oficial</a>',
	WARNING_BUTTON: 'IMPORTANTE!\n\n * Para resolver enigmas, vá à página de um enigma ainda não resolvido e clique sobre o botão vermelho que irá aparecer.\n\n* Evite executar o bot em uma guia inativa. Existem algumas limitações que interferem na contagem de tempo quando a guia fica inativa, na maioria dos browsers. Portanto o bot pode ficar lento se for executado em uma guia inativa.\n\n* Use os notificadores com cuidado e moderação. O notificador de atividades suspeitas nos logs envia uma requisição GET a cada segundo initerruptamente. O notificador de novas missões envia uma requisição GET a cada dois segundos, mas somente quando a quantidade de minutos para as próximas missões for <= 1. Caso contrário, o bot apenas aguarda. Note que grandes quantidades de requisições podem ser notadas pelo servidor do jogo. O header \'X-Requested-With\' não é enviado. :)\n\n* Aborte o bot a qualquer momento. Para isso, apenas pressione botão vermelho do bot. \n\n* Se o bot parar de repente, tente atualizar a página. Se isso não funcionar, aborte o bot. Se você souber como acessar os logs do navegador copie-os e reporte os no repositório oficial.',
	DISCONNECTED_BTC_WALLET: 'Você optou por transferir o dinheiro ganho para a carteira BTC. Mas antes você precisa logar na carteira BTC. Entre na sua carteira e tente novamente.',
	CAMPING_WITHOUT_VINCULATED_ACCOUNT: 'Não há contas vinculadas a{CONTENT}',
	CAMPING_CHOOSE_IP: 'Escolha um ip',
	MISSIONS_PERMISSION_TO_ABORT: 'Você permite que o bot aborte missões caso necessário? (Cancelar para Não)',
	MISSIONS_WEAK_CRACKER: 'O seu cracker não forte o suficiente para continuar',
	MISSION_ANOTHER_MISSION_KIND_ALREADY_ACCEPTED: 'Parece que uma missão de outro tipo já foi aceita. Finalize-a ou aborte-a antes de tentar novamente',
	WEBCRAWLER_SINTAX_SOFTWARE_FIELD: 'Opa. Dê uma olhada no campo de softwares. \nCertifique-se que o nome do software e sua versão estão sendo separados com \":\". \nUse \",\" para separar diferentes softwares.',
	WEBCRAWLER_SOFTWARE_NOT_FOUND: 'Software "{CONTENT1}" versão "{CONTENT2}" não encontrado',
	WEBCRAWLER_UPLOAD_SOFTWARE_MODEL: '{nome:versão}, ...',
	WEBCRAWLER_RESULTS_IPS_FOUND: '## NOVOS IPS ENCONTRADOS ## ',
	WEBCRAWLER_RESULTS_ACCESSIBLE_HOSTS: '## HOSTS ACESSÍVEIS ##',
	WEBCRAWLER_RESULTS_INACCESSIBLE_HOSTS: '## HOSTS INACESSÍVEIS ## ',
	WEBCRAWLER_RESULTS_NOVPC: '## HOSTS NÃO-VPC ## ',
	WEBCRAWLER_RESULTS_UNCHECKED_HOSTS: '## HOSTS NÃO CHECADOS ## ',
	WEBCRAWLER_RESULTS_UPLOADS: '## UPLOADS ##',
	WEBCRAWLER_RESULTS_BTC: '## BITCOIN ## ',
	WEBCRAWLER_RESULTS_SHOPPING: '## COMPRAS ## ',
	WEBCRAWLER_RESULTS_SOFTWARES: '## SOFTWARES ENCONTRADOS ##',
	UPDATE_CRACKER: "Completar enigmas",
	COMPLETE_PATH_ERROR: "Você precisa estar logado em um servidor de enigma para utilizar este recurso!",
	CHAT_REFRESH: "Atualizar",
	CHAT_SEND: "Enviar",
	CHAT_MESSAGE: "Digite sua mensagem",
	QUANT_MESSAGES_SHOWING: "Monstrando 50 últimas mensagens",
	CHAT_ERROR: "Encontrámos um erro, tente novamente mais tarde."
}
