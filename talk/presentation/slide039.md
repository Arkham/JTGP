            ____             __        __
           / __ \_________  / /_____  / /___  ______  ___
          / /_/ / ___/ __ \/ __/ __ \/ __/ / / / __ \/ _ \
         / ____/ /  / /_/ / /_/ /_/ / /_/ /_/ / /_/ /  __/
        /_/   /_/   \____/\__/\____/\__/\__, / .___/\___/
                                       /____/_/
        var Person = function (first, last) {
          this.first = first;
          this.last = last;
        };

        Person.prototype.fullName = function () {
          return this.first + " " + this.last;
        };

        Person.prototype.fullNameReversed = function () {
          return this.last + " " + this.first;
        };

        var scarlett = new Person('Scarlett', 'Johansson');

        scarlett.fullName()
        // 'Scarlett Johansson'

        scarlett.fullNameReversed()
        // 'Johansson Scarlett'
















































































slide 039
