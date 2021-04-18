const titulos = [
    'Hunter X Hunter',
    'Attack On Titan', 
    'Steins;Gate',
    'Death Note',
    'High Score Girl',
    'One Punch Man',
    'Ascendance Of A Bookworm',
    '3-gatsu no Lion',
    'Dorohedoro',
    'Kill la Kill',
];
const desc = [
    // Hunter X Hunter
    'Gon é um jovem que vive em uma pequena ilha. Seu sonho é tornar-se um Hunter como o pai, para procurar tesouros, artefatos e criaturas míticas. Determinado a se tornar um Hunter profissional e a colocar sua vida em risco ao desafiar o desconhecido, ele parte em uma jornada e faz três amigos: Killua, Kurapika e Leorio.',
    // Shingeki no Kyojin
    'Séculos atrás, a humanidade foi abatida até quase a extinção por monstruosas criaturas humanóides chamadas titãs, forçando os remanecentes a se esconderem de medo atrás de enormes muralhas, resultando em cem anos de paz. No entanto, essa frágil calma é quebrada quando um titã colossal consegue romper a parede externa supostamente inexpugnável, reacendendo a luta pela sobrevivência contra as abominações devoradoras de humanos.',
    // Steins;Gate
    'O autoproclamado cientista maluco Rintarou Okabe, se entrega ao hobby de inventar "futuros aparelhos" com outros dois membros do laboratório: Mayuri Shiina, sua amiga de infância com cabeça aérea e Hashida Itaru, um hacker pervertido apelidado de "Daru". Por acidente eles criam uma máquina capaz de enviar mensagens para o passado, e a partir daí suas vidas mudaram drasticamente.',
    // Death Note
    'Quando Light Yagami, um estudante do ensino médio encontra um caderno sobrenatural chamado "Death Note", que pode matar pessoas cujos os nomes sejam escritos nele, ele tenta eliminar todos os criminosos e criar um novo mundo onde não exista o mal. Ao perceber que os criminosos estão sendo assassinados, o famoso detetive conhecido apenas como L tenta desvendar quem é o assassino em série e leva-lo a justiça.',
    // High Score Girl
    'O ano é 1991, o aluno do 6º ano Yaguchi Haruo tem apenas os videogames em sua vida. Ele não é popular na escola, não é bonito, nem divertido, nem legal e muito menos amigável. Um dia, no fliperama local, ele joga com Oono Akira, uma colega de classe que é popular, inteligente, bonita e rica, que o destrói no Street Fighter II. A partir daí, uma incomum e inesperada amizade começa a nascer.',
    // One Punch Man
    'O jovem adulto Saitama, cansado de procurar emprego sem obter sucesso, decide largar tudo para se tornar um super-herói. Ele perde todo o seu cabelo como consequência de seu treinamento duro, porém, fica tão poderoso que não existe um único vilão que aguente mais do que um soco seu, e sua nova vida como super-herói acaba sendo mais tediosa do que ele esperava.',
    // Ascendance of a Bookworm
    'Motosu Urano, uma apaixonada por livros, morre em seu primeiro dia de trabalho como bibliotecária, soterrada por livros durante um terremoto. Ela então reencarna como Maine, uma menina debilitada de 6 anos, em um mundo medieval com baixo nível de alfabetização, onde os livros são raros e muito caros, destinados somente a nobreza. Filha de um casal humilde, um soldado e uma costureira, ela fará de tudo para conseguir ler novamente.',
    // 3-gatsu no Lion
    'Rei Kiriyama, um colegial de 17 anos que é uma das pessoas mais jovens a conseguir se tornar um jogador profissional de Shogi, enfrenta enorme pressão vinda de sua disfuncional família adotiva e da comunidade de Shogi. Ele decide alugar um apartamento para viver sozinho e fugir de tudo, e afundando cada vez mais na depressão, acaba conhecendo três irmãs na vizinhança, as Kawamoto: Akari, Hinata e Momo. Elas o adotam como se ele fosse da família e o ajudam a superar essa fase difícil.',
    // Dorohedoro
    'Hole é um distrito sujo, escuro e decrépito, onde a morte é uma ordinária ocorrência. É o lugar perfeito para os usuários de magia testarem suas habilidades nos pobres coitados que vivem nesse lugar imundo. Quando Kaiman, um homem corpulento, acorda sem memória e com uma cabeça de lagarto, ele parte em busca do feiticeiro que fez isso com ele, para fazê-lo voltar ao normal e se possível, fazer picadinho dele.',
    // Kill la Kill
    'Em um colégio onde os estudantes possuem uniformes que dão a eles vários poderes e habilidades, a presidente do conselho estudantil, Kiryuin Satsuki, é quem manda. Entretanto, uma nova estudante chamada Matoi Ryuko fica em seu caminho, ela possui uma espada em forma de tesoura, um uniforme possuído, e quer descobrir quem matou o pai dela.',
];
const trailers = [
    // Hunter X Hunter
    'https://www.youtube.com/watch?v=d6kBeJjTGnY',
    // Shingeki no Kyojin
    'https://www.youtube.com/watch?v=JXyz-XoMqPA',
    // Steins;Gate
    'https://www.youtube.com/watch?v=uMYhjVwp0Fk',
    // Death Note
    'https://www.youtube.com/watch?v=NlJZ-YgAt-c',
    // High Score Girl
    'https://www.youtube.com/watch?v=S51PKANf92c',
    // One Punch Man
    'https://www.youtube.com/watch?v=2JAElThbKrI',
    // Ascendance of a Bookworm
    'https://www.youtube.com/watch?v=Wo28IopG2WE',
    // 3-gatsu no Lion
    'https://www.youtube.com/watch?v=ZL5nnx4vd7k',
    // Dorohedoro
    'https://www.youtube.com/watch?v=45pNWV47Cps',
    // Kill la Kill
    'https://www.youtube.com/watch?v=w9MRDWPZvYE',
];
const lista = [
    'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
    'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
    'https://myanimelist.net/anime/9253/Steins_Gate',
    'https://myanimelist.net/anime/1535/Death_Note',
    'https://myanimelist.net/anime/21877/High_Score_Girl',
    'https://myanimelist.net/anime/30276/One_Punch_Man',
    'https://myanimelist.net/anime/39468/',//Bookworm
    'https://myanimelist.net/anime/31646/3-gatsu_no_Lion',
    'https://myanimelist.net/anime/38668/Dorohedoro',
    'https://myanimelist.net/anime/18679/Kill_la_Kill',
];