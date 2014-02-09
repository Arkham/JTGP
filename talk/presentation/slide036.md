           ____  ____  ____
          / __ \/ __ \/ __ \
         / / / / / / / /_/ /
        / /_/ / /_/ / ____/
        \____/\____/_/

        var makePerson = function (first, last) {
          return {
            first: first,
            last: last,
            fullName: function () {
              return this.first + " " + this.last;
            },
            fullNameReversed: function () {
              return this.last + " " + this.first;
            }
          };
        };

        var aaron = makePerson('Aaron', 'Patterson');

        aaron.fullName()
        // 'Aaron Patterson'

        aaron.fullNameReversed()
        // 'Patterson Aaron'
















































































slide 036
