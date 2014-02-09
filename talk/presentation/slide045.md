            ____                         ______                 __  _
           /  _/___  ____  ___  _____   / ____/_  ______  _____/ /_(_)___  ____  _____
           / // __ \/ __ \/ _ \/ ___/  / /_  / / / / __ \/ ___/ __/ / __ \/ __ \/ ___/
         _/ // / / / / / /  __/ /     / __/ / /_/ / / / / /__/ /_/ / /_/ / / / (__  )
        /___/_/ /_/_/ /_/\___/_/     /_/    \__,_/_/ /_/\___/\__/_/\____/_/ /_/____/

        Person.prototype.fullNameTwice = function () {
          var doubleFullName = function () {
            var value = this.fullName();
            return value + " " + value;
          };

          return doubleFullName();
        }

        var scarlett = new Person('Scarlett', 'Johansson');

        scarlett.fullNameTwice()
        // TypeError: Object [object global] has no method 'fullName'
        // WAT
















































































slide 045
