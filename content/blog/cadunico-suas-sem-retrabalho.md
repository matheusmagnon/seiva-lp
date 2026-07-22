---
title: "CadÚnico e SUAS: cruzar dados sem retrabalho manual"
description: "Entenda a diferença entre CadÚnico e os registros do SUAS, por que a equipe acaba digitando o mesmo dado duas vezes, e como reduzir esse retrabalho."
date: "2026-06-05"
slug: "cadunico-suas-sem-retrabalho"
category: "operacao"
keywords: ["cadúnico", "cadastro único", "suas", "retrabalho", "cadsuas", "integração de dados", "cras"]
---

Em muitos CRAS, a mesma família é cadastrada mais de uma vez. Primeiro no Cadastro Único para Programas Sociais (CadÚnico), preenchido no sistema do Governo Federal para que a família tenha acesso a benefícios como o Bolsa Família ou a tarifa social de energia. Depois, de novo, no prontuário do PAIF ou do PAEFI, com nome, CPF, composição familiar e endereço repetidos manualmente porque o sistema de acompanhamento da unidade não conversa com o CadÚnico. O técnico datilografa os mesmos campos duas vezes — às vezes três, se ainda existir uma planilha paralela de controle.

Esse retrabalho não é só perda de tempo. É risco de erro de digitação, de divergência entre o que está no CadÚnico e o que está no prontuário, e de desperdício da informação que já foi levantada com esforço em uma entrevista anterior.

## O que é o CadÚnico (e o que ele não é)

O Cadastro Único para Programas Sociais é o instrumento do Governo Federal usado para identificar e caracterizar famílias de baixa renda, servindo de base para a concessão de benefícios sociais federais, estaduais e municipais. Ele é operacionalizado localmente — em geral pelo próprio CRAS ou por um setor de cadastro vinculado à secretaria — mas o sistema em si (o Sistema de Cadastro Único, o V7) pertence ao governo federal.

É importante não confundir CadÚnico com CadSUAS. O CadSUAS é outro sistema, também federal, mas com finalidade diferente: nele o município registra suas unidades (CRAS, CREAS, Centro Pop), a equipe de referência e os dados que alimentam o Registro Mensal de Atendimentos ([RMA](/blog/como-preencher-rma-sem-retrabalho)). São dois cadastros federais distintos, com propósitos distintos, e a confusão entre os dois é uma das causas de retrabalho: gestores tentam usar informação de um para preencher o outro manualmente, quando cada um tem sua própria lógica de atualização.

## Onde o retrabalho realmente acontece

O problema não é o CadÚnico em si — é a distância entre ele e o sistema de acompanhamento familiar usado no dia a dia da equipe técnica. Na prática, o retrabalho aparece em três momentos:

1. **Na entrevista inicial.** A família chega para acolhida, é identificada como candidata a atualização cadastral, e o técnico faz duas entrevistas de composição familiar em momentos diferentes — uma para o CadÚnico, outra para o prontuário do PAIF — quando poderia ser praticamente a mesma coleta de dado.
2. **Na atualização cadastral.** O CadÚnico requer atualização a cada dois anos ou quando há mudança relevante na composição familiar. Se essa atualização não é sinalizada no prontuário da família, a equipe de acompanhamento pode continuar trabalhando com dado desatualizado — endereço antigo, renda que já mudou, composição familiar que não reflete mais a realidade.
3. **No cruzamento para elegibilidade de benefícios eventuais.** Muitos benefícios eventuais municipais (cesta básica, auxílio funeral, auxílio natalidade) exigem conferir se a família está no CadÚnico e qual a renda registrada. Se esse dado não está acessível dentro do sistema onde o técnico já está trabalhando, ele precisa abrir outro sistema, buscar por CPF ou NIS, anotar em papel e voltar para o prontuário — um processo que consome minutos preciosos em cada atendimento.

## O que muda com integração de dados bem-feita

Não é possível — nem desejável — que um sistema municipal substitua o CadÚnico ou grave dados diretamente nele; a titularidade e o fluxo de atualização do Cadastro Único seguem regras próprias do MDS. O que é possível, e o que reduz de fato o retrabalho, é o sistema de gestão do CRAS permitir:

- **Registrar o Número de Identificação Social (NIS) da família** no prontuário, evitando redigitar composição familiar completa quando ela já foi levantada.
- **Sinalizar prazo de atualização cadastral** vencido ou próximo do vencimento, para que a busca ativa priorize essas famílias em vez de depender da memória do técnico.
- **Vincular o histórico de atendimento do PAIF/PAEFI ao mesmo registro de família**, para que renda, composição familiar e situação de vulnerabilidade não precisem ser reconstituídas a cada nova consulta.

Isso é diferente de "integração automática" no sentido de puxar dado do sistema federal em tempo real — o que depende de webservices e acordos que a maioria dos municípios pequenos e médios não tem infraestrutura para operar sozinha. É, na prática, eliminar a redigitação dentro do próprio sistema municipal: uma vez que o dado da família foi capturado, ele fica disponível para todos os módulos que precisam dele — atendimento, [prontuário](/blog/prontuario-suas-o-que-e), relatório de RMA, e diagnóstico territorial.

## O custo real de manter dado duplicado

Quando cada técnico mantém sua própria referência de composição familiar — em caderno, em planilha ou até de memória — o problema não aparece de imediato. Aparece quando:

- Um técnico sai de férias ou é remanejado, e o substituto não tem acesso ao dado que só existia no controle pessoal do colega.
- A coordenação precisa saber quantas famílias referenciadas no território já estão no CadÚnico e quantas não estão, para orientar busca ativa — e a resposta exige contar planilha por planilha.
- Chega a hora de fechar o RMA do mês e conferir se os atendimentos registrados batem com a composição familiar correta — e a equipe descobre divergências entre o que está no papel e o que está no sistema.

Esse é o mesmo problema, com outra roupagem, de quem [ainda perde atendimento em planilha paralela](/blog/perder-atendimento-em-planilha-no-cras): a informação existe, mas está fragmentada em lugares que não conversam entre si. A saída não é abandonar o CadÚnico — é impossível e não seria desejável, já que ele segue norma federal própria — mas parar de recriar, dentro da rotina do CRAS, o mesmo dado que a família já forneceu.

## Uma rotina possível

Municípios que reduziram esse retrabalho normalmente adotaram uma prática simples: toda entrevista de composição familiar feita para fins de acompanhamento do PAIF ou do PAEFI já registra, no mesmo formulário, o NIS e a data da última atualização cadastral no CadÚnico. Isso não substitui a atualização formal no sistema federal — que continua sendo feita separadamente, pelo responsável pelo cadastro — mas evita que o técnico do PAIF precise refazer, do zero, uma entrevista de composição familiar que a equipe do cadastro já fez há poucos meses.

Um sistema de gestão especializado para o SUAS ajuda exatamente nesse ponto: mantém o prontuário da família como referência única, sinaliza quando a atualização cadastral está vencida, e evita que o mesmo dado precise ser digitado em dois lugares diferentes só porque os sistemas não foram pensados para conversar entre si.

Se sua equipe ainda redigita composição familiar, renda e endereço toda vez que muda de sistema, vale ver como o SEIVA organiza esse fluxo numa demonstração — geralmente é possível eliminar boa parte da redigitação nas primeiras semanas de uso.
