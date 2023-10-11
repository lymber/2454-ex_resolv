var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Ficha técnica",
  "number": "",
  "title": "Ficha técnica",
  "body": "  www.ime.usp.br\/~lymber\/teaching\/2454-gabaritos   copyright  "
},
{
  "id": "dedication-1",
  "level": "1",
  "url": "dedication-1.html",
  "type": "Dedicatória",
  "number": "",
  "title": "Dedicatória",
  "body": " Para todos os estudantes e amantes da Matemática.  "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Agradecimentos",
  "number": "",
  "title": "Agradecimentos",
  "body": " Nenhuma obra humana é concebida ou realizada exclusivamente pelo esforço de um único indivíduo. Todo o conhecimento produzido é fruto da sociedade e a ela deve ser devolvido, preservando os pilares fundamentais da igualdade e coletividade.  A fim de não cometer injutiças, omitindo nomes ou grupos, agradeço de maneira geral e irrestrita, todos os colegas no Departamento de Matemática do IME-USP , tanto pela formação quando estudante, quanto pelo apoio nas atividades acadêmicas, especialmente pela elaboração de materiais tão completos e esclarecedores, como os presentes nas listas de exercícios das disciplinas de Matemática oferecidas para os cursos de Engenharia da Escola Politénica da Universidade de São Paulo .  Não podemos deixar de reconhecer e agradecer o trabalho excepecional desenvolvido pelo time do projeto PreTeXt .  "
},
{
  "id": "meta_frontmatter-preface",
  "level": "1",
  "url": "meta_frontmatter-preface.html",
  "type": "Prefácio",
  "number": "",
  "title": "Prefácio",
  "body": "   Este material surgiu para atender uma demanda universal dos alunos de disciplinas de Matemática: ter acesso a alguns exercícios resolvidos como um ponto de partida para desenvolver soluções independentes dos demais problemas propostos.  Por outro lado é importante notar que o aprendizado de Matemática se dá ao superar individualmente as dificuldades que se apresentam. Desta forma é fundamental tentar resolver os exercícios antes de ver uma solução pronta ! Elas são tentadoras, mas vendo a tarefa concluída em poucas linhas é natural acreditar que tudo é muito simples: o trabalho pronto esconde o processo necessário para realizá-lo.  É por isso que não publicamos o gabarito com as soluções de todos os exercícios. Aqui está selecionado um exercício de cada seção das listas, com uma solução tão completa e detalhada o quanto possível, com referências para os resultados teóricos utilizados e, quando pertinente, ilustrações e animações que ajudem a entender melhor os conceitos envolvidos.  Espero que este material contribua para a superação das dificuldades e formação dos estudantes, além de servir como referência para consultas futuras. Caso encontrem problemas em alguma solução, não hesitem em escrever para o meu e-mail .  Bons estudos!  Alexandre Lymberopoulos  "
},
{
  "id": "sec_taylor",
  "level": "1",
  "url": "sec_taylor.html",
  "type": "Seção",
  "number": "1.1",
  "title": "Polinômios de Taylor",
  "body": " Polinômios de Taylor      Utilizando o polinômio de Taylor de ordem , calcule um valor aproximado para e avalie o erro.   Utilize a fórmula de Taylor de ordem para , em torno de . Para estimativa do erro, use o resto de Lagrange e estime os valores máximo e mínimo que o coficiente dependendo de pode assumir.    , com erro na aproximação satisfazendo    Lembrando que se é uma função vezes derivável no ponto , então é o polynômio de Taylor de ordem para em torno de , dado por é aquele que tem o mesmo valor de em , ou seja e, além disso, todas as derivadas até ordem de e também coincidem, ou seja, , para todo . Disto segue-se que   Para cada fixado, se admite derivada de ordem em todos os pontos do intervalo de extemos e , então o erro cometido na aproximação de por , , é dado por Para verificar isto basta aplicar sucessivamente o para as funções e e suas derivadas, observando que para todo e que .  No exercício em questão temos , , e . Com isso, , e e então   Logo, e assim,   Para estimar o erro nesta aproximação usaremos a expressão em , que torna-se onde . A função é estritamente descrescente nesse intervalo e portanto Daí, multiplicando toda a desigualdade acima por , a fim de transformar o termo do meio no erro, Simplificando, e, usando que , . Logo   O gráfico de e , centrado em .   A parabola      Para \"verificar\" nossas estimativas, usamos uma boa calculadora e obtemos mostrando que a diferença entre os valores aparece somente na sexta casa decimal ( ), mas o dígito da diferença nessa casa não é maior ou igual a ( ).    Seja uma função de classe e suponha que seja um ponto crítico de . Mostre que:  se , então é um ponto de mínimo local de ;  se , então é um ponto de máximo local de .     Note que este é mais um caso onde a recíproca é falsa: se é um ponto de mínimo local de no interior de um intervalo aberto, não é verdade que necessariamente devemos ter . Um exemplo é o ponto que é de mínimo para .    Como fica a fórmula de Taylor de ordem para , em torno do ponto crítico ? Como a continuidade (preservação do sinal) de ajuda a fechar a questão?   Lembrando, a fórmula de Taylor de ordem para , em torno de , é para algum entre e . Como é ponto crítico de , então e a expressão acima reduz-se a   se , então, da continuidade de , temos que , para todo em algum intervalo aberto , contido em e centrado em . Desta forma, se , então, na expressão , temos , donde mostrando que é ponto de mínimo local de .  É um argumento análogo ao anterior, redija-o para ter certeza de que entendeu.         "
},
{
  "id": "raiz_cubica",
  "level": "2",
  "url": "sec_taylor.html#raiz_cubica",
  "type": "Exercício",
  "number": "1.1.1",
  "title": "",
  "body": " Utilizando o polinômio de Taylor de ordem , calcule um valor aproximado para e avalie o erro.   Utilize a fórmula de Taylor de ordem para , em torno de . Para estimativa do erro, use o resto de Lagrange e estime os valores máximo e mínimo que o coficiente dependendo de pode assumir.    , com erro na aproximação satisfazendo    Lembrando que se é uma função vezes derivável no ponto , então é o polynômio de Taylor de ordem para em torno de , dado por é aquele que tem o mesmo valor de em , ou seja e, além disso, todas as derivadas até ordem de e também coincidem, ou seja, , para todo . Disto segue-se que   Para cada fixado, se admite derivada de ordem em todos os pontos do intervalo de extemos e , então o erro cometido na aproximação de por , , é dado por Para verificar isto basta aplicar sucessivamente o para as funções e e suas derivadas, observando que para todo e que .  No exercício em questão temos , , e . Com isso, , e e então   Logo, e assim,   Para estimar o erro nesta aproximação usaremos a expressão em , que torna-se onde . A função é estritamente descrescente nesse intervalo e portanto Daí, multiplicando toda a desigualdade acima por , a fim de transformar o termo do meio no erro, Simplificando, e, usando que , . Logo   O gráfico de e , centrado em .   A parabola      Para \"verificar\" nossas estimativas, usamos uma boa calculadora e obtemos mostrando que a diferença entre os valores aparece somente na sexta casa decimal ( ), mas o dígito da diferença nessa casa não é maior ou igual a ( ).  "
},
{
  "id": "teste_segder",
  "level": "2",
  "url": "sec_taylor.html#teste_segder",
  "type": "Exercício",
  "number": "1.1.7",
  "title": "",
  "body": " Seja uma função de classe e suponha que seja um ponto crítico de . Mostre que:  se , então é um ponto de mínimo local de ;  se , então é um ponto de máximo local de .     Note que este é mais um caso onde a recíproca é falsa: se é um ponto de mínimo local de no interior de um intervalo aberto, não é verdade que necessariamente devemos ter . Um exemplo é o ponto que é de mínimo para .    Como fica a fórmula de Taylor de ordem para , em torno do ponto crítico ? Como a continuidade (preservação do sinal) de ajuda a fechar a questão?   Lembrando, a fórmula de Taylor de ordem para , em torno de , é para algum entre e . Como é ponto crítico de , então e a expressão acima reduz-se a   se , então, da continuidade de , temos que , para todo em algum intervalo aberto , contido em e centrado em . Desta forma, se , então, na expressão , temos , donde mostrando que é ponto de mínimo local de .  É um argumento análogo ao anterior, redija-o para ter certeza de que entendeu.    "
},
{
  "id": "sec_curvas",
  "level": "1",
  "url": "sec_curvas.html",
  "type": "Seção",
  "number": "1.2",
  "title": "Curvas no Plano",
  "body": " Curvas no Plano      Um barbante é enrolado ao redor de um círculo e então desenrolado, sendo mantido esticado. A curva traçada pelo ponto no final do barbante é chamada de involuta do círculo . Se o círculo tiver raio e centro , a posição inicial de for , e se o parâmetro for escolhido como na , mostre que as equações paramétricas da involuta são:     A involuta do círculo.       Uma animação desta involuta.      Procure triângulos retângulos semelhantes, um com a hipotenusa paralela a um dos eixos coordenados e o outro com com os catetos paralelos aos eixos. Com eles escreva essa hipotenusa e um dos catetos em termos de .   Seguido a dica, identificamos os triângulos e , na figura abaixo:  Solução do       Como os triângulos indicados são retângulos e os ângulos e são congruente e medem (por que?), temos que mede . Outra observação importante é que a medida do segmento é a mesma do arco da circunferência relativo ao ângulo , ou seja, .  Além disso, se escrevemos , é fácil ver que e .  Da trigonometria, sabemos que   Segue daí que e , como desejado.       "
},
{
  "id": "involuta",
  "level": "2",
  "url": "sec_curvas.html#involuta",
  "type": "Exercício",
  "number": "1.2.6",
  "title": "",
  "body": " Um barbante é enrolado ao redor de um círculo e então desenrolado, sendo mantido esticado. A curva traçada pelo ponto no final do barbante é chamada de involuta do círculo . Se o círculo tiver raio e centro , a posição inicial de for , e se o parâmetro for escolhido como na , mostre que as equações paramétricas da involuta são:     A involuta do círculo.       Uma animação desta involuta.      Procure triângulos retângulos semelhantes, um com a hipotenusa paralela a um dos eixos coordenados e o outro com com os catetos paralelos aos eixos. Com eles escreva essa hipotenusa e um dos catetos em termos de .   Seguido a dica, identificamos os triângulos e , na figura abaixo:  Solução do       Como os triângulos indicados são retângulos e os ângulos e são congruente e medem (por que?), temos que mede . Outra observação importante é que a medida do segmento é a mesma do arco da circunferência relativo ao ângulo , ou seja, .  Além disso, se escrevemos , é fácil ver que e .  Da trigonometria, sabemos que   Segue daí que e , como desejado.  "
},
{
  "id": "sec_func",
  "level": "1",
  "url": "sec_func.html",
  "type": "Seção",
  "number": "1.3",
  "title": "Funções de duas variáveis e curvas de nível",
  "body": " Funções de duas variáveis e curvas de nível      Seja .  Esboce as curvas de nível de dos níveis , e .  Encontre uma curva derivável , definida num intervalo , cuja imagem seja a curva de nível de do nível .  Determine o vetor tangente à curva , que você encontrou no item anterior, no ponto .  Seja dada por . Sagendo que a imagem da curva está contida no gráfico de , enconte o vetor tangente a em .     Caso precise, recorde o que é uma curva de nível e veja alguns exemplos na . Uma dica para cada item:  Depois de escrever a equação que define cada curva de nível, é um exercício de reconhecer cônicas a partir de suas equações reduzidas.  É o clássico caso de parametrizar uma cônica . Vetor tangente num ponto? É só derivar a parametrização!  Basta lembrar que se , então . Para nossos propósitos, uma curva em tem as mesmas características e propriedades (continuidade, derivabilidade, etc.) de uma curva no plano, mas \"com uma coordenada a mais\".         As curvas de nível são dadas pelas seguintes equações:   Curvas de nível.        Uma possível parametrização é , .  Qualquer múltiplo do vetor está correta, o que você encontrar depende da parametrização utilizada no item anterior.  Como acima, qualquer mútiplo do vetor é uma resposta correta.     Seguido as dicas de cada item  Observamos inicialmente que o domínio de é todo o plano . Assim, para  : , que descreve uma elipse centrada na origem de \"raios\" e .  : , que descreve as retas paralelas e .  : , que descreve uma hipébole com focos no eixo .  Um esboço das três curvas de nível está indicado na resposta deste exercício.  Em outras palavras, este item pede que parametrizemos o conjunto  A equação pode ser reescrita como e, portanto, podemos escrever e , . Com este domínio a curva , descreve todos os pontos da curva de nível indicada.   Notamos que , logo e, também é fácil ver que . Assim, um vetor tangente à curva no ponto indicado é , já que . Observamos que qualquer múltiplo do vetor indicado também uma resposta válida.   Dizer que a imagem de uma curva, está contida no gráfico de uma função , significa exatamente dizer que .  No caso deste exercício isso significa que .Com isso, e, consequente  Veja nas figuras abaixo, o gráfico de , com os cortes nos níveis pedidos no primeiro item e também a imagem da curva e sua projeção no plano .   Gráfico de e curvas de nível       Gráfico de , a imagem de e sua projeção em .                "
},
{
  "id": "func_niv",
  "level": "2",
  "url": "sec_func.html#func_niv",
  "type": "Exercício",
  "number": "1.3.7",
  "title": "",
  "body": " Seja .  Esboce as curvas de nível de dos níveis , e .  Encontre uma curva derivável , definida num intervalo , cuja imagem seja a curva de nível de do nível .  Determine o vetor tangente à curva , que você encontrou no item anterior, no ponto .  Seja dada por . Sagendo que a imagem da curva está contida no gráfico de , enconte o vetor tangente a em .     Caso precise, recorde o que é uma curva de nível e veja alguns exemplos na . Uma dica para cada item:  Depois de escrever a equação que define cada curva de nível, é um exercício de reconhecer cônicas a partir de suas equações reduzidas.  É o clássico caso de parametrizar uma cônica . Vetor tangente num ponto? É só derivar a parametrização!  Basta lembrar que se , então . Para nossos propósitos, uma curva em tem as mesmas características e propriedades (continuidade, derivabilidade, etc.) de uma curva no plano, mas \"com uma coordenada a mais\".         As curvas de nível são dadas pelas seguintes equações:   Curvas de nível.        Uma possível parametrização é , .  Qualquer múltiplo do vetor está correta, o que você encontrar depende da parametrização utilizada no item anterior.  Como acima, qualquer mútiplo do vetor é uma resposta correta.     Seguido as dicas de cada item  Observamos inicialmente que o domínio de é todo o plano . Assim, para  : , que descreve uma elipse centrada na origem de \"raios\" e .  : , que descreve as retas paralelas e .  : , que descreve uma hipébole com focos no eixo .  Um esboço das três curvas de nível está indicado na resposta deste exercício.  Em outras palavras, este item pede que parametrizemos o conjunto  A equação pode ser reescrita como e, portanto, podemos escrever e , . Com este domínio a curva , descreve todos os pontos da curva de nível indicada.   Notamos que , logo e, também é fácil ver que . Assim, um vetor tangente à curva no ponto indicado é , já que . Observamos que qualquer múltiplo do vetor indicado também uma resposta válida.   Dizer que a imagem de uma curva, está contida no gráfico de uma função , significa exatamente dizer que .  No caso deste exercício isso significa que .Com isso, e, consequente  Veja nas figuras abaixo, o gráfico de , com os cortes nos níveis pedidos no primeiro item e também a imagem da curva e sua projeção no plano .   Gráfico de e curvas de nível       Gráfico de , a imagem de e sua projeção em .           "
},
{
  "id": "sec_limcont",
  "level": "1",
  "url": "sec_limcont.html",
  "type": "Seção",
  "number": "1.4",
  "title": "Limites e Continuidade",
  "body": " Limites e Continuidade      Calcule, caso exista, . Justifique, caso não exista.   Como você calcularia, sem usar a regra de L'Hospital, ?    .   Seguindo a ideia da dica vamos multiplicar numerador e denominador por , obtendo pois o primeiro fator tende a , o segundo é limitado, enquanto que o terceiro e quarto (iguais) tendem a , como feito no .    Calcule, caso exista, . Justifique, caso não exista.   Como você calcularia, usando a regra de L'Hospital, ?    .   Seguindo a ideia da dica, vamos multiplicar numerador e denominador por , obtendo onde  o primeiro fator é limitado (análogo ao primeiro exemplo em );  usando a com e , temos que o segundo tende a zero, e  o terceiro fator é limitado, pois , para todo .    Sendo o produto de fatores limitados também um termo limitado, o garante que o limite pedido vale .    Calcule, caso exista, . Justifique, caso não exista.   Será que temos aqui uma indeterminação, como no exercício acima?   Não existe.   Seguindo a ideia da dica, notamos que  Para o termo , consideramos a curva , onde temos os limites laterais O garante que este fator não tem limite.  Como a expressão original é composta pelo produto dos dois primeiros fatores, que tem limite não nulo, e o terceiro, que isoladamente não tem limite, o produto dos três fatores não pode ter limite.       "
},
{
  "id": "lim41n",
  "level": "2",
  "url": "sec_limcont.html#lim41n",
  "type": "Exercício",
  "number": "1.4.1.n",
  "title": "",
  "body": " Calcule, caso exista, . Justifique, caso não exista.   Como você calcularia, sem usar a regra de L'Hospital, ?    .   Seguindo a ideia da dica vamos multiplicar numerador e denominador por , obtendo pois o primeiro fator tende a , o segundo é limitado, enquanto que o terceiro e quarto (iguais) tendem a , como feito no .  "
},
{
  "id": "lim42c",
  "level": "2",
  "url": "sec_limcont.html#lim42c",
  "type": "Exercício",
  "number": "1.4.2.c",
  "title": "",
  "body": " Calcule, caso exista, . Justifique, caso não exista.   Como você calcularia, usando a regra de L'Hospital, ?    .   Seguindo a ideia da dica, vamos multiplicar numerador e denominador por , obtendo onde  o primeiro fator é limitado (análogo ao primeiro exemplo em );  usando a com e , temos que o segundo tende a zero, e  o terceiro fator é limitado, pois , para todo .    Sendo o produto de fatores limitados também um termo limitado, o garante que o limite pedido vale .  "
},
{
  "id": "lim42d",
  "level": "2",
  "url": "sec_limcont.html#lim42d",
  "type": "Exercício",
  "number": "1.4.2.d",
  "title": "",
  "body": " Calcule, caso exista, . Justifique, caso não exista.   Será que temos aqui uma indeterminação, como no exercício acima?   Não existe.   Seguindo a ideia da dica, notamos que  Para o termo , consideramos a curva , onde temos os limites laterais O garante que este fator não tem limite.  Como a expressão original é composta pelo produto dos dois primeiros fatores, que tem limite não nulo, e o terceiro, que isoladamente não tem limite, o produto dos três fatores não pode ter limite.  "
},
{
  "id": "sec_derdifpt",
  "level": "1",
  "url": "sec_derdifpt.html",
  "type": "Seção",
  "number": "1.5",
  "title": "Derivadas Parciais, Diferenciabilidade e Plano Tangente",
  "body": " Derivadas Parciais, Diferenciabilidade e Plano Tangente      Seja   Mostre que é contínua em .  Calcule e .  é diferenciável em ?  e são contínuas em ?     Siga com o no primeiro item e pela definição em cada item seguinte.     Seguindo a dica é fácil.  e .  Não.  Não.       Para mostrar que é contínua em , precisamos verificar que . De fato, Logo, é contínua em . A igualdade segue da aplicação do .  Vamos seguir pela definição, já que não é possível aplicar as regras de derivação no ponto em questão (o denominador se anula ali):  Seguindo também pela definição, com , temos que não existe. Para verificar isso, observe que o limite acima não existe (laterais distintos) ao longo da curva , conforme o .  Para verificar a continuidade de qualquer função num ponto, precisamos do seu valor no ponto e numa vizinhança desse ponto. Os valores de e foram calculados no segundo item. Fora da origem podemos aplicar as regras derivação. Obtemos então A continuidade dessas funções se dará pela verificação de e . Nenhuma das duas condições é verdadeira, vamos fazer apenas a primeira. Usando mais uma vez o , com e , temos Verifique também que a derivada parcial em não é contínua na origem.    Neste exemplo, o candidato natural a plano tangente ao gráfico de em é . É esperado que tal plano contenha todos os vetores tangentes a curvas deriváveis contidas no gráfico de , passando pela origem. Tais curvas são da forma , com e com algum tal que . Considere, então É fácil ver que , mas . Veja na figura como o plano aproxima bem o gráfico da função ao longos dos eixos, mas não sobre a curva:  Gráfico de função não derivável e candidato a plano tangente   Gráfico de função não derivável e candidato a plano tangente        Determine o conjunto de pontos de onde não é diferenciável.   Quando módulo de algo não é derivável? E um produto envolvendo módulo e uma função derivável?   Nos pontos da forma , com .   Observamos inicialmente que podemos reescrever a função como Com isso, é fácil ver que é contínua em todo o plano e também de classe em todo ponto tal que   Logo é diferenciável nos pontos , .  Lembrando não é derivável quando , precisamos de uma análise mais cuidadosa em tais pontos. Comecemos pelas derivadas parciais: Temos dois casos a considerar:  se , então e a diferenciabilidade nesse ponto verifica-se rapidamente pela definição: pois é produto de um fator que tende a zero por outro limitado (veja o e os exemplos em ).  se , vemos que não existe (laterais distintos).    Logo não é diferenciável nos pontos da forma , com .  Veja como é o gráfico de :  Gráfico de .         Mostre que os gráficos das funções e se intersectam no ponto e têm o mesmo plano tangente nesse ponto.   Escreva as esquações dos planos tangente a cada gráfico no ponto pedido. (Talvez pergunte-se por que eles existem, para começar)   Observamos inicialmente que as duas funções são de classe em e portanto o plano tangente está definido para ambas nesse ponto.  Como , então . Para verificar que os gráficos compartilham também do mesmo plano tangente nesse ponto vamos para comparar as equações do planos tangentes. Começamos calculando as derivadas parciais:   Com isso as equações dos planos tangentes são dados por ou seja, são mesmo, como desejado.  Veja os gráficos das funções e o plano pedido.  Gráfico de , e o plano tangente a ambos.         Seja   Verifique que , para todo e que , para todo .  Verifique que e que .     É melhor fazer tudo seguindo a e .    Seguindo a dica, vamos pela definição:   Para as segundas derivadas, usamos as expressões do item anterior:    Note na figura abaixo como é quase imperceptível o fato das derivadas de mistas não coincidirem na origem.  Gráfico de função e cortes de nível   Curvas de nível        Sejam e dadas por e , para todo . Considere ainda , diferenciável e tal que Dê a equação do plano tangente ao gráfico de no ponto .   Como ficariam as derivadas parciais de pela definição?     Precisamos de , e para escrever a equação do plano pedido. Como temos que   Seguindo a dica, temos que é, por definição, . Como , então e . Logo . Em fizemos a mudança .  Analogamente, que é, por definição, . Como , então e . Logo .  Com isso, o plano procuração tem equação   A hipótese de diferenciabilidade permitiu determinar o plano tangente ao seu gráfico conhecendo seus valores apenas ao longo de retas paralelas aos eixos coordenados que passam por . Em outras palavras, quaisquer duas funções diferenciáveis que, num dado ponto, tenham os mesmos cortes de seus gráficos por planos paralelos a e , que contenham o ponto , terão o mesmo plano tangente nesse ponto. Uma figura para ilustrar:  Cortes do gráfico de e o plano tangente determinado por eles.       Com o desenvolvimento dos conteúdos veremos que, conhecendo os cortes do gráfico de uma função por dois planos verticais não paralelos passando por um ponto desse gráfico, determinamos o plano tangente ao gráfico nesse ponto.       "
},
{
  "id": "dif5",
  "level": "2",
  "url": "sec_derdifpt.html#dif5",
  "type": "Exercício",
  "number": "1.5.5",
  "title": "",
  "body": " Seja   Mostre que é contínua em .  Calcule e .  é diferenciável em ?  e são contínuas em ?     Siga com o no primeiro item e pela definição em cada item seguinte.     Seguindo a dica é fácil.  e .  Não.  Não.       Para mostrar que é contínua em , precisamos verificar que . De fato, Logo, é contínua em . A igualdade segue da aplicação do .  Vamos seguir pela definição, já que não é possível aplicar as regras de derivação no ponto em questão (o denominador se anula ali):  Seguindo também pela definição, com , temos que não existe. Para verificar isso, observe que o limite acima não existe (laterais distintos) ao longo da curva , conforme o .  Para verificar a continuidade de qualquer função num ponto, precisamos do seu valor no ponto e numa vizinhança desse ponto. Os valores de e foram calculados no segundo item. Fora da origem podemos aplicar as regras derivação. Obtemos então A continuidade dessas funções se dará pela verificação de e . Nenhuma das duas condições é verdadeira, vamos fazer apenas a primeira. Usando mais uma vez o , com e , temos Verifique também que a derivada parcial em não é contínua na origem.    Neste exemplo, o candidato natural a plano tangente ao gráfico de em é . É esperado que tal plano contenha todos os vetores tangentes a curvas deriváveis contidas no gráfico de , passando pela origem. Tais curvas são da forma , com e com algum tal que . Considere, então É fácil ver que , mas . Veja na figura como o plano aproxima bem o gráfico da função ao longos dos eixos, mas não sobre a curva:  Gráfico de função não derivável e candidato a plano tangente   Gráfico de função não derivável e candidato a plano tangente      "
},
{
  "id": "dif7b",
  "level": "2",
  "url": "sec_derdifpt.html#dif7b",
  "type": "Exercício",
  "number": "1.5.7.b",
  "title": "",
  "body": " Determine o conjunto de pontos de onde não é diferenciável.   Quando módulo de algo não é derivável? E um produto envolvendo módulo e uma função derivável?   Nos pontos da forma , com .   Observamos inicialmente que podemos reescrever a função como Com isso, é fácil ver que é contínua em todo o plano e também de classe em todo ponto tal que   Logo é diferenciável nos pontos , .  Lembrando não é derivável quando , precisamos de uma análise mais cuidadosa em tais pontos. Comecemos pelas derivadas parciais: Temos dois casos a considerar:  se , então e a diferenciabilidade nesse ponto verifica-se rapidamente pela definição: pois é produto de um fator que tende a zero por outro limitado (veja o e os exemplos em ).  se , vemos que não existe (laterais distintos).    Logo não é diferenciável nos pontos da forma , com .  Veja como é o gráfico de :  Gráfico de .       "
},
{
  "id": "dif9",
  "level": "2",
  "url": "sec_derdifpt.html#dif9",
  "type": "Exercício",
  "number": "1.5.9",
  "title": "",
  "body": " Mostre que os gráficos das funções e se intersectam no ponto e têm o mesmo plano tangente nesse ponto.   Escreva as esquações dos planos tangente a cada gráfico no ponto pedido. (Talvez pergunte-se por que eles existem, para começar)   Observamos inicialmente que as duas funções são de classe em e portanto o plano tangente está definido para ambas nesse ponto.  Como , então . Para verificar que os gráficos compartilham também do mesmo plano tangente nesse ponto vamos para comparar as equações do planos tangentes. Começamos calculando as derivadas parciais:   Com isso as equações dos planos tangentes são dados por ou seja, são mesmo, como desejado.  Veja os gráficos das funções e o plano pedido.  Gráfico de , e o plano tangente a ambos.       "
},
{
  "id": "dif14",
  "level": "2",
  "url": "sec_derdifpt.html#dif14",
  "type": "Exercício",
  "number": "1.5.14",
  "title": "",
  "body": " Seja   Verifique que , para todo e que , para todo .  Verifique que e que .     É melhor fazer tudo seguindo a e .    Seguindo a dica, vamos pela definição:   Para as segundas derivadas, usamos as expressões do item anterior:    Note na figura abaixo como é quase imperceptível o fato das derivadas de mistas não coincidirem na origem.  Gráfico de função e cortes de nível   Curvas de nível      "
},
{
  "id": "dif17",
  "level": "2",
  "url": "sec_derdifpt.html#dif17",
  "type": "Exercício",
  "number": "1.5.17",
  "title": "",
  "body": " Sejam e dadas por e , para todo . Considere ainda , diferenciável e tal que Dê a equação do plano tangente ao gráfico de no ponto .   Como ficariam as derivadas parciais de pela definição?     Precisamos de , e para escrever a equação do plano pedido. Como temos que   Seguindo a dica, temos que é, por definição, . Como , então e . Logo . Em fizemos a mudança .  Analogamente, que é, por definição, . Como , então e . Logo .  Com isso, o plano procuração tem equação   A hipótese de diferenciabilidade permitiu determinar o plano tangente ao seu gráfico conhecendo seus valores apenas ao longo de retas paralelas aos eixos coordenados que passam por . Em outras palavras, quaisquer duas funções diferenciáveis que, num dado ponto, tenham os mesmos cortes de seus gráficos por planos paralelos a e , que contenham o ponto , terão o mesmo plano tangente nesse ponto. Uma figura para ilustrar:  Cortes do gráfico de e o plano tangente determinado por eles.       Com o desenvolvimento dos conteúdos veremos que, conhecendo os cortes do gráfico de uma função por dois planos verticais não paralelos passando por um ponto desse gráfico, determinamos o plano tangente ao gráfico nesse ponto.  "
},
{
  "id": "sec_cadeia",
  "level": "1",
  "url": "sec_cadeia.html",
  "type": "Seção",
  "number": "1.6",
  "title": "Regras da Cadeia",
  "body": " Regras da Cadeia      Sejam diferenciável em , com e Determine para que a reta tangente ao gráfico de no ponto de abscissa seja paralela à reta .   Você consegue ver como uma composta para aplicar a regra da cadeia? E mais: qual a condição para que duas retas sejam paralelas?     A reta tangente ao gráfico de no ponto de abscissa ser paralela à reta significa que (retas paralelas têm o mesmo coeficiente angular e o coeficiente angular da reta tangente ao gráfico de uma função real derivável é o valor de sua derivada no ponto de tangência).  Isto posto, notamos que , onde . Usando o e as observações iniciais, temos que  Como e , temos    Seja função de classe em e defina . Verifique que sendo , o Laplaciano em coordenadas cartesianas da função .   Aplicação direta da Regra da Cadeia na segunda derivada, veja a fórmula .   Basta aplicar (com calma e coragem!) a Regra da Cadeia, usando que Escrevendo, apenas desta vez, todos os pontos de aplicação, temos Sinteticamente, temos   Derivando mais uma vez em , usamos a regra do produto em cada parcela e também a cadeia: ou seja, pois é uma função de classe (veja o ).  Agora, derivando em : e mais uma vez ou seja,   Dividindo por , por e somando com , temos como desejado.    O sistema de coordenadas , apresentado no , é chamado de sistema de coordenadas polares , como pólo na origem. As relações e podem ser visualizadas na figura abaixo.  Coordenadas polares e cartesianas.       Uma aplicação interessante desse sistema é a numeração das rodovias radiais e transversais do estado de São Paulo, como pode ser verificado nas páginas 11 e 12 deste documento .       "
},
{
  "id": "cadeia2",
  "level": "2",
  "url": "sec_cadeia.html#cadeia2",
  "type": "Exercício",
  "number": "1.6.2",
  "title": "",
  "body": " Sejam diferenciável em , com e Determine para que a reta tangente ao gráfico de no ponto de abscissa seja paralela à reta .   Você consegue ver como uma composta para aplicar a regra da cadeia? E mais: qual a condição para que duas retas sejam paralelas?     A reta tangente ao gráfico de no ponto de abscissa ser paralela à reta significa que (retas paralelas têm o mesmo coeficiente angular e o coeficiente angular da reta tangente ao gráfico de uma função real derivável é o valor de sua derivada no ponto de tangência).  Isto posto, notamos que , onde . Usando o e as observações iniciais, temos que  Como e , temos  "
},
{
  "id": "cadeia6",
  "level": "2",
  "url": "sec_cadeia.html#cadeia6",
  "type": "Exercício",
  "number": "1.6.6",
  "title": "",
  "body": " Seja função de classe em e defina . Verifique que sendo , o Laplaciano em coordenadas cartesianas da função .   Aplicação direta da Regra da Cadeia na segunda derivada, veja a fórmula .   Basta aplicar (com calma e coragem!) a Regra da Cadeia, usando que Escrevendo, apenas desta vez, todos os pontos de aplicação, temos Sinteticamente, temos   Derivando mais uma vez em , usamos a regra do produto em cada parcela e também a cadeia: ou seja, pois é uma função de classe (veja o ).  Agora, derivando em : e mais uma vez ou seja,   Dividindo por , por e somando com , temos como desejado.  "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec_cadeia.html#remark-5",
  "type": "Nota",
  "number": "1.6.1",
  "title": "",
  "body": " O sistema de coordenadas , apresentado no , é chamado de sistema de coordenadas polares , como pólo na origem. As relações e podem ser visualizadas na figura abaixo.  Coordenadas polares e cartesianas.       Uma aplicação interessante desse sistema é a numeração das rodovias radiais e transversais do estado de São Paulo, como pode ser verificado nas páginas 11 e 12 deste documento .  "
},
{
  "id": "sec_grad-dir",
  "level": "1",
  "url": "sec_grad-dir.html",
  "type": "Seção",
  "number": "1.7",
  "title": "Vetor Gradiente e Derivada direcional",
  "body": " Vetor Gradiente e Derivada direcional      Considere uma função de classe . Suponha que:  a imagem da curva plana , para , esteja contida numa curva de nível de ;  a imagem da curva no espaço , com , esteja contida no gráfico de .     Determine .  Calcule , onde .  Determine uma equação do plano tangente ao gráfico de no ponto .     Em itens:  Use a Regra da Cadeia para derivar compostas de com certas curvas convenientes.  Lembre-se, sob certas condições, da relação entre o gradiente de e suas derivadas direcionais.  Os ingredientes necessários para construir o plano tangente ao gráfico de em são e .       .  .  .       Observamos primeiramente que é diferenciável (veja o ) e são curvas deriváveis. Consideramos então a função composta dada por . A condição (i) diz é constante e então, derivando e aplicando o , obtemos  Em particular, para , temos  Por outro lado, de acordo com a condição (ii), sabemos que   Usando a Regra da Cadeia ( ), derivamos os dois membros em relação a , concluindo que   Tomando , obtemos Logo, usando as equações para as derivadas parciais em destaque, .   Como é diferenciável, usamos a para calcular a derivada direcional:  Fazendo na equação , encontramos . Deste modo, o plano desejado tem equação ou seja, .    Para enxergar geometricamente o que acontece, notamos que e, como a curva tem sua imagem contida numa curva de nível de , então tal curva é a curva de nível . Com isso a curva tem sua imagem contida no gráfico de , assim como a imagem de , conforme a hipótese (ii).  A função é de classe (portanto diferenciável) e seus valores são conecidos ao longo de duas curvas no domínio, a saber e a projeção de no plano , dada por . Isso, aliado ao fato de e serem linearmente independentes, determinam o plano tangente ao gráfico de no ponto , que aquele que contém as retas tangentes a e em , onde se interceptam. Tudo isso é feito sem saber o valor de nos demais pontos do seu domínio.  Em outras palavras, o plano tangente a qualquer que seja a superfície (gráfico de uma função a duas variáveis) que contenha estas duas curvas é sempre o mesmo!   Cortes do gráfico de e o plano tangente determinado por eles.        Mostre que é contínua em e tem todas as derivadas direcionais em . A função é diferenciável em ?   Use a definição para calcular as derivadas direcionais e compare com a .    não é diferenciável em .   Notemos que é composta de funções contínuas (raiz cúbica e função polinomial), de modo que é contínua em todos os pontos de seu domínio (todo o plano ). Para calcular as derivadas direcionais em , procedemos usando a : se é um vetor unitário, então   Embora todas as derivadas direcionais de em existam, não é diferenciável neste ponto. De fato, aplicando para os vetores , e , obtemos Isto implica que e, portanto, não é diferenciável em .  O fato de não ser linear nas variáveis já implica, como indicado após a que não pode ser diferenciável em . De fato, se fosse diferenciável em , com , teríamos uma aplicação linear de em , usualmente denotada por , dada por .   O gráfico de .           "
},
{
  "id": "grad-dir4",
  "level": "2",
  "url": "sec_grad-dir.html#grad-dir4",
  "type": "Exercício",
  "number": "1.7.4",
  "title": "",
  "body": " Considere uma função de classe . Suponha que:  a imagem da curva plana , para , esteja contida numa curva de nível de ;  a imagem da curva no espaço , com , esteja contida no gráfico de .     Determine .  Calcule , onde .  Determine uma equação do plano tangente ao gráfico de no ponto .     Em itens:  Use a Regra da Cadeia para derivar compostas de com certas curvas convenientes.  Lembre-se, sob certas condições, da relação entre o gradiente de e suas derivadas direcionais.  Os ingredientes necessários para construir o plano tangente ao gráfico de em são e .       .  .  .       Observamos primeiramente que é diferenciável (veja o ) e são curvas deriváveis. Consideramos então a função composta dada por . A condição (i) diz é constante e então, derivando e aplicando o , obtemos  Em particular, para , temos  Por outro lado, de acordo com a condição (ii), sabemos que   Usando a Regra da Cadeia ( ), derivamos os dois membros em relação a , concluindo que   Tomando , obtemos Logo, usando as equações para as derivadas parciais em destaque, .   Como é diferenciável, usamos a para calcular a derivada direcional:  Fazendo na equação , encontramos . Deste modo, o plano desejado tem equação ou seja, .    Para enxergar geometricamente o que acontece, notamos que e, como a curva tem sua imagem contida numa curva de nível de , então tal curva é a curva de nível . Com isso a curva tem sua imagem contida no gráfico de , assim como a imagem de , conforme a hipótese (ii).  A função é de classe (portanto diferenciável) e seus valores são conecidos ao longo de duas curvas no domínio, a saber e a projeção de no plano , dada por . Isso, aliado ao fato de e serem linearmente independentes, determinam o plano tangente ao gráfico de no ponto , que aquele que contém as retas tangentes a e em , onde se interceptam. Tudo isso é feito sem saber o valor de nos demais pontos do seu domínio.  Em outras palavras, o plano tangente a qualquer que seja a superfície (gráfico de uma função a duas variáveis) que contenha estas duas curvas é sempre o mesmo!   Cortes do gráfico de e o plano tangente determinado por eles.      "
},
{
  "id": "grad-dir8",
  "level": "2",
  "url": "sec_grad-dir.html#grad-dir8",
  "type": "Exercício",
  "number": "1.7.8",
  "title": "",
  "body": " Mostre que é contínua em e tem todas as derivadas direcionais em . A função é diferenciável em ?   Use a definição para calcular as derivadas direcionais e compare com a .    não é diferenciável em .   Notemos que é composta de funções contínuas (raiz cúbica e função polinomial), de modo que é contínua em todos os pontos de seu domínio (todo o plano ). Para calcular as derivadas direcionais em , procedemos usando a : se é um vetor unitário, então   Embora todas as derivadas direcionais de em existam, não é diferenciável neste ponto. De fato, aplicando para os vetores , e , obtemos Isto implica que e, portanto, não é diferenciável em .  O fato de não ser linear nas variáveis já implica, como indicado após a que não pode ser diferenciável em . De fato, se fosse diferenciável em , com , teríamos uma aplicação linear de em , usualmente denotada por , dada por .   O gráfico de .      "
},
{
  "id": "sec_curvasR3",
  "level": "1",
  "url": "sec_curvasR3.html",
  "type": "Seção",
  "number": "1.8",
  "title": "Curvas no <span class=\"process-math\">\\(\\R^3\\)<\/span>",
  "body": " Curvas no      Determine uma parametrização para a curva    Substitua uma equação na outra e complete quadrados.   Uma parametrização é dada por .   Substituindo em , obtemos . Completando quadrados, encontramos , de modo que podemos escrever e . Desta forma, a curva dada por é uma parametrização de .   A interseção das duas superfícies em destaque.      Analise as coordenadas da paramentrização e veja como são as projeções da curva em cada plano coordenado. Note também que o intervalo da parametrização poderia ser , que cobriria apenas \"uma volta completa\" na curva.    Determine uma parametrização para a curva    Substitua uma equação na outra e lembre-se da condição .   Uma parametrização é dada por .   Substituindo em , obtemos e . Como queremos , podemos tomar a curva dada por    A interseção das duas superfícies em destaque.           "
},
{
  "id": "curvasR3-2a",
  "level": "2",
  "url": "sec_curvasR3.html#curvasR3-2a",
  "type": "Exercício",
  "number": "1.8.2.a",
  "title": "",
  "body": " Determine uma parametrização para a curva    Substitua uma equação na outra e complete quadrados.   Uma parametrização é dada por .   Substituindo em , obtemos . Completando quadrados, encontramos , de modo que podemos escrever e . Desta forma, a curva dada por é uma parametrização de .   A interseção das duas superfícies em destaque.      Analise as coordenadas da paramentrização e veja como são as projeções da curva em cada plano coordenado. Note também que o intervalo da parametrização poderia ser , que cobriria apenas \"uma volta completa\" na curva.  "
},
{
  "id": "curvasR3-2d",
  "level": "2",
  "url": "sec_curvasR3.html#curvasR3-2d",
  "type": "Exercício",
  "number": "1.8.2.d",
  "title": "",
  "body": " Determine uma parametrização para a curva    Substitua uma equação na outra e lembre-se da condição .   Uma parametrização é dada por .   Substituindo em , obtemos e . Como queremos , podemos tomar a curva dada por    A interseção das duas superfícies em destaque.      "
},
{
  "id": "sec_supptddir",
  "level": "1",
  "url": "sec_supptddir.html",
  "type": "Seção",
  "number": "1.9",
  "title": "Superfícies de nível, planos tangente e derivadas direcionais",
  "body": " Superfícies de nível, planos tangente e derivadas direcionais      Seja e considere o plano tangente à superfície num ponto do primeiro octante. Mostre que o tetraedro formado por este plano e os planos coordenados tem volume independente do ponto de tangência.   Escreva a equação do plano tangente à superfície dada num ponto arbitrário do primeiro octante, encontre os vértices do tetraedro pedido e calcule seu volume.   O volume do tetraedro pedido é igual a .   Seguindo o contexto da , a superfície dada é a superfície de nível da função , que é de classe . Fixado um ponto tal que , , e , o plano tangente a essa superfície neste ponto é o único plano que passa por e é normal ao vetor . Como uma equação deste plano é ou ainda Um dos vértices do tetraedro formado por este plano e pelos planos coordenados é a origem. Os demais vértices podem ser encontrados igualando duas coordenadas a zero: tratam-se dos pontos Deste modo, o volume do tetraedro pedido é igual a que não depende do ponto de tangência escolhido.  A superfície de nível de e seu plano tangente num ponto.         Ache a reta tangente à intersecção do gráfico da função com o cilindro no ponto .   Reconheça as superfícies dadas como superfícies de nível de duas funções de três variáveis.   A reta desejada tem equação , .   Seguindo o resultado da , consideremos as funções de classe dadas por O gráfico de e o cilindro dado são, respectivamente, a superfície de nível de e a superfície de nível de . Como os vetores são linearmente independentes, sabemos que a reta pedida é a única reta que passa pelo ponto e tem o vetor como vetor diretor. Sua equação é, portanto,   As superfícies de nível e sua interseção no ponto dado.         Determine a equação da esfera que tangencia a superfície nos pontos e .   Escreva a equação de uma esfera arbitrária em e use as condições do enunciado para determinar seu centro e seu raio.   A esfera desejada tem equação .   Nosso objetivo é determinar (centro) e (raio) de modo que a esfera de equação tangencie o cone nos pontos e . Isto significa que esta esfera deve passar pelos pontos e e, além disso, seus planos tangentes nestes pontos devem coincidir com os respectivos planos tangentes do cone. Vamos considerar, em vista da , as funções de classe dadas por   A esfera procurada e o cone dado são, respectivamente, a superfície de nível de e a superfície de nível de . Lembrando que os gradientes são normais às superfícies de nível, queremos bem como de modo que , e . Para encontrar o raio, basta usarmos que os pontos e devem pertenver à esfera: Logo, a esfera procurada tem equação .  As superfícies de nível e os pontos de tangência.       Representamos os gradientes e o plano tangente compartilhado apenas no ponto para evitar poluição visual na figura acima.       "
},
{
  "id": "supptdir-3",
  "level": "2",
  "url": "sec_supptddir.html#supptdir-3",
  "type": "Exercício",
  "number": "1.9.3",
  "title": "",
  "body": " Seja e considere o plano tangente à superfície num ponto do primeiro octante. Mostre que o tetraedro formado por este plano e os planos coordenados tem volume independente do ponto de tangência.   Escreva a equação do plano tangente à superfície dada num ponto arbitrário do primeiro octante, encontre os vértices do tetraedro pedido e calcule seu volume.   O volume do tetraedro pedido é igual a .   Seguindo o contexto da , a superfície dada é a superfície de nível da função , que é de classe . Fixado um ponto tal que , , e , o plano tangente a essa superfície neste ponto é o único plano que passa por e é normal ao vetor . Como uma equação deste plano é ou ainda Um dos vértices do tetraedro formado por este plano e pelos planos coordenados é a origem. Os demais vértices podem ser encontrados igualando duas coordenadas a zero: tratam-se dos pontos Deste modo, o volume do tetraedro pedido é igual a que não depende do ponto de tangência escolhido.  A superfície de nível de e seu plano tangente num ponto.       "
},
{
  "id": "supptdir-5",
  "level": "2",
  "url": "sec_supptddir.html#supptdir-5",
  "type": "Exercício",
  "number": "1.9.5",
  "title": "",
  "body": " Ache a reta tangente à intersecção do gráfico da função com o cilindro no ponto .   Reconheça as superfícies dadas como superfícies de nível de duas funções de três variáveis.   A reta desejada tem equação , .   Seguindo o resultado da , consideremos as funções de classe dadas por O gráfico de e o cilindro dado são, respectivamente, a superfície de nível de e a superfície de nível de . Como os vetores são linearmente independentes, sabemos que a reta pedida é a única reta que passa pelo ponto e tem o vetor como vetor diretor. Sua equação é, portanto,   As superfícies de nível e sua interseção no ponto dado.       "
},
{
  "id": "supptdir-7",
  "level": "2",
  "url": "sec_supptddir.html#supptdir-7",
  "type": "Exercício",
  "number": "1.9.7",
  "title": "",
  "body": " Determine a equação da esfera que tangencia a superfície nos pontos e .   Escreva a equação de uma esfera arbitrária em e use as condições do enunciado para determinar seu centro e seu raio.   A esfera desejada tem equação .   Nosso objetivo é determinar (centro) e (raio) de modo que a esfera de equação tangencie o cone nos pontos e . Isto significa que esta esfera deve passar pelos pontos e e, além disso, seus planos tangentes nestes pontos devem coincidir com os respectivos planos tangentes do cone. Vamos considerar, em vista da , as funções de classe dadas por   A esfera procurada e o cone dado são, respectivamente, a superfície de nível de e a superfície de nível de . Lembrando que os gradientes são normais às superfícies de nível, queremos bem como de modo que , e . Para encontrar o raio, basta usarmos que os pontos e devem pertenver à esfera: Logo, a esfera procurada tem equação .  As superfícies de nível e os pontos de tangência.       Representamos os gradientes e o plano tangente compartilhado apenas no ponto para evitar poluição visual na figura acima.  "
},
{
  "id": "sec_maxminloc",
  "level": "1",
  "url": "sec_maxminloc.html",
  "type": "Seção",
  "number": "1.10",
  "title": "Classificação de pontos críticos em abertos de <span class=\"process-math\">\\(\\R^2\\)<\/span>",
  "body": " Classificação de pontos críticos em abertos de      Determine os valores de para os quais a função   tenha exatamente um ponto de sela e dois pontos de mínimo local;  tenha exatamente dois pontos de sela e um ponto de mínimo local.  Existe para o qual tenha ao menos um ponto de máximo local?  Existe para o qual tenha mais de pontos críticos?     Para todos os itens, encontre os pontos críticos de e classifique-os usando o Critério da Hessiana. Convém separar os casos , e .      Não existe valor de para o qual tenha ao menos um ponto de máximo local.  Sim, apenas .     O gradiente de é . Deste modo, Assim, se , os únicos pontos críticos de são e . Por outro lado, se , então os pontos críticos de são todos os pontos da forma com . Para classificá-los, dividiremos a análise em três casos. Observamos que as derivadas de segunda ordem de são   Se , usando o critério do Hessiano ( ), temos  é ponto de sela de .  e são pontos de mínimo locais .    Se , usamos novamente o critério do Hessiano:  e é ponto de mínimo local de .  são pontos de sela de .    Finalmente, se , notamos que para todo . Como para todo , todos os pontos críticos de são pontos de mínimo (globais) neste caso.  Com a análise acima, estamos em condições de responder cada item do enunciado:  terá exatamente um ponto de sela e dois pontos de mínimo local se, e somente se, .  terá exatamente um ponto de mínimo local e dois pontos de sela se, e somente se, .  Não existe valor de para o qual tenha ao menos um ponto de máximo local.  terá mais de pontos críticos se, e somente se, .     Gráfico de , com .       Gráfico de , com .       Gráfico de , com .           "
},
{
  "id": "maxminloc-2",
  "level": "2",
  "url": "sec_maxminloc.html#maxminloc-2",
  "type": "Exercício",
  "number": "1.10.2",
  "title": "",
  "body": " Determine os valores de para os quais a função   tenha exatamente um ponto de sela e dois pontos de mínimo local;  tenha exatamente dois pontos de sela e um ponto de mínimo local.  Existe para o qual tenha ao menos um ponto de máximo local?  Existe para o qual tenha mais de pontos críticos?     Para todos os itens, encontre os pontos críticos de e classifique-os usando o Critério da Hessiana. Convém separar os casos , e .      Não existe valor de para o qual tenha ao menos um ponto de máximo local.  Sim, apenas .     O gradiente de é . Deste modo, Assim, se , os únicos pontos críticos de são e . Por outro lado, se , então os pontos críticos de são todos os pontos da forma com . Para classificá-los, dividiremos a análise em três casos. Observamos que as derivadas de segunda ordem de são   Se , usando o critério do Hessiano ( ), temos  é ponto de sela de .  e são pontos de mínimo locais .    Se , usamos novamente o critério do Hessiano:  e é ponto de mínimo local de .  são pontos de sela de .    Finalmente, se , notamos que para todo . Como para todo , todos os pontos críticos de são pontos de mínimo (globais) neste caso.  Com a análise acima, estamos em condições de responder cada item do enunciado:  terá exatamente um ponto de sela e dois pontos de mínimo local se, e somente se, .  terá exatamente um ponto de mínimo local e dois pontos de sela se, e somente se, .  Não existe valor de para o qual tenha ao menos um ponto de máximo local.  terá mais de pontos críticos se, e somente se, .     Gráfico de , com .       Gráfico de , com .       Gráfico de , com .      "
},
{
  "id": "sec_maxmincpt",
  "level": "1",
  "url": "sec_maxmincpt.html",
  "type": "Seção",
  "number": "1.11",
  "title": "Máximos e mínimos em conjuntos compactos",
  "body": " Máximos e mínimos em conjuntos compactos      Determine o valor máximo e o valor mínimo de na região .   Divida a análise em três etapas: no interior de , nas faces de (excluídas as arestas) e nas arestas (atenção aos vértices!).   O valor máximo de é e o valor mínimo de é .   Note que é contínua e é um tetraedro sólido, fechado e limitado, portanto compacto. Deste modo o Teorema de Weierstrass ( ) assegura que o problema proposto tem solução.  A análise será dividida em três etapas: encontraremos os candidatos no interior de , no \"interior\" das faces de (isto é, as faces com as arestas excluídas) e, finalmente, nas arestas de . O motivo dessa análise \"excluindo\" essas \"fronteiras\", fica claro ao estudar a demonstração dos teoremas finais da ( e ).  Ao trabalho:  Candidatos no interior de : o interior de é o conjunto (aberto) Neste caso, usamos a versão para três variáveis (totalmente análoga) do , concluindo que os candidatos são os pontos críticos de neste conjunto. Como o único ponto crítico é . Note que este ponto pertence a int .   Candidatos nas faces (excluídas as arestas): procuramos os candidatos nos conjuntos São as faces de , excluídas as arestas. Em cada face, vamos \"eliminar\" uma das variáveis e reduzir o problema ao estudo de funções de duas variáveis em abertos de . Outra abordagem possível seria usar o Método dos Multiplicadores de Lagrange ( ), o qual foi utilizado no .  Na face , podemos escrever e estudar a função no aberto Como o ponto é o único ponto crítico de . Este ponto corresponde ao candidato .  Na face , temos e estudamos a função no aberto Como o único ponto crítico de é , que não pertence a . Deste modo, não há candidatos em .  Em , obtemos a função no aberto O gradiente de  se anula apenas no ponto , que não pertence a . Também não temos candidatos em .  Finalmente, em , analisamos no aberto Como o único ponto crítico de é o ponto , que corresponde ao candidato .  Isto completa a busca dos candidatos nas faces de .   Candidatos nas arestas de : as arestas de são os segmentos de reta A estratégia é parametrizar cada aresta a estudar a composta de com as parametrizações. Poderíamos aqui aplicar o Método dos Multiplicadores de Lagrange ( ), como fizemos no .  Em , consideramos A derivada de se anula somente em , de modo que não há candidatos em . Ficamos apenas com e , que correspondem aos vértices e de .  Em , estudamos Como é estritamente crescente, os candidatos são e , que correspondem aos vértices e .  Em , obtemos cuja derivada se anula em . Os candidatos são , e , que correspondem, respectivamente, a , e .  Em , podemos escrever para obter O único ponto crítico de é . Os candidatos são , e , que correspondem a , e .  Em , fazemos e estudamos O único ponto crítico de é . Os candidatos são , e , que correspondem a , .  Finalmente, em , escrevemos e O único ponto crítico de é . Os candidatos são , e , que correspondem a , e .   Avaliando em cada candidato: só resta calcular nos pontos encontrados nas etapas anteriores e comparar os valores. Confira as contas!    Logo, o maior valor de em é e o menor valor é .     Encontre os pontos de máximo e de mínimo de em , sem parametrizar o conjunto . Repita o exercício parametrizando .   Use o Método dos Multiplicadores de Lagrange para resolver sem parametrizar .   O ponto de máximo de em é . O ponto de mínimo de em é .   Note que é contínua e é compacto, de modo que o Teorema de Weierstrass (veja ) assegura que o problema proposto tem solução.   Primeira solução: Usando o Método dos Multiplicadores de Lagrange.  Nosso objetivo é encontrar os pontos de máximo e mínimo de sujeita às condições e . Consideremos as funções de classe   O conjunto é a intersecção das superfícies de nível de e de . Observamos primeiramente que os gradientes de e , são linearmente independentes em . De fato, estes vetores são paralelos se, e somente se, e , e nenhum ponto da forma pode pertencer a (por quê?). Deste modo, o Método dos Multiplicadores de Lagrange garante que os candidatos a pontos de máximo e mínimo de são as soluções do sistema Como , a primeira condição equivale a Substituindo esta equação nas outras duas, obtemos e . Os candidatos são, portanto, os pontos Como e , tratam-se, respectivamente, do ponto de máximo e do ponto de mínimo de em .  Segunda solução: Parametrizando o conjunto .  Escrevendo e completando quadrados, obtemos . Assim, uma parametrização de é dada por  Desejamos encontrar os pontos de máximo e mínimo da composta no intervalo (um problema de Cálculo I). Os candidatos são os pontos críticos de no intervalo e os extremos . Como os pontos críticos de são as soluções (no intervalo ) da equação Para , temos , que corresponde ao ponto . Analogamente, corresponde ao ponto . O outro candidato é o ponto , no qual atinge o valor .        "
},
{
  "id": "maxmincpt-3b",
  "level": "2",
  "url": "sec_maxmincpt.html#maxmincpt-3b",
  "type": "Exercício",
  "number": "1.11.3.b",
  "title": "",
  "body": " Determine o valor máximo e o valor mínimo de na região .   Divida a análise em três etapas: no interior de , nas faces de (excluídas as arestas) e nas arestas (atenção aos vértices!).   O valor máximo de é e o valor mínimo de é .   Note que é contínua e é um tetraedro sólido, fechado e limitado, portanto compacto. Deste modo o Teorema de Weierstrass ( ) assegura que o problema proposto tem solução.  A análise será dividida em três etapas: encontraremos os candidatos no interior de , no \"interior\" das faces de (isto é, as faces com as arestas excluídas) e, finalmente, nas arestas de . O motivo dessa análise \"excluindo\" essas \"fronteiras\", fica claro ao estudar a demonstração dos teoremas finais da ( e ).  Ao trabalho:  Candidatos no interior de : o interior de é o conjunto (aberto) Neste caso, usamos a versão para três variáveis (totalmente análoga) do , concluindo que os candidatos são os pontos críticos de neste conjunto. Como o único ponto crítico é . Note que este ponto pertence a int .   Candidatos nas faces (excluídas as arestas): procuramos os candidatos nos conjuntos São as faces de , excluídas as arestas. Em cada face, vamos \"eliminar\" uma das variáveis e reduzir o problema ao estudo de funções de duas variáveis em abertos de . Outra abordagem possível seria usar o Método dos Multiplicadores de Lagrange ( ), o qual foi utilizado no .  Na face , podemos escrever e estudar a função no aberto Como o ponto é o único ponto crítico de . Este ponto corresponde ao candidato .  Na face , temos e estudamos a função no aberto Como o único ponto crítico de é , que não pertence a . Deste modo, não há candidatos em .  Em , obtemos a função no aberto O gradiente de  se anula apenas no ponto , que não pertence a . Também não temos candidatos em .  Finalmente, em , analisamos no aberto Como o único ponto crítico de é o ponto , que corresponde ao candidato .  Isto completa a busca dos candidatos nas faces de .   Candidatos nas arestas de : as arestas de são os segmentos de reta A estratégia é parametrizar cada aresta a estudar a composta de com as parametrizações. Poderíamos aqui aplicar o Método dos Multiplicadores de Lagrange ( ), como fizemos no .  Em , consideramos A derivada de se anula somente em , de modo que não há candidatos em . Ficamos apenas com e , que correspondem aos vértices e de .  Em , estudamos Como é estritamente crescente, os candidatos são e , que correspondem aos vértices e .  Em , obtemos cuja derivada se anula em . Os candidatos são , e , que correspondem, respectivamente, a , e .  Em , podemos escrever para obter O único ponto crítico de é . Os candidatos são , e , que correspondem a , e .  Em , fazemos e estudamos O único ponto crítico de é . Os candidatos são , e , que correspondem a , .  Finalmente, em , escrevemos e O único ponto crítico de é . Os candidatos são , e , que correspondem a , e .   Avaliando em cada candidato: só resta calcular nos pontos encontrados nas etapas anteriores e comparar os valores. Confira as contas!    Logo, o maior valor de em é e o menor valor é .   "
},
{
  "id": "maxmincpt-4b",
  "level": "2",
  "url": "sec_maxmincpt.html#maxmincpt-4b",
  "type": "Exercício",
  "number": "1.11.4.b",
  "title": "",
  "body": " Encontre os pontos de máximo e de mínimo de em , sem parametrizar o conjunto . Repita o exercício parametrizando .   Use o Método dos Multiplicadores de Lagrange para resolver sem parametrizar .   O ponto de máximo de em é . O ponto de mínimo de em é .   Note que é contínua e é compacto, de modo que o Teorema de Weierstrass (veja ) assegura que o problema proposto tem solução.   Primeira solução: Usando o Método dos Multiplicadores de Lagrange.  Nosso objetivo é encontrar os pontos de máximo e mínimo de sujeita às condições e . Consideremos as funções de classe   O conjunto é a intersecção das superfícies de nível de e de . Observamos primeiramente que os gradientes de e , são linearmente independentes em . De fato, estes vetores são paralelos se, e somente se, e , e nenhum ponto da forma pode pertencer a (por quê?). Deste modo, o Método dos Multiplicadores de Lagrange garante que os candidatos a pontos de máximo e mínimo de são as soluções do sistema Como , a primeira condição equivale a Substituindo esta equação nas outras duas, obtemos e . Os candidatos são, portanto, os pontos Como e , tratam-se, respectivamente, do ponto de máximo e do ponto de mínimo de em .  Segunda solução: Parametrizando o conjunto .  Escrevendo e completando quadrados, obtemos . Assim, uma parametrização de é dada por  Desejamos encontrar os pontos de máximo e mínimo da composta no intervalo (um problema de Cálculo I). Os candidatos são os pontos críticos de no intervalo e os extremos . Como os pontos críticos de são as soluções (no intervalo ) da equação Para , temos , que corresponde ao ponto . Analogamente, corresponde ao ponto . O outro candidato é o ponto , no qual atinge o valor .   "
},
{
  "id": "sec_maxminarb",
  "level": "1",
  "url": "sec_maxminarb.html",
  "type": "Seção",
  "number": "1.12",
  "title": "Máximos e mínimos em conjuntos arbitrários",
  "body": " Máximos e mínimos em conjuntos arbitrários      Determine as dimensões do paralelepípedo de volume máximo, com faces paralelas aos planos coordenados, inscrito no elipsoide . Justifique a existência de solução.   Use o Método dos Multiplicadores de Lagrange para estudar a função volume sujeita à condição .   Os vértices do paralelepípedo procurado são os pontos .   Considere um paralelepípedo inscrito no elipsoide com faces paralelas aos planos coordenados. Se é o vértice pertencente ao primeiro octante, então as dimensões do paralelepípedo são , e , de modo que seu volume é igual a Isto sugere estudar a função sujeita à condição . Vamos usar o Método dos Multiplicadores de Lagrange ( ) e, depois, mostrar que o resultado obtido é, de fato, solução do problema. Observamos apenas que é contínua e o elipsoide é compacto; de acordo com o Teorema de Weierstrass ( ), possui máximo e mínimo neste elipsoide.  Escrevendo , temos que se anula apenas na origem. Assim, os candidatos a máximos e mínimos de são as soluções de A primeira condição equivale a  Nas soluções do sistema acima com pelo menos uma das coordendas nulas temos .  Resta então o caso em que e , com . Substituindo estas equações em , obtemos , de modo que . Os candidatos são os (oito) pontos , onde vale ou , de acordo com os sinais das coordenadas.  Para verificar que os pontos são os vértices do paralelepípedo de volume máximo satisfazendo as condições do enunciado, basta notar que a função contínua atinge seu valor máximo precisamente nestes pontos.       "
},
{
  "id": "maxminarb-5",
  "level": "2",
  "url": "sec_maxminarb.html#maxminarb-5",
  "type": "Exercício",
  "number": "1.12.5",
  "title": "",
  "body": " Determine as dimensões do paralelepípedo de volume máximo, com faces paralelas aos planos coordenados, inscrito no elipsoide . Justifique a existência de solução.   Use o Método dos Multiplicadores de Lagrange para estudar a função volume sujeita à condição .   Os vértices do paralelepípedo procurado são os pontos .   Considere um paralelepípedo inscrito no elipsoide com faces paralelas aos planos coordenados. Se é o vértice pertencente ao primeiro octante, então as dimensões do paralelepípedo são , e , de modo que seu volume é igual a Isto sugere estudar a função sujeita à condição . Vamos usar o Método dos Multiplicadores de Lagrange ( ) e, depois, mostrar que o resultado obtido é, de fato, solução do problema. Observamos apenas que é contínua e o elipsoide é compacto; de acordo com o Teorema de Weierstrass ( ), possui máximo e mínimo neste elipsoide.  Escrevendo , temos que se anula apenas na origem. Assim, os candidatos a máximos e mínimos de são as soluções de A primeira condição equivale a  Nas soluções do sistema acima com pelo menos uma das coordendas nulas temos .  Resta então o caso em que e , com . Substituindo estas equações em , obtemos , de modo que . Os candidatos são os (oito) pontos , onde vale ou , de acordo com os sinais das coordenadas.  Para verificar que os pontos são os vértices do paralelepípedo de volume máximo satisfazendo as condições do enunciado, basta notar que a função contínua atinge seu valor máximo precisamente nestes pontos.  "
},
{
  "id": "sec_2023-p1",
  "level": "1",
  "url": "sec_2023-p1.html",
  "type": "Seção",
  "number": "2.1",
  "title": "Primeira Prova",
  "body": " Primeira Prova    Considere a função .  Determine o domínio de , e faça seu esboço com linhas tracejadas, no plano cartesiano abaixo, os pontos que não pertencem a este domínio.  Determine as curvas de nível e , esboçando-as também no plano cartesiano abaixo.  Decida, justificando, a existência de .    Espaço para os esboços pedidos.   Espaço para os esboços pedidos.         .  Veja na solução.  O limite pedido não existe.       A expressão de está definida para todo , tal que . Em símbolos, A região a ser excluída no domínio de é a circunferência de raio 1 e centro na origem. Veja na figura abaixo.   Usando a , escrevemos as curvas de nível (lembrando que em cada equação devemos ter ): que são, respectivamente, parte de uma hipérbole com focos no eixo e parte de um par de retas concorrentes na origem (esboçadas abaixo).  Observamos que na outra versão da provas as curvas de nível pedidas são parte de uma elipse e parte de um par de retas paralelas (também indicadas na figura).   Em vista das duas curvas de nível acima se aproximarem arbitrariamente do ponto , temos que ao longo de cada uma dessas curvas a função tende ao valor do nível da curva (na verdade é constante igual a esse nível em cada curv).  Isso mostra que não existe.   Aqui estão os esboços pedidos:  Restrições do domínio e curvas de nível pedidas.   Restrições do domínio e curvas de nível pedidas.      Por que não um esboço do gráfico da função enfatizando os níveis indicados:  Gráfico de função e cortes de nível   Gráfico e cortes de nível           Calcule ou mostre que não existe:  ;  .    Seja . Decida, justificando, se é contínua em .         ;  Não existe.   não é contínua em .         Temos ao menos duas soluções diferentes aqui:  Notamos que é limitada (análogo ao caso de ) e que tende a zero, já que é contínua e tende a zero quando e então este último seguindo de fatos conhecidos do cálculo 1.  Com isso, o limite pedido é produto de um fator limitado com um que vai a zero e, pelo ,  Alternativamente, temos que e que onde a última passagem pode ser verificada usando-se a regra de L'Hospital.   Escolhemos duas curvas contínuas passando por para mostrar a não existência do limite:  , donde ;  , logo .    Para que seja contínua em , devemos ter  Considerando a curva , , temos mostranto que não é contínua em .       Considere a curva , dada por .  Determine os dois instantes nos quais .  Determine as equações das duas retas tangentes à imagem da curva no ponto .  Indique na figura o sentido do percurso de .    A imagem de .   A imagem de .         e .  , e , .  O sentido de percurso é aquele dado pelos vetores tangentes acima. Note que não há inversão de sentido do ou \"bico\"em nenhum momento do percurso , pois é de classe e as suas duas componentes nunca se anulam simultaneamente.       Queremos tal que , ou seja, devemos resolver o sistema   Retas tangentes à imagem de uma curva escrevem-se na forma Aqui temos e . Aplicando os valores de encontrados acima, temos   O sentido de percurso é o indicado pelos vetores tangentes no ponto . Indicamos o vetor tangente em para facilitar a visualização (extendemos aqui o conceito de derivada para funções definidas em intervalos fechados, acontece...). Importante notar que a trajetória não faz bicos, suas coordenadas são deriváveis e não e anula simultaneamente.      "
},
{
  "id": "p1q1-2023",
  "level": "2",
  "url": "sec_2023-p1.html#p1q1-2023",
  "type": "Exercício",
  "number": "2.1.1",
  "title": "",
  "body": " Considere a função .  Determine o domínio de , e faça seu esboço com linhas tracejadas, no plano cartesiano abaixo, os pontos que não pertencem a este domínio.  Determine as curvas de nível e , esboçando-as também no plano cartesiano abaixo.  Decida, justificando, a existência de .    Espaço para os esboços pedidos.   Espaço para os esboços pedidos.         .  Veja na solução.  O limite pedido não existe.       A expressão de está definida para todo , tal que . Em símbolos, A região a ser excluída no domínio de é a circunferência de raio 1 e centro na origem. Veja na figura abaixo.   Usando a , escrevemos as curvas de nível (lembrando que em cada equação devemos ter ): que são, respectivamente, parte de uma hipérbole com focos no eixo e parte de um par de retas concorrentes na origem (esboçadas abaixo).  Observamos que na outra versão da provas as curvas de nível pedidas são parte de uma elipse e parte de um par de retas paralelas (também indicadas na figura).   Em vista das duas curvas de nível acima se aproximarem arbitrariamente do ponto , temos que ao longo de cada uma dessas curvas a função tende ao valor do nível da curva (na verdade é constante igual a esse nível em cada curv).  Isso mostra que não existe.   Aqui estão os esboços pedidos:  Restrições do domínio e curvas de nível pedidas.   Restrições do domínio e curvas de nível pedidas.      Por que não um esboço do gráfico da função enfatizando os níveis indicados:  Gráfico de função e cortes de nível   Gráfico e cortes de nível       "
},
{
  "id": "p1q2-2023",
  "level": "2",
  "url": "sec_2023-p1.html#p1q2-2023",
  "type": "Exercício",
  "number": "2.1.2",
  "title": "",
  "body": "   Calcule ou mostre que não existe:  ;  .    Seja . Decida, justificando, se é contínua em .         ;  Não existe.   não é contínua em .         Temos ao menos duas soluções diferentes aqui:  Notamos que é limitada (análogo ao caso de ) e que tende a zero, já que é contínua e tende a zero quando e então este último seguindo de fatos conhecidos do cálculo 1.  Com isso, o limite pedido é produto de um fator limitado com um que vai a zero e, pelo ,  Alternativamente, temos que e que onde a última passagem pode ser verificada usando-se a regra de L'Hospital.   Escolhemos duas curvas contínuas passando por para mostrar a não existência do limite:  , donde ;  , logo .    Para que seja contínua em , devemos ter  Considerando a curva , , temos mostranto que não é contínua em .     "
},
{
  "id": "p1q3-2023",
  "level": "2",
  "url": "sec_2023-p1.html#p1q3-2023",
  "type": "Exercício",
  "number": "2.1.3",
  "title": "",
  "body": " Considere a curva , dada por .  Determine os dois instantes nos quais .  Determine as equações das duas retas tangentes à imagem da curva no ponto .  Indique na figura o sentido do percurso de .    A imagem de .   A imagem de .         e .  , e , .  O sentido de percurso é aquele dado pelos vetores tangentes acima. Note que não há inversão de sentido do ou \"bico\"em nenhum momento do percurso , pois é de classe e as suas duas componentes nunca se anulam simultaneamente.       Queremos tal que , ou seja, devemos resolver o sistema   Retas tangentes à imagem de uma curva escrevem-se na forma Aqui temos e . Aplicando os valores de encontrados acima, temos   O sentido de percurso é o indicado pelos vetores tangentes no ponto . Indicamos o vetor tangente em para facilitar a visualização (extendemos aqui o conceito de derivada para funções definidas em intervalos fechados, acontece...). Importante notar que a trajetória não faz bicos, suas coordenadas são deriváveis e não e anula simultaneamente.    "
},
{
  "id": "sec_2022-p1",
  "level": "1",
  "url": "sec_2022-p1.html",
  "type": "Seção",
  "number": "3.1",
  "title": "Primeira Prova",
  "body": " Primeira Prova    Seja dada por .  Determine o polinômio de Taylor de ordem de em torno de .  Use o item anterior para obter uma aproximação, na forma de fração irredutível, de . Mostre também que o erro cometido nesta aproximação é inferior, em módulo, a .       .  Veja a solução.       As derivadas de até quarta ordem são para todo . Assim, o polinômio de Taylor de ordem para em torno de é  Usando , obtemos Para estimar, em módulo, o erro cometido nesta aproximação, lembramos que para algum tal que . Com isso, e então,      Considere a função .  Esboce, no plano cartesiano abaixo, o domínio de , indicando pontos que não pertençam ao seu domínio com linhas tracejadas. Determine as curvas de nível e de e esboce suas imagens, também no plano abaixo.  Desenhe aqui a restrição no domínio e as curvas de nível pedidas.   Plano para esboço das curvas.      Decida, justificando, se existe.     Veja a solução com a figura completa.  Não existe.     O domínio de é o conjunto , isto é, o complementar das bissetrizes e , indicadas em vermelho tracejado na .  As curvas de nível pedidas são dadas, conforme a , respectivamente por  nível : é o conjunto tratando-se da interseção de uma elipse com o domínio de , esboçada em azul na .  nível é o conjunto que descreve um par de retas paralelas, removidas as intersecções com as bissetrizes (em laranja na figura ).     A restrição do domínio e as curvas de nível pedidas.   Plano com o esboço das curvas.     De acordo com a figura, qualquer vizinhança do ponto contém pontos da curva de nível de , nos quais esta vale . Da mesma forma, uma tal vizinhança contém pontos da curva de nível de , onde esta vale . Deste modo, pelo , o limite indicado não existe.    Seja dada por .  Decida se é contínua em .  Calcule e .  A função é diferenciável em ?     Sim, é contínua em .  e .  Sim, é diferenciável em .     Em vista do , basta calcular   Pela :   Agora, pela : pois , enquanto que e são ambos limitados.     Em , o limite vale pois é um produto de um fator limitado com um que tende a zero ( ). A limitação do primeiro fator é feita em aos 4m18s.  A primeira limitação utilizada no último está feita aos 2m06s da . Já a segunda se verifica assim: para todo , temos     Seja dada por . Decida se admite plano tangente ao seu gráfico no ponto e, em caso afirmativo, escreva a equação deste plano. Sim, a função admite plano tangente no ponto, dado por .  Para garantir a existência do plano tangente, precisamos mostrar que é diferenciável no ponto . Isso pode ser feito de duas maneiras: verificando que é diferenciável em diretamente pela ou mostrando que é de classe nesse ponto, conforme o . Vamos resolver das duas formas e, em qualquer caso precisamos das derivadas parciais de na origem.  Isso deve ser feito pela definição, uma vez que o termo do qual extraímos a raiz quadrada se anula. Usando que , temos   Cada uma das possibilidades mencionadas:  diferenciabilidade de em : resume-se a verificar que pois é limitado (veja em 2m06s da ) e .  é de classe em : precisamos mostrar que e . Se , então é dada pela composta, soma e produto de funções deriváveis de e de separadamente. Usando as regras de derivação, temos Finalmente, com as expressões acima e os valores obtidos em e , temos     Para verificar as afirmações e , usamos uma variante do argumento para a limitação feita aos 2m06s da , trocando por na primeira, por exemplo).    "
},
{
  "id": "p1q1a-2022",
  "level": "2",
  "url": "sec_2022-p1.html#p1q1a-2022",
  "type": "Exercício",
  "number": "3.1.1",
  "title": "",
  "body": " Seja dada por .  Determine o polinômio de Taylor de ordem de em torno de .  Use o item anterior para obter uma aproximação, na forma de fração irredutível, de . Mostre também que o erro cometido nesta aproximação é inferior, em módulo, a .       .  Veja a solução.       As derivadas de até quarta ordem são para todo . Assim, o polinômio de Taylor de ordem para em torno de é  Usando , obtemos Para estimar, em módulo, o erro cometido nesta aproximação, lembramos que para algum tal que . Com isso, e então,     "
},
{
  "id": "p1q2a-2022",
  "level": "2",
  "url": "sec_2022-p1.html#p1q2a-2022",
  "type": "Exercício",
  "number": "3.1.2",
  "title": "",
  "body": "Considere a função .  Esboce, no plano cartesiano abaixo, o domínio de , indicando pontos que não pertençam ao seu domínio com linhas tracejadas. Determine as curvas de nível e de e esboce suas imagens, também no plano abaixo.  Desenhe aqui a restrição no domínio e as curvas de nível pedidas.   Plano para esboço das curvas.      Decida, justificando, se existe.     Veja a solução com a figura completa.  Não existe.     O domínio de é o conjunto , isto é, o complementar das bissetrizes e , indicadas em vermelho tracejado na .  As curvas de nível pedidas são dadas, conforme a , respectivamente por  nível : é o conjunto tratando-se da interseção de uma elipse com o domínio de , esboçada em azul na .  nível é o conjunto que descreve um par de retas paralelas, removidas as intersecções com as bissetrizes (em laranja na figura ).     A restrição do domínio e as curvas de nível pedidas.   Plano com o esboço das curvas.     De acordo com a figura, qualquer vizinhança do ponto contém pontos da curva de nível de , nos quais esta vale . Da mesma forma, uma tal vizinhança contém pontos da curva de nível de , onde esta vale . Deste modo, pelo , o limite indicado não existe.   "
},
{
  "id": "p1q3a-2022",
  "level": "2",
  "url": "sec_2022-p1.html#p1q3a-2022",
  "type": "Exercício",
  "number": "3.1.3",
  "title": "",
  "body": "Seja dada por .  Decida se é contínua em .  Calcule e .  A função é diferenciável em ?     Sim, é contínua em .  e .  Sim, é diferenciável em .     Em vista do , basta calcular   Pela :   Agora, pela : pois , enquanto que e são ambos limitados.     Em , o limite vale pois é um produto de um fator limitado com um que tende a zero ( ). A limitação do primeiro fator é feita em aos 4m18s.  A primeira limitação utilizada no último está feita aos 2m06s da . Já a segunda se verifica assim: para todo , temos    "
},
{
  "id": "p1q4a-2022",
  "level": "2",
  "url": "sec_2022-p1.html#p1q4a-2022",
  "type": "Exercício",
  "number": "3.1.4",
  "title": "",
  "body": "Seja dada por . Decida se admite plano tangente ao seu gráfico no ponto e, em caso afirmativo, escreva a equação deste plano. Sim, a função admite plano tangente no ponto, dado por .  Para garantir a existência do plano tangente, precisamos mostrar que é diferenciável no ponto . Isso pode ser feito de duas maneiras: verificando que é diferenciável em diretamente pela ou mostrando que é de classe nesse ponto, conforme o . Vamos resolver das duas formas e, em qualquer caso precisamos das derivadas parciais de na origem.  Isso deve ser feito pela definição, uma vez que o termo do qual extraímos a raiz quadrada se anula. Usando que , temos   Cada uma das possibilidades mencionadas:  diferenciabilidade de em : resume-se a verificar que pois é limitado (veja em 2m06s da ) e .  é de classe em : precisamos mostrar que e . Se , então é dada pela composta, soma e produto de funções deriváveis de e de separadamente. Usando as regras de derivação, temos Finalmente, com as expressões acima e os valores obtidos em e , temos     Para verificar as afirmações e , usamos uma variante do argumento para a limitação feita aos 2m06s da , trocando por na primeira, por exemplo).  "
},
{
  "id": "sec_2022-p2",
  "level": "1",
  "url": "sec_2022-p2.html",
  "type": "Seção",
  "number": "3.2",
  "title": "Segunda Prova",
  "body": "  Segunda Prova      Seja diferenciável tal que é o plano tangente ao gráfico de no ponto . Determine  O valor de .  A reta tangente ao gráfico de dada por no ponto .  O plano tangente ao gráfico de no ponto .       .  .  .       Basta lembrar que o ponto pertence do plano dado como tangente ao gráfico de nesse ponto. Assim .  Prestando a devida atenção aos sinais, a equação do plano dado nos diz que . A equação da reta tangente ao gráfico de (uma função de em é dada por . Determinamos os coeficientes, observando que , onde ). Com isso, pois e são diferenciáveis, com obtido no item anterior e . Assim, a reta procurada é .  Precisamos do valor e das derivadas parciais de no ponto , o que vem da Regra da Cadeia. Primeiro as derivadas num ponto qualquer: No ponto , temos e . Assim o plano tangente pedido tem equação .      Seja dada por e considere   Encontre um vetor unitário tangente à curva em .  Denotando por o vetor encontrado no item anterior, calcule .       As duas possíveis respostas são ou ;  .     Existem aqui duas estratégias de solução, uma usando a teoria e fazendo menos contas e outras mais artesanal, parametrizando a curva:  Solução 1 (utilizando a relação entre gradientes e superfícies de nível):   Consideremos as funções (de classe ) dadas por cujos gradientes são Em particular, e são linearmente independentes. Como é a intersecção das superfícies de nível de e , sabemos que a reta tangente a em é a interseção dos planos tangentes às superfícies de nível acima e portanto normal aos vetores e . Deste modo, um vetor diretor desta reta é Assim, os vetores são ambos unitários e tangentes a em .  Como é diferenciável, sabemos que e, analogamente, . Observe que é combinação linear de e . Tal fato está ligado à solução do .    Solução 2 (Parametrizando a curva \"por partes\"):    Somando as equações que definem e completando quadrados, obtemos e podemos escrever Para determinar em termos de , basta substituir na primeira equação: Como estamos interessados no ponto , vamos considerar apenas Note que a expressão dentro da raiz quadrada acima deve ser maior ou igual a zero, o que impõe uma restrição ao domínio da nossa parametrização procurada. Devemos ter , o que equivale a .  (Uma maneira rápida de verificar isto é notar que   A curva dada por é, portanto, uma parametrização de parte de que passa por . Para encontrar um vetor tangente a em , precisamos calcular determinar tal que e, em seguida, calcular a derivada de neste ponto.  Notemos que se, e somente se, que admite apenas como solução no intervalo (verifique).  Como concluímos que é tangente a em . Note que este vetor é paralelo ao vetor obtido na solução anterior!  Uma vez encontrado o vetor tangente a a derivada direcional é calculada como na solução anterior.    Um figura sempre ajuda:   Superfícies da   Interseção de superfićies e seu vetor tangente.      Determine os pontos críticos da função e classifique-os como pontos de máximo local, mínimo local ou de sela.  Os pontos , e são de sela, enquanto que é de mínimo local.   Note que é de classe e seu gradiente é Deste modo, os pontos críticos de são as soluções do sistema A primeira equação equivale a ou . Vamos analisar os dois casos:  substituindo na segunda equação, obtemos , isto é, ou . Temos, assim, os pontos e ;  substituindo na segunda equação, obtemos , isto é, ou . Para temos ; para temos . Isto nos dá os pontos e .    Uma vez encontrados os pontos críticos de , vamos classificá-los usando o Critério da Hessiana ( ). Precisamos das derivadas de segunda ordem de $f$: Denotando por a matriz Hessiana de no ponto , temos:  é ponto de sela de .  é ponto de sela de .  é ponto de sela de .  e é ponto de mínimo local de .    Seja dada por . Determine o valor máximo e o valor mínimo de em  O valor máximo de é , atingido no ponto , enquanto o mínimo é , atingido no ponto .  Observamos, primeiramente, que é contínua e é compacto (é a intersecção de um hiperboloide de uma folha, que é fechado, e uma esfera, que é fechada e limitada). O Teorema de Weierstrass assegura então que o problema proposto tem solução.  Usando a mesma notação da solução do , vamos considerar as funções dadas por As funções , e são de classe e seus gradientes são , e .  O Método dos Multiplicadores de Lagrange ( ) garante que os candidatos a máximos e mínimos locais de em são as soluções do sistema A primeira condição equivale a ou seja, , de modo que ou . Vamos analisar estes dois casos.   Caso 1 . Substituindo isso nas outras duas equações temos Somando estas equações, concluímos que  Se , então e , um absurdo. Se , então e Isto nos dá os candidatos e .   Caso 2 . Somando as duas últimas equações obtemos que, junto com a hipótese desse caso, prodduz , ou seja, . Este ponto não atende às restrições do problema (duas últimas equações do sistema de Lagrange).   Com isso, os únicos candidatos são e , onde é valor máximo e é o valor mínimo.  Observamos que o problema poderia ser resolvido parametrizando-se a curva e analisando a derivada de sua composta com a função .    "
},
{
  "id": "p2q1a-2022",
  "level": "2",
  "url": "sec_2022-p2.html#p2q1a-2022",
  "type": "Exercício",
  "number": "3.2.1",
  "title": "",
  "body": " Seja diferenciável tal que é o plano tangente ao gráfico de no ponto . Determine  O valor de .  A reta tangente ao gráfico de dada por no ponto .  O plano tangente ao gráfico de no ponto .       .  .  .       Basta lembrar que o ponto pertence do plano dado como tangente ao gráfico de nesse ponto. Assim .  Prestando a devida atenção aos sinais, a equação do plano dado nos diz que . A equação da reta tangente ao gráfico de (uma função de em é dada por . Determinamos os coeficientes, observando que , onde ). Com isso, pois e são diferenciáveis, com obtido no item anterior e . Assim, a reta procurada é .  Precisamos do valor e das derivadas parciais de no ponto , o que vem da Regra da Cadeia. Primeiro as derivadas num ponto qualquer: No ponto , temos e . Assim o plano tangente pedido tem equação .    "
},
{
  "id": "p2q2a-2022",
  "level": "2",
  "url": "sec_2022-p2.html#p2q2a-2022",
  "type": "Exercício",
  "number": "3.2.2",
  "title": "",
  "body": " Seja dada por e considere   Encontre um vetor unitário tangente à curva em .  Denotando por o vetor encontrado no item anterior, calcule .       As duas possíveis respostas são ou ;  .     Existem aqui duas estratégias de solução, uma usando a teoria e fazendo menos contas e outras mais artesanal, parametrizando a curva:  Solução 1 (utilizando a relação entre gradientes e superfícies de nível):   Consideremos as funções (de classe ) dadas por cujos gradientes são Em particular, e são linearmente independentes. Como é a intersecção das superfícies de nível de e , sabemos que a reta tangente a em é a interseção dos planos tangentes às superfícies de nível acima e portanto normal aos vetores e . Deste modo, um vetor diretor desta reta é Assim, os vetores são ambos unitários e tangentes a em .  Como é diferenciável, sabemos que e, analogamente, . Observe que é combinação linear de e . Tal fato está ligado à solução do .    Solução 2 (Parametrizando a curva \"por partes\"):    Somando as equações que definem e completando quadrados, obtemos e podemos escrever Para determinar em termos de , basta substituir na primeira equação: Como estamos interessados no ponto , vamos considerar apenas Note que a expressão dentro da raiz quadrada acima deve ser maior ou igual a zero, o que impõe uma restrição ao domínio da nossa parametrização procurada. Devemos ter , o que equivale a .  (Uma maneira rápida de verificar isto é notar que   A curva dada por é, portanto, uma parametrização de parte de que passa por . Para encontrar um vetor tangente a em , precisamos calcular determinar tal que e, em seguida, calcular a derivada de neste ponto.  Notemos que se, e somente se, que admite apenas como solução no intervalo (verifique).  Como concluímos que é tangente a em . Note que este vetor é paralelo ao vetor obtido na solução anterior!  Uma vez encontrado o vetor tangente a a derivada direcional é calculada como na solução anterior.    Um figura sempre ajuda:   Superfícies da   Interseção de superfićies e seu vetor tangente.     "
},
{
  "id": "p2q3a-2022",
  "level": "2",
  "url": "sec_2022-p2.html#p2q3a-2022",
  "type": "Exercício",
  "number": "3.2.3",
  "title": "",
  "body": "Determine os pontos críticos da função e classifique-os como pontos de máximo local, mínimo local ou de sela.  Os pontos , e são de sela, enquanto que é de mínimo local.   Note que é de classe e seu gradiente é Deste modo, os pontos críticos de são as soluções do sistema A primeira equação equivale a ou . Vamos analisar os dois casos:  substituindo na segunda equação, obtemos , isto é, ou . Temos, assim, os pontos e ;  substituindo na segunda equação, obtemos , isto é, ou . Para temos ; para temos . Isto nos dá os pontos e .    Uma vez encontrados os pontos críticos de , vamos classificá-los usando o Critério da Hessiana ( ). Precisamos das derivadas de segunda ordem de $f$: Denotando por a matriz Hessiana de no ponto , temos:  é ponto de sela de .  é ponto de sela de .  é ponto de sela de .  e é ponto de mínimo local de .   "
},
{
  "id": "p2q4a-2022",
  "level": "2",
  "url": "sec_2022-p2.html#p2q4a-2022",
  "type": "Exercício",
  "number": "3.2.4",
  "title": "",
  "body": "Seja dada por . Determine o valor máximo e o valor mínimo de em  O valor máximo de é , atingido no ponto , enquanto o mínimo é , atingido no ponto .  Observamos, primeiramente, que é contínua e é compacto (é a intersecção de um hiperboloide de uma folha, que é fechado, e uma esfera, que é fechada e limitada). O Teorema de Weierstrass assegura então que o problema proposto tem solução.  Usando a mesma notação da solução do , vamos considerar as funções dadas por As funções , e são de classe e seus gradientes são , e .  O Método dos Multiplicadores de Lagrange ( ) garante que os candidatos a máximos e mínimos locais de em são as soluções do sistema A primeira condição equivale a ou seja, , de modo que ou . Vamos analisar estes dois casos.   Caso 1 . Substituindo isso nas outras duas equações temos Somando estas equações, concluímos que  Se , então e , um absurdo. Se , então e Isto nos dá os candidatos e .   Caso 2 . Somando as duas últimas equações obtemos que, junto com a hipótese desse caso, prodduz , ou seja, . Este ponto não atende às restrições do problema (duas últimas equações do sistema de Lagrange).   Com isso, os únicos candidatos são e , onde é valor máximo e é o valor mínimo.  Observamos que o problema poderia ser resolvido parametrizando-se a curva e analisando a derivada de sua composta com a função .  "
},
{
  "id": "sec_2022-psub",
  "level": "1",
  "url": "sec_2022-psub.html",
  "type": "Seção",
  "number": "3.3",
  "title": "Prova Substitutiva",
  "body": "  Prova Substitutiva      Considere a função dada por   Decida se é contínua em .  Calcule as derivadas parciais de em .  Decida se é diferenciável em .  Calcule sendo um vetor unitário.       Sim, é contínua em ;  e .  Não é diferenciável em .  .     Resolveremos cada item usando as definições.    Basta usar o e verificar que para concluir que é contínua em .  O denominador da primeira expressão que define se anula em , então não podemos usar as regras de derivação. Procedemos utilizando a :  Devemos determinar se o limite existe e é igual a zero. Através da curva dada por , este limite se torna que não existe (os limites laterais não coincidem). Isso implica que o limite original também não existe e, portanto, não é diferenciável em .  Dado unitário, temos pois . Convém observar que não podemos simplesmente tomar o produto interno do gradiente de em pelo vetor porque não é diferenciável em !    Apresentamos outra solução possível do item (c) usando os itens (b) e (d). Caso fosse diferenciável em , teríamos Assim, para provar que não é diferenciável é suficiente exibir um vetor unitário tal que como, por exemplo, (verifique).    Considere a função , sendo um número real. Para cada valor de , determine todos os pontos críticos de e classifique-os.     : , são os únicos pontos críticos, os quais são pontos de mínimo (globais) de .  : , são os únicos pontos críticos, os quais são pontos de mínimo (globais) de .  : é o único ponto crítico, o qual é um ponto de mínimo (global) de .  : é o único ponto crítico, o qual é um ponto de sela de .     Como, para todo , a função é de classe em todo o plano vamos utilizar o critério do Hessiano ( ). Para isso precisamos de suas derivadas até segunda ordem, indicadas convenientemente no vetor gradiente e matriz Hessiana:   Os pontos críticos de são aqueles que anulam o gradiente e portanto as soluções do sistema Subsituindo a segunda equação na primeira, temos   Temos então três casos as considerar:  : nesse caso temos para todos . Aqui os pontos críticos satisfazem e o determinante da matriz Hessiana se anula, não permitindo a aplicação do critério. Por outro lado, , mostrando que todos os pontos da forma , são pontos de mínimo global de .  : agora para todos . Aqui os pontos críticos satisfazem e o determinante da matriz Hessiana novamente se anula. Mas , mostrando que todos os pontos da forma , são pontos de mínimo global de .  e : isso garante que e portanto o ponto é crítico para qualquer . Nesse caso temos e então quando a origem é um ponto de mínimo local, enquanto que garante a origem como um ponto de sela.    Veja os gráficos da função para alguns valores de :    Gráfico de para   Gráfico de para      Gráfico de para   Gráfico de para        Gráfico de para   Gráfico de para      Gráfico de para   Gráfico de para        Gráfico de para   Gráfico de para      Gráfico de para   Gráfico de para      E por que não uma animação no Geogebra?    Gráfico de para diversos valores de     Seja uma função diferenciável. Sabe-se que:  A imagem da curva , está contida na curva de nível de .  A imagem da curva , está contida no gráfico de .    Determine a equação do plano tangente ao gráfico de no ponto . Explicite claramente e .   , e .   Para calcular podemos usar as informações dadas em qualquer um dos itens (i) e (ii) do enunciado. De (i) temos que Em particular, para , temos  De (ii) segue-se que e, tomando , obtemos  Nosso próximo passo é calcular o gradiente de em . Para isso derivamos as expressões acima com a regra da cadeia:  Escrevendo os vetores em coordenadas, substituindo na primeira das equações do sistema acima e na segunda, temos Resolvendo o sistema, encontramos e, portanto, o plano tangente ao gráfico de em tem equação   Uma figura para ilustrar a situação:   Cortes do gráfico de e o plano tangente determinado por eles.        Determine o valor máximo e o valor mínimo de na elipse Explicite os pontos de onde ocorrem esses valores.   (máximo) e (mínimo).   Vamos usar o Método dos Multiplicadores de Lagrange, com duas restrições. Outra opção, um tanto mais trabalhosa (precisaria saber eliminar termos mistos em equações de cônicas - uma aplicação de diagonalização de matrizes simétricas), seria parametrizar a elipse .  Sejam dadas por Ambas são de classe e a elipse é a intersecção da superfície de nível de e da superfície de nível de .  De acordo com o Método dos Multiplicadores de Lagrange, os candidatos são as soluções do sistema A primeira condição equivale a  Subtraindo as equações e obtemos $z=1$ e, portanto, o que implica que e , ou e .  Os candidatos são, portanto, os pontos nos quais atinge, respectivamente, os valores (máximo) e (mínimo).  Uma figura:   Cortes do gráfico de e o plano tangente determinado por eles.        "
},
{
  "id": "psubq1a-2022",
  "level": "2",
  "url": "sec_2022-psub.html#psubq1a-2022",
  "type": "Exercício",
  "number": "3.3.1",
  "title": "",
  "body": " Considere a função dada por   Decida se é contínua em .  Calcule as derivadas parciais de em .  Decida se é diferenciável em .  Calcule sendo um vetor unitário.       Sim, é contínua em ;  e .  Não é diferenciável em .  .     Resolveremos cada item usando as definições.    Basta usar o e verificar que para concluir que é contínua em .  O denominador da primeira expressão que define se anula em , então não podemos usar as regras de derivação. Procedemos utilizando a :  Devemos determinar se o limite existe e é igual a zero. Através da curva dada por , este limite se torna que não existe (os limites laterais não coincidem). Isso implica que o limite original também não existe e, portanto, não é diferenciável em .  Dado unitário, temos pois . Convém observar que não podemos simplesmente tomar o produto interno do gradiente de em pelo vetor porque não é diferenciável em !    Apresentamos outra solução possível do item (c) usando os itens (b) e (d). Caso fosse diferenciável em , teríamos Assim, para provar que não é diferenciável é suficiente exibir um vetor unitário tal que como, por exemplo, (verifique).  "
},
{
  "id": "psubq2a-2022",
  "level": "2",
  "url": "sec_2022-psub.html#psubq2a-2022",
  "type": "Exercício",
  "number": "3.3.2",
  "title": "",
  "body": " Considere a função , sendo um número real. Para cada valor de , determine todos os pontos críticos de e classifique-os.     : , são os únicos pontos críticos, os quais são pontos de mínimo (globais) de .  : , são os únicos pontos críticos, os quais são pontos de mínimo (globais) de .  : é o único ponto crítico, o qual é um ponto de mínimo (global) de .  : é o único ponto crítico, o qual é um ponto de sela de .     Como, para todo , a função é de classe em todo o plano vamos utilizar o critério do Hessiano ( ). Para isso precisamos de suas derivadas até segunda ordem, indicadas convenientemente no vetor gradiente e matriz Hessiana:   Os pontos críticos de são aqueles que anulam o gradiente e portanto as soluções do sistema Subsituindo a segunda equação na primeira, temos   Temos então três casos as considerar:  : nesse caso temos para todos . Aqui os pontos críticos satisfazem e o determinante da matriz Hessiana se anula, não permitindo a aplicação do critério. Por outro lado, , mostrando que todos os pontos da forma , são pontos de mínimo global de .  : agora para todos . Aqui os pontos críticos satisfazem e o determinante da matriz Hessiana novamente se anula. Mas , mostrando que todos os pontos da forma , são pontos de mínimo global de .  e : isso garante que e portanto o ponto é crítico para qualquer . Nesse caso temos e então quando a origem é um ponto de mínimo local, enquanto que garante a origem como um ponto de sela.    Veja os gráficos da função para alguns valores de :    Gráfico de para   Gráfico de para      Gráfico de para   Gráfico de para        Gráfico de para   Gráfico de para      Gráfico de para   Gráfico de para        Gráfico de para   Gráfico de para      Gráfico de para   Gráfico de para      E por que não uma animação no Geogebra?    Gráfico de para diversos valores de   "
},
{
  "id": "psubq3a-2022",
  "level": "2",
  "url": "sec_2022-psub.html#psubq3a-2022",
  "type": "Exercício",
  "number": "3.3.3",
  "title": "",
  "body": " Seja uma função diferenciável. Sabe-se que:  A imagem da curva , está contida na curva de nível de .  A imagem da curva , está contida no gráfico de .    Determine a equação do plano tangente ao gráfico de no ponto . Explicite claramente e .   , e .   Para calcular podemos usar as informações dadas em qualquer um dos itens (i) e (ii) do enunciado. De (i) temos que Em particular, para , temos  De (ii) segue-se que e, tomando , obtemos  Nosso próximo passo é calcular o gradiente de em . Para isso derivamos as expressões acima com a regra da cadeia:  Escrevendo os vetores em coordenadas, substituindo na primeira das equações do sistema acima e na segunda, temos Resolvendo o sistema, encontramos e, portanto, o plano tangente ao gráfico de em tem equação   Uma figura para ilustrar a situação:   Cortes do gráfico de e o plano tangente determinado por eles.      "
},
{
  "id": "psubq4a-2022",
  "level": "2",
  "url": "sec_2022-psub.html#psubq4a-2022",
  "type": "Exercício",
  "number": "3.3.4",
  "title": "",
  "body": " Determine o valor máximo e o valor mínimo de na elipse Explicite os pontos de onde ocorrem esses valores.   (máximo) e (mínimo).   Vamos usar o Método dos Multiplicadores de Lagrange, com duas restrições. Outra opção, um tanto mais trabalhosa (precisaria saber eliminar termos mistos em equações de cônicas - uma aplicação de diagonalização de matrizes simétricas), seria parametrizar a elipse .  Sejam dadas por Ambas são de classe e a elipse é a intersecção da superfície de nível de e da superfície de nível de .  De acordo com o Método dos Multiplicadores de Lagrange, os candidatos são as soluções do sistema A primeira condição equivale a  Subtraindo as equações e obtemos $z=1$ e, portanto, o que implica que e , ou e .  Os candidatos são, portanto, os pontos nos quais atinge, respectivamente, os valores (máximo) e (mínimo).  Uma figura:   Cortes do gráfico de e o plano tangente determinado por eles.      "
},
{
  "id": "sec_2022-prec",
  "level": "1",
  "url": "sec_2022-prec.html",
  "type": "Seção",
  "number": "3.4",
  "title": "Prova de Recuperação",
  "body": "  Prova de Recuperação        Considere a função dada por   Calcule as derivadas parciais de em todos os pontos onde elas existirem.  Decida se é diferenciável em .  Calcule sendo um vetor unitário.       e .  É diferenciável em .  .       O denominador da primeira expressão que define se anula em , então não podemos usar as regras de derivação. Temos dois casos a tratar:  : qualquer desses pontos admite uma vizinhança onde é dada pelo quociente de duas funções diferenciáveis, com denominador não nulo. Podemos aplicar diretamente a regra do quociente para cada variável:  : não podemos aplicar a regra do quociente, utilizada no caso anterior. É preciso seguir pela :    Já que as derivadas parciais de existem em , verificar sua diferenciabilidade nesse ponto requer o uso da definição, ou seja, verificar se existe e é nulo o limite pois o primeiro fator na expressão acima tende a , enquanto o terceito vai a e o demais fatores são todos limitados.  Com isso mostramos que é diferenciável na origem.  Outra opção seria tentar verificar a continuidade das derivadas parciais, mas atenção: caso isso não aconteça ainda assim a função pode ser diferenciável (e não de classe ).   Em vista do item acima podemos usar a , obtendo  Caso nenhum dos itens anteriores fosse resolvido, poderíamos proceder pela :  Se então a expressão no limite acima é identicamente nula e temos . Se , então podemos escrever como pois o primeiro fator tende a , o segundo tende a e o terceiro tende a .      Determine os pontos críticos de e classifique-os. A função tem ponto de máximo global? E mínimo global?   Os pontos críticos são (ponto de máximo local), (ponto de mínimo local), (ponto de sela) e (ponto de sela).   Os pontos críticos de são, por definição, aqueles onde . Isso nos dá o seguinte sistema  Assim, temos dois casos a analisar:  : na segunda equação isso diz que , ou seja, ou . Temos então os pontos críticos e .  : na primeira equação isso diz que o que, na segunda equação, dá , ou seja . Aparecem mais dois pontos críticos: e .   Para classificá-los, observamos que é de classe , e portanto podemos considerar a matriz Hessiana de , conforme o : cujo determinante é . Aplicando então o critério do Hessiano, temos  e , é um ponto de máximo local.  e , é um ponto de mínimo local.  , é um ponto de sela.  , é um ponto de sela.   A função não tem ponto de máximo global. De fato, olhando para a sua restrição de ao eixo , verificamos que .  Ao longo do mesmo eixo temos que , mostrando que também não tem ponto de mínimo global.  Veja o gráfico da função e, em destaque, os pontos do gráfico correspondentes aos pontos críticos encontrados:   Gráfico \"re-escalado\" de   Gráfico de para       Sejam uma função diferenciável e dada por   Sabendo que a direção de maior crescimento de em é a direção de , determine a equação da reta normal a curva de nível de passando por .  Item anulado . A nota obtida nas demais questões foi multiplicada por .         A direção de crescimento máximo de uma função em cada ponto é sempre a direção do gradiente da função nesse ponto (veja ). Neste exercício, tal fato resume-se a dizer que é paralelo a .  Por outro lado, segue-se do que a reta normal à curva de nível de que passa pelo ponto tem a direção de . Tendo o ponto e esta direção conseguimos construir a equação da reta pedida. Vamos determinar o gradiente de em termos do gradiente de , usando a Regra da Cadeia ( ), pensando em , com e , temos:  Fazendo , temos . Além disso, a condição de paralelismo do primeiro parágrafo nos diz que . Chamemos esse valor de . Isto, nas equações acima, dá:  Assim, , que é paralelo ao vetor . Desta forma, a reta normal pedida é  Item anulado .     Determine o maior volume que um paralelepípedo de faces paralelas aos planos coordenados e inscrito no elipsoide pode ter.  Basta encontrar um vértice de tal paralelepípedo que os demais ficam determinados.  Os oito vértices do paralelepípedo são os pontos , e o volume máximo é .   Vamos usar o Método dos Multiplicadores de Lagrange, com uma restrição ( ). Outra opção, um tanto mais trabalhosa, seria eliminar uma das variáveis usando a equação do elipsoide, escrevendo o volume do paralelepípedo em termos das outras duas e estudar máximos e mínimos desse volume no compacto definido por essas duas variáveis. Em sua fronteira o volume será e o valor máximo será atingido num ponto crítico (que está no interior). Estes pontos podem ser obtido com o método utilizado no (não precisa do teste com o Hessiano! Por que?).  As condições dadas no problema implicam que, se é o vértice de tal paralelepído no primeiro octante, então os demais vértices são obtidos com as sete comibinações restantes de sinais nas coordenadas.  O volume de tal paralelepípedo, se existir, será , uma função contínua definida no elipsoide de equação , que é compacto. Com isso o teorema de Weierstrass garante a existência do paralelepípedo pedido. Devido às simetrias observadas (ou à dica), podemos nos restringir apenas a valores positivos das variáveis, ou seja, o pedaço do elipsoide contido no primeiro quadrante (fechado). Aqui temos uma função a três variáveis que, da última observação escreve-se (agora de classe ), e desejamos encontrar seu ponto de máximo no elipsoide, que pode ser visto como a superfície de nível da função . Utilizando-se a teoria de máximos e mínimos condicionados (multiplicadores de Lagrange), sabemos que os pontos , de máximo ou mínimo local de sobre , são aqueles onde ou seja  Aqui temos e e então Explicitamente, o sistema torna-se então  A solução completa do sistema resume-se a analisar os casos:  : sob essa condição a segunda e terceira equação são equivalentes e dizem que ou . Isso na última equação dá, repectivamete os candidatos e . Em ambos a função volume é nula.  : como acima, temos que ou e os pontos e , nos quais o volume também é nulo.  : aqui teremos que ou , dando os pontos e . Mais uma vez o volume se anula nesses candidatos.  : aqui as três primeiras equações dizem que . Na última equação isso dá , ou seja , donde . Nesse ponto o volume vale , maior valor entre os candidatos viáveis e portanto solução do problema.    Por que não uma figura?   O paralelepípedo de volume máximo é o de tom alaranjado.   Paralelepídos no elipsoide.       "
},
{
  "id": "precq1-2022",
  "level": "2",
  "url": "sec_2022-prec.html#precq1-2022",
  "type": "Exercício",
  "number": "3.4.1",
  "title": "",
  "body": " Considere a função dada por   Calcule as derivadas parciais de em todos os pontos onde elas existirem.  Decida se é diferenciável em .  Calcule sendo um vetor unitário.       e .  É diferenciável em .  .       O denominador da primeira expressão que define se anula em , então não podemos usar as regras de derivação. Temos dois casos a tratar:  : qualquer desses pontos admite uma vizinhança onde é dada pelo quociente de duas funções diferenciáveis, com denominador não nulo. Podemos aplicar diretamente a regra do quociente para cada variável:  : não podemos aplicar a regra do quociente, utilizada no caso anterior. É preciso seguir pela :    Já que as derivadas parciais de existem em , verificar sua diferenciabilidade nesse ponto requer o uso da definição, ou seja, verificar se existe e é nulo o limite pois o primeiro fator na expressão acima tende a , enquanto o terceito vai a e o demais fatores são todos limitados.  Com isso mostramos que é diferenciável na origem.  Outra opção seria tentar verificar a continuidade das derivadas parciais, mas atenção: caso isso não aconteça ainda assim a função pode ser diferenciável (e não de classe ).   Em vista do item acima podemos usar a , obtendo  Caso nenhum dos itens anteriores fosse resolvido, poderíamos proceder pela :  Se então a expressão no limite acima é identicamente nula e temos . Se , então podemos escrever como pois o primeiro fator tende a , o segundo tende a e o terceiro tende a .    "
},
{
  "id": "precq2-2022",
  "level": "2",
  "url": "sec_2022-prec.html#precq2-2022",
  "type": "Exercício",
  "number": "3.4.2",
  "title": "",
  "body": " Determine os pontos críticos de e classifique-os. A função tem ponto de máximo global? E mínimo global?   Os pontos críticos são (ponto de máximo local), (ponto de mínimo local), (ponto de sela) e (ponto de sela).   Os pontos críticos de são, por definição, aqueles onde . Isso nos dá o seguinte sistema  Assim, temos dois casos a analisar:  : na segunda equação isso diz que , ou seja, ou . Temos então os pontos críticos e .  : na primeira equação isso diz que o que, na segunda equação, dá , ou seja . Aparecem mais dois pontos críticos: e .   Para classificá-los, observamos que é de classe , e portanto podemos considerar a matriz Hessiana de , conforme o : cujo determinante é . Aplicando então o critério do Hessiano, temos  e , é um ponto de máximo local.  e , é um ponto de mínimo local.  , é um ponto de sela.  , é um ponto de sela.   A função não tem ponto de máximo global. De fato, olhando para a sua restrição de ao eixo , verificamos que .  Ao longo do mesmo eixo temos que , mostrando que também não tem ponto de mínimo global.  Veja o gráfico da função e, em destaque, os pontos do gráfico correspondentes aos pontos críticos encontrados:   Gráfico \"re-escalado\" de   Gráfico de para     "
},
{
  "id": "precq3-2022",
  "level": "2",
  "url": "sec_2022-prec.html#precq3-2022",
  "type": "Exercício",
  "number": "3.4.3",
  "title": "",
  "body": " Sejam uma função diferenciável e dada por   Sabendo que a direção de maior crescimento de em é a direção de , determine a equação da reta normal a curva de nível de passando por .  Item anulado . A nota obtida nas demais questões foi multiplicada por .         A direção de crescimento máximo de uma função em cada ponto é sempre a direção do gradiente da função nesse ponto (veja ). Neste exercício, tal fato resume-se a dizer que é paralelo a .  Por outro lado, segue-se do que a reta normal à curva de nível de que passa pelo ponto tem a direção de . Tendo o ponto e esta direção conseguimos construir a equação da reta pedida. Vamos determinar o gradiente de em termos do gradiente de , usando a Regra da Cadeia ( ), pensando em , com e , temos:  Fazendo , temos . Além disso, a condição de paralelismo do primeiro parágrafo nos diz que . Chamemos esse valor de . Isto, nas equações acima, dá:  Assim, , que é paralelo ao vetor . Desta forma, a reta normal pedida é  Item anulado .   "
},
{
  "id": "precq4-2022",
  "level": "2",
  "url": "sec_2022-prec.html#precq4-2022",
  "type": "Exercício",
  "number": "3.4.4",
  "title": "",
  "body": " Determine o maior volume que um paralelepípedo de faces paralelas aos planos coordenados e inscrito no elipsoide pode ter.  Basta encontrar um vértice de tal paralelepípedo que os demais ficam determinados.  Os oito vértices do paralelepípedo são os pontos , e o volume máximo é .   Vamos usar o Método dos Multiplicadores de Lagrange, com uma restrição ( ). Outra opção, um tanto mais trabalhosa, seria eliminar uma das variáveis usando a equação do elipsoide, escrevendo o volume do paralelepípedo em termos das outras duas e estudar máximos e mínimos desse volume no compacto definido por essas duas variáveis. Em sua fronteira o volume será e o valor máximo será atingido num ponto crítico (que está no interior). Estes pontos podem ser obtido com o método utilizado no (não precisa do teste com o Hessiano! Por que?).  As condições dadas no problema implicam que, se é o vértice de tal paralelepído no primeiro octante, então os demais vértices são obtidos com as sete comibinações restantes de sinais nas coordenadas.  O volume de tal paralelepípedo, se existir, será , uma função contínua definida no elipsoide de equação , que é compacto. Com isso o teorema de Weierstrass garante a existência do paralelepípedo pedido. Devido às simetrias observadas (ou à dica), podemos nos restringir apenas a valores positivos das variáveis, ou seja, o pedaço do elipsoide contido no primeiro quadrante (fechado). Aqui temos uma função a três variáveis que, da última observação escreve-se (agora de classe ), e desejamos encontrar seu ponto de máximo no elipsoide, que pode ser visto como a superfície de nível da função . Utilizando-se a teoria de máximos e mínimos condicionados (multiplicadores de Lagrange), sabemos que os pontos , de máximo ou mínimo local de sobre , são aqueles onde ou seja  Aqui temos e e então Explicitamente, o sistema torna-se então  A solução completa do sistema resume-se a analisar os casos:  : sob essa condição a segunda e terceira equação são equivalentes e dizem que ou . Isso na última equação dá, repectivamete os candidatos e . Em ambos a função volume é nula.  : como acima, temos que ou e os pontos e , nos quais o volume também é nulo.  : aqui teremos que ou , dando os pontos e . Mais uma vez o volume se anula nesses candidatos.  : aqui as três primeiras equações dizem que . Na última equação isso dá , ou seja , donde . Nesse ponto o volume vale , maior valor entre os candidatos viáveis e portanto solução do problema.    Por que não uma figura?   O paralelepípedo de volume máximo é o de tom alaranjado.   Paralelepídos no elipsoide.     "
},
{
  "id": "sec_2021-p1",
  "level": "1",
  "url": "sec_2021-p1.html",
  "type": "Seção",
  "number": "4.1",
  "title": "Primeira Prova",
  "body": " Primeira Prova    Sejam e duas funções que admitem derivadas de qualquer ordem, tais que e são os respectivos polinômios de Taylor de ordem em torno de .  Assinale, dentre as alternativas abaixo, precisamente aquelas que são verdadeiras (marcar uma incorreta descontará nota).  Se é uma função par, então é a soma de monômios com potências pares de .  Se , para algum , então .  O polinômio de Taylor de ordem para a função , em torno de , é  Se é o polinômio de Taylor de ordem de em torno de , então . .      Verdadeira  Falsa  Falsa  Verdadeira       Se é par, então que, derivando em , nos dá , mostrando que o coeficiente de em é nulo. Repetindo esse argumento para todas as derivadas de ordem ímpar temos o resultado.  Se e , então mas .  Observe que a derivada de não é e portanto o coeficiente de um dado termo do polinômio de não é simplesmente o produto dos coeficientes. Caso concreto: considere e , então tem como polinômio de Taylor de ordem 3, centrado em , (o mesmo de ), mas aplicando a fórmula proposta teríamos o polinômio nulo.  Observando que e que , segue-se que .      Considere a curva , , e o triângulo delimitado delimitado pelas retas tangentes à nos pontos , e . A área deste triângulo é:          Alternativa d.   Os pontos dados são atingidos pela curva quanto , e , respectivamente. Os vetores tangentes nesse pontos são , e . Com isso, temos as retas tangentes . As interseções são os pontos , e , que formam um triângulo de altura e base , com área . Veja a figura:  Imagem de e tangentes.   Imagem da curva e tangentes.        Considere a função , definida em . As curvas de nível e são, respectivamente:  um par de retas concorrentes e uma elipse.  um par de retas paralelas e uma elipse.  uma hipérbole e uma parábola.  uma parábola e uma hipérbole.  uma parábola e um par de retas concorrentes.     Alternativa d.   Escrevendo , para , temos  Aplicando os valores de indicados, a equação acima escreve-se  : , ou seja , que descreve uma parábola.  : que completando quadrados, fica , isto é, uma hiperbole.   Veja ambas numa figura:  Curvas de nível para .   As curvas de nível de .        Seja uma função diferenciável em tal que . Sabe-se também que e , onde e . A equação do plano tangente ao gráfico de no ponto é:  O valor máximo que uma derivada direcional de no ponto assume é .   .  .   Sabendo que é diferenciável em e dadas as derivadas direcionais no enunciado, podemos determinar através do sistema de equações lineares que tem uma matriz de coeficientes ortogonal (fica fácil resolver) e encontrar cujas coordenadas são, respectivamente, os coeficientes da equação do plano pedido, já que o coeficiente de é . O termo independente é .  O valor máximo da derivada direcional é precisamente .    Seja dada por .  O valor de é  .  .  .  3  inexistente.   O valor de é  .  .  .  3  inexistente.    Lembre-se do significado conceitual da derivada parcial (não a definição) e tudo fica muito simples.   Alternativa e.  Alternativa c.   Basta olhar para e observar que a existência e o valor de são dados exatamente por .  Em , temos que não é derivável:  Já em , consideramos o limite pois nos permite considerar e portanto .    Sejam uma função e . Assinale, dentre as alternativas abaixo, precisamente aquelas que são verdadeiras (marcar uma incorreta descontará nota):  Se não é diferenciável em , então não admite derivadas parciais em .  Se não é diferenciável em , então não é contínua em .  Se não é contínua em , então não admite derivadas parciais em .  Se não admite derivadas parciais em , então não é diferenciável em .  Se não é diferenciável em , então as derivadas parciais de não são contínuas em .       Falsa  Falsa  Falsa  Verdadeira  Verdadeira       Falsa. A função admite as duas derivadas parciais na origem e não é sequer contínua ali, quando mais diferenciável.  Falsa. O exemplo acima reflete isso.  Falsa. Mais uma vez o mesmo exemplo ilustra isso.  Verdadeira. Pois a definição de diferenciabilidade via limite exige a existência das derivadas parciais.  Verdadeira. Se as derivadas parciais de são contínuas num ponto, então é diferenciável nesse ponto.      Seja uma função diferenciável tal que , para todos e . Se , então   vale  vale  não ode ser determinado a partir dos dados fornecidos  vale  vale     Use a regra da cadeia para e o segmento que liga a origem até cada ponto do plano.   Alternativa a.   Das hipóteses temos que e, derivando em relação a temos . Fazendo vem que .    Seja uma função diferenciável. Sabendo que é a equação do plano tangente ao gráfico de no ponto , determine:    , onde é o versor do vetor  a reta tangente ao gráfico da função no ponto de abscissa .  o plano tangente ao gráfico de no ponto .              Substituindo na equação do plano tangente dado temos .  Da mesma equação do plano temos que .  Inicialmente notamos que . Como é diferenciável temos, pela regra da cadeia, que .  Precisamos dos valores de e . Olhando , com , temos e . Assim a reta tangente procurada é  Finalmente, para o plano pedido precisamos de e de , que pode ser calculado com a regra da cadeia. Escrevendo , com e , temos, omitindo os pontos de aplicação, e . Explicitamente, No ponto temos e . O plano tem equação     "
},
{
  "id": "p1q1-2021",
  "level": "2",
  "url": "sec_2021-p1.html#p1q1-2021",
  "type": "Exercício",
  "number": "4.1.1",
  "title": "",
  "body": " Sejam e duas funções que admitem derivadas de qualquer ordem, tais que e são os respectivos polinômios de Taylor de ordem em torno de .  Assinale, dentre as alternativas abaixo, precisamente aquelas que são verdadeiras (marcar uma incorreta descontará nota).  Se é uma função par, então é a soma de monômios com potências pares de .  Se , para algum , então .  O polinômio de Taylor de ordem para a função , em torno de , é  Se é o polinômio de Taylor de ordem de em torno de , então . .      Verdadeira  Falsa  Falsa  Verdadeira       Se é par, então que, derivando em , nos dá , mostrando que o coeficiente de em é nulo. Repetindo esse argumento para todas as derivadas de ordem ímpar temos o resultado.  Se e , então mas .  Observe que a derivada de não é e portanto o coeficiente de um dado termo do polinômio de não é simplesmente o produto dos coeficientes. Caso concreto: considere e , então tem como polinômio de Taylor de ordem 3, centrado em , (o mesmo de ), mas aplicando a fórmula proposta teríamos o polinômio nulo.  Observando que e que , segue-se que .    "
},
{
  "id": "p1q2-2021",
  "level": "2",
  "url": "sec_2021-p1.html#p1q2-2021",
  "type": "Exercício",
  "number": "4.1.2",
  "title": "",
  "body": " Considere a curva , , e o triângulo delimitado delimitado pelas retas tangentes à nos pontos , e . A área deste triângulo é:          Alternativa d.   Os pontos dados são atingidos pela curva quanto , e , respectivamente. Os vetores tangentes nesse pontos são , e . Com isso, temos as retas tangentes . As interseções são os pontos , e , que formam um triângulo de altura e base , com área . Veja a figura:  Imagem de e tangentes.   Imagem da curva e tangentes.      "
},
{
  "id": "p1q3-2021",
  "level": "2",
  "url": "sec_2021-p1.html#p1q3-2021",
  "type": "Exercício",
  "number": "4.1.3",
  "title": "",
  "body": " Considere a função , definida em . As curvas de nível e são, respectivamente:  um par de retas concorrentes e uma elipse.  um par de retas paralelas e uma elipse.  uma hipérbole e uma parábola.  uma parábola e uma hipérbole.  uma parábola e um par de retas concorrentes.     Alternativa d.   Escrevendo , para , temos  Aplicando os valores de indicados, a equação acima escreve-se  : , ou seja , que descreve uma parábola.  : que completando quadrados, fica , isto é, uma hiperbole.   Veja ambas numa figura:  Curvas de nível para .   As curvas de nível de .      "
},
{
  "id": "p1q4-2021",
  "level": "2",
  "url": "sec_2021-p1.html#p1q4-2021",
  "type": "Exercício",
  "number": "4.1.4",
  "title": "",
  "body": " Seja uma função diferenciável em tal que . Sabe-se também que e , onde e . A equação do plano tangente ao gráfico de no ponto é:  O valor máximo que uma derivada direcional de no ponto assume é .   .  .   Sabendo que é diferenciável em e dadas as derivadas direcionais no enunciado, podemos determinar através do sistema de equações lineares que tem uma matriz de coeficientes ortogonal (fica fácil resolver) e encontrar cujas coordenadas são, respectivamente, os coeficientes da equação do plano pedido, já que o coeficiente de é . O termo independente é .  O valor máximo da derivada direcional é precisamente .  "
},
{
  "id": "p1q5-2021",
  "level": "2",
  "url": "sec_2021-p1.html#p1q5-2021",
  "type": "Exercício",
  "number": "4.1.5",
  "title": "",
  "body": " Seja dada por .  O valor de é  .  .  .  3  inexistente.   O valor de é  .  .  .  3  inexistente.    Lembre-se do significado conceitual da derivada parcial (não a definição) e tudo fica muito simples.   Alternativa e.  Alternativa c.   Basta olhar para e observar que a existência e o valor de são dados exatamente por .  Em , temos que não é derivável:  Já em , consideramos o limite pois nos permite considerar e portanto .  "
},
{
  "id": "p1q6-2021",
  "level": "2",
  "url": "sec_2021-p1.html#p1q6-2021",
  "type": "Exercício",
  "number": "4.1.6",
  "title": "",
  "body": " Sejam uma função e . Assinale, dentre as alternativas abaixo, precisamente aquelas que são verdadeiras (marcar uma incorreta descontará nota):  Se não é diferenciável em , então não admite derivadas parciais em .  Se não é diferenciável em , então não é contínua em .  Se não é contínua em , então não admite derivadas parciais em .  Se não admite derivadas parciais em , então não é diferenciável em .  Se não é diferenciável em , então as derivadas parciais de não são contínuas em .       Falsa  Falsa  Falsa  Verdadeira  Verdadeira       Falsa. A função admite as duas derivadas parciais na origem e não é sequer contínua ali, quando mais diferenciável.  Falsa. O exemplo acima reflete isso.  Falsa. Mais uma vez o mesmo exemplo ilustra isso.  Verdadeira. Pois a definição de diferenciabilidade via limite exige a existência das derivadas parciais.  Verdadeira. Se as derivadas parciais de são contínuas num ponto, então é diferenciável nesse ponto.    "
},
{
  "id": "p1q7-2021",
  "level": "2",
  "url": "sec_2021-p1.html#p1q7-2021",
  "type": "Exercício",
  "number": "4.1.7",
  "title": "",
  "body": " Seja uma função diferenciável tal que , para todos e . Se , então   vale  vale  não ode ser determinado a partir dos dados fornecidos  vale  vale     Use a regra da cadeia para e o segmento que liga a origem até cada ponto do plano.   Alternativa a.   Das hipóteses temos que e, derivando em relação a temos . Fazendo vem que .  "
},
{
  "id": "p1q8-2021",
  "level": "2",
  "url": "sec_2021-p1.html#p1q8-2021",
  "type": "Exercício",
  "number": "4.1.8",
  "title": "",
  "body": " Seja uma função diferenciável. Sabendo que é a equação do plano tangente ao gráfico de no ponto , determine:    , onde é o versor do vetor  a reta tangente ao gráfico da função no ponto de abscissa .  o plano tangente ao gráfico de no ponto .              Substituindo na equação do plano tangente dado temos .  Da mesma equação do plano temos que .  Inicialmente notamos que . Como é diferenciável temos, pela regra da cadeia, que .  Precisamos dos valores de e . Olhando , com , temos e . Assim a reta tangente procurada é  Finalmente, para o plano pedido precisamos de e de , que pode ser calculado com a regra da cadeia. Escrevendo , com e , temos, omitindo os pontos de aplicação, e . Explicitamente, No ponto temos e . O plano tem equação   "
},
{
  "id": "sec_2020-p1",
  "level": "1",
  "url": "sec_2020-p1.html",
  "type": "Seção",
  "number": "5.1",
  "title": "Primeira Prova",
  "body": " Primeira Prova    O valor da integral é  .  .  .  .  .    Alternativa a.   Usaremos aqui integração por parter, fazendo e , donde e . Assim, Em temos que o primeiro termo se anula devido ao primeiro fator quando e devido ao segundo (extremos de integração coindicentes) quando . Além disso, fazemos a mudança na segunda parcela.    Considere a curva dada por . Sabe-se que a trajetória de admite duas retas tangentes distintas no ponto . O produto escalar dos vetores tangentes à trajetória de neste ponto é igual a:  .  .  .  .  .    Alternativa c.   O ponto está na imagem da curva e é atingido quando . O vetor tangente em cada instante de tempo é . Calculando nos dois pontos temos e .  Logo, .  Apesar de desnecessário, segue um esboço da curva e os vetores tangentes pedidos:  A curva e suas duas tangentes em .   A curva e suas duas tangentes em .      Verifique o que acontece com a imagem da curva, pois aqui temos representado apenas o trecho para .    Seja . Sabe-se que o plano tangente ao gráfico de em um ponto tem equação . Nestas condições, a soma das coordenadas é igual a:  .  .  .  .  .    Alternativa b.   Derivando diretamente em temos e .  Da equação do planotangente no enunciado concluímos que e . Com isso temos o sistema cujas soluções são e ou e . Como o ponto pertence ao plano tangente, temos que , que só é verificado por e , donde .    Seja dada por , onde e são números reais fixados. Suponha que, para todo , a função satisfaça  Nestas condições o valor de é     Calculando explicitamente as derivadas parciais de que aparecem no enunciado, temos: Com isso, a equação do enunciado escreve-se como ou ainda, lembrando que ,   Esta equação vale para todos e, portanto, podemos atribuir valores convenientes a estas variáveis a fim de obter equações para e : Assim, .    Seja uma função derivável até quarta ordem tal que Suponha que , para todo .  Usando o Polinômio de Taylor de ordem de em torno de , obtemos a seguinte aproximação para com 5 casas decimais: .  O erro cometido nesta aproximação pertence ao intervalo:           Alternativa a.   Com os dados fornecidos no enunciado recuperamos o polinômio de ordem de , centrado em : Substituindo então , temos   A estimativa do erro na aproximação de pelo polinômio de Taylor de odem , centrado em , quando é uma função que admite quarta derivada é dada por com entre e . Neste exercício, a função é de classe , e essa expressão fica Como , temos que .    Seja uma função e defina por . Suponha que os conjuntos sejam as curvas de nível e , respectivamente, de .  Sobre o limite , é correto afirmar que:  o limite não existe.  o limite existe e é igual a .  o limite existe e é igual a .  o limite existe e é igual a .  o limite existe e é um número real, mas não temos informações suficientes para determinar seu valor.  Não temos informações suficientes para determinar se o limite existe ou não.    Sobre o limite , é correto afirmar que:  o limite não existe.  o limite existe e é igual a .  o limite existe e é igual a .  o limite existe e é igual a .  o limite existe e é um número real, mas não temos informações suficientes para determinar seu valor.  Não temos informações suficientes para determinar se o limite existe ou não.     Alternativa a.  Alternativa d.   Para o primeiro limite observamos que a curva é tal que pois esta curva parametriza a curva de nível de . De modo análogo, a curva , , nos dá que mostrando que não existe.  Para o segundo limite, notamos que a primeira parcela vale (exatamente o limite de ao longo de no parágrafo acima). Já segunda parcela tem limite nulo, pois um produto que tem como um fator limitado (entre e ) e como fator que tende a zero (pois é uma função contínua no ponto ). Desta forma a soma tem limite igual a .    Seja dada por .  Decida se cada uma das afirmações abaixo é verdadeira ou falsa.  é contínua em .  é diferenciável em .  e existem em todos os pontos de .  O plano é tangente ao gráfico de em .      Verdadeira  Falsa  Verdadeira  Falsa     Precisamos verificar se . Para tanto, se podemos escrever onde  o primeiro fator tende a zero;  o segundo fator é limitado: basta trocar por no exemplo aos 4min 20seg de ;  o terceiro fator tende a : aplique a com as funções e .  Segue então, do , a verificação da igualdade incial, garantindo a continuidade de na origem.  A diferenciabilidade de em depende da verificação da igualdade  Para isso precisamos das derivadas parciais de na origem:  ;  .  Assim o limite em questão resume-se a onde o primeiro fator tende a (visto acima), mas o segundo e terceiro, apesar de limitados, não possuem limite (aqui você já deve ser capaz de encontrar as curvas que atestam isso). Em particular, o limite em questão não se anula e, desta forma, concluímos que não é diferenciável em .   A existência das derivadas parciais na origem é parte da solução do item anterior. Nos demais pontos observamos que é dada por uma expressão que nos permite aplicar as regras de derivação (é um bom exercício fazer essas contas!) e portanto as derivadas parcias fora da origem também existem.  Como não é difrenciável na origem, ela não admite plano tangente neste ponto de seu domínio, apesar das derivadas parciais existirem ali e ser possível escrever a equação do que seria o plano tangente (neste caso este plano daria boas aproximações nas direções dos eixos coordenados, mas não em outras direções. Veja a figura:  Gráfico da função e candidato a plano tangente   Gráfico da função e candidato a plano tangente         Considere uma função e as duas curvas abaixo: Sabe-se que  Escolha a alternativa correta para cada caso:  Sobre a continuidade de em podemos afirmar que:  é contínua em .  não é contínua em .  não temos informação suficiente para dizer algo.   Sobre a diferenciabilidade de em , podemos afirmar que:  é diferenciável em .  não é diferenciável em .  não temos informação suficiente para dizer algo.   Sobre podemos afirmar que:  vale .  vale .  não existe.  não é possível garantir sua existência.   Sobre   vale .  vale .  não existe.  não é possível garantir sua existência.       Alternativa c.  Alternativa c.  Alternativa b.  Alternativa a.     Apesar das curvas e serem contínuas, , , , temos informações sobre apenas ao longo de duas curvas. Poderia haver uma terceira curva ao longo da qual a função não tem o mesmo comportamento, o que mostraria sua descontinuidade ali.  O mesmo argumento acima também se aplica aqui.  As curvas dadas têm imagens paralelas aos eixos coordenados, ambas passando por , logo podemos usá-las para obter as derivadas parciais!  Usando as definições temos que  De modo totalmente análogo, onde, em , fizemos a mudança .     Nesta questão e são números reais fixados. Considere a função . Sabe-se que:  A intersecção de com o plano está contida numa elipse no plano que tem parametrização , , para todo  A curva de nível de é uma hipérbole de assíntotas .   Com essas informações:  determine e ;  descreva o conjunto e faça um esboço;  encontre uma parametrização para a parte da curva de nível que contém o ponto e determine a reta tangente a essa curva em ;  esboce o gráfico de .     e .  . Veja o esboço do domínio na solução.  , e .  Veja o gráfico de na solução.     A primeira informação do enunciado nos diz que Para que isso seja descrito pela parametrização dada (uma elipse), devemos ter . Além disso, tal elipse tem equação cartesiana . Fica fácil então ver que .  A segunda informação nos diz que é uma hipérbole de assíntotas . Observe que isso garante , uma vez que . Da equação desta hipérbole, vemos que seus focos estão no eixo e podemos escrever sua porção nos quadrantes como , que tem como assíntotas as retas . Assim, .   De posse dos valores de e , temos a expressão de : . Seu domínio máximo é, então, aquele onde o termo na raiz é não-negativo, ou seja, Sua representação gráfica corresponte à região entre os ramos da hipérbole (atenção aos eixos fora de escala!):  O domínio de e a tangente pedida no item abaixo.   O domínio de e a tangente pedida no item abaixo.      Como , estamos falando da curva de nível de , a qual (por pura sorte) é exatamente aquela que delimira o domínio, da qual pedimos a parte que contém o ponto dado, ou seja, vamos trabalhar com o ramo \"superior\" da hipérbole.  Existem muitas maneiras de parametrizar esse ramo: funções trigonométricas, trigonométricas hiperbólicas ou mesmo descrevê-la como o gráfico de uma função a uma variável:  , ;  , ;  , .    Usaremos o primeiro caso para determinar a reta tangente pedida. Para isso precisamos de tal que , fácil: . A equação da reta pedida escreve-se: A equação geral de tal reta é .   Pode-se perceber, fazendo que o gráfico de satisfaz , com , ou seja, é um hiperbolóide de uma folha (seções elípticas) em torno do eixo . Sem isso, o gráfico da função é construído analisando-se suas curvas de nível e cortes por planos verticais. Começando pelos últimos temos:  , uma parte de elipse;  , um ramo de hipérbole;  Já as curvas de nível tem uma alteração no comportamento:  : hipérboles com focos no eixo ;  : par de retas concorrentes na origem, ;  : hipérboles com focos no eixo ;    Uma figura:  Gráfico da função.   Gráfico da função.          "
},
{
  "id": "p1q1-2020",
  "level": "2",
  "url": "sec_2020-p1.html#p1q1-2020",
  "type": "Exercício",
  "number": "5.1.1",
  "title": "",
  "body": " O valor da integral é  .  .  .  .  .    Alternativa a.   Usaremos aqui integração por parter, fazendo e , donde e . Assim, Em temos que o primeiro termo se anula devido ao primeiro fator quando e devido ao segundo (extremos de integração coindicentes) quando . Além disso, fazemos a mudança na segunda parcela.  "
},
{
  "id": "p1q2-2020",
  "level": "2",
  "url": "sec_2020-p1.html#p1q2-2020",
  "type": "Exercício",
  "number": "5.1.2",
  "title": "",
  "body": " Considere a curva dada por . Sabe-se que a trajetória de admite duas retas tangentes distintas no ponto . O produto escalar dos vetores tangentes à trajetória de neste ponto é igual a:  .  .  .  .  .    Alternativa c.   O ponto está na imagem da curva e é atingido quando . O vetor tangente em cada instante de tempo é . Calculando nos dois pontos temos e .  Logo, .  Apesar de desnecessário, segue um esboço da curva e os vetores tangentes pedidos:  A curva e suas duas tangentes em .   A curva e suas duas tangentes em .      Verifique o que acontece com a imagem da curva, pois aqui temos representado apenas o trecho para .  "
},
{
  "id": "p1q3-2020",
  "level": "2",
  "url": "sec_2020-p1.html#p1q3-2020",
  "type": "Exercício",
  "number": "5.1.3",
  "title": "",
  "body": " Seja . Sabe-se que o plano tangente ao gráfico de em um ponto tem equação . Nestas condições, a soma das coordenadas é igual a:  .  .  .  .  .    Alternativa b.   Derivando diretamente em temos e .  Da equação do planotangente no enunciado concluímos que e . Com isso temos o sistema cujas soluções são e ou e . Como o ponto pertence ao plano tangente, temos que , que só é verificado por e , donde .  "
},
{
  "id": "p1q4-2020",
  "level": "2",
  "url": "sec_2020-p1.html#p1q4-2020",
  "type": "Exercício",
  "number": "5.1.4",
  "title": "",
  "body": " Seja dada por , onde e são números reais fixados. Suponha que, para todo , a função satisfaça  Nestas condições o valor de é     Calculando explicitamente as derivadas parciais de que aparecem no enunciado, temos: Com isso, a equação do enunciado escreve-se como ou ainda, lembrando que ,   Esta equação vale para todos e, portanto, podemos atribuir valores convenientes a estas variáveis a fim de obter equações para e : Assim, .  "
},
{
  "id": "p1q52020",
  "level": "2",
  "url": "sec_2020-p1.html#p1q52020",
  "type": "Exercício",
  "number": "5.1.5",
  "title": "",
  "body": " Seja uma função derivável até quarta ordem tal que Suponha que , para todo .  Usando o Polinômio de Taylor de ordem de em torno de , obtemos a seguinte aproximação para com 5 casas decimais: .  O erro cometido nesta aproximação pertence ao intervalo:           Alternativa a.   Com os dados fornecidos no enunciado recuperamos o polinômio de ordem de , centrado em : Substituindo então , temos   A estimativa do erro na aproximação de pelo polinômio de Taylor de odem , centrado em , quando é uma função que admite quarta derivada é dada por com entre e . Neste exercício, a função é de classe , e essa expressão fica Como , temos que .  "
},
{
  "id": "p1q62020",
  "level": "2",
  "url": "sec_2020-p1.html#p1q62020",
  "type": "Exercício",
  "number": "5.1.6",
  "title": "",
  "body": " Seja uma função e defina por . Suponha que os conjuntos sejam as curvas de nível e , respectivamente, de .  Sobre o limite , é correto afirmar que:  o limite não existe.  o limite existe e é igual a .  o limite existe e é igual a .  o limite existe e é igual a .  o limite existe e é um número real, mas não temos informações suficientes para determinar seu valor.  Não temos informações suficientes para determinar se o limite existe ou não.    Sobre o limite , é correto afirmar que:  o limite não existe.  o limite existe e é igual a .  o limite existe e é igual a .  o limite existe e é igual a .  o limite existe e é um número real, mas não temos informações suficientes para determinar seu valor.  Não temos informações suficientes para determinar se o limite existe ou não.     Alternativa a.  Alternativa d.   Para o primeiro limite observamos que a curva é tal que pois esta curva parametriza a curva de nível de . De modo análogo, a curva , , nos dá que mostrando que não existe.  Para o segundo limite, notamos que a primeira parcela vale (exatamente o limite de ao longo de no parágrafo acima). Já segunda parcela tem limite nulo, pois um produto que tem como um fator limitado (entre e ) e como fator que tende a zero (pois é uma função contínua no ponto ). Desta forma a soma tem limite igual a .  "
},
{
  "id": "p1q72020",
  "level": "2",
  "url": "sec_2020-p1.html#p1q72020",
  "type": "Exercício",
  "number": "5.1.7",
  "title": "",
  "body": " Seja dada por .  Decida se cada uma das afirmações abaixo é verdadeira ou falsa.  é contínua em .  é diferenciável em .  e existem em todos os pontos de .  O plano é tangente ao gráfico de em .      Verdadeira  Falsa  Verdadeira  Falsa     Precisamos verificar se . Para tanto, se podemos escrever onde  o primeiro fator tende a zero;  o segundo fator é limitado: basta trocar por no exemplo aos 4min 20seg de ;  o terceiro fator tende a : aplique a com as funções e .  Segue então, do , a verificação da igualdade incial, garantindo a continuidade de na origem.  A diferenciabilidade de em depende da verificação da igualdade  Para isso precisamos das derivadas parciais de na origem:  ;  .  Assim o limite em questão resume-se a onde o primeiro fator tende a (visto acima), mas o segundo e terceiro, apesar de limitados, não possuem limite (aqui você já deve ser capaz de encontrar as curvas que atestam isso). Em particular, o limite em questão não se anula e, desta forma, concluímos que não é diferenciável em .   A existência das derivadas parciais na origem é parte da solução do item anterior. Nos demais pontos observamos que é dada por uma expressão que nos permite aplicar as regras de derivação (é um bom exercício fazer essas contas!) e portanto as derivadas parcias fora da origem também existem.  Como não é difrenciável na origem, ela não admite plano tangente neste ponto de seu domínio, apesar das derivadas parciais existirem ali e ser possível escrever a equação do que seria o plano tangente (neste caso este plano daria boas aproximações nas direções dos eixos coordenados, mas não em outras direções. Veja a figura:  Gráfico da função e candidato a plano tangente   Gráfico da função e candidato a plano tangente       "
},
{
  "id": "p1q82020",
  "level": "2",
  "url": "sec_2020-p1.html#p1q82020",
  "type": "Exercício",
  "number": "5.1.8",
  "title": "",
  "body": " Considere uma função e as duas curvas abaixo: Sabe-se que  Escolha a alternativa correta para cada caso:  Sobre a continuidade de em podemos afirmar que:  é contínua em .  não é contínua em .  não temos informação suficiente para dizer algo.   Sobre a diferenciabilidade de em , podemos afirmar que:  é diferenciável em .  não é diferenciável em .  não temos informação suficiente para dizer algo.   Sobre podemos afirmar que:  vale .  vale .  não existe.  não é possível garantir sua existência.   Sobre   vale .  vale .  não existe.  não é possível garantir sua existência.       Alternativa c.  Alternativa c.  Alternativa b.  Alternativa a.     Apesar das curvas e serem contínuas, , , , temos informações sobre apenas ao longo de duas curvas. Poderia haver uma terceira curva ao longo da qual a função não tem o mesmo comportamento, o que mostraria sua descontinuidade ali.  O mesmo argumento acima também se aplica aqui.  As curvas dadas têm imagens paralelas aos eixos coordenados, ambas passando por , logo podemos usá-las para obter as derivadas parciais!  Usando as definições temos que  De modo totalmente análogo, onde, em , fizemos a mudança .   "
},
{
  "id": "p1q9-2020",
  "level": "2",
  "url": "sec_2020-p1.html#p1q9-2020",
  "type": "Exercício",
  "number": "5.1.9",
  "title": "",
  "body": " Nesta questão e são números reais fixados. Considere a função . Sabe-se que:  A intersecção de com o plano está contida numa elipse no plano que tem parametrização , , para todo  A curva de nível de é uma hipérbole de assíntotas .   Com essas informações:  determine e ;  descreva o conjunto e faça um esboço;  encontre uma parametrização para a parte da curva de nível que contém o ponto e determine a reta tangente a essa curva em ;  esboce o gráfico de .     e .  . Veja o esboço do domínio na solução.  , e .  Veja o gráfico de na solução.     A primeira informação do enunciado nos diz que Para que isso seja descrito pela parametrização dada (uma elipse), devemos ter . Além disso, tal elipse tem equação cartesiana . Fica fácil então ver que .  A segunda informação nos diz que é uma hipérbole de assíntotas . Observe que isso garante , uma vez que . Da equação desta hipérbole, vemos que seus focos estão no eixo e podemos escrever sua porção nos quadrantes como , que tem como assíntotas as retas . Assim, .   De posse dos valores de e , temos a expressão de : . Seu domínio máximo é, então, aquele onde o termo na raiz é não-negativo, ou seja, Sua representação gráfica corresponte à região entre os ramos da hipérbole (atenção aos eixos fora de escala!):  O domínio de e a tangente pedida no item abaixo.   O domínio de e a tangente pedida no item abaixo.      Como , estamos falando da curva de nível de , a qual (por pura sorte) é exatamente aquela que delimira o domínio, da qual pedimos a parte que contém o ponto dado, ou seja, vamos trabalhar com o ramo \"superior\" da hipérbole.  Existem muitas maneiras de parametrizar esse ramo: funções trigonométricas, trigonométricas hiperbólicas ou mesmo descrevê-la como o gráfico de uma função a uma variável:  , ;  , ;  , .    Usaremos o primeiro caso para determinar a reta tangente pedida. Para isso precisamos de tal que , fácil: . A equação da reta pedida escreve-se: A equação geral de tal reta é .   Pode-se perceber, fazendo que o gráfico de satisfaz , com , ou seja, é um hiperbolóide de uma folha (seções elípticas) em torno do eixo . Sem isso, o gráfico da função é construído analisando-se suas curvas de nível e cortes por planos verticais. Começando pelos últimos temos:  , uma parte de elipse;  , um ramo de hipérbole;  Já as curvas de nível tem uma alteração no comportamento:  : hipérboles com focos no eixo ;  : par de retas concorrentes na origem, ;  : hipérboles com focos no eixo ;    Uma figura:  Gráfico da função.   Gráfico da função.        "
},
{
  "id": "ch_antigas",
  "level": "1",
  "url": "ch_antigas.html",
  "type": "Capítulo",
  "number": "6",
  "title": "Provas até 2019",
  "body": "  Provas até 2019     Neste capítulo apresentamos um link para as soluções dos exercícios das provas aplicadas até 2019, antes da adoção do e-disciplinas como site de apoio. Naquela época o site era construído em HTML pelo coordenador da disciplinas e este ainda não conhecia o PreTeXt . Aos poucos migraremos aquelas soluções para este formato.  Acesse as provas até 2019 aqui .   "
},
{
  "id": "ap_calc1",
  "level": "1",
  "url": "ap_calc1.html",
  "type": "Seção",
  "number": "A.1",
  "title": "Cálculo 1",
  "body": " Cálculo 1   (Cauchy)   Sejam duas funções contínuas, que são deriváveis em . Então existe tal que     Vamos construir uma função e aplicar a ela o Teorema de Rolle . Consideremos então dada por Esta função é contínua em e derivável em . Cálculos diretos mostram que . Segue, do Teorema de Rolle, que existe tal que , ou seja,    Este teorema é uma generalização do Teorema do Valor Médio, o qual é obtido fazendo .    (Fermat)   Seja derivável em . Se é um ponto de máximo ou mínimo local de , então .    Lembramos que é derivável em , se existe contínua em , tal que e, nesse caso, temos .  Suponha que é um ponto de máximo local de . O caso de mínimo local é análogo e um excelente exercício para testar sua compreensão da demonstração. Consideremos duas situações:  : nesse caso, e, da continuidade de , temos que para todo , onde é um intervalo aberto centrado em e inteiramente contido em . Se , , então a equação nos diz que contradizendo o fato de ser máximo local.  : agora, e, como antes, para todo , onde é um intervalo como o do caso anterior. Se , , então a equação nos diz que contradizendo o fato de ser máximo local.  Com isso, só é possível .    O teorema não vale se o domínio de é um intervalo fechado: , , não tem derivada nula em nenhum ponto e assume valores máximo e mínimo (nos extremos do intervalo).  O teorema não admite recíproca, ou seja, se não podemos dizer que é ponto de máximo ou mínimo local de : , , é tal que , mas não é máximo nem mínimo local de .    "
},
{
  "id": "teo_cauchy",
  "level": "2",
  "url": "ap_calc1.html#teo_cauchy",
  "type": "Teorema",
  "number": "A.1.1",
  "title": "(Cauchy).",
  "body": " (Cauchy)   Sejam duas funções contínuas, que são deriváveis em . Então existe tal que     Vamos construir uma função e aplicar a ela o Teorema de Rolle . Consideremos então dada por Esta função é contínua em e derivável em . Cálculos diretos mostram que . Segue, do Teorema de Rolle, que existe tal que , ou seja,    Este teorema é uma generalização do Teorema do Valor Médio, o qual é obtido fazendo .  "
},
{
  "id": "teo_fermat",
  "level": "2",
  "url": "ap_calc1.html#teo_fermat",
  "type": "Teorema",
  "number": "A.1.3",
  "title": "(Fermat).",
  "body": " (Fermat)   Seja derivável em . Se é um ponto de máximo ou mínimo local de , então .    Lembramos que é derivável em , se existe contínua em , tal que e, nesse caso, temos .  Suponha que é um ponto de máximo local de . O caso de mínimo local é análogo e um excelente exercício para testar sua compreensão da demonstração. Consideremos duas situações:  : nesse caso, e, da continuidade de , temos que para todo , onde é um intervalo aberto centrado em e inteiramente contido em . Se , , então a equação nos diz que contradizendo o fato de ser máximo local.  : agora, e, como antes, para todo , onde é um intervalo como o do caso anterior. Se , , então a equação nos diz que contradizendo o fato de ser máximo local.  Com isso, só é possível .    O teorema não vale se o domínio de é um intervalo fechado: , , não tem derivada nula em nenhum ponto e assume valores máximo e mínimo (nos extremos do intervalo).  O teorema não admite recíproca, ou seja, se não podemos dizer que é ponto de máximo ou mínimo local de : , , é tal que , mas não é máximo nem mínimo local de .   "
},
{
  "id": "ap_func",
  "level": "1",
  "url": "ap_func.html",
  "type": "Seção",
  "number": "A.2",
  "title": "Curvas de Nível",
  "body": " Curvas de Nível  Sejam e . A curva de nível ou conjunto de nível do nível de é o conjunto   A curva de nível é, em outras palavras, o conjunto de todos os pontos no domínio de , onde esta vale .    Determine as curvas nível da função dada por .    Começamos observando que o domínio de é todo o e sua imagem é o conjunto dos reais não-negativos, indicado por . Isto posto notamos que, para todo , temos . Vejamos o que acontece com :  : ;  : . Neste caso, as soluções são exatamente pontos da circunferência de raio , centrada na origem.     Curvas de nível.       Gráfico de função e cortes de nível   Gráfico           Determine as curvas nível da função dada por .    Começamos observando que o domínio de é todo o e sua imagem é o conjunto de todos os reais. Vejamos o que acontece com :  : , que descreve uma hipérbole com focos no eixo ;  : , que descreve o par de retas concorrentes e .  : , que descreve uma hipérbole com focos no eixo ;     Curvas de nível.       Gráfico de função e cortes de nível   Gráfico           Determine as curvas nível da função dada por .    Aqui o domínio da função é o conjunto Isto significa obviamente, mas nunca é demais alertar que, os pontos das bissetrizes dos quadrantes não podem estar em nenhuma curva de nível da função deste exemplo. Com isso em mente temos que equação que define cada curva de nível é   Separando em casos:  : A queação torna-se , que é o eixo , exceto a origem (restrição no domínio);  : A queação torna-se , que é o eixo , novamente excluindo-se a origem;  : os coeficiente de e são ambos positivos na equação , donde a única solução seria , que não pertence a , isso mostra que a função não assume valores entre e ;  Para os demais valores de , ou , as soluções são retas concorrentes, exceto a origem.       Curvas de nível.       Gráfico de função e cortes de nível   Gráfico         "
},
{
  "id": "curva_nivel",
  "level": "2",
  "url": "ap_func.html#curva_nivel",
  "type": "Definição",
  "number": "A.2.1",
  "title": "",
  "body": "Sejam e . A curva de nível ou conjunto de nível do nível de é o conjunto  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "ap_func.html#example-1",
  "type": "Exemplo",
  "number": "A.2.2",
  "title": "",
  "body": "  Determine as curvas nível da função dada por .    Começamos observando que o domínio de é todo o e sua imagem é o conjunto dos reais não-negativos, indicado por . Isto posto notamos que, para todo , temos . Vejamos o que acontece com :  : ;  : . Neste caso, as soluções são exatamente pontos da circunferência de raio , centrada na origem.     Curvas de nível.       Gráfico de função e cortes de nível   Gráfico        "
},
{
  "id": "example-2",
  "level": "2",
  "url": "ap_func.html#example-2",
  "type": "Exemplo",
  "number": "A.2.5",
  "title": "",
  "body": "  Determine as curvas nível da função dada por .    Começamos observando que o domínio de é todo o e sua imagem é o conjunto de todos os reais. Vejamos o que acontece com :  : , que descreve uma hipérbole com focos no eixo ;  : , que descreve o par de retas concorrentes e .  : , que descreve uma hipérbole com focos no eixo ;     Curvas de nível.       Gráfico de função e cortes de nível   Gráfico        "
},
{
  "id": "example-3",
  "level": "2",
  "url": "ap_func.html#example-3",
  "type": "Exemplo",
  "number": "A.2.8",
  "title": "",
  "body": "  Determine as curvas nível da função dada por .    Aqui o domínio da função é o conjunto Isto significa obviamente, mas nunca é demais alertar que, os pontos das bissetrizes dos quadrantes não podem estar em nenhuma curva de nível da função deste exemplo. Com isso em mente temos que equação que define cada curva de nível é   Separando em casos:  : A queação torna-se , que é o eixo , exceto a origem (restrição no domínio);  : A queação torna-se , que é o eixo , novamente excluindo-se a origem;  : os coeficiente de e são ambos positivos na equação , donde a única solução seria , que não pertence a , isso mostra que a função não assume valores entre e ;  Para os demais valores de , ou , as soluções são retas concorrentes, exceto a origem.       Curvas de nível.       Gráfico de função e cortes de nível   Gráfico        "
},
{
  "id": "ap_limcont",
  "level": "1",
  "url": "ap_limcont.html",
  "type": "Seção",
  "number": "A.3",
  "title": "Cálculo de Limites",
  "body": " Cálculo de Limites   Apresentamos a seguir os principais resultados para o cálculo de limites. Ao final apresentamos a conexão entre o cálculo de limites e continuidade num ponto.    (Limite da composta)   Sejam , contínua em e , tal que . Então .    Junte os ingredientes:   contínua em diz que, dado , existe tal que   diz que, dado , existe tal que    Dado , aplicando dado por como em temos que ou seja, .   Este é o resultado que permite \"passar o limite para dentro\" de uma função contínua.     Calcule, caso exista, .   Considere e . Claramente, para todo , . Como é contínua em (limite trigonométrico fundamental) e , temos     (Confronto)   Sejam funções tais que para todo . Se , então .    Basta escrever a definição de limite:   significa que dado , existe tal que e significa que dado , existe tal que .  Para cada , tome . Para todo tal que , \"abrindo os módulos\" e usando as desigualdades da hipótese, temos que , ou seja, .     (Função Limitada)   Uma função é limitada , se existe tal que , para todo .    Veja alguns exemplos de funções limitadas no vídeo abaixo.   Funções limitadas (até 10m30s).     (Limitada Tende a zero)   Sejam funções tais que é limitada e . Então .    Como é limitada, existe tal que . Multiplicando por , temos , ou seja, . Usando a , temos que . Logo, .      Sejam uma função tal que e uma curva contínua tal que . Então .    Mais uma vez, junte os ingredientes:  diz que, dado , existe tal que   diz que, dado , existe tal que    Como antes, dado , use dado em como em e então ou seja, .   Este teorema é bem mais interessante na contra-positiva: se existem duas curvas e nas condições do enunciado tais que  , ou  não existe  então não existe.    (Limite e Continuidade)   Sejam uma função e . Então é contínua em se, e somente se,     É realmente uma consequência direta das definições de limite e continuidade.    "
},
{
  "id": "prop_comp",
  "level": "2",
  "url": "ap_limcont.html#prop_comp",
  "type": "Proposição",
  "number": "A.3.1",
  "title": "(Limite da composta).",
  "body": " (Limite da composta)   Sejam , contínua em e , tal que . Então .    Junte os ingredientes:   contínua em diz que, dado , existe tal que   diz que, dado , existe tal que    Dado , aplicando dado por como em temos que ou seja, .   Este é o resultado que permite \"passar o limite para dentro\" de uma função contínua.  "
},
{
  "id": "exemplo_comp",
  "level": "2",
  "url": "ap_limcont.html#exemplo_comp",
  "type": "Exemplo",
  "number": "A.3.3",
  "title": "",
  "body": "  Calcule, caso exista, .   Considere e . Claramente, para todo , . Como é contínua em (limite trigonométrico fundamental) e , temos   "
},
{
  "id": "teo_confronto",
  "level": "2",
  "url": "ap_limcont.html#teo_confronto",
  "type": "Teorema",
  "number": "A.3.4",
  "title": "(Confronto).",
  "body": " (Confronto)   Sejam funções tais que para todo . Se , então .    Basta escrever a definição de limite:   significa que dado , existe tal que e significa que dado , existe tal que .  Para cada , tome . Para todo tal que , \"abrindo os módulos\" e usando as desigualdades da hipótese, temos que , ou seja, .   "
},
{
  "id": "def_limitada",
  "level": "2",
  "url": "ap_limcont.html#def_limitada",
  "type": "Definição",
  "number": "A.3.5",
  "title": "(Função Limitada).",
  "body": " (Função Limitada)   Uma função é limitada , se existe tal que , para todo .   "
},
{
  "id": "vid_limitada",
  "level": "2",
  "url": "ap_limcont.html#vid_limitada",
  "type": "Figura",
  "number": "A.3.6",
  "title": "",
  "body": " Funções limitadas (até 10m30s).   "
},
{
  "id": "cor_confronto",
  "level": "2",
  "url": "ap_limcont.html#cor_confronto",
  "type": "Corolário",
  "number": "A.3.7",
  "title": "(Limitada <span class=\"process-math\">\\(\\times\\)<\/span> Tende a zero).",
  "body": " (Limitada Tende a zero)   Sejam funções tais que é limitada e . Então .    Como é limitada, existe tal que . Multiplicando por , temos , ou seja, . Usando a , temos que . Logo, .   "
},
{
  "id": "teo_limcurvas",
  "level": "2",
  "url": "ap_limcont.html#teo_limcurvas",
  "type": "Teorema",
  "number": "A.3.8",
  "title": "",
  "body": "  Sejam uma função tal que e uma curva contínua tal que . Então .    Mais uma vez, junte os ingredientes:  diz que, dado , existe tal que   diz que, dado , existe tal que    Como antes, dado , use dado em como em e então ou seja, .   Este teorema é bem mais interessante na contra-positiva: se existem duas curvas e nas condições do enunciado tais que  , ou  não existe  então não existe.  "
},
{
  "id": "teo_limcont",
  "level": "2",
  "url": "ap_limcont.html#teo_limcont",
  "type": "Teorema",
  "number": "A.3.10",
  "title": "(Limite e Continuidade).",
  "body": " (Limite e Continuidade)   Sejam uma função e . Então é contínua em se, e somente se,     É realmente uma consequência direta das definições de limite e continuidade.   "
},
{
  "id": "ap_diff",
  "level": "1",
  "url": "ap_diff.html",
  "type": "Seção",
  "number": "A.4",
  "title": "Derivadas Parciais e Diferenciabilidade",
  "body": " Derivadas Parciais e Diferenciabilidade   Apresentamos a seguir as principais definições e resultados sobre derivadas parciais, diferenciabilidade e plano tangente ao gráfico de uma função, sempre ilustrados com exemplos e contra-exemplos.    (Derivadas parciais)   Sejam uma função e um ponto no interior de . As derivadas parciais de em são dadas por   É frequente na literatura encontrar indicando e no lugar de .     Na definição acima apenas uma das coordenadas varia, o que se generalizaria para derivadas parciais de funções com mais de duas variáveis. Veja abaixo uma figura que dá a interpretação geométrica das derivadas parciais num ponto.  Interpretação das derivadas parciais   Interpretação das derivadas parciais      Assim, e .  Fixando uma das variáveis de , digamos (pense nela como uma constante real), temos a função de uma variável . Se derivável em , então . Analogamente, se é derivável em , então .   Aqui aparece uma primeira diferença em relação ao cálculo em uma variável: lá toda função derivável num ponto é automaticamente contínua nesse ponto; aqui a existência das derivadas parciais em não garante a continuidade da função em . Veja um exemplo a seguir.   A função admite derivadas parciais em , mas não é contínua em .  Precisamos calcular as derivadas parciais pela definição, já que a regras de derivação do quociente não se aplica (denominador se anula no ponto estudado). Então o que era de se esperar, uma vez que é constante (nula) ao longo dos eixos coordenados.  Porém, ao longo da curva , temos mostrando, de acordo com o , que não é contínua em .  Veja o gráfico de e verifique que o comportamento ao longo dos eixos e não dertermina o que acontece em outras direções no domínio.  Gráfico de função e cortes de nível   Curvas de nível       Isto mostra que precisamos de algo \"mais forte\" do que exigir apenas a existência de derivadas parciais sequeremos aproximar a função por algo linear numa vizinhança de um ponto, independentemente como nos aproximamos desse ponto (e não apenas paralelamente aos eixos coordenados, como ocorre nas derivadas parciais).   (Diferenciabilidade e Plano Tangente)   Sejam uma função e um ponto no interior de . A função é diferenciável em se   Se é diferenciável em , o plano tangente ao seu gráfico no ponto tem equação     Com isso, o vetor normal ao gráfico nesse pontos é e a equação da reta normal naquele ponto é  A equação do plano tangente pode ser reescrita como uma função afim Com isso, de maneira intuitiva, a definição de diferenciabilidade diz que a diferença entre o valor de e a sua estimativa por tende a zero \"mais rapidamente\" que a distância entre e . Isto é exatamente o que acontece para funções deriváveis a uma variável real.     Se é diferenciável em , então é contínua em .    Se é diferenciável em , então   Em particular, e, fazendo , na expressão acima, temos que pelo , garante a continuidade de em .    Como vimos anteriormente a existência das derivadas parciais não garante sequer continuidade, quanto mais diferenciabilidade. Porém, se as derivadas parciais são bem comportadas, a situação é bem melhor:   (Derivadas parciais contínuas)   Se é uma função, cujas derivadas pariciais existem e são funções contínuas em , então é diferenciável em .    Observamos incialmente que   Escrevendo , podemos usar o TMV (caso particular do ) para concluir que para algum entre e .  De maneira totalmente análoga, temos para algum entre e . Desta forma, usando o limite para verificar a diferenciabilidade de em escreve-se pois, em cada parcela, o segundo fator é limitado e a continuidade das derivadas parciais diz que o primeiro vai a zero. Verificamos isso para a derivada parcial em  já que e . O argumento é idêntico para a segunda parcela. Logo é diferenciável em .   Usando a notação da , dizemos que se é de classe em , então é diferenciável em .   O exemplo a seguir mostra que o resultado acima é uma condição suficiente mas não necessária.   A função é diferenciável na origem, mas uma de suas derivadas parciais não é contínua nesse ponto.  A continuidade de segue de que é limitado e se . As derivadas parciais são calculadas via regras de derivação fora da origem e pela definição na origem. Fazendo as contas, obtemos   Verifiquemos a diferenciabilidade pela definição: calcular logo é diferenciável na origem.  Agora, a continuidade das derivadas parciais:  A derivada parcial em não é contínua na origem, basta tomar a curva , para obter   Já a derivada parcial em é contínua na origem, pois pois cada parcela tem o segundo fator limitado e o primeiro tendendo a zero.     Encerramos esta guia de consulta rápida da teoria com um diagrama de implicações entre os conceitos de continuidade, existência de derivadas parciais e diferenciabilidade num ponto do interior do domínio de uma função.  Diagrama de implicações entre os conceitos   Diagrama de implicações entre os conceitos      No diagrama acima, se não existe uma seta conectando dois conceitos é por que não há relação de causa e consequência entre eles. Procure, nos exemplos e exercícios resolvidos, situações que ilustram as ausências de setas (em algum ou nos dois sentidos) ligando os termos.  "
},
{
  "id": "def_derpar",
  "level": "2",
  "url": "ap_diff.html#def_derpar",
  "type": "Definição",
  "number": "A.4.1",
  "title": "(Derivadas parciais).",
  "body": " (Derivadas parciais)   Sejam uma função e um ponto no interior de . As derivadas parciais de em são dadas por   É frequente na literatura encontrar indicando e no lugar de .   "
},
{
  "id": "obs_apintderpar",
  "level": "2",
  "url": "ap_diff.html#obs_apintderpar",
  "type": "Nota",
  "number": "A.4.2",
  "title": "",
  "body": " Na definição acima apenas uma das coordenadas varia, o que se generalizaria para derivadas parciais de funções com mais de duas variáveis. Veja abaixo uma figura que dá a interpretação geométrica das derivadas parciais num ponto.  Interpretação das derivadas parciais   Interpretação das derivadas parciais      Assim, e .  Fixando uma das variáveis de , digamos (pense nela como uma constante real), temos a função de uma variável . Se derivável em , então . Analogamente, se é derivável em , então .  "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "ap_diff.html#remark-15",
  "type": "Nota",
  "number": "A.4.4",
  "title": "",
  "body": "Aqui aparece uma primeira diferença em relação ao cálculo em uma variável: lá toda função derivável num ponto é automaticamente contínua nesse ponto; aqui a existência das derivadas parciais em não garante a continuidade da função em . Veja um exemplo a seguir. "
},
{
  "id": "exemplo_parcont",
  "level": "2",
  "url": "ap_diff.html#exemplo_parcont",
  "type": "Exemplo",
  "number": "A.4.5",
  "title": "",
  "body": " A função admite derivadas parciais em , mas não é contínua em .  Precisamos calcular as derivadas parciais pela definição, já que a regras de derivação do quociente não se aplica (denominador se anula no ponto estudado). Então o que era de se esperar, uma vez que é constante (nula) ao longo dos eixos coordenados.  Porém, ao longo da curva , temos mostrando, de acordo com o , que não é contínua em .  Veja o gráfico de e verifique que o comportamento ao longo dos eixos e não dertermina o que acontece em outras direções no domínio.  Gráfico de função e cortes de nível   Curvas de nível      "
},
{
  "id": "def_diff",
  "level": "2",
  "url": "ap_diff.html#def_diff",
  "type": "Definição",
  "number": "A.4.7",
  "title": "(Diferenciabilidade e Plano Tangente).",
  "body": " (Diferenciabilidade e Plano Tangente)   Sejam uma função e um ponto no interior de . A função é diferenciável em se   Se é diferenciável em , o plano tangente ao seu gráfico no ponto tem equação    "
},
{
  "id": "p-463",
  "level": "2",
  "url": "ap_diff.html#p-463",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "vetor normal reta normal "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "ap_diff.html#remark-16",
  "type": "Nota",
  "number": "A.4.8",
  "title": "",
  "body": "A equação do plano tangente pode ser reescrita como uma função afim Com isso, de maneira intuitiva, a definição de diferenciabilidade diz que a diferença entre o valor de e a sua estimativa por tende a zero \"mais rapidamente\" que a distância entre e . Isto é exatamente o que acontece para funções deriváveis a uma variável real. "
},
{
  "id": "prop_diffcont",
  "level": "2",
  "url": "ap_diff.html#prop_diffcont",
  "type": "Proposição",
  "number": "A.4.9",
  "title": "",
  "body": "   Se é diferenciável em , então é contínua em .    Se é diferenciável em , então   Em particular, e, fazendo , na expressão acima, temos que pelo , garante a continuidade de em .   "
},
{
  "id": "teo_diff-c1",
  "level": "2",
  "url": "ap_diff.html#teo_diff-c1",
  "type": "Teorema",
  "number": "A.4.10",
  "title": "(Derivadas parciais contínuas).",
  "body": " (Derivadas parciais contínuas)   Se é uma função, cujas derivadas pariciais existem e são funções contínuas em , então é diferenciável em .    Observamos incialmente que   Escrevendo , podemos usar o TMV (caso particular do ) para concluir que para algum entre e .  De maneira totalmente análoga, temos para algum entre e . Desta forma, usando o limite para verificar a diferenciabilidade de em escreve-se pois, em cada parcela, o segundo fator é limitado e a continuidade das derivadas parciais diz que o primeiro vai a zero. Verificamos isso para a derivada parcial em  já que e . O argumento é idêntico para a segunda parcela. Logo é diferenciável em .   Usando a notação da , dizemos que se é de classe em , então é diferenciável em .  "
},
{
  "id": "exemplo_diffnc1",
  "level": "2",
  "url": "ap_diff.html#exemplo_diffnc1",
  "type": "Exemplo",
  "number": "A.4.12",
  "title": "",
  "body": " A função é diferenciável na origem, mas uma de suas derivadas parciais não é contínua nesse ponto.  A continuidade de segue de que é limitado e se . As derivadas parciais são calculadas via regras de derivação fora da origem e pela definição na origem. Fazendo as contas, obtemos   Verifiquemos a diferenciabilidade pela definição: calcular logo é diferenciável na origem.  Agora, a continuidade das derivadas parciais:  A derivada parcial em não é contínua na origem, basta tomar a curva , para obter   Já a derivada parcial em é contínua na origem, pois pois cada parcela tem o segundo fator limitado e o primeiro tendendo a zero.    "
},
{
  "id": "fig_apdiffdiag",
  "level": "2",
  "url": "ap_diff.html#fig_apdiffdiag",
  "type": "Figura",
  "number": "A.4.13",
  "title": "",
  "body": " Diagrama de implicações entre os conceitos   Diagrama de implicações entre os conceitos    "
},
{
  "id": "ap_derivseg",
  "level": "1",
  "url": "ap_derivseg.html",
  "type": "Seção",
  "number": "A.5",
  "title": "Derivadas de Segunda Ordem",
  "body": " Derivadas de Segunda Ordem   Apresentamos aqui uma rápida recapitulação do que são as derivadas parciais de segunda ordem e o resultado principal sobre elas, que é o teorema de Schwarz.  Se é uma função que admite derivadas parciais em cada ponto , podemos então considerar as funções Naturalmente, podemos nos perguntar sobre as derivadas parciais destas duas funções acima:    (Derivadas de segunda ordem)   Sejam uma função e um ponto no interior de . As derivadas parciais de segunda ordem de em são dadas por    Costumamos também escrever     Podemos interpretar as derivadas de segunda de numa mesma variável como a concavidade do gráfico da função de uma variável que é dada pela corte pelo plano vertical dado pela variável fixada. No exemplo abaixo, temos e .  Interpretação dos sinais de e .   Interpretação dos sinais das segundas derivadas.      As derivadas mistas têm uma interpretação um pouco menos imediata: como vimos na , a derivada parcial dá o coeficiente angular da reta tangente ao gráfico de no ponto . A derivada de em relação a no ponto dá a taxa de variação dos coeficientes angulares da função no ponto quando variamos , mantendo fixado.  Interpretação análoga se dá para a derivada mista na outra ordem.   Com a obervação acima é de se esperar que não haja nenhuma relação entre os valores das duas derivadas mistas de uma função no mesmo ponto. Eventualmente uma delas pode existir e a outra nem isso!   Seja . Calculemos as derivadas mistas de segunda ordem: ou seja, as derivadas mistas são iguais em cada ponto!   Sorte? Provavelmente sim, já que o , mostra que nem sempre isso acontece. Vamos estabelecer uma nomenclatura utilizada no resultado que garante condições suficientes para que as derivadas mistas coincidam em cada ponto.   (Funções de classe )   Sejam uma função e um ponto no interior de . Dizemos que é de classe em  se todas as derivadas parciais de ordem até são contínuas em .    Temos então o   (Schwarz)   Se é uma função de classe em , então .    Seguindo diretamente das definições, temos onde é uma função derivável. Para cada fixado, aplicando o TVM temos que Voltando no limite acima, temos pois, por hipótese, é contínua em .    O exemplo a seguir mostra que a recíproca do Teorema de Schwarz é falsa.   A função é uma função de classe em , satisfaz , mas não é de classe em .  Calculando pelas regras de derivação e pela definição onde for pertinente, temos É relativamente imediato verificar a continuidade das funções acima e portanto que é uma função de classe em .  Calculando uma das derivadas mistas na origem, temos   Finalmente, escrevemos a derivada segunda para analisar sua continuidade. onde é relativamente fácil ver que a segunda parcela não tem limite na origem, enquanto a primeira tende a , mostrando que não tem limite em , logo não pode ser contínua ali.   Com um pouco de imaginação você consegue generalizar as definições e resultados aqui apresentados para funções com mais de duas variáveis e também para derivadas de ordem .                                                                                                                                                                                        "
},
{
  "id": "def_derivseg",
  "level": "2",
  "url": "ap_derivseg.html#def_derivseg",
  "type": "Definição",
  "number": "A.5.1",
  "title": "(Derivadas de segunda ordem).",
  "body": " (Derivadas de segunda ordem)   Sejam uma função e um ponto no interior de . As derivadas parciais de segunda ordem de em são dadas por    Costumamos também escrever   "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "ap_derivseg.html#remark-19",
  "type": "Nota",
  "number": "A.5.3",
  "title": "",
  "body": " Podemos interpretar as derivadas de segunda de numa mesma variável como a concavidade do gráfico da função de uma variável que é dada pela corte pelo plano vertical dado pela variável fixada. No exemplo abaixo, temos e .  Interpretação dos sinais de e .   Interpretação dos sinais das segundas derivadas.      As derivadas mistas têm uma interpretação um pouco menos imediata: como vimos na , a derivada parcial dá o coeficiente angular da reta tangente ao gráfico de no ponto . A derivada de em relação a no ponto dá a taxa de variação dos coeficientes angulares da função no ponto quando variamos , mantendo fixado.  Interpretação análoga se dá para a derivada mista na outra ordem.  "
},
{
  "id": "exemplo_derseg",
  "level": "2",
  "url": "ap_derivseg.html#exemplo_derseg",
  "type": "Exemplo",
  "number": "A.5.5",
  "title": "",
  "body": " Seja . Calculemos as derivadas mistas de segunda ordem: ou seja, as derivadas mistas são iguais em cada ponto!  "
},
{
  "id": "def_classeCk",
  "level": "2",
  "url": "ap_derivseg.html#def_classeCk",
  "type": "Definição",
  "number": "A.5.6",
  "title": "(Funções de classe <span class=\"process-math\">\\(\\mathscr{C}^k\\)<\/span>).",
  "body": " (Funções de classe )   Sejam uma função e um ponto no interior de . Dizemos que é de classe em  se todas as derivadas parciais de ordem até são contínuas em .   "
},
{
  "id": "teo_schwarz",
  "level": "2",
  "url": "ap_derivseg.html#teo_schwarz",
  "type": "Teorema",
  "number": "A.5.7",
  "title": "(Schwarz).",
  "body": " (Schwarz)   Se é uma função de classe em , então .    Seguindo diretamente das definições, temos onde é uma função derivável. Para cada fixado, aplicando o TVM temos que Voltando no limite acima, temos pois, por hipótese, é contínua em .   "
},
{
  "id": "exemplo_naoschwarz",
  "level": "2",
  "url": "ap_derivseg.html#exemplo_naoschwarz",
  "type": "Exemplo",
  "number": "A.5.8",
  "title": "",
  "body": " A função é uma função de classe em , satisfaz , mas não é de classe em .  Calculando pelas regras de derivação e pela definição onde for pertinente, temos É relativamente imediato verificar a continuidade das funções acima e portanto que é uma função de classe em .  Calculando uma das derivadas mistas na origem, temos   Finalmente, escrevemos a derivada segunda para analisar sua continuidade. onde é relativamente fácil ver que a segunda parcela não tem limite na origem, enquanto a primeira tende a , mostrando que não tem limite em , logo não pode ser contínua ali.  "
},
{
  "id": "ap_cadeiadir",
  "level": "1",
  "url": "ap_cadeiadir.html",
  "type": "Seção",
  "number": "A.6",
  "title": "Regras da Cadeia e Derivadas direcionais",
  "body": " Regras da Cadeia e Derivadas direcionais   Nesta seção vamos apresentar a derivação da composta de uma função de duas variáveis com uma curva plana e, como consequência, maneiras de derivar outras compostas e também derivadas em direções que não são paralelas aos eixos coordenados, sempre ilustrados com exemplos e contra-exemplos.   Começamos com uma definição e uma lema técnico que permitirá enunciar o resultado principal desta seção.   (Vetor Gradiente)   Seja uma função que admite derivadas pariciais em . O gradiente de em é o vetor        Seja uma função diferenciável em , então existe , contínua em tal que     Queremos construir uma função que verifique a propriedade acima. Se , é claro que tal função deve satisfazer O valor de em deve ser tal que a função seja contínua nesse ponto, ou seja, . Fazendo e , vemos que este limite é nada mais que o limite da , que é zero aqui, uma vez que é diferenciável em .  Assim, definimos     Note inicialmente que as duas primeiras parcelas do lado direito na expressão em destaque são exatamente as parcelas independentes de na equação do plano tangente gráfico de em .  Com isto, este enunciado é uma generalização natural do que acontece com funções de uma variável, quando olhamos para o polinômio de Taylor de ordem 1: o erro na aproximação, ali pela reta tangente, aqui pelo plano tangente, dá um erro que tende a zero \"mais rapidamente\" do que se aproxima de .   (Regra da Cadeia)   Sejam uma função diferenciável em e derivável em tal que . Então é derivável em e     Começamos recordando que  Podemos aplicar o aos termos do numerador acima, com e , obtendo pois , e é limitado.    Uma interpretação para a Regra da Cadeia apresentada acima é que a derivada, ou taxa de variação, de ao longo de uma curva está ligada com a projeção ortogonal do gradiente de sobre o vetor velocidade da curva.   A composta .       Além de seu valor no cálculo de derivadas de compostas, a Regra da Cadeia é uma poderosa ferramenta para mostrar que uma função não é diferenciável. Veja como no exemplo abaixo:   A função não é diferenciável na origem. De fato, , é uma curva derivável tal que e . Temos, calculando explicitamente, que . No calculamos as derivadas parciais de , obtendo . derivadas parciais em , mas não é contínua em . Assim, Se fosse derivável na origem, a igualdade deveria valer para qualquer curva nas condições do enunciado do    No caso especial em que a curva considerada é uma curva de nível da função temos um resultado bastante interessante:   ( )  Sejam uma função diferenciável e , que é uma curva derivável tal que (a curva parametriza parte de uma curva de nível de ). Então, para todo .  Basta observar que, nas condições do enunciado, temos e portanto para todo . O resultado segue disto aplicado ao .  Este é o famoso resultado que se traduz na frase \" O gradiente é perpendicular às curvas de nível. \".    Seja , que é diferenciável em todo seu domínio. Sua curva de nível é um círculo centrado na origem e de raio , que pode ser parametrizado por , . Como e , temos    O gradiente ao longo de uma curva de nível.      Note que nessas condições a projeção do gradiente na direção tangente à da curva é nula, ou seja, que caminha ao longo de uma curva de nível \"não sente\" as derivadas de (e por isso ela é constante ao longo dessa trajetória.    Sejam funções diferenciáveis em e diferenciável em . Então a função é diferenciável em e    Lembrando que as derivadas parciais deixam uma das variáveis fixadas, podemos aplicar o a cada uma das curvas indicadas no plano da figura abaixo.  A composta .       Considerando então a curva , para a qual e aplicando a Regra da Cadeia do , temos onde .  Procedendo de maneira análoga para a curva , obtemos a expressão para a derivada em de , no ponto .   Omitindo os pontos de aplicação (tenha cuidado ao fazer isso!) e, escrevendo , e (abusando muito!) , temos uma notação mais sintética para as expressões acima:  De maneira ainda mais curta, podemos escrever     Podemos, naturalmente, calcular as derivadas segundas de tais compostas. Para tanto, basta lembrar que vamos precisar dos gradientes de e : Assim, com as hipóteses de derivadas parciais de sendo diferenciáveis e admitindo segunda derivada nos respectivos pontos, e escrevendo , temos, com a Regra da Cadeia, que   Derivando cada parcela com a regra do produto e usando novamente a Regra da Cadeia (aplicada às derivadas parciais de ), temos   Abrindo os produtos internos usando e escrevendo tudo nas notações mais sintéticas (cuidado com os pontos de aplicação!), temos   No caso especial em que é de classe em , usamos o para escrever   Assim como usamos o para provar o , é possível usar as expressões acima para calcular as derivadas parciais de segunda ordem de compostas do tipo . Fazemos isso no .   (Derivada Direcional)   Sejam uma função e um vetor unitário. A derivada direcional de , na direção de , em é dada por    No caso especial em que ou , recuperamos, respectivamente, e . A interpretação geométrica é análoga à feita na , com cortes por planos não paralelos aos eixos ou .   Quando a função é diferenciável, o vetor gradiente determina completamente as derivadas direcionais:   Sejam uma função diferenciável em e um vetor unitário. Então   Basta parametrizar um segmento de reta que passa por e tem a direção de : , (com ). Assim,    Se é qualquer curva derivável em tal que e , então ou seja, a derivada de ao longo de em depende apenas de . Em outras palavras, se duas curvas passam por um mesmo ponto do plano e têm o mesmo tangente nesse ponto, então qualquer função diferenciável terá a mesma derivada quando composta com essas curvas naquele ponto.   A existência de derivadas direcionais em todas as direções não garante diferenciabilidade. Por exemplo, vimos que a função do não é diferenciável na origem, mas admite derivadas direcionais nesse ponto em todas as direções: se , com , temos:  Em vista da fórmula na acima, sabemos a derivada direcional de qualquer função diferenciável deve depender linearmente das coordenadas da direção em que estamos derivando.    Direções de crescimento máximo  Se uma função diferenciável em , então a direção em que tem a maior taxa de variação nesse ponto é a de .   Basta olhar para a definição geométrica do produto escalar em : .  Como está fixado, é uma constant e . Desta forma o valor da derivada direcional depende somente e assumirá seu máximo, quando , ou seja, quando    O vídeo abaixo ilustra uma aplicação interessante da   Trajetórias ortogonais a curvas de nível.    Fechamos esta revisão com uma curiosidade:   Outras direções  Podemos generalizar um pouco o resultado acima: se uma função é diferenciável em , basta conhecer as derivadas direcionais nesse ponto, em duas direções linearmente independentes, para determinarmos a derivada direcional em em qualquer direção. Para tanto, se e são vetores unitários que definem tais direções, temos que é uma base de e, portanto  Desta forma, temos   Expandindo o produto interno pela sua linearidade e procedento de maneira análoga com o vetor , temos então que  Mais frequentemente, temos as coordenadas de e na base canônica, digamos e . Procedendo de maneira inversa, temos um sistema para determinar o gradiente de (e consequentemente todas as derivadas direcionais): cujas soluções são dadas invertendo-se a matriz de coeficientes, o que é possível se e somente se os vetores e são linearmente independentes.   "
},
{
  "id": "def_gradiente",
  "level": "2",
  "url": "ap_cadeiadir.html#def_gradiente",
  "type": "Definição",
  "number": "A.6.1",
  "title": "(Vetor Gradiente).",
  "body": " (Vetor Gradiente)   Seja uma função que admite derivadas pariciais em . O gradiente de em é o vetor    "
},
{
  "id": "lem_cadeia",
  "level": "2",
  "url": "ap_cadeiadir.html#lem_cadeia",
  "type": "Lema",
  "number": "A.6.2",
  "title": "",
  "body": "   Seja uma função diferenciável em , então existe , contínua em tal que     Queremos construir uma função que verifique a propriedade acima. Se , é claro que tal função deve satisfazer O valor de em deve ser tal que a função seja contínua nesse ponto, ou seja, . Fazendo e , vemos que este limite é nada mais que o limite da , que é zero aqui, uma vez que é diferenciável em .  Assim, definimos    "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "ap_cadeiadir.html#remark-20",
  "type": "Nota",
  "number": "A.6.3",
  "title": "",
  "body": "Note inicialmente que as duas primeiras parcelas do lado direito na expressão em destaque são exatamente as parcelas independentes de na equação do plano tangente gráfico de em .  Com isto, este enunciado é uma generalização natural do que acontece com funções de uma variável, quando olhamos para o polinômio de Taylor de ordem 1: o erro na aproximação, ali pela reta tangente, aqui pelo plano tangente, dá um erro que tende a zero \"mais rapidamente\" do que se aproxima de . "
},
{
  "id": "teo_cadeia",
  "level": "2",
  "url": "ap_cadeiadir.html#teo_cadeia",
  "type": "Teorema",
  "number": "A.6.4",
  "title": "(Regra da Cadeia).",
  "body": " (Regra da Cadeia)   Sejam uma função diferenciável em e derivável em tal que . Então é derivável em e     Começamos recordando que  Podemos aplicar o aos termos do numerador acima, com e , obtendo pois , e é limitado.   "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "ap_cadeiadir.html#remark-21",
  "type": "Nota",
  "number": "A.6.5",
  "title": "",
  "body": "Uma interpretação para a Regra da Cadeia apresentada acima é que a derivada, ou taxa de variação, de ao longo de uma curva está ligada com a projeção ortogonal do gradiente de sobre o vetor velocidade da curva.   A composta .      "
},
{
  "id": "exemplo_cadeianaodiff",
  "level": "2",
  "url": "ap_cadeiadir.html#exemplo_cadeianaodiff",
  "type": "Exemplo",
  "number": "A.6.7",
  "title": "",
  "body": " A função não é diferenciável na origem. De fato, , é uma curva derivável tal que e . Temos, calculando explicitamente, que . No calculamos as derivadas parciais de , obtendo . derivadas parciais em , mas não é contínua em . Assim, Se fosse derivável na origem, a igualdade deveria valer para qualquer curva nas condições do enunciado do   "
},
{
  "id": "cor_cadeiagradniv",
  "level": "2",
  "url": "ap_cadeiadir.html#cor_cadeiagradniv",
  "type": "Corolário",
  "number": "A.6.8",
  "title": "(<span class=\"process-math\">\\(\\nabla f\\perp f^{-1}(c)\\)<\/span>).",
  "body": " ( )  Sejam uma função diferenciável e , que é uma curva derivável tal que (a curva parametriza parte de uma curva de nível de ). Então, para todo .  Basta observar que, nas condições do enunciado, temos e portanto para todo . O resultado segue disto aplicado ao .  Este é o famoso resultado que se traduz na frase \" O gradiente é perpendicular às curvas de nível. \".  "
},
{
  "id": "exemplo_cadeianivel",
  "level": "2",
  "url": "ap_cadeiadir.html#exemplo_cadeianivel",
  "type": "Exemplo",
  "number": "A.6.10",
  "title": "",
  "body": " Seja , que é diferenciável em todo seu domínio. Sua curva de nível é um círculo centrado na origem e de raio , que pode ser parametrizado por , . Como e , temos    O gradiente ao longo de uma curva de nível.      Note que nessas condições a projeção do gradiente na direção tangente à da curva é nula, ou seja, que caminha ao longo de uma curva de nível \"não sente\" as derivadas de (e por isso ela é constante ao longo dessa trajetória.  "
},
{
  "id": "cor_cadeiaturbo",
  "level": "2",
  "url": "ap_cadeiadir.html#cor_cadeiaturbo",
  "type": "Corolário",
  "number": "A.6.12",
  "title": "",
  "body": " Sejam funções diferenciáveis em e diferenciável em . Então a função é diferenciável em e    Lembrando que as derivadas parciais deixam uma das variáveis fixadas, podemos aplicar o a cada uma das curvas indicadas no plano da figura abaixo.  A composta .       Considerando então a curva , para a qual e aplicando a Regra da Cadeia do , temos onde .  Procedendo de maneira análoga para a curva , obtemos a expressão para a derivada em de , no ponto .   Omitindo os pontos de aplicação (tenha cuidado ao fazer isso!) e, escrevendo , e (abusando muito!) , temos uma notação mais sintética para as expressões acima:  De maneira ainda mais curta, podemos escrever    "
},
{
  "id": "def_derdir",
  "level": "2",
  "url": "ap_cadeiadir.html#def_derdir",
  "type": "Definição",
  "number": "A.6.15",
  "title": "(Derivada Direcional).",
  "body": " (Derivada Direcional)   Sejam uma função e um vetor unitário. A derivada direcional de , na direção de , em é dada por    No caso especial em que ou , recuperamos, respectivamente, e . A interpretação geométrica é análoga à feita na , com cortes por planos não paralelos aos eixos ou .  "
},
{
  "id": "prop_derdir",
  "level": "2",
  "url": "ap_cadeiadir.html#prop_derdir",
  "type": "Proposição",
  "number": "A.6.17",
  "title": "",
  "body": " Sejam uma função diferenciável em e um vetor unitário. Então   Basta parametrizar um segmento de reta que passa por e tem a direção de : , (com ). Assim,   "
},
{
  "id": "remark-25",
  "level": "2",
  "url": "ap_cadeiadir.html#remark-25",
  "type": "Nota",
  "number": "A.6.18",
  "title": "",
  "body": "Se é qualquer curva derivável em tal que e , então ou seja, a derivada de ao longo de em depende apenas de . Em outras palavras, se duas curvas passam por um mesmo ponto do plano e têm o mesmo tangente nesse ponto, então qualquer função diferenciável terá a mesma derivada quando composta com essas curvas naquele ponto. "
},
{
  "id": "remark-26",
  "level": "2",
  "url": "ap_cadeiadir.html#remark-26",
  "type": "Nota",
  "number": "A.6.19",
  "title": "",
  "body": " A existência de derivadas direcionais em todas as direções não garante diferenciabilidade. Por exemplo, vimos que a função do não é diferenciável na origem, mas admite derivadas direcionais nesse ponto em todas as direções: se , com , temos:  Em vista da fórmula na acima, sabemos a derivada direcional de qualquer função diferenciável deve depender linearmente das coordenadas da direção em que estamos derivando.  "
},
{
  "id": "prop_crescmax",
  "level": "2",
  "url": "ap_cadeiadir.html#prop_crescmax",
  "type": "Proposição",
  "number": "A.6.20",
  "title": "Direções de crescimento máximo.",
  "body": " Direções de crescimento máximo  Se uma função diferenciável em , então a direção em que tem a maior taxa de variação nesse ponto é a de .   Basta olhar para a definição geométrica do produto escalar em : .  Como está fixado, é uma constant e . Desta forma o valor da derivada direcional depende somente e assumirá seu máximo, quando , ou seja, quando   "
},
{
  "id": "vid_crescmax",
  "level": "2",
  "url": "ap_cadeiadir.html#vid_crescmax",
  "type": "Figura",
  "number": "A.6.21",
  "title": "",
  "body": " Trajetórias ortogonais a curvas de nível.   "
},
{
  "id": "fato_outrasdir",
  "level": "2",
  "url": "ap_cadeiadir.html#fato_outrasdir",
  "type": "Fato",
  "number": "A.6.22",
  "title": "Outras direções.",
  "body": " Outras direções  Podemos generalizar um pouco o resultado acima: se uma função é diferenciável em , basta conhecer as derivadas direcionais nesse ponto, em duas direções linearmente independentes, para determinarmos a derivada direcional em em qualquer direção. Para tanto, se e são vetores unitários que definem tais direções, temos que é uma base de e, portanto  Desta forma, temos   Expandindo o produto interno pela sua linearidade e procedento de maneira análoga com o vetor , temos então que  Mais frequentemente, temos as coordenadas de e na base canônica, digamos e . Procedendo de maneira inversa, temos um sistema para determinar o gradiente de (e consequentemente todas as derivadas direcionais): cujas soluções são dadas invertendo-se a matriz de coeficientes, o que é possível se e somente se os vetores e são linearmente independentes.  "
},
{
  "id": "ap_supnivel",
  "level": "1",
  "url": "ap_supnivel.html",
  "type": "Seção",
  "number": "A.7",
  "title": "Superfícies de nível e Curvas no espaço",
  "body": " Superfícies de nível e Curvas no espaço   Extendemos aqui o conceito de curvas de nível de uma função , visto na , para funções de três variáveis reais, .  Lembramos que todos os resultados apresentados sobre continuidade, derivadas parciais, diferenciabilidade e derivadas direcionais para funções de duas variáveis generalizam-se naturalmente para funções de variáveis (nosso caso de interesse é ).    Superfície de nível Sejam e . A superfície de nível ou conjunto de nível do nível de é o conjunto   Note que, nas condições acima, o gráfico de está em . Deste modo, as superfícies de nível vão nos ajudar a entender melhor o comportamento de tais funções. Vejamos alguns exemplo em analogia ao caso de funções a duas variáveis.    Determine as curvas nível da função dada por .    Começamos observando que o domínio de é todo o e sua imagem é o conjunto dos reais não-negativos, indicado por . Com isso, temos , se . Vejamos o que acontece com :  : ;  : . Neste caso, as soluções são exatamente pontos da esfera de raio , centrada na origem.  Observamos então que cada ponto de pertence a um e somente um conjunto de nível de .  Conjuntos de nível de .   Folheação por esferas          Determine as curvas nível da função dada por .    Começamos observando que o domínio de é todo o e sua imagem é o conjunto de todos os reais, indicado por . Com isso, temos  : . Neste caso, o conjunto solução é um hiperboloide de uma folha .  : , a equação do cone reto;  : , que define um hiperboloide de duas folhas.  Novamente observamos então que cada ponto de pertence a um e somente um conjunto de nível de .  Conjuntos de nível de .   Folheação por hiperboloides.        Os dois exemplos acima são casos especiais das superfícies quádricas . Um tabela com suas equações reduzidas para os casos não degenerados pode ser vista aqui . Em Álgebra Linear II você verá um método que explicita um sistema de coordenadas onde a equação de uma dada superfície quádrica se escreve na forma reduzida.  Se é uma função diferenciável e é uma curva derivável tal que a imagem de está contida na superfície de nível de , então , para todo . Utilizando uma generalização (relativamente óbvia) do para o , temos que Isto mostra que o vetor é ortogonal a todas as curvas cuja imagem está contida numa superfície de nível de , motivando naturalmente a   Plano Tangente a uma superficie de nível Sejam uma função diferenciável e . O plano tangente à superfície de nível de no ponto é o conjunto dos vetores tangentes a todas as curvas cuja imagens contenham e estejam contidas em .  Desta maneira, é o vetor normal a este plano e, como pertence a ele, terá equação geral ou ainda,   Superfície de nível e seu plano tangente.   Superfície de nível e seu plano tangente.      Esta equação generaliza a situação anterior, quando a superfície é o gráfico de uma função de duas variáveis, . Basta ver que a superfície de nível da função é precisamente o gráfico de e que, para todo , ou seja, , temos , de acordo com o que se segue após a . É um bom exercício recuperar a equação presente naquela definição a partir da equação .   Observe que nem sempre uma curva de nível de uma função é o gráfico de função . O mesmo ocorre para superfícies de nível de funções a três variáveis: a esfera acima é uma superfície de nível que não é gráfico de uma função a duas variáveis (por quê?).   Nos casos mais simples, quando as funções envolvidas são lineares, as curvas e superfícies de nível são, respectivamente, retas a planos, cujos vetores são normais são os gradientes das funções (constantes nesse caso). Tais retas ou planos são determinados resolvendo-se um sistema com uma equação e duas ou três variáveis. Para determinar, nesses sistemas, quais são as variáveis dependentes ou livres precisamos descobrir quais os coeficientes do vetor normal a esta reta ou plano são não nulos. Isso equivale à projeção da reta (respectivamente plano) de nível sobre os eixos das demais variáveis ser bijetora.  Se temos duas superfícies de nível, nesse caso mais simples planos, que não são paralelos ou coincidentes, sua interseção é uma reta. Os vetores normais de tais planos (os gradientes das funções lineares que os definem) são linearmente independentes e a direção da reta de interseção é justamente o produto vetorial desses vetores normais, já que a reta está contida em ambos os planos e portanto ortogonal aos dois vetores normais simultaneamente.  Algebricamente, encontrar esta reta consiste em resolver um sistema linear com duas equações e três variáveis. A condição para dizer quando uma das variáveis do sistema é a variável livre traduz-se na componente correspondente do vetor diretor da solução (o produto vetorial mencionado acima) ser não nula. Isso garante que a projeção da solução sobre o eixo coordenado daquela variável é bijetora.  Quando as funções envolvidas não são lineares, as curvas ou superfícies de nível deixam de ser retas ou planos, curvando-se de alguma maneira, consequentemente as soluções dos sistemas, agora não lineares, de ser retas ou planos, também curvando-se. A linearização dessa situação (considerando-se as retas tangentes às curvas de nível ou os planos tangentes às superfícies de nível) remontam aos parágrafos anteriores. Apresentamos a seguir três resultados que nos permitem, sob boas condições, escrever as retas tangentes a curvas de nível ou interseção de superfícies de nível, bem como planos tangente a uma superfície de nível.   Retas tangentes a curvas de nível  Sejam uma função diferenciável no aberto e tal que . Se existe uma função derivável , com , , tal que , e , para todo , então   Caso tal exista mesmo quando , então devemos ter obrigatoriamente que .   Suponha a existência de tal , podemos pensar na curva , e usar a regra da cadeia ( ) para derivar a relação , obtendo  Como , temos a tese.     Planos tangentes a superfícies de nível  Sejam uma função diferenciável no aberto e tal que . Se existe uma função derivável , com , , tal que , e , para todo , então    A demonstração deste resultado é análoga à anterior, considerando agora duas curvas: para cada fixado, e, para cada fixado, . Derive então, em relação a e , respectivamente, as expressões e .     Retas tangentes a interseção de superfícies de nível  Sejam funções diferenciáveis no aberto e tal que . Se existe uma função derivável , com tal que , e , para todo , então onde   O determinante que pedimos ser não nulo nas hipóteses é o que garante que podemos ter a primeira componente de não nula, que é então paralelo vetor .   Temos aqui um sistema não linear com duas equações: Derivando em relação a , com a regra da cadeia ( ), obtemos, para cada fixado e omitindo os pontos de aplicação, um sistema linear com duas equações nas incógnitas e :   Aplicando a regra de Cramer para a solução de sistemas lineares, temos as fórmulas do enunciado.    Isto nos permite determinar a reta tangente a uma curva que é dada pela interseção de duas superfícies de nível, mesmo que não consigamos paramatrizá-la. Mas atenção: é necessário saber que tal interseção é uma curva derivável! Retomamos, como exemplo, o , para determinar a reta tangente à interseção das duas superfícies no ponto : consideramos e que têm como superfícies de nível aquelas do exercício. Seus gradientes são e . Assim, o vetor diretor da reta pedida é um múltiplo não nulo de por exemplo , e a reta tangente é , .  Interseções de superfícies de nível e sua reta tangente.   Interseções de superfícies de nível e sua reta tangente.      Os três resultados acima admitem recíprocas locais , ou seja, se as funções que definemas as curvas ou superfícies de nível do enunciados são de classe (condição que pode ser relaxada) e as derivadas parciais não nulas dos enunciados acontecem num ponto da curva de nível, superfície de nível ou interseção de superfícies de nível, então é possível exibir uma vizinhança de tal objeto como gráfico de uma curva ou função, tambémm de classe , com as derivadas dadas pelas fórmulas acima. Estes resultados são os celebrados Teoremas das Funções Implícitas, que admitem um enunciado unificado em contexto bem mais gerais. Um texto com demonstrações simples e muitos exemplos para as situações de interesse neste curso pode ser acessado aqui . Agradecemos ao professor Oswaldo Rio Branco do IME-USP pelo excelente texto que preparou.  "
},
{
  "id": "sup_nivel",
  "level": "2",
  "url": "ap_supnivel.html#sup_nivel",
  "type": "Definição",
  "number": "A.7.1",
  "title": "Superfície de nível.",
  "body": " Superfície de nível Sejam e . A superfície de nível ou conjunto de nível do nível de é o conjunto  "
},
{
  "id": "example-11",
  "level": "2",
  "url": "ap_supnivel.html#example-11",
  "type": "Exemplo",
  "number": "A.7.2",
  "title": "",
  "body": "  Determine as curvas nível da função dada por .    Começamos observando que o domínio de é todo o e sua imagem é o conjunto dos reais não-negativos, indicado por . Com isso, temos , se . Vejamos o que acontece com :  : ;  : . Neste caso, as soluções são exatamente pontos da esfera de raio , centrada na origem.  Observamos então que cada ponto de pertence a um e somente um conjunto de nível de .  Conjuntos de nível de .   Folheação por esferas       "
},
{
  "id": "example-12",
  "level": "2",
  "url": "ap_supnivel.html#example-12",
  "type": "Exemplo",
  "number": "A.7.4",
  "title": "",
  "body": "  Determine as curvas nível da função dada por .    Começamos observando que o domínio de é todo o e sua imagem é o conjunto de todos os reais, indicado por . Com isso, temos  : . Neste caso, o conjunto solução é um hiperboloide de uma folha .  : , a equação do cone reto;  : , que define um hiperboloide de duas folhas.  Novamente observamos então que cada ponto de pertence a um e somente um conjunto de nível de .  Conjuntos de nível de .   Folheação por hiperboloides.       "
},
{
  "id": "def_planotangente",
  "level": "2",
  "url": "ap_supnivel.html#def_planotangente",
  "type": "Definição",
  "number": "A.7.6",
  "title": "Plano Tangente a uma superficie de nível.",
  "body": " Plano Tangente a uma superficie de nível Sejam uma função diferenciável e . O plano tangente à superfície de nível de no ponto é o conjunto dos vetores tangentes a todas as curvas cuja imagens contenham e estejam contidas em . "
},
{
  "id": "fig_appltgsupniv",
  "level": "2",
  "url": "ap_supnivel.html#fig_appltgsupniv",
  "type": "Figura",
  "number": "A.7.7",
  "title": "",
  "body": " Superfície de nível e seu plano tangente.   Superfície de nível e seu plano tangente.    "
},
{
  "id": "remark-27",
  "level": "2",
  "url": "ap_supnivel.html#remark-27",
  "type": "Nota",
  "number": "A.7.8",
  "title": "",
  "body": " Observe que nem sempre uma curva de nível de uma função é o gráfico de função . O mesmo ocorre para superfícies de nível de funções a três variáveis: a esfera acima é uma superfície de nível que não é gráfico de uma função a duas variáveis (por quê?).  "
},
{
  "id": "prop_curvaniv",
  "level": "2",
  "url": "ap_supnivel.html#prop_curvaniv",
  "type": "Proposição",
  "number": "A.7.9",
  "title": "Retas tangentes a curvas de nível.",
  "body": " Retas tangentes a curvas de nível  Sejam uma função diferenciável no aberto e tal que . Se existe uma função derivável , com , , tal que , e , para todo , então   Caso tal exista mesmo quando , então devemos ter obrigatoriamente que .   Suponha a existência de tal , podemos pensar na curva , e usar a regra da cadeia ( ) para derivar a relação , obtendo  Como , temos a tese.   "
},
{
  "id": "prop_supniv",
  "level": "2",
  "url": "ap_supnivel.html#prop_supniv",
  "type": "Proposição",
  "number": "A.7.11",
  "title": "Planos tangentes a superfícies de nível.",
  "body": " Planos tangentes a superfícies de nível  Sejam uma função diferenciável no aberto e tal que . Se existe uma função derivável , com , , tal que , e , para todo , então    A demonstração deste resultado é análoga à anterior, considerando agora duas curvas: para cada fixado, e, para cada fixado, . Derive então, em relação a e , respectivamente, as expressões e .   "
},
{
  "id": "prop_intsupniv",
  "level": "2",
  "url": "ap_supnivel.html#prop_intsupniv",
  "type": "Proposição",
  "number": "A.7.12",
  "title": "Retas tangentes a interseção de superfícies de nível.",
  "body": " Retas tangentes a interseção de superfícies de nível  Sejam funções diferenciáveis no aberto e tal que . Se existe uma função derivável , com tal que , e , para todo , então onde   O determinante que pedimos ser não nulo nas hipóteses é o que garante que podemos ter a primeira componente de não nula, que é então paralelo vetor .   Temos aqui um sistema não linear com duas equações: Derivando em relação a , com a regra da cadeia ( ), obtemos, para cada fixado e omitindo os pontos de aplicação, um sistema linear com duas equações nas incógnitas e :   Aplicando a regra de Cramer para a solução de sistemas lineares, temos as fórmulas do enunciado.   "
},
{
  "id": "p-558",
  "level": "2",
  "url": "ap_supnivel.html#p-558",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "necessário "
},
{
  "id": "ap_maxminloc",
  "level": "1",
  "url": "ap_maxminloc.html",
  "type": "Seção",
  "number": "A.8",
  "title": "Máximos e mínimos locais em abertos de <span class=\"process-math\">\\(\\R^2\\)<\/span>",
  "body": " Máximos e mínimos locais em abertos de   Iniciamos agora o estudo dos máximos e mínimos locais de funções de várias variáveis reais. Neste primeiro momento vamos tratar a situação análoga ao que vimos no Cálculo 1 para pontos de máximo e mínimo em intervalos abertos: o e o teste da segunda derivada, dado no .  Para tanto, estabelecemos as definições de ponts de máximos e mínimos (locais e globais) de uma função (faremos com , mas tudo se generaliza funções de variáveis a valores reais).   A bola aberta de centro em e raio de é o conjunto    Sejam e . Dizemos que  é um ponto de máximo local de se existe tal que para todo , temos .  é um ponto de mínimo local de se existe tal que para todo , temos .  é um ponto de máximo (global) de se para todo .  é um ponto de mínimo (global) de se para todo .    Se admite derivadas parciais em e , então é um ponto crítico de .   Assista ao vídeo abaixo para uma motivação dos resultados a seguir.  Máximos e mínimos locais.      Sejam um aberto contendo o ponto e uma função que admite derivadas parciais em . Se é um opnto de máximo ou mínimo local de , então .   Se é, digamos um ponto de máximo local, então é ponto de máximo local de num intervalo aberto , contendo o ponto . Segue-se então, do que  De maneira análoga, é ponto de máximo local de , e então Ou seja, .   É importante mencionar que a recíproca do teorema acima, assim como visto na nota do para o caso de uma veriável, é falsa: considere , definida em todo o plano (um aberto). Temos que e este não é um ponto de máximo local, nem de mínimo local, já que , para quaisquer .  Um ponto crítico, no domínio de uma função, que não é de máximo local nem de mínimo local é chamado de ponto de sela daquela função. A nomenclatura vem da semelhança do gráfico da função acima com uma sela. Veja a .  A fim de tentar generalizar o teste da segunda para classificar os pontos críticos de funções de duas variáveis, precisamos levar em conta as quatro segundas derivadas e aplicar técnica análoga à empregada no . Para isso apresentamos rapidamente a fórmula de Taylor para funções de classe a duas variáveis reais.   (Fórmula de Taylor)  Sejam de classe no ponto do convexo . Então onde com no segmento ligando a .   Basta aplicar a fórmula de Taylor de uma variável real, centrada em , para a função com , para num intervalo abeto contendo tal que a imagem de esteja contida em .  Assim, temos e, aplicando a regra da cadeia sucessivas vezes, que   Logo, ou seja, a fórmula apresentada no enunciado, onde .    Com isso podemos apresentar o chamado critério do Hessiano :   Sejam um aberto e um ponto crítico da função , de classe em . Se  e , então é um ponto de mínimo local de .  e , então é um ponto de máximo local de .  então é um ponto de sela de .  Aqui é a matriz Hessiana de em .  Veja aqui .  Note que este resultado nada afirma no caso em que . Tais casos devem ser estudados de maneira \"artesanal\".   "
},
{
  "id": "bola",
  "level": "2",
  "url": "ap_maxminloc.html#bola",
  "type": "Definição",
  "number": "A.8.1",
  "title": "",
  "body": "A bola aberta de centro em e raio de é o conjunto  "
},
{
  "id": "pto_maxmincrit",
  "level": "2",
  "url": "ap_maxminloc.html#pto_maxmincrit",
  "type": "Definição",
  "number": "A.8.2",
  "title": "",
  "body": " Sejam e . Dizemos que  é um ponto de máximo local de se existe tal que para todo , temos .  é um ponto de mínimo local de se existe tal que para todo , temos .  é um ponto de máximo (global) de se para todo .  é um ponto de mínimo (global) de se para todo .    Se admite derivadas parciais em e , então é um ponto crítico de .  "
},
{
  "id": "vid_maxminloc",
  "level": "2",
  "url": "ap_maxminloc.html#vid_maxminloc",
  "type": "Figura",
  "number": "A.8.3",
  "title": "",
  "body": " Máximos e mínimos locais.   "
},
{
  "id": "teo_crit",
  "level": "2",
  "url": "ap_maxminloc.html#teo_crit",
  "type": "Teorema",
  "number": "A.8.4",
  "title": "",
  "body": " Sejam um aberto contendo o ponto e uma função que admite derivadas parciais em . Se é um opnto de máximo ou mínimo local de , então .   Se é, digamos um ponto de máximo local, então é ponto de máximo local de num intervalo aberto , contendo o ponto . Segue-se então, do que  De maneira análoga, é ponto de máximo local de , e então Ou seja, .  "
},
{
  "id": "p-568",
  "level": "2",
  "url": "ap_maxminloc.html#p-568",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "ponto de sela "
},
{
  "id": "theorem-10",
  "level": "2",
  "url": "ap_maxminloc.html#theorem-10",
  "type": "Teorema",
  "number": "A.8.5",
  "title": "(Fórmula de Taylor).",
  "body": " (Fórmula de Taylor)  Sejam de classe no ponto do convexo . Então onde com no segmento ligando a .   Basta aplicar a fórmula de Taylor de uma variável real, centrada em , para a função com , para num intervalo abeto contendo tal que a imagem de esteja contida em .  Assim, temos e, aplicando a regra da cadeia sucessivas vezes, que   Logo, ou seja, a fórmula apresentada no enunciado, onde .   "
},
{
  "id": "p-573",
  "level": "2",
  "url": "ap_maxminloc.html#p-573",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "critério do Hessiano "
},
{
  "id": "teo_hess",
  "level": "2",
  "url": "ap_maxminloc.html#teo_hess",
  "type": "Teorema",
  "number": "A.8.6",
  "title": "",
  "body": " Sejam um aberto e um ponto crítico da função , de classe em . Se  e , então é um ponto de mínimo local de .  e , então é um ponto de máximo local de .  então é um ponto de sela de .  Aqui é a matriz Hessiana de em .  Veja aqui .  Note que este resultado nada afirma no caso em que . Tais casos devem ser estudados de maneira \"artesanal\".  "
},
{
  "id": "ap_maxmincond",
  "level": "1",
  "url": "ap_maxmincond.html",
  "type": "Seção",
  "number": "A.9",
  "title": "Máximos e mínimos condicionados",
  "body": " Máximos e mínimos condicionados   Agora vamos tratar do caso análogo ao do estudo de máximos e mínimo de funções de uma variável real em intervalos fechados. Começamos estabelecendo uma generalização para intervalos em domínios de dimensão mais alta.   Um conjunto é compacto se for fechado e limitado. Por fechado entendemos um conjunto cujo complementar é aberto (todos os pontos de um aberto são pontos interiores, ou seja, centros de bolas abertas inteiramente contidas nele). Um conjunto é limitado se existe uma bola aberta centrada na origem que o contém.  Como no Cálculo 1, temos o    Se é uma função contínua no compacto então existem e em tais que  Em outras palavras, toda função contínua definida num compacto assume valores máximo e mínimo (globais).    A prova deste resultado é um tanto técnica e pode ser negligenciada (momentaneamente).   Decida se a função , definida no conjunto admite valor máximo ou mínimo. Em caso afirmativo determine os pontos onde isso ocorre.   Observamos que é contínua (mais que isso até) e o conjunto é compacto. Pelo acima, temos que a função assume valor máximo e também valor mínimo em .  Para determinar os pontos onde isso ocorre, notamos que o conjunto tem interior não vazio, que é o disco \"aberto\" , e uma fronteira não vazia, que é a circunferência . No interior, os candidatos a máximo e mínimo são determinados usando-se o : onde temos .  A fronteira, neste caso especial, pode ser parametrizada por , . Sobre os pontos da froteira temos que se comporta como que é uma função contínua de uma variável real definida num intervalo fechado. Sabemos o que fazer!  Se é ponto de máximo ou mínimo de no interior do intervalo, devemos ter . Nesse caso podemos calcular explicitamente: Anotamos os valores nesses pontos:   Comparando os valores em destaque temos que o valor máximo de em é e o mínimo é , atingidos nos pontos indicados acima. O ponto é um candidato onde a função não atingiu seu valor máximo nem seu valor mínimo (você já sabia isso da seção anterior).  Note que se usássemo a regra da cadeia para derivar , observaríamos que os candidatos a máximo e mínimo são aqueles onde o gradiente de é ortogonal a . Guarde isso!    Considerando o exemplo acima (principalmente a observação ao final da solução), assista o vídeo abaixo para motivar os resultados seguintes.  Máximos e mínimos condicionados.     Agora estamos em condições de enunciar os resultados sobre máximos e mínimos de funções a várias (duas ou três) variáveis com restrições dadas por conjuntos de nível ou interseções deles.   Sejam de classe e , com , para todo . Se é um ponto de máximo ou mínimo local de sobre (detalhes do que é isso ficam claros na demonstração), então é um conjunto linearmente dependente.   Apresentamos aqui apenas um esboço da demonstração. Como, em particular, , e é de classe , usamos o Teorema da Função Implícita (veja e a observação sobre sua recíproca ao fim daquela seção) para exibir uma curva de classe , , com um intervalo aberto contendo tal que . Sabemos, inclusive, que tal curva é o gráfico de como função de ou vice-versa).  Tratamos aqui apenas o caso de máximo local (o outro é análogo). Sendo é um ponto de máximo local de sobre , ou seja, para todo , onde é um intervalo aberto que contém e está contido em , temos que  Agora, como parametriza uma parte da curva de nível de então, do , temos que . As duas expressões em destaque garantem, uma vez que estamos em , que , como desejado.   Lembramos que é linearmente dependente em se, e somente se, a matriz , com as coordenadas de tais vetores nas linhas, tem determinante nulo.   Uma outra maneira de enxergar esse resultado é que, num ponto de máximo ou de mínimo de sobre uma curva de nível de , a projeção de na direção tangente à tal curva de nível é nula. Em outras palavras, alguém que se desloca sobre a curva de nível de \"não sente\" as derivadas de quando passa por um de seus pontos de máximo ou mínimo.  Importante ressaltar que, como já estamos acostumados, não vale a recíproca, ou seja, se os gradientes são paralelos num ponto, não temos garantia que esse ponto é um de máximo ou mínimo local sobre aquela restrição.  Um exemplo interessante onde o teorema ajuda, mas não é suficiente para encontrar a solução está aqui .  De maneira análoga, o resultado acima vale para máximos ou mínimos locais de funções a três variáveis sobre uma superfície de nível de outra função:   Sejam de classe e , com , para todo . Se é um ponto de máximo ou mínimo local de sobre , então é um conjunto linearmente dependente.   A ideia aqui é essencialmente a mesma que a da proposição anterior, observando que para toda curva cuja imagem está contida na superfície de nível de , .  Isso mostra, como visto na , que é ortogonal ao plano tangente à em , assim como é ortogonal ao plano tangente à nesse ponto. Dois vetores de ortogonais a uma mesmo plano devem ser paralelos.   Lembramos que é linearmente dependente em se, e somente se, o produto vetorial .   Finalmente, estabelecemos o resultado para pontos de máximo ou mínimo local sobre a interseção de duas superfícies de nível de duas outras funções:   Sejam de classe e , com , para todo . Se é um ponto de máximo ou mínimo local de sobre , então é um conjunto linearmente dependente.   Nada inédito: como e são de classe , a condição garante, através do Teorema da Função Implícita, a existência de uma função de classe , , onde é um intervalo aberto contendo tal que e . Já sabemos que .  Se é máximo (ou mínimo) local de ao longo de , então  A condição destacada acima, e a hipótese inicial sobre independência linear dos gradientes de e , garantem que , ou seja, é linearmente dependente, como desejado.   Lembramos que é linearmente dependente em se, e somente se, o produto misto .   "
},
{
  "id": "compacto",
  "level": "2",
  "url": "ap_maxmincond.html#compacto",
  "type": "Definição",
  "number": "A.9.1",
  "title": "",
  "body": "Um conjunto é compacto se for fechado e limitado. Por fechado entendemos um conjunto cujo complementar é aberto (todos os pontos de um aberto são pontos interiores, ou seja, centros de bolas abertas inteiramente contidas nele). Um conjunto é limitado se existe uma bola aberta centrada na origem que o contém. "
},
{
  "id": "teo_wei",
  "level": "2",
  "url": "ap_maxmincond.html#teo_wei",
  "type": "Teorema",
  "number": "A.9.2",
  "title": "",
  "body": "  Se é uma função contínua no compacto então existem e em tais que  Em outras palavras, toda função contínua definida num compacto assume valores máximo e mínimo (globais).   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "ap_maxmincond.html#example-13",
  "type": "Exemplo",
  "number": "A.9.3",
  "title": "",
  "body": " Decida se a função , definida no conjunto admite valor máximo ou mínimo. Em caso afirmativo determine os pontos onde isso ocorre.   Observamos que é contínua (mais que isso até) e o conjunto é compacto. Pelo acima, temos que a função assume valor máximo e também valor mínimo em .  Para determinar os pontos onde isso ocorre, notamos que o conjunto tem interior não vazio, que é o disco \"aberto\" , e uma fronteira não vazia, que é a circunferência . No interior, os candidatos a máximo e mínimo são determinados usando-se o : onde temos .  A fronteira, neste caso especial, pode ser parametrizada por , . Sobre os pontos da froteira temos que se comporta como que é uma função contínua de uma variável real definida num intervalo fechado. Sabemos o que fazer!  Se é ponto de máximo ou mínimo de no interior do intervalo, devemos ter . Nesse caso podemos calcular explicitamente: Anotamos os valores nesses pontos:   Comparando os valores em destaque temos que o valor máximo de em é e o mínimo é , atingidos nos pontos indicados acima. O ponto é um candidato onde a função não atingiu seu valor máximo nem seu valor mínimo (você já sabia isso da seção anterior).  Note que se usássemo a regra da cadeia para derivar , observaríamos que os candidatos a máximo e mínimo são aqueles onde o gradiente de é ortogonal a . Guarde isso!   "
},
{
  "id": "vid_maxmincond",
  "level": "2",
  "url": "ap_maxmincond.html#vid_maxmincond",
  "type": "Figura",
  "number": "A.9.4",
  "title": "",
  "body": " Máximos e mínimos condicionados.   "
},
{
  "id": "teo_lag2",
  "level": "2",
  "url": "ap_maxmincond.html#teo_lag2",
  "type": "Teorema",
  "number": "A.9.5",
  "title": "",
  "body": " Sejam de classe e , com , para todo . Se é um ponto de máximo ou mínimo local de sobre (detalhes do que é isso ficam claros na demonstração), então é um conjunto linearmente dependente.   Apresentamos aqui apenas um esboço da demonstração. Como, em particular, , e é de classe , usamos o Teorema da Função Implícita (veja e a observação sobre sua recíproca ao fim daquela seção) para exibir uma curva de classe , , com um intervalo aberto contendo tal que . Sabemos, inclusive, que tal curva é o gráfico de como função de ou vice-versa).  Tratamos aqui apenas o caso de máximo local (o outro é análogo). Sendo é um ponto de máximo local de sobre , ou seja, para todo , onde é um intervalo aberto que contém e está contido em , temos que  Agora, como parametriza uma parte da curva de nível de então, do , temos que . As duas expressões em destaque garantem, uma vez que estamos em , que , como desejado.   Lembramos que é linearmente dependente em se, e somente se, a matriz , com as coordenadas de tais vetores nas linhas, tem determinante nulo.  "
},
{
  "id": "teo_lag31",
  "level": "2",
  "url": "ap_maxmincond.html#teo_lag31",
  "type": "Teorema",
  "number": "A.9.7",
  "title": "",
  "body": " Sejam de classe e , com , para todo . Se é um ponto de máximo ou mínimo local de sobre , então é um conjunto linearmente dependente.   A ideia aqui é essencialmente a mesma que a da proposição anterior, observando que para toda curva cuja imagem está contida na superfície de nível de , .  Isso mostra, como visto na , que é ortogonal ao plano tangente à em , assim como é ortogonal ao plano tangente à nesse ponto. Dois vetores de ortogonais a uma mesmo plano devem ser paralelos.   Lembramos que é linearmente dependente em se, e somente se, o produto vetorial .  "
},
{
  "id": "teo_lag32",
  "level": "2",
  "url": "ap_maxmincond.html#teo_lag32",
  "type": "Teorema",
  "number": "A.9.9",
  "title": "",
  "body": " Sejam de classe e , com , para todo . Se é um ponto de máximo ou mínimo local de sobre , então é um conjunto linearmente dependente.   Nada inédito: como e são de classe , a condição garante, através do Teorema da Função Implícita, a existência de uma função de classe , , onde é um intervalo aberto contendo tal que e . Já sabemos que .  Se é máximo (ou mínimo) local de ao longo de , então  A condição destacada acima, e a hipótese inicial sobre independência linear dos gradientes de e , garantem que , ou seja, é linearmente dependente, como desejado.   Lembramos que é linearmente dependente em se, e somente se, o produto misto .  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Ficha técnica",
  "number": "",
  "title": "Ficha técnica",
  "body": " Este material foi preparado utilizando o PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
