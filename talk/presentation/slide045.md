            ____                         ______                 __  _
           /  _/___  ____  ___  _____   / ____/_  ______  _____/ /_(_)___  ____  _____
           / // __ \/ __ \/ _ \/ ___/  / /_  / / / / __ \/ ___/ __/ / __ \/ __ \/ ___/
         _/ // / / / / / /  __/ /     / __/ / /_/ / / / / /__/ /_/ / /_/ / / / (__  )
        /___/_/ /_/_/ /_/\___/_/     /_/    \__,_/_/ /_/\___/\__/_/\____/_/ /_/____/

        var add = function (a, b) {
          if (typeof b === 'undefined') {
            return function (x) {
              return a + x;
            }
          } else {
            return a + b;
          }
        };

        add(1, 3)
        // 4

        var addFour = add(4);

        addFour(99)
        // 103

        var subtractFifteen = add(-15);

        subtractFifteen(100)
        // 85
















































































slide 045