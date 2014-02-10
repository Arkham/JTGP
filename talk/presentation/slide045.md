            ____                         ______                 __  _
           /  _/___  ____  ___  _____   / ____/_  ______  _____/ /_(_)___  ____  _____
           / // __ \/ __ \/ _ \/ ___/  / /_  / / / / __ \/ ___/ __/ / __ \/ __ \/ ___/
         _/ // / / / / / /  __/ /     / __/ / /_/ / / / / /__/ /_/ / /_/ / / / (__  )
        /___/_/ /_/_/ /_/\___/_/     /_/    \__,_/_/ /_/\___/\__/_/\____/_/ /_/____/

        var makeAdder = function (a) {
          return function (b) {
            return a + b;
          };
        };

        var addFour = makeAdder(4);

        addFour(38)
        // 42

        addFour(23)
        // 27

        var subtractFifteen = makeAdder(-15);

        subtractFifteen(100)
        // 85
















































































slide 045
