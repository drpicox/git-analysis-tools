export default [
  {
    title: "Choose map",
    number: 1,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/1",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "- When a player creates a map, it is saved.\r\n- Before starting a game, you have the ability to choose between created maps.",
    userContentEdits: {
      nodes: [
        {
          diff:
            "- When a player creates a map, it is saved.\r\n- Before starting a game, you have the ability to choose between created maps.",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "- When a player creates a map, it is saved.\r\n- Before starting a game, you have the ability to choose betweeen created maps.",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "RemovedFromProjectEvent"
        },
        {
          __typename: "ClosedEvent"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "pending"
        }
      ]
    },
    projectCards: {
      nodes: []
    }
  },
  {
    title: "Expandir la classe monster añadiendo el atributo “HP”",
    number: 2,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/2",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "HP\r\nLa vida es un valor numérico entero que disminuye en función de los ataques del jugador. Cada monstruo tiene un valor inicial.",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "ClosedEvent"
        }
      ]
    },
    labels: {
      nodes: []
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Backlog"
          }
        }
      ]
    }
  },
  {
    title: "Refresh de la pagina automatic:",
    number: 3,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/3",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "Cada 5 segons es refresca automaticament la pàgina. \r\nUna possible solució pot ser executar F5. \r\nAl ser una mica guarra la solució inicial es requereix fer una análisis més acurat\r\n",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "ClosedEvent"
        },
        {
          __typename: "RemovedFromProjectEvent"
        }
      ]
    },
    labels: {
      nodes: []
    },
    projectCards: {
      nodes: []
    }
  },
  {
    title:
      "Expandir la classe monster añadiendo el atributo “Evasion” y “Hit Rating”",
    number: 4,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/4",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "\r\n\r\nPer fer el testing es necessita implementar una classe amb les mateixes funcions però sense ser randomly.\r\n\r\nEvasión (probabilitat de que un monstre esquivi el cop)\r\nCuando un jugador intenta atacar un monstruo, la probabilidad de atacar se reduce según el valor de evasión.\r\n\r\nProbabilidad de golpear\r\n\tCuando un monstruo ataca un jugador, la probabilidad de que el ataque haga daño    viene definida por éste valor.",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "ClosedEvent"
        },
        {
          __typename: "IssueComment"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "pending"
        },
        {
          name: "weight-13"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Backlog"
          }
        }
      ]
    }
  },
  {
    title: "Elegir mapa:",
    number: 5,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/5",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "### Choose map\r\n\r\nYou can now choose which map do you wanna play in!\r\n\r\n(Build a World - here we will make a map for the players to build from for testing porpouse)\r\n\r\nWe introduce map choosing, first of all, we created a map for you to build, you can now name the map so its easier to recognize. After you built it, you will have the ability to choose from this map and the default.\r\n\r\n**Choose your new battleground!**\r\n\r\nPress Game on the menu... now you can see a list of the maps available for you to play in. As you can observe, the map that you just build is available! press it and go for the win.\r\n\r\nList of maps:\r\n- Name: default, Created at: start of the times. Rooms: Home Sweet..., Monsters: none, Items: Key....\r\n\r\n-Name: new map, Created at: 1 minut ago. Rooms: .... \r\n\r\n**Customize your own map, go back, play it again**\r\n\r\nYou can play in any map now, if you are playing in a map and its not for you? Go back and choose another. You can still build your own map and before starting a game, play on it. You can still choose a default map, which will be the last one you built. Have fun!\r\n\r\n\r\n\r\n\r\n\r\n",
    userContentEdits: {
      nodes: [
        {
          diff:
            "### Choose map\r\n\r\nYou can now choose which map do you wanna play in!\r\n\r\n(Build a World - here we will make a map for the players to build from for testing porpouse)\r\n\r\nWe introduce map choosing, first of all, we created a map for you to build, you can now name the map so its easier to recognize. After you built it, you will have the ability to choose from this map and the default.\r\n\r\n**Choose your new battleground!**\r\n\r\nPress Game on the menu... now you can see a list of the maps available for you to play in. As you can observe, the map that you just build is available! press it and go for the win.\r\n\r\nList of maps:\r\n- Name: default, Created at: start of the times. Rooms: Home Sweet..., Monsters: none, Items: Key....\r\n\r\n-Name: new map, Created at: 1 minut ago. Rooms: .... \r\n\r\n**Customize your own map, go back, play it again**\r\n\r\nYou can play in any map now, if you are playing in a map and its not for you? Go back and choose another. You can still build your own map and before starting a game, play on it. You can still choose a default map, which will be the last one you built. Have fun!\r\n\r\n\r\n\r\n\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "### Choose map\r\n\r\nYou can now choose which map do you wanna play in!\r\n\r\n(Build a World - here we will make a map for the players to build from for testing porpouse)\r\n\r\nWe introduce map choosing, first of all, we created a map for you to build. After you built it, you will have the ability to choose from this map and the default.\r\n\r\n**Choose your new battleground!**\r\n\r\nPress Game on the menu... now you can see a list of the maps available for you to play in. As you can observe, the map that you just build is available! press it and go for the win.\r\n\r\n**Customize your own map, go back, play it again**\r\n\r\nYou can play in any map now, if you are playing in a map and its not for you? Go back and choose another. You can still build your own map and before starting a game, play on it. You can still choose a default map, which will be the last one you built. Have fun! \r\n\r\n\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "- Cuando se crea un mapa, guardarlo.\r\n- Habilidad de elegir mapa de los guardados antes de empezar un juego.",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "UnassignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Backlog"
        },
        {
          __typename: "UnassignedEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "ClosedEvent"
        },
        {
          __typename: "RemovedFromProjectEvent"
        }
      ]
    },
    labels: {
      nodes: []
    },
    projectCards: {
      nodes: []
    }
  },
  {
    title: "N monsters en una room:",
    number: 6,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/6",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body: "El jugador pot trobar-se més d’un monstre per habitació.",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "ClosedEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 49,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/49",
            merged: false,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: []
            },
            mergedBy: null,
            mergeCommit: null
          }
        }
      ]
    },
    labels: {
      nodes: []
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Backlog"
          }
        }
      ]
    }
  },
  {
    title: "Loot table for monsters:",
    number: 7,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/7",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "Al matar un monstruo, hay una probabilidad de que proporcione un objeto,según una tabla de probabilidades, por ejemplo.\r\n\r\nMosquito\r\nSmall Sword - 10% \r\nLarge Sword - 5%\r\nNada - 85%",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "ClosedEvent"
        }
      ]
    },
    labels: {
      nodes: []
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Backlog"
          }
        }
      ]
    }
  },
  {
    title: "N items en una Room:",
    number: 8,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/8",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "### More Items\r\nIt is too difficult to get away. Now you can find more objects in the same room\r\n\r\nNow you can beat stronger monsters without worrying about your health. Find the best objects and kill the strongest monsters.\r\n\r\nChoose a weapon\r\nYour character will have to choose between two weapons that he will find in the same room.\r\n\r\n```\r\n\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nThere is the red swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the red swordstone weapon.\r\nPlayer has the green swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nPlayer has the red swordstone weapon.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n### Take more than one object\r\nA room where we can take multiple objects.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nPlayer item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "### More Items\r\nIt is too difficult to get away. Now you can find more objects in the same room\r\n\r\nNow you can beat stronger monsters without worrying about your health. Find the best objects and kill the strongest monsters.\r\n\r\nChoose a weapon\r\nYour character will have to choose between two weapons that he will find in the same room.\r\n\r\n```\r\n\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nThere is the red swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the red swordstone weapon.\r\nPlayer has the green swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nPlayer has the red swordstone weapon.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n### Take more than one object\r\nA room where we can take multiple objects.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nPlayer item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "És massa difícil arribar lluny. Ara podreu trobar més objectes en una mateixa habitació\r\n\r\nAra podràs vèncer monstres més forts sense preocupar-te de la teva salut. Troba els millors objectes i mata als monstres més forts.\r\n\r\nEscollir una arma\r\nEl teu personatge haurà d'escollir entre dues armes que trobarà en la mateixa habitació.\r\n```\r\n\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nThere is the red swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the red swordstone weapon.\r\nPlayer has the green swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nPlayer has the red swordstone weapon.\r\nPlayer has 16 life points.\r\n\r\n```\r\nAgafar més d'un objecte\r\nUna habitació amb múltiples objectes diferents\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nPlayer item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff: "El jugador puede encontrarse una habitación con varios Item",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "Issue"
          }
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "Issue"
          }
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "RemovedFromProjectEvent"
        },
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "ClosedEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "ReopenedEvent"
        },
        {
          __typename: "LabeledEvent"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "help wanted"
        },
        {
          name: "weight-5"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Develop"
          }
        }
      ]
    }
  },
  {
    title: "Keys Inventory:",
    number: 9,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/9",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      'Did you found another key? Do not worry, you can keep all key items you find in you new bag.\r\n\r\n **Keys** \r\nYour avatar will have more probability to open doors if you can keep keys in your bag.\r\n\r\n```\r\n> get\r\nHome sweet home.\r\nYou are at the main room of your home. There is a bowl  on the table with two keys\r\nRoom item: principal key, shed key\r\nExits: south (closed)\r\nPlayer has 16 life points\r\n>get\r\nGarden.\r\nThe garden has a well, a hole and a shed.\r\nThe door is closed, but you remember that has other key in you bag and try to open\r\nExits: south (closed)\r\nPlayer has 16 life points\r\nPlayer has key "principal key"\r\nPlayer has key "shed key\r\n```',
    userContentEdits: {
      nodes: [
        {
          diff:
            'Did you found another key? Do not worry, you can keep all key items you find in you new bag.\r\n\r\n **Keys** \r\nYour avatar will have more probability to open doors if you can keep keys in your bag.\r\n\r\n```\r\n> get\r\nHome sweet home.\r\nYou are at the main room of your home. There is a bowl  on the table with two keys\r\nRoom item: principal key, shed key\r\nExits: south (closed)\r\nPlayer has 16 life points\r\n>get\r\nGarden.\r\nThe garden has a well, a hole and a shed.\r\nThe door is closed, but you remember that has other key in you bag and try to open\r\nExits: south (closed)\r\nPlayer has 16 life points\r\nPlayer has key "principal key"\r\nPlayer has key "shed key\r\n```',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            'Did you find another key? Do not worry, you can keep all key items you find in you new bag.\r\n\r\n **Keys** \r\nYour avatar will have more probability to open doors if you can keep keys in your bag.\r\n\r\n> get\r\nHome sweet home.\r\nYou are at the main room of your home. There is a bowl  on the table with two keys\r\nRoom item: principal key, shed key\r\nExits: south (closed)\r\nPlayer has 16 life points\r\n>get\r\nGarden.\r\nThe garden has a well, a hole and a shed.\r\nThe door is closed, but you remember that has other key in you bag and try to open\r\nExits: south (closed)\r\nPlayer has 16 life points\r\nPlayer has key "principal key"\r\nPlayer has key "shed key',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            'Did you found another key? Do not worry, you can keep all key items you find in you new bag.\r\n\r\n **Keys** \r\nYour avatar will have more probability to open doors if you can keep keys in your bag.\r\n\r\n> get\r\nHome sweet home.\r\nYou are at the main room of your home. There is a bowl  on the table with two keys\r\nRoom item: principal key, shed key\r\nExits: south (closed)\r\nPlayer has 16 life points\r\n>get\r\nGarden.\r\nThe garden has a well, a hole and a shed.\r\nThe door is closed, but you remember that has other key in you bag and try to open\r\nExits: south (closed)\r\nPlayer has 16 life points\r\nPlayer has key "principal key"\r\nPlayer has key "shed key',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            'Does you found another key? Do not worry, you can keep key items in you new bag.\r\n\r\n **Keys** \r\nYour avatar will has more probability to open doors if you can keep keys in your bag.\r\n\r\n> get\r\nHome sweet home.\r\nYou are at the main room of your home. There is a bowl  on the table with two keys\r\nRoom item: principal key, shed key\r\nExits: south (closed)\r\nPlayer has 16 life points\r\n>get\r\nGarden.\r\nThe garden has a well, a hole and a shed.\r\nThe door is closed, but you remember that has other key in you bag and try to open\r\nExits: south (closed)\r\nPlayer has 16 life points\r\nPlayer has key "principal key"\r\nPlayer has key "shed key',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            'Does you found another key? Do not worry, you can keep items in you new bag.\r\n\r\n **Keys** \r\nYour avatar will has more probability to open doors if you can keep keys in your bag.\r\n\r\n> get\r\nHome sweet home.\r\nYou are at the main room of your home. There is a bowl  on the table with two keys\r\nRoom item: principal key, shed key\r\nExits: south (closed)\r\nPlayer has 16 life points\r\n>get\r\nGarden.\r\nThe garden has a well, a hole and a shed.\r\nThe door is closed, but you remember that has other key in you bag and try to open\r\nExits: south (closed)\r\nPlayer has 16 life points\r\nPlayer has key "principal key"\r\nPlayer has key "shed key',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            'Does you found another key? Do not worry, you can keep items in you new bag.\r\n\r\n** Keys **\r\nYour avatar will has more probability to open doors if you can keep keys in your bag.\r\n\r\n`> get\r\nHome sweet home\r\nYou are at the main room of your home. There is a bowl  on the table with two keys`\r\nRoom item: principal key, shed key\r\nExits: south (closed)\r\nPlayer has 16 life points\r\n>get\r\nThe garden has a well, a hole and a shed.\r\nThe door is closed, but you remember that has other key in you bag and try to open\r\nExits: south (closed)\r\nPlayer has 16 life points\r\nPlayer has key "principal key"\r\nPlayer has key "shed key`',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "El jugador puede recoger objetos de diferentes habitaciones y cargarlos en una “bolsa” o “inventario”.",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "Issue"
          }
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "Issue"
          }
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "RemovedFromProjectEvent"
        },
        {
          __typename: "ClosedEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 28,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/28",
            merged: false,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/28#pullrequestreview-172441484",
                  author: {
                    login: "drpicox"
                  },
                  state: "COMMENTED"
                },
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/28#pullrequestreview-175837314",
                  author: {
                    login: "drpicox"
                  },
                  state: "CHANGES_REQUESTED"
                }
              ]
            },
            mergedBy: null,
            mergeCommit: null
          }
        }
      ]
    },
    labels: {
      nodes: []
    },
    projectCards: {
      nodes: []
    }
  },
  {
    title: "Eventos en salas",
    number: 10,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/10",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "Una sala puede contener un evento. Para el test, se implementará el evento “trampa”, en el que al entrar en una sala pierdes vida.\r\n1.-  Jugador entra en una habitación\r\n[go North]\r\n\r\n2.- Jugador entra en la habitación North\r\nText: “While going down the stairs, you trip and fall onto the floor. You lose 10 HP.”\r\n",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "RemovedFromProjectEvent"
        },
        {
          __typename: "ClosedEvent"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "pending"
        },
        {
          name: "weight-3"
        }
      ]
    },
    projectCards: {
      nodes: []
    }
  },
  {
    title: "Drop items",
    number: 11,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/11",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "(requires Task #9 and Task #8 )\r\n\r\n### Drop Items\r\n\r\nSometimes its hard to move around carrying so many items, we have a solution for you, now you can drop items you don't want! Right now you can have N items in your inventory, so in case you have N items and you need another one, you can choose which item you drop so you have a slot available for the new item you want.\r\n\r\n**Pick up an item**\r\nObviously, before having the ability to drop an item, you must have an item in your inventory.\r\n\r\nYou enter a room and pick up an item: (N = 1)\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone, Key.\r\nExists, north, west (closed).\r\n> get Swordstone\r\n```\r\n\r\n**Oops worng item!**\r\n\r\nSo you picked up the Swordstone which is useless if you want to exit West, you'll need the Key, so you can choose which item to drop. N items that you can have in your inventory is 1\r\nso in these case you can only drop the Swordstone.\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key.\r\nPlayer items: Swordstone.\r\nExists: north, west (closed).\r\n> drop Swordstone\r\n```\r\n**Get the right item**\r\n\r\nNow you can get the key and go ahead west!\r\n\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key, Swordstone.\r\nExists: north, west (closed).\r\n> get Key\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone.\r\nPlayer items: Key.\r\nExists: north, west.\r\n> west\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "(requires Task #9 and Task #8 )\r\n\r\n### Drop Items\r\n\r\nSometimes its hard to move around carrying so many items, we have a solution for you, now you can drop items you don't want! Right now you can have N items in your inventory, so in case you have N items and you need another one, you can choose which item you drop so you have a slot available for the new item you want.\r\n\r\n**Pick up an item**\r\nObviously, before having the ability to drop an item, you must have an item in your inventory.\r\n\r\nYou enter a room and pick up an item: (N = 1)\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone, Key.\r\nExists, north, west (closed).\r\n> get Swordstone\r\n```\r\n\r\n**Oops worng item!**\r\n\r\nSo you picked up the Swordstone which is useless if you want to exit West, you'll need the Key, so you can choose which item to drop. N items that you can have in your inventory is 1\r\nso in these case you can only drop the Swordstone.\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key.\r\nPlayer items: Swordstone.\r\nExists: north, west (closed).\r\n> drop Swordstone\r\n```\r\n**Get the right item**\r\n\r\nNow you can get the key and go ahead west!\r\n\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key, Swordstone.\r\nExists: north, west (closed).\r\n> get Key\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone.\r\nPlayer items: Key.\r\nExists: north, west.\r\n> west\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "Un jugador puede dejar al suelo un Item de su inventario (requiere Tarea 2)\r\n1.-  Jugador entra en una habitación\r\nItem: key1\r\nPlayer Weapon:\r\nRoom Item:\r\n\r\n2.- Jugador deja Item en el suelo\r\n(Seleccionar de inventario) [drop key1]\r\nRoom Item: key1\r\n",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "ClosedEvent"
        },
        {
          __typename: "RemovedFromProjectEvent"
        }
      ]
    },
    labels: {
      nodes: []
    },
    projectCards: {
      nodes: []
    }
  },
  {
    title: "Items that increases atributes",
    number: 12,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/12",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "\r\nSo far, food has recovered our lost lives, however, magical foods have appeared that not only reclaim life but also increase your maximum life. Our character always starts with 16 points of life, when we find foods like this, maximum life will increase.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n> attack \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the magic potatoe\r\nPlayer has 14 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\n\r\n\r\nWhen you are with life to the fullest we can also take advantage of the magical foods to increase our life.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nPlayer has 18 life points.\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "\r\nSo far, food has recovered our lost lives, however, magical foods have appeared that not only reclaim life but also increase your maximum life. Our character always starts with 16 points of life, when we find foods like this, maximum life will increase.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n> attack \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the magic potatoe\r\nPlayer has 14 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\n\r\n\r\nWhen you are with life to the fullest we can also take advantage of the magical foods to increase our life.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nPlayer has 18 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "Fins ara el menjar ens recuperava la vida perduda, però, han aparegut aliments màgics que no només recuperen vida sinó que augmenten la teva vida màxima.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n> attack \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the magic potatoe\r\nPlayer has 14 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nPlayer has 18 life points.\r\n```\r\n\r\nQuan estàs amb la vida al màxim també podrem aprofitar els aliments màgics per augmentar la vida.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nPlayer has 18 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "Hay items que pueden aumentar los atributos de un jugador por encima de su máximo. Exemplo: un jugador con 100/100 HP,  se come una “Magic Potato” y su HP pasa a ser 110/110.\r\n1.-  Jugador entra en una habitación\r\nPlayer Life: 100/100\r\nRoom Item: “Magic Potato”\r\n2.- Jugador come “Magic Potato”\r\n[get Magic Potato]\r\nPlayer Life: 110/110\r\nRoom Item: \r\n",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "RemovedFromProjectEvent"
        },
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "ClosedEvent"
        },
        {
          __typename: "IssueComment"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "pending"
        },
        {
          name: "weight-5"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Backlog"
          }
        }
      ]
    }
  },
  {
    title: "Choose map",
    number: 13,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/13",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "### Choose map\r\n\r\nYou can now choose which map do you wanna play in!\r\n\r\n(Build a World - here we will make a map for the players to build from for testing porpouse)\r\n\r\nWe introduce map choosing, first of all, we created a map for you to build, you will se that there is a new attribute to fill: Name. You MUST name the map so its easier to recognize when choosing. After you built it, you will have the ability to choose from this map and the default.\r\n\r\n**Choose your new battleground!**\r\n\r\nPress Game on the menu... now you can see a list of the maps available for you to play in. As you can observe, the map that you just build is available! press it and go for the win.\r\n\r\n```\r\nList of maps:\r\n- Name: default, Created at: start of the times. Rooms: Home Sweet..., Monsters: none, Items: Key....\r\n\r\n- Name: new map, Created at: 1 minut ago. Rooms: .... \r\n>new map\r\n```\r\n\r\n**Customize your own map, go back, play it again**\r\n\r\nYou can play in any map now, if you are playing in a map and its not for you? Go back and choose another. You can still build your own map and before starting a game, play on it. You can still choose a default map, which will be the last one you built. Have fun!\r\n\r\n",
    userContentEdits: {
      nodes: [
        {
          diff:
            "### Choose map\r\n\r\nYou can now choose which map do you wanna play in!\r\n\r\n(Build a World - here we will make a map for the players to build from for testing porpouse)\r\n\r\nWe introduce map choosing, first of all, we created a map for you to build, you will se that there is a new attribute to fill: Name. You MUST name the map so its easier to recognize when choosing. After you built it, you will have the ability to choose from this map and the default.\r\n\r\n**Choose your new battleground!**\r\n\r\nPress Game on the menu... now you can see a list of the maps available for you to play in. As you can observe, the map that you just build is available! press it and go for the win.\r\n\r\n```\r\nList of maps:\r\n- Name: default, Created at: start of the times. Rooms: Home Sweet..., Monsters: none, Items: Key....\r\n\r\n- Name: new map, Created at: 1 minut ago. Rooms: .... \r\n>new map\r\n```\r\n\r\n**Customize your own map, go back, play it again**\r\n\r\nYou can play in any map now, if you are playing in a map and its not for you? Go back and choose another. You can still build your own map and before starting a game, play on it. You can still choose a default map, which will be the last one you built. Have fun!\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "### Choose map\r\n\r\nYou can now choose which map do you wanna play in!\r\n\r\n(Build a World - here we will make a map for the players to build from for testing porpouse)\r\n\r\nWe introduce map choosing, first of all, we created a map for you to build, you can now name the map so its easier to recognize. After you built it, you will have the ability to choose from this map and the default.\r\n\r\n**Choose your new battleground!**\r\n\r\nPress Game on the menu... now you can see a list of the maps available for you to play in. As you can observe, the map that you just build is available! press it and go for the win.\r\n\r\n```\r\nList of maps:\r\n- Name: default, Created at: start of the times. Rooms: Home Sweet..., Monsters: none, Items: Key....\r\n\r\n- Name: new map, Created at: 1 minut ago. Rooms: .... \r\n>new map\r\n```\r\n\r\n**Customize your own map, go back, play it again**\r\n\r\nYou can play in any map now, if you are playing in a map and its not for you? Go back and choose another. You can still build your own map and before starting a game, play on it. You can still choose a default map, which will be the last one you built. Have fun!\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "### Choose map\r\n\r\nYou can now choose which map do you wanna play in!\r\n\r\n(Build a World - here we will make a map for the players to build from for testing porpouse)\r\n\r\nWe introduce map choosing, first of all, we created a map for you to build, you can now name the map so its easier to recognize. After you built it, you will have the ability to choose from this map and the default.\r\n\r\n**Choose your new battleground!**\r\n\r\nPress Game on the menu... now you can see a list of the maps available for you to play in. As you can observe, the map that you just build is available! press it and go for the win.\r\n\r\n```\r\nList of maps:\r\n- Name: default, Created at: start of the times. Rooms: Home Sweet..., Monsters: none, Items: Key....\r\n\r\n- Name: new map, Created at: 1 minut ago. Rooms: .... \r\n```\r\n\r\n**Customize your own map, go back, play it again**\r\n\r\nYou can play in any map now, if you are playing in a map and its not for you? Go back and choose another. You can still build your own map and before starting a game, play on it. You can still choose a default map, which will be the last one you built. Have fun!\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "### Choose map\r\n\r\nYou can now choose which map do you wanna play in!\r\n\r\n(Build a World - here we will make a map for the players to build from for testing porpouse)\r\n\r\nWe introduce map choosing, first of all, we created a map for you to build, you can now name the map so its easier to recognize. After you built it, you will have the ability to choose from this map and the default.\r\n\r\n**Choose your new battleground!**\r\n\r\nPress Game on the menu... now you can see a list of the maps available for you to play in. As you can observe, the map that you just build is available! press it and go for the win.\r\n\r\nList of maps:\r\n- Name: default, Created at: start of the times. Rooms: Home Sweet..., Monsters: none, Items: Key....\r\n\r\n- Name: new map, Created at: 1 minut ago. Rooms: .... \r\n\r\n**Customize your own map, go back, play it again**\r\n\r\nYou can play in any map now, if you are playing in a map and its not for you? Go back and choose another. You can still build your own map and before starting a game, play on it. You can still choose a default map, which will be the last one you built. Have fun!\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "### Choose map\r\n\r\nYou can now choose which map do you wanna play in!\r\n\r\n(Build a World - here we will make a map for the players to build from for testing porpouse)\r\n\r\nWe introduce map choosing, first of all, we created a map for you to build, you can now name the map so its easier to recognize. After you built it, you will have the ability to choose from this map and the default.\r\n\r\n**Choose your new battleground!**\r\n\r\nPress Game on the menu... now you can see a list of the maps available for you to play in. As you can observe, the map that you just build is available! press it and go for the win.\r\n\r\nList of maps:\r\n- Name: default, Created at: start of the times. Rooms: Home Sweet..., Monsters: none, Items: Key....\r\n\r\n-Name: new map, Created at: 1 minut ago. Rooms: .... \r\n\r\n**Customize your own map, go back, play it again**\r\n\r\nYou can play in any map now, if you are playing in a map and its not for you? Go back and choose another. You can still build your own map and before starting a game, play on it. You can still choose a default map, which will be the last one you built. Have fun!\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 39,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/39",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/39#pullrequestreview-175795098",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/1ff1c1b999cba6fad6a70baa5e5ec02dcbf64451"
            }
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "UnlabeledEvent"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-13"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Drop item",
    number: 14,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/14",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "(requires Task #9 and Task #8 )\r\n\r\n### Drop Item\r\n\r\nSometimes its hard to move around carrying so many items, we have a solution for you, now you can drop items you don't want! Right now you can have N items in your inventory, so in case you have N items and you need another one, you can choose which item you drop so you have a slot available for the new item you want.\r\n\r\n**Pick up an item**\r\nObviously, before having the ability to drop an item, you must have an item in your inventory.\r\n\r\nYou enter a room and pick up an item: (N = 1)\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone, Key.\r\nExists, north, west (closed).\r\n> get Swordstone\r\n```\r\n\r\n**Oops wrong item!**\r\n\r\nSo you picked up the Swordstone which is useless if you want to exit West, you'll need the Key, so you can choose which item to drop. N items that you can have in your inventory is 1\r\nso in these case you can only drop the Swordstone.\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key.\r\nPlayer items: Swordstone.\r\nExists: north, west (closed).\r\n> drop Swordstone\r\n```\r\n**Get the right item**\r\n\r\nNow you can get the key and go ahead west!\r\n\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key, Swordstone.\r\nExists: north, west (closed).\r\n> get Key\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone.\r\nPlayer items: Key.\r\nExists: north, west.\r\n> west\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "(requires Task #9 and Task #8 )\r\n\r\n### Drop Item\r\n\r\nSometimes its hard to move around carrying so many items, we have a solution for you, now you can drop items you don't want! Right now you can have N items in your inventory, so in case you have N items and you need another one, you can choose which item you drop so you have a slot available for the new item you want.\r\n\r\n**Pick up an item**\r\nObviously, before having the ability to drop an item, you must have an item in your inventory.\r\n\r\nYou enter a room and pick up an item: (N = 1)\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone, Key.\r\nExists, north, west (closed).\r\n> get Swordstone\r\n```\r\n\r\n**Oops wrong item!**\r\n\r\nSo you picked up the Swordstone which is useless if you want to exit West, you'll need the Key, so you can choose which item to drop. N items that you can have in your inventory is 1\r\nso in these case you can only drop the Swordstone.\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key.\r\nPlayer items: Swordstone.\r\nExists: north, west (closed).\r\n> drop Swordstone\r\n```\r\n**Get the right item**\r\n\r\nNow you can get the key and go ahead west!\r\n\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key, Swordstone.\r\nExists: north, west (closed).\r\n> get Key\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone.\r\nPlayer items: Key.\r\nExists: north, west.\r\n> west\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "(requires Task #9 and Task #8 )\r\n\r\n### Drop Items\r\n\r\nSometimes its hard to move around carrying so many items, we have a solution for you, now you can drop items you don't want! Right now you can have N items in your inventory, so in case you have N items and you need another one, you can choose which item you drop so you have a slot available for the new item you want.\r\n\r\n**Pick up an item**\r\nObviously, before having the ability to drop an item, you must have an item in your inventory.\r\n\r\nYou enter a room and pick up an item: (N = 1)\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone, Key.\r\nExists, north, west (closed).\r\n> get Swordstone\r\n```\r\n\r\n**Oops wrong item!**\r\n\r\nSo you picked up the Swordstone which is useless if you want to exit West, you'll need the Key, so you can choose which item to drop. N items that you can have in your inventory is 1\r\nso in these case you can only drop the Swordstone.\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key.\r\nPlayer items: Swordstone.\r\nExists: north, west (closed).\r\n> drop Swordstone\r\n```\r\n**Get the right item**\r\n\r\nNow you can get the key and go ahead west!\r\n\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key, Swordstone.\r\nExists: north, west (closed).\r\n> get Key\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone.\r\nPlayer items: Key.\r\nExists: north, west.\r\n> west\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "(requires Task #9 and Task #8 )\r\n\r\n### Drop Items\r\n\r\nSometimes its hard to move around carrying so many items, we have a solution for you, now you can drop items you don't want! Right now you can have N items in your inventory, so in case you have N items and you need another one, you can choose which item you drop so you have a slot available for the new item you want.\r\n\r\n**Pick up an item**\r\nObviously, before having the ability to drop an item, you must have an item in your inventory.\r\n\r\nYou enter a room and pick up an item: (N = 1)\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone, Key.\r\nExists, north, west (closed).\r\n> get Swordstone\r\n```\r\n\r\n**Oops worng item!**\r\n\r\nSo you picked up the Swordstone which is useless if you want to exit West, you'll need the Key, so you can choose which item to drop. N items that you can have in your inventory is 1\r\nso in these case you can only drop the Swordstone.\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key.\r\nPlayer items: Swordstone.\r\nExists: north, west (closed).\r\n> drop Swordstone\r\n```\r\n**Get the right item**\r\n\r\nNow you can get the key and go ahead west!\r\n\r\n```\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Key, Swordstone.\r\nExists: north, west (closed).\r\n> get Key\r\nHome sweet home.\r\nYou are in front of your home, main door is closed. \r\nRoom item: Swordstone.\r\nPlayer items: Key.\r\nExists: north, west.\r\n> west\r\n```",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "LabeledEvent"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-5"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Backlog"
          }
        }
      ]
    }
  },
  {
    title: "N monsters in a room",
    number: 15,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/15",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "# N monsters in a room\r\n\r\nDid you think it was very easy to move from a room with a single monster?\r\n\r\n> MUAHAHAHAHA\r\n\r\n Poor of you ... you do not know what awaits you.\r\n\r\n\r\n## Epic fights.\r\n\r\n\r\nDid you think you would find a monster in the rooms only? You are wrong! You can find different monsters in the same room.\r\n\r\nYou can check it by entering one of the rooms. You just have to make a **look**, and you will see what monsters you are in the room.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nThere is the fly monster.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen attacks, attacks on the 2 monsters at the same time with the same evil, in this case you kill a monster and the other continues alive. You get 2 bad points for each monster.\r\n\r\n```\r\n> attack \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nThe monster attacked you back. You killed the monster.\r\nThe monster attacked you back. \r\nPlayer has 12 life points.\r\n\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "# N monsters in a room\r\n\r\nDid you think it was very easy to move from a room with a single monster?\r\n\r\n> MUAHAHAHAHA\r\n\r\n Poor of you ... you do not know what awaits you.\r\n\r\n\r\n## Epic fights.\r\n\r\n\r\nDid you think you would find a monster in the rooms only? You are wrong! You can find different monsters in the same room.\r\n\r\nYou can check it by entering one of the rooms. You just have to make a **look**, and you will see what monsters you are in the room.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nThere is the fly monster.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen attacks, attacks on the 2 monsters at the same time with the same evil, in this case you kill a monster and the other continues alive. You get 2 bad points for each monster.\r\n\r\n```\r\n> attack \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nThe monster attacked you back. You killed the monster.\r\nThe monster attacked you back. \r\nPlayer has 12 life points.\r\n\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# N monsters in a room\r\n\r\nDid you think it was very easy to move from a room with a single monster?\r\n\r\n> MUAHAHAHAHA\r\n\r\n Poor of you ... you do not know what awaits you.\r\n\r\n\r\n## Epic fights.\r\n\r\n\r\nDid you think you would find a monster in the rooms only? You are wrong! You can find different monsters in the same room.\r\n\r\nYou can check it by entering one of the rooms. You just have to make a **look**, and you will see what monsters you are in the room.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen attacks, attacks on the 2 monsters at the same time with the same evil, in this case you kill a monster and the other continues alive. You get 2 bad points for each monster.\r\n\r\n```\r\n> attack \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThe monster attacked you back. You killed the monster.\r\nThe monster attacked you back. \r\nPlayer has 12 life points.\r\n\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# N monsters in a room\r\n\r\nDid you think it was very easy to move from a room with a single monster?\r\n\r\n> MUAHAHAHAHA\r\n\r\n Poor of you ... you do not know what awaits you.\r\n\r\n\r\n## Epic fights.\r\n\r\n\r\nDid you think you would find a monster in the rooms only? You are wrong! You can find different monsters in the same room.\r\n\r\nYou can check it by entering one of the rooms. You just have to make a **look**, and you will see what monsters you are in the room.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n```\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# N monsters in a room\r\n\r\nDid you think it was very easy to move from a room with a single monster?\r\n\r\n> MUAHAHAHAHA\r\n\r\n Poor of you ... you do not know what awaits you.\r\n\r\n\r\n## Epic fights.\r\n\r\n\r\nDid you think you would find a monster in the rooms only? You are wrong! You can find different monsters in the same room.\r\n\r\nYou can check it by entering one of the rooms. You just have to make a **look**, and you will see what monsters you are in the room.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster and mosquito monster.\r\nPlayer has 16 life points.\r\n```\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# N monsters in a room\r\n\r\nDid you think it was very easy to move from a room with a single monster?\r\n\r\n> MUAHAHAHAHA\r\n\r\n Poor of you ... you do not know what awaits you.\r\n\r\n\r\n## Epic fights.\r\n\r\n\r\nDid you think you would find a monster in the rooms only? You are wrong! You can find different monsters in the same room.\r\n\r\nYou can check it by entering one of the rooms. You just have to make a ** look **, and you will see what monsters you are in the room.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster and mosquito monster.\r\nPlayer has 16 life points.\r\n```\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# N monsters in a room\r\n\r\nDid you think it was very easy to move from room to single monster?\r\n\r\n> MUAHAHAHAHA\r\n\r\n Poor of you ... you do not know what awaits you.\r\n\r\n\r\n## Epic fights.\r\n\r\n\r\nDid you think you would find a monster in the rooms only? You are wrong! You can find different monsters in the same room.\r\n\r\nYou can check it by entering one of the rooms. You just have to make a ** look **, and you will see what monsters you are in the room.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster and mosquito monster.\r\nPlayer has 16 life points.\r\n```\r\n",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "Issue"
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 55,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/55",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/55#pullrequestreview-177330906",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/d8098f0943a79a8b68c5b27b937102a6a47f60f4"
            }
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Merged",
          projectColumnName: "Annotated"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Annotated",
          projectColumnName: "Merged"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-8"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Monsters with life points",
    number: 16,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/16",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account the monsters resisting your attacks overtime, it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nThe monsters are evolving! Now each of them will have life.\r\n\r\n```\r\n> look \r\nCrystal Beach\r\nThere is one of the most beautiful beaches. \r\nThere is the mosquito monster.\r\nMonster has 1 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\nOr another example:\r\n\r\n```\r\n> look \r\nCupboard\r\nYou are at the main room of your home. \r\nThere is the fly monster.\r\nMonster has 15 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n```\r\n> attack\r\nCupboard\r\nYou are at the main room of your home. \r\nMonster has 3 life points\r\nPlayer life points: 16.\r\n\r\n```\r\n```\r\n> attack\r\nCupboard\r\nYou are at the main room of your home. \r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\nIn case your attack does not exceed their life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. \r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
    userContentEdits: {
      nodes: [
        {
          diff:
            "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account the monsters resisting your attacks overtime, it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nThe monsters are evolving! Now each of them will have life.\r\n\r\n```\r\n> look \r\nCrystal Beach\r\nThere is one of the most beautiful beaches. \r\nThere is the mosquito monster.\r\nMonster has 1 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\nOr another example:\r\n\r\n```\r\n> look \r\nCupboard\r\nYou are at the main room of your home. \r\nThere is the fly monster.\r\nMonster has 15 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n```\r\n> attack\r\nCupboard\r\nYou are at the main room of your home. \r\nMonster has 3 life points\r\nPlayer life points: 16.\r\n\r\n```\r\n```\r\n> attack\r\nCupboard\r\nYou are at the main room of your home. \r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\nIn case your attack does not exceed their life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. \r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account the monsters resisting your attacks overtime, it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nThe monsters are evolving! Now each of them will have life.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. \r\nThere is the fly monster.\r\nMonster has 4 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. \r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\nOr another example:\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. \r\nThere is the fly monster.\r\nMonster has 15 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. \r\nMonster has 3 life points\r\nPlayer life points: 16.\r\n\r\n```\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. \r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\nIn case your attack does not exceed their life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. \r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account the monsters resisting your attacks overtime, it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nThe monsters are evolving! Now each of them will have life.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. \r\nThere is the fly monster.\r\nMonster has 4 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. \r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\n\r\nIn case your attack does not exceed their life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. \r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account the monsters resisting your attacks overtime, it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nThe monsters are evolving! Now each of them will have life.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nThere is the fly monster.\r\nMonster has 4 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\n\r\nIn case your attack does not exceed their life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nBarn\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account the monsters resisting your attacks overtime, it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nThe monsters are evolving! Now each of them will have life.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster.\r\nMonster has 4 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\n\r\nIn case your attack does not exceed their life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nBarn\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account the monsters resisting your attacks overtime, it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nThe monsters are evolving! Now each of them will have life.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster.\r\nMonster has 4 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\n\r\nIn case your attack does not exceed their life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account the monsters resisting your attacks overtime, it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nThe monsters are evolving! Now each of them will have life.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster.\r\nMonster has 4 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\n\r\nIn case your attack does not exceed your life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account the monsters resisting your attacks overtime, it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nEvery monster is in a process of evolution! Now each of them will have life.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster.\r\nMonster has 4 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\n\r\nIn case your attack does not exceed your life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account the monsters resisting your attacks overtime and it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nEvery monster is in a process of evolution! Now each of them will have life.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster.\r\nMonster has 4 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\n\r\nIn case your attack does not exceed your life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with life points\r\n\r\nThe monsters are evolving to make you the most complicated game!\r\n\r\n> Cthulhu monster said: I will kill you!!!\r\n\r\n From now on you will have to take more into account since, the monsters over time resisting your attacks and it will be more difficult for you to kill them.\r\n\r\n\r\n## Improved attribute (HP)\r\n\r\n\r\nEvery monster is in a process of evolution! Now each of them will have life.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the fly monster.\r\nMonster has 4 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\n\r\nIn case your attack does not exceed your life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 29,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/29",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/29#pullrequestreview-172729806",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/0291a2a3085186fb69ded2fd7722c9888adf32ba"
            }
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Merged",
          projectColumnName: "Annotated"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-8"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Annotated"
          }
        }
      ]
    }
  },
  {
    title:
      "You can only picks swords and shields better than the currently wearing.",
    number: 17,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/17",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "Does you found a more powerful weapon? take it!\r\nIf the weapon has worse attack properties than the current weapon, the avatar will not take it.\r\n\r\nBest weapon\r\n\r\n```\r\nget\r\nCabin\r\nIt is a dark and deep hut. It's hard to see the road, but something shines. You approach and it is a sword.\r\nRoom item: sword: needle\r\nPlayer has sword: wooden sword\r\nPlayer has 16 life points\r\n```\r\n\r\nBest shield\r\n\r\n```\r\nget\r\nCabin\r\nIt is a dark and deep hut. It's hard to see the road, but something shines. You approach and it is a shield.\r\nRoom item: shield: bronze shield\r\nPlayer has shield: wooden shield\r\nPlayer has 16 life points\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "Does you found a more powerful weapon? take it!\r\nIf the weapon has worse attack properties than the current weapon, the avatar will not take it.\r\n\r\nBest weapon\r\n\r\n```\r\nget\r\nCabin\r\nIt is a dark and deep hut. It's hard to see the road, but something shines. You approach and it is a sword.\r\nRoom item: sword: needle\r\nPlayer has sword: wooden sword\r\nPlayer has 16 life points\r\n```\r\n\r\nBest shield\r\n\r\n```\r\nget\r\nCabin\r\nIt is a dark and deep hut. It's hard to see the road, but something shines. You approach and it is a shield.\r\nRoom item: shield: bronze shield\r\nPlayer has shield: wooden shield\r\nPlayer has 16 life points\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "Did you find a more powerful weapon? take it!\r\nIf the weapon has worse attack properties than the current weapon, the avatar will not take it.\r\n\r\n# WEAPON\r\n\r\n\r\n**Wearing a weapon when player doesn't have**\r\n\r\n```\r\n>look\r\nCabin\r\nIt is a dark and deep hut. \r\nRoom item: wooden sword\r\nPlayer has sword: nothing\r\nPlayer has 16 life points\r\n\r\n```\r\n```\r\n>get\r\nCabin\r\nIt is a dark and deep hut. \r\nPlayer has sword: weapon: wooden sword\r\nPlayer has 16 life points\r\n```\r\n\r\n**Best  weapon**\r\n\r\n```\r\n>look\r\nDeep Cabin\r\nIt is a dark and deep hut.\r\nRoom item: weapon: bronze sword\r\nPlayer has weapon:  wooden shield\r\nPlayer has 16 life points\r\n\r\n```\r\n```\r\n>get\r\nDeep Cabin\r\nIt is a dark and deep hut.\r\nRoom item: weapon: wooden sword\r\nPlayer has weapon:  bronze shield\r\nPlayer has 16 life points\r\n\r\n```\r\n\r\n**Worse weapon**\r\nIf you are trying to take a worse weapon... Forget it, you only can take better weapons.\r\n\r\n```\r\n>look\r\nGoron defense room\r\nFinally, you managed to arrive here.\r\nRoom item: weapon: wooden sword\r\nPlayer has weapon:  bronze shield\r\nPlayer has 16 life points\r\n\r\n```\r\n```\r\n>get\r\nGoron defense room\r\nFinally, you managed to arrive here.\r\nRoom item: weapon: wooden sword\r\nPlayer has weapon:  bronze shield\r\nPlayer has 16 life points\r\n\r\n```\r\n# SHIELD\r\n\r\n**Wearing a shield when player doesn't have**\r\n\r\n```\r\n>look\r\nGoron nest\r\nYou are inside a cave in the mountain. \r\nRoom item: wooden shield\r\nPlayer has shield: nothing\r\nPlayer has 16 life points\r\n\r\n```\r\n```\r\n>get\r\nGoron nest\r\nYou are inside a cave in the mountain. \r\nRoom item: nothing \r\nPlayer has shield: wooden shield\r\nPlayer has 16 life points\r\n```\r\n\r\n**Best  shield**\r\n\r\n```\r\n>look\r\nGoron east\r\nYou managed to enter the armory.\r\nRoom item: bronze shield\r\nPlayer has shield:  wooden shield\r\nPlayer has 16 life points\r\n\r\n```\r\n```\r\n>get\r\nGoron east\r\nYou managed to enter the armory.\r\nRoom item: shield: wooden sword\r\nPlayer has shield:  bronze shield\r\nPlayer has 16 life points\r\n\r\n```\r\n\r\n**Worse shield**\r\nIf you are trying to take a worse shield... Forget it, you only can take better shields.\r\n\r\n```\r\n>look\r\nVolcano\r\nDeeper in the Goron nest, you find the cauldron of a volcano.\r\nRoom item: wooden shield\r\nPlayer has shield:  bronze shield\r\nPlayer has 16 life points\r\n\r\n```\r\n```\r\n>get\r\nGoron defense room\r\nFinally, you managed to arrive here.\r\nRoom item: wooden sword\r\nPlayer has weapon:  bronze shield\r\nPlayer has 16 life points\r\n\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "Did you find a more powerful weapon? take it!\r\nIf the weapon has worse attack properties than the current weapon, the avatar will not take it.\r\n\r\n**Wearing a weapon when player doesn't have**\r\n\r\n```\r\n>look\r\nCabin\r\nIt is a dark and deep hut. \r\nRoom item: wooden sword\r\nPlayer has sword: nothing\r\nPlayer has 16 life points\r\n\r\n```\r\n```\r\n>get\r\nCabin\r\nIt is a dark and deep hut. \r\nPlayer has sword: weapon: wooden sword\r\nPlayer has 16 life points\r\n```\r\n\r\n**Best  weapon**\r\n\r\n```\r\n>look\r\nDeep Cabin\r\nIt is a dark and deep hut.\r\nRoom item: weapon: bronze sword\r\nPlayer has weapon:  wooden shield\r\nPlayer has 16 life points\r\n\r\n```\r\n```\r\n>get\r\nDeep Cabin\r\nIt is a dark and deep hut.\r\nRoom item: weapon: wooden sword\r\nPlayer has weapon:  bronze shield\r\nPlayer has 16 life points\r\n\r\n```\r\n\r\n**Worse weapon**\r\nIf you are trying to take a worse weapon... Forget it, you only can take better weapons.\r\n\r\n```\r\n>look\r\nGoron defense room\r\nFinally, you managed to arrive here.\r\nRoom item: weapon: wooden sword\r\nPlayer has weapon:  bronze shield\r\nPlayer has 16 life points\r\n\r\n```\r\n```\r\n>get\r\nGoron defense room\r\nFinally, you managed to arrive here.\r\nRoom item: weapon: wooden sword\r\nPlayer has weapon:  bronze shield\r\nPlayer has 16 life points",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "Did you find a more powerful weapon? take it!\r\nIf the weapon has worse attack properties than the current weapon, the avatar will not take it.\r\n\r\n**Best weapon**\r\n\r\n```\r\n>get\r\nCabin\r\nIt is a dark and deep hut. It's hard to see the road, but something shines. You approach and it is a sword.\r\nRoom item: sword: needle\r\nPlayer has sword:  wooden sword\r\nPlayer has 16 life points\r\n```\r\n\r\n**Best  shield**\r\n\r\n```\r\n>get\r\nCabin\r\nIt is a dark and deep hut. It's hard to see the road, but something shines. You approach and it is a shield.\r\nRoom item: shield: bronze shield\r\nPlayer has shield:  wooden shield\r\nPlayer has 16 life points\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "Does you found a more powerful weapon? take it!\r\nIf the weapon has worse attack properties than the current weapon, the avatar will not take it.\r\n\r\n**Best weapon**\r\n```\r\n>get\r\nCabin\r\nIt is a dark and deep hut. It's hard to see the road, but something shines. You approach and it is a sword.\r\nRoom item: sword: needle\r\nPlayer has sword:  wooden sword\r\nPlayer has 16 life points```\r\n\r\n**Best  shield**\r\n```\r\n>get\r\nCabin\r\nIt is a dark and deep hut. It's hard to see the road, but something shines. You approach and it is a shield.\r\nRoom item: shield: bronze shield\r\nPlayer has shield:  wooden shield\r\nPlayer has 16 life points```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "Does you found a more powerful weapon? take it!\r\nIf the weapon has worse attack properties than the current weapon, the avatar will not take it.\r\n\r\n**Best weapon**\r\n>get\r\nCabin\r\nIt is a dark and deep hut. It's hard to see the road, but something shines. You approach and it is a sword.\r\nRoom item: sword: needle\r\nPlayer has sword:  wooden sword\r\nPlayer has 16 life points\r\n\r\n**Best  shield**\r\n>get\r\nCabin\r\nIt is a dark and deep hut. It's hard to see the road, but something shines. You approach and it is a shield.\r\nRoom item: shield: bronze shield\r\nPlayer has shield:  wooden shield\r\nPlayer has 16 life points",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff: "",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "MentionedEvent"
        },
        {
          __typename: "SubscribedEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "Issue"
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 24,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/24",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/24#pullrequestreview-172423747",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/569bd982678d14e87116a57edc6fb65d508641ac"
            }
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Merged",
          projectColumnName: "Annotated"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-3"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Annotated"
          }
        }
      ]
    }
  },
  {
    title: "Loot table for monsters",
    number: 18,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/18",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "# Loot table for monsters\r\n\r\nThe monsters used to leave an object, but from now on the objects that they leave will not be arbitrary.\r\n\r\nIt will depend on probability.\r\nFor exemple, entering a room:\r\n\r\n```\r\nMain door.\r\nThere is the door to enter, \r\nand you can see the key.\r\nBut it seems that there is a mosquito\r\npreventing you to get the key.\r\nRoom Monster: mosquito.\r\nPlayer life points: 16.\r\n> attack\r\nThe monster attacked you back. You killed the monster.\r\nMain door.\r\nThere is the door to enter, \r\nand you can see the key.\r\nBut it seems that there is a mosquito\r\npreventing you to get the key.\r\nRoom item: swordstone weapon.\r\nPlayer life points: 14.\r\n\r\n```\r\n\r\nAnd now, entering to the same room in an other game:\r\n \r\n```\r\nMain door.\r\nThere is the door to enter, \r\nand you can see the key.\r\nBut it seems that there is a mosquito\r\npreventing you to get the key.\r\nRoom Monster: mosquito.\r\nPlayer life points: 16.\r\n> attack\r\nThe monster attacked you back. You killed the monster.\r\nMain door.\r\nThere is the door to enter, \r\nand you can see the key.\r\nBut it seems that there is a mosquito\r\npreventing you to get the key.\r\nRoom item: rockshield shield.\r\nPlayer life points: 14.\r\n\r\n```\r\n\r\nEach game develops differently because the monsters will leave different items dipending on probability.\r\n",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 56,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/56",
            merged: false,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: []
            },
            mergedBy: null,
            mergeCommit: null
          }
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 79,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/79",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/79#pullrequestreview-178475882",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/7881b3e1c6f5c70312ad541603d92d03affe8b7c"
            }
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "UnlabeledEvent"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-13"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "keys inventory:",
    number: 19,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/19",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      'Did you found another key? Do not worry, you can keep all key items you find in you new bag.\r\n\r\n **Keys** \r\nYour avatar will have more probability to open doors if you can keep keys in your bag.\r\n\r\n```\r\n> get\r\nHome sweet home.\r\nYou are at the main room of your home. There is a bowl  on the table with two keys\r\nRoom item: principal key, shed key\r\nExits: south (closed)\r\nPlayer has 16 life points\r\n>get\r\nGarden.\r\nThe garden has a well, a hole and a shed.\r\nThe door is closed, but you remember that has other key in you bag and try to open\r\nExits: south (closed)\r\nPlayer has 16 life points\r\nPlayer has key "principal key"\r\nPlayer has key "shed key"\r\n```',
    userContentEdits: {
      nodes: [
        {
          diff:
            'Did you found another key? Do not worry, you can keep all key items you find in you new bag.\r\n\r\n **Keys** \r\nYour avatar will have more probability to open doors if you can keep keys in your bag.\r\n\r\n```\r\n> get\r\nHome sweet home.\r\nYou are at the main room of your home. There is a bowl  on the table with two keys\r\nRoom item: principal key, shed key\r\nExits: south (closed)\r\nPlayer has 16 life points\r\n>get\r\nGarden.\r\nThe garden has a well, a hole and a shed.\r\nThe door is closed, but you remember that has other key in you bag and try to open\r\nExits: south (closed)\r\nPlayer has 16 life points\r\nPlayer has key "principal key"\r\nPlayer has key "shed key"\r\n```',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            'Did you found another key? Do not worry, you can keep all key items you find in you new bag.\r\n\r\n **Keys** \r\nYour avatar will have more probability to open doors if you can keep keys in your bag.\r\n\r\n> get\r\nHome sweet home.\r\nYou are at the main room of your home. There is a bowl  on the table with two keys\r\nRoom item: principal key, shed key\r\nExits: south (closed)\r\nPlayer has 16 life points\r\n>get\r\nGarden.\r\nThe garden has a well, a hole and a shed.\r\nThe door is closed, but you remember that has other key in you bag and try to open\r\nExits: south (closed)\r\nPlayer has 16 life points\r\nPlayer has key "principal key"\r\nPlayer has key "shed key',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff: "",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 28,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/28",
            merged: false,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/28#pullrequestreview-172441484",
                  author: {
                    login: "drpicox"
                  },
                  state: "COMMENTED"
                },
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/28#pullrequestreview-175837314",
                  author: {
                    login: "drpicox"
                  },
                  state: "CHANGES_REQUESTED"
                }
              ]
            },
            mergedBy: null,
            mergeCommit: null
          }
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "UnlabeledEvent"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-5"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Increment Max HP",
    number: 20,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/20",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "So far, food has recovered our lost lives, however, magical foods have appeared that not only reclaim life but also increase your maximum life. Our character always starts with 16 points of life, when we find foods like this, maximum life will increase.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n> attack \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the magic potatoe\r\nPlayer has 14 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nPlayer has 16 life points.\r\n> move east\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nPlayer has 18 life points.\r\n```\r\n\r\n\r\nWhen you are with life to the fullest we can also take advantage of the magical foods to increase our life.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nPlayer has 18 life points.\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "So far, food has recovered our lost lives, however, magical foods have appeared that not only reclaim life but also increase your maximum life. Our character always starts with 16 points of life, when we find foods like this, maximum life will increase.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n> attack \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the magic potatoe\r\nPlayer has 14 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nPlayer has 16 life points.\r\n> move east\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nPlayer has 18 life points.\r\n```\r\n\r\n\r\nWhen you are with life to the fullest we can also take advantage of the magical foods to increase our life.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nPlayer has 18 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "So far, food has recovered our lost lives, however, magical foods have appeared that not only reclaim life but also increase your maximum life. Our character always starts with 16 points of life, when we find foods like this, maximum life will increase.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n> attack \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nThere is the magic potatoe\r\nPlayer has 14 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\ndisturbing little noise around.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\n\r\n\r\nWhen you are with life to the fullest we can also take advantage of the magical foods to increase our life.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nPlayer has 18 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Backlog"
        },
        {
          __typename: "UnassignedEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "Issue"
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Develop"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 38,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/38",
            merged: false,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/38#pullrequestreview-175752560",
                  author: {
                    login: "drpicox"
                  },
                  state: "CHANGES_REQUESTED"
                }
              ]
            },
            mergedBy: null,
            mergeCommit: null
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Develop"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Develop"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 60,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/60",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: []
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/d0a17a152c3be15eb3733cf02df3abedd131862c"
            }
          }
        },
        {
          __typename: "ReferencedEvent"
        },
        {
          __typename: "ReferencedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 63,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/63",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: []
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/a610b880e381be6d827d0783a1757668772de5e0"
            }
          }
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-5"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "N items in a Room",
    number: 21,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/21",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "### More Items\r\nIt is too difficult to get away. Now you can find more objects in the same room\r\n\r\nNow you can beat stronger monsters without worrying about your health. Find the best objects and kill the strongest monsters.\r\n\r\n## Choose a weapon\r\nYour character will have to choose between two weapons that he will find in the same room.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nThere is the red swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the red swordstone weapon.\r\nPlayer has the green swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nPlayer has the red swordstone weapon.\r\nPlayer has 16 life points.\r\n```\r\n\r\n## Take more than one object\r\nA room where we can take multiple objects.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nPlayer item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "### More Items\r\nIt is too difficult to get away. Now you can find more objects in the same room\r\n\r\nNow you can beat stronger monsters without worrying about your health. Find the best objects and kill the strongest monsters.\r\n\r\n## Choose a weapon\r\nYour character will have to choose between two weapons that he will find in the same room.\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nThere is the red swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the red swordstone weapon.\r\nPlayer has the green swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nPlayer has the red swordstone weapon.\r\nPlayer has 16 life points.\r\n```\r\n\r\n## Take more than one object\r\nA room where we can take multiple objects.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nPlayer item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "### More Items\r\nIt is too difficult to get away. Now you can find more objects in the same room\r\n\r\nNow you can beat stronger monsters without worrying about your health. Find the best objects and kill the strongest monsters.\r\n\r\nChoose a weapon\r\nYour character will have to choose between two weapons that he will find in the same room.\r\n\r\n```\r\n\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nThere is the red swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the red swordstone weapon.\r\nPlayer has the green swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the green swordstone weapon.\r\nPlayer has the red swordstone weapon.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n### Take more than one object\r\nA room where we can take multiple objects.\r\n\r\n```\r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nThere is the red swordstone weapon.\r\nPlayer item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the best cake ever food.\r\nPlayer has the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n> get \r\nKitchen\r\nThat is the kitchen. That is the place where you p\r\nrepare your most delicious dishes. What is that th\r\nExits: west.\r\nThere is the red swordstone weapon.\r\nRoom item: key.\r\nPlayer has 16 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Backlog"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Backlog"
        },
        {
          __typename: "UnassignedEvent"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-8"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Backlog"
          }
        }
      ]
    }
  },
  {
    title: "Choose which monster to attack",
    number: 22,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/22",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "(requires Task  [#15](https://github.com/TC-LS2/adventure-game-dublin/issues/15) )\r\n\r\nAs of now, when there are more than one monster per room, you can decide which one to attack\r\n\r\n# Choose who attacks\r\n\r\n\r\n**Is there only one monster?**\r\n\r\n```\r\n> look \r\nHome sweet home \r\nYou are in the main room of your home. There is pl \r\nenty of light and space. \r\nThere is the fly monster. \r\nPlayer has 16 life points. \r\n> attack \r\nHome sweet home \r\nYou are in the main room of your home. There is pl \r\nenty of light and space. \r\nPlayer has 16 life points. \r\n> █\r\n```\r\n\r\n**Is there more than one monster?**\r\n\r\nIf there is more than one monster, we should have the consideration of not putting the same names on the monsters. (It can be improved in the future)\r\n\r\n```\r\n> look \r\nHome sweet home \r\nYou are in the main room of your home. There is pl \r\nenty of light and space. \r\nThere is the fly monster. \r\nThere is the mosquito monster.\r\nPlayer has 16 life points. \r\n> attack mosquito\r\nHome sweet home \r\nYou are in the main room of your home. There is pl \r\nenty of light and space. \r\nThere is the fly monster. \r\nThe monster attacked you back. You killed the monster.\r\nPlayer has 14 life points. \r\n> attack fly\r\nHome sweet home \r\nYou are in the main room of your home. There is pl \r\nenty of light and space. \r\nThe monster attacked you back. \r\nPlayer has 14 life points. \r\n> █\r\n\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "(requires Task  [#15](https://github.com/TC-LS2/adventure-game-dublin/issues/15) )\r\n\r\nAs of now, when there are more than one monster per room, you can decide which one to attack\r\n\r\n# Choose who attacks\r\n\r\n\r\n**Is there only one monster?**\r\n\r\n```\r\n> look \r\nHome sweet home \r\nYou are in the main room of your home. There is pl \r\nenty of light and space. \r\nThere is the fly monster. \r\nPlayer has 16 life points. \r\n> attack \r\nHome sweet home \r\nYou are in the main room of your home. There is pl \r\nenty of light and space. \r\nPlayer has 16 life points. \r\n> █\r\n```\r\n\r\n**Is there more than one monster?**\r\n\r\nIf there is more than one monster, we should have the consideration of not putting the same names on the monsters. (It can be improved in the future)\r\n\r\n```\r\n> look \r\nHome sweet home \r\nYou are in the main room of your home. There is pl \r\nenty of light and space. \r\nThere is the fly monster. \r\nThere is the mosquito monster.\r\nPlayer has 16 life points. \r\n> attack mosquito\r\nHome sweet home \r\nYou are in the main room of your home. There is pl \r\nenty of light and space. \r\nThere is the fly monster. \r\nThe monster attacked you back. You killed the monster.\r\nPlayer has 14 life points. \r\n> attack fly\r\nHome sweet home \r\nYou are in the main room of your home. There is pl \r\nenty of light and space. \r\nThe monster attacked you back. \r\nPlayer has 14 life points. \r\n> █\r\n\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "Podras escollir quin objectiu atacar en cas que hagi més d'un monstre a la hab",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Backlog"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-8"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Backlog"
          }
        }
      ]
    }
  },
  {
    title: "Events in a room",
    number: 23,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/23",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "New rooms have appeared in the world!\r\nNow you can not only find monsters, objects and doors but the new rooms can have traps!\r\nThere are two kinds of traps that take live and those that heal us.\r\n\r\n### Good traps\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nPlayer has 12 life points.\r\n> move south\r\nAngel room\r\nYou enter an angel room and pray to god.\r\nYou heal 4 lifepoints.\r\nPlayer has 16 life points.\r\n```\r\n\r\n### Bad traps\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nPlayer has 16 life points.\r\n> move south\r\nSacrifice room\r\nYou have entered a sacrifice room. To follow you will have to make a donation of blood.\r\nLosses 3 life points.\r\nPlayer has 13 life points.\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "New rooms have appeared in the world!\r\nNow you can not only find monsters, objects and doors but the new rooms can have traps!\r\nThere are two kinds of traps that take live and those that heal us.\r\n\r\n### Good traps\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nThere is the mosquito monster.\r\nPlayer has 16 life points.\r\n> attack\r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nPlayer has 12 life points.\r\n> move south\r\nAngel room\r\nYou enter an angel room and pray to god.\r\nYou heal 4 lifepoints.\r\nPlayer has 16 life points.\r\n```\r\n\r\n### Bad traps\r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. It seems th\r\nat your last order just arrived, a mighty sword ab\r\nExits: south.\r\nPlayer has 16 life points.\r\n> move south\r\nSacrifice room\r\nYou have entered a sacrifice room. To follow you will have to make a donation of blood.\r\nLosses 3 life points.\r\nPlayer has 13 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "New rooms have appeared in the world!\r\nNow you can not only find monsters, objects and doors but the new rooms can have traps!\r\nThere are two kinds of traps that take live and those that heal us.\r\nGood traps\r\nBad traps",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 35,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/35",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/35#pullrequestreview-175749473",
                  author: {
                    login: "drpicox"
                  },
                  state: "CHANGES_REQUESTED"
                },
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/35#pullrequestreview-175758269",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/216e8f338207a629b2855bc723765c619fda7d67"
            }
          }
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-3"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Message when you can't wear a worse item",
    number: 25,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/25",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "(requires Task  [#17](https://github.com/TC-LS2/adventure-game-dublin/issues/17) )\r\n\r\nOnce you can take a weapon and a better shield than you had, do not make any praise that you take one of lower value.\r\n\r\n# # Message when you can't wear a worse item\r\n\r\nFrom now on by clicking on a button ![image](https://user-images.githubusercontent.com/16863774/47549836-9997fb80-d8fd-11e8-88c9-9a3051729da9.png), if the object we intend to take is a pinch of what we have at the moment, we will see a visual message (frontEnd) so that you understand that you can not pick up a pointer item of what you've got.\r\n\r\nExample:\r\n![image](https://user-images.githubusercontent.com/16863774/48251001-7f334700-e400-11e8-9b4e-e27c63f3e64a.png)\r\n\r\n",
    userContentEdits: {
      nodes: [
        {
          diff:
            "(requires Task  [#17](https://github.com/TC-LS2/adventure-game-dublin/issues/17) )\r\n\r\nOnce you can take a weapon and a better shield than you had, do not make any praise that you take one of lower value.\r\n\r\n# # Message when you can't wear a worse item\r\n\r\nFrom now on by clicking on a button ![image](https://user-images.githubusercontent.com/16863774/47549836-9997fb80-d8fd-11e8-88c9-9a3051729da9.png), if the object we intend to take is a pinch of what we have at the moment, we will see a visual message (frontEnd) so that you understand that you can not pick up a pointer item of what you've got.\r\n\r\nExample:\r\n![image](https://user-images.githubusercontent.com/16863774/48251001-7f334700-e400-11e8-9b4e-e27c63f3e64a.png)\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "(requires Task  [#17](https://github.com/TC-LS2/adventure-game-dublin/issues/17) )\r\n\r\nOnce you can take a weapon and a better shield than you had, do not make any praise that you take one of lower value.\r\n\r\n# # Message when you can't wear a worse item\r\n\r\nFrom now on by clicking on a button ![image](https://user-images.githubusercontent.com/16863774/47549836-9997fb80-d8fd-11e8-88c9-9a3051729da9.png), if the object we intend to take is a pinch of what we have at the moment, we will see a visual message (frontEnd) so that you understand that you can not pick up a pointer item of what you've got.\r\n\r\n\r\n![image](https://user-images.githubusercontent.com/16863774/48251001-7f334700-e400-11e8-9b4e-e27c63f3e64a.png)\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "(requires Task  [#17](https://github.com/TC-LS2/adventure-game-dublin/issues/17) )\r\n\r\nOnce you can take a weapon and a better shield than you had, do not make any praise that you take one of lower value.\r\n\r\n# # Message when you can't wear a worse item\r\n\r\nFrom now on by clicking on a button ![image](https://user-images.githubusercontent.com/16863774/47549836-9997fb80-d8fd-11e8-88c9-9a3051729da9.png), if the object we intend to take is a pinch of what we have at the moment, we will see a visual message (frontEnd) so that you understand that you can not pick up a pointer item of what you've got.\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "![image](https://user-images.githubusercontent.com/16863774/47493094-c50fdd00-d84e-11e8-83d7-12697fcfaedb.png)\r\n",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 34,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/34",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/34#pullrequestreview-177275190",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/099524d82724cc703db924a1fc2ef8e57f778c35"
            }
          }
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "UnlabeledEvent"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-3"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Informar de los items que lleva el avatar.",
    number: 27,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/27",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body: "",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Backlog"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "LabeledEvent"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "stopped"
        },
        {
          name: "weight-5"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Develop"
          }
        }
      ]
    }
  },
  {
    title: "merge-stringifier",
    number: 30,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/30",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body: "",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 31,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/31",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/31#pullrequestreview-172854942",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/ec058b91f912f00dbdb6b3395002e754f6d1ff48"
            }
          }
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-5"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: 'Monster "Evasion" & "Hit Chance"',
    number: 36,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/36",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "# Monsters with Evasion & Hit Chance\r\n\r\n Monsters are becoming more complex. From now on, they will have two new attributes: evasion and hit chance. Evasion dictates the probability of a monster dodging a player's attack. Hit chance, however, will determinate if the monster's attacks hit the player (dealing damage) or miss (0 damage).\r\n\r\n\r\n## New attribute: Evasion\r\n\r\n\r\nThe monsters are evolving! Now each of them will have Evasion.\r\n\r\n```\r\n> look \r\nCrystal Beach\r\nThere is one of the most beautiful beaches. \r\nThere is the mosquito monster.\r\nMonster has 1 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack, the monster can evade the damage.\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou attacked the monster.\r\nMonster has 1 life points\r\nPlayer life points: 14.\r\n\r\n```\r\n\r\nHowever, he can take the hit anyway:\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou killed the monster.\r\nPlayer life points: 12.\r\n\r\n```\r\n\r\n## New attribute: Hit Chance\r\n\r\nThe monsters are evolving! Now each of them will have Hit Chance.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. \r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n```\r\nWhen a monster attacks, he might miss:\r\n\r\n```\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 16.\r\n\r\n```\r\nBut alternatively, the monster might deal damage like he would normally:\r\n```\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 79 life points\r\nPlayer life points: 4.\r\n\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "# Monsters with Evasion & Hit Chance\r\n\r\n Monsters are becoming more complex. From now on, they will have two new attributes: evasion and hit chance. Evasion dictates the probability of a monster dodging a player's attack. Hit chance, however, will determinate if the monster's attacks hit the player (dealing damage) or miss (0 damage).\r\n\r\n\r\n## New attribute: Evasion\r\n\r\n\r\nThe monsters are evolving! Now each of them will have Evasion.\r\n\r\n```\r\n> look \r\nCrystal Beach\r\nThere is one of the most beautiful beaches. \r\nThere is the mosquito monster.\r\nMonster has 1 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack, the monster can evade the damage.\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou attacked the monster.\r\nMonster has 1 life points\r\nPlayer life points: 14.\r\n\r\n```\r\n\r\nHowever, he can take the hit anyway:\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou killed the monster.\r\nPlayer life points: 12.\r\n\r\n```\r\n\r\n## New attribute: Hit Chance\r\n\r\nThe monsters are evolving! Now each of them will have Hit Chance.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. \r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n```\r\nWhen a monster attacks, he might miss:\r\n\r\n```\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 16.\r\n\r\n```\r\nBut alternatively, the monster might deal damage like he would normally:\r\n```\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 79 life points\r\nPlayer life points: 4.\r\n\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with Evasion & Hit Chance\r\n\r\n Monsters are becoming more complex. From now on, they will have two new attributes: evasion and hit chance. Evasion dictates the probability of a monster dodging a player's attack. Hit chance, however, will determinate if the monster's attacks hit the player (dealing damage) or miss (0 damage).\r\n\r\n\r\n## New attribute: Evasion\r\n\r\n\r\nThe monsters are evolving! Now each of them will have Evasion.\r\n\r\n```\r\n> look \r\nCrystal Beach\r\nThere is one of the most beautiful beaches. \r\nThere is the mosquito monster.\r\nMonster has 1 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack, the monster can evade the damage.\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou attacked the monster.\r\nMonster has 1 life points\r\nPlayer life points: 14.\r\n\r\n```\r\n\r\nHowever, he can take the hit anyway:\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou killed the monster.\r\nPlayer life points: 12.\r\n\r\n```\r\n\r\n## New attribute: Hit Chance\r\n\r\nThe monsters are evolving! Now each of them will have Hit Chance.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. \r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n```\r\nWhen a monster attacks, he might miss:\r\n\r\n```\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 16.\r\n\r\n```\r\nBut alternatively, the monster might deal damage like he would normally:\r\n```\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 2.\r\n\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with Evasion & Hit Chance\r\n\r\n Monsters are becoming more complex. From now on, they will have two new attributes: evasion and hit chance. Evasion dictates the probability of a monster dodging a player's attack. Hit chance, however, will determinate if the monster's attacks hit the player (dealing damage) or miss (0 damage).\r\n\r\n\r\n## New attribute: Evasion\r\n\r\n\r\nThe monsters are evolving! Now each of them will have Evasion.\r\n\r\n```\r\n> look \r\nCrystal Beach\r\nThere is one of the most beautiful beaches. \r\nThere is the mosquito monster.\r\nMonster has 1 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack, the monster can evade the damage.\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou attacked the monster.\r\nMonster has 1 life points\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\nHowever, he can take the hit anyway:\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\n## New attribute: Hit Chance\r\n\r\nThe monsters are evolving! Now each of them will have Hit Chance.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. \r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n```\r\nWhen a monster attacks, he might miss:\r\n\r\n```\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 16.\r\n\r\n```\r\nBut alternatively, the monster might deal damage like he would normally:\r\n```\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 2.\r\n\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with Evasion & Hit Chance\r\n\r\n Monsters are becoming more complex. From now on, they will have two new attributes: evasion and hit chance. Evasion dictates the probability of a monster dodging a player's attack. Hit chance, however, will determinate if the monster's attacks hit the player (dealing damage) or miss (0 damage).\r\n\r\n\r\n## New attribute: Evasion\r\n\r\n\r\nThe monsters are evolving! Now each of them will have Evasion.\r\n\r\n```\r\n> look \r\nCrystal Beach\r\nThere is one of the most beautiful beaches. \r\nThere is the mosquito monster.\r\nMonster has 1 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack, the monster can evade the damage.\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nMosquito dodged the attack!\r\nMonster has 1 life points\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\nHowever, he can take the hit anyway:\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\n## New attribute: Hit Chance\r\n\r\nThe monsters are evolving! Now each of them will have Hit Chance.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. \r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n```\r\nWhen a monster attacks, he might miss:\r\n\r\n```\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 16.\r\n\r\n```\r\nBut alternatively, the monster might deal damage like he would normally:\r\n```\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 2.\r\n\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Monsters with Evasion & Hit Chance\r\n\r\n Monsters are becoming more complex. From now on, they will have two new attributes: evasion and hit chance. Evasion dictates the probability of a monster dodging a player's attack. Hit chance, however, will determinate if the monster's attacks hit the player (dealing damage) or miss (0 damage).\r\n\r\n\r\n## New attribute, Evasion\r\n\r\n\r\nThe monsters are evolving! Now each of them will have Evasion.\r\n\r\n```\r\n> look \r\nCrystal Beach\r\nThere is one of the most beautiful beaches. \r\nThere is the mosquito monster.\r\nMonster has 1 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIf your attack is superior to the life of the monster you will kill him as usual as before.\r\n\r\n```\r\n> attack\r\nCrystal Beach\r\nThere is one of the most beautiful beaches.\r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\nOr another example:\r\n\r\n```\r\n> look \r\nCupboard\r\nYou are at the main room of your home. \r\nThere is the fly monster.\r\nMonster has 15 life points\r\nPlayer has 16 life points.\r\n\r\n```\r\n```\r\n> attack\r\nCupboard\r\nYou are at the main room of your home. \r\nMonster has 3 life points\r\nPlayer life points: 16.\r\n\r\n```\r\n```\r\n> attack\r\nCupboard\r\nYou are at the main room of your home. \r\nYou killed the monster.\r\nPlayer life points: 16.\r\n\r\n```\r\n\r\nIn case your attack does not exceed their life, the monster will lose as many points of life as your attacking force.\r\n\r\n```\r\n> look \r\nBarn\r\nYou are at the main room of your home. \r\nThere is the Cthulhu monster.\r\nMonster has 99 life points\r\nPlayer has 16 life points.\r\n\r\n> attack\r\nBarn\r\nYou are at the main room of your home. \r\nYou attacked the monster.\r\nMonster has 89 life points\r\nPlayer life points: 5.\r\n```\r\n\r\nIn this situation you will have to decide what is best for you, if you continue attacking or continue looking for objects to improve your attack.\r\n\r\n> Your game, your life. YOU DECIDE",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "Issue"
          }
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "UnassignedEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 46,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/46",
            merged: false,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/46#pullrequestreview-177275083",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                },
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/46#pullrequestreview-182941190",
                  author: {
                    login: "drpicox"
                  },
                  state: "CHANGES_REQUESTED"
                }
              ]
            },
            mergedBy: null,
            mergeCommit: null
          }
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-13"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Review"
          }
        }
      ]
    }
  },
  {
    title: "Multiplayer: Listing players in a Room",
    number: 40,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/40",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "### Listing players in a Room\r\n\r\nWatch out! Now multiplayer is more available, you can now see whitch player are in your current room and act acordingly, as before you could not see it, even though they where there.\r\n\r\n**Look in your room**\r\n\r\nUse your username to login, when you enter the room you'll see the other players in that room, and they will be able to see your username too.\r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. \r\n\r\nExits: south.\r\nUsers playing: Peter, Hermione, XxXSniperXxX\r\n```\r\n\r\n ",
    userContentEdits: {
      nodes: [
        {
          diff:
            "### Listing players in a Room\r\n\r\nWatch out! Now multiplayer is more available, you can now see whitch player are in your current room and act acordingly, as before you could not see it, even though they where there.\r\n\r\n**Look in your room**\r\n\r\nUse your username to login, when you enter the room you'll see the other players in that room, and they will be able to see your username too.\r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. \r\n\r\nExits: south.\r\nUsers playing: Peter, Hermione, XxXSniperXxX\r\n```\r\n\r\n ",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "###Listing players in a Room\r\n\r\nWatch out! Now multiplayer is more available, you can now see whitch player are in your current room and act acordingly, as before you could not see it, even though they where there.\r\n\r\n**Look in your room**\r\n\r\nUse your username to login, when you enter the room you'll see the other players in that room, and they will be able to see your username too.\r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Peter, Hermione, XxXSniperXxX\r\n```\r\n\r\n ",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "##Listing players in a Room\r\n\r\nWatch out! Now multiplayer is more available, you can now see whitch player are in your current room and act acordingly, as before you could not see it, even though they where there.\r\n\r\n**Look in your room**\r\n\r\nUse your username to login, when you enter the room you'll see the other players in that room, and they will be able to see your username too.\r\n\r\n```\r\nHome sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Peter, Hermione, XxXSniperXxX\r\n```\r\n\r\n ",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "**Listing players in a Room**\r\n\r\nWatch out! Now multiplayer is more available, you can now see whitch player are in your current room and act acordingly, as before you could not see it, even though they where there.\r\n\r\n##Look in your room#\r\n\r\nUse your username to login, when you enter the room you'll see the other players in that room, and they will be able to see your username too.\r\n\r\n`Home sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Peter, Hermione, XxXSniperXxX`\r\n\r\n ",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "**Listing players in a Room**\r\n\r\nWatch out! Now multiplayer is more available, you can now see whitch player are in your current room and act acordingly, as before you could not see it, even though they where there.",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 78,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/78",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/78#pullrequestreview-178330261",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/cf77e2e1cf53557c9fc4f05ed3a2c6836119e97e"
            }
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "Issue"
          }
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-8"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Multiplayer: Chat in a Room",
    number: 41,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/41",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      '### Chat in a Room\r\n\r\nYou can now send and receive messages in the room you are in. \r\n\r\nLogin with your username and check out who is in the room, send a message so anyone in the room can see it. If any of them sends a message in the room chat you will be able to see it too. First lets take a look at who is at the room. \r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Hermione, XxXSniperXxX\r\n```\r\nThen, use the chat to message everybody in the room. \r\n\r\n```\r\n>chat\r\n"Hi Guys"\r\n\r\nYou: Hi Guys.\r\nUsers playing: Hermione, XxXSniperXxX\r\n```\r\n\r\nIt will also show up if any of them sends a message.\r\n\r\n ```\r\n>chat\r\n\r\nYou: Hi Guys.\r\nHermione: Hi Peter\r\nUsers playing: Hermione, XxXSniperXxX\r\n```',
    userContentEdits: {
      nodes: [
        {
          diff:
            '### Chat in a Room\r\n\r\nYou can now send and receive messages in the room you are in. \r\n\r\nLogin with your username and check out who is in the room, send a message so anyone in the room can see it. If any of them sends a message in the room chat you will be able to see it too. First lets take a look at who is at the room. \r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Hermione, XxXSniperXxX\r\n```\r\nThen, use the chat to message everybody in the room. \r\n\r\n```\r\n>chat\r\n"Hi Guys"\r\n\r\nYou: Hi Guys.\r\nUsers playing: Hermione, XxXSniperXxX\r\n```\r\n\r\nIt will also show up if any of them sends a message.\r\n\r\n ```\r\n>chat\r\n\r\nYou: Hi Guys.\r\nHermione: Hi Peter\r\nUsers playing: Hermione, XxXSniperXxX\r\n```',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            '**Messaging in a Room**\r\n\r\n### Chat in a Room\r\n\r\nYou can now send and receive messages in the room you are in. \r\n\r\nLogin with your username and check out who is in the room, send a message so anyone in the room can see it. If any of them sends a message in the room chat you will be able to see it too. First lets take a look at who is at the room. \r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Hermione, XxXSniperXxX\r\n```\r\nThen, use the chat to message everybody in the room. \r\n\r\n```\r\n>chat\r\n"Hi Guys"\r\n\r\nYou: Hi Guys.\r\nUsers playing: Hermione, XxXSniperXxX\r\n```\r\n\r\nIt will also show up if any of them sends a message.\r\n\r\n ```\r\n>chat\r\n\r\nYou: Hi Guys.\r\nHermione: Hi Peter\r\nUsers playing: Hermione, XxXSniperXxX\r\n```',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            '**Messaging in a Room**\r\n\r\n### Chat in a Room\r\n\r\nYou can now send and receive messages in the room you are in. \r\n\r\nLogin with your username and check out who is in the room, send a message so anyone in the room can see it. If any of them sends a message in the room chat you will be able to see it too. First lets take a look at who is at the room.\r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Peter, Hermione, XxXSniperXxX\r\n```\r\nThen, use the chat to message everybody in the room.\r\n\r\n```\r\n>chat\r\n"Hi Guys"\r\n\r\nHi Guys.\r\nUsers playing: Peter, Hermione, XxXSniperXxX\r\n```\r\n\r\nIt will also show up if any of them sends a message.\r\n\r\n ',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "**Messaging in a Room**\r\n\r\n### Chat in a Room\r\n\r\nYou can now send and receive messages in the room you are in. \r\n\r\nLogin with your username and check out who is in the room, send a message so anyone in the room can see it. If any of them sends a message in the room chat you will be able to see it too. First lets take a look at who is at the room.\r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Peter, Hermione, XxXSniperXxX\r\n```\r\nThen, use the chat to message everybody in the room.\r\n\r\n ",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "**Messaging in a Room**\r\n\r\nYou can now send and receive messages in the room you are in. \r\n\r\nLogin with your username and check out who is in the room, send a message so anyone in the room can see it. If any of them sends a message in the room chat you will be able to see it too.",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "**Messaging in a Room**\r\n\r\nYou can now send and receive messages in the room you are in. \r\n\r\nLogin with your username and check out who is in the room, send a message so anyone in the room can see it. If they send a message you will be able to see it too.",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-13"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Multiplayer: Messaging with a known player",
    number: 42,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/42",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      '### Messaging with a known player\r\n\r\nDo you wanna send a direct message to your friend? If you know his username you can now talk to him or her personally. \r\n\r\nFirst of all, use your username to login, then, if you know a username of another player playing the game, you can already send a message, but if you don\'t, you can check out who is playing in your room first.\r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Hermione, XxXSniperXxX\r\n```\r\nThen, use the chat to directly message a user you know.\r\n\r\n```\r\n>chat "Hermione"\r\n"Hi Hermione"\r\n\r\nYou: Hi Hermione.\r\n```\r\n\r\nThen she will be able to respond to you.\r\n\r\n ```\r\n>chat "Hermione"\r\n\r\nYou: Hi hermione.\r\nHermione: Hi Peter!\r\n```',
    userContentEdits: {
      nodes: [
        {
          diff:
            '### Messaging with a known player\r\n\r\nDo you wanna send a direct message to your friend? If you know his username you can now talk to him or her personally. \r\n\r\nFirst of all, use your username to login, then, if you know a username of another player playing the game, you can already send a message, but if you don\'t, you can check out who is playing in your room first.\r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Hermione, XxXSniperXxX\r\n```\r\nThen, use the chat to directly message a user you know.\r\n\r\n```\r\n>chat "Hermione"\r\n"Hi Hermione"\r\n\r\nYou: Hi Hermione.\r\n```\r\n\r\nThen she will be able to respond to you.\r\n\r\n ```\r\n>chat "Hermione"\r\n\r\nYou: Hi hermione.\r\nHermione: Hi Peter!\r\n```',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            '**Messaging with a known player**\r\n\r\nDo you wanna send a direct message to your friend? If you know his username you can now talk to him or her personally. \r\n\r\n**Messaging in a Room**\r\n\r\n### Messaging with a known player\r\nYou can now send and receive messages in the room you are in. \r\n\r\nLogin with your username and check out who is in the room, send a message so anyone in the room can see it. If any of them sends a message in the room chat you will be able to see it too. First lets take a look at who is at the room. \r\n\r\n```\r\n>look\r\nHome sweet home\r\nYou are at the main room of your home. It seems that your last order just arrived, a mighty sword able to cut through rocks.\r\n\r\nExits: south.\r\nUsers playing: Hermione, XxXSniperXxX\r\n```\r\nThen, use the chat to message everybody in the room. \r\n\r\n```\r\n>chat\r\n"Hi Guys"\r\n\r\nYou: Hi Guys.\r\nUsers playing: Hermione, XxXSniperXxX\r\n```\r\n\r\nIt will also show up if any of them sends a message.\r\n\r\n ```\r\n>chat\r\n\r\nYou: Hi Guys.\r\nHermione: Hi Peter\r\nUsers playing: Hermione, XxXSniperXxX\r\n```',
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "**Messaging with a known player**\r\n\r\nDo you wanna send a direct message to your friend? If you know his username you can now talk to him or her personally. ",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "AddedToProjectEvent"
        }
      ]
    },
    labels: {
      nodes: []
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Backlog"
          }
        }
      ]
    }
  },
  {
    title: "Multiplayer: Transfer objects between players",
    number: 43,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/43",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "# # Multiplayer: Transfer objects between players\r\n\r\nEn este apartado multijugador, podremos ayudar a companyeros transfiriendo objectos.\r\nDepende de la de mirar quien hay en la room\r\n\r\n# Example\r\n````\r\n> look \r\nHome sweet home \r\nYou are in the main room of your home.\r\nPlayer 1 has weapon: nothing.\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has weapon: large sword.\r\nPlayer 2 has 16 life points. \r\n\r\n> transfer p2 to p1\r\nHome sweet home \r\nYou are in the main room of your home. \r\nPlayer 1 has weapon: large sword.\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has weapon: nothing.\r\nPlayer 2 has 16 life points. \r\n````",
    userContentEdits: {
      nodes: [
        {
          diff:
            "# # Multiplayer: Transfer objects between players\r\n\r\nEn este apartado multijugador, podremos ayudar a companyeros transfiriendo objectos.\r\nDepende de la de mirar quien hay en la room\r\n\r\n# Example\r\n````\r\n> look \r\nHome sweet home \r\nYou are in the main room of your home.\r\nPlayer 1 has weapon: nothing.\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has weapon: large sword.\r\nPlayer 2 has 16 life points. \r\n\r\n> transfer p2 to p1\r\nHome sweet home \r\nYou are in the main room of your home. \r\nPlayer 1 has weapon: large sword.\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has weapon: nothing.\r\nPlayer 2 has 16 life points. \r\n````",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff: "",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        }
      ]
    },
    labels: {
      nodes: []
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Backlog"
          }
        }
      ]
    }
  },
  {
    title: "Multiplayer: Follow a player",
    number: 44,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/44",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "# # Multiplayer: Follow a player\r\n\r\nEn este apartado multijugador, Juntarnos con otro/s jugadores para movernos cuando el se mueva.\r\n\r\n# Example\r\n````\r\n> look \r\nHome sweet home \r\nYou are in the main room of your home.\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has 16 life points. \r\n\r\n> follow p1 to p2\r\nHome sweet home \r\nYou are in the main room of your home. \r\nPlayer 1 and 2 linked\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has 16 life points. \r\n\r\n>move p2\r\n\r\n> look \r\nBarn\r\nYou are in the main room of your home.\r\nPlayer 1 and 2 linked\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has 16 life points. \r\n\r\n````",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "IssueComment"
        }
      ]
    },
    labels: {
      nodes: []
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Develop"
          }
        }
      ]
    }
  },
  {
    title: "Multiplayer: Fight together agains a monster",
    number: 45,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/45",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "(requires Task  [#40](https://github.com/TC-LS2/adventure-game-dublin/issues/40))\r\n\r\n# Multiplayer: Fight together agains a monster\r\n\r\n  \r\nIn this multiplayer section, we can be in the same room and if one of the players attacks to fight against a monster, the partner will also attack.\r\n\r\n# Example\r\n````\r\n> look \r\nCupboard \r\nYou are at the main room of your home.\r\nThere is the Cthulhu monster.\r\nCthulhu monster has 99 life points.\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has 16 life points. \r\n\r\n##Player 1##\r\n\r\n>attack\r\nCupboard\r\nHome sweet home \r\nYou are at the main room of your home.\r\nThere is the Cthulhu monster.\r\nCthulhu monster has 79 life points\r\nPlayer 1 has 2 life points. \r\n\r\n\r\n##Player 2##\r\n\r\n> look \r\nCupboard \r\nYou are at the main room of your home.\r\nThere is the Cthulhu monster.\r\nCthulhu monster has 79 life points.\r\nPlayer 2 has 16 life points. \r\n````\r\n",
    userContentEdits: {
      nodes: [
        {
          diff:
            "(requires Task  [#40](https://github.com/TC-LS2/adventure-game-dublin/issues/40))\r\n\r\n# Multiplayer: Fight together agains a monster\r\n\r\n  \r\nIn this multiplayer section, we can be in the same room and if one of the players attacks to fight against a monster, the partner will also attack.\r\n\r\n# Example\r\n````\r\n> look \r\nCupboard \r\nYou are at the main room of your home.\r\nThere is the Cthulhu monster.\r\nCthulhu monster has 99 life points.\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has 16 life points. \r\n\r\n##Player 1##\r\n\r\n>attack\r\nCupboard\r\nHome sweet home \r\nYou are at the main room of your home.\r\nThere is the Cthulhu monster.\r\nCthulhu monster has 79 life points\r\nPlayer 1 has 2 life points. \r\n\r\n\r\n##Player 2##\r\n\r\n> look \r\nCupboard \r\nYou are at the main room of your home.\r\nThere is the Cthulhu monster.\r\nCthulhu monster has 79 life points.\r\nPlayer 2 has 16 life points. \r\n````\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# # Multiplayer: Fight together agains a monster\r\n\r\nEn este apartado multijugador, Podremos estar en la misma habitación y combinar nuestros ataques (sumarlos) para luchar contra un monster\r\n\r\n# Example\r\n````\r\n> look \r\nHome sweet home \r\nYou are in the main room of your home.\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has 16 life points. \r\n\r\n> combine attack p1 & p2\r\nHome sweet home \r\nYou are in the main room of your home. \r\nThere is the Cthulhu monster.\r\nPlayer 1 and 2 combined\r\nCthulhu monster has 99 life points\r\nPlayer 1 has 16 life points. \r\nPlayer 2 has 16 life points. \r\n\r\n>attack\r\nHome sweet home \r\nYou are in the main room of your home. \r\nThere is the Cthulhu monster.\r\nPlayer 1 and 2 combined\r\nCthulhu monster has 79 life points\r\nPlayer 1 has 2 life points. \r\nPlayer 2 has 2 life points. \r\n\r\n\r\n````",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 81,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/81",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/81#pullrequestreview-182648613",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/b656a973ce3756129f9870ab45733d22872c81fc"
            }
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-8"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "hotfix: Attack button and create Default world",
    number: 61,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/61",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body: "",
    userContentEdits: {
      nodes: []
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Review"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 62,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/62",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: []
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/e73b36ef1bfd53b4e0525d16d8469f6497ee68cc"
            }
          }
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "Bug"
        },
        {
          name: "weight-3"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Gem Item:  increase shield power",
    number: 84,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/84",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "# Gems Item\r\n\r\nDo you believe in magic?\r\nIn this world there are very powerful gems...\r\n\r\n> Will you find any?\r\n\r\n## Gems Item.\r\n\r\nNo one believes in supernatural powers until he experiences them in himself.\r\n\r\nYou are in the armory preparing for your new adventure. \r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with the sword-stone\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nPlayer has the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\nLab room\r\nIn this room there is a harmless monster. You can\r\nattack the monster to see the power of your\r\nweapon.\r\nThere is the Cthulhu monster.\r\nExits: east, west.\r\nPlayer has 16 life points.\r\n>█\r\n\r\n>attack\r\n```\r\nThe monster has 999 life-points, you only has 12 damage. \r\n\r\n```    > east\r\n```\r\nNow you are ready for your adventure and go to cave\r\n\r\nYou just have to make a **look**, and you will see if there is a luminous rock... \r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nExits:  west\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has the swordstone weapon\r\nExits:  west\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n## Take gem without weapon\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nExits:  west\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has a beautiful gem.\r\nExits:  west\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n## Take gem without weapon and then take a weapon\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\n>look\r\nLab room\r\nIn this room there is a harmless monster. You can\r\nattack the monster to see the power of your\r\n weapon.\r\nThere is the Cthulhu monster.\r\nExits: east, west.\r\nPlayer has 16 life points.\r\n> east\r\n```\r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nExits:  west\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has a beautiful gem.\r\nExits:  west\r\nPlayer has 16 life points.\r\n\r\n> west\r\n\r\n> west\r\n```\r\n>You forgot to pick up a sword. You go back to the armory.\r\n\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with the sword-stone\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nPlayer has the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n```",
    userContentEdits: {
      nodes: [
        {
          diff:
            "# Gems Item\r\n\r\nDo you believe in magic?\r\nIn this world there are very powerful gems...\r\n\r\n> Will you find any?\r\n\r\n## Gems Item.\r\n\r\nNo one believes in supernatural powers until he experiences them in himself.\r\n\r\nYou are in the armory preparing for your new adventure. \r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with the sword-stone\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nPlayer has the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\nLab room\r\nIn this room there is a harmless monster. You can\r\nattack the monster to see the power of your\r\nweapon.\r\nThere is the Cthulhu monster.\r\nExits: east, west.\r\nPlayer has 16 life points.\r\n>█\r\n\r\n>attack\r\n```\r\nThe monster has 999 life-points, you only has 12 damage. \r\n\r\n```    > east\r\n```\r\nNow you are ready for your adventure and go to cave\r\n\r\nYou just have to make a **look**, and you will see if there is a luminous rock... \r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nExits:  west\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has the swordstone weapon\r\nExits:  west\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n## Take gem without weapon\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nExits:  west\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has a beautiful gem.\r\nExits:  west\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n## Take gem without weapon and then take a weapon\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\n>look\r\nLab room\r\nIn this room there is a harmless monster. You can\r\nattack the monster to see the power of your\r\n weapon.\r\nThere is the Cthulhu monster.\r\nExits: east, west.\r\nPlayer has 16 life points.\r\n> east\r\n```\r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nExits:  west\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has a beautiful gem.\r\nExits:  west\r\nPlayer has 16 life points.\r\n\r\n> west\r\n\r\n> west\r\n```\r\n>You forgot to pick up a sword. You go back to the armory.\r\n\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with the sword-stone\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nPlayer has the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Gems Item\r\n\r\nDo you believe in magic?\r\nIn this world there are very powerful gems...\r\n\r\n> Will you find any?\r\n\r\n## Gems Item.\r\n\r\nNo one believes in supernatural powers until he experiences them in himself.\r\n\r\nYou are in the armory preparing for your new adventure. \r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with the sword-stone\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nPlayer has the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\nNow you are ready for your adventure and go to cave\r\n\r\nYou just have to make a **look**, and you will see if there is a luminous rock... \r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n## Take gem without weapon\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has a beautiful gem.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n## Take gem without weapon and then take a weapon\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has a beautiful gem.\r\nPlayer has 16 life points.\r\n\r\n```\r\n>You forgot to pick up a sword. You go back to the armory.\r\n\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with the sword-stone\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nPlayer has the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Gems Item\r\n\r\nDo you believe in magic?\r\nIn this world there are very powerful gems...\r\n\r\n> Will you find any?\r\n\r\n## Gems Item.\r\n\r\nNo one believes in supernatural powers until he experiences them in himself.\r\n\r\nYou are in the armory preparing for your new adventure. \r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with the sword-stone\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\nNow you are ready for your adventure and go to cave\r\n\r\nYou just have to make a **look**, and you will see if there is a luminous rock... \r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n## Take gem without weapon\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has a beautiful gem.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n## Take gem without weapon and then take a weapon\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has a beautiful gem.\r\nPlayer has 16 life points.\r\n\r\n```\r\n>You forgot to pick up a sword. You go back to the armory.\r\n\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with the sword-stone\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Gems Item\r\n\r\nDo you believe in magic?\r\nIn this world there are very powerful gems...\r\n\r\n> Will you find any?\r\n\r\n## Gems Item.\r\n\r\nNo one believes in supernatural powers until he experiences them in himself.\r\n\r\nYou are in the armory preparing for your new adventure. \r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with the sword-stone\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\nNow you are ready for your adventure and go to cave\r\n\r\nYou just have to make a **look**, and you will see if there is a luminous rock... \r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\n## Take gem without weapon\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are strong shields and weapons. \r\nYou can take your favorite sword.\r\nThere is the swordstone weapon\r\nPlayer has 16 life points.\r\n\r\n> east\r\n```\r\n\r\n```\r\n> look \r\nCave\r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nThere is a gem\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nYou are walking through the cave. It's very dark. \r\nBut you can see a strange rock. This shines a lot, is a luminous and beautiful rock.\r\nPlayer has a beautiful gem.\r\nPlayer has 16 life points.\r\n\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Gems Item\r\n\r\nDo you believe in magic?\r\nIn this world there are very powerful gems...\r\n\r\n> Will you find any?\r\n\r\n## Gems Item.\r\n\r\nNo one believes in supernatural powers until he experiences them in himself.\r\n\r\nYou can check it by entering one of the rooms. You just have to make a **look**, and you will see if there is a luminous rock... \r\n\r\n```\r\n> look \r\nHome sweet home\r\nYou are at the main room of your home. There is a \r\nstrange rock. This shines a lot, is a luminous ant beautiful rock.\r\nThere is a gem\r\nPlayer has 16 life points.\r\n\r\n```\r\nWhen you pick up the gem, you feel a strange magical force and increase the power of your sword.\r\n\r\n```\r\n> get \r\nHome sweet home\r\nYou are at the main room of your home. \r\nPlayer has a beautiful gem\r\nPlayer has 16 life points.\r\n\r\n```",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff: "",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-5"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Avatar: Create generic races: Paladin, hobbit, magi",
    number: 87,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/87",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "## Choose race\r\n\r\nYou can now choose which race do you wanna \r\nbe!\r\n\r\nFIrst of all you need Login and choose a map, then you will can choose a race.\r\n\r\nAt the moment there are 3 races: hobbit, paladdin and magi\r\n\r\nNow you can see a list of the races available for you to play in. \r\n\r\nIntroduce the name tat you can be.\r\n![image](https://user-images.githubusercontent.com/15344106/49688450-7f635700-fb12-11e8-9611-16f31737bb57.png)\r\n\r\n\r\n\r\n",
    userContentEdits: {
      nodes: [
        {
          diff:
            "## Choose race\r\n\r\nYou can now choose which race do you wanna \r\nbe!\r\n\r\nFIrst of all you need Login and choose a map, then you will can choose a race.\r\n\r\nAt the moment there are 3 races: hobbit, paladdin and magi\r\n\r\nNow you can see a list of the races available for you to play in. \r\n\r\nIntroduce the name tat you can be.\r\n![image](https://user-images.githubusercontent.com/15344106/49688450-7f635700-fb12-11e8-9611-16f31737bb57.png)\r\n\r\n\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "Choose race\r\n\r\nYou can now choose which race do you wanna \r\nbe!\r\n\r\nFIrst of all you need Login and choose a map, then you will can choose a race.\r\n\r\nAt the moment there are 3 races: hobbit, paladdin and magi\r\n\r\nNow you can see a list of the races available for you to play in. \r\n\r\nIntroduce the name tat you can be.\r\n![image](https://user-images.githubusercontent.com/15344106/49688450-7f635700-fb12-11e8-9611-16f31737bb57.png)\r\n\r\n\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff: "",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Backlog",
          projectColumnName: "Develop"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Merged"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-13"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Armor Items",
    number: 88,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/88",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "# Armor Items\r\n\r\nDo you want more options for your character? Well, you are in luck, because now you can find armour scattered around the dungeons.\r\n\r\nTo show its usefulness, let's try to kill the Ogre monster:\r\n\r\n## Attempt to kill the Ogre without armor\r\n\r\n```\r\n> look \r\nArmory - Sword Rack\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are swords laying around.\r\n\r\nThere is the swordstone weapon.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\nYou equip the swordstone to kill the Ogre and head to its lair.\r\n\r\n```\r\n> get \r\n> move east\r\n> move east\r\n> look \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 16 life points.\r\n\r\n```\r\nThere's the Ogre! You decide to charge at him.\r\n```\r\n> attack \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 1 life points.\r\n\r\n```\r\nWhoops! The Ogre is too strong. That was a poor decision\r\n\r\n## Attempt to kill the Ogre with the iron armor\r\n\r\n\r\nAs before, you start in the armory and get a sword.\r\n```    \r\n> look \r\nArmory - Sword Rack\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are swords laying around.\r\n\r\nThere is the swordstone weapon.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\nNow, you get to the Armor Corner and get yourself an iron armor\r\n\r\n```\r\n> look \r\nArmory - Armor Corner\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are sets of armor hanged on the wall\r\n\r\nThere is the iron armor armor.\r\nExits: east, west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nArmory - Armor Corner\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are sets of armor hanged on the wall\r\n\r\nExits: east, west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nLet's try to kill the Ogre now!\r\n\r\n```\r\n> move east\r\n> look \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 16 life points.\r\n> attack \r\n> attack \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 6 life points.\r\n\r\n```\r\n\r\n\r\nCongratulations, you defeated quite a powerful monster!\r\n\r\n\r\n",
    userContentEdits: {
      nodes: [
        {
          diff:
            "# Armor Items\r\n\r\nDo you want more options for your character? Well, you are in luck, because now you can find armour scattered around the dungeons.\r\n\r\nTo show its usefulness, let's try to kill the Ogre monster:\r\n\r\n## Attempt to kill the Ogre without armor\r\n\r\n```\r\n> look \r\nArmory - Sword Rack\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are swords laying around.\r\n\r\nThere is the swordstone weapon.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\nYou equip the swordstone to kill the Ogre and head to its lair.\r\n\r\n```\r\n> get \r\n> move east\r\n> move east\r\n> look \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 16 life points.\r\n\r\n```\r\nThere's the Ogre! You decide to charge at him.\r\n```\r\n> attack \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 1 life points.\r\n\r\n```\r\nWhoops! The Ogre is too strong. That was a poor decision\r\n\r\n## Attempt to kill the Ogre with the iron armor\r\n\r\n\r\nAs before, you start in the armory and get a sword.\r\n```    \r\n> look \r\nArmory - Sword Rack\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are swords laying around.\r\n\r\nThere is the swordstone weapon.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\nNow, you get to the Armor Corner and get yourself an iron armor\r\n\r\n```\r\n> look \r\nArmory - Armor Corner\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are sets of armor hanged on the wall\r\n\r\nThere is the iron armor armor.\r\nExits: east, west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nArmory - Armor Corner\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are sets of armor hanged on the wall\r\n\r\nExits: east, west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nLet's try to kill the Ogre now!\r\n\r\n```\r\n> move east\r\n> look \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 16 life points.\r\n> attack \r\n> attack \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 6 life points.\r\n\r\n```\r\n\r\n\r\nCongratulations, you defeated quite a powerful monster!\r\n\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Armor Items\r\n\r\nDo you want more options for your character? Well, you are in luck, because now you can find armour scattered around the dungeons.\r\n\r\nTo show its usefulness, let's try to kill the Ogre monster:\r\n\r\n## Test 1 - Attempt to kill the Ogre without armor\r\n\r\n```\r\n> look \r\nArmory - Sword Rack\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are swords laying around.\r\n\r\nThere is the swordstone weapon.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\nYou equip the swordstone to kill the Ogre and head to its lair.\r\n\r\n```\r\n> get \r\n> move east\r\n> move east\r\n> look \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 16 life points.\r\n\r\n```\r\nThere's the Ogre! You decide to charge at him.\r\n```\r\n> attack \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 1 life points.\r\n\r\n```\r\nWhoops! The Ogre is too strong. That was a poor decision\r\n\r\n## Test 2 - Attempt to kill the Ogre with the iron armor\r\n\r\n\r\nAs before, you start in the armory and get a sword.\r\n```    \r\n> look \r\nArmory - Sword Rack\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are swords laying around.\r\n\r\nThere is the swordstone weapon.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\nNow, you get to the Armor Corner and get yourself an iron armor\r\n\r\n```\r\n> look \r\nArmory - Armor Corner\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are sets of armor hanged on the wall\r\n\r\nThere is the iron armor armor.\r\nExits: east, west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nArmory - Armor Corner\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are sets of armor hanged on the wall\r\n\r\nExits: east, west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nLet's try to kill the Ogre now!\r\n\r\n```\r\n> move east\r\n> look \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 16 life points.\r\n> attack \r\n> attack \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 6 life points.\r\n\r\n```\r\n\r\n\r\nCongratulations, you defeated quite a powerful monster!\r\n\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Armor Items\r\n\r\nDo you want more options for your character? Well, you are in luck, because now you can find armour scattered around the dungeons.\r\n\r\nTo show its usefulness, let's try to kill the Ogre monster:\r\n\r\n## Test 1 - Attempt to kill the Ogre without armor\r\n\r\n```\r\n> look \r\nArmory - Sword Rack\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are swords laying around.\r\n\r\nThere is the swordstone weapon.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\nYou equip the swordstone to kill the Ogre and head to its lair.\r\n\r\n```\r\n> get \r\n> move east\r\n> move east\r\n> look \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 16 life points.\r\n\r\n```\r\nThere's the Ogre! You decide to charge at him.\r\n```\r\n> attack \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 1 life points.\r\n\r\n```\r\nWhoops! The Ogre is too strong. That was a poor decsition\r\n\r\n## Test 2 - Attempt to kill the Ogre with the iron armor\r\n\r\n\r\nAs before, you start in the armory and get a sword.\r\n```    \r\n> look \r\nArmory - Sword Rack\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are swords laying around.\r\n\r\nThere is the swordstone weapon.\r\nExits: east.\r\nPlayer has 16 life points.\r\n```\r\nNow, you get to the Armor Corner and get yourself an iron armor\r\n\r\n```\r\n> look \r\nArmory - Armor Corner\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are sets of armor hanged on the wall\r\n\r\nThere is the iron armor armor.\r\nExits: east, west.\r\nPlayer has the swordstone weapon.\r\nPlayer has 16 life points.\r\n> get \r\nArmory - Armor Corner\r\nYou are at the armory. There are plenty of\r\nsupplies around.\r\nThere are sets of armor hanged on the wall\r\n\r\nExits: east, west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nLet's try to kill the Ogre now!\r\n\r\n```\r\n> move east\r\n> look \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 16 life points.\r\n> attack \r\n> attack \r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nExits: west.\r\nPlayer has the swordstone weapon.\r\nPlayer has the iron armor armor.\r\nPlayer has 6 life points.\r\n\r\n```\r\n\r\n\r\nCongratulations, you defeated quite a powerful monster!\r\n\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Armor Items\r\n\r\nDo you want more options for your character? Well, you are in luck, because now you can find armour scattered around the dungeons.\r\n\r\nJust start, look for an armory and get yourself something nice.\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are plenty of supplies around. \r\nThere is the swordstone weapon\r\nThere is the iron shield\r\nThere is the iron armor\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with all the items in the room\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are plenty of supplies around. \r\nThere is the iron shield\r\nThere is the iron armor\r\nPlayer has the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> get \r\n\r\nArmory\r\nYou are at the armory. There are plenty of supplies around. \r\nThere is the iron armor\r\nPlayer has the swordstone weapon\r\nPlayer has the iron shield\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> get \r\n\r\nArmory\r\nYou are at the armory. There are plenty of supplies around. \r\nPlayer has the swordstone weapon\r\nPlayer has the iron shield\r\nPlayer has the iron armor\r\nExits: east\r\nPlayer has 16 life points.\r\n```\r\nNow, let's test the armour!\r\n\r\n```\r\n>east\r\n\r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: east, west.\r\nPlayer has 16 life points.\r\n\r\n```\r\nThe monster deals 20 damage per hit. Fortunately, your armor provides plenty of defense\r\n\r\n```    \r\n>attack\r\n\r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: east, west.\r\nPlayer has 8 life points.\r\n\r\n> attack\r\n\r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nExits: east, west.\r\nPlayer has 8 life points.\r\n```\r\n\r\nCongratulations, you defeated quite a powerful monster!\r\n\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Armor Items\r\n\r\nDo you want more options for your character? Well, you are in luck, because now you can find armour scattered around the dungeons.\r\n\r\nJust start, look for an armory and get yourself something nice.\r\n\r\n```\r\n> look \r\nArmory\r\nYou are at the armory. There are plenty of supplies around. \r\nThere is the swordstone weapon\r\nThere is the iron shield\r\nThere is the iron armor\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou decide to equip yourself with all the items in the room\r\n\r\n```\r\n> get \r\nArmory\r\nYou are at the armory. There are plenty of supplies around. \r\nThere is the iron shield\r\nThere is the iron armor\r\nPlayer has the swordstone weapon\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> get \r\n\r\nArmory\r\nYou are at the armory. There are plenty of supplies around. \r\nThere is the iron armor\r\nPlayer has the swordstone weapon\r\nPlayer has the iron shield\r\nExits: east\r\nPlayer has 16 life points.\r\n\r\n> get \r\n\r\nArmory\r\nYou are at the armory. There are plenty of supplies around. \r\nPlayer has the swordstone weapon\r\nPlayer has the iron shield\r\nPlayer has the iron armor\r\nExits: east\r\nPlayer has 16 life points.\r\n```\r\nNow, let's test the armour!\r\n\r\n```\r\n>east\r\n\r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: east, west.\r\nPlayer has 16 life points.\r\n\r\n```\r\nThe monster deals 20 damage per hit. Fortunately, your armor provides plenty of defense\r\n\r\n```    \r\n>attack\r\n\r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nThere is the Ogre monster.\r\nExits: east, west.\r\nPlayer has 8 life points.\r\n\r\n>attack\r\n\r\nOgre's lair\r\nYou entered the Ogre's lair, be careful!\r\nExits: east, west.\r\nPlayer has 8 life points.\r\n```\r\n\r\nCongratulations, you defeated quite a powerful monster!\r\n\r\n\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff: "",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "RemovedFromProjectEvent"
        },
        {
          __typename: "RenamedTitleEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "UnlabeledEvent"
        },
        {
          __typename: "AddedToProjectEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 93,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/93",
            merged: false,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/93#pullrequestreview-183360744",
                  author: {
                    login: "drpicox"
                  },
                  state: "CHANGES_REQUESTED"
                }
              ]
            },
            mergedBy: null,
            mergeCommit: null
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "ReferencedEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 95,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/95",
            merged: false,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/95#pullrequestreview-183366341",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: null,
            mergeCommit: null
          }
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 96,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/96",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/96#pullrequestreview-183367466",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/9de2e2a2cfe1d054705acfb11aaee8d1e104f0b1"
            }
          }
        },
        {
          __typename: "ReferencedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-3"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  },
  {
    title: "Multilock Doors",
    number: 94,
    url: "https://github.com/TC-LS2/adventure-game-dublin/issues/94",
    repository: {
      url: "https://github.com/TC-LS2/adventure-game-dublin",
      name: "adventure-game-dublin"
    },
    author: {
      login: "drpicox"
    },
    body:
      "# Multilock Doors\r\n\r\nAn adventurer stored his treasure in his hideout. To avoid anyone stealing it, he put extra locks on the door. However, he lost the keys, and we can find all the keys to open the door to the hideout.\r\n\r\n## Opening a door which requires multiple keys\r\n\r\n```\r\n> look \r\nForest\r\nYou are surounded by trees. There are multiple paths to take.\r\nExits: east, north, west.\r\nPlayer has 16 life points.\r\n```\r\nLet's head to the village to see what we find.\r\n\r\n```\r\n> move east\r\n> look \r\nVillage\r\nYou are in a small village. There's not many people around.\r\nThere is the hideout key.\r\nExits: west.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nOh boy! You found a very interesting key. Let's find the door it opens.\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n```\r\nIt seems another key is needed. Let's look for it!\r\n\r\n```\r\n> move south\r\n> move west\r\nFountain\r\nThere's a fountain to the side of the road. \r\nThere is the secondary hideout key\r\nExits: east.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n```\r\n\r\nLet's take this key an try the door now.\r\n\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer gas the secondary hideout key\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout\r\nYou are inside the hideout.\r\nThere is the Durandal weapon.\r\nExits: south.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nYes! The treasure is yours!\r\n\r\n\r\n## Opening a door which requires multiple keys (alternative)\r\n\r\nYou might think \"the door might only require one key, and it happened to be the secondary key\". Well, you are wrong, because it works the same when getting the keys in the opposite order:\r\n\r\n```\r\n> look \r\nForest\r\nYou are surounded by trees. There are multiple paths to take.\r\nExits: east, north, west.\r\nPlayer has 16 life points.\r\n```\r\nLet's go to the fountain this time\r\n\r\n```\r\n> move west\r\n> look \r\nFountain\r\nThere's a fountain to the side of the road. \r\nThere is the secondary hideout key\r\nExits: east.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nLet's take this key and try to enter the hideout\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the secondary hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIt seems you can't enter. Let's try to get the other key:\r\n```\r\n> move south\r\n> move east\r\n> look \r\nVillage\r\nYou are in a small village. There's not many people around.\r\nThere is the hideout key.\r\nExits: west.\r\nPlayer has 16 life points.\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has the secondary hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout\r\nYou are inside the hideout.\r\nThere is the Durandal weapon.\r\nExits: south.\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou got the treasure! And there was no other way but getting both keys.\r\n",
    userContentEdits: {
      nodes: [
        {
          diff:
            "# Multilock Doors\r\n\r\nAn adventurer stored his treasure in his hideout. To avoid anyone stealing it, he put extra locks on the door. However, he lost the keys, and we can find all the keys to open the door to the hideout.\r\n\r\n## Opening a door which requires multiple keys\r\n\r\n```\r\n> look \r\nForest\r\nYou are surounded by trees. There are multiple paths to take.\r\nExits: east, north, west.\r\nPlayer has 16 life points.\r\n```\r\nLet's head to the village to see what we find.\r\n\r\n```\r\n> move east\r\n> look \r\nVillage\r\nYou are in a small village. There's not many people around.\r\nThere is the hideout key.\r\nExits: west.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nOh boy! You found a very interesting key. Let's find the door it opens.\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n```\r\nIt seems another key is needed. Let's look for it!\r\n\r\n```\r\n> move south\r\n> move west\r\nFountain\r\nThere's a fountain to the side of the road. \r\nThere is the secondary hideout key\r\nExits: east.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n```\r\n\r\nLet's take this key an try the door now.\r\n\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer gas the secondary hideout key\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout\r\nYou are inside the hideout.\r\nThere is the Durandal weapon.\r\nExits: south.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nYes! The treasure is yours!\r\n\r\n\r\n## Opening a door which requires multiple keys (alternative)\r\n\r\nYou might think \"the door might only require one key, and it happened to be the secondary key\". Well, you are wrong, because it works the same when getting the keys in the opposite order:\r\n\r\n```\r\n> look \r\nForest\r\nYou are surounded by trees. There are multiple paths to take.\r\nExits: east, north, west.\r\nPlayer has 16 life points.\r\n```\r\nLet's go to the fountain this time\r\n\r\n```\r\n> move west\r\n> look \r\nFountain\r\nThere's a fountain to the side of the road. \r\nThere is the secondary hideout key\r\nExits: east.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nLet's take this key and try to enter the hideout\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the secondary hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIt seems you can't enter. Let's try to get the other key:\r\n```\r\n> move south\r\n> move east\r\n> look \r\nVillage\r\nYou are in a small village. There's not many people around.\r\nThere is the hideout key.\r\nExits: west.\r\nPlayer has 16 life points.\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has the secondary hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout\r\nYou are inside the hideout.\r\nThere is the Durandal weapon.\r\nExits: south.\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou got the treasure! And there was no other way but getting both keys.\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Multilock Doors\r\n\r\nAn adventurer stored his treasure in his hideout. To avoid anyone stealing it, he put extra locks on the door. However, he lost the keys, and we can find all the keys to open the door to the hideout.\r\n\r\n## Opening a door which requires multiple keys\r\n\r\n```\r\n> look \r\nForest\r\nYou are surounded by trees. There are multiple paths to take.\r\nExits: east, north, west.\r\nPlayer has 16 life points.\r\n```\r\nLet's head to the village to see what we find.\r\n\r\n```\r\n> move east\r\n> look \r\nVillage\r\nYou are in a small village. There's not many people around.\r\nThere is the hideout key.\r\nExits: west.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nOh boy! You found a very interesting key. Let's find the door it opens.\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n```\r\nIt seems another key is needed. Let's look for it!\r\n\r\n```\r\n> move south\r\n> move west\r\nFountain\r\nThere's a fountain to the side of the road. \r\nThere is the secondary hideout key\r\nExits: east.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n```\r\n\r\nLet's take this key an try the door now.\r\n\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer gas the secondary hideout key\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout\r\nYou are inside the hideout.\r\nThere is the Durandal weapon.\r\nExits: south.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nYes! The treasure is yours!\r\n\r\n\r\n## Opening a door which requires multiple keys (alternative)\r\n\r\nYou might think \"the door might only require one key, and it happened to be the secondary key\". Well, you are wrong, because it works the same when getting the keys in the opposite order:\r\n\r\n```\r\n> look \r\nForest\r\nYou are surounded by trees. There are multiple paths to take.\r\nExits: east, north, west.\r\nPlayer has 16 life points.\r\n```\r\nLet's go to the fountain this time\r\n\r\n```\r\n> move west\r\n> look \r\nFountain\r\nThere's a fountain to the side of the road. \r\nThere is the secondary hideout key\r\nExits: east.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nLet's take this key and try to enter the hideout\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the secondary hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nIt seems you can't enter. Let's try to get the other key:\r\n\r\n> move south\r\n> move east\r\n> look \r\nVillage\r\nYou are in a small village. There's not many people around.\r\nThere is the hideout key.\r\nExits: west.\r\nPlayer has 16 life points.\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has the secondary hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout\r\nYou are inside the hideout.\r\nThere is the Durandal weapon.\r\nExits: south.\r\nPlayer has 16 life points.\r\n\r\n```\r\nYou got the treasure! And there was no other way but getting both keys.\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Multilock Doors\r\n\r\nAn adventurer stored his treasure in his hideout. To avoid anyone stealing it, he put extra locks on the door. However, he lost the keys, and we can find all the keys to open the door to the hideout.\r\n\r\n## Opening a door which requires multiple keys\r\n\r\n```\r\n> look \r\nForest\r\nYou are surounded by trees. There are multiple paths to take.\r\nExits: east, north, west.\r\nPlayer has 16 life points.\r\n```\r\nLet's head to the village to see what we find.\r\n\r\n```\r\n> move east\r\n> look \r\nVillage\r\nYou are in a small village. There's not many people around.\r\nThere is the hideout key.\r\nExits: west.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nOh boy! You found a very interesting key. Let's find the door it opens.\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n```\r\nIt seems another key is needed. Let's look for it!\r\n\r\n```\r\n> move south\r\n> move west\r\nFountain\r\nThere's a fountain to the side of the road. \r\nThere is the secondary hideout key\r\nExits: east.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n```\r\n\r\nLet's take this key an try the door now.\r\n\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer gas the secondary hideout key\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout\r\nYou are inside the hideout.\r\nThere is the Durandal weapon.\r\nExits: south.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nYes! The treasure is yours!\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Multilock Doors\r\n\r\nAn adventurer stored his treasure in his hideout. To avoid anyone stealing it, he put extra locks on the door. However, he lost the keys, and we can find all the keys to open the door to the hideout.\r\n\r\n## Opening a door which requires multiple keys\r\n\r\n```\r\n> look \r\nForest\r\nYou are surounded by trees. There are multiple paths to take.\r\nExits: east, north, west.\r\nPlayer has 16 life points.\r\n```\r\nLet's head to the village to see what we find.\r\n\r\n```\r\n> move east\r\n> look \r\nVillage\r\nYou are in a small village. There's not many people around.\r\nThere is the hideout key.\r\nExits: west.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nOh boy! You found a very interesting key. Let's find the door it opens.\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n```\r\nIt seems another key is needed. Let's look for it!\r\n\r\n```\r\n> move south\r\n> move west\r\nFountain\r\nThere's a fountain to the side of the road. \r\nThere is the secondary hideout key\r\nExits: east.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n```\r\n\r\nLet's take this key an try the door now.\r\n\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer gas the secondary hideout key\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout\r\nYou are inside the hideout.\r\nThere is the Durandal weapon item.\r\nExits: south.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nYes! The treasure is yours!\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Multilock Doors\r\n\r\nAn adventurer stored his treasure in his hideout. To avoid anyone stealing it, he put extra locks on the door. However, he lost the keys, and we can find all the keys to open the door to the hideout.\r\n\r\n## Opening a door which requires multiple keys\r\n\r\n```\r\n> look \r\nForest\r\nYou are surounded by trees. There are multiple paths to take.\r\nExits: east, north, west.\r\nPlayer has 16 life points.\r\n```\r\nLet's head to the village to see what we find.\r\n\r\n```\r\n> move east\r\n> look \r\nVillage\r\nYou are in a small village. There's not many people around.\r\nThere is the hideout key.\r\nExits: west.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nOh boy! You found a very interesting key. Let's find the door it opens.\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n```\r\nIt seems another key is needed. Let's look for it!\r\n\r\n```\r\n> move south\r\n> move west\r\nFountain\r\nThere's a fountain to the side of the road. \r\nThere is the secondary hideout key\r\nExits: east.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n```\r\n\r\nLet's take this key an try the door now.\r\n\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer gas the secondary hideout key\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout\r\nYou are inside the hideout.\r\nThere is the gleaming treasure item.\r\nExits: south.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nYes! The treasure is yours!\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff:
            "# Multilock Doors\r\n\r\nAn adventurer stored his treasure in his hideout. To avoid anyone stealing it, he put extra locks on the door. However, he lost the keys, and we can find all the keys to open the door to the hideout.\r\n\r\n## Opening a door which requires multiple keys\r\n\r\n```\r\n> look \r\nForest\r\nYou are surounded by trees. There are multiple paths to take.\r\n\r\nExits: east, north, west.\r\nPlayer has 16 life points.\r\n```\r\nLet's head to the village to see what we find.\r\n\r\n```\r\n> move east\r\n> look \r\nVillage\r\nYou are in a small village. There's not many people around.\r\nThere is the hideout key.\r\nExits: west.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nOh boy! You found a very interesting key. Let's find the door it opens.\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n\r\n```\r\nIt seems another key is needed. Let's look for it!\r\n\r\n```\r\n> move south\r\n> move west\r\nFountain\r\nThere's a fountain to the side of the road. \r\nThere is the secondary hideout key\r\nExits: east.\r\nPlayer has the hideout key.\r\nPlayer has 16 life points.\r\n```\r\n\r\nLet's take this key an try the door now.\r\n\r\n```\r\n>get\r\n> move west\r\n> move north\r\nHideout Entrance\r\nYou are in front a reinforced gate. It has several locks on it.\r\nExits: south.\r\nPlayer has the hideout key.\r\nPlayer gas the secondary hideout key\r\nPlayer has 16 life points.\r\n\r\n> move north\r\n\r\nHideout\r\nYou are inside the hideout.\r\nThere is the gleaming treasure item.\r\nExits: south.\r\nPlayer has 16 life points.\r\n\r\n```\r\n\r\nYes! The treasure is yours!\r\n",
          editor: {
            login: "drpicox"
          }
        },
        {
          diff: "",
          editor: {
            login: "drpicox"
          }
        }
      ]
    },
    timelineItems: {
      nodes: [
        {
          __typename: "ConvertedNoteToIssueEvent"
        },
        {
          __typename: "LabeledEvent"
        },
        {
          __typename: "AssignedEvent"
        },
        {
          __typename: "IssueComment"
        },
        {
          __typename: "ReferencedEvent"
        },
        {
          __typename: "CrossReferencedEvent",
          source: {
            __typename: "PullRequest",
            number: 98,
            url: "https://github.com/TC-LS2/adventure-game-dublin/pull/98",
            merged: true,
            author: {
              login: "drpicox"
            },
            repository: {
              url: "https://github.com/TC-LS2/adventure-game-dublin",
              name: "adventure-game-dublin"
            },
            reviews: {
              nodes: [
                {
                  url:
                    "https://github.com/TC-LS2/adventure-game-dublin/pull/98#pullrequestreview-183396997",
                  author: {
                    login: "drpicox"
                  },
                  state: "APPROVED"
                }
              ]
            },
            mergedBy: {
              login: "drpicox"
            },
            mergeCommit: {
              commitUrl:
                "https://github.com/TC-LS2/adventure-game-dublin/commit/e769af65b2f0c449d32823d61bb066359dd08f5c"
            }
          }
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Develop",
          projectColumnName: "Review"
        },
        {
          __typename: "ReferencedEvent"
        },
        {
          __typename: "MovedColumnsInProjectEvent",
          actor: {
            login: "drpicox"
          },
          previousProjectColumnName: "Review",
          projectColumnName: "Merged"
        }
      ]
    },
    labels: {
      nodes: [
        {
          name: "weight-5"
        }
      ]
    },
    projectCards: {
      nodes: [
        {
          column: {
            name: "Merged"
          }
        }
      ]
    }
  }
];
