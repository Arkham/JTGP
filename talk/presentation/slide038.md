            _   __
           / | / /__ _      __
          /  |/ / _ \ | /| / /
         / /|  /  __/ |/ |/ /
        /_/ |_/\___/|__/|__/

        var Person = function (first, last) {
          this.first = first;
          this.last = last;

          this.fullName = function () {
            return this.first + " " + this.last;
          };

          this.fullNameReversed = function () {
            return this.last + " " + this.first;
          };
        };

        var beppe = new Person('Giuseppe', 'Garibaldi');

        beppe.fullName()
        // 'Giuseppe Garibaldi'

        beppe.fullNameReversed()
        // 'Garibaldi Giuseppe'
















































































slide 038
